TypeScript Webpack "eval-source-map" Show Source in Error Stack Demo
=====================================================================

当把webpack的`devtool`设为`eval-source-map`，生成的bundle代码中将包含最详细的源代码信息。

```
npm install
npm run demo
```

```
Error: my-error
    at hello (webpack-internal:///./entry.ts:4:11)
    at eval (webpack-internal:///./entry.ts:6:1)
    at Object../entry.ts (/dev/typescript-webpack---eval-source-map--show-source-in-error-stack-demo/dist/bundle.js:97:1)
    at __webpack_require__ (/dev/typescript-webpack---eval-source-map--show-source-in-error-stack-demo/dist/bundle.js:20:30)
```
