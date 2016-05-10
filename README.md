
# setType 1.0.0 ![stable](https://img.shields.io/badge/stability-stable-4EBA0F.svg?style=flat)

Set the `__proto__` of any value to the `prototype` of any constructor.

```coffee
setType = require "setType"

foo = {}

foo.__proto__ # Object.prototype

setType foo, null

foo.__proto__ # null

setType foo, MyClass

foo.__proto__ # MyClass.prototype
```
