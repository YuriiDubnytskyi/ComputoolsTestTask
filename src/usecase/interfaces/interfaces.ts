import ApiServiceImpl from '../../api/api-service-impl';
import { GetImageList } from '../get-image-list.usecase';
import { GetUserDetails } from '../get-details.usecase';

export interface ISessionTemplatesServiceImpl {
  ApiServiceImpl: ApiServiceImpl;
}

export interface IUseCases {
  GetUserDetails: GetUserDetails;
  GetImageList: GetImageList;
}
