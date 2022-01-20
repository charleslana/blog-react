import React from 'react';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';

function NotFoundPage() {
  return (
    <>
      <MenuBar />
      <main>
        <section>
          <h1 className='title-error'>Nenhuma página foi encontrada.</h1>
          <div className='img-error'></div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
