import database from "@/database/database";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const titulo = formData.get("titulo");
    const idSala = formData.get("idSala");
    const categoria = formData.get("categoria");
    const editora = formData.get("editora");
    const linkImagem = formData.get("linkImagem");

    const sql = `
      INSERT INTO jogos (id_sala, titulo, categoria, editora, linkImagem)
      VALUES ($1, $2, $3, $4, $5)
    `;

    const values = [idSala, titulo, categoria, editora, linkImagem];

    await database.query(sql, values);

    return Response.json("ok");
  } catch (erro) {
    console.error(erro);
    return Response.json("erro");
  }
}
