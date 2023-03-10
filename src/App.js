//Importo cosas basicas para el funcionamiento
import './App.css';
import React, { useState, useEffect } from 'react';

//Importo pngs para poner en el programa
//import sword from "./Images/sword.png"
import lupa from "./Images/lupa.png"
import YugiohCard from './Components/YugiohCard';

export default function App() {
  const [Name, setName] = useState(""); // Mantengo el nombre de la carta
  const [Id, setId] = useState(""); // Mantengo el id de la carta
  const [Type, setType] = useState(""); // Mantengo el tipo de la carta
  const [Atk, setAtk] = useState("");
  const [Def, setDef] = useState("");
  const [Level, setLevel] = useState("");
  const [Race, setRace] = useState("");
  const [Attribute, setAttribute] = useState("");
  const [Link, setLink] = useState("");
  const [Linkmarker, setLinkmarker] = useState("");
  const [Scale, setScale] = useState("");
  const [Cardset, setCardset] = useState("");
  const [Archetype, setArchetype] = useState("");
  const [Banlist, setBanlist] = useState("");
  const [Sort, setSort] = useState("");
  const [Format, setFormat] = useState("");

  const [cards,setCards] = useState([]);  // Mantengo un vector de cartas
  useEffect(() => {
    getAllCards("","","","","","","","","","","","","","","","",25,0);
  }, []);

  async function getAllCards(name, id, type, atk, def, level, race, attribute, link, linkmarker, scale, cardset, archetype, banlist, sort, format, num, offset) { // Creo una función, la llamo getAllCards y hago que tenga 3 parámetros.
    try {
      const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?${name}${id}${type}${atk}${def}${level}${race}${attribute}${link}${linkmarker}${scale}${cardset}${archetype}${banlist}${sort}${format}&num=${num}&offset=${offset}`; // Agrego una url. Los parámetros son utilizados para modificar el link y sacar lo que quiero
      const response = await fetch(url); // Creo response. Es una respuesta a la url que ingresamos. await (se espera hasta que) fetch (se recupere un recurso de la red) (el url de la red)
      const {data} = await response.json(); // Se asigna la info acomodada al vector data
      console.log(data);                    // Se muestra la información que contiene data en la consola
      if (data===undefined) {
        alert("incompatible search");
        return;   
      }
      setCards(data);                       // Hago que data no se resetee, se mantenga.
      console.log(url);
    } catch (error) {

    }
  }

  function space(Palabra, Num){   // esta funcion reemplaza los espacios en %20 para que la pagina entienda
    var busqueda = Palabra;
    if (Palabra !== "") {
      busqueda.replace(" ", "%20");
      switch(Num){
        case 0:
          busqueda="&fname="+busqueda;
          break;
        case 1:
          busqueda="&id="+busqueda;
          break;
        case 2:
          busqueda="&type="+busqueda;
          break;
        case 3:
          busqueda="&atk="+busqueda;
          break;
        case 4:
          busqueda="&def="+busqueda;
          break;
        case 5:
          busqueda="&level="+busqueda;
          break;
        case 6:
          busqueda="&race="+busqueda;
          break;
        case 7:
          busqueda="&attribute="+busqueda;
          break;
        case 8:
          busqueda="&link="+busqueda;
          break;
        case 9:
          busqueda="&linkmarker="+busqueda;
          break;
        case 10:
          busqueda="&scale="+busqueda;
          break;
        case 11:
          busqueda="&cardset="+busqueda;
          break;
        case 12:
          busqueda="&archetype="+busqueda;
          break;
        case 13:
          busqueda="&banlist="+busqueda;
          break;
        case 14:
          busqueda="&sort="+busqueda;
          break;
        case 15:
          busqueda="&format="+busqueda;
          break;
        default:
          break;
      }
    }

    return busqueda;
  }


  return (
    // TODO
    <div>

      {/* BUSCADOR */}
      <div>
        <input placeholder="Name" type="text" size={40} maxLength="53" name="name" onChange={(event) => setName(space(event.target.value,0))}/>
        {/*event en onchange es "cuando cambia algo, ocurre un evento" event target value es lo que esta dentro del input*/}
        <input placeholder="Id" type="text" size={10} maxLength="10" name="id" onChange={(event) => setId(space(event.target.value,1))}/>
        <select type="text" name="type" onChange={(event) => setType(space(event.target.value,2))}>
          <option value="" selected>-Select Card Type-</option>
          <option value="Normal Monster">Normal Monster</option>
          <option value="Effect Monster">Effect Monster</option>
          <option value="Fusion Monster">Fusion Monster</option>
          <option value="Link Monster">Link Monster</option>
          <option value="Spell Card">Spell Card</option>
          <option value="Trap Card">Trap Card</option>
          <option value="Flip Effect Monster">Flip Effect Monster</option>
          <option value="Flip Tuner Effect Monster">Flip Tuner Effect Monster</option>
          <option value="Gemini Monster">Gemini Monster</option>
          <option value="Normal Tuner Monster">Normal Tuner Monster</option>
          <option value="Pendulum Effect Monster">Pendulum Effect Monster</option>
          <option value="Pendulum Effect Fusion Monster">Pendulum Effect Fusion Monster</option>
          <option value="Pendulum Flip Effect Monster">Pendulum Flip Effect Monster</option>
          <option value="Pendulum Normal Monster">Pendulum Normal Monster</option>
          <option value="Pendulum Tuner Effect Monster">Pendulum Tuner Effect Monster</option>
          <option value="Ritual Effect Monster">Ritual Effect Monster</option>
          <option value="Ritual Monster">Ritual Monster</option>
          <option value="Skill Card">Skill Card</option>
          <option value="Spell Card">Spell Card</option>
          <option value="Spirit Monster">Spirit Monster</option>
          <option value="Synchro Monster">Synchro Monster</option>
          <option value="Synchro Pendulum Effect Monster">Synchro Pendulum Effect Monster</option>
          <option value="Synchro Tuner Monster">Synchro Tuner Monster</option>
          <option value="Toon Monster">Toon Monster</option>
          <option value="Tuner Monster">Tuner Monster</option>
          <option value="Union Effect Monster">Union Effect Monster</option>
          <option value="XYZ Monster">XYZ Monster</option>
          <option value="XYZ Pendulum Effect Monster">XYZ Pendulum Effect Monster</option>
          <option value="Token">Token</option>
        </select>
        <input placeholder="Atk" type="text" size={4} maxLength="6" name="atk" onChange={(event) => setAtk(space(event.target.value,3))}/>
        <input placeholder="Def" type="text" size={4} maxLength="6" name="def" onChange={(event) => setDef(space(event.target.value,4))}/>
        <input placeholder="Level" type="text" size={2} maxLength="2" name="level" onChange={(event) => setLevel(space(event.target.value,5))}/>
        <select type="text" name="race" onChange={(event) => setRace(space(event.target.value,6))}>
          <option value="" selected>-Select Card Race-</option>
          <option value="aqua">aqua</option>
          <option value="beast">beast</option>
          <option value="beast-warrior">beast warrior</option>
          <option value="continuous">continuous</option>
          <option value="counter">counter</option>
          <option value="creator-god">creator god</option>
          <option value="cyberse">cyberse</option>
          <option value="dinosaur">dinosaur</option>
          <option value="divine-beast">divine beast</option>
          <option value="dragon">dragon</option>
          <option value="equip">equip</option>
          <option value="fairy">fairy</option>
          <option value="fiend">fiend</option>
          <option value="field">field</option>
          <option value="fish">fish</option>
          <option value="insect">insect</option>
          <option value="normal">normal</option>
          <option value="plant">plant</option>
          <option value="psychic">psychic</option>
          <option value="pyro">pyro</option>
          <option value="quick-play">quick-play</option>
          <option value="reptile">reptile</option>
          <option value="ritual">ritual</option>
          <option value="rock">rock</option>
          <option value="sea serpent">sea serpent</option>
          <option value="spellcaster">spellcaster</option>
          <option value="thunder">thunder</option>
          <option value="warrior">warrior</option>
          <option value="winged beast">winged beast</option>
          <option value="wyrm">wyrm</option>
          <option value="zombie">zombie</option>
          <option value="ishizu">ishizu</option>
          <option value="joey">joey</option>
          <option value="kaiba">kaiba</option>
          <option value="mai">mai</option>
          <option value="pegasus">pegasus</option>
          <option value="yugi">yugi</option>
        </select>
        <select type="text" name="attribute" onChange={(event) => setAttribute(space(event.target.value,7))}>
          <option value="" selected>-Select Card Attribute-</option>
          <option value="dark">dark</option>
          <option value="divine">divine</option>
          <option value="earth">earth</option>
          <option value="fire">fire</option>
          <option value="light">light</option>
          <option value="water">water</option>
          <option value="wind">wind</option>
        </select>
        <input placeholder="Link" type="text" size={2} maxLength="2" name="link" onChange={(event) => setLink(space(event.target.value,8))}/>
        <select type="text" name="linkmarker" onChange={(event) => setLinkmarker(space(event.target.value,9))}>
          <option value="" selected>-Select Card Linkmarker-</option>
          <option value="Bottom">Bottom</option>
          <option value="Left">Left</option>
          <option value="Right">Right</option>
          <option value="Top">Top</option>
          <option value="Bottom-Left">Bottom Left</option>
          <option value="Bottom-Right">Bottom Right</option>
          <option value="Top-Left">Top-Left</option>
          <option value="Top-Right">Top-Right</option>
        </select>
        <input placeholder="Scale" type="text" size={2} maxLength="2" name="scale" onChange={(event) => setScale(space(event.target.value,10))}/>
        <input placeholder="Card Set" type="text" size={10} maxLength="50" name="cardset" onChange={(event) => setCardset(space(event.target.value,11))}/>
        <input placeholder="Archetype" type="text" size={10} maxLength="50" name="archetype" onChange={(event) => setArchetype(space(event.target.value,12))}/>
        <select type="text" name="banlist" onChange={(event) => setBanlist(space(event.target.value,13))}>
          <option value="" selected>-No Ban-</option>
          <option value="goat">GOAT</option>
          <option value="ocg">OCG</option>
          <option value="tcg">TCG</option>
        </select>

        <button onClick={()=> getAllCards(Name,Id,Type,Atk,Def,Level,Race,Attribute,Link,Linkmarker,Scale,Cardset,Archetype,Banlist,Sort,Format,25,0)}>
          <img weight="12px" height="12px"alt="lupa" src={lupa}/>
        </button>

      </div>
      {/* ORDENADOR */}
      <div>
      <select type="text" name="sort" onChange={(event) => setSort(space(event.target.value,14))}>
          <option value="" selected>-Sort By-</option>
          <option value="ATK">ATK</option>
          <option value="DEF">DEF</option>
          <option value="Name">Name</option>
          <option value="Type">Type</option>
          <option value="Level">Level</option>
          <option value="ID">ID</option>
          <option value="New">New</option>
          <option value="Relevance">Relevance</option>
      </select>
      <select type="text" name="format" onChange={(event) => setFormat(space(event.target.value,15))}>
          <option value="" selected>-Format-</option>
          <option value="tcg">TCG</option>
          <option value="goat">GOAT</option>
          <option value="ocg">OCG</option>
          <option value="ocg goat">OCG GOAT</option>
          <option value="speed duel">speed duel</option>
          <option value="rush duel">rush duel</option>
          <option value="duel links">duel links</option>
        </select>
      </div>

      {/* LISTA DE CARTAS */}
      <div>
        { cards.length>0 ? <YugiohCard cartas={cards}/> : null}
      </div>
    </div>
  );
}


