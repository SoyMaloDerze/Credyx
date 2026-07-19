import type {
    NextFunction,
    Request,
    Response,
} from "express";

import type {
    ZodType,
    ZodError,
} from "zod";

export function validate<T>(
    schema: ZodType<T>,
) {
    return async (
        request: Request,
        response: Response,
        next: NextFunction,
    ) => {
        try {
            request.body =
                await schema.parseAsync(
                    request.body,
                );

            next();
        } catch (error) {
            const validationError =
                error as ZodError;

            return response.status(400).json({
                success: false,
                message: "Validation failed.",
                errors:
                    validationError.flatten()
                        .fieldErrors,
            });
        }
    };
}