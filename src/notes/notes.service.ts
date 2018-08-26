import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Note } from './interfaces/note.interface';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  constructor(@Inject('NoteModelToken') private readonly noteModel: Model<Note>) {}

  async create(createNoteDto: CreateNoteDto): Promise<Note> {
    console.log(createNoteDto);
    const createdNote = new this.noteModel(createNoteDto);
    return await createdNote.save();
  }

  async update(id, updateNote): Promise<Note> {
    updateNote.updatedDate = new Date();  
    console.log(updateNote);
    return await this.noteModel.updateOne({_id:id}, updateNote, function(err) {}).exec();
  }

  async delete(id): Promise<Note> {
    return await  this.noteModel.deleteOne({_id:id}, function(err) {}).exec();
  }

  async findAll(): Promise<Note[]> {
    return await this.noteModel.find().exec();
  }
  
  async find(uname): Promise<Note[]> {
    return await this.noteModel.find({username:uname}, function(err,obj) {}).exec();
  }
}