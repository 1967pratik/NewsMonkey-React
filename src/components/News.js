import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {

    // articles = [
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //         "publishedAt": "2020-04-27T11:41:47Z",
    //         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "espn-cric-info",
    //             "name": "ESPN Cric Info"
    //         },
    //         "author": null,
    //         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //         "publishedAt": "2020-03-30T15:26:05Z",
    //         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    //     }
    // ]
    constructor(){
        super();
        console.log("News component constructor called");
        this.state = {

            // articles: this.articles,
            articles: [],
            loading: false

        }
    }

    async componentDidMount(){

        console.log("News component did mount called");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5ba5cbdda7cf41e18ef8dda6a99e02e4";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles :parsedData.articles,
            loading :false
        })
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - your latest news is here</h2>
        <div className="row" style={{marginTop: "20px"}}>

        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key = {element.url}>
                <NewsItem title={element.title?element.title.slice(0, 45):""} newsUrl={element.url} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} />
            </div>
        })}

            

        </div>
      </div>
    )
  }
}
