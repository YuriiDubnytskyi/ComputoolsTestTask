import type { TypedStartListening } from '@reduxjs/toolkit';
import { createListenerMiddleware } from '@reduxjs/toolkit';

import { AppDispatch, RootState } from '.';
import { getUserDetailsMiddleware } from '../screens/get-user-details.middleware';
import { getImageListMiddleware } from '../screens/get-image-list.middleware';

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

const listenerMiddleware = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening as AppStartListening;

getUserDetailsMiddleware(startAppListening);
getImageListMiddleware(startAppListening);

export { listenerMiddleware };
