import React from 'react'
import styles from './forja.module.css'
import database from '@/database/database';

export default async function forja() {
    const sql = 'SELECT * FROM jogos WHERE id_sala = 1'
    const responseDB = await database.query(sql);
    console.log(responseDB)
  return (
    <div className={styles.container}>
        <div className='header'>
            <h1>Jogos do Forja</h1>
        </div>
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
