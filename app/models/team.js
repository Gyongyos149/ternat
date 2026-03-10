import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Team = sequelize.define('teams', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    city: { type: DataTypes.STRING,  allowNull: false  },
    league: { type: DataTypes.STRING,  allowNull: false  }

}, 
 {
    timestamps: true,
    freezeTableName: true
})

export default Team
