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
        getTask: builder.query({
            query: (taskId) => `/tasks/${taskId}`,
            providesTags: (result, error, arg) => [{ type: "Task", id: arg }],
        }),
        addTasks: builder.mutation({
            query: (data) => ({
                url: "/tasks",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["tasks"],
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["tasks"],
        }),
        editTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/tasks/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [
                "tasks",
                { type: "Task", id: arg.id },

            ],
        }),


    }),
});

export const {
    useGetProjectsQuery,
    useGetTeamQuery,
    useGetTasksQuery,
    useGetTaskQuery,
    useAddTasksMutation,
    useEditTaskMutation,
    useDeleteTaskMutation,


} = apiSlice;