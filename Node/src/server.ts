import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';
import PainelRoutes from './routes/painel';

const server = express();

server.use(mainRoutes);
server.use('/painel',PainelRoutes)

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não Encontrada!');
});

server.listen(3000);