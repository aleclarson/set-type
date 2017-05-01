
var setProto = require('setProto');

function setType(value, type) {
  if (type && type.prototype) {
    setProto(value, type.prototype);
  } else if (type === null) {
    setProto(value, null);
  }
  return value;
}

module.exports = setType;
