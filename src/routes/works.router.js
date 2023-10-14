import {Router} from "express";
import { worksController } from './../controllers/works.controller.js';


const WorksRouter = Router();

WorksRouter.get("/", worksController.getWorks);

WorksRouter.post("/", worksController.createWorks);



export {WorksRouter};