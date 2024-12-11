import { useRouter } from "next/router";

export default function biyedaalt2() {
  const router = useRouter();
  return (
    <div>
      <button
        className="border rounded-lg bg-gray-600 p-4 font-bold"
        onClick={() => {
          router.back();
        }}
      >
        back
      </button>
    </div>
  );
}