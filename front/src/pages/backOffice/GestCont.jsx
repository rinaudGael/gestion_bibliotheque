import React, { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

const GestCont = () => {
  const [livres, setLivres] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    quantity: "",
  });
  const [editId, setEditId] = useState(null);

  const fetchLivres =  async ()=>{
    try{
      const response = await fetch("http://localhost:5001/livres");
      const data = await response.json();
      setLivres(data);
    }catch(err)
    {
        console.error("Erreur chargement livres :", err);
        
    }
  };
  useEffect(()=>{
    fetchLivres();
  },[]);



 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editId) {
      await fetch(`http://localhost:5001/livres/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("http://localhost:5001/livres", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
    }

    setForm({ title: "", author: "", category: "", quantity: "" });
    setEditId(null);
    fetchLivres();
  } catch (err) {
    console.error("Erreur lors de la soumission :", err);
  }
};


    const handleEdit = (livre) => {
    setForm({
      title: livre.titre,
      author: livre.auteur,
      category: livre.categorie,
      quantity: livre.quantite,
    });
    setEditId(livre.id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce livre ?")) return;

    try {
      await fetch(`http://localhost:5001/livres/${id}`, {
        method: "DELETE",
      });
      fetchLivres();
    } catch (err) {
      console.error("Erreur suppression :", err);
    }
  };
  const filteredLivres = livres.filter((l) =>
  l.titre.toLowerCase().includes(search.toLowerCase())
);


   return (
    <div className="p-6">
      <div className="flex items-center my-6">
        <span className="flex-grow border-t border-gray-300"></span>
        <h1 className="mx-4 text-2xl font-bold text-indigo-700">
          Gestion des Livres
        </h1>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>

      {/* FORMULAIRE */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input
          placeholder="Titre"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border rounded-lg p-2"
          required
        />
        <input
          placeholder="Auteur"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
          className="border rounded-lg p-2"
          required
        />
        <input
          placeholder="Catégorie"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="border rounded-lg p-2"
          required
        />
        <input
          type="number"
          placeholder="Quantité"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          className="border rounded-lg p-2"
          required
        />

        <button className="md:col-span-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex justify-center items-center gap-2">
          <Plus size={18} />
          {editId ? "Modifier le livre" : "Ajouter le livre"}
        </button>
      </form>

      {/* RECHERCHE */}
      <div className="flex items-center gap-2 mb-4">
        <Search size={18} className="text-gray-500" />
        <input
          placeholder="Rechercher un livre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/3"
        />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-indigo-50 text-indigo-700">
            <tr>
              <th className="p-3 text-left">Titre</th>
              <th className="p-3">Auteur</th>
              <th className="p-3">Catégorie</th>
              <th className="p-3">Quantité</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredLivres.length > 0 ? (
              filteredLivres.map((livre) => (
                <tr key={livre.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{livre.titre}</td>
                  <td className="p-3">{livre.auteur}</td>
                  <td className="p-3">{livre.categories}</td>
                  <td className="p-3 text-center">{livre.quantite}</td>
                  <td className="p-3 flex justify-center gap-3">
                    <button
                      onClick={() => handleEdit(livre)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(livre.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  Aucun livre trouvé
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GestCont;
