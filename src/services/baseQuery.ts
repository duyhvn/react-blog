import {fetchBaseQuery} from "@reduxjs/toolkit/query";

export const baseQueryNotAuth = fetchBaseQuery({
  prepareHeaders(headers) {
    const token = localStorage.getItem('accessToken');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});
