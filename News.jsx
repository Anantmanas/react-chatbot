import React, { Component } from 'react'
import NewsItem from './Newsitem';


class News extends Component {

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };


  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c834ac4678054e8b82ce4ac8de3e048a&page=1&pageSize=1";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData + "parsedData");
    this.setState({ articles: parsedData.articles })

  }

  handlePrevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&pagesize=1&apiKey=c834ac4678054e8b82ce4ac8de3e048a&page=${this.state.page - 1}&pageSize=1`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData + "parsedData");
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })


  }

  handleNextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&pagesize=1&apiKey=c834ac4678054e8b82ce4ac8de3e048a&page=${this.state.page + 1}&pageSize=1`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData + "parsedData");
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })

  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2> Newsology - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-xl-12 col-md-8" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 98) : ""}
                imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">

          <button disabled={this.state.page <= 1} type="button" className='btn btn-dark' onClick={this.handlePrevclick}>&#8920;</button>
          <button type="button" className='btn btn-dark' onClick={this.handleNextclick}>&#8921;</button>
        </div>

      </div>


    )
  }

}


export default News;
