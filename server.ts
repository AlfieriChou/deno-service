import { Application, Context } from 'https://deno.land/x/oak/mod.ts'

interface InitService {
  initMiddle(): void
  start(): Promise<void>
}

class Server implements InitService {
  private app = new Application()

  public initMiddle(): void {
    this.app.use(async (ctx: Context, next) => {
      await next()
      const rt = ctx.response.headers.get('X-Response-Time')
      console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
    })

    this.app.use(async (ctx: Context, next) => {
      const start = Date.now()
      await next()
      const ms = Date.now() - start
      ctx.response.headers.set('X-Response-Time', `${ms}ms`)
    })

    this.app.use((ctx: Context) => {
      ctx.response.body = 'Hello World!'
    })
  }

  public async start(): Promise<void> {
    await this.app.listen('127.0.0.1:8000')
    console.log('Server ready at http://127.0.0.1:8000')
  }
}

const server = new Server()
server.initMiddle()
server.start()
