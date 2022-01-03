import React from 'react'
import './article.scss'

const Article = ({date, title, sub, img}) => {
    return (
        <div className='gpt3__article'>
            <div className="gpt3__article-image">
                <img src={img} alt={sub} />
            </div>
            <div className="gpt3__article-content">
                <div className="gpt3__article-content_top">
                    <p className="gpt3__article-content__date">{date}</p>
                    <h1>{title}</h1>
                </div>
                <div className="gpt3__article-content__bottom">
                    {sub}
                </div>
            </div>
        </div>
    )
}

export default Article
