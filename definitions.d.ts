declare module '*.module.css' {
  const classes: { readonly [key: string]: string };

  export default classes;
}

declare module '*.css' {
  const filePath: string;

  export default filePath;
}
