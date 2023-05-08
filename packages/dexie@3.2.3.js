System.register([], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["dexie","3.2.3"]]);
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

// .beyond/uimport/dexie.3.2.3.js
var dexie_3_2_3_exports = {};
__export(dexie_3_2_3_exports, {
  Dexie: () => Dexie$1,
  RangeSet: () => RangeSet,
  default: () => dexie_3_2_3_default,
  liveQuery: () => liveQuery,
  mergeRanges: () => mergeRanges,
  rangesOverlap: () => rangesOverlap
});
module.exports = __toCommonJS(dexie_3_2_3_exports);

// node_modules/dexie/dist/modern/dexie.mjs
var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
var keys = Object.keys;
var isArray = Array.isArray;
if (typeof Promise !== "undefined" && !_global.Promise) {
  _global.Promise = Promise;
}
function extend(obj, extension) {
  if (typeof extension !== "object") return obj;
  keys(extension).forEach(function (key) {
    obj[key] = extension[key];
  });
  return obj;
}
var getProto = Object.getPrototypeOf;
var _hasOwn = {}.hasOwnProperty;
function hasOwn(obj, prop) {
  return _hasOwn.call(obj, prop);
}
function props(proto, extension) {
  if (typeof extension === "function") extension = extension(getProto(proto));
  (typeof Reflect === "undefined" ? keys : Reflect.ownKeys)(extension).forEach(key => {
    setProp(proto, key, extension[key]);
  });
}
var defineProperty = Object.defineProperty;
function setProp(obj, prop, functionOrGetSet, options) {
  defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === "function" ? {
    get: functionOrGetSet.get,
    set: functionOrGetSet.set,
    configurable: true
  } : {
    value: functionOrGetSet,
    configurable: true,
    writable: true
  }, options));
}
function derive(Child) {
  return {
    from: function (Parent) {
      Child.prototype = Object.create(Parent.prototype);
      setProp(Child.prototype, "constructor", Child);
      return {
        extend: props.bind(null, Child.prototype)
      };
    }
  };
}
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
function getPropertyDescriptor(obj, prop) {
  const pd = getOwnPropertyDescriptor(obj, prop);
  let proto;
  return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
}
var _slice = [].slice;
function slice(args, start, end) {
  return _slice.call(args, start, end);
}
function override(origFunc, overridedFactory) {
  return overridedFactory(origFunc);
}
function assert(b) {
  if (!b) throw new Error("Assertion Failed");
}
function asap$1(fn) {
  if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
}
function arrayToObject(array, extractor) {
  return array.reduce((result, item, i) => {
    var nameAndValue = extractor(item, i);
    if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
    return result;
  }, {});
}
function tryCatch(fn, onerror, args) {
  try {
    fn.apply(null, args);
  } catch (ex) {
    onerror && onerror(ex);
  }
}
function getByKeyPath(obj, keyPath) {
  if (hasOwn(obj, keyPath)) return obj[keyPath];
  if (!keyPath) return obj;
  if (typeof keyPath !== "string") {
    var rv = [];
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      var val = getByKeyPath(obj, keyPath[i]);
      rv.push(val);
    }
    return rv;
  }
  var period = keyPath.indexOf(".");
  if (period !== -1) {
    var innerObj = obj[keyPath.substr(0, period)];
    return innerObj === void 0 ? void 0 : getByKeyPath(innerObj, keyPath.substr(period + 1));
  }
  return void 0;
}
function setByKeyPath(obj, keyPath, value) {
  if (!obj || keyPath === void 0) return;
  if ("isFrozen" in Object && Object.isFrozen(obj)) return;
  if (typeof keyPath !== "string" && "length" in keyPath) {
    assert(typeof value !== "string" && "length" in value);
    for (var i = 0, l = keyPath.length; i < l; ++i) {
      setByKeyPath(obj, keyPath[i], value[i]);
    }
  } else {
    var period = keyPath.indexOf(".");
    if (period !== -1) {
      var currentKeyPath = keyPath.substr(0, period);
      var remainingKeyPath = keyPath.substr(period + 1);
      if (remainingKeyPath === "") {
        if (value === void 0) {
          if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
        } else obj[currentKeyPath] = value;
      } else {
        var innerObj = obj[currentKeyPath];
        if (!innerObj || !hasOwn(obj, currentKeyPath)) innerObj = obj[currentKeyPath] = {};
        setByKeyPath(innerObj, remainingKeyPath, value);
      }
    } else {
      if (value === void 0) {
        if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
      } else obj[keyPath] = value;
    }
  }
}
function delByKeyPath(obj, keyPath) {
  if (typeof keyPath === "string") setByKeyPath(obj, keyPath, void 0);else if ("length" in keyPath) [].map.call(keyPath, function (kp) {
    setByKeyPath(obj, kp, void 0);
  });
}
function shallowClone(obj) {
  var rv = {};
  for (var m in obj) {
    if (hasOwn(obj, m)) rv[m] = obj[m];
  }
  return rv;
}
var concat = [].concat;
function flatten(a) {
  return concat.apply([], a);
}
var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(flatten([8, 16, 32, 64].map(num => ["Int", "Uint", "Float"].map(t => t + num + "Array")))).filter(t => _global[t]);
var intrinsicTypes = intrinsicTypeNames.map(t => _global[t]);
arrayToObject(intrinsicTypeNames, x => [x, true]);
var circularRefs = null;
function deepClone(any) {
  circularRefs = typeof WeakMap !== "undefined" && /* @__PURE__ */new WeakMap();
  const rv = innerDeepClone(any);
  circularRefs = null;
  return rv;
}
function innerDeepClone(any) {
  if (!any || typeof any !== "object") return any;
  let rv = circularRefs && circularRefs.get(any);
  if (rv) return rv;
  if (isArray(any)) {
    rv = [];
    circularRefs && circularRefs.set(any, rv);
    for (var i = 0, l = any.length; i < l; ++i) {
      rv.push(innerDeepClone(any[i]));
    }
  } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
    rv = any;
  } else {
    const proto = getProto(any);
    rv = proto === Object.prototype ? {} : Object.create(proto);
    circularRefs && circularRefs.set(any, rv);
    for (var prop in any) {
      if (hasOwn(any, prop)) {
        rv[prop] = innerDeepClone(any[prop]);
      }
    }
  }
  return rv;
}
var {
  toString
} = {};
function toStringTag(o) {
  return toString.call(o).slice(8, -1);
}
var iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
var getIteratorOf = typeof iteratorSymbol === "symbol" ? function (x) {
  var i;
  return x != null && (i = x[iteratorSymbol]) && i.apply(x);
} : function () {
  return null;
};
var NO_CHAR_ARRAY = {};
function getArrayOf(arrayLike) {
  var i, a, x, it;
  if (arguments.length === 1) {
    if (isArray(arrayLike)) return arrayLike.slice();
    if (this === NO_CHAR_ARRAY && typeof arrayLike === "string") return [arrayLike];
    if (it = getIteratorOf(arrayLike)) {
      a = [];
      while (x = it.next(), !x.done) a.push(x.value);
      return a;
    }
    if (arrayLike == null) return [arrayLike];
    i = arrayLike.length;
    if (typeof i === "number") {
      a = new Array(i);
      while (i--) a[i] = arrayLike[i];
      return a;
    }
    return [arrayLike];
  }
  i = arguments.length;
  a = new Array(i);
  while (i--) a[i] = arguments[i];
  return a;
}
var isAsyncFunction = typeof Symbol !== "undefined" ? fn => fn[Symbol.toStringTag] === "AsyncFunction" : () => false;
var debug = typeof location !== "undefined" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
function setDebug(value, filter) {
  debug = value;
  libraryFilter = filter;
}
var libraryFilter = () => true;
var NEEDS_THROW_FOR_STACK = !new Error("").stack;
function getErrorWithStack() {
  if (NEEDS_THROW_FOR_STACK) try {
    getErrorWithStack.arguments;
    throw new Error();
  } catch (e) {
    return e;
  }
  return new Error();
}
function prettyStack(exception, numIgnoredFrames) {
  var stack = exception.stack;
  if (!stack) return "";
  numIgnoredFrames = numIgnoredFrames || 0;
  if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split("\n").length;
  return stack.split("\n").slice(numIgnoredFrames).filter(libraryFilter).map(frame => "\n" + frame).join("");
}
var dexieErrorNames = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"];
var idbDomErrorNames = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"];
var errorList = dexieErrorNames.concat(idbDomErrorNames);
var defaultTexts = {
  VersionChanged: "Database version changed by other database connection",
  DatabaseClosed: "Database has been closed",
  Abort: "Transaction aborted",
  TransactionInactive: "Transaction has already completed or failed",
  MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
};
function DexieError(name, msg) {
  this._e = getErrorWithStack();
  this.name = name;
  this.message = msg;
}
derive(DexieError).from(Error).extend({
  stack: {
    get: function () {
      return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
    }
  },
  toString: function () {
    return this.name + ": " + this.message;
  }
});
function getMultiErrorMessage(msg, failures) {
  return msg + ". Errors: " + Object.keys(failures).map(key => failures[key].toString()).filter((v, i, s) => s.indexOf(v) === i).join("\n");
}
function ModifyError(msg, failures, successCount, failedKeys) {
  this._e = getErrorWithStack();
  this.failures = failures;
  this.failedKeys = failedKeys;
  this.successCount = successCount;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(ModifyError).from(DexieError);
function BulkError(msg, failures) {
  this._e = getErrorWithStack();
  this.name = "BulkError";
  this.failures = Object.keys(failures).map(pos => failures[pos]);
  this.failuresByPos = failures;
  this.message = getMultiErrorMessage(msg, failures);
}
derive(BulkError).from(DexieError);
var errnames = errorList.reduce((obj, name) => (obj[name] = name + "Error", obj), {});
var BaseException = DexieError;
var exceptions = errorList.reduce((obj, name) => {
  var fullName = name + "Error";
  function DexieError2(msgOrInner, inner) {
    this._e = getErrorWithStack();
    this.name = fullName;
    if (!msgOrInner) {
      this.message = defaultTexts[name] || fullName;
      this.inner = null;
    } else if (typeof msgOrInner === "string") {
      this.message = `${msgOrInner}${!inner ? "" : "\n " + inner}`;
      this.inner = inner || null;
    } else if (typeof msgOrInner === "object") {
      this.message = `${msgOrInner.name} ${msgOrInner.message}`;
      this.inner = msgOrInner;
    }
  }
  derive(DexieError2).from(BaseException);
  obj[name] = DexieError2;
  return obj;
}, {});
exceptions.Syntax = SyntaxError;
exceptions.Type = TypeError;
exceptions.Range = RangeError;
var exceptionMap = idbDomErrorNames.reduce((obj, name) => {
  obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
function mapError(domError, message) {
  if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
  var rv = new exceptionMap[domError.name](message || domError.message, domError);
  if ("stack" in domError) {
    setProp(rv, "stack", {
      get: function () {
        return this.inner.stack;
      }
    });
  }
  return rv;
}
var fullNameExceptions = errorList.reduce((obj, name) => {
  if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
  return obj;
}, {});
fullNameExceptions.ModifyError = ModifyError;
fullNameExceptions.DexieError = DexieError;
fullNameExceptions.BulkError = BulkError;
function nop() {}
function mirror(val) {
  return val;
}
function pureFunctionChain(f1, f2) {
  if (f1 == null || f1 === mirror) return f2;
  return function (val) {
    return f2(f1(val));
  };
}
function callBoth(on1, on2) {
  return function () {
    on1.apply(this, arguments);
    on2.apply(this, arguments);
  };
}
function hookCreatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res !== void 0) arguments[0] = res;
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res2 !== void 0 ? res2 : res;
  };
}
function hookDeletingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    f1.apply(this, arguments);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = this.onerror = null;
    f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
  };
}
function hookUpdatingChain(f1, f2) {
  if (f1 === nop) return f2;
  return function (modifications) {
    var res = f1.apply(this, arguments);
    extend(modifications, res);
    var onsuccess = this.onsuccess,
      onerror = this.onerror;
    this.onsuccess = null;
    this.onerror = null;
    var res2 = f2.apply(this, arguments);
    if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
    if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
    return res === void 0 ? res2 === void 0 ? void 0 : res2 : extend(res, res2);
  };
}
function reverseStoppableEventChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    if (f2.apply(this, arguments) === false) return false;
    return f1.apply(this, arguments);
  };
}
function promisableChain(f1, f2) {
  if (f1 === nop) return f2;
  return function () {
    var res = f1.apply(this, arguments);
    if (res && typeof res.then === "function") {
      var thiz = this,
        i = arguments.length,
        args = new Array(i);
      while (i--) args[i] = arguments[i];
      return res.then(function () {
        return f2.apply(thiz, args);
      });
    }
    return f2.apply(this, arguments);
  };
}
var INTERNAL = {};
var LONG_STACKS_CLIP_LIMIT = 100,
  MAX_LONG_STACKS = 20,
  ZONE_ECHO_LIMIT = 100,
  [resolvedNativePromise, nativePromiseProto, resolvedGlobalPromise] = typeof Promise === "undefined" ? [] : (() => {
    let globalP = Promise.resolve();
    if (typeof crypto === "undefined" || !crypto.subtle) return [globalP, getProto(globalP), globalP];
    const nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
    return [nativeP, getProto(nativeP), globalP];
  })(),
  nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
var patchGlobalPromise = !!resolvedGlobalPromise;
var stack_being_generated = false;
var schedulePhysicalTick = resolvedGlobalPromise ? () => {
  resolvedGlobalPromise.then(physicalTick);
} : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? () => {
  var hiddenDiv = document.createElement("div");
  new MutationObserver(() => {
    physicalTick();
    hiddenDiv = null;
  }).observe(hiddenDiv, {
    attributes: true
  });
  hiddenDiv.setAttribute("i", "1");
} : () => {
  setTimeout(physicalTick, 0);
};
var asap = function (callback, args) {
  microtickQueue.push([callback, args]);
  if (needsNewPhysicalTick) {
    schedulePhysicalTick();
    needsNewPhysicalTick = false;
  }
};
var isOutsideMicroTick = true,
  needsNewPhysicalTick = true,
  unhandledErrors = [],
  rejectingErrors = [],
  currentFulfiller = null,
  rejectionMapper = mirror;
