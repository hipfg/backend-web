import app from './app';

app.listen(process.env.PORT || 3333,
  () => {
    console.clear();
    console.log('Running');
  });