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
              <Link href={'/senado/materia/143611'}>/senado/materia/143611</Link>
            </li>
            <li className='underline'>
              <Link href={'/senado/senador/lista/atual'}>/senado/senador/lista/atual</Link>
            </li>
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
            Os endpoints da{' '}
            <a
              className='underline'
              href='https://dadosabertos.camara.leg.br/swagger/api.html'
              target='_blank'
            >
              versão 2 dos dados abertos da Câmara
            </a>{' '}
            estão sem funcionar, provavelmente devido a um bloqueio de acesso da parte da Câmara.
          </p>
          <p className='text-gray-700'>
            Todo endpoint listado{' '}
            <a
              className='underline'
              href='https://legis.senado.leg.br/dadosabertos/docs/ui/index.html#/ListaSenadorService/listaSenadoresXml'
              target='_blank'
            >
              no web service dos dados abertos do Senado
            </a>{' '}
            funciona. Basta substituir{' '}
            <span className='font-medium text-blue-500'>legis.senado.leg.br/dadosabertos/</span> por{' '}
            <span className='font-medium text-blue-500'>congresso-json.vercel.app/senado/</span>
          </p>
        </div>
      </div>
    </main>
  );
}
