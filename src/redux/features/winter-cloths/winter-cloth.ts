import { baseApi } from "../../api/base.api";

const getAllWinterCloths = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWinterCloths: builder.query({
      query: (limit) => {
        const params = new URLSearchParams();
        if (limit) {
          params.append("limit", limit);
        }
        return { url: "/winter-cloth", method: "GET", params: params };
      },
      providesTags: ["winter-cloths"],
    }),
  }),
});

export const { useGetAllWinterClothsQuery } = getAllWinterCloths;
