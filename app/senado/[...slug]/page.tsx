import JsonViewerComponent from '@/components/JsonViewer';

async function getData(url: string) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  const url = `https://legis.senado.leg.br/dadosabertos/${params.slug?.join('/')}.json`;
  const data = await getData(url);

  return <JsonViewerComponent data={data} url={url} />;
}
