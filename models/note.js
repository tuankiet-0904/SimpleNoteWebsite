'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Note extends Model {
        static associate(models) {
            Note.belongsTo(models.User, { foreignKey: 'user_id' })
        }
    }
    Note.init(
        {
            user_id: DataTypes.INTEGER,
            image_url: DataTypes.STRING,
            category_ids: DataTypes.JSON,
            keyword: DataTypes.STRING,
            memo: DataTypes.TEXT,
            difficulty_level: DataTypes.STRING,
            popularity: DataTypes.STRING,
            createdAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('createdAt')) {
                        return toLocaleString(this.getDataValue('createdAt'))
                    }
                    return null
                },
            },
            updatedAt: {
                type: DataTypes.DATE,
                get: function () {
                    if (this.getDataValue('updatedAt')) {
                        return toLocaleString(this.getDataValue('updatedAt'))
                    }
                    return null
                },
            },
        },
        {
            sequelize,
            modelName: 'Note',
        },
    )
    return Note
}
