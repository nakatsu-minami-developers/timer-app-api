import{ type Request, type Response,type NextFunction } from 'express';

import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import userRoutes from "./routes/userRouter"


const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/user",userRoutes)

// catch 404 and forward to error handler
app.use(function (req: any, res: any, next: any) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
})
module.exports = app;

