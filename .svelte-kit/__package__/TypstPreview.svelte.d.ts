export default TypstPreview;
type TypstPreview = SvelteComponent<{
    reader: any;
    writer: any;
    initPreview?: ((path: any) => Promise<void>) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> & {
    $$bindings?: string | undefined;
} & {
    initPreview: (path: any) => Promise<void>;
};
declare const TypstPreview: $$__sveltets_2_IsomorphicComponent<{
    reader: any;
    writer: any;
    initPreview?: ((path: any) => Promise<void>) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {
    initPreview: (path: any) => Promise<void>;
}, string>;
interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import("svelte").ComponentConstructorOptions<Props>): import("svelte").SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
