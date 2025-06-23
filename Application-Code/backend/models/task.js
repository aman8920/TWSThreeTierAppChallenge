
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // ✅ Destructure the sequelize instance

const Task = sequelize.define('Task', {
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: 'tasks120',
  timestamps: true,
});

module.exports = Task;
