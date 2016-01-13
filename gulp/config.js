var ASSETS_DIR = 'assets/';
var PUBLIC_DIR = 'public/';

var config = {
  paths : {
    source : {
      styles        : ASSETS_DIR + 'css/**/*.{sass,scss}',
      scripts_entry : ASSETS_DIR + 'ts/main.ts',
      scripts       : ASSETS_DIR + 'ts/**/*.ts',
      images        : ASSETS_DIR + 'images/**/*.{png,jpg,jpeg,gif,svg}',
      copy          : ASSETS_DIR + 'copy/**/*',
      root          : ASSETS_DIR
    },
    dest : PUBLIC_DIR
  }
};

module.exports = config;