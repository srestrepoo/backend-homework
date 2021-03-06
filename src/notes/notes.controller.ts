import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';
import { ApiResponse} from '@nestjs/swagger';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The note has been successfully created.'})
  async create(@Body() createNoteDto: CreateNoteDto) {
    createNoteDto.createdDate = new Date();
    this.notesService.create(createNoteDto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNote) {
    this.notesService.update(id, updateNote);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.notesService.delete(id);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }
  
  @Get(':username')
  async find(@Param('username') username: string):Promise<Note[]> {
    return this.notesService.find(username);
  }

}