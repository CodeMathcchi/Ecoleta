import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    response.json([
        'Matheus',
        'Patrick',
        'Arthur',
        'André'
    ]);
});

app.listen(3333);