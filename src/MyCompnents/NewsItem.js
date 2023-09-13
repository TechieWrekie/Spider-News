import './NewsItem.css'
import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, time, author, source } = props
        return (<>
            <div className='my-3  newsitem'>

                <div className="card"  >
                    <div  style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0',color:'white'}}>
                        <span className="rounded-pill bg-danger px-3 fw-bold" >
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(time).toUTCString()}</small></p>

                        <a href={newsUrl} className="btn btn-sm  btn-outline-danger" target='_blank' rel=' noreferrer'>Read More</a>
                    </div>
                </div>

            </div>
        </>

        )
}

export default NewsItem;