const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
   host: dbConfig.HOST,
   dialect: dbConfig.dialect,
   operatorsAliases: false,
   pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
   }
});

const db={};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.msg = require('./msg.model.js')(sequelize, Sequelize);
db.basic = require('./basic.model.js')(sequelize, Sequelize);
db.units = require('./units.model.js')(sequelize, Sequelize);
db.auth = require('./auth.model.js')(sequelize, Sequelize);

module.exports = db;
