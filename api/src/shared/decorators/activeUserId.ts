import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const ActiveUserId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<{ userId: string }>();
    const userId = request.userId;

    if (!userId) {
      throw new Error('User not authenticated');
    }

    return userId;
  },
);
