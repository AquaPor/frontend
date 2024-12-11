import { useRouter } from 'next/router';

function Task4() {
  const router = useRouter();

  return (
    <div>
      <a href="#" onClick={() => router.push('task4two')}>Go to Home</a>
    </div>
  );
}

export default Task4;
