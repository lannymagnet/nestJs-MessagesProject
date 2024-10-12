import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';

@Controller('messages')
export class MessagesController {
  
  constructor(public messagesServices: MessagesServices) {}

  @Get()
  listMessages() {
    return this.messagesServices.findAll();
  }

  @Post()
  createMessages(@Body() body: createMessageDto) {
    return this.messagesServices.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesServices.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found for particular id');
    }

    return message;
  }
}
