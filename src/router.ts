import { Router } from 'https://deno.land/x/oak/mod.ts';
import { BookController } from './controller/book.ts';

const router = new Router();
router.get('/', context => {
  context.response.body = 'Hello world!';
});
router.get('/books', new BookController().index);
router.get('/books/:id', new BookController().show);

export default router;
