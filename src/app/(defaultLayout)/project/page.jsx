import BreadCumb from '@/app/Components/Common/BreadCumb';
import Project3 from '@/app/Components/Project/Project3';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Project"
            ></BreadCumb>   
            <Project3></Project3>            
        </div>
    );
};

export default page;