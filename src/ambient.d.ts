declare module "*.module.css" {
  const exports: Record<string, string>;
  export default exports;
}

declare module "*.svg" {
  const exports: string;
  export default exports;
}
