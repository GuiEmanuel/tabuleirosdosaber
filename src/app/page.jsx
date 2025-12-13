import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Projeto Tabuleiros do Saber</h1>
        <Link href="/cadastrarJogos">
          Cadastre um jogo
        </Link>
      </div>

      <div>
        <Link href="/forja">
          Ver jogos do forja
        </Link>
        <Link href="/tabulando">
          Ver jogos do tabulando
        </Link>
      </div>
    </div>
  );
}