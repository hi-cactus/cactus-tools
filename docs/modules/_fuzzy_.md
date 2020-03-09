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

*Defined in [fuzzy.ts:62](https://github.com/Wimjiang/utility/blob/fefcd28/src/fuzzy.ts#L62)*

#### Type declaration:

* **key**: *string*

* **keys**? : *string[]*

* **splitType**? : *undefined | string*

## Functions

###  fuzzy

▸ **fuzzy**<**T**, **K**>(`text`: string, `parents`: T[], `options`: object): *Pick‹T, K›[]*

*Defined in [fuzzy.ts:92](https://github.com/Wimjiang/utility/blob/fefcd28/src/fuzzy.ts#L92)*

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

**Type parameters:**

▪ **T**: *object*

▪ **K**: *keyof T*

**Parameters:**

▪ **text**: *string*

搜索字符

▪ **parents**: *T[]*

搜索对象

▪ **options**: *object*

OPTIONS 配置项

Name | Type |
------ | ------ |
`key` | K |
`keys?` | K[] |
`splitType?` | undefined \| string |

**Returns:** *Pick‹T, K›[]*

___

###  search

▸ **search**<**T**, **K**>(`searchs`: string[], `key`: number, `parents`: T[], `selects`: T[K][], `id`: K): *void*

*Defined in [fuzzy.ts:12](https://github.com/Wimjiang/utility/blob/fefcd28/src/fuzzy.ts#L12)*

**Type parameters:**

▪ **T**: *object*

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`searchs` | string[] |
`key` | number |
`parents` | T[] |
`selects` | T[K][] |
`id` | K |

**Returns:** *void*

___

###  sortBy

▸ **sortBy**<**T**, **K**>(`params`: T[], `dimensions`: T[K][], `key`: K): *T[]*

*Defined in [fuzzy.ts:49](https://github.com/Wimjiang/utility/blob/fefcd28/src/fuzzy.ts#L49)*

**Type parameters:**

▪ **T**: *object*

▪ **K**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`params` | T[] |
`dimensions` | T[K][] |
`key` | K |

**Returns:** *T[]*