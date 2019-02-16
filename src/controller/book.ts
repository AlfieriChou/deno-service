import { BookService } from '../service/book.ts';
export class BookController {
  async index(ctx) {
    ctx.response.body = await new BookService().index();
  }
  async show(ctx) {
    const params = ctx.params;
    ctx.response.body = await new BookService().show(params);
  }
}
