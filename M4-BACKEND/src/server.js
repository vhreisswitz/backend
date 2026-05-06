const app = require("./app");

const basePort = Number(process.env.PORT) || 3331;

function startServer(port) {
  const server = app.listen(port, () => console.log(`Server is on port ${port}`));

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      const nextPort = port + 1;
      console.log(`Port ${port} em uso. Tentando ${nextPort}...`);
      startServer(nextPort);
      return;
    }

    console.error("Erro ao iniciar servidor:", error);
    process.exit(1);
  });
}

startServer(basePort);
