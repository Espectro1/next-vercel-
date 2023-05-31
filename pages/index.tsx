
import { MainLayout } from '../components/layouts/MainLayout';
import Link from 'next/link';

export default function Home() {

  return (
    <MainLayout>
          <h1>
            Ir a <Link href="/about">About</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>     
    </MainLayout>
  )

}
