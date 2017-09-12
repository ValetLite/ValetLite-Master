const express = require('express');
const session = require('express-session');
const { json } = require('body-parser')
const request = require('request');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const PORT = process.env.PORT || 3000;
const app = express();


const db_vehicle_control = require('./db_vehicle_control');



app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));

app.use(cors());
app.use(json());

// app.use(express.static(__dirname + '/public'));

massive(config.massiveConnectionString).then(dbInstance => {
  app.set("db", dbInstance);
})


app.post( '/api/vehicles', db_vehicle_control.create );

app.get( '/api/vehicles', db_vehicle_control.getAll );
app.get( '/api/vehicle/:id', db_vehicle_control.getOne );

app.put( '/api/vehicles/:id', db_vehicle_control.update );

app.delete( '/api/vehicle/:id', db_vehicle_control.delete );



app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
