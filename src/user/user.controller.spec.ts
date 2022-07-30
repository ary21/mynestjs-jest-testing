import { Test, TestingModule } from '@nestjs/testing';
// import { User } from '@prisma/client';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = moduleRef.get<UserController>(UserController);
    service = moduleRef.get<UserService>(UserService);
  });

  describe('findAll', () => {
    it('should be return array of users', async () => {
      let result;
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      expect(await controller.findAll({})).toBe(result);
    });
  });
});
