import React, { Component } from 'react'
import Spinner from './Spinner';
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor(){
    super();
    this.state={
      articles: [],
      loading:false,
      page:1,
    }
  }
  async UpdateNews(){
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=73ace5cd5fc340fabd2a86b1ef19e597`;//api url
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false})
  }
  async componentDidMount(){
    this.UpdateNews();
  }
  handleprevious= async ()=>{
    this.setState({page: this.state.page - 1});
    this.UpdateNews();
  }
  handlenext= async ()=>{
    if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){}
    else{
    this.setState({page: this.state.page + 1});
    this.UpdateNews();
    }}
  
  render() {
    return (
      <>
      <div className='container my-3'>
      <h2 >Top Headlines</h2>
      {this.state.loading &&<Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
        return <div className="col md-3 my-3" key={element.url}>
        <NewsItem title={element.title} description={element.description?element.description.slice(0,90):"    "} url={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt}></NewsItem>
        </div>
      })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handleprevious}> &larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handlenext}>Next &rarr;</button>
        </div>
      </div>
      </>
    )
  }
}


export default News