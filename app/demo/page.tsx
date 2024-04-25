import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

export default function Home() {
  function generateRandomWord() {
    return Math.random().toString(36).substring(2, 7);
  }
  function generateRandomText(length: Number) {
    return Array(length)
      .fill(0)
      .map(() => generateRandomWord())
      .join(' ');
  }
  return (
    <div className='flex min-h-screen flex-col items-center p-24 space-y-4'>
      <p className='text-xl font-semibold'>Next View Transitions Example</p>
      <Link href='/'>
        <Button>Go Home</Button>
      </Link>
      <p className='font-light italic'>{generateRandomText(500)}</p>
    </div>
  );
}
