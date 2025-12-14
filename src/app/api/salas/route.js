import database from "@/database/database";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const idSala = searchParams.get("id");

    if (!idSala) {
      return Response.json(
        { error: "id é obrigatório" },
        { status: 400 }
      );
    }

    const sql = `
      SELECT * 
      FROM salasdejogos 
      WHERE id = $1
    `;

    const responseDB = await database.query(sql, [idSala]);

    return Response.json(responseDB.rows, { status: 200 });

  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Erro ao buscar a sala" },
      { status: 500 }
    );
  }
}