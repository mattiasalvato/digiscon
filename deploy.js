import FtpDeploy from "ftp-deploy";
const ftpDeploy = new FtpDeploy();

const config = {
  user: "digiscon.it_vdr4ytiv9ne",
  password: "Fh#Jhy26j5Ii~zpz",
  host: "188.213.175.243",
  port: 21,
  localRoot: "./dist",       // Cambia in './build' se la cartella di output di Astro è 'build'
  remoteRoot: "/httpdocs/",  // La cartella su Plesk
  include: ["*", "**/*"],
  deleteRemote: false,       // Metti true se vuoi svuotare la cartella prima del caricamento
  forcePasv: true,
};

ftpDeploy
  .deploy(config)
  .then(() => console.log("Caricamento completato con successo!"))
  .catch((err) => console.error("Errore di caricamento:", err));