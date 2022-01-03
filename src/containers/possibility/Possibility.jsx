import React from 'react'
import './possibility.scss'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
    return (
        <div className="gpt3__possibility" id='possibility'>
            <div className="gpt3__possibility-image">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <div className="gpt3__possibility-content__slogan">Request Early Access to Get Started</div>
                <h1 className="gpt3__possibility-content__heading gradient__text">The possibilities are beyond your imagination</h1>
                <div className="gpt3__possibility-content__desc">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</div>
                <div className="gpt3__possibility-content__sub">Request Early Access to Get Started</div>
            </div>
        </div>
    )
}

export default Possibility
