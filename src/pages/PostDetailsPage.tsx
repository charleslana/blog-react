import Footer from '../components/Footer';
import IPost from '../models/IPost';
import listPostService from '../services/ListPostService';
import MenuBar from '../components/MenuBar';
import React, { useEffect, useState } from 'react';
import ScrollButton from '../components/ScrollButton';
import { useParams } from 'react-router-dom';

function PostDetailsPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<IPost | undefined>();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    await listPostService()
      .then(response => {
        let postId = Number(id);
        if (isNaN(postId)) postId = 0;
        const findPost = response?.find(post => post.id === postId);
        setPost(findPost);
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <MenuBar />
      <main>
        <section>
          {isLoading ? (
            <p className='text-center'>Aguarde, Carregando...</p>
          ) : !post ? (
            <p className='text-center'>Nenhuma postagem foi encontrada.</p>
          ) : (
            <div className='post'>
              <p className='date'>
                {new Date(post.date).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h1>{post.title}</h1>
              <article
                dangerouslySetInnerHTML={{
                  __html: post.description,
                }}
              ></article>
            </div>
          )}
        </section>
      </main>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default PostDetailsPage;
