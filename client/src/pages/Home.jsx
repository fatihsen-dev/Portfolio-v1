import profilePhoto from "../assets/image/logo.png";
import Circle from "../components/Circle";
import { Helmet } from "react-helmet";

export function Home() {
  return (
    <div className="container h-full mx-auto flex items-start pt-3 2xl:pt-24 xl:pt-24 lg:pt-10 md:pt-3 sm:pt-3 2xl:px-0 xl:px-0 lg:px-0 md:px-0 sm:px-3 px-3">
      <Helmet>
        <title>Anasayfa - Fatih Şen</title>
      </Helmet>
      <div className="grid place-items-center flex-1 2xl:min-h-[600px] xl:min-h-[600px] lg:min-h-0 md:min-h-0 sm:min-h-0 min-h-0">
        <div className="flex 2xl:gap-5 xl:gap-5 border-[3px] dark:border-darkv4 lg:gap-10 sm:gap-5 gap-5 dark:text-lightv2 rounded bg-lightv2 dark:bg-darkv1 2xl:p-10 xl:p-10 lg:p-10 md:p-10 sm:p-5 p-5 2xl:pt-14 xl:pt-14 2xl:pb-28 xl:pb-28 lg:py-14 md:py-14 sm:py-14 py-8 items-center 2xl:w-[500px] xl:w-[500px] lg:w-full md:w-full sm:w-full w-full 2xl:flex-col xl:flex-col lg:flex-row md:flex-row sm:flex-col flex-col justify-start">
          <img
            className="w-24 rounded-full"
            src={profilePhoto}
            alt={profilePhoto}
          />
          <span className="text-center font-medium leading-6 tracking-[0.002em] 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg text-base">
            Merhaba ben Fatih, Türkiye'de yaşıyorum ve Front-end developerim. Şu
            anda kendimi Full-Stack alanında geliştiriyorum, öğrenmeyi ve
            araştırmayı seviyorum. Boş zamanlarımda oyun oynamayı ve diğer
            geliştiriciler ile bilgi alışverişi yapmayı seviyorum.
          </span>
        </div>
      </div>
      <div className="flex-1 relative hidden 2xl:block xl:block lg:hidden md:hidden sm:hidden overflow-hidden">
        <div className="grid place-items-center flex-1 h-full relative min-h-[600px]">
          <Circle />
        </div>
      </div>
    </div>
  );
}
