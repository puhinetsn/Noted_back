import { Project } from "../models/project.interface";
import prisma from "../utils/connect";

export async function createProject(input: Project) {
  try {
    const project = await prisma.project.create({
      data: {
        ...input,
        created_at: new Date(),
      },
    });
    return project;
  } catch (e) {
    throw e;
  }
}
export async function findProject(projectId: number) {
  try {
    const project = await prisma.project.findFirst({
      where: { id: projectId },
    });
    return project;
  } catch (e) {
    throw e;
  }
}
export async function findAndUpdateProject(projectId: number, input: Project) {
  try {
    const project = await prisma.project.update({
      where: { id: projectId },
      data: { name: input.name },
    });
    return project;
  } catch (e) {
    throw e;
  }
}
export async function deleteProject(projectId: number) {
  try {
    return await prisma.project.delete({
      where: { id: projectId },
    });
  } catch (e) {
    throw e;
  }
}
