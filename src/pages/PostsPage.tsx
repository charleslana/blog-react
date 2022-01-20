import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import React from 'react';

function PostsPage() {
  return (
    <>
      <MenuBar />
      <main>
        <section>
          <h1 className='title'>Postagens</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostsPage;
