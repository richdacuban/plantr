const db = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log(`Database synced!`);
  })
  .catch(err => {
    console.log(`Brrrrrrrrrp`);
    console.log(err);
  })
  .finally(() => {
    db.close();
  });
