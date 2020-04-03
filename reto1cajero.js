var imagenes = [];
imagenes["Cien"] = "dollar100.png";
imagenes["Cincuenta"] = "dollar50.png";
imagenes["Veinte"] = "dollar20.png";
imagenes["Diez"] = "dollar10.png";
imagenes["Cinco"] = "dollar5.png";

var x = 0;

class Billete
{
  constructor(n, v, c)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.valor = v;
    this.cantidad= c;

    this.imagen.src = imagenes[this.nombre];
  }
}


function entregarDinero()
{
  t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {

    if (dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad
      }
      else
        {
          papeles = div;
        }

        entregado.push( new Billete(bi.nombre, bi.valor, papeles) );
        dinero = dinero - (bi.valor * papeles);
      }

    }

    if(dinero > 0)
    {
      resultado.innerHTML = "La cantidad solicitada no es valida!";
    }
    else
    {
      resultado.innerHTML = "Por favor retira Tú dinero y Tú tarjeta!";
        for(var e of entregado)
        {
          if(e.cantidad > 0)
          {
            var textImagen = document.createTextNode(" x " + e.cantidad + " = " + e.valor * e.cantidad);
            document.body.appendChild(e.imagen);
            document.body.appendChild(textImagen);
            document.body.appendChild(document.createElement("br"));
          }
        }
    }
}

var caja = [];
var entregado = [];
caja.push( new Billete("Cien", 100, 10) );
caja.push( new Billete("Cincuenta", 50, 10) );
caja.push( new Billete("Veinte", 20, 5) );
caja.push( new Billete("Diez", 10, 10) );
caja.push( new Billete("Cinco", 5, 10) );
var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
