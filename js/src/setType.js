var setProto;

setProto = require("setProto");

module.exports = function(value, type) {
  if (type && type.prototype) {
    setProto(value, type.prototype);
  } else if (type === null) {
    setProto(value, null);
  }
  return value;
};

//# sourceMappingURL=../../map/src/setType.map
