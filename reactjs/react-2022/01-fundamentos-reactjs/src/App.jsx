import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post }  from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/brunosduarte.png',
      name: 'Bruno Duarte',
      role: 'CTO @Engenhação'
    },
    content: [
      { type: 'paragraph', content: 'Aloha' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio' },
      { type: 'link', content: 'bsd.systems/startup' },
    ],
    publishedAt: new Date('2022-08-17 22:30:40'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 02:15:40'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Salve dev' },
      { type: 'paragraph', content: 'Subi mais um projeto no meu portfolio' },
      { type: 'link', content: 'jane.design/startup' },
    ],
    publishedAt: new Date('2022-06-12 16:20:50'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

