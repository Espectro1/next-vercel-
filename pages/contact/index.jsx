import { Inter } from 'next/font/google'
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <MainLayout>
          <h1>
            Ir a <Link href="/">Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>     
    </MainLayout>
  )
}
