import express from "express";

const app = express();

app.use(express.json());

//localhost:3333/users - isso é uma rota
//localhost:3333/contacts - isso é ota rota
//localhost:3333/contacts - contacts é um recurso

// metodos get post: criar nova info, put: atualizar info e delete

//Route Params: Identificar qual recurso quer atualizar ou deletar ex /users:id request.params
//Query Params: Paginação por exemplo ?page=2 request.query

app.post("/users", (request, response) => {
    console.log(request.body);
    const users = [
        { name: "bia", age: 20 },
        { name: "Joao", age: 20 },
    ];

    return response.json(users);
});

app.listen(3333);
