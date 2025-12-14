import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Projeto Tabuleiros do Saber</h1>
        <Link href="/cadastrarJogos">
          Cadastre um jogo
        </Link>
      </div>

      <div>
        <Link href="/sala/1">
          Ver jogos do Forja
        </Link>

        <Link href="/sala/2">
          Ver jogos do Tabulando
        </Link>
      </div>
    </div>
  );
}