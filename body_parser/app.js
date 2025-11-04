const express= require("express");
const app= express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended: false})); 
// controle do sistema:decodificar o html 
//ROTAS 
app.get("/", (req, res) =>{

res.sendFile(__dirname+'/body_parser/index.html');

})
app.post("/add", (req, res) =>{
    res.send("Nome: " +req.body.nome + "Email: "+req.body.email);
})
const PORT= 8080;
app.listen(PORT, () =>{
console.log("Servidor rodando na url https://localhost" +PORT)
})

