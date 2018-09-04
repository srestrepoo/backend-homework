import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('healthCheck', () => {
    it('should return {message: Service is ok}"', () => {
      const appController = app.get<AppController>(AppController);
      const obj = { message: 'Service is ok!!' };
      expect(appController.healthCheck()).toEqual(obj);
    });
  });
});
