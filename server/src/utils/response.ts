import type { Response } from "express";

interface SuccessResponse<T> {
    success: true;
    message: string;
    data?: T;
}

interface ErrorResponse {
    success: false;
    message: string;
    errors?: unknown;
}

/**
 * Sends a standardized successful API response.
 */
export function sendSuccess<T>(
    response: Response,
    statusCode: number,
    message: string,
    data?: T,
) {
    const payload: SuccessResponse<T> = {
        success: true,
        message,
        ...(data !== undefined && {
            data,
        }),
    };

    return response
        .status(statusCode)
        .json(payload);
}

/**
 * Sends a standardized error API response.
 */
export function sendError(
    response: Response,
    statusCode: number,
    message: string,
    errors?: unknown,
) {
    const payload: ErrorResponse = {
        success: false,
        message,
        ...(errors !== undefined && {
            errors,
        }),
    };

    return response
        .status(statusCode)
        .json(payload);
}