module.exports = {
  "presets": [
    "mobx",
    "module:metro-react-native-babel-preset",
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "module-resolver",
      {
        "root": ["./"],
        "extensions": [
          ".js",
          ".ios.js",
          ".android.js",
        ],
        "alias": {
          "utils": "./src/utils",
          "controller": "./src/controller",
          "api": "./src/controller/api",
          "mbx": "./src/controller/mobx",
          "assets": "./src/assets",
          "ui": "./src/ui",
          "components": "./src/ui/components",
          "containers": "./src/ui/containers",
          "screens": "./src/ui/screens"
        },
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        "transform-remove-console"
      ]
    }
  }
};
