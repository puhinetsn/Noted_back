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

  if (!statuses) {
    res.status(404).json({ message: "Statuses not found" });
    return;
  }

  res.json(statuses);
}

export async function getStatusHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const statusId = parseInt(req.params.id, 10);
  const status = await findStatus(statusId);

  if (!status) {
    res.status(404).json({ message: "Status not found" });
    return;
  }

  res.json(status);
}

export async function updateStatusHandler(
  req: Request<GetIdByParam, {}, StatusFields>,
  res: Response
) {
  const statusId = parseInt(req.params.id, 10);
  const status = await findStatus(statusId);

  if (!status) {
    res.status(400).json({ message: "Invalid status ID" });
    return;
  }

  const updatedStatus = await findAndUpdateStatus(statusId, req.body);

  res.json(updatedStatus);
}

export async function deleteStatusHandler(
  req: Request<GetIdByParam>,
  res: Response
) {
  const statusId = parseInt(req.params.id, 10);
  const status = await findStatus(statusId);

  if (!status) {
    res.status(400).json({ message: "Invalid status ID" });
    return;
  }

  await deleteStatus(statusId);
  res.status(200).json({ message: "Status deleted successfully" });
}
