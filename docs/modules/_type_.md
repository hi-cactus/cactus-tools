**[@utility/tools](../README.md)**

[Globals](../globals.md) › ["type"](_type_.md)

# External module: "type"

## Index

### Enumerations

* [TYPE_MSG](../enums/_type_.type_msg.md)

### Variables

* [toString](_type_.md#const-tostring)

### Functions

* [getType](_type_.md#gettype)
* [isArray](_type_.md#isarray)
* [isBoolean](_type_.md#isboolean)
* [isFunction](_type_.md#isfunction)
* [isNull](_type_.md#isnull)
* [isNumber](_type_.md#isnumber)
* [isObject](_type_.md#isobject)
* [isString](_type_.md#isstring)
* [isUndefined](_type_.md#isundefined)

## Variables

### `Const` toString

• **toString**: *toString* =  Object.prototype.toString

*Defined in [type.ts:40](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L40)*

## Functions

###  getType

▸ **getType**(`value`: any): *keyof TYPE_MSG*

*Defined in [type.ts:33](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L33)*

Get the type of value

**`since`** 0.0.1

**`example`** 

getType('123')
// => string

getType(123)
// => number

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *keyof TYPE_MSG*

TYPE_MSG

___

###  isArray

▸ **isArray**(`value`: any): *boolean*

*Defined in [type.ts:61](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isBoolean

▸ **isBoolean**(`value`: any): *boolean*

*Defined in [type.ts:66](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L66)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isFunction

▸ **isFunction**(`value`: any): *boolean*

*Defined in [type.ts:71](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isNull

▸ **isNull**(`value`: any): *boolean*

*Defined in [type.ts:52](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isNumber

▸ **isNumber**(`value`: any): *boolean*

*Defined in [type.ts:47](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isObject

▸ **isObject**(`value`: any): *boolean*

*Defined in [type.ts:76](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isString

▸ **isString**(`value`: any): *boolean*

*Defined in [type.ts:42](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*

___

###  isUndefined

▸ **isUndefined**(`value`: any): *boolean*

*Defined in [type.ts:57](https://github.com/Wimjiang/utility/blob/cb35816/src/type.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *boolean*