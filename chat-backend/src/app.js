import express from 'express';
import morgan from 'morgan';

import { createRoles } from './libs/initialSetup.js';

import pkg from '../package.json' assert { type: 'json' };
import messagesRoutes from './routes/message.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
createRoles();

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

app.use('/api/messages', messagesRoutes);
app.use('/api/auth', authRoutes);

export default app;