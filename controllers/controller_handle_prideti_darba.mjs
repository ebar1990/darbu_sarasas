import mongodb from 'mongodb'
import view_zinute_darbas_pridetas from '../views/view_zinute_darbas_pridetas.mjs'

const controller_handle_prideti_darba = async function (req, res)
{
    console.log("controller_handle_prideti_darba")
    const uri = "mongodb+srv://trevoras:trakai323@cluster0.kpi1hro.mongodb.net/"

    const mongodb_client_1 = new mongodb.MongoClient(uri)

    const result_of_insertOne = await mongodb_client_1.db("db_darbu_sarasas").collection("collection_darbu_sarasas").insertOne({"aprasas": req.body.aprasas })
    
    mongodb_client_1.close()
    
    res.statusCode = 200
    res.write(view_zinute_darbas_pridetas)
    res.end()
}

export default controller_handle_prideti_darba