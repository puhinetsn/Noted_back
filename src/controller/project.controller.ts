import { Request, Response } from "express";
import {
  createProject,
  deleteProject,
  findAndUpdateProject,
  findProject,
} from "../service/project.service";
import { Project, GetProject } from "../models/project.interface";

export async function createProjectHandler(
  req: Request<{}, {}, Project>,
  res: Response
) {
  const body = req.body;
  const project = await createProject(body);
  res.status(201).json(project);
}

export async function getProjectHandler(
  req: Request<GetProject>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const project = await findProject(projectId);

  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  res.json(project);
}

export async function updateProjectHandler(
  req: Request<GetProject, {}, Project>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const project = await findProject(projectId);

  if (!project) {
    res.status(400).json({ message: "Invalid project ID" });
    return;
  }

  const updatedProject = await findAndUpdateProject(projectId, req.body);

  res.json(updatedProject);
}

export async function deleteProjectHandler(
  req: Request<GetProject>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const project = await findProject(projectId);

  if (!project) {
    res.status(400).json({ message: "Invalid project ID" });
    return;
  }

  await deleteProject(projectId);
  res.status(200).json({ message: "Project deleted successfully" });
}
