import { GetImagesListResult, GetUserDetailsBody, GetUserDetailsResult, GetImagesListBody } from '../types/index';

export default interface ApiService {
  getImagesList(body: GetImagesListBody): Promise<GetImagesListResult>;
  getUserDetails(body: GetUserDetailsBody): Promise<GetUserDetailsResult>;
}
