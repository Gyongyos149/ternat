import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Member) {
    await db.Member.bulkCreate([
      { id: "1", teamId: "1", fullName: "Szoboszlai Dominik", position:"Középpályás" },
      { id: "2", teamId: "1", fullName: "Dibusz Dénes", position:"Kapus" },
      { id: "3", teamId: "2", fullName: "Gulácsi Péter", position:"Kapus" },  
      
    ]);
  }else {
    await QueryInterface.bulkInsert('members', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('members');
}

export { up, down }
