import {Works} from "../models/Works.models.js";

class WorksRepository {
  async getWorks(){
    const works = await Works.find();
    return works;
  }

  async createWorks(data) {
    const works = await Works.create(data);
    return works;
  }



}

export const worksRepository = new WorksRepository();