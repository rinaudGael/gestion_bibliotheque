import React from "react";
import { Sidebar, SidebarItem } from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import {
  ArrowUpLeftFromSquareIcon,
  Book,
  LayoutDashboard,
  User,
} from "lucide-react";

const Admin = () => {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar>
        <SidebarItem to="/admin/statistics" icon={<LayoutDashboard size={20} />}text="Statistics"/>
        <SidebarItem to="/admin/gestion_utilisateurs"icon={<User size={20} />}text="Utilisateurs"/>
        <SidebarItem to="/admin/gestion_contenu"icon={<Book size={20} />}text="Gestion de Contenu"/>
        <SidebarItem to="/admin/gestion_pret"icon={<ArrowUpLeftFromSquareIcon size={20} />}text="Gestion de Prêt"/>
      </Sidebar>

      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>


    </div>
  );
};

export default Admin;
