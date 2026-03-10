import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('teams', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {type: DataTypes.STRING,  allowNull: false  },
    city: { type: DataTypes.STRING,  allowNull: false  },
    league: { type: DataTypes.STRING,  allowNull: false  },

    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('teams');
}

export { up, down }
