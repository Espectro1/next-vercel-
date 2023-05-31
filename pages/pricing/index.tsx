import { Inter } from 'next/font/google'
import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Pricing() {
  return (
    <MainLayout>

      <h1>Pricing </h1>
          <h1>
            Ir a <Link href="/">Home</Link>
          </h1>
          <p>
           Estas en Pricing
            <code className={'code'}>pages/index.tsx</code>
          </p>     
    </MainLayout>
  )
}
