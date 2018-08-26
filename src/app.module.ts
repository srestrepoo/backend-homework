import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule} from './users/users.module';
import { NotesModule } from './notes/notes.module';
@Module({
  imports: [UsersModule, NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
