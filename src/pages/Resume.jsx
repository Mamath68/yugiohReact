import React, { useState, useEffect } from 'react'
import './resume.css';
import SectionTitle from '../components/SectionTitle';

function Resume({ reference }) {

  const [warriorMonsterCards, setWarriorMonsterCards] = useState([]);

  useEffect(() => {
    const warrior = "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&type=normal%20monster&sort=level";
    const getNormalWarriorMonsterCards = async () => {
      try {
        const response = await fetch(warrior);
        if (response.ok) {
          const data = await response.json();
          let warriorMonsterCards = data.data.filter(card => card.race === "Warrior");
          warriorMonsterCards = warriorMonsterCards.slice(0, 50);
          setWarriorMonsterCards(warriorMonsterCards);
        } else {
          throw new Error("La requête a échoué");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getNormalWarriorMonsterCards();
  }, []);

  const [wizardMonsterCards, setWizardMonsterCards] = useState([]);

  useEffect(() => {
    const wizard = "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=fr&type=normal%20monster&sort=level";
    const getNormalWizardMonsterCards = async () => {
      try {
        const response = await fetch(wizard);
        if (response.ok) {
          const data = await response.json();
          let wizardMonsterCards = data.data.filter(card => card.race === "Spellcaster");
          wizardMonsterCards = wizardMonsterCards.slice(0, 50);
          setWizardMonsterCards(wizardMonsterCards);
        } else {
          throw new Error("La requête a échoué");
        }
      } catch (error) {
        console.error(error);
      }
    };
    getNormalWizardMonsterCards();
  }, []);

  return (
    <section id="resume" className="resume" ref={reference}>
      <div className="container resume">
        <SectionTitle title="Monstres" subtitle="Les Cartes Monstre" />
        <p className="fst-italic">

        </p>
        <div className="row" id='warrior'>
          {warriorMonsterCards.map((card) => (
            <div key={card.id}>
              <img src={card.card_images[0].image_url} alt={card.name} style={{ width: '250px', height: 'auto' }} />
              <h4>{card.name}</h4>
              <div className="flex">
                <h5>{card.atk}</h5>
                <h5>{card.def}</h5>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
        <p className="fst-italic">

        </p>
        <div className="row" id='wizard'>
          {wizardMonsterCards.map((card) => (
            <div key={card.id}>
              <img src={card.card_images[0].image_url} alt={card.name} style={{ width: '250px', height: 'auto' }} />
              <h4>{card.name}</h4>
              <div className="flex">
                <h5>{card.atk}</h5>
                <h5>{card.def}</h5>
              </div>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume