import database from "@/database/database";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const titulo = formData.get("titulo");
    const idSala = formData.get("idSala");
    const categoria = formData.get("categoria");
    const editora = formData.get("editora");
    const linkImagem = formData.get("linkImagem");

    if (!titulo || !idSala || !categoria || !editora || !linkImagem) {
      return Response.json(
        { error: "Dados incompletos" },
        { status: 400 }
      );
    }

    const sql = `
      INSERT INTO jogos (id_sala, titulo, categoria, editora, linkImagem)
      VALUES ($1, $2, $3, $4, $5)
    `;

    const values = [idSala, titulo, categoria, editora, linkImagem];

    await database.query(sql, values);

    return Response.json(
      { status: "ok" },
      { status: 201 }
    );

  } catch (erro) {
    console.error(erro);
    return Response.json(
      { error: "Erro ao cadastrar jogo" },
      { status: 500 }
    );
  }
}
