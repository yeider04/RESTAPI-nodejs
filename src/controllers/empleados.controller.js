import { pool } from "../db.js";

export const obtenerEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Error inesperado",
    });
  }
};

export const obtenerEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({
        mensaje: "Empleado no encontrado",
      });

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error inesperado",
    });
  }
};

export const creandoEmpleados = async (req, res) => {
  const { nombre, salario } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO empleados (nombre, salario) VALUES (?, ?)",
      [nombre, salario]
    );
    res.send({
      id: rows.insertId,
      nombre,
      salario,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error inesperado",
    });
  }
};

export const actulizarEmpleados = async (req, res) => {
  const { id } = req.params;
  const { nombre, salario } = req.body;

  try {
    const [result] = await pool.query(
      "UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?",
      [nombre, salario, id]
    );

    console.log(result);
    if (result.affectedRows === 0)
      return res.status(404).json({
        mensaje: "Empleado no encontrado",
      });

    const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error inesperado",
    });
  }
};

export const eliminarEmpleados = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleados WHERE id= ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0) {
      return res.status(404).json({
        mensaje: "Empleado no encontrado",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error inesperado",
    });
  }
};
