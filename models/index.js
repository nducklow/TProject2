const Location = require('./location')
const Team = require('./team')

Location.hasMany(Team, {
    foreignKey: 'location_id'
});


Team.belongsTo(Location, {
    foreignKey: 'location_id',
});

module.exports = {Location, Team}