import express from 'express';
import dotenv from 'dotenv';
import studentRoutes from './routes/student.routes.js';
import courseRoutes from './routes/course.routes.js';
import teacherRoutes from './routes/teacher.routes.js';
import authRoutes from './routes/auth.routes.js';
import { serveSwagger, setupSwagger } from './config/swagger.js';
import { syncDb } from './models/index.js';
import cors from 'cors';

dotenv.config();
console.log("JWT Secret:", process.env.JWT_SECRET);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/auth', authRoutes);
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/teachers', teacherRoutes);

// Swagger route
app.use('/docs', serveSwagger, setupSwagger);

app.get('/', (req, res) => res.send('Welcome to School API!'));

// Sync DB then start
syncDb().then(() => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
