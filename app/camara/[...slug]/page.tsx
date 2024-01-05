import JsonViewerComponent from '@/components/JsonViewer';

async function getData(url: string) {
  console.log('ops')
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(JSON.stringify(response));
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
  return params.join('&');
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams?: { [key: string]: any };
}) {
  const queryParams = objectToQueryParams(searchParams);
  const url = `https://dadosabertos.camara.leg.br/api/v2/${params.slug?.join('/')}?${queryParams}`;
  const data = await getData(url);

  return <JsonViewerComponent data={data} url={url} />;
}
