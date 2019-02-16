import { Router } from 'https://deno.land/x/oak/mod.ts'

const books = new Map<string, any>()
books.set('1', {
  id: '1',
  title: 'The Hound of the Baskervilles',
  author: 'Conan Doyle, Author'
});

const router = new Router()
router
  .get('/', context => {
    context.response.body = 'Hello world!'
  })
  .get('/book', context => {
    context.response.body = Array.from(books.values())
  })
  .get('/book/:id', context => {
    if (context.params && books.has(context.params.id)) {
      context.response.body = books.get(context.params.id)
    }
  })

export default router
