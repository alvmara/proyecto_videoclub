// require("dotenv").config(); // this line is important!
// module.exports = {
//   secret: process.env.AUTH_SECRET || "zA23RtfLoPP", //KEY USADA PARA ENCRIPTAR
//   expires: process.env.AUTH_EXPIRES || "24h", //DURACIÓN DEL TOKEN
//   rounds: process.env.AUTH_ROUNDS || 10, //VECES QUE SE ENCRIPTA LA CONTRASEÑA
// };

module.exports = {
  secret: "zA23RtfLoPP", //KEY USADA PARA ENCRIPTAR
  expires: "24h", //DURACIÓN DEL TOKEN
  rounds: 10, //VECES QUE SE ENCRIPTA LA CONTRASEÑA
};
