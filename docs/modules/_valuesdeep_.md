**[@utility/tools](../README.md)**

[Globals](../globals.md) › ["valuesDeep"](_valuesdeep_.md)

# External module: "valuesDeep"

## Index

### Functions

* [vals](_valuesdeep_.md#vals)
* [valuesDeep](_valuesdeep_.md#valuesdeep)

## Functions

###  vals

▸ **vals**(`parent`: object, `index`: number, `value`: any[]): *void*

*Defined in [valuesDeep.ts:33](https://github.com/Wimjiang/utility/blob/87b2a56/src/valuesDeep.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | object |
`index` | number |
`value` | any[] |

**Returns:** *void*

___

###  valuesDeep

▸ **valuesDeep**(`value`: any[] | object): *any[]*

*Defined in [valuesDeep.ts:15](https://github.com/Wimjiang/utility/blob/87b2a56/src/valuesDeep.ts#L15)*

获取对象的 value

**`export`** 

**`example`** 

valuesDeep({a: 1, b: [{c: 1}]})
// => [1, 2]

**Parameters:**

Name | Type |
------ | ------ |
`value` | any[] \| object |

**Returns:** *any[]*