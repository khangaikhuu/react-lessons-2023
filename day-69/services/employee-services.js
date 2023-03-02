import { pool } from "../config/mysql-config.js";

export async function getEmployees() {
  const [rows] = await pool.query(`select * from employees limit 10`);
  console.log(rows);
  return rows;
}

export async function getMaxNo() {
  const [rows] = await pool.query("select max(emp_no) as max from employees");
  return rows[0];
}

export async function hireEmployee(
  empNo,
  birthDate,
  firstName,
  lastName,
  gender,
  hireDate
) {
  // const query = `INSERT INTO employees VALUES(@max_emp_id + 1, '1990-01-01', 'John', 'McKay', 'M', '2010-01-01')`;
  const query = `INSERT INTO employees VALUES(?, ?, ? , ?, ?, ?)`;
  const [rows] = await pool.query(query, [
    empNo,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate,
  ]);
  return rows;
}

export async function updateEmployee(empNo, lastName, gender) {}

export async function fireEmployee(empNo) {
  const query = `DELETE FROM employees WHERE emp_no = ${empNo}`;
  const [rows] = await pool.query(query);

  return rows;
}
