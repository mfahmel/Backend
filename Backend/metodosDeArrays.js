const koders = [
    {
      id: 1,
      first_name: "Laurella",
      last_name: "Tupper",
      age: 42,
      email: "ltupper0@123-reg.co.uk",
      generation: 2,
    },
    {
      id: 2,
      first_name: "Daron",
      last_name: "Cockle",
      age: 18,
      email: "dcockle1@salon.com",
      generation: 12,
    },
    {
      id: 3,
      first_name: "Marleen",
      last_name: "Eller",
      age: 18,
      email: "meller2@bloglovin.com",
      generation: 11,
    },
    {
      id: 4,
      first_name: "Worthington",
      last_name: "Vlach",
      age: 16,
      email: "wvlach3@taobao.com",
      generation: 22,
    },
    {
      id: 5,
      first_name: "Wendell",
      last_name: "Artiss",
      age: 17,
      email: "wartiss4@microsoft.com",
      generation: 12,
    },
    {
      id: 6,
      first_name: "Kin",
      last_name: "Pala",
      age: 55,
      email: "kpala5@photobucket.com",
      generation: 6,
    },
    {
      id: 7,
      first_name: "Lucio",
      last_name: "Bagshawe",
      age: 56,
      email: "lbagshawe6@behance.net",
      generation: 15,
    },
    {
      id: 8,
      first_name: "Reggy",
      last_name: "Bullingham",
      age: 30,
      email: "rbullingham7@fda.gov",
      generation: 2,
    },
    {
      id: 9,
      first_name: "Clarinda",
      last_name: "Steaning",
      age: 52,
      email: "csteaning8@liveinternet.ru",
      generation: 22,
    },
    {
      id: 10,
      first_name: "Karolina",
      last_name: "Leblanc",
      age: 59,
      email: "kleblanc9@tiny.cc",
      generation: 6,
    },
    {
      id: 11,
      first_name: "Colet",
      last_name: "McCuffie",
      age: 60,
      email: "cmccuffiea@dyndns.org",
      generation: 24,
    },
    {
      id: 12,
      first_name: "Kimble",
      last_name: "Dovermann",
      age: 54,
      email: "kdovermannb@gmail.com",
      generation: 3,
    },
    {
      id: 13,
      first_name: "Janessa",
      last_name: "Illing",
      age: 19,
      email: "jillingc@hubpages.com",
      generation: 6,
    },
    {
      id: 14,
      first_name: "Lani",
      last_name: "Ricardo",
      age: 44,
      email: "lricardod@opensource.org",
      generation: 6,
    },
    {
      id: 15,
      first_name: "Caye",
      last_name: "Cowmeadow",
      age: 16,
      email: "ccowmeadowe@narod.ru",
      generation: 11,
    },
    {
      id: 16,
      first_name: "Nataline",
      last_name: "MacInnes",
      age: 28,
      email: "nmacinnesf@gmail.com",
      generation: 13,
    },
    {
      id: 17,
      first_name: "Dayna",
      last_name: "Nimmo",
      age: 17,
      email: "dnimmog@infoseek.co.jp",
      generation: 12,
    },
    {
      id: 18,
      first_name: "Sheff",
      last_name: "Normanville",
      age: 23,
      email: "snormanvilleh@cisco.com",
      generation: 13,
    },
    {
      id: 19,
      first_name: "Olivie",
      last_name: "Bladesmith",
      age: 27,
      email: "obladesmithi@newyorker.com",
      generation: 6,
    },
    {
      id: 20,
      first_name: "Ida",
      last_name: "Jewess",
      age: 50,
      email: "ijewessj@ca.gov",
      generation: 9,
    },
  ];

// forEach
//no regresa nada
// Quiero enviar un correo a cada koder

//el primer parametro son todos los datos del array y la segunda es el indice en el array su número


console.log("FOREACH");

koders.forEach((koder, index) => {
   enviarCorreo(koder.email)
 })

// map
// Necesito Obtener el nombre completo de cada alumno en una sola cadena
//recibe los elementos y regresa un nuevo array con los elementos modificados y el mismo número de elementos
console.log("MAP");

