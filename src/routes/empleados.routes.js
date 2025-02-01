import { Router } from "express";
import { obtenerEmpleados, obtenerEmpleado, creandoEmpleados, actulizarEmpleados, eliminarEmpleados } from "../controllers/empleados.controller.js";

const router = Router();

router.get("/empleados", obtenerEmpleados);

router.get("/empleados/:id", obtenerEmpleado);

router.post("/empleados", creandoEmpleados);

router.patch("/empleados/:id", actulizarEmpleados);

router.delete("/empleados/:id", eliminarEmpleados);

export default router;
