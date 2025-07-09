import { StatusFields } from "../models/statuses.interface";
import prisma from "../utils/connect";

export async function createStatus(input: StatusFields) {
  const status = await prisma.statuses.create({
    data: {
      ...input,
    },
  });
  return status;
}

export async function findStatuses(projectId: number) {
  const statuses = await prisma.statuses.findMany({
    where: { project_id: projectId },
  });
  return statuses;
}

export async function findStatus(statusId: number) {
  const status = await prisma.statuses.findFirst({
    where: { id: statusId },
  });
  return status;
}

export async function findAndUpdateStatus(
  statusId: number,
  input: StatusFields
) {
  const status = await prisma.statuses.update({
    where: { id: statusId },
    data: input,
  });
  return status;
}

export async function deleteStatus(statusId: number) {
  return await prisma.statuses.delete({
    where: { id: statusId },
  });
}
