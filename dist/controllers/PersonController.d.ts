import { Request, Response } from 'express';
declare class PersonController {
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    find(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export default PersonController;
