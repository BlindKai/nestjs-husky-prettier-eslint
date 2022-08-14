import { BadRequestException, CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from '../users.service';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();

    if (!request.params.id) throw new BadRequestException('No id parameter provided');

    return this.userService.check(Number(request.params.id));
  }
}
