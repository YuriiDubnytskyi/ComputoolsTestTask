import { GetImagesListResult, GetUserDetailsBody, GetUserDetailsResult, GetImagesListBody } from '../types';
import { userApi, imageApi } from './api';

import ApiService from './api-service';

export default class ApiServiceImpl implements ApiService {
  async getImagesList(body: GetImagesListBody): Promise<GetImagesListResult> {
    const res = await imageApi.get(`/list?page=${body.page}&limit=${body.limit}`);

    return await res.data;
  }

  async getUserDetails(body: GetUserDetailsBody): Promise<GetUserDetailsResult> {
    const res = await userApi.get('/users/' + body.id);

    return await res.data.data;
  }
}
