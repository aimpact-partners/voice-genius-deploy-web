System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@socket.io/component-emitter","3.1.0"]]);
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

// .beyond/uimport/temp/@socket.io/component-emitter.3.1.0.js
var component_emitter_3_1_0_exports = {};
__export(component_emitter_3_1_0_exports, {
  Emitter: () => Emitter
});
module.exports = __toCommonJS(component_emitter_3_1_0_exports);

// node_modules/@socket.io/component-emitter/index.mjs
function Emitter(obj) {
  if (obj) return mixin(obj);
}
function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}
Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks["$" + event] = this._callbacks["$" + event] || []).push(fn);
  return this;
};
Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }
  on.fn = fn;
  this.on(event, on);
  return this;
};
Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }
  var callbacks = this._callbacks["$" + event];
  if (!callbacks) return this;
  if (1 == arguments.length) {
    delete this._callbacks["$" + event];
    return this;
  }
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  if (callbacks.length === 0) {
    delete this._callbacks["$" + event];
  }
  return this;
};
Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
    callbacks = this._callbacks["$" + event];
  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }
  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }
  return this;
};
Emitter.prototype.emitReserved = Emitter.prototype.emit;
Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks["$" + event] || [];
};
Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0Bzb2NrZXQuaW8vY29tcG9uZW50LWVtaXR0ZXIuMy4xLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQHNvY2tldC5pby9jb21wb25lbnQtZW1pdHRlci9pbmRleC5tanMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJFbWl0dGVyIiwibW9kdWxlIiwib2JqIiwibWl4aW4iLCJrZXkiLCJwcm90b3R5cGUiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZuIiwiX2NhbGxiYWNrcyIsInB1c2giLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsZW5ndGgiLCJjYWxsYmFja3MiLCJjYiIsImkiLCJzcGxpY2UiLCJlbWl0IiwiYXJncyIsIkFycmF5Iiwic2xpY2UiLCJsZW4iLCJlbWl0UmVzZXJ2ZWQiLCJsaXN0ZW5lcnMiLCJoYXNMaXN0ZW5lcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUFBO0VBQUFDO0FBQUE7QUFBQUM7OztBQ01PLFNBQVNELFFBQVFFLEtBQUs7RUFDM0IsSUFBSUEsS0FBSyxPQUFPQyxNQUFNRCxHQUFHO0FBQzNCO0FBVUEsU0FBU0MsTUFBTUQsS0FBSztFQUNsQixTQUFTRSxPQUFPSixRQUFRSyxXQUFXO0lBQ2pDSCxJQUFJRSxPQUFPSixRQUFRSyxVQUFVRDtFQUMvQjtFQUNBLE9BQU9GO0FBQ1Q7QUFXQUYsUUFBUUssVUFBVUMsS0FDbEJOLFFBQVFLLFVBQVVFLG1CQUFtQixVQUFTQyxPQUFPQyxJQUFHO0VBQ3RELEtBQUtDLGFBQWEsS0FBS0EsY0FBYyxDQUFDO0VBQ3RDLENBQUMsS0FBS0EsV0FBVyxNQUFNRixTQUFTLEtBQUtFLFdBQVcsTUFBTUYsVUFBVSxFQUFDLEVBQzlERyxLQUFLRixFQUFFO0VBQ1YsT0FBTztBQUNUO0FBWUFULFFBQVFLLFVBQVVPLE9BQU8sVUFBU0osT0FBT0MsSUFBRztFQUMxQyxTQUFTSCxLQUFLO0lBQ1osS0FBS08sSUFBSUwsT0FBT0YsRUFBRTtJQUNsQkcsR0FBR0ssTUFBTSxNQUFNQyxTQUFTO0VBQzFCO0VBRUFULEdBQUdHLEtBQUtBO0VBQ1IsS0FBS0gsR0FBR0UsT0FBT0YsRUFBRTtFQUNqQixPQUFPO0FBQ1Q7QUFZQU4sUUFBUUssVUFBVVEsTUFDbEJiLFFBQVFLLFVBQVVXLGlCQUNsQmhCLFFBQVFLLFVBQVVZLHFCQUNsQmpCLFFBQVFLLFVBQVVhLHNCQUFzQixVQUFTVixPQUFPQyxJQUFHO0VBQ3pELEtBQUtDLGFBQWEsS0FBS0EsY0FBYyxDQUFDO0VBR3RDLElBQUksS0FBS0ssVUFBVUksUUFBUTtJQUN6QixLQUFLVCxhQUFhLENBQUM7SUFDbkIsT0FBTztFQUNUO0VBR0EsSUFBSVUsWUFBWSxLQUFLVixXQUFXLE1BQU1GO0VBQ3RDLElBQUksQ0FBQ1ksV0FBVyxPQUFPO0VBR3ZCLElBQUksS0FBS0wsVUFBVUksUUFBUTtJQUN6QixPQUFPLEtBQUtULFdBQVcsTUFBTUY7SUFDN0IsT0FBTztFQUNUO0VBR0EsSUFBSWE7RUFDSixTQUFTQyxJQUFJLEdBQUdBLElBQUlGLFVBQVVELFFBQVFHLEtBQUs7SUFDekNELEtBQUtELFVBQVVFO0lBQ2YsSUFBSUQsT0FBT1osTUFBTVksR0FBR1osT0FBT0EsSUFBSTtNQUM3QlcsVUFBVUcsT0FBT0QsR0FBRyxDQUFDO01BQ3JCO0lBQ0Y7RUFDRjtFQUlBLElBQUlGLFVBQVVELFdBQVcsR0FBRztJQUMxQixPQUFPLEtBQUtULFdBQVcsTUFBTUY7RUFDL0I7RUFFQSxPQUFPO0FBQ1Q7QUFVQVIsUUFBUUssVUFBVW1CLE9BQU8sVUFBU2hCLE9BQU07RUFDdEMsS0FBS0UsYUFBYSxLQUFLQSxjQUFjLENBQUM7RUFFdEMsSUFBSWUsT0FBTyxJQUFJQyxNQUFNWCxVQUFVSSxTQUFTLENBQUM7SUFDckNDLFlBQVksS0FBS1YsV0FBVyxNQUFNRjtFQUV0QyxTQUFTYyxJQUFJLEdBQUdBLElBQUlQLFVBQVVJLFFBQVFHLEtBQUs7SUFDekNHLEtBQUtILElBQUksS0FBS1AsVUFBVU87RUFDMUI7RUFFQSxJQUFJRixXQUFXO0lBQ2JBLFlBQVlBLFVBQVVPLE1BQU0sQ0FBQztJQUM3QixTQUFTTCxJQUFJLEdBQUdNLE1BQU1SLFVBQVVELFFBQVFHLElBQUlNLEtBQUssRUFBRU4sR0FBRztNQUNwREYsVUFBVUUsR0FBR1IsTUFBTSxNQUFNVyxJQUFJO0lBQy9CO0VBQ0Y7RUFFQSxPQUFPO0FBQ1Q7QUFHQXpCLFFBQVFLLFVBQVV3QixlQUFlN0IsUUFBUUssVUFBVW1CO0FBVW5EeEIsUUFBUUssVUFBVXlCLFlBQVksVUFBU3RCLE9BQU07RUFDM0MsS0FBS0UsYUFBYSxLQUFLQSxjQUFjLENBQUM7RUFDdEMsT0FBTyxLQUFLQSxXQUFXLE1BQU1GLFVBQVUsRUFBQztBQUMxQztBQVVBUixRQUFRSyxVQUFVMEIsZUFBZSxVQUFTdkIsT0FBTTtFQUM5QyxPQUFPLENBQUMsQ0FBRSxLQUFLc0IsVUFBVXRCLEtBQUssRUFBRVc7QUFDbEMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9kZW1vL291dCJ9