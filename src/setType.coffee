
setProto = require "setProto"

module.exports = (value, type) ->
  if type and type.prototype then setProto value, type.prototype
  else if type is null then setProto value, null
  return value
