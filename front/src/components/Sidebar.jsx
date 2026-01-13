import React, { useState, useContext, createContext } from "react";
import logo from "../assets/react.svg";
import profil from "../assets/9334178.jpg";
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarContext = createContext({ expanded: true });

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className={` ${expanded ? "w-64" : "w-16"} transition-all duration-300`}>
      <div className="flex flex-col h-full bg-white border-r shadow-sm">

        {/* Logo + Toggle */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${expanded ? "w-10 ml-3" : "w-0"}`}
            alt="Logo"
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        {/* Items */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 flex flex-col px-3">{children}</ul>
        </SidebarContext.Provider>

        {/* Footer */}
        <div className="border-t flex p-3 sticky bottom-0 bg-white">
      <img src={profil} alt="" className="w-10 h-10 rounded-md" />
      <div
        className={`flex justify-center transition-all overflow-hidden ${
          expanded ? "w-52 ml-3" : "w-0 ml-0"
        }`}
      >
        <div className="leading-4 flex-1">
          <h4 className="font-semibold">Admin</h4>
          <span className="text-xs text-gray-600">admin@gmail.com</span>
        </div>
        <MoreVertical size={20} />
      </div>
    </div>
      </div>
    </aside>
  );
}


export function SidebarItem({ icon, text, to, alert }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { expanded } = useContext(SidebarContext);

  const active = location.pathname === to;

  const handleClick = () => navigate(to);

  return (
    <li
      onClick={handleClick}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group
        ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
    >
      {icon}

      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
        {text}
      </span>

      {alert && <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-400" />}

      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {text}
        </div>
      )}
    </li>
  );
}
