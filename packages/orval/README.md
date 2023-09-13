# @cactus/orval

`orval` is able to generate client with appropriate type-signatures (TypeScript) from any valid OpenAPI v3 or Swagger v2 specification, either in `yaml` or `json` formats.

clone from [orval](https://github.com/anymaniax/orval)

### Installing

```bash
$ npm install @cactus/orval
```

### Usage

new config file `orval.config.js` in project root directory

```js
module.exports = {
  'petstore-file': {
    output: {
      // out api file name
      target: './src/generated/api.ts',
      // out typescript model file name
      schemas: './src/generated/model',
      override: {
        mutator: {
          // use http request path
          path: './src/http/index.ts',
          // use http request name
          name: 'http',
        },
      },
      mock: false,
      prettier: true,
    },
    input: {
      //
      target: './openapi.json',
    },
  },
};
```

```json
// package.json
{
  "scripts": {
    "orval": "orval"
  }
}
```

generate api

```bash
yarn orval

# or

npm run orval
```

### License

MIT
