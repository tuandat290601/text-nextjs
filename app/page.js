export default async function Home() {
  const res = await fetch(
    "https://ckwhite-d3ov6wzrda-as.a.run.app/api/v1.0/products"
  );

  const data = await res.json();

  return (
    <main>
      {data.responseData.rows.map((x) => (
        <h1>{x.title}</h1>
      ))}
    </main>
  );
}
