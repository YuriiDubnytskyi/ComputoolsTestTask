import { GetUserDetails } from './get-details.usecase';
import { GetImageList } from './get-image-list.usecase';
import { IUseCases } from './interfaces/interfaces';
import ApiService from '../api/api-service';

export default (ApiUseCase: ApiService): IUseCases => {
  return {
    GetImageList: new GetImageList(ApiUseCase),
    GetUserDetails: new GetUserDetails(ApiUseCase),
  };
};
