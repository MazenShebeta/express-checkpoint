//node app file
const express = require('express');
const app = express();
const userRouter = require('./Routes/userRouter'); 
const adminRouter = require('./Routes/adminRouter');

app.set('view engine', 'pug');
app.set('views', './views');

//ask
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/admin', adminRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});