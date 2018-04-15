// https://stackoverflow.com/questions/35040978/babel-unexpected-token-import-when-running-mocha-tests
require('babel-register')({
    ignore: /node_modules\/(?!esmodule|dommodule)/
})
