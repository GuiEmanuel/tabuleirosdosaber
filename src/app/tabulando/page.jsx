import React from 'react'
import styles from './tabulando.module.css'
import database from '@/database/database';

export default async function tabulando() {
    const sql = 'select * from jogos where id_sala = 2'
    const responseDB = await database.query(sql);
    console.log(responseDB)
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1>Jogos do Tabulando</h1>
            
        </div>
        <hr />
        <div className={styles.vetrine}>
            {
                responseDB.rows.map(a => (
                    <div className={styles.card} key={a.id_jogo}>
                        <img src={a.linkimagem} alt=""/>
                        <h3>{a.titulo}</h3>
                        <p>{a.categoria}</p>
                        <p>{a.editora}</p>
                    </div>
                ))
            }
        </div>
    </div>
);
}
