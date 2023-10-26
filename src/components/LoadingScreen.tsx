import { BarLoader } from "react-spinners";

export default function LoadingScreen() {
  return (
    <div className="w-full h-[75vh] flex flex-col justify-center items-center">
      <BarLoader color="#4c36d6" width={300} height={10} loading />
      <div className="mt-5 flex flex-col text-center">
        <span className="font-bold text-base md:text-xl p-2">
          데이터를 불러오는 중입니다.
        </span>
        <span className="font-bold text-base md:text-xl p-2">
          잠시만 기다려 주세요.
        </span>
      </div>
    </div>
  );
}
