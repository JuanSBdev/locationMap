const {Sequelize, DataTypes } = require('sequelize')
module.exports = (sequelize)=> {
    sequelize.define('Reserve',{
        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4,
        },
    })
}