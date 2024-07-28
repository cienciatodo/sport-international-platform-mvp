
import Header from "../features/header/Header";

import './entryPage.css';


import { Outlet } from 'react-router-dom';

const EntryPage = () => {



  return (
    <>
      <Header />
      <Outlet/>
     
      
    </>
  );
};

export default EntryPage;
