import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <MenuBar />
      <main>
        <section>
          <div className='row'>
            <div className='col-60'>
              <h1 className='title'>
                Olá, seja Bem-vindo(a) ao CBlog, uma forma de buscar informações
                da tecnologia.
              </h1>
              <h2 className='sub-title'>
                Encontre o que possa lhe ajudar, tudo sobre tecnologia,
                utilização de sistemas, frameworks, desenvolvimento, testes e
                sistemas operacionais. Práticas de DevOps, Git, Github e outros!
              </h2>
              <Link to={'/posts'} className='sub-title'>
                <button className='btn'>Ir para Postagens</button>
              </Link>
            </div>
            <div className='col-40'>
              <div className='img-blog'></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
