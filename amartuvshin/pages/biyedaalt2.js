import { useRouter } from "next/router";

export default function biyedaalt2() {
  const router = useRouter();
  return (
    <div>
      <button
        className="border rounded-lg bg-gray-200 p-4 font-bold mb-2 hover:bg-blue-200"
        onClick={() => {
          router.back();
        }}
      >
        back
      </button>
    </div>
  );
}