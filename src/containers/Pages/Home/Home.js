import React from 'react';
import Cover from '../../../components/Cover/Cover';
import HomeAbout from '../../../components/Pages/Home/HomeAbout';
import HomeCards from "../../../components/Pages/Home/HomeCards"
const Home = () => {
    return (
        <>
        <Cover>Sprtuokime kartu!</Cover>
            <HomeCards/>
            <HomeAbout/>
            
        </>
    );
};

export default Home;