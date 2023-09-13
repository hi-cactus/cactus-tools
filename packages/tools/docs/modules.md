[@cactus/tools](README.md) / Exports

# @cactus/tools

## Table of contents

### References

- [fuzzy](modules.md#fuzzy)
- [isArray](modules.md#isarray)
- [isBoolean](modules.md#isboolean)
- [isFunction](modules.md#isfunction)
- [isNull](modules.md#isnull)
- [isNumber](modules.md#isnumber)
- [isObject](modules.md#isobject)
- [isString](modules.md#isstring)
- [isUndefined](modules.md#isundefined)
- [pick](modules.md#pick)
- [values](modules.md#values)
- [valuesDeep](modules.md#valuesdeep)

### Variables

- [default](modules.md#default)

## References

### fuzzy

Renames and re-exports [__type](modules.md#__type)

___

### isArray

Renames and re-exports [__type](modules.md#__type)

___

### isBoolean

Renames and re-exports [__type](modules.md#__type)

___

### isFunction

Renames and re-exports [__type](modules.md#__type)

___

### isNull

Renames and re-exports [__type](modules.md#__type)

___

### isNumber

Renames and re-exports [__type](modules.md#__type)

___

### isObject

Renames and re-exports [__type](modules.md#__type)

___

### isString

Renames and re-exports [__type](modules.md#__type)

___

### isUndefined

Renames and re-exports [__type](modules.md#__type)

___

### pick

Renames and re-exports [__type](modules.md#__type)

___

### values

Renames and re-exports [__type](modules.md#__type)

___

### valuesDeep

Renames and re-exports [__type](modules.md#__type)

## Variables

### default

• `Const` **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fuzzy` | <T\>(`text`: `string`, `parents`: `T`[], `options`: { `key`: keyof `T` ; `keys?`: keyof `T`[] ; `splitType?`: `string`  }) => `Pick`<`T`, keyof `T`\>[] |
| `isArray` | (`value`: `any`) => value is any[] |
| `isBoolean` | (`value`: `any`) => value is boolean |
| `isFunction` | (`value`: `any`) => value is Function |
| `isNull` | (`value`: `any`) => value is null |
| `isNumber` | (`value`: `any`) => value is number |
| `isObject` | (`value`: `any`) => value is object |
| `isString` | (`value`: `any`) => value is string |
| `isUndefined` | (`value`: `any`) => value is undefined |
| `pick` | <T, K\>(`parent`: `T`, `props?`: `K`[]) => `Pick`<`T`, `K`\> |
| `values` | (`value`: `object` \| `any`[]) => `any`[] |
| `valuesDeep` | (`value`: `object` \| `any`[]) => `any`[] |

#### Defined in

[index.ts:16](https://github.com/hi-cactus/cactus-tools/blob/1a456a5/src/index.ts#L16)
