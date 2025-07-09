import { object, string } from "zod";

const payload = {
  body: object({
    name: string({
      required_error: "Name is required",
    }).max(120, "Name should be maximum 120 characters long"),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "Project ID is required",
    }),
  }),
};

export const createProjectSchema = object({
  ...payload,
});

export const getProjectSchema = object({
  ...params,
});

export const updateProjectSchema = object({
  ...payload,
  ...params,
});
