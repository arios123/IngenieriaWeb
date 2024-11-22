const express=require("express");
const connection=require("./database.js");
const bodyparser=require("body-parser");
const cors = require('cors');
const app=express();
const bcrypt = require('bcrypt');

app.use(bodyparser.json());
app.use(cors());

app.post('/usuarios/signup',async (req,res)=>{
    try{
        const saltRounds = 10;
        const {name,email,rut,region,comuna,password}=req.body;
        const passwordEncriptado=await bcrypt.hash(password,saltRounds);
        const query="INSERT INTO usuarios(name,email,rut,region,comuna,password)VALUES(?,?,?,?,?,?)"
        connection.query(query,[name,email,rut,region,comuna,passwordEncriptado],(error,resultado)=>{
        if(error){
            console.log("error ocurrio");
            return;
        }
        res.status(201).json({res:201,message:"datos insertados"});
    })}catch(error){
        console.error('Error hashing password:', err);
    }
  })

app.post('/usuarios/login',(req,res)=>{
    const {email,password}=req.body;
    const query="SELECT * FROM usuarios WHERE email=?"
    connection.query(query,[email],(error,resultado)=>{
      if(error){
          console.log("error ocurrio");
      }
      resultado.map((person) => (
        bcrypt.compare(password, person.password, (err, result) => {
            if (err) {
              console.error('Error comparing password:', err);
            } else if (result) {
              res.status(200).json(resultado);
              return;
            } else {
              console.log(result)
            }
          })
      ))
    })
  })

app.post('/posts/add',(req,res)=>{
    const {title,hours,place,description}=req.body;
    const query="INSERT INTO posts(rut,title,hours,place,description)VALUES(1,?,?,?,?)"
    connection.query(query,[title,hours,place,description],(error,resultado)=>{
      if(error){
          console.log("error ocurrio", error);
          return;
      }
      res.status(201).json({res:201,message:"datos insertados"});
    })
  })

app.get("/posts/retrieve",(req,res)=>{
    const consulta="SELECT * FROM posts";
    connection.query(consulta,(error,resultado)=>{
        if(error){
            return res.status(500).json({error: "error"})
        }
        res.status(200).json(resultado)
    })
})

const datos={
    "server":"localhost",
    "port":3000
}

app.listen(datos,()=>{
    console.log(`conectado al servidor ${datos.server}:${datos.port}`);
})