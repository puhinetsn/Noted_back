import { Request, Response } from "express";
import {
  createProject,
  deleteProject,
  findAndUpdateProject,
  findProject,
} from "../service/project.service";
import { ProjectFields } from "../models/project.interface";
import { GetIdByParam } from "../models/shared/idSharedParams.interface";

export async function createProjectHandler(
  req: Request<{}, {}, ProjectFields>,
  res: Response
) {
  const body = req.body;
  const project = await createProject(body);
  res.status(201).json(project);
}

export async function getProjectHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const project = await findProject(projectId);

  res.json(project);
}

export async function updateProjectHandler(
  req: Request<GetIdByParam, {}, ProjectFields>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const updatedProject = await findAndUpdateProject(projectId, req.body);

  res.json(updatedProject);
}

export async function deleteProjectHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  await deleteProject(projectId);
  res.status(200).json({ message: "Project deleted successfully" });
}
