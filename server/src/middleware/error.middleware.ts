import type {
    NextFunction,
    Request,
    Response,
} from "express";

import { AppError } from "../errors/AppError";

export function errorMiddleware(
    error: unknown,
    _request: Request,
    response: Response,
    _next: NextFunction,
) {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }

    console.error(error);

    return response.status(500).json({
        success: false,
        message: "Internal server error.",
    });
}