require('dotenv').config();
const express = require('express');
const mongoose =require('mongoose');
const Flight = require ('./models/Flight')
const app = express();

app.use(express.urlencoded({extended: true}));

app.set('view engine' , 'jsx' );
app.engine('jsx', require('express-react-views').createEngine());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    UseUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

//Index


//Flight Index page

app.get('/flights' ,(req, res) => {
    //res.send(Flight)
    res.render('Index'); 
})

//flight/New page

app.get('/flights/new', (req, res)=>{
    res.render('New');
})



//to create


app.post('/flights', (req,res) => {
    //res.send('received');

    
    // Flights.push(req.body);
    // res.redirect('/flights');

    Flight.create(req.body).then((createFlight) =>
    {
        //res.send(createVegetable)
        res.redirect('/flights')
    }).catch(error => console.error(error))
}
)


app.listen(3000 , () => 
{
    console.log("Listening on port 3000!")
}
)