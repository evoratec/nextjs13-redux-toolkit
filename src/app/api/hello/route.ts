import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  let parametros = {puesto_id:"ibericos-el-senorito"};
  const res = await fetch('https://api.mercadodenumancia.es/api/productos/lista', {
    method: "POST",
    body: JSON.stringify(parametros),

    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json({ data })
}
