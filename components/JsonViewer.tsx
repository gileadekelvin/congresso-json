'use client';
import { JsonViewer, createDataType } from '@textea/json-viewer';
import Link from 'next/link';

const JsonViewerComponent = ({ data, url }: { data: unknown; url: string }) => {
  return (
    <>
      <div className='flex flex-row gap-2 px-2 py-1'>
        <Link href='/'>
          <h1 className='text-sm font-bold text-black'>
            congresso<span className='text-gray-500'>.json</span>
          </h1>
        </Link>
        <div className='inline-block w-0.5 self-stretch bg-gray-400 opacity-100'></div>
        <a href={url} className='text-sm text-blue-800 underline' target='_blank'>
          original API
        </a>
      </div>
      <JsonViewer
        value={data}
        displayDataTypes={false}
        collapseStringsAfterLength={10000}
        sx={{
          fontSize: '14px',
        }}
        valueTypes={[
          createDataType(
            (value) =>
              typeof value === 'string' &&
              value.startsWith('https://dadosabertos.camara.leg.br/api/v2'),
            (props) => (
              <Link
                href={`/camara/${props.value.split('v2/')[1]}`}
                className='text-sm text-blue-500 underline'
              >
                {props.value}
              </Link>
            ),
          ),
        ]}
      />
    </>
  );
};

export default JsonViewerComponent;
