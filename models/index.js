const User = require('./User');
const House = require('./House');
const Comment = require('./Comment');
const Favorites = require('./Favorites');

User.hasMany(House, {
    foreignKey: "created_by_user_id"
});

House.belongsTo(User, {
    foreignKey: "created_by_user_id",
    onDelete: 'CASCADE'
});

User.belongsToMany(House, {
    through: Favorites,
    foreignKey: 'user_id'
});

House.belongsToMany(User, {
    through: Favorites,
    foreignKey: 'house_id'
});

User.hasMany(Comment, {
    foreignKey: "user_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
});

House.hasMany(Comment, {
    foreignKey: "house_id"
});

Comment.belongsTo(House, {
    foreignKey: "house_id"
});

module.exports = { User, House, Comment, Favorites };