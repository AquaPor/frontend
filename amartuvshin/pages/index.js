import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleNavigation = (url) => {
    router.push(url);
  };

  return (
    <div className="h-[100vh] w-[100%] bg-red-400">
      
    </div>
  );
}
