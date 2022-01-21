import Footer from '../components/Footer';
import IBlog from '../models/IBlog';
import MenuBar from '../components/MenuBar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostsPage() {
  const [posts, setPosts] = useState<IBlog[]>();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    const list: IBlog[] = [
      {
        id: 1,
        date: new Date(),
        category: 'linux',
        tags: ['linux', 'sistema operacional', 'kernel'],
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: 2,
        date: new Date(),
        category: 'dev',
        tags: ['vscode', 'ambiente de desenvolvimento', 'ide'],
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      {
        id: 3,
        date: new Date(),
        category: 'git',
        tags: ['git', 'github'],
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
    ];
    setPosts(list);
  };

  return (
    <>
      <MenuBar />
      <main>
        <section>
          <h1 className='title'>Postagens</h1>
          <form>
            <input type={'text'} placeholder='Pesquisar' />
          </form>
          {posts?.map(post => {
            return (
              <Link
                to={`/posts/${post.id}`}
                key={post.id}
                className='sub-title'
              >
                <div className='cart'>
                  <div className='row'>
                    <div className='col-20'>
                      <div className={`category category-${post.category}`}>
                        {post.category}
                      </div>
                    </div>
                    <div className='col-80'>
                      <small>
                        {post.date.toLocaleDateString('pt-BR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </small>
                      <h2 className='sub-title'>{post.title}</h2>
                      {post.tags.map(tag => {
                        return (
                          <div key={tag} className='tag'>
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostsPage;
