// src/index.memory.ts
// Composition Root alternativo: misma app, pero con persistencia en memoria (sin MongoDB).
// Uso: npm run dev:memory
import { createApp } from './app.js';
import { InMemoryEmployeeRepository } from './repositories/in-memory-employee.repository.js';

const PORT = Number(process.env['PORT'] ?? 3000);

const app = createApp({ employeeRepository: new InMemoryEmployeeRepository() });
app.listen(PORT, () => {
  console.log(`🧠 Servidor (repositorio EN MEMORIA) escuchando en http://localhost:${PORT}/api/v1`);
});
