Location.hasMany(Team, {
    foreignKey: 'location_id'
});


Team.belongsTo(Location, {
    foreignKey: 'location_id',
});