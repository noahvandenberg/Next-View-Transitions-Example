import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

export default function Home() {
  return (
    <main className='min-h-screen flex justify-center items-center p-24 space-x-4'>
      <Link href='/clickme'>
        <p className='text-sm font-semibold'>Click Me</p>
      </Link>
    </main>
  );
}
