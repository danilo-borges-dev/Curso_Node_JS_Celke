const db = require(`./_database`);

async function listData(){
    await db.connect();

    var result;

    result = await db.query(`SELECT * FROM evento`);
    console.log("Eventos: ");
    console.log(result.rows);

    result = await db.query(`SELECT * FROM participante`);
    console.log(`Participantes: `);
    console.log(result.rows);

    result = await db.query(`SELECT e.nome AS evento, p.nome AS participante FROM evento AS e, participante AS p, evento_participante ep WHERE ep.evento_id = e.id AND ep.participante_id = p.id`);
    console.log(`Eventos com Participantes: `);
    console.log(result.rows);

    await db.end();
}

listData();