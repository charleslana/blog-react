import Footer from '../components/Footer';
import IPost from '../models/IPost';
import MenuBar from '../components/MenuBar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostsPage() {
  const [posts, setPosts] = useState<IPost[]>();
  const [filterPosts, setFilterPosts] = useState<IPost[]>();

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
    setFilterPosts(list);
  };

  const searchPosts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    if (value === '') {
      setFilterPosts(posts);
      return;
    }
    const filter = posts?.filter(post =>
      post.tags.some(p => p.toLowerCase().includes(value.toLowerCase()))
    );
    setFilterPosts(filter);
  };

  return (
    <>
      <MenuBar />
      <main>
        <section>
          <h1 className='title'>Postagens</h1>
          <form>
            <input
              type={'text'}
              placeholder='Pesquisar'
              onChange={e => searchPosts(e)}
            />
          </form>
          {filterPosts?.map(post => (
            <Link to={`/posts/${post.id}`} key={post.id} className='sub-title'>
              <div className='card'>
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
                    {post.tags.map(tag => (
                      <div key={tag} className='tag'>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostsPage;
