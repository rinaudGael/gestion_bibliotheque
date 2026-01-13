import { UserCircle2Icon } from "lucide-react";  
import React from "react";
import { Link } from "react-router-dom";          

const Header = () => {
    return (
        <>
            <header className="bg-black text-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="text-2xl font-bold">
                        <h1>BIBLIONET</h1>
                    </div>

                    <nav>
                        <ul className="flex space-x-6">
                            <li><Link to="/" className="hover:text-gray-300">Accueil</Link></li>
                            <li><Link to="/emprunter" className="hover:text-gray-300">Emprunter</Link></li>
                            <li><Link to="/demande" className="hover:text-gray-300">Demande</Link></li>
                            <li><Link to="/historique" className="hover:text-gray-300">Historique</Link></li>
                        </ul>
                    </nav>

                    <div>
                        <button className="font-semibold px-4 py-2 rounded transition">
                            <UserCircle2Icon />
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
