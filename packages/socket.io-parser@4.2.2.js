System.register(["@socket.io/component-emitter@3.1.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"],["socket.io-parser","4.2.2"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@socket.io/component-emitter@3.1.0', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/temp/socket.io-parser.4.2.2.js
var socket_io_parser_4_2_2_exports = {};
__export(socket_io_parser_4_2_2_exports, {
  Decoder: () => Decoder,
  Encoder: () => Encoder,
  PacketType: () => PacketType,
  protocol: () => protocol
});
module.exports = __toCommonJS(socket_io_parser_4_2_2_exports);

// node_modules/socket.io-parser/build/esm/is-binary.js
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && toString.call(Blob) === "[object BlobConstructor]";
var withNativeFile = typeof File === "function" || typeof File !== "undefined" && toString.call(File) === "[object FileConstructor]";
function isBinary(obj) {
  return withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)) || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File;
}
function hasBinary(obj, toJSON) {
  if (!obj || typeof obj !== "object") {
    return false;
  }
  if (Array.isArray(obj)) {
    for (let i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }
  if (isBinary(obj)) {
    return true;
  }
  if (obj.toJSON && typeof obj.toJSON === "function" && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }
  return false;
}

// node_modules/socket.io-parser/build/esm/binary.js
function deconstructPacket(packet) {
  const buffers = [];
  const packetData = packet.data;
  const pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length;
  return {
    packet: pack,
    buffers
  };
}
function _deconstructPacket(data, buffers) {
  if (!data) return data;
  if (isBinary(data)) {
    const placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (Array.isArray(data)) {
    const newData = new Array(data.length);
    for (let i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === "object" && !(data instanceof Date)) {
    const newData = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        newData[key] = _deconstructPacket(data[key], buffers);
      }
    }
    return newData;
  }
  return data;
}
function reconstructPacket(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  delete packet.attachments;
  return packet;
}
function _reconstructPacket(data, buffers) {
  if (!data) return data;
  if (data && data._placeholder === true) {
    const isIndexValid = typeof data.num === "number" && data.num >= 0 && data.num < buffers.length;
    if (isIndexValid) {
      return buffers[data.num];
    } else {
      throw new Error("illegal attachments");
    }
  } else if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === "object") {
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        data[key] = _reconstructPacket(data[key], buffers);
      }
    }
  }
  return data;
}