var globalPSD = {
  id: "global",
  global: true,
  ref: 0,
  unhandleds: [],
  onunhandled: globalError,
  pgp: false,
  env: {},
  finalize: function () {
    this.unhandleds.forEach(uh => {
      try {
        globalError(uh[0], uh[1]);
      } catch (e) {}
    });
  }
};
var PSD = globalPSD;
var microtickQueue = [];
var numScheduledCalls = 0;
var tickFinalizers = [];
function DexiePromise(fn) {
  if (typeof this !== "object") throw new TypeError("Promises must be constructed via new");
  this._listeners = [];
  this.onuncatched = nop;
  this._lib = false;
  var psd = this._PSD = PSD;
  if (debug) {
    this._stackHolder = getErrorWithStack();
    this._prev = null;
    this._numPrev = 0;
  }
  if (typeof fn !== "function") {
    if (fn !== INTERNAL) throw new TypeError("Not a function");
    this._state = arguments[1];
    this._value = arguments[2];
    if (this._state === false) handleRejection(this, this._value);
    return;
  }
  this._state = null;
  this._value = null;
  ++psd.ref;
  executePromiseTask(this, fn);
}
var thenProp = {
  get: function () {
    var psd = PSD,
      microTaskId = totalEchoes;
    function then(onFulfilled, onRejected) {
      var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
      const cleanup = possibleAwait && !decrementExpectedAwaits();
      var rv = new DexiePromise((resolve, reject) => {
        propagateToListener(this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup), resolve, reject, psd));
      });
      debug && linkToPreviousPromise(rv, this);
      return rv;
    }
    then.prototype = INTERNAL;
    return then;
  },
  set: function (value) {
    setProp(this, "then", value && value.prototype === INTERNAL ? thenProp : {
      get: function () {
        return value;
      },
      set: thenProp.set
    });
  }
};
props(DexiePromise.prototype, {
  then: thenProp,
  _then: function (onFulfilled, onRejected) {
    propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
  },
  catch: function (onRejected) {
    if (arguments.length === 1) return this.then(null, onRejected);
    var type2 = arguments[0],
      handler = arguments[1];
    return typeof type2 === "function" ? this.then(null, err => err instanceof type2 ? handler(err) : PromiseReject(err)) : this.then(null, err => err && err.name === type2 ? handler(err) : PromiseReject(err));
  },
  finally: function (onFinally) {
    return this.then(value => {
      onFinally();
      return value;
    }, err => {
      onFinally();
      return PromiseReject(err);
    });
  },
  stack: {
    get: function () {
      if (this._stack) return this._stack;
      try {
        stack_being_generated = true;
        var stacks = getStack(this, [], MAX_LONG_STACKS);
        var stack = stacks.join("\nFrom previous: ");
        if (this._state !== null) this._stack = stack;
        return stack;
      } finally {
        stack_being_generated = false;
      }
    }
  },
  timeout: function (ms, msg) {
    return ms < Infinity ? new DexiePromise((resolve, reject) => {
      var handle = setTimeout(() => reject(new exceptions.Timeout(msg)), ms);
      this.then(resolve, reject).finally(clearTimeout.bind(null, handle));
    }) : this;
  }
});
if (typeof Symbol !== "undefined" && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, "Dexie.Promise");
globalPSD.env = snapShot();
function Listener(onFulfilled, onRejected, resolve, reject, zone) {
  this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
  this.onRejected = typeof onRejected === "function" ? onRejected : null;
  this.resolve = resolve;
  this.reject = reject;
  this.psd = zone;
}
props(DexiePromise, {
  all: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(function (resolve, reject) {
      if (values.length === 0) resolve([]);
      var remaining = values.length;
      values.forEach((a, i) => DexiePromise.resolve(a).then(x => {
        values[i] = x;
        if (! --remaining) resolve(values);
      }, reject));
    });
  },
  resolve: value => {
    if (value instanceof DexiePromise) return value;
    if (value && typeof value.then === "function") return new DexiePromise((resolve, reject) => {
      value.then(resolve, reject);
    });
    var rv = new DexiePromise(INTERNAL, true, value);
    linkToPreviousPromise(rv, currentFulfiller);
    return rv;
  },
  reject: PromiseReject,
  race: function () {
    var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      values.map(value => DexiePromise.resolve(value).then(resolve, reject));
    });
  },
  PSD: {
    get: () => PSD,
    set: value => PSD = value
  },
  totalEchoes: {
    get: () => totalEchoes
  },
  newPSD: newScope,
  usePSD,
  scheduler: {
    get: () => asap,
    set: value => {
      asap = value;
    }
  },
  rejectionMapper: {
    get: () => rejectionMapper,
    set: value => {
      rejectionMapper = value;
    }
  },
  follow: (fn, zoneProps) => {
    return new DexiePromise((resolve, reject) => {
      return newScope((resolve2, reject2) => {
        var psd = PSD;
        psd.unhandleds = [];
        psd.onunhandled = reject2;
        psd.finalize = callBoth(function () {
          run_at_end_of_this_or_next_physical_tick(() => {
            this.unhandleds.length === 0 ? resolve2() : reject2(this.unhandleds[0]);
          });
        }, psd.finalize);
        fn();
      }, zoneProps, resolve, reject);
    });
  }
});
if (NativePromise) {
  if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise(resolve => {
      if (possiblePromises.length === 0) resolve([]);
      let remaining = possiblePromises.length;
      const results = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => results[i] = {
        status: "fulfilled",
        value
      }, reason => results[i] = {
        status: "rejected",
        reason
      }).then(() => --remaining || resolve(results)));
    });
  });
  if (NativePromise.any && typeof AggregateError !== "undefined") setProp(DexiePromise, "any", function () {
    const possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
    return new DexiePromise((resolve, reject) => {
      if (possiblePromises.length === 0) reject(new AggregateError([]));
      let remaining = possiblePromises.length;
      const failures = new Array(remaining);
      possiblePromises.forEach((p, i) => DexiePromise.resolve(p).then(value => resolve(value), failure => {
        failures[i] = failure;
        if (! --remaining) reject(new AggregateError(failures));
      }));
    });
  });
}
function executePromiseTask(promise, fn) {
  try {
    fn(value => {
      if (promise._state !== null) return;
      if (value === promise) throw new TypeError("A promise cannot be resolved with itself.");
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      if (value && typeof value.then === "function") {
        executePromiseTask(promise, (resolve, reject) => {
          value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
        });
      } else {
        promise._state = true;
        promise._value = value;
        propagateAllListeners(promise);
      }
      if (shouldExecuteTick) endMicroTickScope();
    }, handleRejection.bind(null, promise));
  } catch (ex) {
    handleRejection(promise, ex);
  }
}
function handleRejection(promise, reason) {
  rejectingErrors.push(reason);
  if (promise._state !== null) return;
  var shouldExecuteTick = promise._lib && beginMicroTickScope();
  reason = rejectionMapper(reason);
  promise._state = false;
  promise._value = reason;
  debug && reason !== null && typeof reason === "object" && !reason._promise && tryCatch(() => {
    var origProp = getPropertyDescriptor(reason, "stack");
    reason._promise = promise;
    setProp(reason, "stack", {
      get: () => stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack
    });
  });
  addPossiblyUnhandledError(promise);
  propagateAllListeners(promise);
  if (shouldExecuteTick) endMicroTickScope();
}
function propagateAllListeners(promise) {
  var listeners = promise._listeners;
  promise._listeners = [];
  for (var i = 0, len = listeners.length; i < len; ++i) {
    propagateToListener(promise, listeners[i]);
  }
  var psd = promise._PSD;
  --psd.ref || psd.finalize();
  if (numScheduledCalls === 0) {
    ++numScheduledCalls;
    asap(() => {
      if (--numScheduledCalls === 0) finalizePhysicalTick();
    }, []);
  }
}
function propagateToListener(promise, listener) {
  if (promise._state === null) {
    promise._listeners.push(listener);
    return;
  }
  var cb = promise._state ? listener.onFulfilled : listener.onRejected;
  if (cb === null) {
    return (promise._state ? listener.resolve : listener.reject)(promise._value);
  }
  ++listener.psd.ref;
  ++numScheduledCalls;
  asap(callListener, [cb, promise, listener]);
}
function callListener(cb, promise, listener) {
  try {
    currentFulfiller = promise;
    var ret,
      value = promise._value;
    if (promise._state) {
      ret = cb(value);
    } else {
      if (rejectingErrors.length) rejectingErrors = [];
      ret = cb(value);
      if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
    }
    listener.resolve(ret);
  } catch (e) {
    listener.reject(e);
  } finally {
    currentFulfiller = null;
    if (--numScheduledCalls === 0) finalizePhysicalTick();
    --listener.psd.ref || listener.psd.finalize();
  }
}
function getStack(promise, stacks, limit) {
  if (stacks.length === limit) return stacks;
  var stack = "";
  if (promise._state === false) {
    var failure = promise._value,
      errorName,
      message;
    if (failure != null) {
      errorName = failure.name || "Error";
      message = failure.message || failure;
      stack = prettyStack(failure, 0);
    } else {
      errorName = failure;
      message = "";
    }
    stacks.push(errorName + (message ? ": " + message : "") + stack);
  }
  if (debug) {
    stack = prettyStack(promise._stackHolder, 2);
    if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
    if (promise._prev) getStack(promise._prev, stacks, limit);
  }
  return stacks;
}
function linkToPreviousPromise(promise, prev) {
  var numPrev = prev ? prev._numPrev + 1 : 0;
  if (numPrev < LONG_STACKS_CLIP_LIMIT) {
    promise._prev = prev;
    promise._numPrev = numPrev;
  }
}
function physicalTick() {
  beginMicroTickScope() && endMicroTickScope();
}
function beginMicroTickScope() {
  var wasRootExec = isOutsideMicroTick;
  isOutsideMicroTick = false;
  needsNewPhysicalTick = false;
  return wasRootExec;
}
function endMicroTickScope() {
  var callbacks, i, l;
  do {
    while (microtickQueue.length > 0) {
      callbacks = microtickQueue;
      microtickQueue = [];
      l = callbacks.length;
      for (i = 0; i < l; ++i) {
        var item = callbacks[i];
        item[0].apply(null, item[1]);
      }
    }
  } while (microtickQueue.length > 0);
  isOutsideMicroTick = true;
  needsNewPhysicalTick = true;
}
function finalizePhysicalTick() {
  var unhandledErrs = unhandledErrors;
  unhandledErrors = [];
  unhandledErrs.forEach(p => {
    p._PSD.onunhandled.call(null, p._value, p);
  });
  var finalizers = tickFinalizers.slice(0);
  var i = finalizers.length;
  while (i) finalizers[--i]();
}
function run_at_end_of_this_or_next_physical_tick(fn) {
  function finalizer() {
    fn();
    tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
  }
  tickFinalizers.push(finalizer);
  ++numScheduledCalls;
  asap(() => {
    if (--numScheduledCalls === 0) finalizePhysicalTick();
  }, []);
}
function addPossiblyUnhandledError(promise) {
  if (!unhandledErrors.some(p => p._value === promise._value)) unhandledErrors.push(promise);
}
function markErrorAsHandled(promise) {
  var i = unhandledErrors.length;
  while (i) if (unhandledErrors[--i]._value === promise._value) {
    unhandledErrors.splice(i, 1);
    return;
  }
}
function PromiseReject(reason) {
  return new DexiePromise(INTERNAL, false, reason);
}
function wrap(fn, errorCatcher) {
  var psd = PSD;
  return function () {
    var wasRootExec = beginMicroTickScope(),
      outerScope = PSD;
    try {
      switchToZone(psd, true);
      return fn.apply(this, arguments);
    } catch (e) {
      errorCatcher && errorCatcher(e);
    } finally {
      switchToZone(outerScope, false);
      if (wasRootExec) endMicroTickScope();
    }
  };
}
var task = {
  awaits: 0,
  echoes: 0,
  id: 0
};
var taskCounter = 0;
var zoneStack = [];
var zoneEchoes = 0;
var totalEchoes = 0;
var zone_id_counter = 0;
function newScope(fn, props2, a1, a2) {
  var parent = PSD,
    psd = Object.create(parent);
  psd.parent = parent;
  psd.ref = 0;
  psd.global = false;
  psd.id = ++zone_id_counter;
  var globalEnv = globalPSD.env;
  psd.env = patchGlobalPromise ? {
    Promise: DexiePromise,
    PromiseProp: {
      value: DexiePromise,
      configurable: true,
      writable: true
    },
    all: DexiePromise.all,
    race: DexiePromise.race,
    allSettled: DexiePromise.allSettled,
    any: DexiePromise.any,
    resolve: DexiePromise.resolve,
    reject: DexiePromise.reject,
    nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
    gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
  } : {};
  if (props2) extend(psd, props2);
  ++parent.ref;
  psd.finalize = function () {
    --this.parent.ref || this.parent.finalize();
  };
  var rv = usePSD(psd, fn, a1, a2);
  if (psd.ref === 0) psd.finalize();
  return rv;
}
function incrementExpectedAwaits() {
  if (!task.id) task.id = ++taskCounter;
  ++task.awaits;
  task.echoes += ZONE_ECHO_LIMIT;
  return task.id;
}
function decrementExpectedAwaits() {
  if (!task.awaits) return false;
  if (--task.awaits === 0) task.id = 0;
  task.echoes = task.awaits * ZONE_ECHO_LIMIT;
  return true;
}
if (("" + nativePromiseThen).indexOf("[native code]") === -1) {
  incrementExpectedAwaits = decrementExpectedAwaits = nop;
}
function onPossibleParallellAsync(possiblePromise) {
  if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
    incrementExpectedAwaits();
    return possiblePromise.then(x => {
      decrementExpectedAwaits();
      return x;
    }, e => {
      decrementExpectedAwaits();
      return rejection(e);
    });
  }
  return possiblePromise;
}
function zoneEnterEcho(targetZone) {
  ++totalEchoes;
  if (!task.echoes || --task.echoes === 0) {
    task.echoes = task.id = 0;
  }
  zoneStack.push(PSD);
  switchToZone(targetZone, true);
}
function zoneLeaveEcho() {
  var zone = zoneStack[zoneStack.length - 1];
  zoneStack.pop();
  switchToZone(zone, false);
}
function switchToZone(targetZone, bEnteringZone) {
  var currentZone = PSD;
  if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
    enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
  }
  if (targetZone === PSD) return;
  PSD = targetZone;
  if (currentZone === globalPSD) globalPSD.env = snapShot();
  if (patchGlobalPromise) {
    var GlobalPromise = globalPSD.env.Promise;
    var targetEnv = targetZone.env;
    nativePromiseProto.then = targetEnv.nthen;
    GlobalPromise.prototype.then = targetEnv.gthen;
    if (currentZone.global || targetZone.global) {
      Object.defineProperty(_global, "Promise", targetEnv.PromiseProp);
      GlobalPromise.all = targetEnv.all;
      GlobalPromise.race = targetEnv.race;
      GlobalPromise.resolve = targetEnv.resolve;
      GlobalPromise.reject = targetEnv.reject;
      if (targetEnv.allSettled) GlobalPromise.allSettled = targetEnv.allSettled;
      if (targetEnv.any) GlobalPromise.any = targetEnv.any;
    }
  }
}
function snapShot() {
  var GlobalPromise = _global.Promise;
  return patchGlobalPromise ? {
    Promise: GlobalPromise,
    PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
    all: GlobalPromise.all,
    race: GlobalPromise.race,
    allSettled: GlobalPromise.allSettled,
    any: GlobalPromise.any,
    resolve: GlobalPromise.resolve,
    reject: GlobalPromise.reject,
    nthen: nativePromiseProto.then,
    gthen: GlobalPromise.prototype.then
  } : {};
}
function usePSD(psd, fn, a1, a2, a3) {
  var outerScope = PSD;
  try {
    switchToZone(psd, true);
    return fn(a1, a2, a3);
  } finally {
    switchToZone(outerScope, false);
  }
}
function enqueueNativeMicroTask(job) {
  nativePromiseThen.call(resolvedNativePromise, job);
}
function nativeAwaitCompatibleWrap(fn, zone, possibleAwait, cleanup) {
  return typeof fn !== "function" ? fn : function () {
    var outerZone = PSD;
    if (possibleAwait) incrementExpectedAwaits();
    switchToZone(zone, true);
    try {
      return fn.apply(this, arguments);
    } finally {
      switchToZone(outerZone, false);
      if (cleanup) enqueueNativeMicroTask(decrementExpectedAwaits);
    }
  };
}
function getPatchedPromiseThen(origThen, zone) {
  return function (onResolved, onRejected) {
    return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone), nativeAwaitCompatibleWrap(onRejected, zone));
  };
}
var UNHANDLEDREJECTION = "unhandledrejection";
function globalError(err, promise) {
  var rv;
  try {
    rv = promise.onuncatched(err);
  } catch (e) {}
  if (rv !== false) try {
    var event,
      eventData = {
        promise,
        reason: err
      };
    if (_global.document && document.createEvent) {
      event = document.createEvent("Event");
      event.initEvent(UNHANDLEDREJECTION, true, true);
      extend(event, eventData);
    } else if (_global.CustomEvent) {
      event = new CustomEvent(UNHANDLEDREJECTION, {
        detail: eventData
      });
      extend(event, eventData);
    }
    if (event && _global.dispatchEvent) {
      dispatchEvent(event);
      if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
        _global.onunhandledrejection(event);
      } catch (_) {}
    }
    if (debug && event && !event.defaultPrevented) {
      console.warn(`Unhandled rejection: ${err.stack || err}`);
    }
  } catch (e) {}
}
var rejection = DexiePromise.reject;
function tempTransaction(db, mode, storeNames, fn) {
  if (!db.idbdb || !db._state.openComplete && !PSD.letThrough && !db._vip) {
    if (db._state.openComplete) {
      return rejection(new exceptions.DatabaseClosed(db._state.dbOpenError));
    }
    if (!db._state.isBeingOpened) {
      if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
      db.open().catch(nop);
    }
    return db._state.dbReadyPromise.then(() => tempTransaction(db, mode, storeNames, fn));
  } else {
    var trans = db._createTransaction(mode, storeNames, db._dbSchema);
    try {
      trans.create();
      db._state.PR1398_maxLoop = 3;
    } catch (ex) {
      if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
        console.warn("Dexie: Need to reopen db");
        db._close();
        return db.open().then(() => tempTransaction(db, mode, storeNames, fn));
      }
      return rejection(ex);
    }
    return trans._promise(mode, (resolve, reject) => {
      return newScope(() => {
        PSD.trans = trans;
        return fn(resolve, reject, trans);
      });
    }).then(result => {
      return trans._completion.then(() => result);
    });
  }
}
var DEXIE_VERSION = "3.2.3";
var maxString = String.fromCharCode(65535);
var minKey = -Infinity;
var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
var STRING_EXPECTED = "String expected.";
var connections = [];
var isIEOrEdge = typeof navigator !== "undefined" && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
var hasIEDeleteObjectStoreBug = isIEOrEdge;
var hangsOnDeleteLargeKeyRange = isIEOrEdge;
var dexieStackFrameFilter = frame => !/(dexie\.js|dexie\.min\.js)/.test(frame);
var DBNAMES_DB = "__dbnames";
var READONLY = "readonly";
var READWRITE = "readwrite";
function combine(filter1, filter2) {
  return filter1 ? filter2 ? function () {
    return filter1.apply(this, arguments) && filter2.apply(this, arguments);
  } : filter1 : filter2;
}
var AnyRange = {
  type: 3,
  lower: -Infinity,
  lowerOpen: false,
  upper: [[]],
  upperOpen: false
};
function workaroundForUndefinedPrimKey(keyPath) {
  return typeof keyPath === "string" && !/\./.test(keyPath) ? obj => {
    if (obj[keyPath] === void 0 && keyPath in obj) {
      obj = deepClone(obj);
      delete obj[keyPath];
    }
    return obj;
  } : obj => obj;
}
var Table = class {
  _trans(mode, fn, writeLocked) {
    const trans = this._tx || PSD.trans;
    const tableName = this.name;
    function checkTableInTransaction(resolve, reject, trans2) {
      if (!trans2.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
      return fn(trans2.idbtrans, trans2);
    }
    const wasRootExec = beginMicroTickScope();
    try {
      return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(() => trans._promise(mode, checkTableInTransaction, writeLocked), {
        trans,
        transless: PSD.transless || PSD
      }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
    } finally {
      if (wasRootExec) endMicroTickScope();
    }
  }
  get(keyOrCrit, cb) {
    if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
    return this._trans("readonly", trans => {
      return this.core.get({
        trans,
        key: keyOrCrit
      }).then(res => this.hook.reading.fire(res));
    }).then(cb);
  }
  where(indexOrCrit) {
    if (typeof indexOrCrit === "string") return new this.db.WhereClause(this, indexOrCrit);
    if (isArray(indexOrCrit)) return new this.db.WhereClause(this, `[${indexOrCrit.join("+")}]`);
    const keyPaths = keys(indexOrCrit);
    if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
    const compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(ix => ix.compound && keyPaths.every(keyPath => ix.keyPath.indexOf(keyPath) >= 0) && ix.keyPath.every(keyPath => keyPaths.indexOf(keyPath) >= 0))[0];
    if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(kp => indexOrCrit[kp]));
    if (!compoundIndex && debug) console.warn(`The query ${JSON.stringify(indexOrCrit)} on ${this.name} would benefit of a compound index [${keyPaths.join("+")}]`);
    const {
      idxByName
    } = this.schema;
    const idb = this.db._deps.indexedDB;
    function equals(a, b) {
      try {
        return idb.cmp(a, b) === 0;
      } catch (e) {
        return false;
      }
    }
    const [idx, filterFunction] = keyPaths.reduce(([prevIndex, prevFilterFn], keyPath) => {
      const index = idxByName[keyPath];
      const value = indexOrCrit[keyPath];
      return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? x => {
        const prop = getByKeyPath(x, keyPath);
        return isArray(prop) && prop.some(item => equals(value, item));
      } : x => equals(value, getByKeyPath(x, keyPath))) : prevFilterFn];
    }, [null, null]);
    return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals("");
  }
  filter(filterFunction) {
    return this.toCollection().and(filterFunction);
  }
  count(thenShortcut) {
    return this.toCollection().count(thenShortcut);
  }
  offset(offset) {
    return this.toCollection().offset(offset);
  }
  limit(numRows) {
    return this.toCollection().limit(numRows);
  }
  each(callback) {
    return this.toCollection().each(callback);
  }
  toArray(thenShortcut) {
    return this.toCollection().toArray(thenShortcut);
  }
  toCollection() {
    return new this.db.Collection(new this.db.WhereClause(this));
  }
  orderBy(index) {
    return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? `[${index.join("+")}]` : index));
  }
  reverse() {
    return this.toCollection().reverse();
  }
  mapToClass(constructor) {
    this.schema.mappedClass = constructor;
    const readHook = obj => {
      if (!obj) return obj;
      const res = Object.create(constructor.prototype);
      for (var m in obj) if (hasOwn(obj, m)) try {
        res[m] = obj[m];
      } catch (_) {}
      return res;
    };
    if (this.schema.readHook) {
      this.hook.reading.unsubscribe(this.schema.readHook);
    }
    this.schema.readHook = readHook;
    this.hook("reading", readHook);
    return constructor;
  }
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return this.mapToClass(Class);
  }
  add(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "add",
        keys: key != null ? [key] : null,
        values: [objToAdd]
      });
    }).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  update(keyOrObject, modifications) {
    if (typeof keyOrObject === "object" && !isArray(keyOrObject)) {
      const key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
      if (key === void 0) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
      try {
        if (typeof modifications !== "function") {
          keys(modifications).forEach(keyPath => {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
        } else {
          modifications(keyOrObject, {
            value: keyOrObject,
            primKey: key
          });
        }
      } catch (_a) {}
      return this.where(":id").equals(key).modify(modifications);
    } else {
      return this.where(":id").equals(keyOrObject).modify(modifications);
    }
  }
  put(obj, key) {
    const {
      auto,
      keyPath
    } = this.schema.primKey;
    let objToAdd = obj;
    if (keyPath && auto) {
      objToAdd = workaroundForUndefinedPrimKey(keyPath)(obj);
    }
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "put",
      values: [objToAdd],
      keys: key != null ? [key] : null
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult).then(lastResult => {
      if (keyPath) {
        try {
          setByKeyPath(obj, keyPath, lastResult);
        } catch (_) {}
      }
      return lastResult;
    });
  }
  delete(key) {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "delete",
      keys: [key]
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  clear() {
    return this._trans("readwrite", trans => this.core.mutate({
      trans,
      type: "deleteRange",
      range: AnyRange
    })).then(res => res.numFailures ? DexiePromise.reject(res.failures[0]) : void 0);
  }
  bulkGet(keys2) {
    return this._trans("readonly", trans => {
      return this.core.getMany({
        keys: keys2,
        trans
      }).then(result => result.map(res => this.hook.reading.fire(res)));
    });
  }
  bulkAdd(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToAdd = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "add",
        keys: keys2,
        values: objectsToAdd,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkAdd(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkPut(objects, keysOrOptions, options) {
    const keys2 = Array.isArray(keysOrOptions) ? keysOrOptions : void 0;
    options = options || (keys2 ? void 0 : keysOrOptions);
    const wantResults = options ? options.allKeys : void 0;
    return this._trans("readwrite", trans => {
      const {
        auto,
        keyPath
      } = this.schema.primKey;
      if (keyPath && keys2) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
      if (keys2 && keys2.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
      const numObjects = objects.length;
      let objectsToPut = keyPath && auto ? objects.map(workaroundForUndefinedPrimKey(keyPath)) : objects;
      return this.core.mutate({
        trans,
        type: "put",
        keys: keys2,
        values: objectsToPut,
        wantResults
      }).then(({
        numFailures,
        results,
        lastResult,
        failures
      }) => {
        const result = wantResults ? results : lastResult;
        if (numFailures === 0) return result;
        throw new BulkError(`${this.name}.bulkPut(): ${numFailures} of ${numObjects} operations failed`, failures);
      });
    });
  }
  bulkDelete(keys2) {
    const numKeys = keys2.length;
    return this._trans("readwrite", trans => {
      return this.core.mutate({
        trans,
        type: "delete",
        keys: keys2
      });
    }).then(({
      numFailures,
      lastResult,
      failures
    }) => {
      if (numFailures === 0) return lastResult;
      throw new BulkError(`${this.name}.bulkDelete(): ${numFailures} of ${numKeys} operations failed`, failures);
    });
  }
};
function Events(ctx) {
  var evs = {};
  var rv = function (eventName, subscriber) {
    if (subscriber) {
      var i2 = arguments.length,
        args = new Array(i2 - 1);
      while (--i2) args[i2 - 1] = arguments[i2];
      evs[eventName].subscribe.apply(null, args);
      return ctx;
    } else if (typeof eventName === "string") {
      return evs[eventName];
    }
  };
  rv.addEventType = add;
  for (var i = 1, l = arguments.length; i < l; ++i) {
    add(arguments[i]);
  }
  return rv;
  function add(eventName, chainFunction, defaultFunction) {
    if (typeof eventName === "object") return addConfiguredEvents(eventName);
    if (!chainFunction) chainFunction = reverseStoppableEventChain;
    if (!defaultFunction) defaultFunction = nop;
    var context = {
      subscribers: [],
      fire: defaultFunction,
      subscribe: function (cb) {
        if (context.subscribers.indexOf(cb) === -1) {
          context.subscribers.push(cb);
          context.fire = chainFunction(context.fire, cb);
        }
      },
      unsubscribe: function (cb) {
        context.subscribers = context.subscribers.filter(function (fn) {
          return fn !== cb;
        });
        context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
      }
    };
    evs[eventName] = rv[eventName] = context;
    return context;
  }
  function addConfiguredEvents(cfg) {
    keys(cfg).forEach(function (eventName) {
      var args = cfg[eventName];
      if (isArray(args)) {
        add(eventName, cfg[eventName][0], cfg[eventName][1]);
      } else if (args === "asap") {
        var context = add(eventName, mirror, function fire() {
          var i2 = arguments.length,
            args2 = new Array(i2);
          while (i2--) args2[i2] = arguments[i2];
          context.subscribers.forEach(function (fn) {
            asap$1(function fireEvent() {
              fn.apply(null, args2);
            });
          });
        });
      } else throw new exceptions.InvalidArgument("Invalid event config");
    });
  }
}
function makeClassConstructor(prototype, constructor) {
  derive(constructor).from({
    prototype
  });
  return constructor;
}
function createTableConstructor(db) {
  return makeClassConstructor(Table.prototype, function Table2(name, tableSchema, trans) {
    this.db = db;
    this._tx = trans;
    this.name = name;
    this.schema = tableSchema;
    this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
      "creating": [hookCreatingChain, nop],
      "reading": [pureFunctionChain, mirror],
      "updating": [hookUpdatingChain, nop],
      "deleting": [hookDeletingChain, nop]
    });
  });
}
function isPlainKeyRange(ctx, ignoreLimitFilter) {
  return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
}
function addFilter(ctx, fn) {
  ctx.filter = combine(ctx.filter, fn);
}
function addReplayFilter(ctx, factory, isLimitFilter) {
  var curr = ctx.replayFilter;
  ctx.replayFilter = curr ? () => combine(curr(), factory()) : factory;
  ctx.justLimit = isLimitFilter && !curr;
}
function addMatchFilter(ctx, fn) {
  ctx.isMatch = combine(ctx.isMatch, fn);
}
function getIndexOrStore(ctx, coreSchema) {
  if (ctx.isPrimKey) return coreSchema.primaryKey;
  const index = coreSchema.getIndexByKeyPath(ctx.index);
  if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
  return index;
}
function openCursor(ctx, coreTable, trans) {
  const index = getIndexOrStore(ctx, coreTable.schema);
  return coreTable.openCursor({
    trans,
    values: !ctx.keysOnly,
    reverse: ctx.dir === "prev",
    unique: !!ctx.unique,
    query: {
      index,
      range: ctx.range
    }
  });
}
function iter(ctx, fn, coreTrans, coreTable) {
  const filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;
  if (!ctx.or) {
    return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
  } else {
    const set = {};
    const union = (item, cursor, advance) => {
      if (!filter || filter(cursor, advance, result => cursor.stop(result), err => cursor.fail(err))) {
        var primaryKey = cursor.primaryKey;
        var key = "" + primaryKey;
        if (key === "[object ArrayBuffer]") key = "" + new Uint8Array(primaryKey);
        if (!hasOwn(set, key)) {
          set[key] = true;
          fn(item, cursor, advance);
        }
      }
    };
    return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
  }
}
function iterate(cursorPromise, filter, fn, valueMapper) {
  var mappedFn = valueMapper ? (x, c, a) => fn(valueMapper(x), c, a) : fn;
  var wrappedFn = wrap(mappedFn);
  return cursorPromise.then(cursor => {
    if (cursor) {
      return cursor.start(() => {
        var c = () => cursor.continue();
        if (!filter || filter(cursor, advancer => c = advancer, val => {
          cursor.stop(val);
          c = nop;
        }, e => {
          cursor.fail(e);
          c = nop;
        })) wrappedFn(cursor.value, cursor, advancer => c = advancer);
        c();
      });
    }
  });
}
function cmp(a, b) {
  try {
    const ta = type(a);
    const tb = type(b);
    if (ta !== tb) {
      if (ta === "Array") return 1;
      if (tb === "Array") return -1;
      if (ta === "binary") return 1;
      if (tb === "binary") return -1;
      if (ta === "string") return 1;
      if (tb === "string") return -1;
      if (ta === "Date") return 1;
      if (tb !== "Date") return NaN;
      return -1;
    }
    switch (ta) {
      case "number":
      case "Date":
      case "string":
        return a > b ? 1 : a < b ? -1 : 0;
      case "binary":
        {
          return compareUint8Arrays(getUint8Array(a), getUint8Array(b));
        }
      case "Array":
        return compareArrays(a, b);
    }
  } catch (_a) {}
  return NaN;
}
function compareArrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    const res = cmp(a[i], b[i]);
    if (res !== 0) return res;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function compareUint8Arrays(a, b) {
  const al = a.length;
  const bl = b.length;
  const l = al < bl ? al : bl;
  for (let i = 0; i < l; ++i) {
    if (a[i] !== b[i]) return a[i] < b[i] ? -1 : 1;
  }
  return al === bl ? 0 : al < bl ? -1 : 1;
}
function type(x) {
  const t = typeof x;
  if (t !== "object") return t;
  if (ArrayBuffer.isView(x)) return "binary";
  const tsTag = toStringTag(x);
  return tsTag === "ArrayBuffer" ? "binary" : tsTag;
}
function getUint8Array(a) {
  if (a instanceof Uint8Array) return a;
  if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
  return new Uint8Array(a);
}
var Collection = class {
  _read(fn, cb) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readonly", fn).then(cb);
  }
  _write(fn) {
    var ctx = this._ctx;
    return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans("readwrite", fn, "locked");
  }
  _addAlgorithm(fn) {
    var ctx = this._ctx;
    ctx.algorithm = combine(ctx.algorithm, fn);
  }
  _iterate(fn, coreTrans) {
    return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
  }
  clone(props2) {
    var rv = Object.create(this.constructor.prototype),
      ctx = Object.create(this._ctx);
    if (props2) extend(ctx, props2);
    rv._ctx = ctx;
    return rv;
  }
  raw() {
    this._ctx.valueMapper = null;
    return this;
  }
  each(fn) {
    var ctx = this._ctx;
    return this._read(trans => iter(ctx, fn, trans, ctx.table.core));
  }
  count(cb) {
    return this._read(trans => {
      const ctx = this._ctx;
      const coreTable = ctx.table.core;
      if (isPlainKeyRange(ctx, true)) {
        return coreTable.count({
          trans,
          query: {
            index: getIndexOrStore(ctx, coreTable.schema),
            range: ctx.range
          }
        }).then(count2 => Math.min(count2, ctx.limit));
      } else {
        var count = 0;
        return iter(ctx, () => {
          ++count;
          return false;
        }, trans, coreTable).then(() => count);
      }
    }).then(cb);
  }
  sortBy(keyPath, cb) {
    const parts = keyPath.split(".").reverse(),
      lastPart = parts[0],
      lastIndex = parts.length - 1;
    function getval(obj, i) {
      if (i) return getval(obj[parts[i]], i - 1);
      return obj[lastPart];
    }
    var order = this._ctx.dir === "next" ? 1 : -1;
    function sorter(a, b) {
      var aVal = getval(a, lastIndex),
        bVal = getval(b, lastIndex);
      return aVal < bVal ? -order : aVal > bVal ? order : 0;
    }
    return this.toArray(function (a) {
      return a.sort(sorter);
    }).then(cb);
  }
  toArray(cb) {
    return this._read(trans => {
      var ctx = this._ctx;
      if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
        const {
          valueMapper
        } = ctx;
        const index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          limit: ctx.limit,
          values: true,
          query: {
            index,
            range: ctx.range
          }
        }).then(({
          result
        }) => valueMapper ? result.map(valueMapper) : result);
      } else {
        const a = [];
        return iter(ctx, item => a.push(item), trans, ctx.table.core).then(() => a);
      }
    }, cb);
  }
  offset(offset) {
    var ctx = this._ctx;
    if (offset <= 0) return this;
    ctx.offset += offset;
    if (isPlainKeyRange(ctx)) {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return (cursor, advance) => {
          if (offsetLeft === 0) return true;
          if (offsetLeft === 1) {
            --offsetLeft;
            return false;
          }
          advance(() => {
            cursor.advance(offsetLeft);
            offsetLeft = 0;
          });
          return false;
        };
      });
    } else {
      addReplayFilter(ctx, () => {
        var offsetLeft = offset;
        return () => --offsetLeft < 0;
      });
    }
    return this;
  }
  limit(numRows) {
    this._ctx.limit = Math.min(this._ctx.limit, numRows);
    addReplayFilter(this._ctx, () => {
      var rowsLeft = numRows;
      return function (cursor, advance, resolve) {
        if (--rowsLeft <= 0) advance(resolve);
        return rowsLeft >= 0;
      };
    }, true);
    return this;
  }
  until(filterFunction, bIncludeStopEntry) {
    addFilter(this._ctx, function (cursor, advance, resolve) {
      if (filterFunction(cursor.value)) {
        advance(resolve);
        return bIncludeStopEntry;
      } else {
        return true;
      }
    });
    return this;
  }
  first(cb) {
    return this.limit(1).toArray(function (a) {
      return a[0];
    }).then(cb);
  }
  last(cb) {
    return this.reverse().first(cb);
  }
  filter(filterFunction) {
    addFilter(this._ctx, function (cursor) {
      return filterFunction(cursor.value);
    });
    addMatchFilter(this._ctx, filterFunction);
    return this;
  }
  and(filter) {
    return this.filter(filter);
  }
  or(indexName) {
    return new this.db.WhereClause(this._ctx.table, indexName, this);
  }
  reverse() {
    this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
    if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
    return this;
  }
  desc() {
    return this.reverse();
  }
  eachKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.key, cursor);
    });
  }
  eachUniqueKey(cb) {
    this._ctx.unique = "unique";
    return this.eachKey(cb);
  }
  eachPrimaryKey(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    return this.each(function (val, cursor) {
      cb(cursor.primaryKey, cursor);
    });
  }
  keys(cb) {
    var ctx = this._ctx;
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.key);
    }).then(function () {
      return a;
    }).then(cb);
  }
  primaryKeys(cb) {
    var ctx = this._ctx;
    if (ctx.dir === "next" && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
      return this._read(trans => {
        var index = getIndexOrStore(ctx, ctx.table.core.schema);
        return ctx.table.core.query({
          trans,
          values: false,
          limit: ctx.limit,
          query: {
            index,
            range: ctx.range
          }
        });
      }).then(({
        result
      }) => result).then(cb);
    }
    ctx.keysOnly = !ctx.isMatch;
    var a = [];
    return this.each(function (item, cursor) {
      a.push(cursor.primaryKey);
    }).then(function () {
      return a;
    }).then(cb);
  }
  uniqueKeys(cb) {
    this._ctx.unique = "unique";
    return this.keys(cb);
  }
  firstKey(cb) {
    return this.limit(1).keys(function (a) {
      return a[0];
    }).then(cb);
  }
  lastKey(cb) {
    return this.reverse().firstKey(cb);
  }
  distinct() {
    var ctx = this._ctx,
      idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
    if (!idx || !idx.multi) return this;
    var set = {};
    addFilter(this._ctx, function (cursor) {
      var strKey = cursor.primaryKey.toString();
      var found = hasOwn(set, strKey);
      set[strKey] = true;
      return !found;
    });
    return this;
  }
  modify(changes) {
    var ctx = this._ctx;
    return this._write(trans => {
      var modifyer;
      if (typeof changes === "function") {
        modifyer = changes;
      } else {
        var keyPaths = keys(changes);
        var numKeys = keyPaths.length;
        modifyer = function (item) {
          var anythingModified = false;
          for (var i = 0; i < numKeys; ++i) {
            var keyPath = keyPaths[i],
              val = changes[keyPath];
            if (getByKeyPath(item, keyPath) !== val) {
              setByKeyPath(item, keyPath, val);
              anythingModified = true;
            }
          }
          return anythingModified;
        };
      }
      const coreTable = ctx.table.core;
      const {
        outbound,
        extractKey
      } = coreTable.schema.primaryKey;
      const limit = this.db._options.modifyChunkSize || 200;
      const totalFailures = [];
      let successCount = 0;
      const failedKeys = [];
      const applyMutateResult = (expectedCount, res) => {
        const {
          failures,
          numFailures
        } = res;
        successCount += expectedCount - numFailures;
        for (let pos of keys(failures)) {
          totalFailures.push(failures[pos]);
        }
      };
      return this.clone().primaryKeys().then(keys2 => {
        const nextChunk = offset => {
          const count = Math.min(limit, keys2.length - offset);
          return coreTable.getMany({
            trans,
            keys: keys2.slice(offset, offset + count),
            cache: "immutable"
          }).then(values => {
            const addValues = [];
            const putValues = [];
            const putKeys = outbound ? [] : null;
            const deleteKeys = [];
            for (let i = 0; i < count; ++i) {
              const origValue = values[i];
              const ctx2 = {
                value: deepClone(origValue),
                primKey: keys2[offset + i]
              };
              if (modifyer.call(ctx2, ctx2.value, ctx2) !== false) {
                if (ctx2.value == null) {
                  deleteKeys.push(keys2[offset + i]);
                } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx2.value)) !== 0) {
                  deleteKeys.push(keys2[offset + i]);
                  addValues.push(ctx2.value);
                } else {
                  putValues.push(ctx2.value);
                  if (outbound) putKeys.push(keys2[offset + i]);
                }
              }
            }
            const criteria = isPlainKeyRange(ctx) && ctx.limit === Infinity && (typeof changes !== "function" || changes === deleteCallback) && {
              index: ctx.index,
              range: ctx.range
            };
            return Promise.resolve(addValues.length > 0 && coreTable.mutate({
              trans,
              type: "add",
              values: addValues
            }).then(res => {
              for (let pos in res.failures) {
                deleteKeys.splice(parseInt(pos), 1);
              }
              applyMutateResult(addValues.length, res);
            })).then(() => (putValues.length > 0 || criteria && typeof changes === "object") && coreTable.mutate({
              trans,
              type: "put",
              keys: putKeys,
              values: putValues,
              criteria,
              changeSpec: typeof changes !== "function" && changes
            }).then(res => applyMutateResult(putValues.length, res))).then(() => (deleteKeys.length > 0 || criteria && changes === deleteCallback) && coreTable.mutate({
              trans,
              type: "delete",
              keys: deleteKeys,
              criteria
            }).then(res => applyMutateResult(deleteKeys.length, res))).then(() => {
              return keys2.length > offset + count && nextChunk(offset + limit);
            });
          });
        };
        return nextChunk(0).then(() => {
          if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
          return keys2.length;
        });
      });
    });
  }
  delete() {
    var ctx = this._ctx,
      range = ctx.range;
    if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
      return this._write(trans => {
        const {
          primaryKey
        } = ctx.table.core.schema;
        const coreRange = range;
        return ctx.table.core.count({
          trans,
          query: {
            index: primaryKey,
            range: coreRange
          }
        }).then(count => {
          return ctx.table.core.mutate({
            trans,
            type: "deleteRange",
            range: coreRange
          }).then(({
            failures,
            lastResult,
            results,
            numFailures
          }) => {
            if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(pos => failures[pos]), count - numFailures);
            return count - numFailures;
          });
        });
      });
    }
    return this.modify(deleteCallback);
  }
};
var deleteCallback = (value, ctx) => ctx.value = null;
function createCollectionConstructor(db) {
  return makeClassConstructor(Collection.prototype, function Collection2(whereClause, keyRangeGenerator) {
    this.db = db;
    let keyRange = AnyRange,
      error = null;
    if (keyRangeGenerator) try {
      keyRange = keyRangeGenerator();
    } catch (ex) {
      error = ex;
    }
    const whereCtx = whereClause._ctx;
    const table = whereCtx.table;
    const readingHook = table.hook.reading.fire;
    this._ctx = {
      table,
      index: whereCtx.index,
      isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
      range: keyRange,
      keysOnly: false,
      dir: "next",
      unique: "",
      algorithm: null,
      filter: null,
      replayFilter: null,
      justLimit: true,
      isMatch: null,
      offset: 0,
      limit: Infinity,
      error,
      or: whereCtx.or,
      valueMapper: readingHook !== mirror ? readingHook : null
    };
  });
}
function simpleCompare(a, b) {
  return a < b ? -1 : a === b ? 0 : 1;
}
function simpleCompareReverse(a, b) {
  return a > b ? -1 : a === b ? 0 : 1;
}
function fail(collectionOrWhereClause, err, T) {
  var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
  collection._ctx.error = T ? new T(err) : new TypeError(err);
  return collection;
}
function emptyCollection(whereClause) {
  return new whereClause.Collection(whereClause, () => rangeEqual("")).limit(0);
}
function upperFactory(dir) {
  return dir === "next" ? s => s.toUpperCase() : s => s.toLowerCase();
}
function lowerFactory(dir) {
  return dir === "next" ? s => s.toLowerCase() : s => s.toUpperCase();
}
function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp2, dir) {
  var length = Math.min(key.length, lowerNeedle.length);
  var llp = -1;
  for (var i = 0; i < length; ++i) {
    var lwrKeyChar = lowerKey[i];
    if (lwrKeyChar !== lowerNeedle[i]) {
      if (cmp2(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
      if (cmp2(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
      if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
      return null;
    }
    if (cmp2(key[i], lwrKeyChar) < 0) llp = i;
  }
  if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
  if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
  return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
}
function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
  var upper,
    lower,
    compare,
    upperNeedles,
    lowerNeedles,
    direction,
    nextKeySuffix,
    needlesLen = needles.length;
  if (!needles.every(s => typeof s === "string")) {
    return fail(whereClause, STRING_EXPECTED);
  }
  function initDirection(dir) {
    upper = upperFactory(dir);
    lower = lowerFactory(dir);
    compare = dir === "next" ? simpleCompare : simpleCompareReverse;
    var needleBounds = needles.map(function (needle) {
      return {
        lower: lower(needle),
        upper: upper(needle)
      };
    }).sort(function (a, b) {
      return compare(a.lower, b.lower);
    });
    upperNeedles = needleBounds.map(function (nb) {
      return nb.upper;
    });
    lowerNeedles = needleBounds.map(function (nb) {
      return nb.lower;
    });
    direction = dir;
    nextKeySuffix = dir === "next" ? "" : suffix;
  }
  initDirection("next");
  var c = new whereClause.Collection(whereClause, () => createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix));
  c._ondirectionchange = function (direction2) {
    initDirection(direction2);
  };
  var firstPossibleNeedle = 0;
  c._addAlgorithm(function (cursor, advance, resolve) {
    var key = cursor.key;
    if (typeof key !== "string") return false;
    var lowerKey = lower(key);
    if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
      return true;
    } else {
      var lowestPossibleCasing = null;
      for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
        var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
        if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
          lowestPossibleCasing = casing;
        }
      }
      if (lowestPossibleCasing !== null) {
        advance(function () {
          cursor.continue(lowestPossibleCasing + nextKeySuffix);
        });
      } else {
        advance(resolve);
      }
      return false;
    }
  });
  return c;
}
function createRange(lower, upper, lowerOpen, upperOpen) {
  return {
    type: 2,
    lower,
    upper,
    lowerOpen,
    upperOpen
  };
}
function rangeEqual(value) {
  return {
    type: 1,
    lower: value,
    upper: value
  };
}
var WhereClause = class {
  get Collection() {
    return this._ctx.table.db.Collection;
  }
  between(lower, upper, includeLower, includeUpper) {
    includeLower = includeLower !== false;
    includeUpper = includeUpper === true;
    try {
      if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
      return new this.Collection(this, () => createRange(lower, upper, !includeLower, !includeUpper));
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
  }
  equals(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => rangeEqual(value));
  }
  above(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, true));
  }
  aboveOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(value, void 0, false));
  }
  below(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value, false, true));
  }
  belowOrEqual(value) {
    if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
    return new this.Collection(this, () => createRange(void 0, value));
  }
  startsWith(str) {
    if (typeof str !== "string") return fail(this, STRING_EXPECTED);
    return this.between(str, str + maxString, true, true);
  }
  startsWithIgnoreCase(str) {
    if (str === "") return this.startsWith(str);
    return addIgnoreCaseAlgorithm(this, (x, a) => x.indexOf(a[0]) === 0, [str], maxString);
  }
  equalsIgnoreCase(str) {
    return addIgnoreCaseAlgorithm(this, (x, a) => x === a[0], [str], "");
  }
  anyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.indexOf(x) !== -1, set, "");
  }
  startsWithAnyOfIgnoreCase() {
    var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return emptyCollection(this);
    return addIgnoreCaseAlgorithm(this, (x, a) => a.some(n => x.indexOf(n) === 0), set, maxString);
  }
  anyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    let compare = this._cmp;
    try {
      set.sort(compare);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    if (set.length === 0) return emptyCollection(this);
    const c = new this.Collection(this, () => createRange(set[0], set[set.length - 1]));
    c._ondirectionchange = direction => {
      compare = direction === "next" ? this._ascending : this._descending;
      set.sort(compare);
    };
    let i = 0;
    c._addAlgorithm((cursor, advance, resolve) => {
      const key = cursor.key;
      while (compare(key, set[i]) > 0) {
        ++i;
        if (i === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (compare(key, set[i]) === 0) {
        return true;
      } else {
        advance(() => {
          cursor.continue(set[i]);
        });
        return false;
      }
    });
    return c;
  }
  notEqual(value) {
    return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
      includeLowers: false,
      includeUppers: false
    });
  }
  noneOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (set.length === 0) return new this.Collection(this);
    try {
      set.sort(this._ascending);
    } catch (e) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    const ranges = set.reduce((res, val) => res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]], null);
    ranges.push([set[set.length - 1], this.db._maxKey]);
    return this.inAnyRange(ranges, {
      includeLowers: false,
      includeUppers: false
    });
  }
  inAnyRange(ranges, options) {
    const cmp2 = this._cmp,
      ascending = this._ascending,
      descending = this._descending,
      min = this._min,
      max = this._max;
    if (ranges.length === 0) return emptyCollection(this);
    if (!ranges.every(range => range[0] !== void 0 && range[1] !== void 0 && ascending(range[0], range[1]) <= 0)) {
      return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
    }
    const includeLowers = !options || options.includeLowers !== false;
    const includeUppers = options && options.includeUppers === true;
    function addRange2(ranges2, newRange) {
      let i = 0,
        l = ranges2.length;
      for (; i < l; ++i) {
        const range = ranges2[i];
        if (cmp2(newRange[0], range[1]) < 0 && cmp2(newRange[1], range[0]) > 0) {
          range[0] = min(range[0], newRange[0]);
          range[1] = max(range[1], newRange[1]);
          break;
        }
      }
      if (i === l) ranges2.push(newRange);
      return ranges2;
    }
    let sortDirection = ascending;
    function rangeSorter(a, b) {
      return sortDirection(a[0], b[0]);
    }
    let set;
    try {
      set = ranges.reduce(addRange2, []);
      set.sort(rangeSorter);
    } catch (ex) {
      return fail(this, INVALID_KEY_ARGUMENT);
    }
    let rangePos = 0;
    const keyIsBeyondCurrentEntry = includeUppers ? key => ascending(key, set[rangePos][1]) > 0 : key => ascending(key, set[rangePos][1]) >= 0;
    const keyIsBeforeCurrentEntry = includeLowers ? key => descending(key, set[rangePos][0]) > 0 : key => descending(key, set[rangePos][0]) >= 0;
    function keyWithinCurrentRange(key) {
      return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
    }
    let checkKey = keyIsBeyondCurrentEntry;
    const c = new this.Collection(this, () => createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers));
    c._ondirectionchange = direction => {
      if (direction === "next") {
        checkKey = keyIsBeyondCurrentEntry;
        sortDirection = ascending;
      } else {
        checkKey = keyIsBeforeCurrentEntry;
        sortDirection = descending;
      }
      set.sort(rangeSorter);
    };
    c._addAlgorithm((cursor, advance, resolve) => {
      var key = cursor.key;
      while (checkKey(key)) {
        ++rangePos;
        if (rangePos === set.length) {
          advance(resolve);
          return false;
        }
      }
      if (keyWithinCurrentRange(key)) {
        return true;
      } else if (this._cmp(key, set[rangePos][1]) === 0 || this._cmp(key, set[rangePos][0]) === 0) {
        return false;
      } else {
        advance(() => {
          if (sortDirection === ascending) cursor.continue(set[rangePos][0]);else cursor.continue(set[rangePos][1]);
        });
        return false;
      }
    });
    return c;
  }
  startsWithAnyOf() {
    const set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
    if (!set.every(s => typeof s === "string")) {
      return fail(this, "startsWithAnyOf() only works with strings");
    }
    if (set.length === 0) return emptyCollection(this);
    return this.inAnyRange(set.map(str => [str, str + maxString]));
  }
};
function createWhereClauseConstructor(db) {
  return makeClassConstructor(WhereClause.prototype, function WhereClause2(table, index, orCollection) {
    this.db = db;
    this._ctx = {
      table,
      index: index === ":id" ? null : index,
      or: orCollection
    };
    const indexedDB2 = db._deps.indexedDB;
    if (!indexedDB2) throw new exceptions.MissingAPI();
    this._cmp = this._ascending = indexedDB2.cmp.bind(indexedDB2);
    this._descending = (a, b) => indexedDB2.cmp(b, a);
    this._max = (a, b) => indexedDB2.cmp(a, b) > 0 ? a : b;
    this._min = (a, b) => indexedDB2.cmp(a, b) < 0 ? a : b;
    this._IDBKeyRange = db._deps.IDBKeyRange;
  });
}
function eventRejectHandler(reject) {
  return wrap(function (event) {
    preventDefault(event);
    reject(event.target.error);
    return false;
  });
}
function preventDefault(event) {
  if (event.stopPropagation) event.stopPropagation();
  if (event.preventDefault) event.preventDefault();
}
var DEXIE_STORAGE_MUTATED_EVENT_NAME = "storagemutated";
var STORAGE_MUTATED_DOM_EVENT_NAME = "x-storagemutated-1";
var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
var Transaction = class {
  _lock() {
    assert(!PSD.global);
    ++this._reculock;
    if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
    return this;
  }
  _unlock() {
    assert(!PSD.global);
    if (--this._reculock === 0) {
      if (!PSD.global) PSD.lockOwnerFor = null;
      while (this._blockedFuncs.length > 0 && !this._locked()) {
        var fnAndPSD = this._blockedFuncs.shift();
        try {
          usePSD(fnAndPSD[1], fnAndPSD[0]);
        } catch (e) {}
      }
    }
    return this;
  }
  _locked() {
    return this._reculock && PSD.lockOwnerFor !== this;
  }
  create(idbtrans) {
    if (!this.mode) return this;
    const idbdb = this.db.idbdb;
    const dbOpenError = this.db._state.dbOpenError;
    assert(!this.idbtrans);
    if (!idbtrans && !idbdb) {
      switch (dbOpenError && dbOpenError.name) {
        case "DatabaseClosedError":
          throw new exceptions.DatabaseClosed(dbOpenError);
        case "MissingAPIError":
          throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);
        default:
          throw new exceptions.OpenFailed(dbOpenError);
      }
    }
    if (!this.active) throw new exceptions.TransactionInactive();
    assert(this._completion._state === null);
    idbtrans = this.idbtrans = idbtrans || (this.db.core ? this.db.core.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }) : idbdb.transaction(this.storeNames, this.mode, {
      durability: this.chromeTransactionDurability
    }));
    idbtrans.onerror = wrap(ev => {
      preventDefault(ev);
      this._reject(idbtrans.error);
    });
    idbtrans.onabort = wrap(ev => {
      preventDefault(ev);
      this.active && this._reject(new exceptions.Abort(idbtrans.error));
      this.active = false;
      this.on("abort").fire(ev);
    });
    idbtrans.oncomplete = wrap(() => {
      this.active = false;
      this._resolve();
      if ("mutatedParts" in idbtrans) {
        globalEvents.storagemutated.fire(idbtrans["mutatedParts"]);
      }
    });
    return this;
  }
  _promise(mode, fn, bWriteLock) {
    if (mode === "readwrite" && this.mode !== "readwrite") return rejection(new exceptions.ReadOnly("Transaction is readonly"));
    if (!this.active) return rejection(new exceptions.TransactionInactive());
    if (this._locked()) {
      return new DexiePromise((resolve, reject) => {
        this._blockedFuncs.push([() => {
          this._promise(mode, fn, bWriteLock).then(resolve, reject);
        }, PSD]);
      });
    } else if (bWriteLock) {
      return newScope(() => {
        var p2 = new DexiePromise((resolve, reject) => {
          this._lock();
          const rv = fn(resolve, reject, this);
          if (rv && rv.then) rv.then(resolve, reject);
        });
        p2.finally(() => this._unlock());
        p2._lib = true;
        return p2;
      });
    } else {
      var p = new DexiePromise((resolve, reject) => {
        var rv = fn(resolve, reject, this);
        if (rv && rv.then) rv.then(resolve, reject);
      });
      p._lib = true;
      return p;
    }
  }
  _root() {
    return this.parent ? this.parent._root() : this;
  }
  waitFor(promiseLike) {
    var root = this._root();
    const promise = DexiePromise.resolve(promiseLike);
    if (root._waitingFor) {
      root._waitingFor = root._waitingFor.then(() => promise);
    } else {
      root._waitingFor = promise;
      root._waitingQueue = [];
      var store = root.idbtrans.objectStore(root.storeNames[0]);
      (function spin() {
        ++root._spinCount;
        while (root._waitingQueue.length) root._waitingQueue.shift()();
        if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
      })();
    }
    var currentWaitPromise = root._waitingFor;
    return new DexiePromise((resolve, reject) => {
      promise.then(res => root._waitingQueue.push(wrap(resolve.bind(null, res))), err => root._waitingQueue.push(wrap(reject.bind(null, err)))).finally(() => {
        if (root._waitingFor === currentWaitPromise) {
          root._waitingFor = null;
        }
      });
    });
  }
  abort() {
    if (this.active) {
      this.active = false;
      if (this.idbtrans) this.idbtrans.abort();
      this._reject(new exceptions.Abort());
    }
  }
  table(tableName) {
    const memoizedTables = this._memoizedTables || (this._memoizedTables = {});
    if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
    const tableSchema = this.schema[tableName];
    if (!tableSchema) {
      throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
    }
    const transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
    transactionBoundTable.core = this.db.core.table(tableName);
    memoizedTables[tableName] = transactionBoundTable;
    return transactionBoundTable;
  }
};
function createTransactionConstructor(db) {
  return makeClassConstructor(Transaction.prototype, function Transaction2(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
    this.db = db;
    this.mode = mode;
    this.storeNames = storeNames;
    this.schema = dbschema;
    this.chromeTransactionDurability = chromeTransactionDurability;
    this.idbtrans = null;
    this.on = Events(this, "complete", "error", "abort");
    this.parent = parent || null;
    this.active = true;
    this._reculock = 0;
    this._blockedFuncs = [];
    this._resolve = null;
    this._reject = null;
    this._waitingFor = null;
    this._waitingQueue = null;
    this._spinCount = 0;
    this._completion = new DexiePromise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
    this._completion.then(() => {
      this.active = false;
      this.on.complete.fire();
    }, e => {
      var wasActive = this.active;
      this.active = false;
      this.on.error.fire(e);
      this.parent ? this.parent._reject(e) : wasActive && this.idbtrans && this.idbtrans.abort();
      return rejection(e);
    });
  });
}
function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
  return {
    name,
    keyPath,
    unique,
    multi,
    auto,
    compound,
    src: (unique && !isPrimKey ? "&" : "") + (multi ? "*" : "") + (auto ? "++" : "") + nameFromKeyPath(keyPath)
  };
}
function nameFromKeyPath(keyPath) {
  return typeof keyPath === "string" ? keyPath : keyPath ? "[" + [].join.call(keyPath, "+") + "]" : "";
}
function createTableSchema(name, primKey, indexes) {
  return {
    name,
    primKey,
    indexes,
    mappedClass: null,
    idxByName: arrayToObject(indexes, index => [index.name, index])
  };
}
function safariMultiStoreFix(storeNames) {
  return storeNames.length === 1 ? storeNames[0] : storeNames;
}
var getMaxKey = IdbKeyRange => {
  try {
    IdbKeyRange.only([[]]);
    getMaxKey = () => [[]];
    return [[]];
  } catch (e) {
    getMaxKey = () => maxString;
    return maxString;
  }
};
function getKeyExtractor(keyPath) {
  if (keyPath == null) {
    return () => void 0;
  } else if (typeof keyPath === "string") {
    return getSinglePathKeyExtractor(keyPath);
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function getSinglePathKeyExtractor(keyPath) {
  const split = keyPath.split(".");
  if (split.length === 1) {
    return obj => obj[keyPath];
  } else {
    return obj => getByKeyPath(obj, keyPath);
  }
}
function arrayify(arrayLike) {
  return [].slice.call(arrayLike);
}
var _id_counter = 0;
function getKeyPathAlias(keyPath) {
  return keyPath == null ? ":id" : typeof keyPath === "string" ? keyPath : `[${keyPath.join("+")}]`;
}
function createDBCore(db, IdbKeyRange, tmpTrans) {
  function extractSchema(db2, trans) {
    const tables2 = arrayify(db2.objectStoreNames);
    return {
      schema: {
        name: db2.name,
        tables: tables2.map(table => trans.objectStore(table)).map(store => {
          const {
            keyPath,
            autoIncrement
          } = store;
          const compound = isArray(keyPath);
          const outbound = keyPath == null;
          const indexByKeyPath = {};
          const result = {
            name: store.name,
            primaryKey: {
              name: null,
              isPrimaryKey: true,
              outbound,
              compound,
              keyPath,
              autoIncrement,
              unique: true,
              extractKey: getKeyExtractor(keyPath)
            },
            indexes: arrayify(store.indexNames).map(indexName => store.index(indexName)).map(index => {
              const {
                name,
                unique,
                multiEntry,
                keyPath: keyPath2
              } = index;
              const compound2 = isArray(keyPath2);
              const result2 = {
                name,
                compound: compound2,
                keyPath: keyPath2,
                unique,
                multiEntry,
                extractKey: getKeyExtractor(keyPath2)
              };
              indexByKeyPath[getKeyPathAlias(keyPath2)] = result2;
              return result2;
            }),
            getIndexByKeyPath: keyPath2 => indexByKeyPath[getKeyPathAlias(keyPath2)]
          };
          indexByKeyPath[":id"] = result.primaryKey;
          if (keyPath != null) {
            indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
          }
          return result;
        })
      },
      hasGetAll: tables2.length > 0 && "getAll" in trans.objectStore(tables2[0]) && !(typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
    };
  }
  function makeIDBKeyRange(range) {
    if (range.type === 3) return null;
    if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
    const {
      lower,
      upper,
      lowerOpen,
      upperOpen
    } = range;
    const idbRange = lower === void 0 ? upper === void 0 ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === void 0 ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
    return idbRange;
  }
  function createDbCoreTable(tableSchema) {
    const tableName = tableSchema.name;
    function mutate({
      trans,
      type: type2,
      keys: keys2,
      values,
      range
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const store = trans.objectStore(tableName);
        const outbound = store.keyPath == null;
        const isAddOrPut = type2 === "put" || type2 === "add";
        if (!isAddOrPut && type2 !== "delete" && type2 !== "deleteRange") throw new Error("Invalid operation type: " + type2);
        const {
          length
        } = keys2 || values || {
          length: 1
        };
        if (keys2 && values && keys2.length !== values.length) {
          throw new Error("Given keys array must have same length as given values array.");
        }
        if (length === 0) return resolve({
          numFailures: 0,
          failures: {},
          results: [],
          lastResult: void 0
        });
        let req;
        const reqs = [];
        const failures = [];
        let numFailures = 0;
        const errorHandler = event => {
          ++numFailures;
          preventDefault(event);
        };
        if (type2 === "deleteRange") {
          if (range.type === 4) return resolve({
            numFailures,
            failures,
            results: [],
            lastResult: void 0
          });
          if (range.type === 3) reqs.push(req = store.clear());else reqs.push(req = store.delete(makeIDBKeyRange(range)));
        } else {
          const [args1, args2] = isAddOrPut ? outbound ? [values, keys2] : [values, null] : [keys2, null];
          if (isAddOrPut) {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = args2 && args2[i] !== void 0 ? store[type2](args1[i], args2[i]) : store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          } else {
            for (let i = 0; i < length; ++i) {
              reqs.push(req = store[type2](args1[i]));
              req.onerror = errorHandler;
            }
          }
        }
        const done = event => {
          const lastResult = event.target.result;
          reqs.forEach((req2, i) => req2.error != null && (failures[i] = req2.error));
          resolve({
            numFailures,
            failures,
            results: type2 === "delete" ? keys2 : reqs.map(req2 => req2.result),
            lastResult
          });
        };
        req.onerror = event => {
          errorHandler(event);
          done(event);
        };
        req.onsuccess = done;
      });
    }
    function openCursor2({
      trans,
      values,
      query: query2,
      reverse,
      unique
    }) {
      return new Promise((resolve, reject) => {
        resolve = wrap(resolve);
        const {
          index,
          range
        } = query2;
        const store = trans.objectStore(tableName);
        const source = index.isPrimaryKey ? store : store.index(index.name);
        const direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
        const req = values || !("openKeyCursor" in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
        req.onerror = eventRejectHandler(reject);
        req.onsuccess = wrap(ev => {
          const cursor = req.result;
          if (!cursor) {
            resolve(null);
            return;
          }
          cursor.___id = ++_id_counter;
          cursor.done = false;
          const _cursorContinue = cursor.continue.bind(cursor);
          let _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
          if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
          const _cursorAdvance = cursor.advance.bind(cursor);
          const doThrowCursorIsNotStarted = () => {
            throw new Error("Cursor not started");
          };
          const doThrowCursorIsStopped = () => {
            throw new Error("Cursor not stopped");
          };
          cursor.trans = trans;
          cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
          cursor.fail = wrap(reject);
          cursor.next = function () {
            let gotOne = 1;
            return this.start(() => gotOne-- ? this.continue() : this.stop()).then(() => this);
          };
          cursor.start = callback => {
            const iterationPromise = new Promise((resolveIteration, rejectIteration) => {
              resolveIteration = wrap(resolveIteration);
              req.onerror = eventRejectHandler(rejectIteration);
              cursor.fail = rejectIteration;
              cursor.stop = value => {
                cursor.stop = cursor.continue = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                resolveIteration(value);
              };
            });
            const guardedCallback = () => {
              if (req.result) {
                try {
                  callback();
                } catch (err) {
                  cursor.fail(err);
                }
              } else {
                cursor.done = true;
                cursor.start = () => {
                  throw new Error("Cursor behind last entry");
                };
                cursor.stop();
              }
            };
            req.onsuccess = wrap(ev2 => {
              req.onsuccess = guardedCallback;
              guardedCallback();
            });
            cursor.continue = _cursorContinue;
            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
            cursor.advance = _cursorAdvance;
            guardedCallback();
            return iterationPromise;
          };
          resolve(cursor);
        }, reject);
      });
    }
    function query(hasGetAll2) {
      return request => {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const {
            trans,
            values,
            limit,
            query: query2
          } = request;
          const nonInfinitLimit = limit === Infinity ? void 0 : limit;
          const {
            index,
            range
          } = query2;
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          if (limit === 0) return resolve({
            result: []
          });
          if (hasGetAll2) {
            const req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);
            req.onsuccess = event => resolve({
              result: event.target.result
            });
            req.onerror = eventRejectHandler(reject);
          } else {
            let count = 0;
            const req = values || !("openKeyCursor" in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
            const result = [];
            req.onsuccess = event => {
              const cursor = req.result;
              if (!cursor) return resolve({
                result
              });
              result.push(values ? cursor.value : cursor.primaryKey);
              if (++count === limit) return resolve({
                result
              });
              cursor.continue();
            };
            req.onerror = eventRejectHandler(reject);
          }
        });
      };
    }
    return {
      name: tableName,
      schema: tableSchema,
      mutate,
      getMany({
        trans,
        keys: keys2
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const length = keys2.length;
          const result = new Array(length);
          let keyCount = 0;
          let callbackCount = 0;
          let req;
          const successHandler = event => {
            const req2 = event.target;
            if ((result[req2._pos] = req2.result) != null) ;
            if (++callbackCount === keyCount) resolve(result);
          };
          const errorHandler = eventRejectHandler(reject);
          for (let i = 0; i < length; ++i) {
            const key = keys2[i];
            if (key != null) {
              req = store.get(keys2[i]);
              req._pos = i;
              req.onsuccess = successHandler;
              req.onerror = errorHandler;
              ++keyCount;
            }
          }
          if (keyCount === 0) resolve(result);
        });
      },
      get({
        trans,
        key
      }) {
        return new Promise((resolve, reject) => {
          resolve = wrap(resolve);
          const store = trans.objectStore(tableName);
          const req = store.get(key);
          req.onsuccess = event => resolve(event.target.result);
          req.onerror = eventRejectHandler(reject);
        });
      },
      query: query(hasGetAll),
      openCursor: openCursor2,
      count({
        query: query2,
        trans
      }) {
        const {
          index,
          range
        } = query2;
        return new Promise((resolve, reject) => {
          const store = trans.objectStore(tableName);
          const source = index.isPrimaryKey ? store : store.index(index.name);
          const idbKeyRange = makeIDBKeyRange(range);
          const req = idbKeyRange ? source.count(idbKeyRange) : source.count();
          req.onsuccess = wrap(ev => resolve(ev.target.result));
          req.onerror = eventRejectHandler(reject);
        });
      }
    };
  }
  const {
    schema,
    hasGetAll
  } = extractSchema(db, tmpTrans);
  const tables = schema.tables.map(tableSchema => createDbCoreTable(tableSchema));
  const tableMap = {};
  tables.forEach(table => tableMap[table.name] = table);
  return {
    stack: "dbcore",
    transaction: db.transaction.bind(db),
    table(name) {
      const result = tableMap[name];
      if (!result) throw new Error(`Table '${name}' not found`);
      return tableMap[name];
    },
    MIN_KEY: -Infinity,
    MAX_KEY: getMaxKey(IdbKeyRange),
    schema
  };
}
function createMiddlewareStack(stackImpl, middlewares) {
  return middlewares.reduce((down, {
    create
  }) => ({
    ...down,
    ...create(down)
  }), stackImpl);
}
function createMiddlewareStacks(middlewares, idbdb, {
  IDBKeyRange,
  indexedDB: indexedDB2
}, tmpTrans) {
  const dbcore = createMiddlewareStack(createDBCore(idbdb, IDBKeyRange, tmpTrans), middlewares.dbcore);
  return {
    dbcore
  };
}
function generateMiddlewareStacks({
  _novip: db
}, tmpTrans) {
  const idbdb = tmpTrans.db;
  const stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
  db.core = stacks.dbcore;
  db.tables.forEach(table => {
    const tableName = table.name;
    if (db.core.schema.tables.some(tbl => tbl.name === tableName)) {
      table.core = db.core.table(tableName);
      if (db[tableName] instanceof db.Table) {
        db[tableName].core = table.core;
      }
    }
  });
}
function setApiOnPlace({
  _novip: db
}, objs, tableNames, dbschema) {
  tableNames.forEach(tableName => {
    const schema = dbschema[tableName];
    objs.forEach(obj => {
      const propDesc = getPropertyDescriptor(obj, tableName);
      if (!propDesc || "value" in propDesc && propDesc.value === void 0) {
        if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
          setProp(obj, tableName, {
            get() {
              return this.table(tableName);
            },
            set(value) {
              defineProperty(this, tableName, {
                value,
                writable: true,
                configurable: true,
                enumerable: true
              });
            }
          });
        } else {
          obj[tableName] = new db.Table(tableName, schema);
        }
      }
    });
  });
}
function removeTablesApi({
  _novip: db
}, objs) {
  objs.forEach(obj => {
    for (let key in obj) {
      if (obj[key] instanceof db.Table) delete obj[key];
    }
  });
}
function lowerVersionFirst(a, b) {
  return a._cfg.version - b._cfg.version;
}
function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
  const globalSchema = db._dbSchema;
  const trans = db._createTransaction("readwrite", db._storeNames, globalSchema);
  trans.create(idbUpgradeTrans);
  trans._completion.catch(reject);
  const rejectTransaction = trans._reject.bind(trans);
  const transless = PSD.transless || PSD;
  newScope(() => {
    PSD.trans = trans;
    PSD.transless = transless;
    if (oldVersion === 0) {
      keys(globalSchema).forEach(tableName => {
        createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
      });
      generateMiddlewareStacks(db, idbUpgradeTrans);
      DexiePromise.follow(() => db.on.populate.fire(trans)).catch(rejectTransaction);
    } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans).catch(rejectTransaction);
  });
}
function updateTablesAndIndexes({
  _novip: db
}, oldVersion, trans, idbUpgradeTrans) {
  const queue = [];
  const versions = db._versions;
  let globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
  let anyContentUpgraderHasRun = false;
  const versToRun = versions.filter(v => v._cfg.version >= oldVersion);
  versToRun.forEach(version => {
    queue.push(() => {
      const oldSchema = globalSchema;
      const newSchema = version._cfg.dbschema;
      adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
      adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
      globalSchema = db._dbSchema = newSchema;
      const diff = getSchemaDiff(oldSchema, newSchema);
      diff.add.forEach(tuple => {
        createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
      });
      diff.change.forEach(change => {
        if (change.recreate) {
          throw new exceptions.Upgrade("Not yet support for changing primary key");
        } else {
          const store = idbUpgradeTrans.objectStore(change.name);
          change.add.forEach(idx => addIndex(store, idx));
          change.change.forEach(idx => {
            store.deleteIndex(idx.name);
            addIndex(store, idx);
          });
          change.del.forEach(idxName => store.deleteIndex(idxName));
        }
      });
      const contentUpgrade = version._cfg.contentUpgrade;
      if (contentUpgrade && version._cfg.version > oldVersion) {
        generateMiddlewareStacks(db, idbUpgradeTrans);
        trans._memoizedTables = {};
        anyContentUpgraderHasRun = true;
        let upgradeSchema = shallowClone(newSchema);
        diff.del.forEach(table => {
          upgradeSchema[table] = oldSchema[table];
        });
        removeTablesApi(db, [db.Transaction.prototype]);
        setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema), upgradeSchema);
        trans.schema = upgradeSchema;
        const contentUpgradeIsAsync = isAsyncFunction(contentUpgrade);
        if (contentUpgradeIsAsync) {
          incrementExpectedAwaits();
        }
        let returnValue;
        const promiseFollowed = DexiePromise.follow(() => {
          returnValue = contentUpgrade(trans);
          if (returnValue) {
            if (contentUpgradeIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            }
          }
        });
        return returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue) : promiseFollowed.then(() => returnValue);
      }
    });
    queue.push(idbtrans => {
      if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
        const newSchema = version._cfg.dbschema;
        deleteRemovedTables(newSchema, idbtrans);
      }
      removeTablesApi(db, [db.Transaction.prototype]);
      setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
      trans.schema = db._dbSchema;
    });
  });
  function runQueue() {
    return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
  }
  return runQueue().then(() => {
    createMissingTables(globalSchema, idbUpgradeTrans);
  });
}
function getSchemaDiff(oldSchema, newSchema) {
  const diff = {
    del: [],
    add: [],
    change: []
  };
  let table;
  for (table in oldSchema) {
    if (!newSchema[table]) diff.del.push(table);
  }
  for (table in newSchema) {
    const oldDef = oldSchema[table],
      newDef = newSchema[table];
    if (!oldDef) {
      diff.add.push([table, newDef]);
    } else {
      const change = {
        name: table,
        def: newDef,
        recreate: false,
        del: [],
        add: [],
        change: []
      };
      if ("" + (oldDef.primKey.keyPath || "") !== "" + (newDef.primKey.keyPath || "") || oldDef.primKey.auto !== newDef.primKey.auto && !isIEOrEdge) {
        change.recreate = true;
        diff.change.push(change);
      } else {
        const oldIndexes = oldDef.idxByName;
        const newIndexes = newDef.idxByName;
        let idxName;
        for (idxName in oldIndexes) {
          if (!newIndexes[idxName]) change.del.push(idxName);
        }
        for (idxName in newIndexes) {
          const oldIdx = oldIndexes[idxName],
            newIdx = newIndexes[idxName];
          if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
        }
        if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
          diff.change.push(change);
        }
      }
    }
  }
  return diff;
}
function createTable(idbtrans, tableName, primKey, indexes) {
  const store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
    keyPath: primKey.keyPath,
    autoIncrement: primKey.auto
  } : {
    autoIncrement: primKey.auto
  });
  indexes.forEach(idx => addIndex(store, idx));
  return store;
}
function createMissingTables(newSchema, idbtrans) {
  keys(newSchema).forEach(tableName => {
    if (!idbtrans.db.objectStoreNames.contains(tableName)) {
      createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
    }
  });
}
function deleteRemovedTables(newSchema, idbtrans) {
  [].slice.call(idbtrans.db.objectStoreNames).forEach(storeName => newSchema[storeName] == null && idbtrans.db.deleteObjectStore(storeName));
}
function addIndex(store, idx) {
  store.createIndex(idx.name, idx.keyPath, {
    unique: idx.unique,
    multiEntry: idx.multi
  });
}
function buildGlobalSchema(db, idbdb, tmpTrans) {
  const globalSchema = {};
  const dbStoreNames = slice(idbdb.objectStoreNames, 0);
  dbStoreNames.forEach(storeName => {
    const store = tmpTrans.objectStore(storeName);
    let keyPath = store.keyPath;
    const primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
    const indexes = [];
    for (let j = 0; j < store.indexNames.length; ++j) {
      const idbindex = store.index(store.indexNames[j]);
      keyPath = idbindex.keyPath;
      var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
      indexes.push(index);
    }
    globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
  });
  return globalSchema;
}
function readGlobalSchema({
  _novip: db
}, idbdb, tmpTrans) {
  db.verno = idbdb.version / 10;
  const globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
  db._storeNames = slice(idbdb.objectStoreNames, 0);
  setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
}
function verifyInstalledSchema(db, tmpTrans) {
  const installedSchema = buildGlobalSchema(db, db.idbdb, tmpTrans);
  const diff = getSchemaDiff(installedSchema, db._dbSchema);
  return !(diff.add.length || diff.change.some(ch => ch.add.length || ch.change.length));
}
function adjustToExistingIndexNames({
  _novip: db
}, schema, idbtrans) {
  const storeNames = idbtrans.db.objectStoreNames;
  for (let i = 0; i < storeNames.length; ++i) {
    const storeName = storeNames[i];
    const store = idbtrans.objectStore(storeName);
    db._hasGetAll = "getAll" in store;
    for (let j = 0; j < store.indexNames.length; ++j) {
      const indexName = store.indexNames[j];
      const keyPath = store.index(indexName).keyPath;
      const dexieName = typeof keyPath === "string" ? keyPath : "[" + slice(keyPath).join("+") + "]";
      if (schema[storeName]) {
        const indexSpec = schema[storeName].idxByName[dexieName];
        if (indexSpec) {
          indexSpec.name = indexName;
          delete schema[storeName].idxByName[dexieName];
          schema[storeName].idxByName[indexName] = indexSpec;
        }
      }
    }
  }
  if (typeof navigator !== "undefined" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
    db._hasGetAll = false;
  }
}
function parseIndexSyntax(primKeyAndIndexes) {
  return primKeyAndIndexes.split(",").map((index, indexNum) => {
    index = index.trim();
    const name = index.replace(/([&*]|\+\+)/g, "");
    const keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split("+") : name;
    return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
  });
}
var Version = class {
  _parseStoresSpec(stores, outSchema) {
    keys(stores).forEach(tableName => {
      if (stores[tableName] !== null) {
        var indexes = parseIndexSyntax(stores[tableName]);
        var primKey = indexes.shift();
        if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
        indexes.forEach(idx => {
          if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
          if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
        });
        outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
      }
    });
  }
  stores(stores) {
    const db = this.db;
    this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
    const versions = db._versions;
    const storesSpec = {};
    let dbschema = {};
    versions.forEach(version => {
      extend(storesSpec, version._cfg.storesSource);
      dbschema = version._cfg.dbschema = {};
      version._parseStoresSpec(storesSpec, dbschema);
    });
    db._dbSchema = dbschema;
    removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
    setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
    db._storeNames = keys(dbschema);
    return this;
  }
  upgrade(upgradeFunction) {
    this._cfg.contentUpgrade = promisableChain(this._cfg.contentUpgrade || nop, upgradeFunction);
    return this;
  }
};
function createVersionConstructor(db) {
  return makeClassConstructor(Version.prototype, function Version2(versionNumber) {
    this.db = db;
    this._cfg = {
      version: versionNumber,
      storesSource: null,
      dbschema: {},
      tables: {},
      contentUpgrade: null
    };
  });
}
function getDbNamesTable(indexedDB2, IDBKeyRange) {
  let dbNamesDB = indexedDB2["_dbNamesDB"];
  if (!dbNamesDB) {
    dbNamesDB = indexedDB2["_dbNamesDB"] = new Dexie$1(DBNAMES_DB, {
      addons: [],
      indexedDB: indexedDB2,
      IDBKeyRange
    });
    dbNamesDB.version(1).stores({
      dbnames: "name"
    });
  }
  return dbNamesDB.table("dbnames");
}
function hasDatabasesNative(indexedDB2) {
  return indexedDB2 && typeof indexedDB2.databases === "function";
}
function getDatabaseNames({
  indexedDB: indexedDB2,
  IDBKeyRange
}) {
  return hasDatabasesNative(indexedDB2) ? Promise.resolve(indexedDB2.databases()).then(infos => infos.map(info => info.name).filter(name => name !== DBNAMES_DB)) : getDbNamesTable(indexedDB2, IDBKeyRange).toCollection().primaryKeys();
}
function _onDatabaseCreated({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).put({
    name
  }).catch(nop);
}
function _onDatabaseDeleted({
  indexedDB: indexedDB2,
  IDBKeyRange
}, name) {
  !hasDatabasesNative(indexedDB2) && name !== DBNAMES_DB && getDbNamesTable(indexedDB2, IDBKeyRange).delete(name).catch(nop);
}
function vip(fn) {
  return newScope(function () {
    PSD.letThrough = true;
    return fn();
  });
}
function idbReady() {
  var isSafari = !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!isSafari || !indexedDB.databases) return Promise.resolve();
  var intervalId;
  return new Promise(function (resolve) {
    var tryIdb = function () {
      return indexedDB.databases().finally(resolve);
    };
    intervalId = setInterval(tryIdb, 100);
    tryIdb();
  }).finally(function () {
    return clearInterval(intervalId);
  });
}
function dexieOpen(db) {
  const state = db._state;
  const {
    indexedDB: indexedDB2
  } = db._deps;
  if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(() => state.dbOpenError ? rejection(state.dbOpenError) : db);
  debug && (state.openCanceller._stackHolder = getErrorWithStack());
  state.isBeingOpened = true;
  state.dbOpenError = null;
  state.openComplete = false;
  const openCanceller = state.openCanceller;
  function throwIfCancelled() {
    if (state.openCanceller !== openCanceller) throw new exceptions.DatabaseClosed("db.open() was cancelled");
  }
  let resolveDbReady = state.dbReadyResolve,
    upgradeTransaction = null,
    wasCreated = false;
  return DexiePromise.race([openCanceller, (typeof navigator === "undefined" ? DexiePromise.resolve() : idbReady()).then(() => new DexiePromise((resolve, reject) => {
    throwIfCancelled();
    if (!indexedDB2) throw new exceptions.MissingAPI();
    const dbName = db.name;
    const req = state.autoSchema ? indexedDB2.open(dbName) : indexedDB2.open(dbName, Math.round(db.verno * 10));
    if (!req) throw new exceptions.MissingAPI();
    req.onerror = eventRejectHandler(reject);
    req.onblocked = wrap(db._fireOnBlocked);
    req.onupgradeneeded = wrap(e => {
      upgradeTransaction = req.transaction;
      if (state.autoSchema && !db._options.allowEmptyDB) {
        req.onerror = preventDefault;
        upgradeTransaction.abort();
        req.result.close();
        const delreq = indexedDB2.deleteDatabase(dbName);
        delreq.onsuccess = delreq.onerror = wrap(() => {
          reject(new exceptions.NoSuchDatabase(`Database ${dbName} doesnt exist`));
        });
      } else {
        upgradeTransaction.onerror = eventRejectHandler(reject);
        var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
        wasCreated = oldVer < 1;
        db._novip.idbdb = req.result;
        runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
      }
    }, reject);
    req.onsuccess = wrap(() => {
      upgradeTransaction = null;
      const idbdb = db._novip.idbdb = req.result;
      const objectStoreNames = slice(idbdb.objectStoreNames);
      if (objectStoreNames.length > 0) try {
        const tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), "readonly");
        if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else {
          adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
          if (!verifyInstalledSchema(db, tmpTrans)) {
            console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.`);
          }
        }
        generateMiddlewareStacks(db, tmpTrans);
      } catch (e) {}
      connections.push(db);
      idbdb.onversionchange = wrap(ev => {
        state.vcFired = true;
        db.on("versionchange").fire(ev);
      });
      idbdb.onclose = wrap(ev => {
        db.on("close").fire(ev);
      });
      if (wasCreated) _onDatabaseCreated(db._deps, dbName);
      resolve();
    }, reject);
  }))]).then(() => {
    throwIfCancelled();
    state.onReadyBeingFired = [];
    return DexiePromise.resolve(vip(() => db.on.ready.fire(db.vip))).then(function fireRemainders() {
      if (state.onReadyBeingFired.length > 0) {
        let remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(() => remainders(db.vip))).then(fireRemainders);
      }
    });
  }).finally(() => {
    state.onReadyBeingFired = null;
    state.isBeingOpened = false;
  }).then(() => {
    return db;
  }).catch(err => {
    state.dbOpenError = err;
    try {
      upgradeTransaction && upgradeTransaction.abort();
    } catch (_a) {}
    if (openCanceller === state.openCanceller) {
      db._close();
    }
    return rejection(err);
  }).finally(() => {
    state.openComplete = true;
    resolveDbReady();
  });
}
function awaitIterator(iterator) {
  var callNext = result => iterator.next(result),
    doThrow = error => iterator.throw(error),
    onSuccess = step(callNext),
    onError = step(doThrow);
  function step(getNext) {
    return val => {
      var next = getNext(val),
        value = next.value;
      return next.done ? value : !value || typeof value.then !== "function" ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
    };
  }
  return step(callNext)();
}
function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
  var i = arguments.length;
  if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
  var args = new Array(i - 1);
  while (--i) args[i - 1] = arguments[i];
  scopeFunc = args.pop();
  var tables = flatten(args);
  return [mode, tables, scopeFunc];
}
function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
  return DexiePromise.resolve().then(() => {
    const transless = PSD.transless || PSD;
    const trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);
    const zoneProps = {
      trans,
      transless
    };
    if (parentTransaction) {
      trans.idbtrans = parentTransaction.idbtrans;
    } else {
      try {
        trans.create();
        db._state.PR1398_maxLoop = 3;
      } catch (ex) {
        if (ex.name === errnames.InvalidState && db.isOpen() && --db._state.PR1398_maxLoop > 0) {
          console.warn("Dexie: Need to reopen db");
          db._close();
          return db.open().then(() => enterTransactionScope(db, mode, storeNames, null, scopeFunc));
        }
        return rejection(ex);
      }
    }
    const scopeFuncIsAsync = isAsyncFunction(scopeFunc);
    if (scopeFuncIsAsync) {
      incrementExpectedAwaits();
    }
    let returnValue;
    const promiseFollowed = DexiePromise.follow(() => {
      returnValue = scopeFunc.call(trans, trans);
      if (returnValue) {
        if (scopeFuncIsAsync) {
          var decrementor = decrementExpectedAwaits.bind(null, null);
          returnValue.then(decrementor, decrementor);
        } else if (typeof returnValue.next === "function" && typeof returnValue.throw === "function") {
          returnValue = awaitIterator(returnValue);
        }
      }
    }, zoneProps);
    return (returnValue && typeof returnValue.then === "function" ? DexiePromise.resolve(returnValue).then(x => trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))) : promiseFollowed.then(() => returnValue)).then(x => {
      if (parentTransaction) trans._resolve();
      return trans._completion.then(() => x);
    }).catch(e => {
      trans._reject(e);
      return rejection(e);
    });
  });
}
function pad(a, value, count) {
  const result = isArray(a) ? a.slice() : [a];
  for (let i = 0; i < count; ++i) result.push(value);
  return result;
}
function createVirtualIndexMiddleware(down) {
  return {
    ...down,
    table(tableName) {
      const table = down.table(tableName);
      const {
        schema
      } = table;
      const indexLookup = {};
      const allVirtualIndexes = [];
      function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
        const keyPathAlias = getKeyPathAlias(keyPath);
        const indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
        const keyLength = keyPath == null ? 0 : typeof keyPath === "string" ? 1 : keyPath.length;
        const isVirtual = keyTail > 0;
        const virtualIndex = {
          ...lowLevelIndex,
          isVirtual,
          keyTail,
          keyLength,
          extractKey: getKeyExtractor(keyPath),
          unique: !isVirtual && lowLevelIndex.unique
        };
        indexList.push(virtualIndex);
        if (!virtualIndex.isPrimaryKey) {
          allVirtualIndexes.push(virtualIndex);
        }
        if (keyLength > 1) {
          const virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
          addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
        }
        indexList.sort((a, b) => a.keyTail - b.keyTail);
        return virtualIndex;
      }
      const primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
      indexLookup[":id"] = [primaryKey];
      for (const index of schema.indexes) {
        addVirtualIndexes(index.keyPath, 0, index);
      }
      function findBestIndex(keyPath) {
        const result2 = indexLookup[getKeyPathAlias(keyPath)];
        return result2 && result2[0];
      }
      function translateRange(range, keyTail) {
        return {
          type: range.type === 1 ? 2 : range.type,
          lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
          lowerOpen: true,
          upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
          upperOpen: true
        };
      }
      function translateRequest(req) {
        const index = req.query.index;
        return index.isVirtual ? {
          ...req,
          query: {
            index,
            range: translateRange(req.query.range, index.keyTail)
          }
        } : req;
      }
      const result = {
        ...table,
        schema: {
          ...schema,
          primaryKey,
          indexes: allVirtualIndexes,
          getIndexByKeyPath: findBestIndex
        },
        count(req) {
          return table.count(translateRequest(req));
        },
        query(req) {
          return table.query(translateRequest(req));
        },
        openCursor(req) {
          const {
            keyTail,
            isVirtual,
            keyLength
          } = req.query.index;
          if (!isVirtual) return table.openCursor(req);
          function createVirtualCursor(cursor) {
            function _continue(key) {
              key != null ? cursor.continue(pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor.continue(cursor.key.slice(0, keyLength).concat(req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor.continue();
            }
            const virtualCursor = Object.create(cursor, {
              continue: {
                value: _continue
              },
              continuePrimaryKey: {
                value(key, primaryKey2) {
                  cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey2);
                }
              },
              primaryKey: {
                get() {
                  return cursor.primaryKey;
                }
              },
              key: {
                get() {
                  const key = cursor.key;
                  return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                }
              },
              value: {
                get() {
                  return cursor.value;
                }
              }
            });
            return virtualCursor;
          }
          return table.openCursor(translateRequest(req)).then(cursor => cursor && createVirtualCursor(cursor));
        }
      };
      return result;
    }
  };
}
var virtualIndexMiddleware = {
  stack: "dbcore",
  name: "VirtualIndexMiddleware",
  level: 1,
  create: createVirtualIndexMiddleware
};
function getObjectDiff(a, b, rv, prfx) {
  rv = rv || {};
  prfx = prfx || "";
  keys(a).forEach(prop => {
    if (!hasOwn(b, prop)) {
      rv[prfx + prop] = void 0;
    } else {
      var ap = a[prop],
        bp = b[prop];
      if (typeof ap === "object" && typeof bp === "object" && ap && bp) {
        const apTypeName = toStringTag(ap);
        const bpTypeName = toStringTag(bp);
        if (apTypeName !== bpTypeName) {
          rv[prfx + prop] = b[prop];
        } else if (apTypeName === "Object") {
          getObjectDiff(ap, bp, rv, prfx + prop + ".");
        } else if (ap !== bp) {
          rv[prfx + prop] = b[prop];
        }
      } else if (ap !== bp) rv[prfx + prop] = b[prop];
    }
  });
  keys(b).forEach(prop => {
    if (!hasOwn(a, prop)) {
      rv[prfx + prop] = b[prop];
    }
  });
  return rv;
}
function getEffectiveKeys(primaryKey, req) {
  if (req.type === "delete") return req.keys;
  return req.keys || req.values.map(primaryKey.extractKey);
}
var hooksMiddleware = {
  stack: "dbcore",
  name: "HooksMiddleware",
  level: 2,
  create: downCore => ({
    ...downCore,
    table(tableName) {
      const downTable = downCore.table(tableName);
      const {
        primaryKey
      } = downTable.schema;
      const tableMiddleware = {
        ...downTable,
        mutate(req) {
          const dxTrans = PSD.trans;
          const {
            deleting,
            creating,
            updating
          } = dxTrans.table(tableName).hook;
          switch (req.type) {
            case "add":
              if (creating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "put":
              if (creating.fire === nop && updating.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "delete":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => addPutOrDelete(req), true);
            case "deleteRange":
              if (deleting.fire === nop) break;
              return dxTrans._promise("readwrite", () => deleteRange(req), true);
          }
          return downTable.mutate(req);
          function addPutOrDelete(req2) {
            const dxTrans2 = PSD.trans;
            const keys2 = req2.keys || getEffectiveKeys(primaryKey, req2);
            if (!keys2) throw new Error("Keys missing");
            req2 = req2.type === "add" || req2.type === "put" ? {
              ...req2,
              keys: keys2
            } : {
              ...req2
            };
            if (req2.type !== "delete") req2.values = [...req2.values];
            if (req2.keys) req2.keys = [...req2.keys];
            return getExistingValues(downTable, req2, keys2).then(existingValues => {
              const contexts = keys2.map((key, i) => {
                const existingValue = existingValues[i];
                const ctx = {
                  onerror: null,
                  onsuccess: null
                };
                if (req2.type === "delete") {
                  deleting.fire.call(ctx, key, existingValue, dxTrans2);
                } else if (req2.type === "add" || existingValue === void 0) {
                  const generatedPrimaryKey = creating.fire.call(ctx, key, req2.values[i], dxTrans2);
                  if (key == null && generatedPrimaryKey != null) {
                    key = generatedPrimaryKey;
                    req2.keys[i] = key;
                    if (!primaryKey.outbound) {
                      setByKeyPath(req2.values[i], primaryKey.keyPath, key);
                    }
                  }
                } else {
                  const objectDiff = getObjectDiff(existingValue, req2.values[i]);
                  const additionalChanges = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans2);
                  if (additionalChanges) {
                    const requestedValue = req2.values[i];
                    Object.keys(additionalChanges).forEach(keyPath => {
                      if (hasOwn(requestedValue, keyPath)) {
                        requestedValue[keyPath] = additionalChanges[keyPath];
                      } else {
                        setByKeyPath(requestedValue, keyPath, additionalChanges[keyPath]);
                      }
                    });
                  }
                }
                return ctx;
              });
              return downTable.mutate(req2).then(({
                failures,
                results,
                numFailures,
                lastResult
              }) => {
                for (let i = 0; i < keys2.length; ++i) {
                  const primKey = results ? results[i] : keys2[i];
                  const ctx = contexts[i];
                  if (primKey == null) {
                    ctx.onerror && ctx.onerror(failures[i]);
                  } else {
                    ctx.onsuccess && ctx.onsuccess(req2.type === "put" && existingValues[i] ? req2.values[i] : primKey);
                  }
                }
                return {
                  failures,
                  results,
                  numFailures,
                  lastResult
                };
              }).catch(error => {
                contexts.forEach(ctx => ctx.onerror && ctx.onerror(error));
                return Promise.reject(error);
              });
            });
          }
          function deleteRange(req2) {
            return deleteNextChunk(req2.trans, req2.range, 1e4);
          }
          function deleteNextChunk(trans, range, limit) {
            return downTable.query({
              trans,
              values: false,
              query: {
                index: primaryKey,
                range
              },
              limit
            }).then(({
              result
            }) => {
              return addPutOrDelete({
                type: "delete",
                keys: result,
                trans
              }).then(res => {
                if (res.numFailures > 0) return Promise.reject(res.failures[0]);
                if (result.length < limit) {
                  return {
                    failures: [],
                    numFailures: 0,
                    lastResult: void 0
                  };
                } else {
                  return deleteNextChunk(trans, {
                    ...range,
                    lower: result[result.length - 1],
                    lowerOpen: true
                  }, limit);
                }
              });
            });
          }
        }
      };
      return tableMiddleware;
    }
  })
};
function getExistingValues(table, req, effectiveKeys) {
  return req.type === "add" ? Promise.resolve([]) : table.getMany({
    trans: req.trans,
    keys: effectiveKeys,
    cache: "immutable"
  });
}
function getFromTransactionCache(keys2, cache, clone) {
  try {
    if (!cache) return null;
    if (cache.keys.length < keys2.length) return null;
    const result = [];
    for (let i = 0, j = 0; i < cache.keys.length && j < keys2.length; ++i) {
      if (cmp(cache.keys[i], keys2[j]) !== 0) continue;
      result.push(clone ? deepClone(cache.values[i]) : cache.values[i]);
      ++j;
    }
    return result.length === keys2.length ? result : null;
  } catch (_a) {
    return null;
  }
}
var cacheExistingValuesMiddleware = {
  stack: "dbcore",
  level: -1,
  create: core => {
    return {
      table: tableName => {
        const table = core.table(tableName);
        return {
          ...table,
          getMany: req => {
            if (!req.cache) {
              return table.getMany(req);
            }
            const cachedResult = getFromTransactionCache(req.keys, req.trans["_cache"], req.cache === "clone");
            if (cachedResult) {
              return DexiePromise.resolve(cachedResult);
            }
            return table.getMany(req).then(res => {
              req.trans["_cache"] = {
                keys: req.keys,
                values: req.cache === "clone" ? deepClone(res) : res
              };
              return res;
            });
          },
          mutate: req => {
            if (req.type !== "add") req.trans["_cache"] = null;
            return table.mutate(req);
          }
        };
      }
    };
  }
};
function isEmptyRange(node) {
  return !("from" in node);
}
var RangeSet = function (fromOrTree, to) {
  if (this) {
    extend(this, arguments.length ? {
      d: 1,
      from: fromOrTree,
      to: arguments.length > 1 ? to : fromOrTree
    } : {
      d: 0
    });
  } else {
    const rv = new RangeSet();
    if (fromOrTree && "d" in fromOrTree) {
      extend(rv, fromOrTree);
    }
    return rv;
  }
};
props(RangeSet.prototype, {
  add(rangeSet) {
    mergeRanges(this, rangeSet);
    return this;
  },
  addKey(key) {
    addRange(this, key, key);
    return this;
  },
  addKeys(keys2) {
    keys2.forEach(key => addRange(this, key, key));
    return this;
  },
  [iteratorSymbol]() {
    return getRangeSetIterator(this);
  }
});
function addRange(target, from, to) {
  const diff = cmp(from, to);
  if (isNaN(diff)) return;
  if (diff > 0) throw RangeError();
  if (isEmptyRange(target)) return extend(target, {
    from,
    to,
    d: 1
  });
  const left = target.l;
  const right = target.r;
  if (cmp(to, target.from) < 0) {
    left ? addRange(left, from, to) : target.l = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.to) > 0) {
    right ? addRange(right, from, to) : target.r = {
      from,
      to,
      d: 1,
      l: null,
      r: null
    };
    return rebalance(target);
  }
  if (cmp(from, target.from) < 0) {
    target.from = from;
    target.l = null;
    target.d = right ? right.d + 1 : 1;
  }
  if (cmp(to, target.to) > 0) {
    target.to = to;
    target.r = null;
    target.d = target.l ? target.l.d + 1 : 1;
  }
  const rightWasCutOff = !target.r;
  if (left && !target.l) {
    mergeRanges(target, left);
  }
  if (right && rightWasCutOff) {
    mergeRanges(target, right);
  }
}
function mergeRanges(target, newSet) {
  function _addRangeSet(target2, {
    from,
    to,
    l,
    r
  }) {
    addRange(target2, from, to);
    if (l) _addRangeSet(target2, l);
    if (r) _addRangeSet(target2, r);
  }
  if (!isEmptyRange(newSet)) _addRangeSet(target, newSet);
}
function rangesOverlap(rangeSet1, rangeSet2) {
  const i1 = getRangeSetIterator(rangeSet2);
  let nextResult1 = i1.next();
  if (nextResult1.done) return false;
  let a = nextResult1.value;
  const i2 = getRangeSetIterator(rangeSet1);
  let nextResult2 = i2.next(a.from);
  let b = nextResult2.value;
  while (!nextResult1.done && !nextResult2.done) {
    if (cmp(b.from, a.to) <= 0 && cmp(b.to, a.from) >= 0) return true;
    cmp(a.from, b.from) < 0 ? a = (nextResult1 = i1.next(b.from)).value : b = (nextResult2 = i2.next(a.from)).value;
  }
  return false;
}
function getRangeSetIterator(node) {
  let state = isEmptyRange(node) ? null : {
    s: 0,
    n: node
  };
  return {
    next(key) {
      const keyProvided = arguments.length > 0;
      while (state) {
        switch (state.s) {
          case 0:
            state.s = 1;
            if (keyProvided) {
              while (state.n.l && cmp(key, state.n.from) < 0) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            } else {
              while (state.n.l) state = {
                up: state,
                n: state.n.l,
                s: 1
              };
            }
          case 1:
            state.s = 2;
            if (!keyProvided || cmp(key, state.n.to) <= 0) return {
              value: state.n,
              done: false
            };
          case 2:
            if (state.n.r) {
              state.s = 3;
              state = {
                up: state,
                n: state.n.r,
                s: 0
              };
              continue;
            }
          case 3:
            state = state.up;
        }
      }
      return {
        done: true
      };
    }
  };
}
function rebalance(target) {
  var _a, _b;
  const diff = (((_a = target.r) === null || _a === void 0 ? void 0 : _a.d) || 0) - (((_b = target.l) === null || _b === void 0 ? void 0 : _b.d) || 0);
  const r = diff > 1 ? "r" : diff < -1 ? "l" : "";
  if (r) {
    const l = r === "r" ? "l" : "r";
    const rootClone = {
      ...target
    };
    const oldRootRight = target[r];
    target.from = oldRootRight.from;
    target.to = oldRootRight.to;
    target[r] = oldRootRight[r];
    rootClone[r] = oldRootRight[l];
    target[l] = rootClone;
    rootClone.d = computeDepth(rootClone);
  }
  target.d = computeDepth(target);
}
function computeDepth({
  r,
  l
}) {
  return (r ? l ? Math.max(r.d, l.d) : r.d : l ? l.d : 0) + 1;
}
var observabilityMiddleware = {
  stack: "dbcore",
  level: 0,
  create: core => {
    const dbName = core.schema.name;
    const FULL_RANGE = new RangeSet(core.MIN_KEY, core.MAX_KEY);
    return {
      ...core,
      table: tableName => {
        const table = core.table(tableName);
        const {
          schema
        } = table;
        const {
          primaryKey
        } = schema;
        const {
          extractKey,
          outbound
        } = primaryKey;
        const tableClone = {
          ...table,
          mutate: req => {
            const trans = req.trans;
            const mutatedParts = trans.mutatedParts || (trans.mutatedParts = {});
            const getRangeSet = indexName => {
              const part = `idb://${dbName}/${tableName}/${indexName}`;
              return mutatedParts[part] || (mutatedParts[part] = new RangeSet());
            };
            const pkRangeSet = getRangeSet("");
            const delsRangeSet = getRangeSet(":dels");
            const {
              type: type2
            } = req;
            let [keys2, newObjs] = req.type === "deleteRange" ? [req.range] : req.type === "delete" ? [req.keys] : req.values.length < 50 ? [[], req.values] : [];
            const oldCache = req.trans["_cache"];
            return table.mutate(req).then(res => {
              if (isArray(keys2)) {
                if (type2 !== "delete") keys2 = res.results;
                pkRangeSet.addKeys(keys2);
                const oldObjs = getFromTransactionCache(keys2, oldCache);
                if (!oldObjs && type2 !== "add") {
                  delsRangeSet.addKeys(keys2);
                }
                if (oldObjs || newObjs) {
                  trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                }
              } else if (keys2) {
                const range = {
                  from: keys2.lower,
                  to: keys2.upper
                };
                delsRangeSet.add(range);
                pkRangeSet.add(range);
              } else {
                pkRangeSet.add(FULL_RANGE);
                delsRangeSet.add(FULL_RANGE);
                schema.indexes.forEach(idx => getRangeSet(idx.name).add(FULL_RANGE));
              }
              return res;
            });
          }
        };
        const getRange = ({
          query: {
            index,
            range
          }
        }) => {
          var _a, _b;
          return [index, new RangeSet((_a = range.lower) !== null && _a !== void 0 ? _a : core.MIN_KEY, (_b = range.upper) !== null && _b !== void 0 ? _b : core.MAX_KEY)];
        };
        const readSubscribers = {
          get: req => [primaryKey, new RangeSet(req.key)],
          getMany: req => [primaryKey, new RangeSet().addKeys(req.keys)],
          count: getRange,
          query: getRange,
          openCursor: getRange
        };
        keys(readSubscribers).forEach(method => {
          tableClone[method] = function (req) {
            const {
              subscr
            } = PSD;
            if (subscr) {
              const getRangeSet = indexName => {
                const part = `idb://${dbName}/${tableName}/${indexName}`;
                return subscr[part] || (subscr[part] = new RangeSet());
              };
              const pkRangeSet = getRangeSet("");
              const delsRangeSet = getRangeSet(":dels");
              const [queriedIndex, queriedRanges] = readSubscribers[method](req);
              getRangeSet(queriedIndex.name || "").add(queriedRanges);
              if (!queriedIndex.isPrimaryKey) {
                if (method === "count") {
                  delsRangeSet.add(FULL_RANGE);
                } else {
                  const keysPromise = method === "query" && outbound && req.values && table.query({
                    ...req,
                    values: false
                  });
                  return table[method].apply(this, arguments).then(res => {
                    if (method === "query") {
                      if (outbound && req.values) {
                        return keysPromise.then(({
                          result: resultingKeys
                        }) => {
                          pkRangeSet.addKeys(resultingKeys);
                          return res;
                        });
                      }
                      const pKeys = req.values ? res.result.map(extractKey) : res.result;
                      if (req.values) {
                        pkRangeSet.addKeys(pKeys);
                      } else {
                        delsRangeSet.addKeys(pKeys);
                      }
                    } else if (method === "openCursor") {
                      const cursor = res;
                      const wantValues = req.values;
                      return cursor && Object.create(cursor, {
                        key: {
                          get() {
                            delsRangeSet.addKey(cursor.primaryKey);
                            return cursor.key;
                          }
                        },
                        primaryKey: {
                          get() {
                            const pkey = cursor.primaryKey;
                            delsRangeSet.addKey(pkey);
                            return pkey;
                          }
                        },
                        value: {
                          get() {
                            wantValues && pkRangeSet.addKey(cursor.primaryKey);
                            return cursor.value;
                          }
                        }
                      });
                    }
                    return res;
                  });
                }
              }
            }
            return table[method].apply(this, arguments);
          };
        });
        return tableClone;
      }
    };
  }
};
function trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs) {
  function addAffectedIndex(ix) {
    const rangeSet = getRangeSet(ix.name || "");
    function extractKey(obj) {
      return obj != null ? ix.extractKey(obj) : null;
    }
    const addKeyOrKeys = key => ix.multiEntry && isArray(key) ? key.forEach(key2 => rangeSet.addKey(key2)) : rangeSet.addKey(key);
    (oldObjs || newObjs).forEach((_, i) => {
      const oldKey = oldObjs && extractKey(oldObjs[i]);
      const newKey = newObjs && extractKey(newObjs[i]);
      if (cmp(oldKey, newKey) !== 0) {
        if (oldKey != null) addKeyOrKeys(oldKey);
        if (newKey != null) addKeyOrKeys(newKey);
      }
    });
  }
  schema.indexes.forEach(addAffectedIndex);
}
var Dexie$1 = class {
  constructor(name, options) {
    this._middlewares = {};
    this.verno = 0;
    const deps = Dexie$1.dependencies;
    this._options = options = {
      addons: Dexie$1.addons,
      autoOpen: true,
      indexedDB: deps.indexedDB,
      IDBKeyRange: deps.IDBKeyRange,
      ...options
    };
    this._deps = {
      indexedDB: options.indexedDB,
      IDBKeyRange: options.IDBKeyRange
    };
    const {
      addons
    } = options;
    this._dbSchema = {};
    this._versions = [];
    this._storeNames = [];
    this._allTables = {};
    this.idbdb = null;
    this._novip = this;
    const state = {
      dbOpenError: null,
      isBeingOpened: false,
      onReadyBeingFired: null,
      openComplete: false,
      dbReadyResolve: nop,
      dbReadyPromise: null,
      cancelOpen: nop,
      openCanceller: null,
      autoSchema: true,
      PR1398_maxLoop: 3
    };
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
    this._state = state;
    this.name = name;
    this.on = Events(this, "populate", "blocked", "versionchange", "close", {
      ready: [promisableChain, nop]
    });
    this.on.ready.subscribe = override(this.on.ready.subscribe, subscribe => {
      return (subscriber, bSticky) => {
        Dexie$1.vip(() => {
          const state2 = this._state;
          if (state2.openComplete) {
            if (!state2.dbOpenError) DexiePromise.resolve().then(subscriber);
            if (bSticky) subscribe(subscriber);
          } else if (state2.onReadyBeingFired) {
            state2.onReadyBeingFired.push(subscriber);
            if (bSticky) subscribe(subscriber);
          } else {
            subscribe(subscriber);
            const db = this;
            if (!bSticky) subscribe(function unsubscribe() {
              db.on.ready.unsubscribe(subscriber);
              db.on.ready.unsubscribe(unsubscribe);
            });
          }
        });
      };
    });
    this.Collection = createCollectionConstructor(this);
    this.Table = createTableConstructor(this);
    this.Transaction = createTransactionConstructor(this);
    this.Version = createVersionConstructor(this);
    this.WhereClause = createWhereClauseConstructor(this);
    this.on("versionchange", ev => {
      if (ev.newVersion > 0) console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`);else console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`);
      this.close();
    });
    this.on("blocked", ev => {
      if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn(`Dexie.delete('${this.name}') was blocked`);else console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${ev.oldVersion / 10}`);
    });
    this._maxKey = getMaxKey(options.IDBKeyRange);
    this._createTransaction = (mode, storeNames, dbschema, parentTransaction) => new this.Transaction(mode, storeNames, dbschema, this._options.chromeTransactionDurability, parentTransaction);
    this._fireOnBlocked = ev => {
      this.on("blocked").fire(ev);
      connections.filter(c => c.name === this.name && c !== this && !c._state.vcFired).map(c => c.on("versionchange").fire(ev));
    };
    this.use(virtualIndexMiddleware);
    this.use(hooksMiddleware);
    this.use(observabilityMiddleware);
    this.use(cacheExistingValuesMiddleware);
    this.vip = Object.create(this, {
      _vip: {
        value: true
      }
    });
    addons.forEach(addon => addon(this));
  }
  version(versionNumber) {
    if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type(`Given version is not a positive number`);
    versionNumber = Math.round(versionNumber * 10) / 10;
    if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
    this.verno = Math.max(this.verno, versionNumber);
    const versions = this._versions;
    var versionInstance = versions.filter(v => v._cfg.version === versionNumber)[0];
    if (versionInstance) return versionInstance;
    versionInstance = new this.Version(versionNumber);
    versions.push(versionInstance);
    versions.sort(lowerVersionFirst);
    versionInstance.stores({});
    this._state.autoSchema = false;
    return versionInstance;
  }
  _whenReady(fn) {
    return this.idbdb && (this._state.openComplete || PSD.letThrough || this._vip) ? fn() : new DexiePromise((resolve, reject) => {
      if (this._state.openComplete) {
        return reject(new exceptions.DatabaseClosed(this._state.dbOpenError));
      }
      if (!this._state.isBeingOpened) {
        if (!this._options.autoOpen) {
          reject(new exceptions.DatabaseClosed());
          return;
        }
        this.open().catch(nop);
      }
      this._state.dbReadyPromise.then(resolve, reject);
    }).then(fn);
  }
  use({
    stack,
    create,
    level,
    name
  }) {
    if (name) this.unuse({
      stack,
      name
    });
    const middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
    middlewares.push({
      stack,
      create,
      level: level == null ? 10 : level,
      name
    });
    middlewares.sort((a, b) => a.level - b.level);
    return this;
  }
  unuse({
    stack,
    name,
    create
  }) {
    if (stack && this._middlewares[stack]) {
      this._middlewares[stack] = this._middlewares[stack].filter(mw => create ? mw.create !== create : name ? mw.name !== name : false);
    }
    return this;
  }
  open() {
    return dexieOpen(this);
  }
  _close() {
    const state = this._state;
    const idx = connections.indexOf(this);
    if (idx >= 0) connections.splice(idx, 1);
    if (this.idbdb) {
      try {
        this.idbdb.close();
      } catch (e) {}
      this._novip.idbdb = null;
    }
    state.dbReadyPromise = new DexiePromise(resolve => {
      state.dbReadyResolve = resolve;
    });
    state.openCanceller = new DexiePromise((_, reject) => {
      state.cancelOpen = reject;
    });
  }
  close() {
    this._close();
    const state = this._state;
    this._options.autoOpen = false;
    state.dbOpenError = new exceptions.DatabaseClosed();
    if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
  }
  delete() {
    const hasArguments = arguments.length > 0;
    const state = this._state;
    return new DexiePromise((resolve, reject) => {
      const doDelete = () => {
        this.close();
        var req = this._deps.indexedDB.deleteDatabase(this.name);
        req.onsuccess = wrap(() => {
          _onDatabaseDeleted(this._deps, this.name);
          resolve();
        });
        req.onerror = eventRejectHandler(reject);
        req.onblocked = this._fireOnBlocked;
      };
      if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");
      if (state.isBeingOpened) {
        state.dbReadyPromise.then(doDelete);
      } else {
        doDelete();
      }
    });
  }
  backendDB() {
    return this.idbdb;
  }
  isOpen() {
    return this.idbdb !== null;
  }
  hasBeenClosed() {
    const dbOpenError = this._state.dbOpenError;
    return dbOpenError && dbOpenError.name === "DatabaseClosed";
  }
  hasFailed() {
    return this._state.dbOpenError !== null;
  }
  dynamicallyOpened() {
    return this._state.autoSchema;
  }
  get tables() {
    return keys(this._allTables).map(name => this._allTables[name]);
  }
  transaction() {
    const args = extractTransactionArgs.apply(this, arguments);
    return this._transaction.apply(this, args);
  }
  _transaction(mode, tables, scopeFunc) {
    let parentTransaction = PSD.trans;
    if (!parentTransaction || parentTransaction.db !== this || mode.indexOf("!") !== -1) parentTransaction = null;
    const onlyIfCompatible = mode.indexOf("?") !== -1;
    mode = mode.replace("!", "").replace("?", "");
    let idbMode, storeNames;
    try {
      storeNames = tables.map(table => {
        var storeName = table instanceof this.Table ? table.name : table;
        if (typeof storeName !== "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
        return storeName;
      });
      if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);
      if (parentTransaction) {
        if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
          if (onlyIfCompatible) {
            parentTransaction = null;
          } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
        }
        if (parentTransaction) {
          storeNames.forEach(storeName => {
            if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
            }
          });
        }
        if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
          parentTransaction = null;
        }
      }
    } catch (e) {
      return parentTransaction ? parentTransaction._promise(null, (_, reject) => {
        reject(e);
      }) : rejection(e);
    }
    const enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
    return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, () => this._whenReady(enterTransaction)) : this._whenReady(enterTransaction);
  }
  table(tableName) {
    if (!hasOwn(this._allTables, tableName)) {
      throw new exceptions.InvalidTable(`Table ${tableName} does not exist`);
    }
    return this._allTables[tableName];
  }
};
var symbolObservable = typeof Symbol !== "undefined" && "observable" in Symbol ? Symbol.observable : "@@observable";
var Observable = class {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  subscribe(x, error, complete) {
    return this._subscribe(!x || typeof x === "function" ? {
      next: x,
      error,
      complete
    } : x);
  }
  [symbolObservable]() {
    return this;
  }
};
function extendObservabilitySet(target, newSet) {
  keys(newSet).forEach(part => {
    const rangeSet = target[part] || (target[part] = new RangeSet());
    mergeRanges(rangeSet, newSet[part]);
  });
  return target;
}
function liveQuery(querier) {
  return new Observable(observer => {
    const scopeFuncIsAsync = isAsyncFunction(querier);
    function execute(subscr) {
      if (scopeFuncIsAsync) {
        incrementExpectedAwaits();
      }
      const exec = () => newScope(querier, {
        subscr,
        trans: null
      });
      const rv = PSD.trans ? usePSD(PSD.transless, exec) : exec();
      if (scopeFuncIsAsync) {
        rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
      }
      return rv;
    }
    let closed = false;
    let accumMuts = {};
    let currentObs = {};
    const subscription = {
      get closed() {
        return closed;
      },
      unsubscribe: () => {
        closed = true;
        globalEvents.storagemutated.unsubscribe(mutationListener);
      }
    };
    observer.start && observer.start(subscription);
    let querying = false,
      startedListening = false;
    function shouldNotify() {
      return keys(currentObs).some(key => accumMuts[key] && rangesOverlap(accumMuts[key], currentObs[key]));
    }
    const mutationListener = parts => {
      extendObservabilitySet(accumMuts, parts);
      if (shouldNotify()) {
        doQuery();
      }
    };
    const doQuery = () => {
      if (querying || closed) return;
      accumMuts = {};
      const subscr = {};
      const ret = execute(subscr);
      if (!startedListening) {
        globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
        startedListening = true;
      }
      querying = true;
      Promise.resolve(ret).then(result => {
        querying = false;
        if (closed) return;
        if (shouldNotify()) {
          doQuery();
        } else {
          accumMuts = {};
          currentObs = subscr;
          observer.next && observer.next(result);
        }
      }, err => {
        querying = false;
        observer.error && observer.error(err);
        subscription.unsubscribe();
      });
    };
    doQuery();
    return subscription;
  });
}
var domDeps;
try {
  domDeps = {
    indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
    IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
  };
} catch (e) {
  domDeps = {
    indexedDB: null,
    IDBKeyRange: null
  };
}
var Dexie = Dexie$1;
props(Dexie, {
  ...fullNameExceptions,
  delete(databaseName) {
    const db = new Dexie(databaseName, {
      addons: []
    });
    return db.delete();
  },
  exists(name) {
    return new Dexie(name, {
      addons: []
    }).open().then(db => {
      db.close();
      return true;
    }).catch("NoSuchDatabaseError", () => false);
  },
  getDatabaseNames(cb) {
    try {
      return getDatabaseNames(Dexie.dependencies).then(cb);
    } catch (_a) {
      return rejection(new exceptions.MissingAPI());
    }
  },
  defineClass() {
    function Class(content) {
      extend(this, content);
    }
    return Class;
  },
  ignoreTransaction(scopeFunc) {
    return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
  },
  vip,
  async: function (generatorFn) {
    return function () {
      try {
        var rv = awaitIterator(generatorFn.apply(this, arguments));
        if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
        return rv;
      } catch (e) {
        return rejection(e);
      }
    };
  },
  spawn: function (generatorFn, args, thiz) {
    try {
      var rv = awaitIterator(generatorFn.apply(thiz, args || []));
      if (!rv || typeof rv.then !== "function") return DexiePromise.resolve(rv);
      return rv;
    } catch (e) {
      return rejection(e);
    }
  },
  currentTransaction: {
    get: () => PSD.trans || null
  },
  waitFor: function (promiseOrFunction, optionalTimeout) {
    const promise = DexiePromise.resolve(typeof promiseOrFunction === "function" ? Dexie.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 6e4);
    return PSD.trans ? PSD.trans.waitFor(promise) : promise;
  },
  Promise: DexiePromise,
  debug: {
    get: () => debug,
    set: value => {
      setDebug(value, value === "dexie" ? () => true : dexieStackFrameFilter);
    }
  },
  derive,
  extend,
  props,
  override,
  Events,
  on: globalEvents,
  liveQuery,
  extendObservabilitySet,
  getByKeyPath,
  setByKeyPath,
  delByKeyPath,
  shallowClone,
  deepClone,
  getObjectDiff,
  cmp,
  asap: asap$1,
  minKey,
  addons: [],
  connections,
  errnames,
  dependencies: domDeps,
  semVer: DEXIE_VERSION,
  version: DEXIE_VERSION.split(".").map(n => parseInt(n)).reduce((p, c, i) => p + c / Math.pow(10, i * 2))
});
Dexie.maxKey = getMaxKey(Dexie.dependencies.IDBKeyRange);
if (typeof dispatchEvent !== "undefined" && typeof addEventListener !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, updatedParts => {
    if (!propagatingLocally) {
      let event;
      if (isIEOrEdge) {
        event = document.createEvent("CustomEvent");
        event.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
      } else {
        event = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, {
          detail: updatedParts
        });
      }
      propagatingLocally = true;
      dispatchEvent(event);
      propagatingLocally = false;
    }
  });
  addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, ({
    detail
  }) => {
    if (!propagatingLocally) {
      propagateLocally(detail);
    }
  });
}
function propagateLocally(updateParts) {
  let wasMe = propagatingLocally;
  try {
    propagatingLocally = true;
    globalEvents.storagemutated.fire(updateParts);
  } finally {
    propagatingLocally = wasMe;
  }
}
var propagatingLocally = false;
if (typeof BroadcastChannel !== "undefined") {
  const bc = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
  if (typeof bc.unref === "function") {
    bc.unref();
  }
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    if (!propagatingLocally) {
      bc.postMessage(changedParts);
    }
  });
  bc.onmessage = ev => {
    if (ev.data) propagateLocally(ev.data);
  };
} else if (typeof self !== "undefined" && typeof navigator !== "undefined") {
  globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, changedParts => {
    try {
      if (!propagatingLocally) {
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, JSON.stringify({
            trig: Math.random(),
            changedParts
          }));
        }
        if (typeof self["clients"] === "object") {
          [...self["clients"].matchAll({
            includeUncontrolled: true
          })].forEach(client => client.postMessage({
            type: STORAGE_MUTATED_DOM_EVENT_NAME,
            changedParts
          }));
        }
      }
    } catch (_a) {}
  });
  if (typeof addEventListener !== "undefined") {
    addEventListener("storage", ev => {
      if (ev.key === STORAGE_MUTATED_DOM_EVENT_NAME) {
        const data = JSON.parse(ev.newValue);
        if (data) propagateLocally(data.changedParts);
      }
    });
  }
  const swContainer = self.document && navigator.serviceWorker;
  if (swContainer) {
    swContainer.addEventListener("message", propagateMessageLocally);
  }
}
function propagateMessageLocally({
  data
}) {
  if (data && data.type === STORAGE_MUTATED_DOM_EVENT_NAME) {
    propagateLocally(data.changedParts);
  }
}
DexiePromise.rejectionMapper = mapError;
setDebug(debug, dexieStackFrameFilter);

// .beyond/uimport/dexie.3.2.3.js
var dexie_3_2_3_default = Dexie$1;
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9kZXhpZS4zLjIuMy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy91dGlscy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kZWJ1Zy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZXJyb3JzL2Vycm9ycy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NoYWluaW5nLWZ1bmN0aW9ucy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9wcm9taXNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvdGVtcC10cmFuc2FjdGlvbi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9jb25zdGFudHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jb21iaW5lLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUva2V5cmFuZ2UudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy93b3JrYXJvdW5kLXVuZGVmaW5lZC1wcmlta2V5LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RhYmxlL3RhYmxlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL0V2ZW50cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL21ha2UtY2xhc3MtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdGFibGUvdGFibGUtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9jbXAudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvY29sbGVjdGlvbi9jb2xsZWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2NvbGxlY3Rpb24vY29sbGVjdGlvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2NvbXBhcmUtZnVuY3Rpb25zLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtaGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy93aGVyZS1jbGF1c2Uvd2hlcmUtY2xhdXNlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3doZXJlLWNsYXVzZS93aGVyZS1jbGF1c2UtY29uc3RydWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2Z1bmN0aW9ucy9ldmVudC13cmFwcGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZ2xvYmFscy9nbG9iYWwtZXZlbnRzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLWNvbnN0cnVjdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL2luZGV4LXNwZWMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2hlbHBlcnMvdGFibGUtc2NoZW1hLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9mdW5jdGlvbnMvcXVpcmtzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9kYmNvcmUvZ2V0LWtleS1leHRyYWN0b3IudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2RiY29yZS9kYmNvcmUtaW5kZXhlZGRiLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL2dlbmVyYXRlLW1pZGRsZXdhcmUtc3RhY2tzLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vc2NoZW1hLWhlbHBlcnMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvdmVyc2lvbi92ZXJzaW9uLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL3ZlcnNpb24vdmVyc2lvbi1jb25zdHJ1Y3Rvci50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaGVscGVycy9kYXRhYmFzZS1lbnVtZXJhdG9yLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9jbGFzc2VzL2RleGllL3ZpcC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9ub2RlX21vZHVsZXMvc2FmYXJpLTE0LWlkYi1maXgvZGlzdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1vcGVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3lpZWxkLXN1cHBvcnQudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvdHJhbnNhY3Rpb24taGVscGVycy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL3ZpcnR1YWwtaW5kZXgtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZnVuY3Rpb25zL2dldC1vYmplY3QtZGlmZi50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2dldC1lZmZlY3RpdmUta2V5cy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaG9va3MvaG9va3MtbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvZGJjb3JlL2NhY2hlLWV4aXN0aW5nLXZhbHVlcy1taWRkbGV3YXJlLnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9oZWxwZXJzL3Jhbmdlc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L29ic2VydmFiaWxpdHktbWlkZGxld2FyZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9vYnNlcnZhYmxlL29ic2VydmFibGUudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZXh0ZW5kLW9ic2VydmFiaWxpdHktc2V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL2RleGllL3NyYy9saXZlLXF1ZXJ5L2xpdmUtcXVlcnkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2NsYXNzZXMvZGV4aWUvZGV4aWUtZG9tLWRlcGVuZGVuY2llcy50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvY2xhc3Nlcy9kZXhpZS9kZXhpZS1zdGF0aWMtcHJvcHMudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvcHJvcGFnYXRlLWxvY2FsbHkudHMiLCIuLi9ub2RlX21vZHVsZXMvZGV4aWUvc3JjL2xpdmUtcXVlcnkvZW5hYmxlLWJyb2FkY2FzdC50cyIsIi4uL25vZGVfbW9kdWxlcy9kZXhpZS9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJEZXhpZSIsIlJhbmdlU2V0IiwiZGVmYXVsdCIsImxpdmVRdWVyeSIsIm1lcmdlUmFuZ2VzIiwicmFuZ2VzT3ZlcmxhcCIsIm1vZHVsZSIsIl9nbG9iYWwiLCJnbG9iYWxUaGlzIiwic2VsZiIsIndpbmRvdyIsImdsb2JhbCIsImtleXMiLCJPYmplY3QiLCJpc0FycmF5IiwiQXJyYXkiLCJQcm9taXNlIiwiZXh0ZW5kIiwib2JqIiwiZXh0ZW5zaW9uIiwiZm9yRWFjaCIsImtleSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJfaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJwcm9wIiwiY2FsbCIsInByb3BzIiwicHJvdG8iLCJSZWZsZWN0Iiwib3duS2V5cyIsInNldFByb3AiLCJkZWZpbmVQcm9wZXJ0eSIsImZ1bmN0aW9uT3JHZXRTZXQiLCJvcHRpb25zIiwiZ2V0Iiwic2V0IiwiY29uZmlndXJhYmxlIiwidmFsdWUiLCJ3cml0YWJsZSIsImRlcml2ZSIsIkNoaWxkIiwiZnJvbSIsIlBhcmVudCIsInByb3RvdHlwZSIsImNyZWF0ZSIsImJpbmQiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm9wZXJ0eURlc2NyaXB0b3IiLCJwZCIsIl9zbGljZSIsInNsaWNlIiwiYXJncyIsInN0YXJ0IiwiZW5kIiwib3ZlcnJpZGUiLCJvcmlnRnVuYyIsIm92ZXJyaWRlZEZhY3RvcnkiLCJhc3NlcnQiLCJiIiwiRXJyb3IiLCJhc2FwIiwiZm4iLCJzZXRJbW1lZGlhdGUiLCJzZXRUaW1lb3V0IiwiYXJyYXlUb09iamVjdCIsImFycmF5IiwiZXh0cmFjdG9yIiwicmVkdWNlIiwicmVzdWx0IiwiaXRlbSIsImkiLCJuYW1lQW5kVmFsdWUiLCJ0cnlDYXRjaCIsIm9uZXJyb3IiLCJhcHBseSIsImV4IiwiZ2V0QnlLZXlQYXRoIiwia2V5UGF0aCIsInJ2IiwibCIsImxlbmd0aCIsInZhbCIsInB1c2giLCJwZXJpb2QiLCJpbmRleE9mIiwiaW5uZXJPYmoiLCJzdWJzdHIiLCJzZXRCeUtleVBhdGgiLCJpc0Zyb3plbiIsImN1cnJlbnRLZXlQYXRoIiwicmVtYWluaW5nS2V5UGF0aCIsImlzTmFOIiwicGFyc2VJbnQiLCJzcGxpY2UiLCJkZWxCeUtleVBhdGgiLCJtYXAiLCJrcCIsInNoYWxsb3dDbG9uZSIsIm0iLCJjb25jYXQiLCJmbGF0dGVuIiwiYSIsImludHJpbnNpY1R5cGVOYW1lcyIsInNwbGl0IiwibnVtIiwidCIsImZpbHRlciIsImludHJpbnNpY1R5cGVzIiwieCIsImNpcmN1bGFyUmVmcyIsImRlZXBDbG9uZSIsImFueSIsIldlYWtNYXAiLCJpbm5lckRlZXBDbG9uZSIsImNvbnN0cnVjdG9yIiwidG9TdHJpbmciLCJ0b1N0cmluZ1RhZyIsIm8iLCJpdGVyYXRvclN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiZ2V0SXRlcmF0b3JPZiIsIk5PX0NIQVJfQVJSQVkiLCJnZXRBcnJheU9mIiwiYXJyYXlMaWtlIiwiaXQiLCJhcmd1bWVudHMiLCJuZXh0IiwiZG9uZSIsImlzQXN5bmNGdW5jdGlvbiIsImRlYnVnIiwibG9jYXRpb24iLCJ0ZXN0IiwiaHJlZiIsInNldERlYnVnIiwibGlicmFyeUZpbHRlciIsIk5FRURTX1RIUk9XX0ZPUl9TVEFDSyIsInN0YWNrIiwiZ2V0RXJyb3JXaXRoU3RhY2siLCJlIiwicHJldHR5U3RhY2siLCJleGNlcHRpb24iLCJudW1JZ25vcmVkRnJhbWVzIiwibmFtZSIsIm1lc3NhZ2UiLCJmcmFtZSIsImpvaW4iLCJkZXhpZUVycm9yTmFtZXMiLCJpZGJEb21FcnJvck5hbWVzIiwiZXJyb3JMaXN0IiwiZGVmYXVsdFRleHRzIiwiVmVyc2lvbkNoYW5nZWQiLCJEYXRhYmFzZUNsb3NlZCIsIkFib3J0IiwiVHJhbnNhY3Rpb25JbmFjdGl2ZSIsIk1pc3NpbmdBUEkiLCJEZXhpZUVycm9yIiwibXNnIiwiX2UiLCJfc3RhY2siLCJnZXRNdWx0aUVycm9yTWVzc2FnZSIsImZhaWx1cmVzIiwidiIsInMiLCJNb2RpZnlFcnJvciIsInN1Y2Nlc3NDb3VudCIsImZhaWxlZEtleXMiLCJCdWxrRXJyb3IiLCJwb3MiLCJmYWlsdXJlc0J5UG9zIiwiZXJybmFtZXMiLCJCYXNlRXhjZXB0aW9uIiwiZXhjZXB0aW9ucyIsImZ1bGxOYW1lIiwibXNnT3JJbm5lciIsImlubmVyIiwiU3ludGF4IiwiU3ludGF4RXJyb3IiLCJUeXBlIiwiVHlwZUVycm9yIiwiUmFuZ2UiLCJSYW5nZUVycm9yIiwiZXhjZXB0aW9uTWFwIiwibWFwRXJyb3IiLCJkb21FcnJvciIsImZ1bGxOYW1lRXhjZXB0aW9ucyIsIm5vcCIsIm1pcnJvciIsInB1cmVGdW5jdGlvbkNoYWluIiwiZjEiLCJmMiIsImNhbGxCb3RoIiwib24xIiwib24yIiwiaG9va0NyZWF0aW5nQ2hhaW4iLCJyZXMiLCJvbnN1Y2Nlc3MiLCJyZXMyIiwiaG9va0RlbGV0aW5nQ2hhaW4iLCJob29rVXBkYXRpbmdDaGFpbiIsIm1vZGlmaWNhdGlvbnMiLCJyZXZlcnNlU3RvcHBhYmxlRXZlbnRDaGFpbiIsInByb21pc2FibGVDaGFpbiIsInRoZW4iLCJ0aGl6IiwiSU5URVJOQUwiLCJMT05HX1NUQUNLU19DTElQX0xJTUlUIiwiTUFYX0xPTkdfU1RBQ0tTIiwiWk9ORV9FQ0hPX0xJTUlUIiwicmVzb2x2ZWROYXRpdmVQcm9taXNlIiwibmF0aXZlUHJvbWlzZVByb3RvIiwicmVzb2x2ZWRHbG9iYWxQcm9taXNlIiwiZ2xvYmFsUCIsInJlc29sdmUiLCJjcnlwdG8iLCJzdWJ0bGUiLCJuYXRpdmVQIiwiZGlnZXN0IiwiVWludDhBcnJheSIsIm5hdGl2ZVByb21pc2VUaGVuIiwiTmF0aXZlUHJvbWlzZSIsInBhdGNoR2xvYmFsUHJvbWlzZSIsInN0YWNrX2JlaW5nX2dlbmVyYXRlZCIsInNjaGVkdWxlUGh5c2ljYWxUaWNrIiwicGh5c2ljYWxUaWNrIiwiTXV0YXRpb25PYnNlcnZlciIsImhpZGRlbkRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsIm9ic2VydmUiLCJhdHRyaWJ1dGVzIiwic2V0QXR0cmlidXRlIiwiY2FsbGJhY2siLCJtaWNyb3RpY2tRdWV1ZSIsIm5lZWRzTmV3UGh5c2ljYWxUaWNrIiwiaXNPdXRzaWRlTWljcm9UaWNrIiwidW5oYW5kbGVkRXJyb3JzIiwicmVqZWN0aW5nRXJyb3JzIiwiY3VycmVudEZ1bGZpbGxlciIsInJlamVjdGlvbk1hcHBlciIsImdsb2JhbFBTRCIsImlkIiwicmVmIiwidW5oYW5kbGVkcyIsIm9udW5oYW5kbGVkIiwiZ2xvYmFsRXJyb3IiLCJwZ3AiLCJlbnYiLCJmaW5hbGl6ZSIsInVoIiwiUFNEIiwibnVtU2NoZWR1bGVkQ2FsbHMiLCJ0aWNrRmluYWxpemVycyIsIkRleGllUHJvbWlzZSIsIl9saXN0ZW5lcnMiLCJvbnVuY2F0Y2hlZCIsIl9saWIiLCJwc2QiLCJfUFNEIiwiX3N0YWNrSG9sZGVyIiwiX3ByZXYiLCJfbnVtUHJldiIsIl9zdGF0ZSIsIl92YWx1ZSIsImhhbmRsZVJlamVjdGlvbiIsImV4ZWN1dGVQcm9taXNlVGFzayIsInRoZW5Qcm9wIiwibWljcm9UYXNrSWQiLCJ0b3RhbEVjaG9lcyIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsInBvc3NpYmxlQXdhaXQiLCJjbGVhbnVwIiwiZGVjcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJyZWplY3QiLCJwcm9wYWdhdGVUb0xpc3RlbmVyIiwiTGlzdGVuZXIiLCJuYXRpdmVBd2FpdENvbXBhdGlibGVXcmFwIiwibGlua1RvUHJldmlvdXNQcm9taXNlIiwiX3RoZW4iLCJjYXRjaCIsInR5cGUiLCJoYW5kbGVyIiwiZXJyIiwiUHJvbWlzZVJlamVjdCIsImZpbmFsbHkiLCJvbkZpbmFsbHkiLCJzdGFja3MiLCJnZXRTdGFjayIsInRpbWVvdXQiLCJtcyIsIkluZmluaXR5IiwiaGFuZGxlIiwiVGltZW91dCIsImNsZWFyVGltZW91dCIsInNuYXBTaG90Iiwiem9uZSIsImFsbCIsInZhbHVlcyIsIm9uUG9zc2libGVQYXJhbGxlbGxBc3luYyIsInJlbWFpbmluZyIsInJhY2UiLCJuZXdQU0QiLCJuZXdTY29wZSIsInVzZVBTRCIsInNjaGVkdWxlciIsImZvbGxvdyIsInpvbmVQcm9wcyIsInJ1bl9hdF9lbmRfb2ZfdGhpc19vcl9uZXh0X3BoeXNpY2FsX3RpY2siLCJhbGxTZXR0bGVkIiwicG9zc2libGVQcm9taXNlcyIsInJlc3VsdHMiLCJwIiwic3RhdHVzIiwicmVhc29uIiwiQWdncmVnYXRlRXJyb3IiLCJmYWlsdXJlIiwicHJvbWlzZSIsInNob3VsZEV4ZWN1dGVUaWNrIiwiYmVnaW5NaWNyb1RpY2tTY29wZSIsInByb3BhZ2F0ZUFsbExpc3RlbmVycyIsImVuZE1pY3JvVGlja1Njb3BlIiwiX3Byb21pc2UiLCJvcmlnUHJvcCIsImFkZFBvc3NpYmx5VW5oYW5kbGVkRXJyb3IiLCJsaXN0ZW5lcnMiLCJsZW4iLCJmaW5hbGl6ZVBoeXNpY2FsVGljayIsImxpc3RlbmVyIiwiY2IiLCJjYWxsTGlzdGVuZXIiLCJyZXQiLCJtYXJrRXJyb3JBc0hhbmRsZWQiLCJsaW1pdCIsImVycm9yTmFtZSIsInByZXYiLCJudW1QcmV2Iiwid2FzUm9vdEV4ZWMiLCJjYWxsYmFja3MiLCJ1bmhhbmRsZWRFcnJzIiwiZmluYWxpemVycyIsImZpbmFsaXplciIsInNvbWUiLCJ3cmFwIiwiZXJyb3JDYXRjaGVyIiwib3V0ZXJTY29wZSIsInN3aXRjaFRvWm9uZSIsInRhc2siLCJhd2FpdHMiLCJlY2hvZXMiLCJ0YXNrQ291bnRlciIsInpvbmVTdGFjayIsInpvbmVFY2hvZXMiLCJ6b25lX2lkX2NvdW50ZXIiLCJhMSIsImEyIiwicGFyZW50IiwiZ2xvYmFsRW52IiwiUHJvbWlzZVByb3AiLCJudGhlbiIsImdldFBhdGNoZWRQcm9taXNlVGhlbiIsImd0aGVuIiwiaW5jcmVtZW50RXhwZWN0ZWRBd2FpdHMiLCJwb3NzaWJsZVByb21pc2UiLCJyZWplY3Rpb24iLCJ6b25lRW50ZXJFY2hvIiwidGFyZ2V0Wm9uZSIsInpvbmVMZWF2ZUVjaG8iLCJwb3AiLCJiRW50ZXJpbmdab25lIiwiY3VycmVudFpvbmUiLCJlbnF1ZXVlTmF0aXZlTWljcm9UYXNrIiwiR2xvYmFsUHJvbWlzZSIsInRhcmdldEVudiIsImEzIiwiam9iIiwib3V0ZXJab25lIiwib3JpZ1RoZW4iLCJvblJlc29sdmVkIiwiVU5IQU5ETEVEUkVKRUNUSU9OIiwiZXZlbnQiLCJldmVudERhdGEiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsIlByb21pc2VSZWplY3Rpb25FdmVudCIsIm9udW5oYW5kbGVkcmVqZWN0aW9uIiwiXyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb25zb2xlIiwid2FybiIsInRlbXBUcmFuc2FjdGlvbiIsImRiIiwibW9kZSIsInN0b3JlTmFtZXMiLCJpZGJkYiIsIm9wZW5Db21wbGV0ZSIsImxldFRocm91Z2giLCJfdmlwIiwiZGJPcGVuRXJyb3IiLCJpc0JlaW5nT3BlbmVkIiwiX29wdGlvbnMiLCJhdXRvT3BlbiIsIm9wZW4iLCJkYlJlYWR5UHJvbWlzZSIsInRyYW5zIiwiX2NyZWF0ZVRyYW5zYWN0aW9uIiwiX2RiU2NoZW1hIiwiUFIxMzk4X21heExvb3AiLCJJbnZhbGlkU3RhdGUiLCJpc09wZW4iLCJfY2xvc2UiLCJfY29tcGxldGlvbiIsIkRFWElFX1ZFUlNJT04iLCJtYXhTdHJpbmciLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJtaW5LZXkiLCJJTlZBTElEX0tFWV9BUkdVTUVOVCIsIlNUUklOR19FWFBFQ1RFRCIsImNvbm5lY3Rpb25zIiwiaXNJRU9yRWRnZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImhhc0lFRGVsZXRlT2JqZWN0U3RvcmVCdWciLCJoYW5nc09uRGVsZXRlTGFyZ2VLZXlSYW5nZSIsImRleGllU3RhY2tGcmFtZUZpbHRlciIsIkRCTkFNRVNfREIiLCJSRUFET05MWSIsIlJFQURXUklURSIsImNvbWJpbmUiLCJmaWx0ZXIxIiwiZmlsdGVyMiIsIkFueVJhbmdlIiwibG93ZXIiLCJsb3dlck9wZW4iLCJ1cHBlciIsInVwcGVyT3BlbiIsIndvcmthcm91bmRGb3JVbmRlZmluZWRQcmltS2V5IiwiVGFibGUiLCJfdHJhbnMiLCJ3cml0ZUxvY2tlZCIsIl90eCIsInRhYmxlTmFtZSIsImNoZWNrVGFibGVJblRyYW5zYWN0aW9uIiwic2NoZW1hIiwiTm90Rm91bmQiLCJpZGJ0cmFucyIsInRyYW5zbGVzcyIsImtleU9yQ3JpdCIsIndoZXJlIiwiZmlyc3QiLCJjb3JlIiwiaG9vayIsInJlYWRpbmciLCJmaXJlIiwiaW5kZXhPckNyaXQiLCJXaGVyZUNsYXVzZSIsImtleVBhdGhzIiwiZXF1YWxzIiwiY29tcG91bmRJbmRleCIsImluZGV4ZXMiLCJwcmltS2V5IiwiaXgiLCJjb21wb3VuZCIsImV2ZXJ5IiwiX21heEtleSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpZHhCeU5hbWUiLCJpZGIiLCJfZGVwcyIsImluZGV4ZWREQiIsImNtcCIsImlkeCIsImZpbHRlckZ1bmN0aW9uIiwicHJldkluZGV4IiwicHJldkZpbHRlckZuIiwiaW5kZXgiLCJtdWx0aSIsInRvQ29sbGVjdGlvbiIsImFuZCIsImNvdW50IiwidGhlblNob3J0Y3V0Iiwib2Zmc2V0IiwibnVtUm93cyIsImVhY2giLCJ0b0FycmF5IiwiQ29sbGVjdGlvbiIsIm9yZGVyQnkiLCJyZXZlcnNlIiwibWFwVG9DbGFzcyIsIm1hcHBlZENsYXNzIiwicmVhZEhvb2siLCJ1bnN1YnNjcmliZSIsImRlZmluZUNsYXNzIiwiQ2xhc3MiLCJjb250ZW50IiwiYWRkIiwiYXV0byIsIm9ialRvQWRkIiwibXV0YXRlIiwibnVtRmFpbHVyZXMiLCJsYXN0UmVzdWx0IiwidXBkYXRlIiwia2V5T3JPYmplY3QiLCJJbnZhbGlkQXJndW1lbnQiLCJfYSIsIm1vZGlmeSIsInB1dCIsImRlbGV0ZSIsImNsZWFyIiwicmFuZ2UiLCJidWxrR2V0IiwiZ2V0TWFueSIsImJ1bGtBZGQiLCJvYmplY3RzIiwia2V5c09yT3B0aW9ucyIsIndhbnRSZXN1bHRzIiwiYWxsS2V5cyIsIm51bU9iamVjdHMiLCJvYmplY3RzVG9BZGQiLCJidWxrUHV0Iiwib2JqZWN0c1RvUHV0IiwiYnVsa0RlbGV0ZSIsIm51bUtleXMiLCJFdmVudHMiLCJjdHgiLCJldnMiLCJldmVudE5hbWUiLCJzdWJzY3JpYmVyIiwic3Vic2NyaWJlIiwiYWRkRXZlbnRUeXBlIiwiY2hhaW5GdW5jdGlvbiIsImRlZmF1bHRGdW5jdGlvbiIsImFkZENvbmZpZ3VyZWRFdmVudHMiLCJjb250ZXh0Iiwic3Vic2NyaWJlcnMiLCJjZmciLCJmaXJlRXZlbnQiLCJtYWtlQ2xhc3NDb25zdHJ1Y3RvciIsImNyZWF0ZVRhYmxlQ29uc3RydWN0b3IiLCJ0YWJsZVNjaGVtYSIsIl9hbGxUYWJsZXMiLCJpc1BsYWluS2V5UmFuZ2UiLCJpZ25vcmVMaW1pdEZpbHRlciIsImFsZ29yaXRobSIsIm9yIiwianVzdExpbWl0IiwicmVwbGF5RmlsdGVyIiwiYWRkRmlsdGVyIiwiYWRkUmVwbGF5RmlsdGVyIiwiZmFjdG9yeSIsImlzTGltaXRGaWx0ZXIiLCJjdXJyIiwiYWRkTWF0Y2hGaWx0ZXIiLCJpc01hdGNoIiwiZ2V0SW5kZXhPclN0b3JlIiwiY29yZVNjaGVtYSIsImlzUHJpbUtleSIsInByaW1hcnlLZXkiLCJnZXRJbmRleEJ5S2V5UGF0aCIsIlNjaGVtYSIsIm9wZW5DdXJzb3IiLCJjb3JlVGFibGUiLCJrZXlzT25seSIsImRpciIsInVuaXF1ZSIsInF1ZXJ5IiwiaXRlciIsImNvcmVUcmFucyIsIml0ZXJhdGUiLCJ2YWx1ZU1hcHBlciIsInVuaW9uIiwiY3Vyc29yIiwiYWR2YW5jZSIsInN0b3AiLCJmYWlsIiwiX2l0ZXJhdGUiLCJjdXJzb3JQcm9taXNlIiwibWFwcGVkRm4iLCJjIiwid3JhcHBlZEZuIiwiY29udGludWUiLCJhZHZhbmNlciIsInRhIiwidGIiLCJOYU4iLCJjb21wYXJlVWludDhBcnJheXMiLCJnZXRVaW50OEFycmF5IiwiY29tcGFyZUFycmF5cyIsImFsIiwiYmwiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsInRzVGFnIiwiYnVmZmVyIiwiYnl0ZU9mZnNldCIsImJ5dGVMZW5ndGgiLCJfcmVhZCIsIl9jdHgiLCJlcnJvciIsInRhYmxlIiwiX3dyaXRlIiwiX2FkZEFsZ29yaXRobSIsImNsb25lIiwicmF3IiwiTWF0aCIsIm1pbiIsInNvcnRCeSIsInBhcnRzIiwibGFzdFBhcnQiLCJsYXN0SW5kZXgiLCJnZXR2YWwiLCJvcmRlciIsInNvcnRlciIsImFWYWwiLCJiVmFsIiwic29ydCIsIm9mZnNldExlZnQiLCJyb3dzTGVmdCIsInVudGlsIiwiYkluY2x1ZGVTdG9wRW50cnkiLCJsYXN0IiwiaW5kZXhOYW1lIiwiX29uZGlyZWN0aW9uY2hhbmdlIiwiZGVzYyIsImVhY2hLZXkiLCJlYWNoVW5pcXVlS2V5IiwiZWFjaFByaW1hcnlLZXkiLCJwcmltYXJ5S2V5cyIsInVuaXF1ZUtleXMiLCJmaXJzdEtleSIsImxhc3RLZXkiLCJkaXN0aW5jdCIsInN0cktleSIsImZvdW5kIiwiY2hhbmdlcyIsIm1vZGlmeWVyIiwiYW55dGhpbmdNb2RpZmllZCIsIm91dGJvdW5kIiwiZXh0cmFjdEtleSIsIm1vZGlmeUNodW5rU2l6ZSIsInRvdGFsRmFpbHVyZXMiLCJhcHBseU11dGF0ZVJlc3VsdCIsImV4cGVjdGVkQ291bnQiLCJuZXh0Q2h1bmsiLCJjYWNoZSIsImFkZFZhbHVlcyIsInB1dFZhbHVlcyIsInB1dEtleXMiLCJkZWxldGVLZXlzIiwib3JpZ1ZhbHVlIiwiY3JpdGVyaWEiLCJkZWxldGVDYWxsYmFjayIsImNoYW5nZVNwZWMiLCJjb3JlUmFuZ2UiLCJjcmVhdGVDb2xsZWN0aW9uQ29uc3RydWN0b3IiLCJ3aGVyZUNsYXVzZSIsImtleVJhbmdlR2VuZXJhdG9yIiwia2V5UmFuZ2UiLCJ3aGVyZUN0eCIsInJlYWRpbmdIb29rIiwic2ltcGxlQ29tcGFyZSIsInNpbXBsZUNvbXBhcmVSZXZlcnNlIiwiY29sbGVjdGlvbk9yV2hlcmVDbGF1c2UiLCJUIiwiY29sbGVjdGlvbiIsImVtcHR5Q29sbGVjdGlvbiIsInJhbmdlRXF1YWwiLCJ1cHBlckZhY3RvcnkiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibG93ZXJGYWN0b3J5IiwibmV4dENhc2luZyIsImxvd2VyS2V5IiwidXBwZXJOZWVkbGUiLCJsb3dlck5lZWRsZSIsImxscCIsImx3cktleUNoYXIiLCJhZGRJZ25vcmVDYXNlQWxnb3JpdGhtIiwibWF0Y2giLCJuZWVkbGVzIiwic3VmZml4IiwiY29tcGFyZSIsInVwcGVyTmVlZGxlcyIsImxvd2VyTmVlZGxlcyIsImRpcmVjdGlvbiIsIm5leHRLZXlTdWZmaXgiLCJuZWVkbGVzTGVuIiwiaW5pdERpcmVjdGlvbiIsIm5lZWRsZUJvdW5kcyIsIm5lZWRsZSIsIm5iIiwiY3JlYXRlUmFuZ2UiLCJmaXJzdFBvc3NpYmxlTmVlZGxlIiwibG93ZXN0UG9zc2libGVDYXNpbmciLCJjYXNpbmciLCJiZXR3ZWVuIiwiaW5jbHVkZUxvd2VyIiwiaW5jbHVkZVVwcGVyIiwiX2NtcCIsImFib3ZlIiwiYWJvdmVPckVxdWFsIiwiYmVsb3ciLCJiZWxvd09yRXF1YWwiLCJzdGFydHNXaXRoIiwic3RyIiwic3RhcnRzV2l0aElnbm9yZUNhc2UiLCJlcXVhbHNJZ25vcmVDYXNlIiwiYW55T2ZJZ25vcmVDYXNlIiwic3RhcnRzV2l0aEFueU9mSWdub3JlQ2FzZSIsIm4iLCJhbnlPZiIsIl9hc2NlbmRpbmciLCJfZGVzY2VuZGluZyIsIm5vdEVxdWFsIiwiaW5BbnlSYW5nZSIsImluY2x1ZGVMb3dlcnMiLCJpbmNsdWRlVXBwZXJzIiwibm9uZU9mIiwicmFuZ2VzIiwiYXNjZW5kaW5nIiwiZGVzY2VuZGluZyIsIl9taW4iLCJtYXgiLCJfbWF4IiwiYWRkUmFuZ2UiLCJuZXdSYW5nZSIsInNvcnREaXJlY3Rpb24iLCJyYW5nZVNvcnRlciIsInJhbmdlUG9zIiwia2V5SXNCZXlvbmRDdXJyZW50RW50cnkiLCJrZXlJc0JlZm9yZUN1cnJlbnRFbnRyeSIsImtleVdpdGhpbkN1cnJlbnRSYW5nZSIsImNoZWNrS2V5Iiwic3RhcnRzV2l0aEFueU9mIiwiY3JlYXRlV2hlcmVDbGF1c2VDb25zdHJ1Y3RvciIsIm9yQ29sbGVjdGlvbiIsIl9JREJLZXlSYW5nZSIsIklEQktleVJhbmdlIiwiZXZlbnRSZWplY3RIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJzdG9wUHJvcGFnYXRpb24iLCJERVhJRV9TVE9SQUdFX01VVEFURURfRVZFTlRfTkFNRSIsIlNUT1JBR0VfTVVUQVRFRF9ET01fRVZFTlRfTkFNRSIsImdsb2JhbEV2ZW50cyIsIlRyYW5zYWN0aW9uIiwiX2xvY2siLCJfcmVjdWxvY2siLCJsb2NrT3duZXJGb3IiLCJfdW5sb2NrIiwiX2Jsb2NrZWRGdW5jcyIsIl9sb2NrZWQiLCJmbkFuZFBTRCIsInNoaWZ0IiwiT3BlbkZhaWxlZCIsImFjdGl2ZSIsInRyYW5zYWN0aW9uIiwiZHVyYWJpbGl0eSIsImNocm9tZVRyYW5zYWN0aW9uRHVyYWJpbGl0eSIsImV2IiwiX3JlamVjdCIsIm9uYWJvcnQiLCJvbiIsIm9uY29tcGxldGUiLCJfcmVzb2x2ZSIsInN0b3JhZ2VtdXRhdGVkIiwiYldyaXRlTG9jayIsIlJlYWRPbmx5IiwiX3Jvb3QiLCJ3YWl0Rm9yIiwicHJvbWlzZUxpa2UiLCJyb290IiwiX3dhaXRpbmdGb3IiLCJfd2FpdGluZ1F1ZXVlIiwic3RvcmUiLCJvYmplY3RTdG9yZSIsInNwaW4iLCJfc3BpbkNvdW50IiwiY3VycmVudFdhaXRQcm9taXNlIiwiYWJvcnQiLCJtZW1vaXplZFRhYmxlcyIsIl9tZW1vaXplZFRhYmxlcyIsInRyYW5zYWN0aW9uQm91bmRUYWJsZSIsImNyZWF0ZVRyYW5zYWN0aW9uQ29uc3RydWN0b3IiLCJkYnNjaGVtYSIsImNvbXBsZXRlIiwid2FzQWN0aXZlIiwiY3JlYXRlSW5kZXhTcGVjIiwic3JjIiwibmFtZUZyb21LZXlQYXRoIiwiY3JlYXRlVGFibGVTY2hlbWEiLCJzYWZhcmlNdWx0aVN0b3JlRml4IiwiZ2V0TWF4S2V5IiwiSWRiS2V5UmFuZ2UiLCJvbmx5IiwiZ2V0S2V5RXh0cmFjdG9yIiwiZ2V0U2luZ2xlUGF0aEtleUV4dHJhY3RvciIsImFycmF5aWZ5IiwiX2lkX2NvdW50ZXIiLCJnZXRLZXlQYXRoQWxpYXMiLCJjcmVhdGVEQkNvcmUiLCJ0bXBUcmFucyIsImV4dHJhY3RTY2hlbWEiLCJ0YWJsZXMiLCJvYmplY3RTdG9yZU5hbWVzIiwiYXV0b0luY3JlbWVudCIsImluZGV4QnlLZXlQYXRoIiwiaXNQcmltYXJ5S2V5IiwiaW5kZXhOYW1lcyIsIm11bHRpRW50cnkiLCJoYXNHZXRBbGwiLCJtYWtlSURCS2V5UmFuZ2UiLCJpZGJSYW5nZSIsInVwcGVyQm91bmQiLCJsb3dlckJvdW5kIiwiYm91bmQiLCJjcmVhdGVEYkNvcmVUYWJsZSIsImlzQWRkT3JQdXQiLCJyZXEiLCJyZXFzIiwiZXJyb3JIYW5kbGVyIiwiYXJnczEiLCJhcmdzMiIsInNvdXJjZSIsIm9wZW5LZXlDdXJzb3IiLCJfX19pZCIsIl9jdXJzb3JDb250aW51ZSIsIl9jdXJzb3JDb250aW51ZVByaW1hcnlLZXkiLCJjb250aW51ZVByaW1hcnlLZXkiLCJfY3Vyc29yQWR2YW5jZSIsImRvVGhyb3dDdXJzb3JJc05vdFN0YXJ0ZWQiLCJkb1Rocm93Q3Vyc29ySXNTdG9wcGVkIiwiZ290T25lIiwiaXRlcmF0aW9uUHJvbWlzZSIsInJlc29sdmVJdGVyYXRpb24iLCJyZWplY3RJdGVyYXRpb24iLCJndWFyZGVkQ2FsbGJhY2siLCJyZXF1ZXN0Iiwibm9uSW5maW5pdExpbWl0IiwiaWRiS2V5UmFuZ2UiLCJnZXRBbGwiLCJnZXRBbGxLZXlzIiwia2V5Q291bnQiLCJjYWxsYmFja0NvdW50Iiwic3VjY2Vzc0hhbmRsZXIiLCJfcG9zIiwidGFibGVNYXAiLCJNSU5fS0VZIiwiTUFYX0tFWSIsImNyZWF0ZU1pZGRsZXdhcmVTdGFjayIsInN0YWNrSW1wbCIsIm1pZGRsZXdhcmVzIiwiZG93biIsImNyZWF0ZU1pZGRsZXdhcmVTdGFja3MiLCJkYmNvcmUiLCJnZW5lcmF0ZU1pZGRsZXdhcmVTdGFja3MiLCJfbm92aXAiLCJfbWlkZGxld2FyZXMiLCJ0YmwiLCJzZXRBcGlPblBsYWNlIiwib2JqcyIsInRhYmxlTmFtZXMiLCJwcm9wRGVzYyIsImVudW1lcmFibGUiLCJyZW1vdmVUYWJsZXNBcGkiLCJsb3dlclZlcnNpb25GaXJzdCIsIl9jZmciLCJ2ZXJzaW9uIiwicnVuVXBncmFkZXJzIiwib2xkVmVyc2lvbiIsImlkYlVwZ3JhZGVUcmFucyIsImdsb2JhbFNjaGVtYSIsIl9zdG9yZU5hbWVzIiwicmVqZWN0VHJhbnNhY3Rpb24iLCJjcmVhdGVUYWJsZSIsInBvcHVsYXRlIiwidXBkYXRlVGFibGVzQW5kSW5kZXhlcyIsInF1ZXVlIiwidmVyc2lvbnMiLCJfdmVyc2lvbnMiLCJidWlsZEdsb2JhbFNjaGVtYSIsImFueUNvbnRlbnRVcGdyYWRlckhhc1J1biIsInZlcnNUb1J1biIsIm9sZFNjaGVtYSIsIm5ld1NjaGVtYSIsImFkanVzdFRvRXhpc3RpbmdJbmRleE5hbWVzIiwiZGlmZiIsImdldFNjaGVtYURpZmYiLCJ0dXBsZSIsImNoYW5nZSIsInJlY3JlYXRlIiwiVXBncmFkZSIsImFkZEluZGV4IiwiZGVsZXRlSW5kZXgiLCJkZWwiLCJpZHhOYW1lIiwiY29udGVudFVwZ3JhZGUiLCJ1cGdyYWRlU2NoZW1hIiwiY29udGVudFVwZ3JhZGVJc0FzeW5jIiwicmV0dXJuVmFsdWUiLCJwcm9taXNlRm9sbG93ZWQiLCJkZWNyZW1lbnRvciIsImRlbGV0ZVJlbW92ZWRUYWJsZXMiLCJydW5RdWV1ZSIsImNyZWF0ZU1pc3NpbmdUYWJsZXMiLCJvbGREZWYiLCJuZXdEZWYiLCJkZWYiLCJvbGRJbmRleGVzIiwibmV3SW5kZXhlcyIsIm9sZElkeCIsIm5ld0lkeCIsImNyZWF0ZU9iamVjdFN0b3JlIiwiY29udGFpbnMiLCJzdG9yZU5hbWUiLCJkZWxldGVPYmplY3RTdG9yZSIsImNyZWF0ZUluZGV4IiwiZGJTdG9yZU5hbWVzIiwiaiIsImlkYmluZGV4IiwicmVhZEdsb2JhbFNjaGVtYSIsInZlcm5vIiwidmVyaWZ5SW5zdGFsbGVkU2NoZW1hIiwiaW5zdGFsbGVkU2NoZW1hIiwiY2giLCJfaGFzR2V0QWxsIiwiZGV4aWVOYW1lIiwiaW5kZXhTcGVjIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJwYXJzZUluZGV4U3ludGF4IiwicHJpbUtleUFuZEluZGV4ZXMiLCJpbmRleE51bSIsInRyaW0iLCJyZXBsYWNlIiwiVmVyc2lvbiIsIl9wYXJzZVN0b3Jlc1NwZWMiLCJzdG9yZXMiLCJvdXRTY2hlbWEiLCJzdG9yZXNTb3VyY2UiLCJzdG9yZXNTcGVjIiwidXBncmFkZSIsInVwZ3JhZGVGdW5jdGlvbiIsImNyZWF0ZVZlcnNpb25Db25zdHJ1Y3RvciIsInZlcnNpb25OdW1iZXIiLCJnZXREYk5hbWVzVGFibGUiLCJkYk5hbWVzREIiLCJhZGRvbnMiLCJkYm5hbWVzIiwiaGFzRGF0YWJhc2VzTmF0aXZlIiwiZGF0YWJhc2VzIiwiZ2V0RGF0YWJhc2VOYW1lcyIsImluZm9zIiwiaW5mbyIsIl9vbkRhdGFiYXNlQ3JlYXRlZCIsIl9vbkRhdGFiYXNlRGVsZXRlZCIsInZpcCIsImlkYlJlYWR5IiwiaXNTYWZhcmkiLCJ1c2VyQWdlbnREYXRhIiwiaW50ZXJ2YWxJZCIsInRyeUlkYiIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImRleGllT3BlbiIsInN0YXRlIiwiRGVidWcuZGVidWciLCJvcGVuQ2FuY2VsbGVyIiwiRGVidWcuZ2V0RXJyb3JXaXRoU3RhY2siLCJ0aHJvd0lmQ2FuY2VsbGVkIiwicmVzb2x2ZURiUmVhZHkiLCJkYlJlYWR5UmVzb2x2ZSIsInVwZ3JhZGVUcmFuc2FjdGlvbiIsIndhc0NyZWF0ZWQiLCJzYWZhcmkxNFdvcmthcm91bmQiLCJkYk5hbWUiLCJhdXRvU2NoZW1hIiwicm91bmQiLCJvbmJsb2NrZWQiLCJfZmlyZU9uQmxvY2tlZCIsIm9udXBncmFkZW5lZWRlZCIsImFsbG93RW1wdHlEQiIsImNsb3NlIiwiZGVscmVxIiwiZGVsZXRlRGF0YWJhc2UiLCJOb1N1Y2hEYXRhYmFzZSIsIm9sZFZlciIsInBvdyIsIm9udmVyc2lvbmNoYW5nZSIsInZjRmlyZWQiLCJvbmNsb3NlIiwib25SZWFkeUJlaW5nRmlyZWQiLCJyZWFkeSIsImZpcmVSZW1haW5kZXJzIiwicmVtYWluZGVycyIsImF3YWl0SXRlcmF0b3IiLCJjYWxsTmV4dCIsImRvVGhyb3ciLCJ0aHJvdyIsIm9uU3VjY2VzcyIsInN0ZXAiLCJvbkVycm9yIiwiZ2V0TmV4dCIsImV4dHJhY3RUcmFuc2FjdGlvbkFyZ3MiLCJfdGFibGVBcmdzXyIsInNjb3BlRnVuYyIsImVudGVyVHJhbnNhY3Rpb25TY29wZSIsInBhcmVudFRyYW5zYWN0aW9uIiwic2NvcGVGdW5jSXNBc3luYyIsIlByZW1hdHVyZUNvbW1pdCIsInBhZCIsImNyZWF0ZVZpcnR1YWxJbmRleE1pZGRsZXdhcmUiLCJpbmRleExvb2t1cCIsImFsbFZpcnR1YWxJbmRleGVzIiwiYWRkVmlydHVhbEluZGV4ZXMiLCJrZXlUYWlsIiwibG93TGV2ZWxJbmRleCIsImtleVBhdGhBbGlhcyIsImluZGV4TGlzdCIsImtleUxlbmd0aCIsImlzVmlydHVhbCIsInZpcnR1YWxJbmRleCIsInZpcnR1YWxLZXlQYXRoIiwiZmluZEJlc3RJbmRleCIsInRyYW5zbGF0ZVJhbmdlIiwidHJhbnNsYXRlUmVxdWVzdCIsImNyZWF0ZVZpcnR1YWxDdXJzb3IiLCJfY29udGludWUiLCJ2aXJ0dWFsQ3Vyc29yIiwidmlydHVhbEluZGV4TWlkZGxld2FyZSIsImxldmVsIiwiZ2V0T2JqZWN0RGlmZiIsInByZngiLCJhcCIsImJwIiwiYXBUeXBlTmFtZSIsImJwVHlwZU5hbWUiLCJnZXRFZmZlY3RpdmVLZXlzIiwiaG9va3NNaWRkbGV3YXJlIiwiZG93bkNvcmUiLCJkb3duVGFibGUiLCJ0YWJsZU1pZGRsZXdhcmUiLCJkeFRyYW5zIiwiZGVsZXRpbmciLCJjcmVhdGluZyIsInVwZGF0aW5nIiwiYWRkUHV0T3JEZWxldGUiLCJkZWxldGVSYW5nZSIsImdldEV4aXN0aW5nVmFsdWVzIiwiZXhpc3RpbmdWYWx1ZXMiLCJjb250ZXh0cyIsImV4aXN0aW5nVmFsdWUiLCJnZW5lcmF0ZWRQcmltYXJ5S2V5Iiwib2JqZWN0RGlmZiIsImFkZGl0aW9uYWxDaGFuZ2VzIiwicmVxdWVzdGVkVmFsdWUiLCJkZWxldGVOZXh0Q2h1bmsiLCJlZmZlY3RpdmVLZXlzIiwiZ2V0RnJvbVRyYW5zYWN0aW9uQ2FjaGUiLCJjYWNoZUV4aXN0aW5nVmFsdWVzTWlkZGxld2FyZSIsImNhY2hlZFJlc3VsdCIsImlzRW1wdHlSYW5nZSIsIm5vZGUiLCJmcm9tT3JUcmVlIiwidG8iLCJkIiwicmFuZ2VTZXQiLCJhZGRLZXkiLCJhZGRLZXlzIiwiZ2V0UmFuZ2VTZXRJdGVyYXRvciIsImxlZnQiLCJyaWdodCIsInIiLCJyZWJhbGFuY2UiLCJyaWdodFdhc0N1dE9mZiIsIm5ld1NldCIsIl9hZGRSYW5nZVNldCIsInJhbmdlU2V0MSIsInJhbmdlU2V0MiIsImkxIiwibmV4dFJlc3VsdDEiLCJpMiIsIm5leHRSZXN1bHQyIiwia2V5UHJvdmlkZWQiLCJ1cCIsIl9iIiwicm9vdENsb25lIiwib2xkUm9vdFJpZ2h0IiwiY29tcHV0ZURlcHRoIiwib2JzZXJ2YWJpbGl0eU1pZGRsZXdhcmUiLCJGVUxMX1JBTkdFIiwidGFibGVDbG9uZSIsIm11dGF0ZWRQYXJ0cyIsImdldFJhbmdlU2V0IiwicGFydCIsInBrUmFuZ2VTZXQiLCJkZWxzUmFuZ2VTZXQiLCJuZXdPYmpzIiwib2xkQ2FjaGUiLCJvbGRPYmpzIiwidHJhY2tBZmZlY3RlZEluZGV4ZXMiLCJnZXRSYW5nZSIsInJlYWRTdWJzY3JpYmVycyIsIm1ldGhvZCIsInN1YnNjciIsInF1ZXJpZWRJbmRleCIsInF1ZXJpZWRSYW5nZXMiLCJrZXlzUHJvbWlzZSIsInJlc3VsdGluZ0tleXMiLCJwS2V5cyIsIndhbnRWYWx1ZXMiLCJwa2V5IiwiYWRkQWZmZWN0ZWRJbmRleCIsImFkZEtleU9yS2V5cyIsIm9sZEtleSIsIm5ld0tleSIsImRlcHMiLCJkZXBlbmRlbmNpZXMiLCJjYW5jZWxPcGVuIiwiYlN0aWNreSIsIm5ld1ZlcnNpb24iLCJ1c2UiLCJhZGRvbiIsInZlcnNpb25JbnN0YW5jZSIsIl93aGVuUmVhZHkiLCJ1bnVzZSIsIm13IiwiaGFzQXJndW1lbnRzIiwiZG9EZWxldGUiLCJiYWNrZW5kREIiLCJoYXNCZWVuQ2xvc2VkIiwiaGFzRmFpbGVkIiwiZHluYW1pY2FsbHlPcGVuZWQiLCJfdHJhbnNhY3Rpb24iLCJvbmx5SWZDb21wYXRpYmxlIiwiaWRiTW9kZSIsIlN1YlRyYW5zYWN0aW9uIiwiZW50ZXJUcmFuc2FjdGlvbiIsIkludmFsaWRUYWJsZSIsInN5bWJvbE9ic2VydmFibGUiLCJvYnNlcnZhYmxlIiwiT2JzZXJ2YWJsZSIsIl9zdWJzY3JpYmUiLCJleHRlbmRPYnNlcnZhYmlsaXR5U2V0IiwicXVlcmllciIsIm9ic2VydmVyIiwiZXhlY3V0ZSIsImV4ZWMiLCJjbG9zZWQiLCJhY2N1bU11dHMiLCJjdXJyZW50T2JzIiwic3Vic2NyaXB0aW9uIiwibXV0YXRpb25MaXN0ZW5lciIsInF1ZXJ5aW5nIiwic3RhcnRlZExpc3RlbmluZyIsInNob3VsZE5vdGlmeSIsImRvUXVlcnkiLCJkb21EZXBzIiwibW96SW5kZXhlZERCIiwid2Via2l0SW5kZXhlZERCIiwibXNJbmRleGVkREIiLCJ3ZWJraXRJREJLZXlSYW5nZSIsIl9EZXhpZSIsImRhdGFiYXNlTmFtZSIsImV4aXN0cyIsImlnbm9yZVRyYW5zYWN0aW9uIiwiYXN5bmMiLCJnZW5lcmF0b3JGbiIsInNwYXduIiwiY3VycmVudFRyYW5zYWN0aW9uIiwicHJvbWlzZU9yRnVuY3Rpb24iLCJvcHRpb25hbFRpbWVvdXQiLCJEZWJ1Zy5zZXREZWJ1ZyIsInNlbVZlciIsIm1heEtleSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVkUGFydHMiLCJwcm9wYWdhdGluZ0xvY2FsbHkiLCJpbml0Q3VzdG9tRXZlbnQiLCJwcm9wYWdhdGVMb2NhbGx5IiwidXBkYXRlUGFydHMiLCJ3YXNNZSIsIkJyb2FkY2FzdENoYW5uZWwiLCJiYyIsInVucmVmIiwiY2hhbmdlZFBhcnRzIiwicG9zdE1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRyaWciLCJyYW5kb20iLCJtYXRjaEFsbCIsImluY2x1ZGVVbmNvbnRyb2xsZWQiLCJjbGllbnQiLCJwYXJzZSIsIm5ld1ZhbHVlIiwic3dDb250YWluZXIiLCJzZXJ2aWNlV29ya2VyIiwicHJvcGFnYXRlTWVzc2FnZUxvY2FsbHkiLCJkZXhpZV8zXzJfM19kZWZhdWx0IiwiRGV4aWUkMSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7O0FDQ08sSUFBTUMsVUFDVCxPQUFPQyxlQUFlLGNBQWNBLGFBQ3BDLE9BQU9DLFNBQVMsY0FBY0EsT0FDOUIsT0FBT0MsV0FBVyxjQUFjQSxTQUNoQ0M7QUNKRyxJQUFNQyxPQUFPQyxPQUFPRDtBQUNwQixJQUFNRSxVQUFVQyxNQUFNRDtBQUM3QixJQUFJLE9BQU9FLFlBQVksZUFBZSxDQUFDVCxRQUFRUyxTQUFRO0VBSW5EVCxRQUFRUyxVQUFVQTs7U0FJTkMsT0FBMENDLEtBQVFDLFdBQVk7RUFDMUUsSUFBSSxPQUFPQSxjQUFjLFVBQVUsT0FBT0Q7RUFDMUNOLEtBQUtPLFNBQVMsRUFBRUMsUUFBUSxVQUFVQyxLQUFHO0lBQ2pDSCxJQUFJRyxPQUFPRixVQUFVRTtHQUN4QjtFQUNELE9BQU9IO0FBQ1g7QUFFTyxJQUFNSSxXQUFXVCxPQUFPVTtBQUN4QixJQUFNQyxVQUFVLEdBQUdDO1NBQ1ZDLE9BQU9SLEtBQUtTLE1BQUk7RUFDNUIsT0FBT0gsUUFBUUksS0FBS1YsS0FBS1MsSUFBSTtBQUNqQztTQUVnQkUsTUFBT0MsT0FBT1gsV0FBUztFQUNuQyxJQUFJLE9BQU9BLGNBQWMsWUFBWUEsWUFBWUEsVUFBVUcsU0FBU1EsS0FBSyxDQUFDO0VBQzFFLENBQUMsT0FBT0MsWUFBWSxjQUFjbkIsT0FBT21CLFFBQVFDLFNBQVNiLFNBQVMsRUFBRUMsUUFBUUMsT0FBRztJQUM1RVksUUFBUUgsT0FBT1QsS0FBS0YsVUFBVUUsSUFBSTtHQUNyQztBQUNMO0FBRU8sSUFBTWEsaUJBQWlCckIsT0FBT3FCO1NBRXJCRCxRQUFRZixLQUFLUyxNQUFNUSxrQkFBa0JDLFNBQVE7RUFDekRGLGVB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ZXpULEtBQUt1dEIsV0FBVzs7SUFFNUNILHFCQUFxQkk7O0FBRXpCO0FBRU8sSUFBSUoscUJBQXFCO0FDL0JoQyxJQUFJLE9BQU9LLHFCQUFxQixhQUFhO0VBQzNDLE1BQU1DLEtBQUssSUFBSUQsaUJBQWlCdGIsOEJBQThCO0VBVTlELElBQUksT0FBUXViLEdBQVdDLFVBQVUsWUFBWTtJQUMxQ0QsR0FBV0MsT0FBSzs7RUFNbkJ2YixhQUFhRixrQ0FBbUMwYixnQkFBWTtJQUMxRCxJQUFJLENBQUNSLG9CQUFvQjtNQUN2Qk0sR0FBR0csWUFBWUQsWUFBWTs7R0FFOUI7RUFLREYsR0FBR0ksWUFBYTNhLE1BQUU7SUFDaEIsSUFBSUEsR0FBRzRhLE1BQU1ULGlCQUFpQm5hLEdBQUc0YSxJQUFJOztXQUU5QixPQUFPbHFDLFNBQVMsZUFBZSxPQUFPa2EsY0FBYyxhQUFhO0VBTzFFcVUsYUFBYUYsa0NBQW1DMGIsZ0JBQVk7SUFDMUQsSUFBSTtNQUNGLElBQUksQ0FBQ1Isb0JBQW9CO1FBQ3ZCLElBQUksT0FBT1ksaUJBQWlCLGFBQWE7VUFFdkNBLGFBQWFDLFFBQ1g5YixnQ0FDQXZSLEtBQUtDLFVBQVU7WUFDYnF0QixNQUFNMWtCLEtBQUsya0IsUUFBTTtZQUNqQlA7V0FDRCxDQUFDOztRQUdOLElBQUksT0FBTy9wQyxLQUFLLGVBQWUsVUFBVTtVQUV2QyxDQUFDLEdBQUdBLEtBQUssV0FBV3VxQyxTQUFTO1lBQUVDLHFCQUFxQjtVQUFJLENBQUUsQ0FBQyxFQUFFN3BDLFFBQzFEOHBDLFVBQ0NBLE9BQU9ULFlBQVk7WUFDakI3NEIsTUFBTW1kO1lBQ055YjtXQUNELENBQUM7OzthQUlWeHFCLEtBQU07R0FDVDtFQUtELElBQUksT0FBTzhwQixxQkFBcUIsYUFBYTtJQUN6Q0EsaUJBQWlCLFdBQVkvWixNQUFnQjtNQUM3QyxJQUFJQSxHQUFHMXVCLFFBQVEwdEIsZ0NBQWdDO1FBQzdDLE1BQU00YixPQUFPbnRCLEtBQUsydEIsTUFBTXBiLEdBQUdxYixRQUFRO1FBQ25DLElBQUlULE1BQU1ULGlCQUFpQlMsS0FBS0gsWUFBWTs7S0FFL0M7O0VBTUgsTUFBTWEsY0FBYzVxQyxLQUFLNk4sWUFBWXFNLFVBQVUyd0I7RUFDL0MsSUFBSUQsYUFBYTtJQUVmQSxZQUFZdkIsaUJBQWlCLFdBQVd5Qix1QkFBdUI7OztBQUluRSxTQUFTQSx3QkFBd0I7RUFBRVo7QUFBSSxHQUFnQjtFQUNyRCxJQUFJQSxRQUFRQSxLQUFLLzRCLFNBQVNtZCxnQ0FBZ0M7SUFDeERtYixpQkFBaUJTLEtBQUtILFlBQVk7O0FBRXRDO0FDaEZBeDZCLGFBQWFkLGtCQUFrQnhEO0FBRy9CaStCLFNBQWU5TSxPQUFhOWhCLHFCQUFxQjs7O0ExRGpCakQsSUFBT3l3QixzQkFBUUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii92b2ljZS1nZW5pdXMvcHJvamVjdC9vdXQifQ==