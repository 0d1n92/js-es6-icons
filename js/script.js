// milestone 1:
// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.
$(document).ready(
  function(){
const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      }
    ];
    const container= $("#container");
    const AddColorIcon= addColor(icons);
    console.log(AddColorIcon);
    print(AddColorIcon,container);

  });



  // Utilizzando la funzione forEach e il template
  // literal, visualizzare in pagina tutte le icone con il
  // proprio nome.
function print(array,container){

  array.forEach((element) => {
    const { family,prefix,name,color}= element;
    container.append( `
      <div>
      <i class="${family} ${prefix}${name}" style="color:${color}"></i>
      <h3>${name}</h3>
      </div>
      `
    )

  });
  }

//   milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.
function addColor(array){
  const ArrayColor = ["red","green","yellow"];
  array.forEach((element, index)=>{

    if (element.type=="animal"){
     array[index]={
      ...element,
      color:ArrayColor[0],
    }
  }else if (element.type=="vegetable"){
      array[index]={
      ...element,
      color:ArrayColor[1],
    }
    } else {
      array[index]={
      ...element,
      color:ArrayColor[2],
    }
    }
  });

   return array;
}
