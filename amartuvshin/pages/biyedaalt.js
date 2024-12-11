import { useRouter } from "next/router";

const data = [
  { id: 1, firstname: "Amartuvshin", age: 16, hobby: "Reading" },
  { id: 2, firstname: "Batjargal", age: 17, hobby: "Soccer" },
  { id: 3, firstname: "Chuluun", age: 16, hobby: "Coding" },
  { id: 4, firstname: "Dulguun", age: 15, hobby: "Painting" },
  { id: 5, firstname: "Enkhzaya", age: 18, hobby: "Swimming" },
  { id: 6, firstname: "Farkhat", age: 17, hobby: "Traveling" },
  { id: 7, firstname: "Gantulga", age: 16, hobby: "Photography" },
  { id: 8, firstname: "Hassan", age: 15, hobby: "Basketball" },
  { id: 9, firstname: "Ireedui", age: 16, hobby: "Cycling" },
  { id: 10, firstname: "Jargal", age: 17, hobby: "Cooking" },
  { id: 11, firstname: "Khuslen", age: 15, hobby: "Music" },
  { id: 12, firstname: "Lkhagva", age: 18, hobby: "Fishing" },
  { id: 13, firstname: "Munkh", age: 16, hobby: "Video games" },
  { id: 14, firstname: "Nomin", age: 17, hobby: "Writing" },
  { id: 15, firstname: "Oyun", age: 16, hobby: "Yoga" },
  { id: 16, firstname: "Punak", age: 15, hobby: "Running" },
  { id: 17, firstname: "Saruul", age: 18, hobby: "Dancing" },
  { id: 18, firstname: "Tugsjargal", age: 16, hobby: "Skating" },
  { id: 19, firstname: "Uuganbaatar", age: 17, hobby: "Gardening" },
  { id: 20, firstname: "Zolzaya", age: 15, hobby: "Baking" },
];


export default function biyedaalt() {
  const router = useRouter();
  return (
    <div className="bg-slate-700 h-[90vh]">
      <p className="text-center font-bold text-xl my-10">Бие даалт</p>
      <div className="flex items-center justify-center">
        <button
          className="border rounded-lg bg-gray-600 p-4 font-bold mb-2 "
          onClick={() => {
            router.push("biyedaalt2");
          }}
        >
        biyedaalt2luu
        </button>
      </div>
      <div className="flex items-center flex-col space-y-4 border rounde-lg mx-20">
        <p className="font-semibold my-4">Шаардлага:</p>
        <li>UI/UX design (10 оноо)</li>
        <li>
          Ангийнхаа бүх хүүхдийн мэдээллийг JSON датагаар оруулах (5 оноо)
        </li>
        <li>
          Ангийнхаа бүх хүүхдийн мэдээллийг student хуудсанд List болон Grid
          жагсаалтаар харуулах (5 оноо)
        </li>
        <li>Сурагчдийн нэрээр хайдаг байх (10 оноо)</li>
        <li>Github дээр байршсан байх (5оноо)</li>
      </div>
    </div>
  );
}