
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,url, newsurl,author,date} = this.props;
    return (
        
      <div><div className="card" style={{width: '18rem',height:'20rem'}}>
      <img src={url} className="card-img-top" alt="..." style={{width: '18rem',height:'8rem'}} />
      <div className="card-body">
        <h6 className="card-title" style={{fontSize:'14px'}}>{title}</h6>
        <p className="card-text"><small className="text-danger" style={{fontSize:'8px'}}>By {!author?"Unknown": author} on {!date?"not known":date}</small></p>
        <p className="card-text" style={{fontSize:'12px'}}>{description}....
        <a rel="noopener noreferrer" href={newsurl} target="_blank" className="stretched-link" style={{fontSize:'14px'}}>Read More</a>
        </p>
      </div>
    </div></div>
    )
  }
}

export default NewsItem