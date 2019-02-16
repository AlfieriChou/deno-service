const books = new Map<string, any>()
books.set('1', {
  id: '1',
  title: 'The Hound of the Baskervilles',
  author: 'Conan Doyle, Author'
});

export class BookController {
  async index(ctx) {
    ctx.response.body = Array.from(books.values())
  }
  async show(ctx) {
    if (ctx.params && books.has(ctx.params.id)) {
      ctx.response.body = books.get(ctx.params.id)
    }
  }
}
