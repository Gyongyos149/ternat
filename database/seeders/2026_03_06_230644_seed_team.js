import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Team) {
    await db.Team.bulkCreate([
      { id: "1", name: "Liverpool", city: "Liverpool", league:"NB1", },
      { id: "2", name: "Fradi", city: "Budapest", league:"NB1", },
      { id: "3", name: "Real", city: "Leipzig", league:"Bundesliga", },
    ]);
  }else {
    await QueryInterface.bulkInsert('teams', [

    ]);
  }
}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('teams');
}

export { up, down }
