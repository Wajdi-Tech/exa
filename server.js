const express=require('express')
const app =express()
const cors = require('cors')
app.use(cors('*'))

app.get('/listpost',(req,res)=>{

    let p=
    [
        {  id: '1', titre: "Premier post", contenu: 'détails premier post' },
        { id: '2', titre: "Deuxième post", contenu: 'détails deuxième post' },
        { id: '3', titre: "Troisième post", contenu: 'détails troisième post' }
    ]

    res.json(p)

})

app.listen(3000,()=>console.log("server demarée")
)
