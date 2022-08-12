const db = require(`./_database`);

var deleDataInfos = async function(){
    try {     
        try {
            await db.connet();   
            console.log(`\n ---------- Conexão com Banco de Dados foi REALIZADO COM SUCESSO. ---------- \n`)         
        } catch (error) {
            console.log(`\n NÃO foi Possível conectar ao Banco de Dados. ${error}. \n`)
        }       
        await db.query(`DELETE FROM paricipante WHERE id = 1`);   
        
    } catch (error) {
        console.log(`\n Ocorreu um ERRO. ${error}.\n `);
    }
    finally{
        await db.end();
    }
}