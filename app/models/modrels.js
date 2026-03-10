import User from './user.js';
import sequelize from '../database/database.js'
import Team from './team.js';
import Member from './member.js';

const db = {};

/* Import your models and write here. 
For example User: */
db.User = User;
db.Team = Team;
db.Member = Member;

// await sequelize.sync({ alter: true })

/*
Write the relationships between the models here.
*/

export default db;
