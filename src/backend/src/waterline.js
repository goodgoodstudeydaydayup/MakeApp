const Waterline = require('waterline')
const mongoAdapter = require('sails-mongo')
const mysqlAdapter = require('sails-mysql')
const glob = require('glob')
const path = require('path')
const env = require('./env')
const utils = require('./utils')

const orm = new Waterline()

const wlconfig = {
  adapters: {
    default: mongoAdapter,
    mongo: mongoAdapter,
    mysql: mysqlAdapter
  },
  connections: {
    mongo: {
      adapter: 'mongo',
      url: env.mongo
    },
    mysql: {
      adapter: 'mysql',
      url: env.mysql,
      charset   : 'utf8',
      collation : 'utf8_general_ci'
    }
  }
}

utils.globFiles('../modules/*/*.model.js', file => {
  const model = require(file)
  orm.loadCollection(model)
})
console.log('Model has been ready!')

exports.orm = orm;
exports.config = wlconfig;
exports.models = null;
