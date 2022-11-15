import HomeController from '@controller/Home';
import App from '@core/App';
import "@helper/Log";
import loggerMiddleware from '@middleware/Logger';
import errorMiddleware from '@middleware/Error';

const app = new App({
  port: 8080,
  controllers: [
    new HomeController()
  ],
  preMiddlewares: [
    loggerMiddleware,
  ],
  posMiddlewares: [
    errorMiddleware
  ]
});
