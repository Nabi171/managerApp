import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
    }),
    tagTypes: ["Projects", "Project"],
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => "/projects",
            keepUnusedDataFor: 600,
            providesTags: ["projects"],
        }),
        getTeam: builder.query({
            query: () => "/team",
            keepUnusedDataFor: 600,
            providesTags: ["team"],
        }),
        getTasks: builder.query({
            query: () => "/tasks",
            keepUnusedDataFor: 600,
            providesTags: ["tags"],
        }),
        addTasks: builder.mutation({
            query: (data) => ({
                url: "/tasks",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["tasks"],
        }),



    }),
});

export const {
    useGetProjectsQuery,
    useGetTeamQuery,
    useGetTasksQuery,
    useAddTasksMutation,


} = apiSlice;