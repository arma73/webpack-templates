/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: "development" | "production";
        readonly PUBLIC_URL: string;
    }
}

declare module "*.m.css" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.m.scss" {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module "*.m.sass" {
    const classes: { readonly [key: string]: string };
    export default classes;
}
