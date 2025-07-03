import { Request, Response } from "express";
import { createProject } from "../service/project.service";
import { CreateProject } from "../models/project.interface";

export async function createProjectHandler(
  req: Request<{}, {}, CreateProject>,
  res: Response
) {
  const body = req.body;
  const project = await createProject(body);
  res.send(project);
}
