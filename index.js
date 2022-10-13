var http=require('http');
var url=require('url');
express = require('express');
var app = express();
//pug view engine
app.set('view engine', 'pug');
app.set('views', './views');
// Compile the source code

//get time now
var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var time = hour + ":" + minute + ":" + second;
//if time working hours
// if (hour >= 9 && hour <= 17) {
  app.get('/', (req, res) => {
      res.status(200).render('Home');
    });
  app.get('/Contact', (req, res) => {
      res.status(200).render('ContactUs');
    });
  app.get('/OurServices', (req, res) => {
      res.status(200).render('OurServices');
    });
  // }
// app.listen(3000);




console.log(`Server running at http://127.0.0.1:3000/`);
  
//   app.use('/api/v1/users', userRouter);
//   app.use('/api/v1/reviews', reviewRouter);

