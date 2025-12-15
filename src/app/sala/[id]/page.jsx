import Link from "next/link";
import styles from "./sala.module.css";

export default async function Sala({ params }) {
  const { id } = params;

  const res = await fetch(`/api/jogos?id_sala=${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>Erro ao carregar os jogos</p>;
  }

  const { jogos } = await res.json();

  const resSala = await fetch(
    `/api/salas?id=${id}`,
    { cache: "no-store" }
  );

  if (!resSala.ok) {
    return <p>Erro ao carregar a sala</p>;
  }

  const sala = await resSala.json();

  if (!sala?.nome) {
    return <p>Sala não encontrada</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Jogos do {sala.nome}
        </h1>

        <Link href="/">
          Voltar ao início
        </Link>

        <Link href="/cadastrarJogos">
          Cadastre um jogo
        </Link>
      </div>

      <div className={styles.vitrine}>
        {jogos.map((jogo) => (
          <div className={styles.card} key={jogo.id_jogo}>
            <img src={jogo.linkimagem} alt={jogo.titulo} />
            <h3>{jogo.titulo}</h3>
            <p>{jogo.categoria}</p>
            <p>{jogo.editora}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
