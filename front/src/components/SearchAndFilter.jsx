import { Search } from "lucide-react";

const SearchAndFilter = ({ search, setSearch, sort, setSort, order, setOrder }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-6">

      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md
                     focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Trier par</option>
        <option value="name">Nom</option>
        <option value="firstname">Prenom</option>
        <option value="email">Email</option>
      </select>

      <select
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        className="px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500"
      >
        <option value="asc">Ascendant</option>
        <option value="desc">Descendant</option>
      </select>

    </div>
  );
};

export default SearchAndFilter;
