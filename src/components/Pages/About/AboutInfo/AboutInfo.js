import React from 'react';
import SectionTitle from "../.././../SectionTitle/SectionTitle"
import AboutTable from "../AboutTable/AboutTable"
const AboutInfo = () => {
    return (
        <div>
            <SectionTitle>Apie mus</SectionTitle>
                <p>Mūsų sporto prekių parduotuvė siųlo platų asortimentą sportinės įrangos.</p>
            <SectionTitle>Komanda</SectionTitle>
                <p>Gera komanda yra vienas iš svarbiausių dalykų kuris padeda judėti į priekį. Mes surinkome savo srities specialistus ir dirbame jums.</p>
                <AboutTable/>
            <SectionTitle>Pristatymas</SectionTitle>
                <p>Mūsų kurjeriai pristatys jums preke į betokį Lietuvos miestą. Taip pat prekes galima atsiimti ir atvykus pas mus į parduotuvę adresu: Savanoriu pr. 157A.</p>
        </div>
    );
};

export default AboutInfo;