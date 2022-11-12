import { BiSearchAlt2 } from "react-icons/bi";
export function Search() {
  return (
    <div className="grid place-items-center rounded bg-darkv3 border-2 px-6 p-5 dark:border-darkv1 relative caret-lightv1/50">
      <BiSearchAlt2 className="absolute left-[2.05rem] text-[1.40rem] text-lightv1/90 pointer-events-none" />
      <input
        className="w-full pl-10 text-[1.10rem] placeholder-lightv1/50 outline-none rounded-sm bg-darkv1 px-1 py-1 text-lightv1/90 border-2 dark:border-darkv2"
        type="text"
        placeholder="Arama yapın"
      />
    </div>
  );
}
