import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Mycard from "./Card";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          img:
            "https://image.shutterstock.com/image-vector/flags-asian-countries-260nw-1269048871.jpg",
          title: "Asian Countries Flags",
          text: `Asia is the largest continent in the world both by area and
            population, and the continent covers an area ofmillion
            square miles, with a total population of 4.164 billion people. Asia
            is made up of 48 countries, as well as 6 non-UN states, and 6
            dependent territories.`,
        },
        {
          img:
            "https://cdn3.vectorstock.com/i/1000x1000/94/42/european-countries-flags-vector-1409442.jpg",
          title: "European Countries Flags",
          text:
            "Now Europe includes 51 independent states. Russia, Kazakhstan, Azerbaijan, Georgia, and Turkey are transcontinental countries, partially located in both Europe and Asia. Armenia and Cyprus politically are considered European countries, though geographically they are located in the West Asia territory",
        },
        {
          img:
            "https://cdn1.vectorstock.com/i/1000x1000/57/25/set-of-flags-of-south-american-countries-vector-21775725.jpg",
          title: "South American Countries Flags",
          text:
            "South America is the fourth largest continent in the world and covers an area of 6.89 million square miles. The continent is made up of 12 sovereign countries: Colombia, Bolivia, Argentina, Chile, Peru, Uruguay, Brazil, Paraguay, Venezuela, Guyana, Suriname, and Ecuador.",
        },
      ],
    };
  }
  render() {
    let data = this.state.cards.map((card, i) => {
      return <Mycard key={i} card={card} />;
    });
    return <div className="data">{data}</div>;
  }
}
