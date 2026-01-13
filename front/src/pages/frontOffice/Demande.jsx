import React from "react";
import Header from "../../components/Header";

const Demande = () => {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Demande d’ajout de livre
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Vous ne trouvez pas le livre que vous cherchez ?  
          Proposez-nous un livre à ajouter à la bibliothèque.
        </p>
      </section>

      {/* POURQUOI */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Pourquoi faire une demande ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">📚 Enrichir la bibliothèque</h3>
            <p className="text-gray-600 text-sm">
              Aidez-nous à proposer plus de livres utiles à tous les lecteurs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">🤝 Partage de connaissances</h3>
            <p className="text-gray-600 text-sm">
              Vos suggestions améliorent l’accès à la connaissance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">🚀 Processus rapide</h3>
            <p className="text-gray-600 text-sm">
              Chaque demande est étudiée par un administrateur.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6">
            Formulaire de demande
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Titre du livre
              </label>
              <input
                type="text"
                placeholder="Ex: L'Alchimiste"
                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Auteur
              </label>
              <input
                type="text"
                placeholder="Ex: Paulo Coelho"
                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Catégorie
              </label>
              <input
                type="text"
                placeholder="Roman, Science, Informatique..."
                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message (optionnel)
              </label>
              <textarea
                rows="4"
                placeholder="Pourquoi recommandez-vous ce livre ?"
                className="w-full border rounded-md p-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
            >
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">
          Comment ça marche ?
        </h2>

        <ol className="space-y-4 text-gray-700">
          <li>1️⃣ Vous soumettez votre demande</li>
          <li>2️⃣ Un administrateur vérifie les informations</li>
          <li>3️⃣ Le livre est ajouté s’il est validé</li>
          <li>4️⃣ Vous pouvez l’emprunter dès sa disponibilité</li>
        </ol>
      </section>
    </>
  );
};

export default Demande;
