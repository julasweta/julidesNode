
import {worksService} from './../sevices/works.services.js';
import { ApiError } from './../errors/api.error.js';

class WorksController {
  async getWorks(
    req,
    res,
    next,
  ) {
    try {
      const works = await worksService.getWorks();
      return res.json(works);
    } catch (error) {
      throw new ApiError("getWorks error", );
    }
  }

  async createWorks(
    req,
    res,
    next,
  ) {
    try {
      const data = req.body;
      const works = await worksService.createWorks(data);
      return res.json(works);
    } catch (error) {
      next(error);
    }
  }


}

export const worksController = new WorksController();