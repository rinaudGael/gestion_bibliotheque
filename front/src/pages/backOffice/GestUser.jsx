import { useEffect, useState } from "react";
import SearchAndFilter from "../../components/SearchAndFilter";
import UsersTable from "../../components/UsersTable";

const GestUser = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("nom");
  const [order, setOrder] = useState("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, [search, sort, order]);

  const fetchUsers = async () => {
  try {
    setLoading(true);

    const params = new URLSearchParams();
    if (search) params.append("search", search);
    if (sort) params.append("sort", sort);
    if (order) params.append("order", order);

    const res = await fetch(
      `http://localhost:5001/users?${params.toString()}`
    );

    const data = await res.json();
     console.log("Données reçues :", data);
    setUsers(data);
  } catch (err) {
    console.error("Erreur fetch employés :", err);
  } finally {
    setLoading(false);
  }
};
const handleDelete = async (id)=>
{
  if(!window.confirm("Supprimer cet utilisateur ?")) return ;

  await fetch(`http://localhost:5001/users/${id}`,{
    method : "DELETE",
  });

  console.log("Utilisateur supprime , chargement...");
  
  fetchUsers();

}

  return (
    <>
      {/* TITRE */}
      <div className="flex items-center my-6">
        <span className="flex-grow border-t border-gray-300"></span>
        <h1 className="mx-4 text-2xl font-bold text-indigo-700">
          Gestion des Utilisateurs
        </h1>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>

      {/* SEARCH + TRI */}
      <SearchAndFilter
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        order={order}
        setOrder={setOrder}
      />

      {/* TABLE */}
      {loading ? (
        <p className="text-center mt-6 text-gray-500">Chargement...</p>
      ) : (
        <UsersTable users={users} onDelete={handleDelete}/>
      )}
    </>
  );
};

export default GestUser;
