const express = require ("express");
const app = express();
const PORT = 3000;

let tickets = [{id : 1, status: 'close', content: 'this need to be done 1'},
{id : 2, status: 'open', content: 'this need to be done 2'},
{id : 3, status: 'inprogress', content: 'this need to be done 3'},
{id : 4, status: 'close', content: 'this need to be done 4'}];

app.get('/tickets', (req, res) => {
    res.json(tickets);
  });
  

app.get('/ticket', (req,res)=>{
    const id = parseInt(req.query.id);
    const reqTicket = tickets.find(t => t.id === id);
    if(reqTicket)
        {
            res.json(reqTicket);
        }
        else
        {
            res.status(404).send('Ticket not found');
        }
});

app.get('/status', (req, res) => {
    try {
        const status = req.query.status.toLowerCase();
        if (status !== 'open' && status !== 'close' && status !== 'inprogress') {
            throw new Error('Invalid status value');
        }
        const reqTickets = tickets.filter(t => t.status.toLowerCase() === status);
        res.json(reqTickets);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hold on we will be back');
    }
});



app.listen(PORT, ()=>{
    console.log('App is running on port ' +PORT)
});