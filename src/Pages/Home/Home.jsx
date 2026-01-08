import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Banner from '../../Components/Banner/Banner';
import styles from './Home.module.css'
import Menu from '../../Components/Menu/Menu';

const Home = () => {
    return (
        <>
            <Sidebar />
            <Banner />
            <div className={`${styles.recentMenu} text-secondary`}>

            <h5 >Recent Menu</h5>
           
             <Menu/>
            </div>

        </>
    );
};

export default Home;
