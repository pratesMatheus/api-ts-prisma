import express from 'express';
import UserController from './controller/UserController';
import PostController from './controller/PostController';

const app = express();

app.use(express.json());

const PORT = 8000;

app.get('/', (request, response) =>{
  return response.send({ message: 'Olá Mundo'});
});

app.post('/createUser', UserController.createUser);
app.post('/createPost', PostController.createPost);
app.get('/listPost/:id', PostController.listPost);
app.put('/updatePost', PostController.updatePost);
app.delete('/deletePost/:id', PostController.deletePost);


app.listen(PORT, () => console.log(`\nServer is running on ${PORT}`));
