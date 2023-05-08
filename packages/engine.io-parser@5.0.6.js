System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["engine.io-parser","5.0.6"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [],
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

// .beyond/uimport/temp/engine.io-parser.5.0.6.js
var engine_io_parser_5_0_6_exports = {};
__export(engine_io_parser_5_0_6_exports, {
  decodePacket: () => decodePacket_browser_default,
  decodePayload: () => decodePayload,
  encodePacket: () => encodePacket_browser_default,
  encodePayload: () => encodePayload,
  protocol: () => protocol
});
module.exports = __toCommonJS(engine_io_parser_5_0_6_exports);

// node_modules/engine.io-parser/build/esm/commons.js
var PACKET_TYPES = /* @__PURE__ */Object.create(null);
PACKET_TYPES["open"] = "0";
PACKET_TYPES["close"] = "1";
PACKET_TYPES["ping"] = "2";
PACKET_TYPES["pong"] = "3";
PACKET_TYPES["message"] = "4";
PACKET_TYPES["upgrade"] = "5";
PACKET_TYPES["noop"] = "6";
var PACKET_TYPES_REVERSE = /* @__PURE__ */Object.create(null);
Object.keys(PACKET_TYPES).forEach(key => {
  PACKET_TYPES_REVERSE[PACKET_TYPES[key]] = key;
});
var ERROR_PACKET = {
  type: "error",
  data: "parser error"
};

// node_modules/engine.io-parser/build/esm/encodePacket.browser.js
var withNativeBlob = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
var withNativeArrayBuffer = typeof ArrayBuffer === "function";
var isView = obj => {
  return typeof ArrayBuffer.isView === "function" ? ArrayBuffer.isView(obj) : obj && obj.buffer instanceof ArrayBuffer;
};
var encodePacket = ({
  type,
  data
}, supportsBinary, callback) => {
  if (withNativeBlob && data instanceof Blob) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(data, callback);
    }
  } else if (withNativeArrayBuffer && (data instanceof ArrayBuffer || isView(data))) {
    if (supportsBinary) {
      return callback(data);
    } else {
      return encodeBlobAsBase64(new Blob([data]), callback);
    }
  }
  return callback(PACKET_TYPES[type] + (data || ""));
};
var encodeBlobAsBase64 = (data, callback) => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    const content = fileReader.result.split(",")[1];
    callback("b" + (content || ""));
  };
  return fileReader.readAsDataURL(data);
};
var encodePacket_browser_default = encodePacket;

