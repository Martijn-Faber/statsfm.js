import { RequestInitWithQuery } from '../../interfaces/Request';
import Manager from '../Manager';

export default class StatsManager extends Manager {
  async getDatabaseSize(options?: RequestInitWithQuery): Promise<any> {
    const res = await this.http.get(`/stats/database/size`, options);

    return res.data.items;
  }
}