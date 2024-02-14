import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json' assert { type: 'json' }
import messagesRoutes from './routes/message.routes.js';
import cors from 'cors';

const app = express();

app.set('pkg', pkg);

app.use(morgan('dev'));

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/messages', messagesRoutes);

export default app;