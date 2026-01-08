import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Banner from '../../Components/Banner/Banner';
import styles from './Home.module.css'
import Menu from '../../Components/Menu/Menu';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Home = () => {
    return (
        <>
            <Sidebar />
            <Banner />
            <div className={`${styles.recentMenu} text-secondary`}>

            <h5 >Recent Menu</h5>
           
             <Menu/>
            </div>
            <div>
                <h5>Projects</h5>
                <ProjectCard/>
            </div>

        </>
    );
};

export default Home;
