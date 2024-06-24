import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import SwaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { userRouter } from './src/routes/user.route.js';
import { response } from './config/response.js';

dotenv.config(); // Load environment variables from .env file

const app = express();
const swaggerDocument = YAML.load('./swagger/swagger.yaml');
console.log('Swagger Document:', swaggerDocument); // 디버깅 로그 추가

// Middleware
app.use(express.urlencoded({ extended: false })); // Parses urlencoded bodies (simple objects)
app.use(express.json()); // Parses JSON bodies
app.use(cors()); // Enable CORS
app.use(express.static('public')); // Serve static files from 'public' directory

// Swagger UI setup
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));
app.use('/user', userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; // Show error details in non-production environments
    console.error("Error:", err); // Log the error for debugging
    const status = err.data && err.data.status ? err.data.status : 500; // Default to 500 Internal Server Error
    res.status(status).send(response(err.data)); // Send response based on the error data
});

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
