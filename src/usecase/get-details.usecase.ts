import ApiService from '../api/api-service';
import { GetUserDetailsBody, GetUserDetailsResult } from '../types';

export class GetUserDetails {
  constructor(private readonly apiService: ApiService) {}

  execute = async (body: GetUserDetailsBody): Promise<GetUserDetailsResult> => {
    try {
      return await this.apiService.getUserDetails(body);
    } catch (error: unknown) {
      throw error;
    }
  };
}
