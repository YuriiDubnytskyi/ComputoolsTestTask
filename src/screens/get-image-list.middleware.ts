import { AppStartListening } from '../store/listenerMiddleware';
import { ApiUseCases } from '../usecase';
import { getImageList, getImageListFail, getImageListSuccess, getImageMore } from './store-slice';
import { GetImagesListResult, GetImagesListBody } from '../types';
import { isAnyOf } from '@reduxjs/toolkit';

export const getImageListMiddleware = (startListening: AppStartListening) => {
  startListening({
    matcher: isAnyOf(getImageList, getImageMore),
    effect: async ({ payload }: { payload: GetImagesListBody }, listenerApi) => {
      await ApiUseCases.GetImageList.execute(payload)
        .then((data: GetImagesListResult) => {
          listenerApi.dispatch(getImageListSuccess(data));
        })
        .catch(() => {
          listenerApi.dispatch(getImageListFail());
        });
    },
  });
};
