import JsonViewerComponent from '@/components/JsonViewer';

async function getData(url: string) {
  const response = await fetch(url);
  // await new Promise(r => setTimeout(r, 200000));
  const data = await response.json();
  return data;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const url = `https://dadosabertos.camara.leg.br/api/v2/${params.slug?.join('/')}`
  const data = await getData(url);

  return <JsonViewerComponent data={data} url={url} />;
}
