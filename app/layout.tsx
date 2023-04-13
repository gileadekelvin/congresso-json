import './globals.css';

export const metadata = {
  title: 'congresso.json',
  description: 'Veja a API do Congresso nacional em json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-[#fafafa]'>
        {children}
      </body>
    </html>
  );
}
