import { Post } from "./components/Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Andrew Gomes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat praesentium pariatur beatae id quam sunt."
          />
          <Post author="Gabriel Buzzi" content="Um post muito legal" />
        </main>
      </div>
    </div>
  );
}
