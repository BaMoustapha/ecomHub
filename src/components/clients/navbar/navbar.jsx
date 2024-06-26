import React, { useContext, useState, useEffect} from 'react';
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
// import img from '../../../assets/img3.jpg'
import img4 from '../../../assets/img4.jpg'
import { FaCartShopping } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';
import Input from './Input';
import { useFormContext } from 'react-hook-form';
import axios from 'axios';
import { FormShopContext } from '../../../utils/context/FormShopContext';

const Navbar = () => {
   const {name} = useParams();
   const {afficheUneBoutique, boutique} = useContext(FormShopContext) 

  // État local pour contrôler l'ouverture du menu
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
  afficheUneBoutique(name);
}, [afficheUneBoutique, name]);

// const fetchData = async () => {
//   try {
//     const response = await axios.get("http://localhost:8000/api/shops")
    
//   } catch (error) {
//     console.error('Erreur lors de la récupération des donnees:', error);
//   }
// };

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between p-2 bg-black p-2 w-full fixed top-0">
        <nav className="">
          <div className="flex items-center justify-between mx-auto max-w-7xl">
            <div className="flex items-center">
              
                <img src={boutique?.logo} alt='logo boutique' className='mx-4 w-10 h-10 rounded-full' />
              <div className="flex mx-4 mx-auto text-white items-center">
                <Link to="/BoutiqueCategorie"><p className='mx-4'>Boutique</p></Link>
                <Link to="/Apropos"><p className="mx-4">About</p></Link>
                <Link to="/Contact"><p className="mx-4">Contact</p></Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex items-center mx-4 fs-5">
          <Input />
          <Link to="/panier">
            <FaCartShopping className="mx-4 text-2xl text-white" />
          </Link>
          {/* Utilisation d'un icône pour basculer l'état du menu */}
          <div className="md:hidden">
            {isOpen ? (
              <FaXmark className="text-white text-2xl" onClick={toggleMenu} />
            ) : (
              <FaBars className="text-white text-2xl" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>
      {/* Affichage du menu déroulant si isOpen est true */}
    </>
  );
};

export default Navbar;
