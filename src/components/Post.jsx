import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/andrewgomescode.png"
            alt="Foto de Andrew Gomes"
          />
          <div className={styles.authorInfo}>
            <strong>Andrew Gomes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="03 de Fevereiro às 18:00h" dateTime="2024-02-03T08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portfólio.</p>
        <p>
          É um projeto que fiz no React (Meu primeiro projeto em React). O nome
          do projeto é Ignite 🔥
        </p>
        <p>Veja mais informações no meu LinkedIn</p>
        <p>
          👉{" "}
          <a
            href="https://www.linkedin.com/in/andrewgomess/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/andrewgomess/
          </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#react</a>{" "}
          <a href="#">#dev</a> <a href="#">#frontend</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

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
  );
}
