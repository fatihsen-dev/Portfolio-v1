import { Helmet } from "react-helmet";
import { Sidebar } from "./sidebar/Sidebar";
import { Main } from "./main/Main";

export function Blogs() {
  return (
    <div className="text-darkv1 dark:text-lightv1 h-full overflow-auto">
      <Helmet>
        <title>Blog - Fatih Şen</title>
      </Helmet>
      <div className="container mx-auto flex py-10 h-full">
        <Main />
        <Sidebar />
      </div>
    </div>
  );
}
