import { createSlice } from '@reduxjs/toolkit';
import { GetImagesListResult, GetUserDetailsResult, GetImagesListBody, GetUserDetailsBody } from '../types';

export interface StoreState {
  isAuth: boolean;
  list: {
    data: GetImagesListResult;
    page: number;
    limit: number;
  };
  details: GetUserDetailsResult | null;
  loading: boolean;
  loadingMore: boolean;
  isError: boolean;
  theme: 'light' | 'dark';
}

const initState: StoreState = {
  isAuth: false,
  list: {
    data: [],
    page: 1,
    limit: 10,
  },
  details: null,
  loading: false,
  loadingMore: false,
  isError: false,
  theme: 'dark',
};

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState: initState,
  reducers: {
    login: state => {
      state.isAuth = true;
    },
    getImageList: (state, action: { payload: GetImagesListBody }) => {
      state.loading = true;
      state.list.page = action.payload.page;
      state.list.limit = action.payload.limit;
    },
    getImageListSuccess: (state, action: { payload: GetImagesListResult }) => {
      state.loading = false;
      state.list.data = [...state.list.data, ...action.payload];
      state.loadingMore = false;
    },
    getImageListFail: state => {
      state.loading = false;
      state.loadingMore = false;
      state.isError = true;
    },
    getImageMore: (state, action: { payload: GetImagesListBody }) => {
      state.loadingMore = true;
      state.list.page = action.payload.page;
      state.list.limit = action.payload.limit;
    },
    clearError: state => {
      state.isError = false;
    },
    getUserDetails: (state, _action: { payload: GetUserDetailsBody }) => {
      state.loading = true;
    },
    getUserDetailsSuccess: (state, action: { payload: GetUserDetailsResult }) => {
      state.loading = false;
      state.details = action.payload;
    },
    getUserDetailsFail: state => {
      state.loading = false;
      state.isError = true;
    },
    changeTheme: state => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    clearStore: () => {
      return initState;
    },
  },
});

export const {
  login,
  getImageList,
  getImageListSuccess,
  getImageListFail,
  clearError,
  getUserDetails,
  getUserDetailsSuccess,
  getUserDetailsFail,
  clearStore,
  getImageMore,
  changeTheme,
} = storeSlice.actions;

export default storeSlice.reducer;
