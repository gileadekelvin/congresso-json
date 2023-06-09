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

function objectToQueryParams(obj: { [key: string]: any } | undefined): string {
  if (!obj) {
    return '';
  }
  const keys = Object.keys(obj);
  const params = keys
    .map((key) => {
      if (key !== 'slug') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`;
      }
      return null;
    })
    .filter((k) => !!k);

  if (params.length > 0) {
    return `&${params.join('&')}`;
  }
  return '';
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams?: { [key: string]: any };
}) {
  const queryParams = objectToQueryParams(searchParams);
  const url = `https://legis.senado.leg.br/dadosabertos/${params.slug?.join('/')}.json${queryParams}`;
  const data = await getData(url);

  return <JsonViewerComponent data={data} url={url} />;
}
