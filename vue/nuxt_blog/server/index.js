import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import KoaStatic from 'koa-static'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import cors from '@koa/cors'
import globalConfig from './config'

async function start() {
  const app = new Koa()
  app.use(cors())
  app.use(bodyParser())
  app.use(KoaStatic('.'))

  app.listen(3000)
  console.log('Server listening on 3000 port');
}

start()