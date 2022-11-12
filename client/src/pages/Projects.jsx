import { Helmet } from "react-helmet";

export function Projects() {
  return (
    <div className="text-darkv1 dark:text-lightv1 h-full">
      <Helmet>
        <title>Projelerim - Fatih Şen</title>
      </Helmet>
      <div className="container mx-auto grid place-items-center h-full">
        <h1 className="2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-lg text-base">
          Projelerim sayfası yapım aşamasında :)
        </h1>
      </div>
    </div>
  );
}
