const express= require('express')
const app = express()
const port =3000

const path = require('path')
const basePath= path.join(__dirname,'templates')

var checkAuth = (req,res,next)=>{
    req.authStatus= true

    if(req.authStatus){
    console.log('Está logado, pode continuar')
    next()
    }else{
        console.log('não está logado')
    }
}

app.use(
    express.urlencoded({
    extended:true,})
)

app.get('/users/add',(req,res)=>{
    console.log(`carregando usuário:${req.params.id}`)
    
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save',(req,res) =>{
    console.log(req.body)
    const name= req.body.name
    const age = req.body.age
    console.log(name)
    console.log(age)
})

app.get('/',(req, res)=>{
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ()=>{
    console.log(`App rodando na porta:${port}`)
})