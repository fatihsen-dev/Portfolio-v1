import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { IoIosDocument } from "react-icons/io";
import { RiCodeBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdMail, MdOutlineClose } from "react-icons/md";
import { BiSun, BiGitRepoForked, BiCoffeeTogo } from "react-icons/bi";
import { HiOutlineMoon } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { menuActiveAction, darkHandle } from "../store/siteReducer";

export function MenuPopup() {
  const { darkStatus, menuStatus } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  return (
    <div
      style={menuStatus ? { opacity: "1", pointerEvents: "auto" } : {}}
      className="popupMenu overflow-hidden"
    >
      <div style={menuStatus ? { transform: "translateY(0)" } : {}}>
        <div className="flex items-end dark:text-lightv1">
          <MdOutlineClose
            onClick={() => dispatch(menuActiveAction())}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div>
          <span>Sayfalar</span>
          <ul>
            <NavLink onClick={() => dispatch(menuActiveAction())} to="/">
              <AiFillHome />
              <span>Ana Sayfa</span>
            </NavLink>
            <NavLink onClick={() => dispatch(menuActiveAction())} to="/blogs">
              <IoIosDocument />
              <span>Blog</span>
            </NavLink>
            <NavLink
              onClick={() => dispatch(menuActiveAction())}
              to="/projects"
            >
              <RiCodeBoxFill />
              <span>Projelerim</span>
            </NavLink>
            <NavLink
              onClick={() => dispatch(menuActiveAction())}
              to="/repositories"
            >
              <BiGitRepoForked />
              <span>Repolarım</span>
            </NavLink>
          </ul>
        </div>
        <div>
          <span>Bana Ulaş</span>
          <ul>
            <a target="_blank" href="https://github.com/fatihsen-dev">
              <FaGithub />
              <span>Github</span>
            </a>
            <a target="_blank" href="mailto:fatihydrm@outlook.com">
              <MdMail />
              <span>Mail</span>
            </a>
            <a target="_blank" href="https://www.instagram.com/fatihsen.dev/">
              <AiFillInstagram />
              <span>Instagram</span>
            </a>
            <a target="_blank" href="https://twitter.com/fatihydrmm">
              <AiOutlineTwitter />
              <span>Twitter</span>
            </a>
          </ul>
        </div>
        <div>
          <span>Daha Fazla</span>
          <ul>
            <a target="_blank" href="https://www.buymeacoffee.com/fatihsen">
              <BiCoffeeTogo />
              <span>Kahve ısmarla</span>
            </a>
          </ul>
        </div>
        <div>
          <span>Ayarlar</span>
          <ul>
            <button onClick={() => dispatch(darkHandle())}>
              {darkStatus === "true" ? <BiSun /> : <HiOutlineMoon />}
              <span>Açık Mod</span>
            </button>
            <button>
              <TbWorld />
              <span>English</span>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
