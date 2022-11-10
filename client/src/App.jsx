import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { MenuPopup } from "./components/MenuPopup";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Blogs } from "./pages/Blogs";
import { Projects } from "./pages/Projects";
import Login from "./pages/admin/Login";
import { Repositories } from "./pages/repositories/Repositories";
import { NotFound } from "./pages/NotFound";
import { Dashboard } from "./pages/admin/Dashboard";

function App() {
  const { darkStatus } = useSelector((state) => state.site);

  useEffect(() => {
    if (darkStatus === "true") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div className="h-full flex flex-col dark:bg-darkv4 dark:text-light bg-light text-darkv1">
      <Navbar />
      <MenuPopup />
      <div className="h-full overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
