const db = require('./_database');

var updateData = async function(){
    try {

        try {
            await db.connect();        
            console.log(`\n ---------- Conexão ao Banco de Dados realizada com SUCESSO. ---------- \n`);            
        } catch (error) {
            console.log(`NÃO foi possível conectar ao banco de dados.`, error);
        }

        try {
            await db.query(`UPDATE participante SET nome = 'Danilo Nodemon' WHERE id = 1`);    
            console.log(`\n ---------- Operação realizada com SUCESSO. ---------- \n`)    
        } catch (error) {
            console.log(`Não foi possível atualizar.` + error + ".");
            throw error;
        }

    } catch (error) {
        console.log(`Ocorreu um ERRO.` + error + ".");
    }
    finally{
        await db.end();
    }   
}

updateData();