const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {

    "env": {
    "test": {
        "plugins": ["transform-es2015-modules-commonjs"]
    }
}
}