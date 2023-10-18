import React, { useState, useEffect } from 'react'
import './services.css';
import SectionTitle from '../components/SectionTitle';

function Services({ reference }) {
  const [SpellCards, setSpellCards] = useState([]);

  useEffect(() => {
    const Spell = "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&type=spell%20card&sort=id";
    const getNormalSpellCards = async () => {
      try {
        const response = await fetch(Spell);
        if (response.ok) {
          const data = await response.json();
          let SpellCards = data.data.filter(card => card.race === "normal");
          SpellCards = SpellCards.slice(0, 50);
          setSpellCards(SpellCards);
        } else {
          throw new Error("La requête a échoué");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getNormalSpellCards();
  }, []);

  return (
    <section id="services" className="services" ref={reference}>
      <div className="container portfolio ">
        <SectionTitle title="Magie" subtitle="Cartes Magie" />
        <p className="fst-italic">

        </p>
        <div className="row" id='spell'>
          {SpellCards.map((card) => (
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

export default Services;