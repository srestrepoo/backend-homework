import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    createNoteDto.createdDate = new Date();
    this.notesService.create(createNoteDto);
  }

  @Patch(':id')
  async update(@Param('id') id, @Body() updateNote) {
    this.notesService.update(id, updateNote);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    this.notesService.delete(id);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }
  
  @Get(':username')
  async findOne(@Param('username') username):Promise<Note[]> {
    return this.notesService.find(username);
  }

}