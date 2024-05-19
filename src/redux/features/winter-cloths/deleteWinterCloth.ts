import { baseApi } from "../../api/base.api";

const deleteWinterCloth = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deleteWinterCloth: builder.mutation({
      query: (id) => ({ url: `/winter-cloth/${id}`, method: "DELETE" }),
      invalidatesTags: ["winter-cloths"],
    }),
  }),
});

export const { useDeleteWinterClothMutation } = deleteWinterCloth;
