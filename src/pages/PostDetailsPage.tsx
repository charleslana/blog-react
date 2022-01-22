import Footer from '../components/Footer';
import IPost from '../models/IPost';
import MenuBar from '../components/MenuBar';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetailsPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<IPost | undefined>();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const list: IPost[] = [
      {
        id: 1,
        date: new Date(),
        category: 'linux',
        tags: ['linux', 'sistema operacional', 'kernel'],
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: 2,
        date: new Date(),
        category: 'dev',
        tags: ['vscode', 'ambiente de desenvolvimento', 'ide'],
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: 3,
        date: new Date(),
        category: 'git',
        tags: ['git', 'github'],
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
    ];
    let postId = Number(id);
    if (isNaN(postId)) postId = 0;
    const findPost = list?.find(post => post.id === postId);
    setPost(findPost);
    setIsLoading(false);
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
                {post.date.toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <h1>{post.title}</h1>
              <article>{post.description}</article>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostDetailsPage;
