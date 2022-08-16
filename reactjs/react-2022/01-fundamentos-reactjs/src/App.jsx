import { Header } from './components/Header';
import { Post }  from './components/Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Bruno Duarte"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Assumenda odio voluptate recusandea, non laborum dolore"
          />
          <Post
            author="Diego Fernandes"
            content="Atewdsj,hjkl"
          /> 
        </main>

      </div>
    </div>
  )
}

