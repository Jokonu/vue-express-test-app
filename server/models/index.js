const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

function modelsFilter (file) {
  return (file !== 'index.js' && file[0] !== '.AppleDouble')
}

fs
  .readdirSync(__dirname)
  .filter(modelsFilter)
  .forEach((file) => {
    console.log('Files found: %s full file %s', file, path.join(__dirname, file))
    // const model = sequelize.import(path.join(__dirname, file))
    // db[model.name] = model
  })

const model = sequelize.import('User.js')
db['User'] = model

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
