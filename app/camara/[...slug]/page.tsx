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

function objectToQueryParams(obj: { [key: string]: any } | undefined, url: string): string {
  if (!obj) {
    return '';
  }
  const keys = Object.keys(obj);
  const params = keys.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);

  const lastPath = url.split('/').pop(); // extrai o último caminho da URL

  if (lastPath && obj['slug'] === lastPath) {
    const slugIndex = params.findIndex((param) => param.startsWith('slug='));
    if (slugIndex !== -1) {
      params.splice(slugIndex, 1);
    }
  }

  return params.join('&');
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams?: { [key: string]: any };
}) {
  const url = `https://dadosabertos.camara.leg.br/api/v2/${params.slug?.join('/')}`;
  const queryParams = objectToQueryParams(searchParams, url);
  const urlWithParams = `${url}?${queryParams}`;
  const data = await getData(urlWithParams);

  return <JsonViewerComponent data={data} url={urlWithParams} />;
}
