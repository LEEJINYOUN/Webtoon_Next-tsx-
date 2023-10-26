export default function ErrorScreen() {
  return (
    <div className="w-full h-[75vh] flex flex-col justify-center items-center">
      <div className="my-5 flex flex-col text-center">
        <span className="text-[50px] md:text-[100px] font-bold p-2">
          Not Found
        </span>
        <span className="font-bold text-sm md:text-xl p-2">
          데이터가 존재하지 않거나,
        </span>
        <span className="font-bold text-sm md:text-xl p-2">
          데이터를 요청하는 과정에서 오류가 발생했습니다.
        </span>
      </div>
      <div>
        <button
          className="w-[100px] h-[40px] text-sm md:text-base md:w-[120px] md:h-[50px] font-semibold rounded-xl border border-black hover:text-white hover:bg-black duration-300"
          onClick={() => {
            window.location.reload();
          }}
        >
          새로고침
        </button>
      </div>
    </div>
  );
}
