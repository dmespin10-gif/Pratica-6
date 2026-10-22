# Práctica 06 – EVALUACIÓN DE ATRIBUTOS DE CALIDAD (ISO/IEC 25010) MEDIANTE TESTING
**Universidad Politécnica Salesiana · Maestría de Software**
**Asignatura:** Patrones de Diseño de APIs

API REST de empleados (Express + Zod) con pruebas unitarias (Jest) y pruebas de estrés (Artillery).

## Requisitos
- Node.js v24+
- MongoDB (opcional: también hay un modo en memoria)
- Artillery: `npm install -g artillery`

## Instalación
```bash
cd backend
npm install
```

## Ejecutar el servidor
```bash
npm run dev          # con MongoDB
```
El servidor queda en `http://localhost:3000/api/v1`.

## Fase A – Pruebas unitarias (Jest)
```bash
npm run test
```
Prueba el controlador con un mock del repositorio, sin base de datos.
Archivo: `backend/src/controllers/employee.controller.spec.ts`

## Fase B – Pruebas de estrés (Artillery)
Con el servidor encendido, desde la raíz del proyecto:
```bash
artillery run stress-test.yml
```

## Evidencias
Están en la carpeta `evidencias/`:
- `jest-consola.txt`: salida de Jest
- `artillery-consola.txt` y `artillery-report.json`: resultados de Artillery
