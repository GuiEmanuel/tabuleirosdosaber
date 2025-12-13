"use client"
import React, { useState } from 'react'
import styles from './cadastrarJogos.module.css'

export default function Page() {

  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const resposta = await fetch("/api/cadastrarJogo", {
      method: "POST",
      body: formData
    });

    const resultado = await resposta.json();

    if (resultado === "ok") {
      setMensagem("Jogo cadastrado!");
    } else {
      setMensagem("Erro ao cadastrar!");
    }
  }

  return (
    <div >
      <div className={styles.header}><h1>Cadastro de Jogos</h1></div>
      <div className={styles.container}>
        <form className={styles.formulario} onSubmit={handleSubmit}>
          <label>Título do jogo</label>
          <input name="titulo" type="text" required />

          <label>Sala do jogo</label>
          <div>
            <input type="radio" name="idSala" value="1" required /> Forja
          </div>
          <div>
            <input type="radio" name="idSala" value="2" required /> Tabulando
          </div>

          <label>Categoria</label>
          <input name="categoria" type="text" required />

          <label>Editora</label>
          <input name="editora" type="text" required />

          <label>Link da imagem</label>
          <input name="linkImagem" type="text" required />

          <button type="submit">Cadastrar no Banco</button>

          {mensagem && <p>{mensagem}</p>}
        </form>
      </div>
    </div>
  )
}
