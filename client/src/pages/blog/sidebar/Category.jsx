export function Category() {
  return (
    <div className="grid 2xl:grid-cols-2 xl:grid-cols-1 whitespace-nowrap overflow-auto rounded bg-darkv3 border-2 px-6 p-5 dark:border-darkv1 relative caret-lightv1/50 gap-2">
      <span className="sidebar-category-items">#Full-Stack</span>
      <span className="sidebar-category-items">#Front-End</span>
      <span className="sidebar-category-items">#Back-End</span>
      <span className="sidebar-category-items">#Veri-Tabanı</span>
      <span className="sidebar-category-items">#Püf-Noktalar</span>
      <span className="sidebar-category-items">#Mobil-Geliştirme</span>
      <span className="sidebar-category-items">#Diğer</span>
    </div>
  );
}
