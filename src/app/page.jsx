import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        
        <h1>
          Projeto Tabuleiros do Saber
        </h1>

        <Link href="/cadastrarJogos">
          Cadastre um jogo
        </Link>
      </div>

      <div className={styles.salas}>

        <Link href="/sala/1">
          Ver jogos do Forja
        </Link>

        <Link href="/sala/2">
          Ver jogos do Tabulando
        </Link>
      </div>

      <div className={styles.descricao}>

        <h3>
          Objetivos
        </h3>

        <p>
          1) Educação: Oferecer uma alternativa pedagógica lúdica e 
          interativa para substituir o uso excessivo de telas e celulares, 
          fortalecendo o aprendizado de disciplinas estratégicas. 
        </p>
        <p>2) 
          Cultura: Valorizar a identidade regional, promovendo o resgate da 
          história e tradições locais por meio da criação e uso de jogos de 
          tabuleiro. 
        </p>
        <p>
          3) Desenvolvimento Cognitivo: Estimular habilidades 
          socioemocionais e cognitivas em crianças e adolescentes, 
          principalmente aqueles em situação de vulnerabilidade social.
        </p>
      </div>
    </div>
  );
}