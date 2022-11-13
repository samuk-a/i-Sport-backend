import App from '@core/App';
import "@helper/Log";
import loggerMiddleware from '@middleware/Logger';

const app = new App({
  port: 8080,
  controllers: [],
  middlewares: [
    loggerMiddleware
  ]
});

app.listen();
