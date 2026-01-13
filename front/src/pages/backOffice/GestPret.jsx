import React, { useEffect, useState } from "react";
import { Plus, CheckCircle, Trash2 } from "lucide-react";

const GestPret = () => {
  const [prets, setPrets] = useState([]);
  const [form, setForm] = useState({
    user: "",
    book: "",
    dateBorrow: "",
    dateReturn: "",
  });

  // Fonction pour récupérer tous les prêts
  const fetchPrets = async () => {
    try {
      const res = await fetch("http://localhost:5001/prets");
      const data = await res.json();
      setPrets(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPrets();
  }, []);

  // Ajouter un prêt
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5001/prets/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: form.user,
          book: form.book,
          dateBorrow: form.dateBorrow,
          dateReturn: form.dateReturn,
        }),
      });
      fetchPrets(); // Rafraîchir la liste après ajout
      setForm({ user: "", book: "", dateBorrow: "", dateReturn: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const markAsReturned = (id) => {
    setPrets(
      prets.map((p) => (p.id === id ? { ...p, status: "Rendu" } : p))
    );
  };

  const deletePret = (id) => {
    if (window.confirm("Supprimer ce prêt ?")) {
      setPrets(prets.filter((p) => p.id !== id));
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Rendu":
        return "bg-green-100 text-green-700";
      case "En retard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center my-6">
        <span className="flex-grow border-t border-gray-300"></span>
        <h1 className="mx-4 text-2xl font-bold text-indigo-700">
          Gestion des Prêts
        </h1>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input
          placeholder="Utilisateur"
          value={form.user}
          onChange={(e) => setForm({ ...form, user: e.target.value })}
          className="border rounded-lg p-2"
          required
        />
        <input
          placeholder="Livre"
          value={form.book}
          onChange={(e) => setForm({ ...form, book: e.target.value })}
          className="border rounded-lg p-2"
          required
        />
        <input
          type="date"
          value={form.dateBorrow}
          onChange={(e) => setForm({ ...form, dateBorrow: e.target.value })}
          className="border rounded-lg p-2"
          required
        />
        <input
          type="date"
          value={form.dateReturn}
          onChange={(e) => setForm({ ...form, dateReturn: e.target.value })}
          className="border rounded-lg p-2"
          required
        />
        <button className="md:col-span-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex justify-center items-center gap-2">
          <Plus size={18} /> Ajouter le prêt
        </button>
      </form>

      {/* Tableau */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-indigo-50 text-indigo-700">
            <tr>
              <th className="p-3">Utilisateur</th>
              <th className="p-3">Livre</th>
              <th className="p-3">Date d'emprunt</th>
              <th className="p-3">Retour prévu</th>
              <th className="p-3">Statut</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prets.length > 0 ? (
              prets.map((pret) => (
                <tr key={pret.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{pret.user}</td>
                  <td className="p-3">{pret.book}</td>
                  <td className="p-3">{pret.dateBorrow}</td>
                  <td className="p-3">{pret.dateReturn}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor(
                        pret.status
                      )}`}
                    >
                      {pret.status}
                    </span>
                  </td>
                  <td className="p-3 flex justify-center gap-3">
                    {pret.status !== "Rendu" && (
                      <button
                        onClick={() => markAsReturned(pret.id)}
                        className="text-green-600 hover:text-green-800"
                        title="Marquer comme rendu"
                      >
                        <CheckCircle size={20} />
                      </button>
                    )}
                    <button
                      onClick={() => deletePret(pret.id)}
                      className="text-red-600 hover:text-red-800"
                      title="Supprimer"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  Aucun prêt enregistré
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestPret;
