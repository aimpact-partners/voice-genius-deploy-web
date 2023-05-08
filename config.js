System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", {
        "package": "@aimpact/voice-genius",
        "version": "1.0.0",
        "languages": {
          "default": "en",
          "supported": ["en", "es"]
        },
        "global.css": true,
        "layout": "voice-genius",
        "params": {
          "openia": {
            "key": "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"
          },
          "elevenlabs": {
            "key": "ebe05ca0a4d9aafb4024d0666471a0c7",
            "id": "pNInz6obpgDQGcFmaJgB"
          }
        },
        "ssr": {},
        "backend": {
          "host": "wss://ws.dev.voicegenius.backend.balearesgroup.com"
        }
      });
    }
  };
});