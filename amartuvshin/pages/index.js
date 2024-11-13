import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#f0f0f0]">
      <div className="h-[95vh] w-[50%] bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-8">
          <div className="w-[150px] h-[150px] mr-6">
            <Image
              src="/aquapfp.png"
              alt="Aqua"
              width={120}
              height={120}
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#574a28]">Amartuvshin Sergelen</h1>
            <h2 className="text-2xl text-[#574a28]">Aqua</h2>
          </div>
        </div>

        <div className="mb-8">
  <h3 className="text-2xl font-semibold text-[#574a28] mb-4">Summary</h3>
  <p className="text-lg text-gray-700">
    Amartuvshin is a skilled web developer with a passion for gaming, often dedicating a significant amount of time to playing games.
  </p>
</div>

<div className="mb-8">
  <h3 className="text-2xl font-semibold text-[#574a28] mb-4">Experience</h3>
  <div className="mb-4">
    <h4 className="text-xl font-bold text-[#574a28]">Founder & CEO - Amartuvshin Web Solutions</h4>
    <p className="text-md text-gray-700">2015 - Present</p>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Founded Amartuvshin Web Solutions to provide custom web development services to businesses.</li>
      <li>Specialized in creating responsive websites and web applications.</li>
      <li>Worked on projects ranging from e-commerce platforms to interactive media sites.</li>
    </ul>
  </div>
</div>

<div className="mb-8">
  <h3 className="text-2xl font-semibold text-[#574a28] mb-4">Skills</h3>
  <ul className="list-inside list-disc text-lg text-gray-700">
    <li>Web Development (HTML, CSS, JavaScript, React)</li>
    <li>Gaming (Competitive gaming, Game design principles)</li>
    <li>Problem Solving & Debugging</li>
    <li>Project Management & Team Leadership</li>
    <li>UI/UX Design</li>
  </ul>
</div>


        <div>
          <h3 className="text-2xl font-semibold text-[#574a28] mb-4">Contact</h3>
          <p className="text-lg text-gray-700">Email: amartuvshin@gmail.com</p>
          <p className="text-lg text-gray-700">Website: <a href="https://www.mrbeast.com" className="text-blue-500">www.amartuvshin.com</a></p>
        </div>
      </div>
    </div>
  );
}



