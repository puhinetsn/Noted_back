import z, { number, object, string } from "zod";
import { TaskPriority } from "../generated/prisma";

const payload = {
  body: object({
    name: string({
      required_error: "Name is required",
    }).max(60, "Name should be maximum 120 characters long"),
    description: string({}).max(
      120,
      "Description should be maximum 120 characters long"
    ),
    project_id: number({
      required_error: "Project is required",
    }),
    status_id: number({
      required_error: "Status is required",
    }),
    begin_date: string({}).optional(),
    end_date: string({}).optional(),
    priority: z.nativeEnum(TaskPriority, {
      required_error: "Priority is required",
    }),
  }),
};

const payloadUpdate = {
  body: object({
    name: string({
      required_error: "Name is required",
    })
      .max(60, "Name should be maximum 120 characters long")
      .optional(),
    description: string({})
      .max(120, "Description should be maximum 120 characters long")
      .optional(),
    project_id: number({
      required_error: "Project is required",
    }).optional(),
    status_id: number({
      required_error: "Status is required",
    }).optional(),
    begin_date: string({}).optional(),
    end_date: string({}).optional(),
    priority: z
      .nativeEnum(TaskPriority, {
        required_error: "Priority is required",
      })
      .optional(),
  }),
};

const params = {
  params: object({
    id: string({
      required_error: "Project ID is required",
    }),
  }),
};

export const createTaskSchema = object({
  ...payload,
});

export const getTaskSchema = object({
  ...params,
});

export const updateTaskSchema = object({
  ...payloadUpdate,
  ...params,
});
