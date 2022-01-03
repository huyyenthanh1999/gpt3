import React from 'react'
import { Article } from '../../components';
import './blog.scss';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id='blog'>
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, <br />
                    We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article 
                        date={"Sep 26, 2021"}
                        title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        sub={"Read Full Article"}
                        img={blog01}
                    />
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article 
                        date={"Sep 26, 2021"}
                        title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        sub={"Read Full Article"}
                        img={blog02}
                    />
                    <Article 
                        date={"Sep 26, 2021"}
                        title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        sub={"Read Full Article"}
                        img={blog03}
                    />
                    <Article 
                        date={"Sep 26, 2021"}
                        title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        sub={"Read Full Article"}
                        img={blog04}
                    />
                    <Article 
                        date={"Sep 26, 2021"}
                        title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        sub={"Read Full Article"}
                        img={blog05}
                    />
                </div>
            </div>
        </div>
    )
}

export default Blog
