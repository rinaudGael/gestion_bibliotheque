import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const Historique = () => {
  const [demandes, setDemandes] = useState([]);

  // Simulation d'appel API pour récupérer l'historique
  useEffect(() => {
    // Ici tu peux fetch depuis ton backend
    const fetchDemandes = async () => {
      const data = [
        { id: 1, title: "React Guide", status: "Approuvé", date: "2025-01-12" },
        { id: 2, title: "Node.js Avancé", status: "En attente", date: "2025-02-05" },
        { id: 3, title: "Design Patterns", status: "Rejeté", date: "2025-02-20" },
      ];
      setDemandes(data);
    };

    fetchDemandes();
  }, []);

  return (
    <>
      <Header />
      <section className="p-6">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Historique de vos demandes</h1>

        <div className="bg-white shadow rounded-xl overflow-x-auto">
          <table className="w-full text-left text-gray-700">
            <thead className="bg-indigo-50 text-indigo-700">
              <tr>
                <th className="p-3">Titre du livre</th>
                <th className="p-3">Date de demande</th>
                <th className="p-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {demandes.length > 0 ? (
                demandes.map((demande) => (
                  <tr key={demande.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{demande.title}</td>
                    <td className="p-3">{demande.date}</td>
                    <td className={`p-3 font-semibold ${demande.status === "Approuvé" ? "text-green-600" : demande.status === "Rejeté" ? "text-red-600" : "text-yellow-600"}`}>
                      {demande.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-6 text-gray-500">
                    Aucun historique disponible
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Historique;
