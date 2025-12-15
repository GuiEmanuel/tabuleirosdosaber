import Link from "next/link";
import styles from "./sala.module.css";

export default async function Sala({ params }) {

  const { id } = await params;

  const resJogos = await fetch(
    `http://localhost:3000/api/jogos?id_sala=${id}`,
    { cache: "no-store" } /*obriga o next a não guardar 
                           esses dados em cache*/
  );

  const resSala = await fetch(
    `http://localhost:3000/api/salas?id=${id}`,
    { cache: "no-store" }
  );


  if (!resJogos.ok) {
    throw new Error("Erro ao buscar jogos");
  }

  const jogos = await resJogos.json();
  const sala = await resSala.json();
  console.log(sala)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Jogos do {sala[0].nome}
        </h1>

        <Link href="/">
          Voltar ao início
        </Link>

        <Link href="/cadastrarJogos">
          Cadastre um jogo
        </Link>
      </div>

      <div className={styles.vitrine}>
        {jogos.map(jogo => (
          <div className={styles.card} key={jogo.id_jogo}>
            <img src={jogo.linkimagem} alt="" />
            <h3>{jogo.titulo}</h3>
            <p>{jogo.categoria}</p>
            <p>{jogo.editora}</p>
          </div>
        ))}
      </div>
    </div>
  );
}