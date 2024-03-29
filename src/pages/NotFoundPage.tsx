import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import React from 'react';

function NotFoundPage() {
  return (
    <>
      <MenuBar />
      <main>
        <section>
          <h1 className='title-error'>Nenhuma página foi encontrada.</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default NotFoundPage;
