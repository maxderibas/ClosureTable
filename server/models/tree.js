'use strict';
// const Comment = require('./comment');

// console.log('***Comment', Comment)
module.exports = (sequelize, DataTypes) => {
  const Tree = sequelize.define('Tree', {
    ancestorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descendantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    level: {
      type: DataTypes.INTEGER
    },
    nearestAnc: {
      type: DataTypes.INTEGER
    }
  });

  Tree.associate = (models) => {
    Tree.belongsTo(models.Comment, { as: 'ancestor' });
    Tree.belongsTo(models.Comment, { as: 'descendant' });
  }

  // class Tree extends Model {};
  // Tree.init({
  //   ancestorId: DataTypes.INTEGER,
  //   descendantId: DataTypes.INTEGER,
  //   level: DataTypes.INTEGER,
  //   nearestAnc: DataTypes.INTEGER
  // }, {
  //   sequelize,
  //   modelName: 'Tree',
  // });
  return Tree;
};
