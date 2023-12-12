import './cards.css'


const Cards = () => {

      const racasDeCachorros = [
        {
          nome: "Labrador Retriever",
          imagem:
            "https://upload.wikimedia.org/wikipedia/commons/e/e4/Labrador_Retriever_snow.jpg",
          descricao:
            "Originário do Reino Unido, é descendente de cães de água.",
        },
        {
          nome: "Bulldog Francês",
          imagem:
            "https://miro.medium.com/v2/resize:fit:960/0*NCBNafZoXIFRnljJ",
          descricao:
            "Originário da França, é descendente do antigo Mastiff inglês.",
        },
        {
          nome: "Golden Retriever",
          imagem:
            "https://backfields.com.br/application/views/imagens/galerias/imagens-galerias_10.jpg",
          descricao:
            "Originário da Escócia, é descendente do Yellow Retriever e do Tweed Water Spaniel.",
        },
        {
          nome: "Dachshund",
          imagem:
            "https://blog.polipet.com.br/wp-content/uploads/2022/07/AdobeStock_286573405-445x445.jpeg",
          descricao: "Originário da Alemanha, é descendente de cães de caça.",
        },
        {
          nome: "Poodle",
          imagem:
            "https://www.patasdacasa.com.br/sites/default/files/2023-07/poodle%20pelo%20liso%20capa.jpg",
          descricao:
            "Originário da Alemanha ou França, é descendente de cães de água.",
        },
        {
          nome: "Husky Siberiano",
          imagem:
            "https://www.petz.com.br/blog/wp-content/uploads/2023/07/husky-siberiano-e-bravo.jpg",
          descricao:
            "Originário da Sibéria, é descendente de cães de trabalho do Ártico.",
        },
      ];

  return (
    <article>
    {racasDeCachorros.map((raca, index) =>(
    <section key={index} className='card-da-raca'>
        <img src={raca.imagem} alt="" />
        <section className="description">
            <h1>{raca.nome}</h1>
            <p>{raca.descricao}</p>
        </section>
    </section>
    ))}
    </article>
  )
}

export default Cards