import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

import styles from './Dashboard.module.css'

const Dashboard = () => {
  const { user } = useAuthValue()
  const uid = user.uid
  const posts = []

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus projetos</p>
      {posts && posts.length === 0 ? (
        <div className={styles.nopost}>
          <p>Não foram encontrados posts</p>
          <Link to='/post/create' className='btn'>Criar primeiro post</Link>
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  )
}

export default Dashboard