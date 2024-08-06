const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const intentName = req.body.queryResult.intent.displayName;

    if (intentName === 'EscalarParaHumano') {
        // Lógica para escalar para atendente humano
        res.json({
            fulfillmentText: 'Estou transferindo você para um atendente humano. Um momento, por favor.'
        });
    } else {
        // Resposta padrão
        res.json({
            fulfillmentText: 'Desculpe, não entendi. Pode reformular a pergunta?'
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
