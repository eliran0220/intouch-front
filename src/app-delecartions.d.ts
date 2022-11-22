
declare module '*.mp4' {
    const src: string;
    export default src;
}

declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare module "*.jpg" {
    const value: any;
    export = value;
}




