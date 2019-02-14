const gettextParser = require('gettext-parser')
const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const writeFile = promisify(fs.writeFile)
const path = require('path')
const merge = require('merge-deep')

const LANG_PATH = path.join(__dirname, '..', 'src', 'languages')

const dryRun = process.argv[2] === '--dry-run'

const main = async () => {
  const files = await readdir(LANG_PATH)
  const poFiles = files.filter(x => x.indexOf('.po') === x.length - 3)
  const potFile = files.find(x => x.indexOf('.pot') === x.length - 4)
  const contents = await Promise.all(
    [potFile, ...poFiles].map(x => readFile(path.join(LANG_PATH, x))),
  )
  const [pot, ...pos] = contents.map(gettextParser.po.parse)
  const updatedPos = pos.map(po =>
    gettextParser.po.compile({
      ...pot,
      translations: merge(po.translations, pot.translations),
    }),
  )
  updatedPos.forEach((po, index) => {
    if (dryRun) {
      process.stdout.write(po.toString())
    } else {
      writeFile(path.join(LANG_PATH, poFiles[index]), po, 'utf-8')
    }
  })
}

// go
main()
