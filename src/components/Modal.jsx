import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyModal(props) {
  const headerStyle = {
    backgroundColor: "#E5E5E5",
    color: "#162938",
    borderBottom: "1px solid #dee2e6",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "text-align": "center",
    fontSize: "10%",
    fontWeight:"bold"
  };
  const bodyStyle = {
    backgroundColor: "#E5E5E5",
    color: "#6C757D",
    margin: "2%",
    "text-align": "center",
  };

  const footerStyle = {
    backgroundColor: "#E5E5E5",
    borderTop: "1px solid #dee2e6",
    display: "flex",
    "justify-content": "right",
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ color: "black" }}
    >
      <Modal.Header style={headerStyle}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.heading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={bodyStyle}>
        <p>{props.body}</p>
      </Modal.Body>
      <Modal.Footer style={footerStyle}>
        {props.codeUrl && <Button
          style={{ backgroundColor: "#162938" }}
          onClick={() =>
            window.open(props.codeUrl, "_blank")
          }
        >
          Go to Code
        </Button>}
        <Button style={{ backgroundColor: "#162938" }} onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;
