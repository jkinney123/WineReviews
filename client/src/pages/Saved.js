// import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// import Card from "../components/Card";
// import Wine from "../components/Wine";
// import Footer from "../components/Footer";
// import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
// import { List } from "../components/List";

// class Saved extends Component {
//   state = {
//     wines: []
//   };

//   componentDidMount() {
//     this.getSavedWines();
//   }

//   getSavedBooks = () => {
//     API.getSavedWines()
//       .then(res =>
//         this.setState({
//           wines: res.data
//         })
//       )
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col size="md-12">
//             <Jumbotron>
//               <h1 className="text-center">
//                 <strong>(React) Google Books Search</strong>
//               </h1>
//               <h2 className="text-center">
//                 Search for and Save Books of Interest.
//               </h2>
//             </Jumbotron>
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <Card title="Saved Wines" icon="download">
//               {this.state.wines.length ? (
//                 <List>
//                   {this.state.wines.map(wine => (
//                     <Wine
//                       key={wine._id}
//                       title={wine.title}
//                       subtitle={wine.subtitle}
//                       link={wine.link}
//                       authors={wine.authors.join(", ")}
//                       description={book.description}
//                       image={wine.image}
//                     />
//                   ))}
//                 </List>
//               ) : (
//                 <h2 className="text-center">No Saved Wines</h2>
//               )}
//             </Card>
//           </Col>
//         </Row>
//         <Footer />
//       </Container>
//     );
//   }
// }

// export default Saved;
