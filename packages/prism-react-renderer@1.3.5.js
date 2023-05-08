System.register(["react@18.2.0"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["prism-react-renderer","1.3.5"],["react","18.2.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('react@18.2.0', dep)],
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

// .beyond/uimport/temp/prism-react-renderer.1.3.5.js
var prism_react_renderer_1_3_5_exports = {};
__export(prism_react_renderer_1_3_5_exports, {
  Prism: () => prism_default,
  default: () => prism_react_renderer_1_3_5_default,
  defaultProps: () => defaultProps
});
module.exports = __toCommonJS(prism_react_renderer_1_3_5_exports);

// node_modules/prism-react-renderer/prism/index.js
var Prism = function () {
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0;
  var plainTextGrammar = {};
  var _ = {
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function (obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }
        return obj["__id"];
      },
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone;
        var id;
        switch (_.util.type(o)) {
          case "Object":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = {};
            visited[id] = clone;
            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }
            return clone;
          case "Array":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = [];
            visited[id] = clone;
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return clone;
          default:
            return o;
        }
      },
      getLanguage: function (element) {
        while (element) {
          var m = lang.exec(element.className);
          if (m) {
            return m[1].toLowerCase();
          }
          element = element.parentElement;
        }
        return "none";
      },
      setLanguage: function (element, language) {
        element.className = element.className.replace(RegExp(lang, "gi"), "");
        element.classList.add("language-" + language);
      },
      isActive: function (element, className, defaultActivation) {
        var no = "no-" + className;
        while (element) {
          var classList = element.classList;
          if (classList.contains(className)) {
            return true;
          }
          if (classList.contains(no)) {
            return false;
          }
          element = element.parentElement;
        }
        return !!defaultActivation;
      }
    },
    languages: {
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      extend: function (id, redef) {
        var lang2 = _.util.clone(_.languages[id]);
        for (var key in redef) {
          lang2[key] = redef[key];
        }
        return lang2;
      },
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};
        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;
        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];
            var propertyType = _.util.type(property);
            if (propertyType === "Object" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === "Array" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar,
        language
      };
      _.hooks.run("before-tokenize", env);
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run("after-tokenize", env);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    tokenize: function (text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    hooks: {
      all: {},
      add: function (name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function (name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token
  };
  function Token(type, content, alias, matchedStr) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    this.length = (matchedStr || "").length | 0;
  }
  Token.stringify = function stringify(o, language) {
    if (typeof o == "string") {
      return o;
    }
    if (Array.isArray(o)) {
      var s = "";
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }
    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language
    };
    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    _.hooks.run("wrap", env);
    var attributes = "";
    for (var name in env.attributes) {
      attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
  };
  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);
    if (match && lookbehind && match[1]) {
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }
    return match;
  }
  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + "," + j) {
          return;
        }
        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;
        if (greedy && !patternObj.pattern.global) {
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
        }
        var pattern = patternObj.pattern || patternObj;
        for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }
          var str = currentNode.value;
          if (tokenList.length > text.length) {
            return;
          }
          if (str instanceof Token) {
            continue;
          }
          var removeCount = 1;
          var match;
          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);
            if (!match || match.index >= text.length) {
              break;
            }
            var from = match.index;
            var to = match.index + match[0].length;
            var p = pos;
            p += currentNode.value.length;
            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            p -= currentNode.value.length;
            pos = p;
            if (currentNode.value instanceof Token) {
              continue;
            }
            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);
            if (!match) {
              continue;
            }
          }
          var from = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from);
          var after = str.slice(from + matchStr.length);
          var reach = pos + str.length;
          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }
          var removeFrom = currentNode.prev;
          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }
          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);
          if (after) {
            addAfter(tokenList, currentNode, after);
          }
          if (removeCount > 1) {
            var nestedRematch = {
              cause: token + "," + j,
              reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }
  function LinkedList() {
    var head = {
      value: null,
      prev: null,
      next: null
    };
    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  function addAfter(list, node, value) {
    var next = node.next;
    var newNode = {
      value,
      prev: node,
      next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  return _;
}();
var prism = Prism;
Prism.default = Prism;
prism.languages.markup = {
  "comment": {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  "prolog": {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  "doctype": {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      "string": {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      "punctuation": /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      "name": /[^\s<>'"]+/
    }
  },
  "cdata": {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  "tag": {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      "tag": {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          "punctuation": /^<\/?/,
          "namespace": /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          "punctuation": [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      "punctuation": /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          "namespace": /^[^\s>\/:]+:/
        }
      }
    }
  },
  "entity": [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = prism.languages.markup["entity"];
prism.languages.markup["doctype"].inside["internal-subset"].inside = prism.languages.markup;
prism.hooks.add("wrap", function (env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(prism.languages.markup.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside
    };
    prism.languages.insertBefore("markup", "cdata", def);
  }
});
Object.defineProperty(prism.languages.markup.tag, "addAttribute", {
  value: function (attrName, lang) {
    prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            "value": {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, "language-" + lang],
              inside: prism.languages[lang]
            },
            "punctuation": [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend("markup", {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
(function (Prism2) {
  var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    inside: null
  };
  var insideString = {
    "bash": commandAfterHeredoc,
    "environment": {
      pattern: RegExp("\\$" + envVars),
      alias: "constant"
    },
    "variable": [{
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        "variable": [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
        "punctuation": /\(\(?|\)\)?|,|;/
      }
    }, {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        "variable": /^\$\(|^`|\)$|`$/
      }
    }, {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        "punctuation": /[\[\]]/,
        "environment": {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism2.languages.bash = {
    "shebang": {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    "comment": {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [{
      pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: "function"
    }, {
      pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
      alias: "function"
    }],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        "environment": {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    "string": [{
      pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        "bash": commandAfterHeredoc
      }
    }, {
      pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, {
      pattern: /(^|[^$\\])'[^']*'/,
      lookbehind: true,
      greedy: true
    }, {
      pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      inside: {
        "entity": insideString.entity
      }
    }],
    "environment": {
      pattern: RegExp("\\$?" + envVars),
      alias: "constant"
    },
    "variable": insideString.variable,
    "function": {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "keyword": {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "builtin": {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      alias: "class-name"
    },
    "boolean": {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    "operator": {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    "number": {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism2.languages.bash;
  var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"];
  var inside = insideString.variable[1].inside;
  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
  }
  Prism2.languages.shell = Prism2.languages.bash;
})(prism);
prism.languages.clike = {
  "comment": [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      "punctuation": /[.\\]/
    }
  },
  "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  "boolean": /\b(?:false|true)\b/,
  "function": /\b\w+(?=\()/,
  "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.c = prism.languages.extend("clike", {
  "comment": {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  "keyword": /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  "function": /\b[a-z_]\w*(?=\s*\()/i,
  "number": /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  "operator": />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore("c", "string", {
  "char": {
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore("c", "string", {
  "macro": {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: "property",
    inside: {
      "string": [{
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c["string"]],
      "char": prism.languages.c["char"],
      "comment": prism.languages.c["comment"],
      "macro-name": [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: "function"
      }],
      "directive": {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      "punctuation": /##|\\(?=[\r\n])/,
      "expression": {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore("c", "function", {
  "constant": /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c["boolean"];
(function (Prism2) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function () {
    return keyword.source;
  });
  Prism2.languages.cpp = Prism2.languages.extend("c", {
    "class-name": [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    "keyword": keyword,
    "number": {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    "operator": />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    "boolean": /\b(?:false|true)\b/
  });
  Prism2.languages.insertBefore("cpp", "string", {
    "module": {
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function () {
        return modName;
      }) + ")"),
      lookbehind: true,
      greedy: true,
      inside: {
        "string": /^[<"][\s\S]+/,
        "operator": /:/,
        "punctuation": /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: true
    }
  });
  Prism2.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        "function": /^\w+/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: Prism2.languages.cpp
        }
      }
    }
  });
  Prism2.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  });
  Prism2.languages.insertBefore("cpp", "class-name", {
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism2.languages.extend("cpp", {})
    }
  });
  Prism2.languages.insertBefore("inside", "double-colon", {
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism2.languages.cpp["base-clause"]);
})(prism);
(function (Prism2) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism2.languages.css = {
    "comment": /\/\*[\s\S]*?\*\//,
    "atrule": {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        "rule": /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        "keyword": {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    "url": {
      pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        "function": /^url/i,
        "punctuation": /^\(|\)$/,
        "string": {
          pattern: RegExp("^" + string.source + "$"),
          alias: "url"
        }
      }
    },
    "selector": {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    "string": {
      pattern: string,
      greedy: true
    },
    "property": {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    "important": /!important\b/i,
    "function": {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    "punctuation": /[(){};:,]/
  };
  Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
  var markup = Prism2.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");
    markup.tag.addAttribute("style", "css");
  }
})(prism);
(function (Prism2) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism2.languages.css.selector = {
    pattern: Prism2.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      "class": /\.[-\w]+/,
      "id": /#[-\w]+/,
      "attribute": {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + string.source + ")*\\]"),
        greedy: true,
        inside: {
          "punctuation": /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          "namespace": {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              "punctuation": /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          "attr-value": [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          "operator": /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          "number": /[\dn]+/,
          "operator": /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      "combinator": />|\+|~|\|\|/,
      "punctuation": /[(),]/
    }
  };
  Prism2.languages.css["atrule"].inside["selector-function-argument"].inside = selectorInside;
  Prism2.languages.insertBefore("css", "property", {
    "variable": {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism2.languages.insertBefore("css", "function", {
    "operator": {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    "hexcode": {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    "color": [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "number": number
  });
})(prism);
prism.languages.javascript = prism.languages.extend("clike", {
  "class-name": [prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  "keyword": [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  "number": {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore("javascript", "keyword", {
  "regex": {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  "parameter": [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore("javascript", "string", {
  "hashbang": {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      "interpolation": {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: prism.languages.javascript
        }
      },
      "string": /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined("script", "javascript");
  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
prism.languages.js = prism.languages.javascript;
(function (Prism2) {
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: "variable"
  };
  Prism2.languages.coffeescript = Prism2.languages.extend("javascript", {
    "comment": comment,
    "string": [{
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        "interpolation": interpolation
      }
    }],
    "keyword": /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {
      pattern: /@(?!\d)\w+/,
      alias: "variable"
    }
  });
  Prism2.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {
        "comment": comment,
        "interpolation": interpolation
      }
    }
  });
  Prism2.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        "delimiter": {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        "script": {
          pattern: /[\s\S]+/,
          alias: "language-javascript",
          inside: Prism2.languages.javascript
        }
      }
    },
    "multiline-string": [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: "string"
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: "string",
      inside: {
        interpolation
      }
    }]
  });
  Prism2.languages.insertBefore("coffeescript", "keyword", {
    "property": /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism2.languages.coffeescript["template-string"];
  Prism2.languages.coffee = Prism2.languages.coffeescript;
})(prism);
(function (Prism2) {
  var anchorOrAlias = /[*&][^\s[\]{},]+/;
  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function createValuePattern(value, flags) {
    flags = (flags || "").replace(/m/g, "") + "m";
    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }
  Prism2.languages.yaml = {
    "scalar": {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: "string"
    },
    "comment": /#.*/,
    "key": {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return "(?:" + plainKey + "|" + string + ")";
      })),
      lookbehind: true,
      greedy: true,
      alias: "atrule"
    },
    "directive": {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: "important"
    },
    "datetime": {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: "number"
    },
    "boolean": {
      pattern: createValuePattern(/false|true/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "null": {
      pattern: createValuePattern(/null|~/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "string": {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    "number": {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: true
    },
    "tag": tag,
    "important": anchorOrAlias,
    "punctuation": /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism2.languages.yml = Prism2.languages.yaml;
})(prism);
(function (Prism2) {
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
  }
  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism2.languages.markdown = Prism2.languages.extend("markup", {});
  Prism2.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        "punctuation": /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: Prism2.languages.yaml
        }
      }
    },
    "blockquote": {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    "table": {
      pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
          lookbehind: true,
          inside: {
            "table-data": {
              pattern: RegExp(tableCell),
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
          lookbehind: true,
          inside: {
            "punctuation": /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + tableRow + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(tableCell),
              alias: "important",
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        }
      }
    },
    "code": [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: true
        },
        "punctuation": /```/
      }
    }],
    "title": [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    "hr": {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "list": {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        "variable": {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        "string": /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        "punctuation": /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    "bold": {
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /\*\*|__/
      }
    },
    "italic": {
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /[*_]/
      }
    },
    "strike": {
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ["code", "keyword"]
    },
    "url": {
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "operator": /^!/,
        "content": {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {}
        },
        "variable": {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        "url": {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        "string": {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ["url", "bold", "italic", "strike"].forEach(function (token) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (inside) {
      if (token !== inside) {
        Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
      }
    });
  });
  Prism2.hooks.add("after-tokenize", function (env) {
    if (env.language !== "markdown" && env.language !== "md") {
      return;
    }
    function walkTokens(tokens) {
      if (!tokens || typeof tokens === "string") {
        return;
      }
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (token.type !== "code") {
          walkTokens(token.content);
          continue;
        }
        var codeLang = token.content[1];
        var codeBlock = token.content[3];
        if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
          var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
          lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
          var alias = "language-" + lang;
          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === "string") {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }
    walkTokens(env.tokens);
  });
  Prism2.hooks.add("wrap", function (env) {
    if (env.type !== "code-block") {
      return;
    }
    var codeLang = "";
    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }
    var grammar = Prism2.languages[codeLang];
    if (!grammar) {
      if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
        var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
        env.attributes["id"] = id;
        Prism2.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism2.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi");
  var KNOWN_ENTITY_NAMES = {
    "amp": "&",
    "lt": "<",
    "gt": ">",
    "quot": '"'
  };
  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  function textContent(html) {
    var text = html.replace(tagPattern, "");
    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (m, code) {
      code = code.toLowerCase();
      if (code[0] === "#") {
        var value;
        if (code[1] === "x") {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }
        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];
        if (known) {
          return known;
        }
        return m;
      }
    });
    return text;
  }
  Prism2.languages.md = Prism2.languages.markdown;
})(prism);
prism.languages.graphql = {
  "comment": /#.*/,
  "description": {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  "string": {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  "number": /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "boolean": /\b(?:false|true)\b/,
  "variable": /\$[a-z_]\w*/i,
  "directive": {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  "scalar": /\b(?:Boolean|Float|ID|Int|String)\b/,
  "constant": /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  "fragment": {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "keyword": /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  "operator": /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  "object": /\w+(?=\s*\{)/,
  "punctuation": /[!(){}\[\]:=,]/,
  "property": /\w+/
};
prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
  if (env.language !== "graphql") {
    return;
  }
  var validTokens = env.tokens.filter(function (token) {
    return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
  });
  var currentIndex = 0;
  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  function isTokenType(types, offset) {
    offset = offset || 0;
    for (var i2 = 0; i2 < types.length; i2++) {
      var token = getToken(i2 + offset);
      if (!token || token.type !== types[i2]) {
        return false;
      }
    }
    return true;
  }
  function findClosingBracket(open, close) {
    var stackHeight = 1;
    for (var i2 = currentIndex; i2 < validTokens.length; i2++) {
      var token = validTokens[i2];
      var content = token.content;
      if (token.type === "punctuation" && typeof content === "string") {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;
          if (stackHeight === 0) {
            return i2;
          }
        }
      }
    }
    return -1;
  }
  function addAlias(token, alias) {
    var aliases = token.alias;
    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }
    aliases.push(alias);
  }
  for (; currentIndex < validTokens.length;) {
    var startToken = validTokens[currentIndex++];
    if (startToken.type === "keyword" && startToken.content === "mutation") {
      var inputVariables = [];
      if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
        currentIndex += 2;
        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
        if (definitionEnd === -1) {
          continue;
        }
        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);
          if (t.type === "variable") {
            addAlias(t, "variable-input");
            inputVariables.push(t.content);
          }
        }
        currentIndex = definitionEnd + 1;
      }
      if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
        currentIndex++;
        addAlias(getToken(0), "property-mutation");
        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
          if (mutationEnd === -1) {
            continue;
          }
          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];
            if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, "variable-input");
            }
          }
        }
      }
    }
  }
});
prism.languages.sql = {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  "variable": [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  "string": {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  "identifier": {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      "punctuation": /^`|`$/
    }
  },
  "function": /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  "keyword": /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  "boolean": /\b(?:FALSE|NULL|TRUE)\b/i,
  "number": /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  "operator": /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  "punctuation": /[;[\]()`,.]/
};
(function (Prism2) {
  var templateString = Prism2.languages.javascript["template-string"];
  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside["interpolation"];
  var interpolationPunctuationObject = interpolationObject.inside["interpolation-punctuation"];
  var interpolationPattern = interpolationObject.pattern.source;
  function createTemplate(language, tag) {
    if (!Prism2.languages[language]) {
      return void 0;
    }
    return {
      pattern: RegExp("((?:" + tag + ")\\s*)" + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }
  Prism2.languages.javascript["template-string"] = [createTemplate("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), createTemplate("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), createTemplate("svg", /\bsvg/.source), createTemplate("markdown", /\b(?:markdown|md)/.source), createTemplate("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), createTemplate("sql", /\bsql/.source), templateString].filter(Boolean);
  function getPlaceholder(counter, language) {
    return "___" + language.toUpperCase() + "_" + counter + "___";
  }
  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code,
      grammar,
      language
    };
    Prism2.hooks.run("before-tokenize", env);
    env.tokens = Prism2.tokenize(env.code, env.grammar);
    Prism2.hooks.run("after-tokenize", env);
    return env.tokens;
  }
  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar["interpolation-punctuation"] = interpolationPunctuationObject;
    var tokens = Prism2.tokenize(expression, tempGrammar);
    if (tokens.length === 3) {
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism2.languages.javascript, "javascript"));
      tokens.splice.apply(tokens, args);
    }
    return new Prism2.Token("interpolation", tokens, interpolationObject.alias, expression);
  }
  function tokenizeEmbedded(code, grammar, language) {
    var _tokens = Prism2.tokenize(code, {
      "interpolation": {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    });
    var placeholderCounter = 0;
    var placeholderMap = {};
    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === "string") {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;
        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {}
        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join("");
    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language);
    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }
        var token = tokens[i];
        if (typeof token === "string" || typeof token.content === "string") {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === "string" ? token : token.content;
          var index = s.indexOf(placeholder);
          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];
            if (before) {
              replacement.push(before);
            }
            replacement.push(middle);
            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }
            if (typeof token === "string") {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;
          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }
    walkTokens(embeddedTokens);
    return new Prism2.Token(language, embeddedTokens, "language-" + language, code);
  }
  var supportedLanguages = {
    "javascript": true,
    "js": true,
    "typescript": true,
    "ts": true,
    "jsx": true,
    "tsx": true
  };
  Prism2.hooks.add("after-tokenize", function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          continue;
        }
        var content = token.content;
        if (!Array.isArray(content)) {
          if (typeof content !== "string") {
            findTemplateStrings([content]);
          }
          continue;
        }
        if (token.type === "template-string") {
          var embedded = content[1];
          if (content.length === 3 && typeof embedded !== "string" && embedded.type === "embedded-code") {
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism2.languages[language];
            if (!grammar) {
              continue;
            }
            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }
    findTemplateStrings(env.tokens);
  });
  function stringContent(value) {
    if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join("");
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
(function (Prism2) {
  Prism2.languages.typescript = Prism2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
    },
    "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
  delete Prism2.languages.typescript["parameter"];
  delete Prism2.languages.typescript["literal-property"];
  var typeInside = Prism2.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism2.languages.typescript["class-name"].inside = typeInside;
  Prism2.languages.insertBefore("typescript", "function", {
    "decorator": {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        "at": {
          pattern: /^@/,
          alias: "operator"
        },
        "function": /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism2.languages.ts = Prism2.languages.typescript;
})(prism);
(function (Prism2) {
  Prism2.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source),
      lookbehind: true,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "function", {
    "method": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function"].source),
      lookbehind: true,
      alias: ["function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  });
  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }
  Prism2.languages.insertBefore("javascript", "keyword", {
    "imports": {
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    },
    "exports": {
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    }
  });
  Prism2.languages.javascript["keyword"].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: "control-flow"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "spread": {
      pattern: /\.{3}/,
      alias: "operator"
    },
    "arrow": {
      pattern: /=>/,
      alias: "operator"
    }
  });
  Prism2.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    "dom": {
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    "console": {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"];
  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism2.languages.javascript[token];
    if (Prism2.util.type(value) === "RegExp") {
      value = Prism2.languages.javascript[token] = {
        pattern: value
      };
    }
    var inside = value.inside || {};
    value.inside = inside;
    inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(prism);
(function (Prism2) {
  var javascript = Prism2.util.clone(Prism2.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function () {
      return space;
    }).replace(/<BRACES>/g, function () {
      return braces;
    }).replace(/<SPREAD>/g, function () {
      return spread;
    });
    return RegExp(source, flags);
  }
  spread = re(spread).source;
  Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
  Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
  Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
  Prism2.languages.insertBefore("inside", "attr-name", {
    "spread": {
      pattern: re(/<SPREAD>/.source),
      inside: Prism2.languages.jsx
    }
  }, Prism2.languages.jsx.tag);
  Prism2.languages.insertBefore("inside", "special-attr", {
    "script": {
      pattern: re(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: Prism2.languages.jsx
      }
    }
  }, Prism2.languages.jsx.tag);
  var stringifyToken = function (token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  var walkTokens = function (tokens) {
    var openedTags = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>") ;else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          var plainText = stringifyToken(token);
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism2.hooks.add("after-tokenize", function (env) {
    if (env.language !== "jsx" && env.language !== "tsx") {
      return;
    }
    walkTokens(env.tokens);
  });
})(prism);
(function (Prism2) {
  Prism2.languages.diff = {
    "coord": [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m]
  };
  var PREFIXES = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    "unchanged": " ",
    "diff": "!"
  };
  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];
    if (!/^\w+$/.test(name)) {
      alias.push(/\w+/.exec(name)[0]);
    }
    if (name === "diff") {
      alias.push("bold");
    }
    Prism2.languages.diff[name] = {
      pattern: RegExp("^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
      alias,
      inside: {
        "line": {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        "prefix": {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  });
  Object.defineProperty(Prism2.languages.diff, "PREFIXES", {
    value: PREFIXES
  });
})(prism);
prism.languages.git = {
  "comment": /^#.*/m,
  "deleted": /^[-–].*/m,
  "inserted": /^\+.*/m,
  "string": /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  "command": {
    pattern: /^.*\$ git .*$/m,
    inside: {
      "parameter": /\s--?\w+/
    }
  },
  "coord": /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m
};
prism.languages.go = prism.languages.extend("clike", {
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  "keyword": /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  "boolean": /\b(?:_|false|iota|nil|true)\b/,
  "number": [/\b0(?:b[01_]+|o[0-7_]+)i?\b/i, /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i, /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],
  "operator": /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  "builtin": /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore("go", "string", {
  "char": {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go["class-name"];
(function (Prism2) {
  function getPlaceholder(language, index) {
    return "___" + language.toUpperCase() + index + "___";
  }
  Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }
        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === "function" && !replaceFilter(match)) {
            return match;
          }
          var i = tokenStack.length;
          var placeholder;
          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          }
          tokenStack[i] = match;
          return placeholder;
        });
        env.grammar = Prism2.languages.markup;
      }
    },
    tokenizePlaceholders: {
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        }
        env.grammar = Prism2.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);
        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            if (j >= keys.length) {
              break;
            }
            var token = tokens[i];
            if (typeof token === "string" || token.content && typeof token.content === "string") {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === "string" ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);
              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism2.Token(language, Prism2.tokenize(t, env.grammar), "language-" + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];
                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }
                replacement.push(middle);
                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }
                if (typeof token === "string") {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content) {
              walkTokens(token.content);
            }
          }
          return tokens;
        }
        walkTokens(env.tokens);
      }
    }
  });
})(prism);
(function (Prism2) {
  Prism2.languages.handlebars = {
    "comment": /\{\{![\s\S]*?\}\}/,
    "delimiter": {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: "punctuation"
    },
    "string": /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    "boolean": /\b(?:false|true)\b/,
    "block": {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: "keyword"
    },
    "brackets": {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    "punctuation": /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    "variable": /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism2.hooks.add("before-tokenize", function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "handlebars", handlebarsPattern);
  });
  Prism2.hooks.add("after-tokenize", function (env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "handlebars");
  });
  Prism2.languages.hbs = Prism2.languages.handlebars;
})(prism);
prism.languages.json = {
  "property": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "comment": {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "punctuation": /[{}[\],]/,
  "operator": /:/,
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
prism.languages.webmanifest = prism.languages.json;
prism.languages.less = prism.languages.extend("css", {
  "comment": [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  "atrule": {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "punctuation": /[:()]/
    }
  },
  "selector": {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "variable": /@+[\w-]+/
    }
  },
  "property": /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  "operator": /[+\-*\/]/
});
prism.languages.insertBefore("less", "property", {
  "variable": [{
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, /@@?[\w-]+/],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: "function"
  }
});
prism.languages.makefile = {
  "comment": {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  "target": {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  "keyword": /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  "function": {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  "operator": /(?:::|[?:+!])?=|[|@]/,
  "punctuation": /[:;(){}]/
};
prism.languages.objectivec = prism.languages.extend("c", {
  "string": {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "keyword": /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  "operator": /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec["class-name"];
prism.languages.objc = prism.languages.objectivec;
prism.languages.ocaml = {
  "comment": {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  "char": {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  "string": [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  "number": [/\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i, /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i, /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i],
  "directive": {
    pattern: /\B#\w+/,
    alias: "property"
  },
  "label": {
    pattern: /\B~\w+/,
    alias: "property"
  },
  "type-variable": {
    pattern: /\B'\w+/,
    alias: "function"
  },
  "variant": {
    pattern: /`\w+/,
    alias: "symbol"
  },
  "keyword": /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  "boolean": /\b(?:false|true)\b/,
  "operator-like-punctuation": {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: "punctuation"
  },
  "operator": /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  "punctuation": /;;|::|[(){}\[\].,:;#]|\b_\b/
};
prism.languages.python = {
  "comment": {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      "interpolation": {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      "string": /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: "string"
  },
  "string": {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  "function": {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  "decorator": {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ["annotation", "punctuation"],
    inside: {
      "punctuation": /\./
    }
  },
  "keyword": /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  "builtin": /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  "boolean": /\b(?:False|None|True)\b/,
  "number": /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  "operator": /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
prism.languages.reason = prism.languages.extend("clike", {
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  "class-name": /\b[A-Z]\w*/,
  "keyword": /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  "operator": /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore("reason", "class-name", {
  "char": {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  "constructor": /\b[A-Z]\w*\b(?!\s*\.)/,
  "label": {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: "symbol"
  }
});
delete prism.languages.reason.function;
(function (Prism2) {
  Prism2.languages.sass = Prism2.languages.extend("css", {
    "comment": {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism2.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        "atrule": /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism2.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism2.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        "punctuation": /:/,
        "variable": variable,
        "operator": operator
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        "property": [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        "punctuation": /:/,
        "variable": variable,
        "operator": operator,
        "important": Prism2.languages.sass.important
      }
    }
  });
  delete Prism2.languages.sass.property;
  delete Prism2.languages.sass.important;
  Prism2.languages.insertBefore("sass", "punctuation", {
    "selector": {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
prism.languages.scss = prism.languages.extend("css", {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  "atrule": {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      "rule": /@[\w-]+/
    }
  },
  "url": /(?:[-a-z]+-)?url(?=\()/i,
  "selector": {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      "parent": {
        pattern: /&/,
        alias: "important"
      },
      "placeholder": /%[-\w]+/,
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  "property": {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore("scss", "atrule", {
  "keyword": [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore("scss", "important", {
  "variable": /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  "placeholder": {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  "statement": {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  "operator": {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss["atrule"].inside.rest = prism.languages.scss;
(function (Prism2) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    "url": {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    "string": {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    "interpolation": null,
    "func": null,
    "important": /\B!(?:important|optional)\b/i,
    "keyword": {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    "hexcode": /#[\da-f]{3,6}/i,
    "color": [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "boolean": /\b(?:false|true)\b/,
    "operator": [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    "number": number,
    "punctuation": /[{}()\[\];:,]/
  };
  inside["interpolation"] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      "delimiter": {
        pattern: /^\{|\}$/,
        alias: "punctuation"
      },
      rest: inside
    }
  };
  inside["func"] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      "function": /^[^(]+/,
      rest: inside
    }
  };
  Prism2.languages.stylus = {
    "atrule-declaration": {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        "atrule": /^@[\w-]+/,
        rest: inside
      }
    },
    "variable-declaration": {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        "variable": /^\S+/,
        rest: inside
      }
    },
    "statement": {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        "keyword": /^\S+/,
        rest: inside
      }
    },
    "property-declaration": {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        "property": {
          pattern: /^[^\s:]+/,
          inside: {
            "interpolation": inside.interpolation
          }
        },
        rest: inside
      }
    },
    "selector": {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        "interpolation": inside.interpolation,
        "comment": inside.comment,
        "punctuation": /[{},]/
      }
    },
    "func": inside.func,
    "string": inside.string,
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    "interpolation": inside.interpolation,
    "punctuation": /[{}()\[\];:.]/
  };
})(prism);
(function (Prism2) {
  var typescript = Prism2.util.clone(Prism2.languages.typescript);
  Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
  delete Prism2.languages.tsx["parameter"];
  delete Prism2.languages.tsx["literal-property"];
  var tag = Prism2.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
prism.languages.wasm = {
  "comment": [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  "string": {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  "keyword": [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      "operator": /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      "punctuation": /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  "variable": /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  "number": /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  "punctuation": /[()]/
};
var prism_default = prism;

// node_modules/prism-react-renderer/themes/duotoneDark/index.js
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};
var duotoneDark_default = theme;

// node_modules/prism-react-renderer/dist/index.js
var import_react = require("react@18.2.0");
var defaultProps = {
  Prism: prism_default,
  theme: duotoneDark_default
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var newlineRe = /\r\n|\r|\n/;
var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};
var appendTypes = function (types, add) {
  var typesSize = types.length;
  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }
  return types.concat(add);
};
var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];
  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i];
      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);
        if (token.alias) {
          types = appendTypes(types, token.alias);
        }
        content = token.content;
      }
      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      }
      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types,
        content: splitByNewlines[0]
      });
      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types,
          content: splitByNewlines[i$1]
        });
      }
    }
    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }
  normalizeEmptyLines(currentLine);
  return acc;
};
var themeToDict = function (theme2, language) {
  var plain = theme2.plain;
  var base = /* @__PURE__ */Object.create(null);
  var themeDict = theme2.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;
    if (languages && !languages.includes(language)) {
      return acc;
    }
    themeEntry.types.forEach(function (type) {
      var accStyle = _extends({}, acc[type], style);
      acc[type] = accStyle;
    });
    return acc;
  }, base);
  themeDict.root = plain;
  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};
function objectWithoutProperties(obj, exclude) {
  var target = {};
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];
  return target;
}
var Highlight = /* @__PURE__ */function (Component2) {
  function Highlight2() {
    var this$1 = this;
    var args = [],
      len = arguments.length;
    while (len--) args[len] = arguments[len];
    Component2.apply(this, args);
    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== void 0 && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }
      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : void 0;
      return this$1.themeDict = themeDict;
    });
    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token-line",
        style: void 0,
        key: void 0
      });
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict !== void 0) {
        output.style = themeDict.plain;
      }
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict === void 0) {
        return void 0;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : void 0;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }
      var baseStyle = empty ? {
        display: "inline-block"
      } : {};
      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });
    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: void 0
      });
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "tokenize", function (Prism2, code, grammar, language) {
      var env = {
        code,
        grammar,
        language,
        tokens: []
      };
      Prism2.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism2.tokenize(env.code, env.grammar, env.language);
      Prism2.hooks.run("after-tokenize", env);
      return tokens;
    });
  }
  if (Component2) Highlight2.__proto__ = Component2;
  Highlight2.prototype = Object.create(Component2 && Component2.prototype);
  Highlight2.prototype.constructor = Highlight2;
  Highlight2.prototype.render = function render() {
    var ref = this.props;
    var Prism2 = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism2.languages[language];
    var mixedTokens = grammar !== void 0 ? this.tokenize(Prism2, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens,
      className: "prism-code language-" + language,
      style: themeDict !== void 0 ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };
  return Highlight2;
}(import_react.Component);
var dist_default = Highlight;

// .beyond/uimport/temp/prism-react-renderer.1.3.5.js
var prism_react_renderer_1_3_5_default = dist_default;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL3ByaXNtLXJlYWN0LXJlbmRlcmVyLjEuMy41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByaXNtLXJlYWN0LXJlbmRlcmVyL3ByaXNtL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL3ByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9kdW90b25lRGFyay9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9wcmlzbS1yZWFjdC1yZW5kZXJlci9kaXN0L2luZGV4LmpzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiUHJpc20iLCJkZWZhdWx0IiwiZGVmYXVsdFByb3BzIiwibW9kdWxlIiwibGFuZyIsInVuaXF1ZUlkIiwicGxhaW5UZXh0R3JhbW1hciIsIl8iLCJ1dGlsIiwiZW5jb2RlIiwidG9rZW5zIiwiVG9rZW4iLCJ0eXBlIiwiY29udGVudCIsImFsaWFzIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwicmVwbGFjZSIsIm8iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJzbGljZSIsIm9iaklkIiwib2JqIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImNsb25lIiwiZGVlcENsb25lIiwidmlzaXRlZCIsImlkIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJmb3JFYWNoIiwidiIsImkiLCJnZXRMYW5ndWFnZSIsImVsZW1lbnQiLCJtIiwiZXhlYyIsImNsYXNzTmFtZSIsInRvTG93ZXJDYXNlIiwicGFyZW50RWxlbWVudCIsInNldExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJSZWdFeHAiLCJjbGFzc0xpc3QiLCJhZGQiLCJpc0FjdGl2ZSIsImRlZmF1bHRBY3RpdmF0aW9uIiwibm8iLCJjb250YWlucyIsImxhbmd1YWdlcyIsInBsYWluIiwicGxhaW50ZXh0IiwidGV4dCIsInR4dCIsImV4dGVuZCIsInJlZGVmIiwiaW5zZXJ0QmVmb3JlIiwiaW5zaWRlIiwiYmVmb3JlIiwiaW5zZXJ0Iiwicm9vdCIsImdyYW1tYXIiLCJyZXQiLCJ0b2tlbiIsIm5ld1Rva2VuIiwib2xkIiwiREZTIiwiY2FsbGJhY2siLCJwcm9wZXJ0eSIsInByb3BlcnR5VHlwZSIsInBsdWdpbnMiLCJoaWdobGlnaHQiLCJlbnYiLCJjb2RlIiwiaG9va3MiLCJydW4iLCJ0b2tlbml6ZSIsInN0cmluZ2lmeSIsInJlc3QiLCJ0b2tlbkxpc3QiLCJMaW5rZWRMaXN0IiwiYWRkQWZ0ZXIiLCJoZWFkIiwibWF0Y2hHcmFtbWFyIiwidG9BcnJheSIsImFsbCIsIm5hbWUiLCJwdXNoIiwiY2FsbGJhY2tzIiwibGVuZ3RoIiwibWF0Y2hlZFN0ciIsInMiLCJlIiwidGFnIiwiY2xhc3NlcyIsImF0dHJpYnV0ZXMiLCJhbGlhc2VzIiwiYXBwbHkiLCJqb2luIiwibWF0Y2hQYXR0ZXJuIiwicGF0dGVybiIsInBvcyIsImxvb2tiZWhpbmQiLCJsYXN0SW5kZXgiLCJtYXRjaCIsImxvb2tiZWhpbmRMZW5ndGgiLCJpbmRleCIsInN0YXJ0Tm9kZSIsInN0YXJ0UG9zIiwicmVtYXRjaCIsInBhdHRlcm5zIiwiaiIsImNhdXNlIiwicGF0dGVybk9iaiIsImdyZWVkeSIsImdsb2JhbCIsImZsYWdzIiwic291cmNlIiwiY3VycmVudE5vZGUiLCJuZXh0IiwidGFpbCIsInJlYWNoIiwic3RyIiwicmVtb3ZlQ291bnQiLCJmcm9tIiwidG8iLCJwIiwiayIsIm1hdGNoU3RyIiwiYWZ0ZXIiLCJyZW1vdmVGcm9tIiwicHJldiIsInJlbW92ZVJhbmdlIiwid3JhcHBlZCIsIm5lc3RlZFJlbWF0Y2giLCJsaXN0Iiwibm9kZSIsIm5ld05vZGUiLCJjb3VudCIsImFycmF5IiwicHJpc20iLCJtYXJrdXAiLCJhZGRJbmxpbmVkIiwidGFnTmFtZSIsImluY2x1ZGVkQ2RhdGFJbnNpZGUiLCJkZWYiLCJhdHRyTmFtZSIsImh0bWwiLCJtYXRobWwiLCJzdmciLCJ4bWwiLCJzc21sIiwiYXRvbSIsInJzcyIsImVudlZhcnMiLCJjb21tYW5kQWZ0ZXJIZXJlZG9jIiwiaW5zaWRlU3RyaW5nIiwiYmFzaCIsImVudGl0eSIsInZhcmlhYmxlIiwidG9CZUNvcGllZCIsInNoZWxsIiwiY2xpa2UiLCJjIiwia2V5d29yZCIsIm1vZE5hbWUiLCJjcHAiLCJzdHJpbmciLCJjc3MiLCJhZGRBdHRyaWJ1dGUiLCJzZWxlY3Rvckluc2lkZSIsInNlbGVjdG9yIiwidW5pdCIsIm51bWJlciIsImphdmFzY3JpcHQiLCJyZWdleCIsImpzIiwiY29tbWVudCIsImludGVycG9sYXRpb24iLCJjb2ZmZWVzY3JpcHQiLCJjb2ZmZWUiLCJhbmNob3JPckFsaWFzIiwicHJvcGVydGllcyIsInBsYWluS2V5IiwiY3JlYXRlVmFsdWVQYXR0ZXJuIiwieWFtbCIsInltbCIsImlubmVyIiwiY3JlYXRlSW5saW5lIiwidGFibGVDZWxsIiwidGFibGVSb3ciLCJ0YWJsZUxpbmUiLCJtYXJrZG93biIsInB1bmN0dWF0aW9uIiwid2Fsa1Rva2VucyIsImwiLCJjb2RlTGFuZyIsImNvZGVCbG9jayIsImNscyIsImF1dG9sb2FkZXIiLCJEYXRlIiwidmFsdWVPZiIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxvYWRMYW5ndWFnZXMiLCJlbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwidGV4dENvbnRlbnQiLCJ0YWdQYXR0ZXJuIiwiS05PV05fRU5USVRZX05BTUVTIiwiZnJvbUNvZGVQb2ludCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwiTnVtYmVyIiwia25vd24iLCJtZCIsImdyYXBocWwiLCJhZnRlclRva2VuaXplR3JhcGhxbCIsInZhbGlkVG9rZW5zIiwiZmlsdGVyIiwiY3VycmVudEluZGV4IiwiZ2V0VG9rZW4iLCJvZmZzZXQiLCJpc1Rva2VuVHlwZSIsInR5cGVzIiwiZmluZENsb3NpbmdCcmFja2V0Iiwib3BlbiIsImNsb3NlIiwic3RhY2tIZWlnaHQiLCJ0ZXN0IiwiYWRkQWxpYXMiLCJzdGFydFRva2VuIiwiaW5wdXRWYXJpYWJsZXMiLCJkZWZpbml0aW9uRW5kIiwidCIsIm11dGF0aW9uRW5kIiwidmFyVG9rZW4iLCJpbmRleE9mIiwic3FsIiwidGVtcGxhdGVTdHJpbmciLCJ0ZW1wbGF0ZUxpdGVyYWxQYXR0ZXJuIiwiaW50ZXJwb2xhdGlvbk9iamVjdCIsImludGVycG9sYXRpb25QdW5jdHVhdGlvbk9iamVjdCIsImludGVycG9sYXRpb25QYXR0ZXJuIiwiY3JlYXRlVGVtcGxhdGUiLCJCb29sZWFuIiwiZ2V0UGxhY2Vob2xkZXIiLCJjb3VudGVyIiwidG9VcHBlckNhc2UiLCJ0b2tlbml6ZVdpdGhIb29rcyIsInRva2VuaXplSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24iLCJleHByZXNzaW9uIiwidGVtcEdyYW1tYXIiLCJhcmdzIiwic3BsaWNlIiwidG9rZW5pemVFbWJlZGRlZCIsIl90b2tlbnMiLCJwbGFjZWhvbGRlckNvdW50ZXIiLCJwbGFjZWhvbGRlck1hcCIsImVtYmVkZGVkQ29kZSIsImludGVycG9sYXRpb25FeHByZXNzaW9uIiwicGxhY2Vob2xkZXIiLCJlbWJlZGRlZFRva2VucyIsInBsYWNlaG9sZGVycyIsImtleXMiLCJzdWJzdHJpbmciLCJtaWRkbGUiLCJyZXBsYWNlbWVudCIsImFmdGVyVG9rZW5zIiwiY29uY2F0Iiwic3VwcG9ydGVkTGFuZ3VhZ2VzIiwiZmluZFRlbXBsYXRlU3RyaW5ncyIsImVtYmVkZGVkIiwic3RyaW5nQ29udGVudCIsInR5cGVzY3JpcHQiLCJ0eXBlSW5zaWRlIiwidHMiLCJ3aXRoSWQiLCJ1bnNoaWZ0IiwibWF5YmVDbGFzc05hbWVUb2tlbnMiLCJzcGFjZSIsImJyYWNlcyIsInNwcmVhZCIsInJlIiwianN4Iiwic3RyaW5naWZ5VG9rZW4iLCJvcGVuZWRUYWdzIiwibm90VGFnTm9yQnJhY2UiLCJwb3AiLCJvcGVuZWRCcmFjZXMiLCJwbGFpblRleHQiLCJkaWZmIiwiUFJFRklYRVMiLCJwcmVmaXgiLCJnaXQiLCJnbyIsImRlZmluZVByb3BlcnRpZXMiLCJidWlsZFBsYWNlaG9sZGVycyIsInBsYWNlaG9sZGVyUGF0dGVybiIsInJlcGxhY2VGaWx0ZXIiLCJ0b2tlblN0YWNrIiwidG9rZW5pemVQbGFjZWhvbGRlcnMiLCJoYW5kbGViYXJzIiwiaGFuZGxlYmFyc1BhdHRlcm4iLCJoYnMiLCJqc29uIiwid2VibWFuaWZlc3QiLCJsZXNzIiwibWFrZWZpbGUiLCJvYmplY3RpdmVjIiwib2JqYyIsIm9jYW1sIiwicHl0aG9uIiwicHkiLCJyZWFzb24iLCJmdW5jdGlvbiIsInNhc3MiLCJhdHJ1bGUiLCJvcGVyYXRvciIsImltcG9ydGFudCIsInNjc3MiLCJzdHlsdXMiLCJmdW5jIiwidHN4Iiwid2FzbSIsInByaXNtX2RlZmF1bHQiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwic3R5bGVzIiwic3R5bGUiLCJvcGFjaXR5IiwidGV4dERlY29yYXRpb25MaW5lIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImR1b3RvbmVEYXJrX2RlZmF1bHQiLCJyZXF1aXJlIiwiX2RlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2V4dGVuZHMiLCJhc3NpZ24iLCJ0YXJnZXQiLCJhcmd1bWVudHMiLCJuZXdsaW5lUmUiLCJub3JtYWxpemVFbXB0eUxpbmVzIiwibGluZSIsImVtcHR5IiwiYXBwZW5kVHlwZXMiLCJ0eXBlc1NpemUiLCJub3JtYWxpemVUb2tlbnMiLCJ0eXBlQXJyU3RhY2siLCJ0b2tlbkFyclN0YWNrIiwidG9rZW5BcnJJbmRleFN0YWNrIiwidG9rZW5BcnJTaXplU3RhY2siLCJzdGFja0luZGV4IiwiY3VycmVudExpbmUiLCJhY2MiLCJ0b2tlbkFyciIsInNwbGl0QnlOZXdsaW5lcyIsInNwbGl0IiwibmV3bGluZUNvdW50IiwiaSQxIiwidGhlbWVUb0RpY3QiLCJiYXNlIiwiY3JlYXRlIiwidGhlbWVEaWN0IiwicmVkdWNlIiwidGhlbWVFbnRyeSIsImluY2x1ZGVzIiwiYWNjU3R5bGUiLCJvYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGUiLCJIaWdobGlnaHQiLCJDb21wb25lbnQiLCJ0aGlzJDEiLCJsZW4iLCJwcm9wcyIsInByZXZUaGVtZSIsInByZXZMYW5ndWFnZSIsInJlZiIsInJlc3QkMSIsIm91dHB1dCIsImdldFRoZW1lRGljdCIsImRpc3BsYXkiLCJiYXNlU3R5bGUiLCJ0eXBlU3R5bGVzIiwiY2hpbGRyZW4iLCJnZXRTdHlsZUZvclRva2VuIiwiX19wcm90b19fIiwiY29uc3RydWN0b3IiLCJyZW5kZXIiLCJtaXhlZFRva2VucyIsImdldExpbmVQcm9wcyIsImdldFRva2VuUHJvcHMiLCJpbXBvcnRfcmVhY3QiLCJkaXN0X2RlZmF1bHQiLCJwcmlzbV9yZWFjdF9yZW5kZXJlcl8xXzNfNV9kZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7QUNtQkMsSUFBSUgsUUFBUyxZQUFZO0VBR3pCLElBQUlJLE9BQU87RUFDWCxJQUFJQyxXQUFXO0VBR2YsSUFBSUMsbUJBQW1CLENBQUM7RUFHeEIsSUFBSUMsSUFBSTtJQVVQQyxNQUFNO01BQ0xDLFFBQVEsU0FBU0EsT0FBT0MsUUFBUTtRQUMvQixJQUFJQSxrQkFBa0JDLE9BQU87VUFDNUIsT0FBTyxJQUFJQSxNQUFNRCxPQUFPRSxNQUFNSCxPQUFPQyxPQUFPRyxPQUFPLEdBQUdILE9BQU9JLEtBQUs7UUFDbkUsV0FBV0MsTUFBTUMsUUFBUU4sTUFBTSxHQUFHO1VBQ2pDLE9BQU9BLE9BQU9PLElBQUlSLE1BQU07UUFDekIsT0FBTztVQUNOLE9BQU9DLE9BQU9RLFFBQVEsTUFBTSxPQUFPLEVBQUVBLFFBQVEsTUFBTSxNQUFNLEVBQUVBLFFBQVEsV0FBVyxHQUFHO1FBQ2xGO01BQ0Q7TUFrQkFOLE1BQU0sVUFBVU8sR0FBRztRQUNsQixPQUFPQyxPQUFPQyxVQUFVQyxTQUFTQyxLQUFLSixDQUFDLEVBQUVL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LFNBQVlXLFNBQVMsQ0FBQyxHQUFHMEMsT0FBT3JELE9BQU9BLEtBQUssSUFBSUE7TUFDbEY7TUFFQSxJQUFJbFQsUUFBUSxRQUFXO1FBQ3JCdVcsT0FBT3ZXLE1BQU1BO01BQ2Y7TUFFQSxJQUFJUyxXQUFXO1FBQ2I4VixPQUFPOVYsYUFBYSxNQUFNQTtNQUM1QjtNQUVBLE9BQU84VjtJQUNULENBQUM7SUFFRDlDLGdCQUFnQixNQUFNLFlBQVksVUFBVTFWLFFBQU84RSxNQUFNWixTQUFTcEIsVUFBVTtNQUMxRSxJQUFJK0IsTUFBTTtRQUNSQztRQUNBWjtRQUNBcEI7UUFDQXBDLFFBQVE7TUFDVjtNQUNBVixPQUFNK0UsTUFBTUMsSUFBSSxtQkFBbUJILEdBQUc7TUFDdEMsSUFBSW5FLFNBQVNtRSxJQUFJbkUsU0FBU1YsT0FBTWlGLFNBQVNKLElBQUlDLE1BQU1ELElBQUlYLFNBQVNXLElBQUkvQixRQUFRO01BQzVFOUMsT0FBTStFLE1BQU1DLElBQUksa0JBQWtCSCxHQUFHO01BQ3JDLE9BQU9uRTtJQUNULENBQUM7RUFDSDtFQUVBLElBQUlzWCxZQUFXRCxXQUFVZ0IsWUFBWWY7RUFDckNELFdBQVUxVyxZQUFZRCxPQUFPbVcsT0FBT1MsY0FBYUEsV0FBVTNXLFNBQVM7RUFDcEUwVyxXQUFVMVcsVUFBVTJYLGNBQWNqQjtFQUVsQ0EsV0FBVTFXLFVBQVU0WCxTQUFTLFNBQVNBLFNBQVM7SUFDN0MsSUFBSVgsTUFBTSxLQUFLSDtJQUNmLElBQUluWSxTQUFRc1ksSUFBSXRZO0lBQ2hCLElBQUk4QyxXQUFXd1YsSUFBSXhWO0lBQ25CLElBQUlnQyxPQUFPd1QsSUFBSXhUO0lBQ2YsSUFBSStULFdBQVdQLElBQUlPO0lBQ25CLElBQUlyQixZQUFZLEtBQUtpQixhQUFhLEtBQUtOLEtBQUs7SUFDNUMsSUFBSWpVLFVBQVVsRSxPQUFNc0QsVUFBVVI7SUFDOUIsSUFBSW9XLGNBQWNoVixZQUFZLFNBQVksS0FBS2UsU0FBU2pGLFFBQU84RSxNQUFNWixTQUFTcEIsUUFBUSxJQUFJLENBQUNnQyxJQUFJO0lBQy9GLElBQUlwRSxTQUFTOFYsZ0JBQWdCMEMsV0FBVztJQUN4QyxPQUFPTCxTQUFTO01BQ2RuWTtNQUNBZ0MsV0FBVyx5QkFBeUJJO01BQ3BDcVMsT0FBT3FDLGNBQWMsU0FBWUEsVUFBVXZULE9BQU8sQ0FBQztNQUNuRGtWLGNBQWMsS0FBS0E7TUFDbkJDLGVBQWUsS0FBS0E7SUFDdEIsQ0FBQztFQUNIO0VBRUEsT0FBT3JCO0FBQ1QsRUFBRXNCLHNCQUFTO0FBRVgsSUFBT0MsZUFBUXZCOzs7QUgxVWYsSUFBT3dCLHFDQUFRRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL3ZvaWNlLWdlbml1cy9wcm9qZWN0L291dCJ9