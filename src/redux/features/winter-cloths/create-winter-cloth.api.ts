import { baseApi } from "../../api/base.api";

const createWinterCloth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createWinterCloth: builder.mutation({
      query: (data) => ({ url: `/winter-cloth`, method: "POST", body: data }),
      invalidatesTags: ["winter-cloths"],
    }),
  }),
});

export const { useCreateWinterClothMutation } = createWinterCloth;
