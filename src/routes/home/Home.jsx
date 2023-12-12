import Cards from '../../components/Cards/Cards';
import { ThemeContext } from '../../context/ThemeContext';
import './home.css'
import { useContext } from "react";


const Home = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <section>
        <button onClick={toggleTheme}>Mudar tema</button>
        <p>Tema atual: {theme}</p>
      </section>

      <main>
        <article className="box-home">
          <h1>Pagina Inicial</h1>
          <Cards/>
        </article>
      </main>
    </>
  );
};

export default Home;
