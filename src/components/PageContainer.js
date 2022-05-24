import React, { useState } from 'react';

import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


export default function PageContainer() {

    const [currentPage, setCurrentPage] = useState('About');
  
    const renderPage = () => {

        if (currentPage === 'About') {
            return <About />;
        }

        if (currentPage === 'Projects') {
            return <Projects />;
        }

        if (currentPage === 'Contact'){
            return <Contact />;
        } 

    };

    const handlePageChange = (page) => setCurrentPage(page);
  
    return (

        <div>
            <NavTabs handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>

    );

}