const express = require("express")
const app = express()
const path = require("path")






// обработка статики
app.use(express.static(path.resolve(__dirname , 'client')))
app.get(
    '*',
    (req , res) => {
        res.sendFile(path.resolve(__dirname , 'client' , 'index.html'))
    }
)



app.listen(3000 , () => console.log("\nСервер запущен на 3000 порту.\n>> http://localhost:3000"))