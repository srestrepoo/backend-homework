import { Connection } from 'mongoose';
import { NoteSchema } from './schemas/note.schema';

export const NotesProviders = [
  {
    provide: 'NoteModelToken',
    useFactory: (connection: Connection) => connection.model('Note', NoteSchema),
    inject: ['DbConnectionToken'],
  },
];