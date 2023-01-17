import express from 'express'
import controller_handle_prideti_darba from './controllers/controller_handle_prideti_darba.mjs'
import controller_show_view_prideti_darba from './controllers/controller_show_view_prideti_darba.mjs'


console.log(typeof (express))

const express_1 = express()


// middleware

express_1.use(express.urlencoded())



//endpoints

express_1.get("/",controller_show_view_prideti_darba)
express_1.post("/prideti_darba", controller_handle_prideti_darba)


//


express_1.listen(8080, "127.0.0.1")
//express_1.listen(8080,"192.168.77.224")