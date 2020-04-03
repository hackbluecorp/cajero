var imagenes = [];
imagenes["Cien"] = "dollar100.png";
imagenes["Cincuenta"] = "dollar50.png";
imagenes["Veinte"] = "dollar20.png";
imagenes["Diez"] = "dollar10.png";
imagenes["Cinco"] = "dollar5.png";

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
  if(enCajaInicial == 0)
  {
    console.log(enCajaInicial);
    dineroEnCajaCero();
  }
  else
  {
    console.log("no entra");
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
              console.log();
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
}

function dineroEnCajaInicial()
{
  for(var dineroCajaI of caja)
  {
    enCajaInicial += (dineroCajaI.valor * dineroCajaI.cantidad);
    enCaja.innerHTML = "<strong>$" + enCajaInicial + "=</strong> Dolares disponibles en el cajero!";
  }
}
function dineroEnCajaFinal()
{
  for(var dineroF of entregado)
    {
      if(dineroF.cantidad != 0)
      {
        var enCajaFinal = 0;
        dineroF.cantidad = dineroF.valor * dineroF.cantidad;
        enCajaFinal = dineroF.cantidad;
        dineroF.cantidad = 0;
        enCajaInicial = enCajaInicial - enCajaFinal;
        enCaja.innerHTML = "<strong>$" + enCajaInicial + "=</strong> Dolares disponibles en el cajero!";
      }
  }
}

function dineroEnCajaCero()
{
  if(enCajaInicial == 0)
  {
    enCaja.innerHTML = "<h3 style='background-color:red; font-weight: bold; color: white;'>El cajero esta fuera de servicio, por falta de dinero!</h3>";
    document.getElementById("extraer").disabled = true;
  }
  else
  {
      dineroEnCajaFinal();
  }

}

var caja = [];
var entregado = [];
caja.push( new Billete("Cien", 200, 1) );
caja.push( new Billete("Cincuenta", 50, 1) );
caja.push( new Billete("Veinte", 20, 1) );
caja.push( new Billete("Diez", 10, 1) );
caja.push( new Billete("Cinco", 5, 1) );
var dinero = 0;
var div = 0;
var papeles = 0;
var enCajaInicial = 0;

var enCaja = document.getElementById("enCaja");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
b.addEventListener("click", dineroEnCajaCero);

dineroEnCajaInicial();
