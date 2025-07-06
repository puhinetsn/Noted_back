import { CreateProject, GetProject } from "../models/project.interface";
import prisma from "../utils/connect";

export async function createProject(input: CreateProject) {
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
export async function findProject(productId: number) {
  try {
    const project = await prisma.project.findFirst({
      where: { id: productId },
    });
    return project;
  } catch (e) {
    throw e;
  }
}
export async function findAndUpdateProject() {}
export async function deleteProject() {}
