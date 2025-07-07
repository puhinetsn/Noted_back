import { StatusFields } from "../models/statuses.interface";
import prisma from "../utils/connect";

export async function createStatus(input: StatusFields) {
  try {
    const status = await prisma.statuses.create({
      data: {
        ...input,
      },
    });
    return status;
  } catch (e) {
    throw e;
  }
}

export async function findStatuses(projectId: number) {
  try {
    const statuses = await prisma.statuses.findMany({
      where: { project_id: projectId },
    });
    return statuses;
  } catch (e) {
    throw e;
  }
}

export async function findStatus(statusId: number) {
  try {
    const status = await prisma.statuses.findMany({
      where: { id: statusId },
    });
    return status;
  } catch (e) {
    throw e;
  }
}

export async function findAndUpdateStatus(
  statusId: number,
  input: StatusFields
) {
  try {
    const status = await prisma.statuses.update({
      where: { id: statusId },
      data: {
        status_name: input.status_name,
        project_id: input.project_id,
      },
    });
    return status;
  } catch (e) {
    throw e;
  }
}

export async function deleteStatus(statusId: number) {
  try {
    return await prisma.statuses.delete({
      where: { id: statusId },
    });
  } catch (e) {
    throw e;
  }
}
