import { object, string } from "zod";

const payload = {
  body: object({
    name: string({
      required_error: "Name is required",
    }).max(120, "Description should be maximum 120 characters long"),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "project ID is required",
    }),
  }),
};

export const createProjectSchema = object({
  ...payload,
});

export const getProjectSchema = object({
  ...params,
});
