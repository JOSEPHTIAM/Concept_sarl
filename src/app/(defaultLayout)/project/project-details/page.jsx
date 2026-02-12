import BreadCumb from '@/app/Components/Common/BreadCumb';
import ProjectDetails from '@/app/Components/ProjectDetails/ProjectDetails';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Project Details"
            ></BreadCumb>    
            <ProjectDetails></ProjectDetails>             
        </div>
    );
};

export default page;