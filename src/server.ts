import serverHttp from './app';

const port = process.env.PORT || 4000;

serverHttp.listen(port, () => {
  console.log(`SERVER RUNNING ON ${port}`);
});
