import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Member = sequelize.define('members', {
    id: { type: DataTypes.INTEGER,  allowNull: false, primaryKey: true, autoIncrement: true },
    teamId: { type: DataTypes.INTEGER,  allowNull: false  },
    fullName: { type: DataTypes.STRING,  allowNull: false  },
    position: { type: DataTypes.STRING,  allowNull: false  }
},
 {
    timestamps: true,
    freezeTableName: true
})

export default Member
