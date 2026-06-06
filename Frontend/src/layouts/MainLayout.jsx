import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Header />

        {children}

      </div>

    </div>
  );
}

export default MainLayout;