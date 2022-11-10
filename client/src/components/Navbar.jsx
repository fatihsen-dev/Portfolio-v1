import { useDispatch, useSelector } from "react-redux";
import { darkHandle } from "../store/siteReducer";
import { MdOutlineMenu } from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { menuActiveAction } from "../store/siteReducer";
import { BiSun } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const { darkStatus } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  return (
    <div className="bg-dark w-full dark:bg-darkv5 dark:text-light bg-white text-darkv1 px-3 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-3">
      <div className="container mx-auto flex justify-between py-3 select-none gap-10">
        <h2 className="text-2xl font-bold dark:font-semibold whitespace-nowrap">
          <NavLink to="/">Fatih Şen</NavLink>
        </h2>
        <ul className="hidden items-center gap-5 ml-auto font-medium 2xl:flex xl:flex lg:flex md:flex sm:hidden">
          <NavLink
            className="flex items-center gap-1 dark:hover:text-white/80 hover:text-black/80"
            to="/"
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            className="flex items-center gap-1 dark:hover:text-white/80 hover:text-black/80"
            to="/blogs"
          >
            Blog
          </NavLink>
          <NavLink
            className="flex items-center gap-1 dark:hover:text-white/80 hover:text-black/80"
            to="/projects"
          >
            Projelerim
          </NavLink>
          <NavLink
            className="flex items-center gap-1 dark:hover:text-white/80 hover:text-black/80"
            to="/repositories"
          >
            Repolarım
          </NavLink>
        </ul>
        <ul className="flex items-center gap-3 text-[22px]">
          <li
            onClick={() => dispatch(menuActiveAction())}
            className="cursor-pointer bg-light text-darkv3 dark:text-light p-1.5 dark:bg-darkv3 grid place-items-center rounded-full"
          >
            <MdOutlineMenu />
          </li>
          <li
            onClick={() => dispatch(darkHandle())}
            className="cursor-pointer bg-light text-darkv3 dark:text-light p-1.5 dark:bg-darkv3 grid place-items-center rounded-full"
          >
            {darkStatus === "true" ? <BiSun /> : <HiOutlineMoon />}
          </li>
        </ul>
      </div>
    </div>
  );
}
