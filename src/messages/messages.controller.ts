import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param() id: string) {
    console.log(id);
  }
}
