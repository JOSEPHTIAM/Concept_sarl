import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team1 from '@/app/Components/Team/Team1';
import TeamDetails from '@/app/Components/TeamDetails/TeamDetails';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/contacter11.png"
                Title="Responsable d'agence"
            ></BreadCumb> 
            <TeamDetails></TeamDetails> 
            <Team1></Team1>              
        </div>
    );
};

export default page;