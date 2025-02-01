# RESTAPI Node.js

## 📌 Descripción

Este proyecto es una API RESTful desarrollada con **Node.js** y **MySQL**. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre empleados en una base de datos MySQL. El servicio está desplegado en **Railway** y puedes interactuar con él a través de **Thunder Client** o **Postman** sin necesidad de clonarlo.

---

## 🚀 Cómo Clonar y Ejecutar el Proyecto Localmente

Si deseas ejecutar el proyecto en tu entorno local, sigue estos pasos:

### 🔹 Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18 o superior)
- **MySQL** (o usa una base de datos en Railway)
- **Git** (para clonar el repositorio)

### 🔹 Clonar el repositorio

Ejecuta el siguiente comando en tu terminal para clonar el repositorio:

```bash
git clone https://github.com/yeider04/RESTAPI-nodejs.git
```

Luego, accede a la carpeta del proyecto:

```bash
cd RESTAPI-nodejs
```

### 🔹 Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

### 🔹 Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las credenciales de la base de datos:

```env
DB_HOST=tu_host
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_DATABASE=tu_base_de_datos
DB_PORT=3306
```

Si estás usando **Railway**, puedes encontrar estos valores en la sección de **Variables de Entorno** dentro de Railway.

### 🔹 Ejecutar el proyecto

Para iniciar el servidor, usa el siguiente comando:

```bash
npm start
```

Si quieres ejecutarlo en modo de desarrollo con recarga automática:

```bash
npm run dev
```

Puedes hacer peticiones a la API usando **Postman**, **Thunder Client** o el navegador.

---

## 🌍 URL Pública de la API

Si no deseas clonar el proyecto, puedes usar la API directamente desde **Railway**:

```
https://restapi-nodejs-production-75e0.up.railway.app
```

### 🔹 Endpoints Disponibles (`/api/empleados`)

| Método  | Endpoint              | Descripción                        |
|---------|-----------------------|------------------------------------|
| **GET** | `/api/empleados`      | Obtener todos los empleados       |
| **GET** | `/api/empleados/:id`  | Obtener un empleado por ID        |
| **POST** | `/api/empleados`      | Crear un nuevo empleado           |
| **PUT** | `/api/empleados/:id`  | Actualizar un empleado por ID     |
| **DELETE** | `/api/empleados/:id` | Eliminar un empleado por ID       |

---

## 📌 Cómo Usar la API con Thunder Client o Postman

Si no quieres clonar el proyecto, puedes probar la API directamente con **Postman** o **Thunder Client**.

### 🔹 Crear un empleado (POST)

**URL:**  
```
https://restapi-nodejs-production-75e0.up.railway.app/api/empleados
```

**Cuerpo (JSON):**
```json
{
  "nombre": "Felipe",
  "salario": 3500
}
```

### 🔹 Obtener todos los empleados (GET)

**URL:**  
```
https://restapi-nodejs-production-75e0.up.railway.app/api/empleados
```

### 🔹 Obtener un empleado por ID (GET)

**URL:**  
```
https://restapi-nodejs-production-75e0.up.railway.app/api/empleados/1
```

### 🔹 Actualizar un empleado (PUT)

**URL:**  
```
https://restapi-nodejs-production-75e0.up.railway.app/api/empleados/1
```

**Cuerpo (JSON):**
```json
{
  "nombre": "Felipe",
  "salario": 4000
}
```

### 🔹 Eliminar un empleado (DELETE)

**URL:**  
```
https://restapi-nodejs-production-75e0.up.railway.app/api/empleados/1
```

