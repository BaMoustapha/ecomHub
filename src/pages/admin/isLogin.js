// import CategoriesAdmin from "../../components/categories/CategoriesAdmin";
import Header from "../../components/header";
import React, { useState } from 'react';

// import Sidebare from "../../components/sidebare/Sidebare";
// import SidebareContextProvider from "../../utils/contexte/SidebareContext";
// import Commandes from "./Commandes";
// import Dashboard from "./Dashboard";
// import Produits from "./Produits";
// import DetailsCategorieUseProvider from "../../components/categories/DetailsCategorieUseProvider";
// import DetailsProduits from "../../components/produits/DetailsProduits";
// import DetailsCommandeProvide from "./DetailsCommandeProvide";
// import Profil from "./Profil";
import { Routes } from "react-router";
// import useGlobal from "../../utils/hooks/useGlobal";
// import ListeClients from "../../components/Clients/ListeClients";
// import FiltreCommandeEnAttente from "../../components/cards-et-filtre/filtreDesCommandes/FiltreCommandeEnAttente";
// import CommandeContextProvider from "../../utils/contexte/CommandeContext";
// import FilterCommandeEnCours from "../../components/cards-et-filtre/filtreDesCommandes/FilterCommandeEnCours";
// import FilterCommandeTraite from "../../components/cards-et-filtre/filtreDesCommandes/FilterCommandeTraite";
// import FilterCommendeEnLivraison from "../../components/cards-et-filtre/filtreDesCommandes/FilterCommendeEnLivraison";
// import Message from "../../components/messages/Message";
// import ErreurPage from "../utilisateurs/erreurPage/ErreurPage";
// import DetailsMessages from "../../components/messages/DetailsMessages";
// import ProduitContextProvider from "../../utils/contexte/ProduitsContext";
import Sidebare from "../../components/sidebare/Sidebare";
import SidebareContextProvider from "../../utils/context/SidebareContext";
import ContentSidebar from "../../components/sidebare/ContentSidebar";
import PrifilSidebar from "../../components/sidebare/ProfilSidebar";

function IsLogin() {
  //   const { isLoggedIn } = useGlobal();

  //   const navigate = useNavigate();

  return (
    <div className="">
      {/* <SidebareContextProvider> */}
      {/* <ProduitContextProvider> */}
      {/* <Header /> */}
      {/* {isLoggedIn() ? <Header /> : navigate("/admin")} */}
      
      <div className="bg-white flex-1 rounded-[20px] p-[2rem] mb-5 h-auto" >
        <ContentSidebar />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        <Routes>
          {/* {isLoggedIn() ? (
              <Route path="/dashboard" element={<Dashboard />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route
                path="/dashboard/EnAttente"
                element={
                  <CommandeContextProvider>
                    <FiltreCommandeEnAttente />
                  </CommandeContextProvider>
                }
              />
            ) : (
              navigate("/admin")
            )}

            {isLoggedIn() ? (
              <Route
                path="/dashboard/EnCours"
                element={
                  <CommandeContextProvider>
                    <FilterCommandeEnCours />
                  </CommandeContextProvider>
                }
              />
            ) : (
              navigate("/admin")
            )}

            {isLoggedIn() ? (
              <Route
                path="/dashboard/Traite"
                element={
                  <CommandeContextProvider>
                    <FilterCommandeTraite />
                  </CommandeContextProvider>
                }
              />
            ) : (
              navigate("/admin")
            )}

            {isLoggedIn() ? (
              <Route
                path="/dashboard/EnLivraison"
                element={
                  <CommandeContextProvider>
                    <FilterCommendeEnLivraison />
                  </CommandeContextProvider>
                }
              />
            ) : (
              navigate("/admin")
            )}

            {isLoggedIn() ? (
              <Route path="/profil" element={<Profil />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route path="/categories" element={<CategoriesAdmin />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route
                path="/categories/:idCategory"
                element={<DetailsCategorieUseProvider />}
              />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route path="/produits/*" element={<Produits />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route path="/produits/:id" element={<DetailsProduits />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route path="/commandes/*" element={<Commandes />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route
                path="/commandes/:id"
                element={<DetailsCommandeProvide />}
              />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route path="/clients" element={<ListeClients />} />
            ) : (
              navigate("/admin")
            )}

            {isLoggedIn() ? (
              <Route path="/messages/*" element={<Message />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route path="/messages/:id" element={<DetailsMessages />} />
            ) : (
              navigate("/admin")
            )}
            {isLoggedIn() ? (
              <Route path="*" element={<ErreurPage />} />
            ) : (
              navigate("/admin")
            )} */}
        </Routes>
      </div>
      {/* </ProduitContextProvider> */}
      {/* </SidebareContextProvider> */}
    </div>
  );
}

export default IsLogin;
