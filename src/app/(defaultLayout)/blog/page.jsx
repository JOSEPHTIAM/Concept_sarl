import Blog1 from '@/app/Components/Blog/Blog1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
    return (
        <div>
             <BreadCumb
                bgImg="/assets/img/page_heading_1.jpg"
                Title="Blog"
            ></BreadCumb>  
            <Blog1></Blog1>             
        </div>
    );
};

export default page;