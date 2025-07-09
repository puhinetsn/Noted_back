import { Request, Response } from "express";
import { GetIdByParam } from "../models/shared/idSharedParams.interface";
import { StatusFields } from "../models/statuses.interface";
import {
  createStatus,
  deleteStatus,
  findAndUpdateStatus,
  findStatus,
  findStatuses,
} from "../service/statuses.service";

export async function createStatusHandler(
  req: Request<{}, {}, StatusFields>,
  res: Response
) {
  const body = req.body;
  const status = await createStatus(body);
  res.status(201).json(status);
}

export async function getStatusesHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const projectId = parseInt(req.params.id, 10);
  const statuses = await findStatuses(projectId);

  res.json(statuses);
}

export async function getStatusHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const statusId = parseInt(req.params.id, 10);
  const status = await findStatus(statusId);

  res.json(status);
}

export async function updateStatusHandler(
  req: Request<GetIdByParam, {}, StatusFields>,
  res: Response
) {
  const statusId = parseInt(req.params.id, 10);
  const status = await findStatus(statusId);

  const updatedStatus = await findAndUpdateStatus(statusId, req.body);

  res.json(updatedStatus);
}

export async function deleteStatusHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const statusId = parseInt(req.params.id, 10);
  const status = await findStatus(statusId);

  await deleteStatus(statusId);
  res.status(200).json({ message: "Status deleted successfully" });
}
