import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24 space-y-4'>
      <p className='text-xl font-semibold'>Next View Transitions Example</p>
      <Link href='/demo'>
        <Button>Generate Random Text</Button>
      </Link>
    </main>
  );
}
