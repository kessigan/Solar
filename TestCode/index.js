const Sequelize = require('sequelize');
const sequelize = new Sequelize('solar', 'root', 'Kessigan', {
  host: '35.225.7.32',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  //storage: 'path/to/database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

  // force: true will drop the table if it already exists
  User.sync({force: true}).then(() => {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  });
