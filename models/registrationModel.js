const { database, DataTypes } = require('../utils/databaseUtil')

const Registration = database.define( 'registration', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Working'
  }
})
module.exports = { Registration }




