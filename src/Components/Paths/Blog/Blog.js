import React, { useEffect, useState } from 'react';

import BlogStyling from './BlogStyling';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./Blogs.JSON')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div>
            <div>
                <h1 className='font-semibold p-5 text-5xl text-center'>Our Blogs</h1>
            </div>
            <div>
                <h1 className="mx-auto text-2xl text-center w-2/3 sm:w-11/12 italic">

                    Certain challenges faced by a single parent include poor income in the family, fatigued parent, inability to provide love and attention to the child, workaholic parent, children with low self-esteem and, social isolation, etc. Although these challenges are daunting, one can find many ways to tackle the load that single parenting brings along.</h1>
            </div>
            <div className="grid lg:grid-cols-3 p-36 gap-8 sm:p-10">
                {
                    blogs.map(blog => <BlogStyling blog={blog} key={blog.id}></BlogStyling>)
                }
            </div>
        </div>
    );
};

export default Blog;