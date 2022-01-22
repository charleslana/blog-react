import Footer from '../components/Footer';
import IPost from '../models/IPost';
import listPostService from '../services/ListPostService';
import MenuBar from '../components/MenuBar';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostsPage() {
  const [posts, setPosts] = useState<IPost[]>();
  const [filterPosts, setFilterPosts] = useState<IPost[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    await listPostService()
      .then(response => {
        response.sort((a, b) => b.id - a.id);
        setPosts(response);
        setFilterPosts(response);
      })
      .catch(error => {
        alert(error.message);
      })
      .finally(() => setIsLoading(false));
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
          {isLoading ? (
            <p className='text-center'>Aguarde, Carregando...</p>
          ) : (
            <>
              <form onSubmit={e => e.preventDefault()}>
                <input
                  type={'text'}
                  placeholder='Pesquisar'
                  onChange={e => searchPosts(e)}
                />
              </form>
              {filterPosts?.length === 0 ? (
                <p className='text-center'>Nenhum resultado encontrado.</p>
              ) : (
                filterPosts?.map(post => (
                  <Link
                    to={`/posts/${post.id}`}
                    key={post.id}
                    className='sub-title'
                  >
                    <div className='card'>
                      <div className='row'>
                        <div className='col-20'>
                          <div className={`category category-${post.category}`}>
                            {post.category}
                          </div>
                        </div>
                        <div className='col-80'>
                          <small>
                            {new Date(post.date).toLocaleDateString('pt-BR', {
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
                ))
              )}
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default PostsPage;
