var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var adminRoute = require('./routes/admin');
var blogRoute = require('./routes/newsBlog');
var propertyRoute = require('./routes/property');
var propertyTypeRoute = require('./routes/propertyType');
var skipper = require('skipper');
var app = express();
mongoose.connect('mongodb://localhost/rojkind',{ useNewUrlParser: true })
.then(()=>{
  console.log("connected");
})
.catch((err)=>{
  console.log(err);
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(skipper());
app.use('/admin', adminRoute);
app.use('/blog', blogRoute);
app.use('/property', propertyRoute);
app.use('/property-type', propertyTypeRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
