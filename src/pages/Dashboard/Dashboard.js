import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

import styles from './Dashboard.module.css'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading} = useFetchDocuments("posts", null, uid)

  const deleteDocument = (id) => {

  }

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div  className={styles.dashboard} >
      <h2>Dashboard</h2>
      <p>Gerencie os seus projetos</p>
      {posts && posts.length === 0 ? (
        <div className={styles.nopost}>
          <p>Não foram encontrados posts</p>
          <Link to='/post/create' className='btn'>Criar primeiro post</Link>
        </div>
      ) : (
        <>
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
        {posts && posts.map((post) => (
        <div className={styles.post_row} key={post.id}>
        <p>{post.title}</p>
        <div className={styles.actions}>
          <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ver</Link>
          <Link to={`/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
          <button onClick={() => deleteDocument(post.id)} className='btn btn-outline btn-danger'>Excluir</button>
        </div>
        </div>
      ))}
        </>
      )}
      
    </div>
  )
}

export default Dashboard