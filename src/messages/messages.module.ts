import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesServices } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers:[MessagesServices,MessagesRepository]
})
export class MessagesModule {}
