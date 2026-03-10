import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('members', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    teamId: { type: DataTypes.INTEGER,  allowNull: false  },
    fullName: { type: DataTypes.STRING},
    position: { type: DataTypes.STRING},

    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('members');
}

export { up, down }
