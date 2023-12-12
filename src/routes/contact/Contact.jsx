import './contact.css'
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Contact = () => {

      const { theme } = useContext(ThemeContext);

  return (
    <>
      <main>
      <section>
        <p>Tema atual: {theme}</p>
      </section>

        <article className="box-home">
          <h1>Pagina de Contatos</h1>
        </article>
      </main>
    </>
  );
};

export default Contact;
