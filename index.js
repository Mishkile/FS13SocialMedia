const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MyBlogDB');


const PostRouter = require('./Routers/PostRouter');
const UserRouter = require('./Routers/UserRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', PostRouter);
app.use('/users', UserRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
}
)