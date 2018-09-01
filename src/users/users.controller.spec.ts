import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';


describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(() => {
    usersService = new UsersService(Model);
    usersController = new UsersController(usersService);
  });

  describe('findAll', () => {
    it('return a array of users', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => result);
      expect(await usersController.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('return an user created', async () => {
      var result;
      jest.spyOn(usersService, 'create').mockImplementation(() => result);
      const testUser = new CreateUserDto();
      expect(await usersController.create(testUser)).toBe(result);
    });
  });

  describe('update', () => {
    it('return an user updated', async () => {
      var result;
      jest.spyOn(usersService, 'update').mockImplementation(() => result);
      expect(await usersController.update("srestrepoo",{"name":"Tiago"})).toBe(result);
    });
  });
  describe('delete', () => {
    it('user deleted', async () => {
      var result;
      jest.spyOn(usersService, 'delete').mockImplementation(() => result);
      expect(await usersController.delete("srestrepoo")).toBe(result);
    });
  });
  describe('findOne', () => {
    it('return an user with nick srestrepoo', async () => {
      var result;
      jest.spyOn(usersService, 'findOne').mockImplementation(() => result);
      expect(await usersController.findOne("srestrepoo")).toBe(result);
    });
  });
});