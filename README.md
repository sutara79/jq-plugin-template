# jq-plugin-template
[![Build Status](https://travis-ci.org/sutara79/jq-plugin-template.svg?branch=master)](https://travis-ci.org/sutara79/jq-plugin-template)
[![codecov](https://codecov.io/gh/sutara79/jq-plugin-template/branch/master/graph/badge.svg)](https://codecov.io/gh/sutara79/jq-plugin-template)

My barebone to develop jQuery-plugin.  
You can test client-side JavaScript, get code coverage and get badges from Travis CI and Codecov.

## Usage
### Unit testing
###### JavaScript
```bash
# Unit testing and code coverage
$ npm test
```

###### PHP
```bash
# Unit testing
$ composer test

# Unit testing and code coverage
$ composer cover
```


## Structure
### JavaScript
- npm
    - [jQuery 3.2](https://github.com/jquery/jquery)
    - [grunt-qunit-istanbul](https://github.com/asciidisco/grunt-qunit-istanbul)
        - [QUnit 1.23](https://github.com/qunitjs/qunit): Unit testing.
        - [Istanbul 0.3](https://github.com/gotwarlost/istanbul): Code coverage.
        - [PhantomJS 1.9](https://github.com/ariya/phantomjs/): Headless browser for unit testing using DOM.
    - [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat): Concatenate js-files.
    - [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify): Minify js-files.

### CSS
- npm
    - [uglifycss](https://github.com/fmarcia/UglifyCSS): Minify css-files.

### PHP
- Composer
    - [PHPUnit 6.1](https://github.com/sebastianbergmann/phpunit): Unit testing.

### CI
- [Travis CI](https://travis-ci.org/sutara79/jq-plugin-template): Unit testing.
- [Codecov](https://codecov.io/gh/sutara79/jq-plugin-template): Code coverage.


## Author
[Yuusaku Miyazaki](http://qiita.com/sutara79/items/86234d8d4db1dd25e85e)
( <toumin.m7@gmail.com> )