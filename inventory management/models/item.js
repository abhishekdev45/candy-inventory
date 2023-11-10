const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Item = sequelize.define('items', {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        candy: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description:{
          type: Sequelize.STRING,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        }

  } , {
    timestamps:false,
  });

    
  
  module.exports = Item;