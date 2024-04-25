import { Link } from 'next-view-transitions';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center p-24'>
      <p>Next View Transitions Example</p>
      <div>
        <Link href='/'>
          <p>Click me</p>
        </Link>
      </div>
    </div>
  );
}
