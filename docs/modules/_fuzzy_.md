**[@utility/tools](../README.md)**

[Globals](../globals.md) › ["fuzzy"](_fuzzy_.md)

# External module: "fuzzy"

## Index

### Functions

* [fuzzy](_fuzzy_.md#fuzzy)
* [search](_fuzzy_.md#search)
* [sortBy](_fuzzy_.md#sortby)

## Functions

###  fuzzy

▸ **fuzzy**<**T**>(`text`: string, `parents`: T[], `options`: object): *Pick‹T, keyof T›[]*

*Defined in [fuzzy.ts:87](https://github.com/Wimjiang/utility/blob/87b2a56/src/fuzzy.ts#L87)*

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

**Parameters:**

▪ **text**: *string*

搜索字符

▪ **parents**: *T[]*

搜索对象

▪ **options**: *object*

OPTIONS 配置项

Name | Type |
------ | ------ |
`key` | keyof T |
`keys?` | keyof T[] |
`splitType?` | undefined \| string |

**Returns:** *Pick‹T, keyof T›[]*

___

###  search

▸ **search**<**T**, **K**>(`searchValues`: string[], `idx`: number, `parents`: T[], `selects`: T[K][], `key`: K, `keys?`: K[]): *void*

*Defined in [fuzzy.ts:14](https://github.com/Wimjiang/utility/blob/87b2a56/src/fuzzy.ts#L14)*

递归 搜索

**Type parameters:**

▪ **T**: *object*

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`searchValues` | string[] | text array 搜索值 |
`idx` | number | 递归次数 |
`parents` | T[] | - |
`selects` | T[K][] | - |
`key` | K | - |
`keys?` | K[] |   |

**Returns:** *void*

___

###  sortBy

▸ **sortBy**<**T**, **K**>(`params`: T[], `dimensions`: T[K][], `key`: K): *T[]*

*Defined in [fuzzy.ts:50](https://github.com/Wimjiang/utility/blob/87b2a56/src/fuzzy.ts#L50)*

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