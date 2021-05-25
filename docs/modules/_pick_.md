**[@utility/tools](../README.md)**

[Globals](../globals.md) › ["pick"](_pick_.md)

# External module: "pick"

## Index

### Type aliases

* [Many](_pick_.md#many)

### Functions

* [pick](_pick_.md#pick)

## Type aliases

###  Many

Ƭ **Many**: *T | ReadonlyArray‹T›*

*Defined in [pick.ts:1](https://github.com/Wimjiang/utility/blob/86b87bc/src/pick.ts#L1)*

## Functions

###  pick

▸ **pick**<**T**, **K**>(`parent`: T, `props?`: K[]): *Pick‹T, K›*

*Defined in [pick.ts:15](https://github.com/Wimjiang/utility/blob/86b87bc/src/pick.ts#L15)*

创建一个从 object 中选中的属性的对象。

>> 不改变原对象

**`export`** 

**Type parameters:**

▪ **T**: *__type*

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parent` | T | 原对象 |
`props?` | K[] | 属性名 |

**Returns:** *Pick‹T, K›*