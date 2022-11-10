import html from "../assets/image/langIcon/html.svg";
import css from "../assets/image/langIcon/css.svg";
import javascript from "../assets/image/langIcon/js.svg";
import git from "../assets/image/langIcon/git.svg";
import github from "../assets/image/langIcon/github.svg";
import stack from "../assets/image/langIcon/stack.svg";
import sass from "../assets/image/langIcon/sass.svg";
import bootstrap from "../assets/image/langIcon/bootstrap.svg";
import tailwind from "../assets/image/langIcon/tailwind.svg";
import react from "../assets/image/langIcon/react.svg";
import nodejs from "../assets/image/langIcon/nodejs.svg";
import mongodb from "../assets/image/langIcon/mongodb.svg";

export default function LightCircle() {
   return (
      <>
         <div className='circle circle4'>
            <div className='lang-icon-bg'>
               <img src={react} alt={react} />
            </div>
            <div className='lang-icon-bg'>
               <img src={nodejs} alt={nodejs} />
            </div>
            <div className='lang-icon-bg'>
               <img src={mongodb} alt={mongodb} />
            </div>
         </div>
         <div className='circle circle3'>
            <div className='lang-icon-bg'>
               <img src={sass} alt={sass} />
            </div>
            <div className='lang-icon-bg'>
               <img src={tailwind} alt={tailwind} />
            </div>
            <div className='lang-icon-bg'>
               <img src={bootstrap} alt={bootstrap} />
            </div>
         </div>
         <div className='circle circle2'>
            <div className='lang-icon-bg'>
               <img src={git} alt={git} />
            </div>
            <div className='lang-icon-bg'>
               <img src={github} alt={github} />
            </div>
            <div className='lang-icon-bg'>
               <img src={stack} alt={stack} />
            </div>
         </div>
         <div className='circle circle1'>
            <div className='lang-icon-bg'>
               <img src={css} alt={css} />
            </div>
            <div className='lang-icon-bg'>
               <img src={html} alt={html} />
            </div>
            <div className='lang-icon-bg'>
               <img src={javascript} alt={javascript} />
            </div>
         </div>
      </>
   );
}
