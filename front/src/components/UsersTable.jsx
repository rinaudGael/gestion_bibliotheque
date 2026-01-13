import { Pencil, Trash2 } from "lucide-react";




const UsersTable = ({ users , onDelete}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full text-left border-collapse">
        <thead className="bg-indigo-50 text-indigo-700">
          <tr>
            <th className="p-3">Nom</th>
            <th className="p-3">Prenom</th>
            <th className="p-3">Email</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.firstname}</td>
                <td className="p-3">{user.email}</td>
                
                <td className="p-3 flex justify-center gap-3">
                  <button className="text-indigo-600 hover:text-indigo-800">
                    <Pencil size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-800" onClick={()=>onDelete(user.id)}>
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center p-6 text-gray-500">
                Aucun utilisateur trouvé
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
