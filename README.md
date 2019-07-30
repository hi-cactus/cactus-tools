# utility

Javascript Tools

```bash
$ npm install utility
```

#### Technical Documentation

- [Installing](#installing)
- [Usage](#usage)
- [Version](#version)
- [License](#license)

### Installing

```bash
$ npm install utility --save
```

### Usage

```javascript
import util from "utility";

// Fuzzy search
//
util.fuzzy("fuzzy", [{ text: "test" }, { text: "fuzzy" }]);
// => [{text: 'fuzzy'}]

// Gets the object values
util.values({ a: 1, b: 2 });
// => [1, 2]

// Gets all object values
util.valuesDeep({ a: { b: { c: 1 } }, d: 2 });
// => [1, 2]

// Create object by propertys
util.pick({ a: 1, b: 2, c: 3 }, ["a", "c"]);
// => {a: 1, c: 3}
util.pickBy({ a: 1, b: 2, c: 3 }, (o) => o > 1 ));
// => {b: 2, c: 3}


```

### Version

- [CHANGELOG](https://github.com/Wimjiang/utility/blob/master/CHANGELOG.md)

### License

ISC
