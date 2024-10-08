import ApiService from '../api/api-service';
import { GetImagesListBody, GetImagesListResult } from '../types';

export class GetImageList {
  constructor(private readonly apiService: ApiService) {}

  execute = async (body: GetImagesListBody): Promise<GetImagesListResult> => {
    try {
      return await this.apiService.getImagesList(body);
    } catch (error: unknown) {
      throw error;
    }
  };
}
