
# setType v1.0.0

```coffee
setType = require "setType"

foo = {}

foo.__proto__ # Object.prototype

setType foo, null

foo.__proto__ # null

setType foo, MyClass

foo.__proto__ # MyClass.prototype
```

## install

```sh
npm install aleclarson/setType#1.0.0
```
