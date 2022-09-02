const {  DataTypes, Sequelize } = require('sequelize')

const database = new Sequelize({
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'Joe25',
  port: 5432,
  database: 'First homework',
  logging: false
})
module.exports = { database, DataTypes}