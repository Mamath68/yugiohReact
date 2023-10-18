import React, { useState, useEffect } from 'react'
import './portfolio.css';
import SectionTitle from '../components/SectionTitle';


function Portfolio({ reference }) {

  const [TrapCards, setTrapCards] = useState([]);

  useEffect(() => {
    const Trap = "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&type=trap%20card&sort=id";
    const getNormalTrapCards = async () => {
      try {
        const response = await fetch(Trap);
        if (response.ok) {
          const data = await response.json();
          let TrapCards = data.data.filter(card => card.race === "normal");
          TrapCards = TrapCards.slice(0, 50);
          setTrapCards(TrapCards);
        } else {
          throw new Error("La requête a échoué");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getNormalTrapCards();
  }, []);

  return (
    <section id="portfolio" className="portfolio" ref={reference}>
      <div className="container portfolio ">
        <SectionTitle title="Pièges" subtitle="Les Cartes Pièges" />
        <p className="fst-italic">

        </p>
        <div className="row" id='trap'>
          {TrapCards.map((card) => (
            <div key={card.id}>
              <img src={card.card_images[0].image_url} alt={card.name} style={{ width: '250px', height: 'auto' }} />
              <h4>{card.name}</h4>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Portfolio
