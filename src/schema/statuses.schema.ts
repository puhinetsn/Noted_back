import { number, object, string } from "zod";

const payload = {
  body: object({
    status_name: string({
      required_error: "Name is required",
    }).max(30, "Name should be maximum 30 characters long"),
    project_id: number({
      required_error: "Project is required",
    }),
    status_color: string({
      required_error: "Color is required",
    }),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "Status ID is required",
    }),
  }),
};

export const createStatusSchema = object({
  ...payload,
});

export const getStatusSchema = object({
  ...params,
});

export const updateStatusSchema = object({
  ...payload,
  ...params,
});