// node_modules/socket.io-parser/build/esm/index.js
var import_component_emitter = require("@socket.io/component-emitter@3.1.0");
var protocol = 5;
var PacketType;
(function (PacketType2) {
  PacketType2[PacketType2["CONNECT"] = 0] = "CONNECT";
  PacketType2[PacketType2["DISCONNECT"] = 1] = "DISCONNECT";
  PacketType2[PacketType2["EVENT"] = 2] = "EVENT";
  PacketType2[PacketType2["ACK"] = 3] = "ACK";
  PacketType2[PacketType2["CONNECT_ERROR"] = 4] = "CONNECT_ERROR";
  PacketType2[PacketType2["BINARY_EVENT"] = 5] = "BINARY_EVENT";
  PacketType2[PacketType2["BINARY_ACK"] = 6] = "BINARY_ACK";
})(PacketType || (PacketType = {}));
var Encoder = class {
  constructor(replacer) {
    this.replacer = replacer;
  }
  encode(obj) {
    if (obj.type === PacketType.EVENT || obj.type === PacketType.ACK) {
      if (hasBinary(obj)) {
        return this.encodeAsBinary({
          type: obj.type === PacketType.EVENT ? PacketType.BINARY_EVENT : PacketType.BINARY_ACK,
          nsp: obj.nsp,
          data: obj.data,
          id: obj.id
        });
      }
    }
    return [this.encodeAsString(obj)];
  }
  encodeAsString(obj) {
    let str = "" + obj.type;
    if (obj.type === PacketType.BINARY_EVENT || obj.type === PacketType.BINARY_ACK) {
      str += obj.attachments + "-";
    }
    if (obj.nsp && "/" !== obj.nsp) {
      str += obj.nsp + ",";
    }
    if (null != obj.id) {
      str += obj.id;
    }
    if (null != obj.data) {
      str += JSON.stringify(obj.data, this.replacer);
    }
    return str;
  }
  encodeAsBinary(obj) {
    const deconstruction = deconstructPacket(obj);
    const pack = this.encodeAsString(deconstruction.packet);
    const buffers = deconstruction.buffers;
    buffers.unshift(pack);
    return buffers;
  }
};
var Decoder = class extends import_component_emitter.Emitter {
  constructor(reviver) {
    super();
    this.reviver = reviver;
  }
  add(obj) {
    let packet;
    if (typeof obj === "string") {
      if (this.reconstructor) {
        throw new Error("got plaintext data when reconstructing a packet");
      }
      packet = this.decodeString(obj);
      const isBinaryEvent = packet.type === PacketType.BINARY_EVENT;
      if (isBinaryEvent || packet.type === PacketType.BINARY_ACK) {
        packet.type = isBinaryEvent ? PacketType.EVENT : PacketType.ACK;
        this.reconstructor = new BinaryReconstructor(packet);
        if (packet.attachments === 0) {
          super.emitReserved("decoded", packet);
        }
      } else {
        super.emitReserved("decoded", packet);
      }
    } else if (isBinary(obj) || obj.base64) {
      if (!this.reconstructor) {
        throw new Error("got binary data when not reconstructing a packet");
      } else {
        packet = this.reconstructor.takeBinaryData(obj);
        if (packet) {
          this.reconstructor = null;
          super.emitReserved("decoded", packet);
        }
      }
    } else {
      throw new Error("Unknown type: " + obj);
    }
  }
  decodeString(str) {
    let i = 0;
    const p = {
      type: Number(str.charAt(0))
    };
    if (PacketType[p.type] === void 0) {
      throw new Error("unknown packet type " + p.type);
    }
    if (p.type === PacketType.BINARY_EVENT || p.type === PacketType.BINARY_ACK) {
      const start = i + 1;
      while (str.charAt(++i) !== "-" && i != str.length) {}
      const buf = str.substring(start, i);
      if (buf != Number(buf) || str.charAt(i) !== "-") {
        throw new Error("Illegal attachments");
      }
      p.attachments = Number(buf);
    }
    if ("/" === str.charAt(i + 1)) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if ("," === c) break;
        if (i === str.length) break;
      }
      p.nsp = str.substring(start, i);
    } else {
      p.nsp = "/";
    }
    const next = str.charAt(i + 1);
    if ("" !== next && Number(next) == next) {
      const start = i + 1;
      while (++i) {
        const c = str.charAt(i);
        if (null == c || Number(c) != c) {
          --i;
          break;
        }
        if (i === str.length) break;
      }
      p.id = Number(str.substring(start, i + 1));
    }
    if (str.charAt(++i)) {
      const payload = this.tryParse(str.substr(i));
      if (Decoder.isPayloadValid(p.type, payload)) {
        p.data = payload;
      } else {
        throw new Error("invalid payload");
      }
    }
    return p;
  }
  tryParse(str) {
    try {
      return JSON.parse(str, this.reviver);
    } catch (e) {
      return false;
    }
  }
  static isPayloadValid(type, payload) {
    switch (type) {
      case PacketType.CONNECT:
        return typeof payload === "object";
      case PacketType.DISCONNECT:
        return payload === void 0;
      case PacketType.CONNECT_ERROR:
        return typeof payload === "string" || typeof payload === "object";
      case PacketType.EVENT:
      case PacketType.BINARY_EVENT:
        return Array.isArray(payload) && payload.length > 0;
      case PacketType.ACK:
      case PacketType.BINARY_ACK:
        return Array.isArray(payload);
    }
  }
  destroy() {
    if (this.reconstructor) {
      this.reconstructor.finishedReconstruction();
      this.reconstructor = null;
    }
  }
};
var BinaryReconstructor = class {
  constructor(packet) {
    this.packet = packet;
    this.buffers = [];
    this.reconPack = packet;
  }
  takeBinaryData(binData) {
    this.buffers.push(binData);
    if (this.buffers.length === this.reconPack.attachments) {
      const packet = reconstructPacket(this.reconPack, this.buffers);
      this.finishedReconstruction();
      return packet;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null;
    this.buffers = [];
  }
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3NvY2tldC5pby1wYXJzZXIuNC4yLjIuanMiLCIuLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9idWlsZC9lc20vaXMtYmluYXJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvYnVpbGQvZXNtL2JpbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsIkRlY29kZXIiLCJFbmNvZGVyIiwiUGFja2V0VHlwZSIsInByb3RvY29sIiwibW9kdWxlIiwid2l0aE5hdGl2ZUFycmF5QnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJvYmoiLCJidWZmZXIiLCJ0b1N0cmluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsIndpdGhOYXRpdmVCbG9iIiwiQmxvYiIsImNhbGwiLCJ3aXRoTmF0aXZlRmlsZSIsIkZpbGUiLCJpc0JpbmFyeSIsImhhc0JpbmFyeSIsInRvSlNPTiIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsIiwibGVuZ3RoIiwiYXJndW1lbnRzIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJkZWNvbnN0cnVjdFBhY2tldCIsInBhY2tldCIsImJ1ZmZlcnMiLCJwYWNrZXREYXRhIiwiZGF0YSIsInBhY2siLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJhdHRhY2htZW50cyIsInBsYWNlaG9sZGVyIiwiX3BsYWNlaG9sZGVyIiwibnVtIiwicHVzaCIsIm5ld0RhdGEiLCJEYXRlIiwicmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJpc0luZGV4VmFsaWQiLCJFcnJvciIsInJlcXVpcmUiLCJjb25zdHJ1Y3RvciIsInJlcGxhY2VyIiwiZW5jb2RlIiwidHlwZSIsIkVWRU5UIiwiQUNLIiwiZW5jb2RlQXNCaW5hcnkiLCJCSU5BUllfRVZFTlQiLCJCSU5BUllfQUNLIiwibnNwIiwiaWQiLCJlbmNvZGVBc1N0cmluZyIsInN0ciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWNvbnN0cnVjdGlvbiIsInVuc2hpZnQiLCJpbXBvcnRfY29tcG9uZW50X2VtaXR0ZXIiLCJyZXZpdmVyIiwiYWRkIiwicmVjb25zdHJ1Y3RvciIsImRlY29kZVN0cmluZyIsImlzQmluYXJ5RXZlbnQiLCJCaW5hcnlSZWNvbnN0cnVjdG9yIiwiZW1pdFJlc2VydmVkIiwiYmFzZTY0IiwidGFrZUJpbmFyeURhdGEiLCJwIiwiTnVtYmVyIiwiY2hhckF0Iiwic3RhcnQiLCJidWYiLCJzdWJzdHJpbmciLCJjIiwibmV4dCIsInBheWxvYWQiLCJ0cnlQYXJzZSIsInN1YnN0ciIsImlzUGF5bG9hZFZhbGlkIiwicGFyc2UiLCJlIiwiQ09OTkVDVCIsIkRJU0NPTk5FQ1QiLCJDT05ORUNUX0VSUk9SIiwiZGVzdHJveSIsImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLCJyZWNvblBhY2siLCJiaW5EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNBQSxJQUFNQyx3QkFBd0IsT0FBT0MsZ0JBQWdCO0FBQ3JELElBQU1DLFNBQVVDLE9BQVE7RUFDcEIsT0FBTyxPQUFPRixZQUFZQyxXQUFXLGFBQy9CRCxZQUFZQyxPQUFPQyxHQUFHLElBQ3RCQSxJQUFJQyxrQkFBa0JIO0FBQ2hDO0FBQ0EsSUFBTUksV0FBV0MsT0FBT0MsVUFBVUY7QUFDbEMsSUFBTUcsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FBT0EsU0FBUyxlQUNiSixTQUFTSyxLQUFLRCxJQUFJLE1BQU07QUFDaEMsSUFBTUUsaUJBQWlCLE9BQU9DLFNBQVMsY0FDbEMsT0FBT0EsU0FBUyxlQUNiUCxTQUFTSyxLQUFLRSxJQUFJLE1BQU07QUFNekIsU0FBU0MsU0FBU1YsS0FBSztFQUMxQixPQUFTSCww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TUFBTWdDLE9BQU8sR0FBRztRQUN6Q1IsRUFBRTFDLE9BQU9rRDtNQUNiLE9BQ0s7UUFDRCxNQUFNLElBQUlyQyxNQUFNLGlCQUFpQjtNQUNyQztJQUNKO0lBQ0EsT0FBTzZCO0VBQ1g7RUFDQVMsU0FBU3hCLEtBQUs7SUFDVixJQUFJO01BQ0EsT0FBT0MsS0FBSzBCLE1BQU0zQixLQUFLLEtBQUtNLE9BQU87SUFDdkMsU0FDT3NCLEdBQVA7TUFDSSxPQUFPO0lBQ1g7RUFDSjtFQUNBLE9BQU9GLGVBQWVuQyxNQUFNZ0MsU0FBUztJQUNqQyxRQUFRaEM7TUFBQSxLQUNDakQsV0FBV3VGO1FBQ1osT0FBTyxPQUFPTixZQUFZO01BQUEsS0FDekJqRixXQUFXd0Y7UUFDWixPQUFPUCxZQUFZO01BQUEsS0FDbEJqRixXQUFXeUY7UUFDWixPQUFPLE9BQU9SLFlBQVksWUFBWSxPQUFPQSxZQUFZO01BQUEsS0FDeERqRixXQUFXa0Q7TUFBQSxLQUNYbEQsV0FBV3FEO1FBQ1osT0FBT2xDLE1BQU1DLFFBQVE2RCxPQUFPLEtBQUtBLFFBQVExRCxTQUFTO01BQUEsS0FDakR2QixXQUFXbUQ7TUFBQSxLQUNYbkQsV0FBV3NEO1FBQ1osT0FBT25DLE1BQU1DLFFBQVE2RCxPQUFPO0lBQUE7RUFFeEM7RUFJQVMsVUFBVTtJQUNOLElBQUksS0FBS3hCLGVBQWU7TUFDcEIsS0FBS0EsY0FBY3lCLHdCQUF1QjtNQUMxQyxLQUFLekIsZ0JBQWdCO0lBQ3pCO0VBQ0o7QUFDSjtBQVNBLElBQU1HLHNCQUFOLE1BQTBCO0VBQ3RCdkIsWUFBWWxCLFFBQVE7SUFDaEIsS0FBS0EsU0FBU0E7SUFDZCxLQUFLQyxVQUFVLEVBQUM7SUFDaEIsS0FBSytELFlBQVloRTtFQUNyQjtFQVNBNEMsZUFBZXFCLFNBQVM7SUFDcEIsS0FBS2hFLFFBQVFTLEtBQUt1RCxPQUFPO0lBQ3pCLElBQUksS0FBS2hFLFFBQVFOLFdBQVcsS0FBS3FFLFVBQVUxRCxhQUFhO01BRXBELE1BQU1OLFNBQVNhLGtCQUFrQixLQUFLbUQsV0FBVyxLQUFLL0QsT0FBTztNQUM3RCxLQUFLOEQsd0JBQXVCO01BQzVCLE9BQU8vRDtJQUNYO0lBQ0EsT0FBTztFQUNYO0VBSUErRCx5QkFBeUI7SUFDckIsS0FBS0MsWUFBWTtJQUNqQixLQUFLL0QsVUFBVSxFQUFDO0VBQ3BCO0FBQ0oiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9kZW1vL291dCJ9