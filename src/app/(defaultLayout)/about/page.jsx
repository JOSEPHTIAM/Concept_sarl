import About1 from '@/app/Components/About/About1';
import Brand1 from '@/app/Components/Brand/Brand1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Process2 from '@/app/Components/Process/Process2';
import Team1 from '@/app/Components/Team/Team1';
import Testimonial2 from '@/app/Components/Testimonial/Testimonial2';
import React from 'react';

const page = () => {
    return (
        <div>
           <BreadCumb
                bgImg="/assets/img/h2.png"
                Title="Catégories"
            ></BreadCumb>

            <Brand1></Brand1>
            <Process2></Process2>
        </div>
    );
};

export default page;