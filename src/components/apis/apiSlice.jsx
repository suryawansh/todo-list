import { creatApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = creatApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endPoints: (builder) => {
    

    addTodo: builder.mutation({

    }),
    getTodos: builder.query({
        query: () => `todos/`,
        providesTags: ["Todos"],
        transformResponse: (res) => res.sort((a,b)=> a-b),      
      }),
  },
});
