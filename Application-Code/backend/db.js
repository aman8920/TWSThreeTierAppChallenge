const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'postgresql.three-tier.svc.cluster.local',
    port: parseInt(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    },
    logging: false,
  }
);

const connectToDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected');
    await sequelize.sync(); // this will create tables if they don't exist
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  }
};

module.exports = {
  sequelize,
  connectToDb,
};
