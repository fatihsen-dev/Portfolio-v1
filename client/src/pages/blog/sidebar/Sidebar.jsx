import { Category } from "./Category";
import { Search } from "./Search";

export function Sidebar() {
  return (
    <div className="gap-2 flex-col 2xl:flex xl:flex lg:hidden hidden">
      <Search />
      <Category />
    </div>
  );
}
