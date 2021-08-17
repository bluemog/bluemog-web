import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book as BookModel } from '@prisma/client';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<BookModel[]> {
    return this.bookService.books({});
  }

  @Post()
  async createBook(@Body() bookData): Promise<BookModel> {
    return this.bookService.createBook(bookData);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: number): Promise<BookModel> {
    return this.bookService.deleteBook({ id: Number(id) });
  }

  @Patch(':id')
  async updateBook(
    @Param('id') id: number,
    @Body() updateData,
  ): Promise<BookModel> {
    return this.bookService.updateBook({
      where: { id: Number(id) },
      data: updateData,
    });
  }
}
