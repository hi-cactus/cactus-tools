**[@utility/tools](../README.md)**

[Globals](../globals.md) › ["pick"](_pick_.md)

# External module: "pick"

## Index

### Functions

* [pick](_pick_.md#pick)
* [vals](_pick_.md#vals)

## Functions

###  pick

▸ **pick**(`parent`: object, `props?`: string[]): *object*

*Defined in [pick.ts:13](https://github.com/Wimjiang/utility/blob/f148596/src/pick.ts#L13)*

创建一个从 object 中选中的属性的对象。

>> 不改变原对象

**`export`** 

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parent` | object | 原对象 |
`props?` | string[] | 属性名 |

**Returns:** *object*

___

###  vals

▸ **vals**(`parent`: object, `props`: string[], `index`: number, `value`: object): *void*

*Defined in [pick.ts:22](https://github.com/Wimjiang/utility/blob/f148596/src/pick.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`parent` | object |
`props` | string[] |
`index` | number |
`value` | object |

**Returns:** *void*