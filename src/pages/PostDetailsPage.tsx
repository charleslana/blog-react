import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import React from 'react';
import { useParams } from 'react-router-dom';

function PostDetailsPage() {
  const { id } = useParams();

  return (
    <>
      <MenuBar />
      <main>
        <section>
          <h1 className='title'>PostDetailsPage {id}</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostDetailsPage;
