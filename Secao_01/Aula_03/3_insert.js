const db = require('./_database');

async function (){
    await db.connect();

    const queryEvento = `INSERT INTO evento (nome) VALUES ($1)`;

    await db.query(queryEvento, [`Encontro de Node.js`]);
    await db.query(queryEvento, [`Encontro de PostgreSql`]);

    const queryParticipante = `INSERT INTO participante (name) VALUES ($1)`;

    await db.query(queryParticipante, [`Carlos`]);
    await db.query(queryParticipante, [`Augusto`]);
    await db.query(queryParticipante, [`Janaina`]);
    await db.query(queryParticipante, [`Rafael`]);

    const queryEventoParticipante = `ISERT INTO evento_participante (evento_id, participante_id) VALUES ($1, $2)`;

    await db.query(queryEventoParticipante, [1, 1]);
    await db.query(queryEventoParticipante, [1, 2]);
    await db.query(queryEventoParticipante, [1, 3]);

    await db.query(queryEventoParticipante, [2, 3]);
    await db.query(queryEventoParticipante, [2, 4]);

    await db.end;
}