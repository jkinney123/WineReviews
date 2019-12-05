import React from "react";
import { Modal, Button, ButtonToolbar } from "react-bootstrap";

class WineModal extends React.Component {
  state = {
    lgShow: false
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button onClick={() => this.setState({ lgShow: true })}>
            Large modal
          </Button>
          <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={() => this.setState({ lgShow: false })}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Large Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
          </Modal>
        </ButtonToolbar>
      </div>
    );
  }
}

export default WineModal;
