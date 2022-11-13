import { BiSearchAlt2 } from "react-icons/bi";
export function Search() {
  return (
    <div className="grid place-items-center bg-lightv1 rounded dark:bg-darkv3 border-2 px-6 p-5 dark:border-darkv1 relative">
      <BiSearchAlt2 className="absolute left-[2.05rem] text-[1.40rem] text-darkv1/50 dark:text-lightv1/90 pointer-events-none" />
      <input
        className="w-full darkv1/30 dark:text-lightv1/30 pl-10 text-[1.10rem] dark:placeholder-lightv1/50 placeholder-darkv1/60 outline-none rounded-sm bg-lightv3 text-darkv1 dark:bg-darkv1 px-1 py-1 dark:text-lightv1/90 border-2 dark:border-darkv2"
        type="text"
        placeholder="Arama yapın"
      />
    </div>
  );
}
