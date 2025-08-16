import { ProjectFields } from "../models/project.interface";
import { InvalidParamsError } from "../models/shared/errors/invalidParamsError.class";
import prisma from "../utils/connect";

export async function createProject(input: ProjectFields) {
  const project = await prisma.project.create({
    data: {
      ...input,
      created_at: new Date(),
    },
  });
  return project;
}
export async function findProject(projectId: number) {
  const project = await prisma.project.findFirst({
    where: { id: projectId },
  });
  if (!project) {
    throw new InvalidParamsError("Can not find project");
  }
  return project;
}
export async function findProjects() {
  const projects = await prisma.project.findMany();
  if (!projects) {
    throw new InvalidParamsError("Can not find projects");
  }
  return projects;
}
export async function findAndUpdateProject(
  projectId: number,
  input: ProjectFields
) {
  const project = await prisma.project.update({
    where: { id: projectId },
    data: { name: input.name },
  });
  if (!project) {
    throw new InvalidParamsError("Can not find project");
  }
  return project;
}
export async function deleteProject(projectId: number) {
  return await prisma.project.delete({
    where: { id: projectId },
  });
}
