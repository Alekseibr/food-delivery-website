
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
let fs = require('fs');
const cors = require('cors');


app.options('*', cors());
app.use(express.static(path.resolve(__dirname, '../frontend/build')));

app.get('/pizza', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.pizza)
  })
});

app.get('/pizza/:id', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.pizza.find(i => i.id == id)
       res.json(object)
  })
});

app.get('/rolls', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.rolls)
  })
});

app.get('/rolls/:id', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.rolls.find(i => i.id == id)
       res.json(object)
  })
});

app.get('/sets', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.sets)
  })
});

app.get('/sets/:id', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.sets.find(i => i.id == id)
       res.json(object)
  })
});

app.get('/beverages', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.beverages)
  })
});

app.get('/beverages/:id', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.beverages.find(i => i.id == id)
       res.json(object)
  })
});

app.get('/desserts', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.desserts)
  })
});

app.get('/desserts/:id', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.desserts.find(i => i.id == id)
       res.json(object)
  })
});

app.get('/wok', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       res.json(obj.wok)
  })
});

app.get('/wok/:id', cors(), (req, res) => {
  fs.readFile(__dirname +'/db.json', 'utf8', function (err, data) {
      if (err) throw err;
      let id = req.params.id;
       obj = JSON.parse(data);
       res.status(200);
       res.set('Content-Type', 'application/json');
       let object = obj.wok.find(i => i.id == id)
       res.json(object)
  })
});

app.get(`/*`, function (req, res) {
    res.status(404);
    res.sendFile(path.join(process.cwd(), 'frontend/build', 'index.html'));
});

if(PORT){
  app.listen(PORT, ()=>{
    console.log(`Сервер запущен на http://localhost:${PORT}`)
  })
}

module.exports = app;
