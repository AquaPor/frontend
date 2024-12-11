import { useRouter } from 'next/router';

function Task4() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <a href="#" onClick={handleBack}>Go Back</a>
    </div>
  );
}

export default Task4;
