const sequelize = require('../config/connection')
const { Location, Team } = require('../models')
const locationSeedData = require('./location.json')
const teamSeedData = require('./team.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Location.bulkCreate(locationSeedData, {
        returning: true
    })
    await Team.bulkCreate(teamSeedData, {
        returning: true
    })
    
    process.exit(0);
};

seedDatabase();