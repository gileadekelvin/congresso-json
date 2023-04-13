import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Navbar />
      <div className='m-auto flex min-h-screen max-w-4xl flex-col gap-16 py-16'>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='text-2xl font-bold text-black md:text-6xl'>
            congresso<span className='text-gray-500'>.json</span>
          </h1>
          <p className='text-sm font-normal text-gray-500 dark:text-gray-400 md:text-lg'>
            A API da Câmara e do Senado visualizada em um JSON com navegação de links e sem as
            dificuldades de leitura de um XML tradicional
          </p>
        </div>
        <div className='flex flex-col gap-4 p-2'>
          <h3 className='text-xl font-medium'>Exemplos</h3>
          <ul className='max-w-xl list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400'>
            <li className='underline'>
              <Link href={'/camara/proposicoes/2192459'}>/camara/proposicoes/2192459</Link>
            </li>
            <li className='underline'>
              <Link href={'/camara/deputados/178990'}>/camara/deputados/178990</Link>
            </li>
            <li className='underline'>
              <Link href={'/camara/orgaos/180'}>/camara/orgaos/180</Link>
            </li>
          </ul>
          <p className='text-gray-700'>
            Todo endpoint da{' '}
            <a
              className='underline'
              href='https://dadosabertos.camara.leg.br/swagger/api.html'
              target='_blank'
            >
              versão 2 dos dados abertos da Câmara
            </a>{' '}
            funciona. Basta substituir{' '}
            <span className='font-medium text-blue-500'>
              https://dadosabertos.camara.leg.br/api/v2/
            </span>{' '}
            por <span className='font-medium text-blue-500'>congresso-json.vercel.app/camara/</span>
          </p>
          <p className='text-gray-800'>A API do Senado será disponibilizada em breve!</p>
        </div>
      </div>
    </main>
  );
}
