import { Category } from "./Category";
import { Search } from "./Search";

export function Sidebar() {
  return (
    <div className="flex flex-col gap-2">
      <Search />
      <Category />
    </div>
  );
}
