// so thi is the layout file and all the files present in the dashboard folder
// this file be present in evry of them

import { ModalProvider } from "@/providers/modal-provider";
import Navbar from "./_components/Navbar";
import Org_sidebar from "./_components/Org-sidebar";
import Sidebar from "./_components/Sidebar/Index";


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <main className="h-full">
      <Sidebar />
      <div className="h-full pl-[60px]">
        <div className="flex gap-x-3 h-full">
          <Org_sidebar />
          <div className="h-full flex-1">
            <Navbar />
            <ModalProvider />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default dashboardLayout;
