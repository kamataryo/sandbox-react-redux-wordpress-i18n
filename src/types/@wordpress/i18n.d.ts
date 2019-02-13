declare module '@wordpress/i18n' {
    export function __( msgid: string, domain: string ): string;
    export function setLocaleData( data: object, domain: string ): void;
}
