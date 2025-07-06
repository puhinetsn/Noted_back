import { Request, Response } from "express";
import { createProject, findProject } from "../service/project.service";
import { CreateProject, GetProject } from "../models/project.interface";

export async function createProjectHandler(
  req: Request<{}, {}, CreateProject>,
  res: Response
) {
  const body = req.body;
  const project = await createProject(body);
  res.send(project);
}

export async function getProjectHandler(
  req: Request<GetProject>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const project = await findProject(projectId);

  if (!project) {
    res.sendStatus(404);
    return;
  }

  res.send(project);
}
