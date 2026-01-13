import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const Statistic = () => {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
    currentLoans: 0,
    loansPerMonth: [],
    booksPerCategory: [],
    usersVsLoans: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5001/statistics");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Erreur chargement statistiques :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const COLORS = ["#4f46e5", "#f59e0b", "#10b981", "#ef4444", "#a40aca", "#4eb910", "#e944ef", "#f50b78", "#40b910", "#b8a44e", "#ef4444"];

  if (loading) {
    return <p className="text-center mt-10">Chargement des statistiques...</p>;
  }

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center my-6">
        <span className="flex-grow border-t border-gray-300"></span>
        <h1 className="mx-4 text-2xl font-bold text-indigo-700">
          Statistiques
        </h1>
        <span className="flex-grow border-t border-gray-300"></span>
      </div>

      {/* CARTES */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-gray-500">Livres</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {stats.totalBooks}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-gray-500">Utilisateurs</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {stats.totalUsers}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 text-center">
          <h2 className="text-gray-500">Emprunts en cours</h2>
          <p className="text-3xl font-bold text-indigo-600">
            {stats.currentLoans}
          </p>
        </div>
      </div>

      {/* EMPRUNTS PAR MOIS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Emprunts par mois</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats.loansPerMonth}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="loans" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* LIVRES PAR CATÉGORIE */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Livres par catégorie</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={stats.booksPerCategory} dataKey="count" nameKey="categories" outerRadius={100} label>
              {stats.booksPerCategory.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} /> ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* UTILISATEURS VS EMPRUNTS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Utilisateurs vs Emprunts</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={stats.usersVsLoans}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line dataKey="users" stroke="#4f46e5" strokeWidth={2} />
            <Line dataKey="loans" stroke="#f59e0b" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
