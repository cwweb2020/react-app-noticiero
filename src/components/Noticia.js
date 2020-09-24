import React from 'react'


const Noticia = ({noticia}) => {

    const { description , publishedAt , url, title, urlToImage  } = noticia
    return (
        <div className="row">

            
                        <div className="col s12 ">
                            
                            <div className="card horizontal">
                            {urlToImage ?
                            
                            <div className="card-image">
                            <img  src={urlToImage} />
                            </div>
                        
                              :  null   }
                            <div className="card-stacked col s6">
                                <div className="card-content">
                                <h5 className="header">{title}</h5>
                                <p>{description}</p>
                                </div>
                                <div style={{display:"flex"}} className="card-action">
                                <a className="waves-effect waves-light btn" style={{margin:"0 auto"}} href={url} target="_blank">Leer Mas</a>
                                </div>
                            </div>
                            </div>
                        </div>
            
        </div>
    )
}

export default Noticia


