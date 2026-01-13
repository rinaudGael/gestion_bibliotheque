import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
const Emprunter = () => {
  
  // Pop-up de confirmation
  
  const [showConfirm, setShowConfirm] =  useState(false);
  const [selectedBook ,  setSelectedBook] = useState(null);
  
  const handleBorrowClick = (book)=>
    {
    if(book.quantite == 0) return ;
    setSelectedBook(book);
    setShowConfirm(true);
  };

  const handleConfirmBorrow = async (book)=>{
    try{
      const res = await fetch('http://localhost:5001/emprunt',{
        method: 'POST',
        headers: {'Cpntent-Type': 'application/json'},
        body: JSON.stringify({ livreId : book.id,userId: 7})
      });

      const ticket = await res.blob();
      const url = window.URL.createObjectURL(ticket);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `ticket_${book.titre}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();

      setShowConfirm(false);
      fetchBooks();
    } catch(err)
    {
      console.error(err);
    }
  }
  
  // Etat pour la liste des livres
  
    const [listBooks, setListBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

  const userId = 7; // Exemple, à récupérer depuis ton auth

  const fetchBooks = async (pageNumber = 1) => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5001/emprunt/livres?page=${pageNumber}&limit=6`);
      const data = await res.json();
      setListBooks(data.books);
      setTotalPages(data.totalPages);
      setPage(data.page);
    } catch (err) {
      console.error("Erreur fetch livres :", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEmprunt = async (livreId) => {
    try {
      const res = await fetch("http://localhost:5001/emprunt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, livre_id: livreId }),
      });
      const data = await res.json();
      alert(data.message);
      fetchBooks(page); // rafraîchir la liste
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  return (
    <>
      <Header />
      <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && <p>Chargement...</p>}
        {!loading &&
          listBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{book.titre}</h2>
                <p>{book.auteur}</p>
                <p>{book.categories}</p>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full ${book.quantite > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {book.quantite > 0 ? "Disponible" : "Indisponible"}
                </span>
              </div>
              <button
                disabled={book.quantite === 0}
                onClick={() => handleBorrowClick(book)}
                className="mt-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-2 rounded-lg"
              >
                Emprunter
              </button>
            </div>
          ))}

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => fetchBooks(i + 1)}
            className={`px-4 py-2 rounded ${page === i + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
        { showConfirm && (
          <div className="fixed inset-0 bg-black border-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Confirmer l'emprunt</h2>
              <p className="mb-4">Êtes-vous sûr de vouloir emprunter ce livre : "{selectedBook.titre}" ?</p>
              <div className="flex justify-end gap-4 mt-6">
                <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={()=>setShowConfirm(false)}>Annuler</button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg" onClick={()=> handleConfirmBorrow(selectedBook)}>Confirmer</button>
              </div>
            </div>
          </div>
        )

        }
    </>
  );
};

export default Emprunter;
