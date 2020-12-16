const QRCode = require('qrcode')
const fs = require('fs');

var data = {
  tipo: "Computador",
  local: "Lab1",
  nome_rede: "micro-312",
  csg: "B 13.015",
  marca: "Dell",
  Modelo: "Vostro270s"
}
 
QRCode.toFile('foo.png',JSON.stringify(data), function (err, url) {
  console.log(url)
})