const nombresCompletos = koders.map((koder, index) => {
    let nombreCompleto =`${koder.first_name} ${koder.last_name}`;
    return nombreCompleto;
    
  }
  )
  console.log(nombresCompletos);

 

// filter
// quiero saber cuantos koders son menores de edad
//no muta el arreglo original regresa otro arreglo con los elementos que cumplan la condición

console.log("FILTER");
const menoresDeEdad = koders.filter((koder) => 
   koder.age < 18)
  .map((koder) => `${koder.first_name} ${koder.last_name}`)
  console.log(menoresDeEdad);

  

// find
// Quiero encontrar al koder con id 15
console.log("FIND");
const koder15 = koders.find((koder) => koder.id === 15);
console.log(koder15);





// some
// Quiero saber si algunos de los koders tienen correo con gmail

console.log("SOME");
const gmail = koders.some((koder) => koder.email.includes('gmail'));
console.log("gmail: " , gmail);

//every
const mayoresDeEdad = koders.every((koder) => koder.age >= 18);
console.log("mayores de edad: ", mayoresDeEdad);




// reduce
// Quiero saber la cuenta de koders por generación  
const conteoPorGeneracion = koders.reduce((mapaDeConteo, koder) => {
    const generacion = `g${koder.generation}`

    if (mapaDeConteo[generacion]) {
        mapaDeConteo[generacion]++;
        //hacemos salida apresurada con el return y ya no tenemos que meter el else
        return mapaDeConteo;
    }
        mapaDeConteo[generacion] = 1;
        return mapaDeConteo
}, {})

console.log("Conteo por generación: ", conteoPorGeneracion);









console.log("REDUCE");
const todosLosNombres = koders.reduce((anterior, valorActual, index) => {
  return anterior + valorActual.first_name + valorActual.last_name;
}, '')
console.log(todosLosNombres);

const edadTotal = koders.reduce((anterior, valorActual) => {
  return anterior + valorActual.age;
}
, 0)  
console.log("Edad Total" , edadTotal);
console.log("Edad Promedio" , edadTotal / koders.length);

function enviarCorreo(email) {
  console.log('Correo enviado a: ', email);
}

koders.reduce((acumulador, koder) => {
  console.log('Correo enviado con reduce a: ', koder.email);
}, 0)



  console.log("FOREACH");
  const conteoPorGeneracion2 = {};
  koders.forEach((koder) => {
      const generacion = `g${koder.generation}`;
      if (conteoPorGeneracion2[generacion]) {
          conteoPorGeneracion2[generacion]++;
      } else {
          conteoPorGeneracion2[generacion] = 1;
      }
  });
  console.log("Conteo por generación: ", conteoPorGeneracion2);
  

//TODOS CON REDUCE

console.log("ForEach con reduce");

function enviarCorreo(email) {
  console.log('Correo enviado a: ', email);
}

koders.reduce((acumulador, koder) => {
  console.log('Correo enviado con reduce a: ', koder.email);
}, 0)

console.log("Nombres con reduce");

const nombresCompletos2 = koders.reduce((acumulador, koder) => {  
  let nombreCompleto =`"el nombre completo usando reduce es" ${koder.first_name} ${koder.last_name}`;
  acumulador.push(nombreCompleto);
  return acumulador;
}, [])
console.log(nombresCompletos2);

console.log("Menores de edad con reduce");

  const menoresDeEdad2 = koders.reduce((acumulador, koder) => {
    if(koder.age < 18){
      acumulador.push(koder);
    }
    return acumulador;
  }, [])
  console.log(menoresDeEdad2);

  console.log("Find con reduce");

const koder15_2 = koders.reduce((acumulador, koder) => {
  if(koder.id === 15){
    acumulador = koder;
  }
  return acumulador;
}, {})
console.log(koder15_2);

console.log("Some con reduce");

const gmail2 = koders.reduce((acumulador, koder) => {
  return acumulador || koder.email.includes('gmail');
}, false);
console.log("gmail2: " , gmail2);

console.log("EVERY con reduce");


const todosMayoresDeEdad = koders.reduce((acumulador, koder) => {
  return acumulador && (koder.age >= 18);
}, true);

console.log("¿Todos son mayores de edad? ", todosMayoresDeEdad);