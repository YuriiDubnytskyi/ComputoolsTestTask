import ApiService from './api-service';
import UseCases from './usecases';

const cApiDataSources = ApiService();
const cUseCase = UseCases(cApiDataSources.ApiServiceImpl);

export const ApiUseCases = {
  GetUserDetails: cUseCase.GetUserDetails,
  GetImageList: cUseCase.GetImageList,
};
