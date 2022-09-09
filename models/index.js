const User = require('./User');
const House = require('./House');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: "user_id"
});
User.hasOne(House, {
    foreignKey: "user_id"
});
Comment.belongsTo(User, {
    foreignKey: "user_id"
});
Comment.belongsTo(House, {
    foreignKey: "house_id"
});
House.belongsTo(User, {
    foreignKey: "user_id"
});
House.hasMany(Comment, {
    foreignKey: "house_id"
});

module.exports = { User, House, Comment };