import { TestingModule, Test } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { UsersGuard } from './users.guard';

describe('UserGuard', () => {
  let guard: UsersGuard;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, UsersGuard],
    }).compile();

    guard = module.get<UsersGuard>(UsersGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });
});
