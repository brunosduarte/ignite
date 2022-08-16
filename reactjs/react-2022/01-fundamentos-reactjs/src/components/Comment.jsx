import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/brunosduarte.png" alt=""/>

      <div children={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Bruno Duarte</strong>
              <time title="16 de Agosto às 11:30h" dateTime="2022-08-16 11:30:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>     
        </footer>
      </div>
    </div>
  )
}