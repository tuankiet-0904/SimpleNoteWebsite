'use strict'
const { Model } = require('sequelize')
const { toLocaleString } = require(process.cwd() + '/helpers/datetime')
module.exports = (sequelize, DataTypes) => {
    class Test extends Model {
        static associate(models) {
            Test.belongsTo(models.User, { foreignKey: 'user_id' })
            // Test.hasMany(models.Note, { foreignKey: 'note_ids' })
        }
    }
    Test.init(
        {
            user_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            note_ids: DataTypes.JSON,
            accuracy: DataTypes.INTEGER,
            duration: DataTypes.TIME,
            finishedAt: DataTypes.DATE,
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
            modelName: 'Test',
        },
    )
    return Test
}
