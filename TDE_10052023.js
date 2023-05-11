const express = require("express")

const server = express();
server.use(express.json());

let toDo = [
    {
    "id": 1,
    "name": "Comprar leite",
    "description": "Ir no mercado da esquina e comprar leite",
    "isDone": false
},
{
    "id": 2,
    "name": "Vernder carne",
    "description": "O mercado pode vender carne",
    "isDone": false
},
{
    "id": 3,
    "name": "Pegar couve",
    "description": "Ir na feira pegar couve",
    "isDone": true
}
]

server.get("/todo",(req,res)=>{
    // const id= Number(req.params.id);
    // const action = toDo.find((action)=>{
    //     return action.id===id;
    // });
    res.json({
        toDo
    })
})

server.post("/todo",(req,res)=>{
    const newToDo = {
        id: toDo.length+1,
        name: req.body.name,
        description: req.body.description,
        isDone: req.body.isDone
    }
    toDo.push(newToDo)
    res.json({
        toDo: newToDo
    })
})

server.put("/todo/:id",(req,res)=>{
    const id = Number(req.params.id);
    const action= toDo.find((action)=>{
        return action.id===id;
    });

    if(!toDo){
        return res.status(404).send("toDo not found");
    }

    action.name = req.body.name;
    action.description = req.body.description;
    action.isDone = req.body.isDone;
    res.json({
        action
    })
})

server.delete("/todo/:id",(req,res)=>{
    const id = Number(req.params.id);
    toDo = toDo.filter((action)=>{
        return action.id!=id;
    })
    res.status(204).send()
})

const port=6060;
server.listen(port,()=>{
    console.log(`server running on port ${port}`)
}) 