import { Router } from "express";
import projectsRouter from "./project.routes";
import statusesRouter from "./statuses.routes";
import taskRouter from "./task.routes";

const router: Router = Router();
router.use("/projects", projectsRouter);
router.use("/statuses", statusesRouter);
router.use("/tasks", taskRouter);

export default router;
