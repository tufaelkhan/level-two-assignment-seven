import { baseApi } from "../../api/base.api";

const getWinterClothDetail = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWinterClothDetails: builder.query({
      query: (id) => {
        return { url: `/winter-cloth/${id}`, method: "GET" };
      },
      providesTags: ["winter-cloths"],
    }),
  }),
});

export const { useGetWinterClothDetailsQuery } = getWinterClothDetail;
