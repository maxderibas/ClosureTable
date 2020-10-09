'use strict';
// const Tree = require('./tree');

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  // Comment.associate = (models) => {
  //   Comment.belongsToMany(models.Comment, {
  //     as: 'children',
  //     through: 'Tree',
  //     foreignKey: 'ancestorId',
  //     otherKey: 'descendantId'
  //   });
  // }
  //
  // class Comment extends Model {
  //   static associate(models) {
  //     Comment.belongsToMany(models.Comment, {
  //       as: 'children',
  //       through: ToonChild,
  //       foreignKey: 'ancestorId',
  //       otherKey: 'descendantId'
  //     });
  //   }
  // };
  // Comment.init({
  //   id: DataTypes.INTEGER,
  //   content: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'Comment',
  // });
  return Comment;
};
