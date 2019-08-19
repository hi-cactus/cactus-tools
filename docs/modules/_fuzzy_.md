**[@utility/tools](../README.md)**

[Globals](../globals.md) › ["fuzzy"](_fuzzy_.md)

# External module: "fuzzy"

## Index

### Type aliases

* [OPTIONS](_fuzzy_.md#options)

### Functions

* [fuzzy](_fuzzy_.md#fuzzy)
* [search](_fuzzy_.md#search)
* [sortBy](_fuzzy_.md#sortby)

## Type aliases

###  OPTIONS

Ƭ **OPTIONS**: *object*

*Defined in [fuzzy.ts:60](https://github.com/Wimjiang/utility/blob/f148596/src/fuzzy.ts#L60)*

#### Type declaration:

* **key**: *string*

* **keys**? : *string[]*

## Functions

###  fuzzy

▸ **fuzzy**(`text`: string, `parents`: object[], `options`: [OPTIONS](_fuzzy_.md#options)): *object[]*

*Defined in [fuzzy.ts:88](https://github.com/Wimjiang/utility/blob/f148596/src/fuzzy.ts#L88)*

模糊搜索

  支持多字段搜索,通过;分隔 => 'first;second;third';
  返回第一个字段搜索的结果;
  后一个字段只对前一个字段的搜索结果进行排序,并置顶最接近的结果

**`since`** 0.0.1

**`example`** 

fuzzy('a', [{a:'aaaa'}, {a: 'bbb'}], {key: ''})
// => [{a:'aaaa'}]
fuzzy('first;second', [{a:'first,second',id; 1}, {a: 'first', id: 2}], {key: 'a'})
// => [{a:'first,second',id; 1}]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | 搜索字符 |
`parents` | object[] | 搜索对象 |
`options` | [OPTIONS](_fuzzy_.md#options) | OPTIONS 配置项 |

**Returns:** *object[]*

___

###  search

▸ **search**(`searchs`: string[], `key`: number, `parents`: object[], `selects`: any[], `id`: string): *void*

*Defined in [fuzzy.ts:12](https://github.com/Wimjiang/utility/blob/f148596/src/fuzzy.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`searchs` | string[] |
`key` | number |
`parents` | object[] |
`selects` | any[] |
`id` | string |

**Returns:** *void*

___

###  sortBy

▸ **sortBy**(`params`: object[], `dimensions`: string[], `key`: string): *object[]*

*Defined in [fuzzy.ts:47](https://github.com/Wimjiang/utility/blob/f148596/src/fuzzy.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`params` | object[] |
`dimensions` | string[] |
`key` | string |

**Returns:** *object[]*