// node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encode = arraybuffer => {
  let bytes = new Uint8Array(arraybuffer),
    i,
    len = bytes.length,
    base64 = "";
  for (i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decode = base64 => {
  let bufferLength = base64.length * 0.75,
    len = base64.length,
    i,
    p = 0,
    encoded1,
    encoded2,
    encoded3,
    encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arraybuffer;
};

// node_modules/engine.io-parser/build/esm/decodePacket.browser.js
var withNativeArrayBuffer2 = typeof ArrayBuffer === "function";
var decodePacket = (encodedPacket, binaryType) => {
  if (typeof encodedPacket !== "string") {
    return {
      type: "message",
      data: mapBinary(encodedPacket, binaryType)
    };
  }
  const type = encodedPacket.charAt(0);
  if (type === "b") {
    return {
      type: "message",
      data: decodeBase64Packet(encodedPacket.substring(1), binaryType)
    };
  }
  const packetType = PACKET_TYPES_REVERSE[type];
  if (!packetType) {
    return ERROR_PACKET;
  }
  return encodedPacket.length > 1 ? {
    type: PACKET_TYPES_REVERSE[type],
    data: encodedPacket.substring(1)
  } : {
    type: PACKET_TYPES_REVERSE[type]
  };
};
var decodeBase64Packet = (data, binaryType) => {
  if (withNativeArrayBuffer2) {
    const decoded = decode(data);
    return mapBinary(decoded, binaryType);
  } else {
    return {
      base64: true,
      data
    };
  }
};
var mapBinary = (data, binaryType) => {
  switch (binaryType) {
    case "blob":
      return data instanceof ArrayBuffer ? new Blob([data]) : data;
    case "arraybuffer":
    default:
      return data;
  }
};
var decodePacket_browser_default = decodePacket;

// node_modules/engine.io-parser/build/esm/index.js
var SEPARATOR = String.fromCharCode(30);
var encodePayload = (packets, callback) => {
  const length = packets.length;
  const encodedPackets = new Array(length);
  let count = 0;
  packets.forEach((packet, i) => {
    encodePacket_browser_default(packet, false, encodedPacket => {
      encodedPackets[i] = encodedPacket;
      if (++count === length) {
        callback(encodedPackets.join(SEPARATOR));
      }
    });
  });
};
var decodePayload = (encodedPayload, binaryType) => {
  const encodedPackets = encodedPayload.split(SEPARATOR);
  const packets = [];
  for (let i = 0; i < encodedPackets.length; i++) {
    const decodedPacket = decodePacket_browser_default(encodedPackets[i], binaryType);
    packets.push(decodedPacket);
    if (decodedPacket.type === "error") {
      break;
    }
  }
  return packets;
};
var protocol = 4;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL2VuZ2luZS5pby1wYXJzZXIuNS4wLjYuanMiLCIuLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9idWlsZC9lc20vY29tbW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9lbmNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9jb250cmliL2Jhc2U2NC1hcnJheWJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9kZWNvZGVQYWNrZXQuYnJvd3Nlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2J1aWxkL2VzbS9pbmRleC5qcyJdLCJuYW1lcyI6WyJfX2V4cG9ydCIsImRlY29kZVBhY2tldCIsImRlY29kZVBheWxvYWQiLCJlbmNvZGVQYWNrZXQiLCJlbmNvZGVQYXlsb2FkIiwicHJvdG9jb2wiLCJtb2R1bGUiLCJQQUNLRVRfVFlQRVMiLCJjcmVhdGUiLCJQQUNLRVRfVFlQRVNfUkVWRVJTRSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiRVJST1JfUEFDS0VUIiwidHlwZSIsImRhdGEiLCJ3aXRoTmF0aXZlQmxvYiIsIkJsb2IiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJ3aXRoTmF0aXZlQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIm9iaiIsImJ1ZmZlciIsInN1cHBvcnRzQmluYXJ5IiwiY2FsbGJhY2siLCJlbmNvZGVCbG9iQXNCYXNlNjQiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImNvbnRlbnQiLCJyZXN1bHQiLCJzcGxpdCIsInJlYWRBc0RhdGFVUkwiLCJlbmNvZGVQYWNrZXRfYnJvd3Nlcl9kZWZhdWx0IiwiY2hhcnMiLCJsb29rdXAiLCJVaW50OEFycmF5IiwiaSIsImxlbmd0aCIsImNoYXJDb2RlQXQiLCJlbmNvZGUiLCJhcnJheWJ1ZmZlciIsImJ5dGVzIiwibGVuIiwiYmFzZTY0Iiwic3Vic3RyaW5nIiwiZGVjb2RlIiwiYnVmZmVyTGVuZ3RoIiwicCIsImVuY29kZWQxIiwiZW5jb2RlZDIiLCJlbmNvZGVkMyIsImVuY29kZWQ0IiwiZW5jb2RlZFBhY2tldCIsImJpbmFyeVR5cGUiLCJtYXBCaW5hcnkiLCJjaGFyQXQiLCJkZWNvZGVCYXNlNjRQYWNrZXQiLCJwYWNrZXRUeXBlIiwiZGVjb2RlZCIsImRlY29kZVBhY2tldF9icm93c2VyX2RlZmF1bHQiLCJTRVBBUkFUT1IiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYWNrZXRzIiwiZW5jb2RlZFBhY2tldHMiLCJBcnJheSIsImNvdW50IiwicGFja2V0Iiwiam9pbiIsImVuY29kZWRQYXlsb2FkIiwiZGVjb2RlZFBhY2tldCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0FBQUE7QUFBQUM7OztBQ0FBLElBQU1DLGVBQWUsc0JBQU9DLE9BQU8sSUFBSTtBQUN2Q0QsYUFBYSxVQUFVO0FBQ3ZCQSxhQUFhLFdBQVc7QUFDeEJBLGFBQWEsVUFBVTtBQUN2QkEsYUFBYSxVQUFVO0FBQ3ZCQSxhQUFhLGFBQWE7QUFDMUJBLGFBQWEsYUFBYTtBQUMxQkEsYUFBYSxVQUFVO0FBQ3ZCLElBQU1FLHVCQUF1QixzQkFBT0QsT0FBTyxJQUFJO0FBQy9DRSxPQUFPQyxLQUFLSixZQUFZLEVBQUVLLFFBQVFDLE9BQU87RUFDckNKLHFCQUFxQkYsYUFBYU0sUUFBUUE7QUFDOUMsQ0FBQztBQUNELElBQU1DLGVBQWU7RUFBRUMsTUFBTTtFQUFTQyxNQUFNO0FBQWU7OztBQ1gzRCxJQUFNQyxpQkFBaUIsT0FBT0MsU0FBUyxjQUNsQyxPQUFPQSxTQUFTLGVB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