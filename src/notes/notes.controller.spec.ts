import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './interfaces/note.interface';
import { Model } from 'mongoose';


describe('NotesController', () => {
  let notesController: NotesController;
  let notesService: NotesService;

  beforeEach(() => {
    notesService = new NotesService(Model);
    notesController = new NotesController(notesService);
  });

  describe('findAll', () => {
    it('return an array of notes', async () => {
      const result = ['test'];
      jest.spyOn(notesService, 'findAll').mockImplementation(() => result);
      expect(await notesController.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('return a note created', async () => {
      var result;
      jest.spyOn(notesService, 'create').mockImplementation(() => result);
      const testNote = new CreateNoteDto();
      expect(await notesController.create(testNote)).toBe(result);
    });
  });

  describe('update', () => {
    it('return a note updated', async () => {
      var result;
      jest.spyOn(notesService, 'update').mockImplementation(() => result);
      expect(await notesController.update("5b82298943c6c8064868e88d",{"text":"Hello"})).toBe(result);
    });
  });
  describe('delete', () => {
    it('note deleted', async () => {
      var result;
      jest.spyOn(notesService, 'delete').mockImplementation(() => result);
      expect(await notesController.delete("5b82298943c6c8064868e88d")).toBe(result);
    });
  });
  describe('find', () => {
    it('return all notes of the user cmpinzonh', async () => {
      var result;
      jest.spyOn(notesService, 'find').mockImplementation(() => result);
      expect(await notesController.find("cmpinzonh")).toBe(result);
    });
  });
});