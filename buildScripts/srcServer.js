import express from 'express';
import path from 'path';
import open from 'open'; //ref to open a site in the browser
import webpack from 'webpack';
import config from '../webpack.config.dev'


const port = 80;//variable stores the port to be used
const app = express(); //To create an instance of express
/*const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

*/
// Tell express which route it should handle
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


/*To serve static files
app.use(express.static('src'));

*/
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm','css','js', 'html','jpg'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('src', options))


//Tell Express to listen on the port we defined above
app.listen(port, function(err){
  if (err){
    console.log(err)
  } else{
    open('http://localhost:'+ port)
  }
});
