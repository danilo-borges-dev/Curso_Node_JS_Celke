const db = require('./_database');

var updateData = async function(){
    await db.connect(err => {
        if(err){
            throw err;
        }
    });

    await db.query(`UPDATE participante SET nome = 'Danilo Teste' WHERE id = 1`);

    await db.end();
}

updateData();