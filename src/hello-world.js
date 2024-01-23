const http = require('http');

const fs =  require('fs')
console.log('HELLO WORLD')
const PORT = 3000
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
  });

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}/`);
})

fs.writeFile("welcome.txt", "Hello Node", (err)=>{
    if(err) console.log(err)
})

// they said hello.txt but there's no file called that, so i'll just use welcome.txt and i'll convert the buff data to string
fs.readFile("welcome.txt", (err, data)=>{
    if(err) console.log(err)
    console.log(data.toString())
    
   
})