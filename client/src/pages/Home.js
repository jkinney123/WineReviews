import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Wine from "../components/Wine";
import Footer from "../components/Footer";
import wines from "../reviews.json";

// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

class Home extends Component {
  state = {
    wines
  };

  // openModal = () => {
  //   this.setState({
  //     modalIsOpen: true
  //   });
  // };

  // closeModal = () => {
  //   this.setState({
  //     modalIsOpen: false
  //   });
  // };

  // wineClick = id => {
  //   const wines = this.state.wines;

  //   const clickedWine = wines.filter(wine => wine.id === id);

  //   if (clickedWine[0].clicked) {
  //     for (let i = 0; i < wines.length; i++) {
  //       wines[i].clicked = false;
  //     }

  //     this.setState({ wines });
  //   }
  // };

  // componentDidMount() {
  //   this.getSavedWines();
  // }

  // getSavedWines = () => {
  //   API.getSavedWines()
  //     .then(res =>
  //       this.setState({
  //         wines: res.data
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Wine reviews</strong>
              </h1>
            </Jumbotron>
          </div>
        </div>
        <div className="container">
          <Card title="Wines">
            {/* <List> */}
            <div className="row">
              <div className="d-inline-flex  flex-wrap flex-fill">
                {this.state.wines.map(wine => (
                  <div className="col-md-3">
                    <Wine
                      key={wine.id}
                      // wineClick={this.wineClick}
                      // id={wine.id}
                      grape={wine.grape}
                      wineType={wine.wineType}
                      price={wine.price}
                      name={wine.name}
                      year={wine.year}
                      origin={wine.origin}
                      tastingNotes={wine.tastingNotes}
                      grade={wine.grade}
                      feel={wine.feel}
                      image={wine.image}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* </List> */}
          </Card>
          {/* </Col> */}
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
