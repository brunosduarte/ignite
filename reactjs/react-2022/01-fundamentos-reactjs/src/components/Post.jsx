import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/brunosduarte.png"/>
          <div className={styles.authorInfo}>
            <strong>Bruno Duarte</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Agosto às 09:30h" dateTime="2022-08-16 09:30">Publicado a 1h</time>
      </header>

      <div className={styles.content}>
        <p>Post</p>
        <p>Teste de post</p>
        <p>--<a href="">bsd.systems/full</a></p>
        <p><a href="">#testes #ignite</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>

  )
}