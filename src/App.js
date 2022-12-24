//Importo cosas basicas para el funcionamiento
import './App.css';
import React, { useState, useEffect } from 'react';

//Importo pngs para poner en el programa
import sword from "./Images/sword.png"
import lupa from "./Images/lupa.png"
import YugiohCard from './Components/YugiohCard';

export default function App() {
  const [card,setCard] = useState("");  // useState mantiene valores. (ahora mantengo una carta)
  const [Nombre, setNombre] = useState(""); // Mantengo el nombre de la carta
  const [Id, setId] = useState(""); // Mantengo el nombre de la carta
  const [cards,setCards] = useState([]);  // Mantengo un vector de cartas
  useEffect(() => {
    getAllCards("",25,0);
  }, []);

  async function getAllCards(name, num = 25, offset = 0) { // Creo una función, la llamo getAllCards y hago que tenga 3 parámetros.
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}&num=${num}&offset=${offset}`; // Agrego una url. Los parámetros son utilizados para modificar el link y sacar lo que quiero
    const response = await fetch(url); // Creo response. Es una respuesta a la url que ingresamos. await (se espera hasta que) fetch (se recupere un recurso de la red) (el url de la red)
    const {data} = await response.json(); // Se asigna la info acomodada al vector data
    console.log(data);                    // Se muestra la información que contiene data en la consola
    setCards(data);                       // Hago que data no se resetee, se mantenga.
  }

  function space(Nombre){   // esta funcion reemplaza los espacios en %20 para que la pagina entienda
    var busqueda = Nombre;
    busqueda.replace(' ', '%20');
    return busqueda;
  }


  return (
    // TODO
    <div>

      {/* BUSCADOR */}
      <div className='flotante'>
        <input type="text" size={40} maxLength="53" name="name" onChange={(event) => setNombre(event.target.value)}/> {/*event en onchange es "cuando cambia algo, ocurre un evento" event target value es lo que esta dentro del input*/}



        <button onClick={()=> getAllCards(Nombre,Id,25,0)}>
          <img weight="12px" height="12px"alt="lupa" src={lupa}/>
        </button>
      </div>
      {/* LISTA DE CARTAS */}
      <div>
        { cards.length>0 ? <YugiohCard cartas={cards}/> : null}
      </div>
    </div>
  );
}


