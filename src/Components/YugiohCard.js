import React from 'react';

export default function YugiohCard({cartas}){
console.log(cartas);
    const listacartas = cartas.map((carta, index)=>{ //map: por cada carta, hace.... (lo que sigue)
        console.log(carta);
        return <li className="list"key={index}>         {/* Item List */}
            <div className="card">
                <img alt="card" src={carta.card_images[0].image_url_small} />
            </div>
        </li>;
    });

    return (
        <div>
            <div>
                <ul className="grid">                        {/* Unsorted List */}
                    {listacartas}
                </ul>
            </div>
            
        </div>
    )
}