import React from 'react';
import './about.css';
import SectionTitle from '../components/SectionTitle';
import profilImg from '../images/profile-img.jpg';


function About({ reference, aboutActive }) {
    return (
        <section id="about" className='about' ref={reference}>
            <div className="container about-me">
                <SectionTitle title="A Propos" subtitle="En Savoir Plus au sujet de ce site" />
                <div className="row">
                    <div className="col-lg-4">
                        <img src={profilImg} alt="me" className='img-fluid' />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                        <h3>Developpeur Web et Web Mobile</h3>
                        <p className="fst-italic">

                        </p>
                        <p>
                            Medames, medemoiselle bonjour, Ce site est une completion de mon projet de fin d'année. <br />
                            Ici, j'ai l'intention de réussir ce que je n'ai pas réussis en php. <br />
                            A savoir, faire une pagination afin de ne pas avoir les 20 000 cartes et plus d'un coup, <br />
                            ainsi que réussir a faire un deck que je stockerais en session, ou en base de donnée, la connexion sera mon objectif prochain.
                        </p>
                        <p>
                            Profitez de la visite, la suite au prochain onglet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About