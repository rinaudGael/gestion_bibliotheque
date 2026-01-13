import React from "react";
import bgi from "../../assets/bgimage.jpg";
import Header from "../../components/Header";
import Reveal from "../../components/Reveal";
const UserPage = () => {
  return (
    <>
      <Header />

      {/* HERO SECTION (existant) */}
      <Reveal>
        <section
          className="relative h-[360px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bgi})` }}
        >
          <div className="p-24">
            <h1 className="text-center text-5xl text-white font-semibold">
              Vous êtes passionnés par les livres ? <br />
              BIBLIONET est là pour vous !
            </h1>
            <div className="flex items-center justify-center pt-5">
              <button className="bg-white w-[120px] h-12 rounded-md flex items-center justify-center hover:bg-slate-300">
                Cliquez ici
              </button>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PRESENTATION */}
      <Reveal>
        <section className="py-16 px-8 bg-gray-50">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Pourquoi choisir BIBLIONET ?
          </h2>
          <p className="text-center max-w-3xl mx-auto text-gray-600">
            BIBLIONET est une plateforme moderne de gestion de bibliothèque
            qui permet aux lecteurs de découvrir, emprunter et gérer leurs livres
            facilement, partout et à tout moment.
          </p>
        </section>
      </Reveal>

      {/* SERVICES */}
      <Reveal>
        <section className="py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">📚 Catalogue riche</h3>
              <p className="text-gray-600">
                Accédez à une large collection de livres classés par catégories et auteurs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">🔍 Recherche rapide</h3>
              <p className="text-gray-600">
                Trouvez rapidement vos livres préférés grâce à un moteur de recherche simple.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold mb-2">📖 Emprunt simplifié</h3>
              <p className="text-gray-600">
                Empruntez des livres en quelques clics et suivez vos emprunts en temps réel.
              </p>
            </div>

          </div>
        </section>
      </Reveal>

      {/* STATISTIQUES SIMPLES */}
      <Reveal>
        <section className="py-16 px-8 bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
            
            <div>
              <h3 className="text-4xl font-bold text-indigo-600">500+</h3>
              <p className="text-gray-600">Livres disponibles</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">200+</h3>
              <p className="text-gray-600">Utilisateurs actifs</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-indigo-600">1 200+</h3>
              <p className="text-gray-600">Emprunts réalisés</p>
            </div>

          </div>
        </section>
      </Reveal>

      {/* CALL TO ACTION */}
      <Reveal>
        <section className="py-16 px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Prêt à commencer votre aventure littéraire ?
          </h2>
          <p className="text-gray-600 mb-6">
            Inscrivez-vous dès maintenant et plongez dans l’univers de la lecture.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800">
            Découvrir les livres
          </button>
        </section>
      </Reveal>
    </>
  );
};

export default UserPage;
