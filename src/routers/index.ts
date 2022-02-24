import { Router } from 'express';
import PersonRouter from './PersonRouter';

const routers = Router();

routers.use('/person', PersonRouter);

export default routers;