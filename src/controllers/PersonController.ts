import { Request, Response } from 'express';
import PersonSchema from "../schemas/PersonSchema";

class PersonController {

    async create(req: Request, res: Response) {
        try {
            const person = await PersonSchema.create(req.body);
            return res.send({ person: person });
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async find(req: Request, res: Response) {
        try {
            const person = await PersonSchema.find(req.body);
            return res.send({ person: person });
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async findById(req: Request, res: Response) {
        try {
            const person = await PersonSchema.findById(req.params.id);
            return res.send({ person: person });
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await PersonSchema.findByIdAndDelete(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

    async update(req: Request, res: Response) {
        try {
            await PersonSchema.findById(req.params.id);
            return res.send();
        } catch (err) {
            return res.status(400).send({ error: err });
        }
    }

};

export default PersonController;