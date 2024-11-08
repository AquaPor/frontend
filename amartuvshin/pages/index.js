import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#35281d]">
      <div className="h-[70vh] w-[60%] bg-[#b74f6f] grid grid-cols-1 flex justify-center items-start border-x-4 rounded border-black p-6">
      
        <div className="h-[26vh] w-[30%] bg-[#3185fc] flex justify-center items-center rounded overflow-hidden ml-[34vh]">
          <Image
            src="/mrbeast.jpg"
            alt="MrBeast"
            width={200} 
            height={200}     
            objectFit="cover"
          />
        </div>

        <h1 className="text-indigo-500 text-4xl text-center font-bold">MrBeast</h1>

        <p className="text-white text-lg text-center">
          Hi, I'm MrBeast.
        </p>

        <div className="flex justify-center gap-4">
          <a href="https://www.youtube.com/c/MrBeast6000" target="_blank" rel="noopener noreferrer" className="text-white text-lg underline">
            YouTube
          </a>
          <a href="https://www.instagram.com/mrbeast" target="_blank" rel="noopener noreferrer" className="text-white text-lg underline">
            Instagram
          </a>
          <a href="https://twitter.com/MrBeast" target="_blank" rel="noopener noreferrer" className="text-white text-lg underline">
            Twitter
          </a>
        </div>

      </div>
    </div>
  );
}


