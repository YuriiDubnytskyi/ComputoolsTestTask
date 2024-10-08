import { AppStartListening } from '../store/listenerMiddleware';
import { ApiUseCases } from '../usecase';
import { getUserDetails, getUserDetailsFail, getUserDetailsSuccess } from './store-slice';

export const getUserDetailsMiddleware = (startListening: AppStartListening) => {
  startListening({
    actionCreator: getUserDetails,
    effect: async ({ payload }, listenerApi) => {
      await ApiUseCases.GetUserDetails.execute(payload)
        .then(data => {
          listenerApi.dispatch(getUserDetailsSuccess(data));
        })
        .catch(() => {
          listenerApi.dispatch(getUserDetailsFail());
        });
    },
  });
};
