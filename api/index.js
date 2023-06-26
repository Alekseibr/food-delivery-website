

const express = require('express');

const app = express();
let fs = require('fs');
const cors = require('cors');
let obj;
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());



app.get('/api/pizza', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.pizza)
  })
});

app.get('/api/pizza/:id', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.pizza.find(i => i.id === id)
       res.json(object)
  })
});

app.get('/api/rolls', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.rolls)
  })
});

app.get('/api/rolls/:id', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.rolls.find(i => i.id === id)
       res.json(object)
  })
});

app.get('/api/sets', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.sets)
  })
});

app.get('/api/sets/:id', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.sets.find(i => i.id === id)
       res.json(object)
  })
});

app.get('/api/beverages', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.beverages)
  })
});

app.get('/api/beverages/:id', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.beverages.find(i => i.id === id)
       res.json(object)
  })
});

app.get('/api/desserts', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.desserts)
  })
});

app.get('/api/desserts/:id', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.desserts.find(i => i.id === id)
       res.json(object)
  })
});

app.get('/api/wok', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.wok)
  })
});

app.get('/api/wok/:id', (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.wok.find(i => i.id === id)
       res.json(object)
  })
});



if(process.env.API_PORT){
  app.listen(process.env.API_PORT, ()=>{
    console.log(`Сервер запущен на http://localhost:${process.env.API_PORT}`)
  })
}

module.exports = app;
