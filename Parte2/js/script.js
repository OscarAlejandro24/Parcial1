/*
  Desarrolla la lógica para convertir los valores del textArea en minusculas: 

  Tip: Divide el problema en partes pequeñas. 

  1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
  2) Parte los valores por la coma (,). TIP. Utiliza la función split
  3) convierte los valores a minuscula con alguna de las funciones de javascript. 
  4) Escribe en el textArea los nuevos valores

  Realiza todo lo anterior al hacer click en el botón. 
*/
let mayus = document.getElementById("btn_mayusculas")
mayus.addEventListener("click", lower)

function lower(event){
  event.preventDefault()
  let texto = document.getElementById("txt_may").value.split(",")
  const arr = []
  for(let i=0; i < texto.length; i++){
    min = texto[i].toLowerCase()
    arr.push(min)
  }
  document.getElementById("txt_may").value = arr.toString()
}


/*
Crea una funcion llamada "calculateDogAge" que: 

- reciba como argumento un número representando la edad en años humanos.
- realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
- Deberá escribir en valor convertido. 
- Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
- Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
    Deberás convertir el string a Entero. 

*/
let conversion = document.getElementById("btn_añoshumano")
conversion.addEventListener("click", calculateDogAge)

function calculateDogAge(event){
  event.preventDefault()
  let human = document.getElementById("edad_humano").value
  let intHuman = parseInt(human)
  let conversion = intHuman*7
  console.log(conversion)
  document.getElementById("edad_perro").value = conversion
}


/*  OBJETOS 

A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros

1) Nombre
2) Especie
3) Ataque
4) Defensa


B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokemon: 
  Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
  El Nombre y la Especie son Strings, Ataque y Defensa numericos.
  
  Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

*/

let object = document.getElementById("btn_muestra")
object.addEventListener("click", displayPokemon)

function Pokemon(name, specie, attack, defense){
  this.name= name,
  this.specie= specie,
  this.attack= attack,
  this.defense= defense
}

var pokemon1 = new Pokemon("Bulbasaur", "Bicho", 150, 300)
var pokemon2 = new Pokemon("Charizard", "Dragón", 500, 400)


function displayPokemon(event){
  event.preventDefault()

  document.getElementById("nombre_poke1").value = pokemon1.name
  document.getElementById("especie_poke1").value = pokemon1.specie
  document.getElementById("ataque_poke1").value = pokemon1.attack
  document.getElementById("defensa_poke1").value = pokemon1.defense

  document.getElementById("nombre_poke2").value = pokemon2.name
  document.getElementById("especie_poke2").value = pokemon2.specie
  document.getElementById("ataque_poke2").value = pokemon2.attack
  document.getElementById("defensa_poke2").value = pokemon2.defense
  
}