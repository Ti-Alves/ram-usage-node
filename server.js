// Importação do módulo http
const http = require("http");

// Declaração da Porta e Host
const host = "http://localhost";
const port = 3000;

const stats = require("./pcRamUsage.js");

// Criando um servidor
http
  .createServer((req, res) => {
    let url = req.url;

    if (url === "/stats") {
      // O que terá em resposta quando finalizada a requisição
      res.end(JSON.stringify(stats, null, 2));
    }
    else {
        res.end(`<h1>Seja bem-vinde!</h1>`)
    }
  })
  .listen(port, () =>
    console.log(`Server is running in ${host}:${port}, ${stats}`)
  );
