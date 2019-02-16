const books = new Map<string, any>();
books.set('1', {
  id: '1',
  title: 'The Hound of the Baskervilles',
  author: 'Conan Doyle, Author'
});

export class BookService {
  async index() {
    return Array.from(books.values());
  }

  async show(params) {
    if (books.has(params.id)) {
      return books.get(params.id);
    } else {
      return 'not exists.';
    }
  }
}