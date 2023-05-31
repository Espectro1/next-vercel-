import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

export default function About() {
  return (
    <>
          <h1>
            Ir a <Link href="/">Home</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>  
       
    </>
  )
}

About.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        aaaa
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
