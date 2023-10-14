
import {worksRepository} from './../repositories/works.repository.js';

class WorksService {
  async getWorks() {
    return await worksRepository.getWorks();
  }

  async createWorks(data) {
    return await worksRepository.createWorks(data);
  }


}

export const worksService = new WorksService();