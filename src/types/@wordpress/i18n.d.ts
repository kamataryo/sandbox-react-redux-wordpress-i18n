declare module "@wordpress/i18n" {
  export function sprintf(msg: string, ...args: any[]): string;
  export function __(msgid: string, domain: string): string;
  export function setLocaleData(data: Jed, domain: string): void;
}

declare type Jed = {
  [msgid: string]: Array;
};
