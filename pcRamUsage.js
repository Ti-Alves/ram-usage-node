// Importação do módulo OS
const os = require("os");

setInterval(() => {
  // Aquisição do que será usado como objeto
  const { arch, platform, totalmem, freemem } = os;

  // Declaração da Ram total e livre de bytes para megabytes
  const tRam = totalmem() / 1024 / 1024;
  const fRam = freemem() / 1024 / 1024;

  const usage = (fRam / tRam) * 100

  // Declarando o status, usando os objetos
  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(tRam)} MB`,
    FreeRAM: `${parseInt(fRam)} MB`,
    Usage: `${usage.toFixed(2)}%`,
  };

  console.clear();

  console.table(stats);

  exports.status = stats;
}, 1000);
