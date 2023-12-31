const Koa = require('koa');
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');
const app = new Koa();
const Router = require('koa-router');

app.use(cors());

app.use(koaBody());

const router = new Router();

router.get('/messages/unread', ctx => {
  const messages = [
    {
      id: '1',
      from: 'anya@ivanova',
      subject: 'Hello from Anya',
      body: 'Long message body here',
      received: 1630387200 
    },
    {
      id: '2',
      from: 'alex@petrov',
      subject: 'Hello from Alex Petrov!',
      body: 'Long message body here',
      received: 1630387200 
    },
    {
      id: '3',
      from: 'alex',
      subject: 'Hello from Alex!',
      body: 'Long message!',
      received: 1630387201
    }
  ];

  ctx.body = {
    status: 'ok',
    timestamp: Math.floor(Date.now() / 1000),
    messages
  };
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 3031;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
