import { Button, Card, Container, Modal } from "react-bootstrap";

import axios from "axios";

import { useShoppingCart } from "use-shopping-cart";

const products = [
  {
    name: "Bananas",
    description: "Yummy yellow fruit",
    sku: "sku_banana001",
    price: 400,
    currency: "USD",
    image: "https://i.imgur.com/vzmMQDe.jpg",
    images: [""],
  },
];

const CartModal = ({ showCart, setShowCart }) => {
  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    addItem,
    cartDetails,
  } = useShoppingCart();

  const handleCheckout = async () => {
    const { data } = await axios.post(
      "api/checkout_sessions/checkout",
      cartDetails
    );
    redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div>
      <Modal
        show={showCart}
        onHide={() => setShowCart(false)}
        dialogClassName=""
        aria-labelledby="example-custom-modal-styling-title"
        className="right"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Cart{cartCount}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Container>
            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/vzmMQDe.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={() => addItem(products[0])}>
                  Go somewhere
                </Button>
                <Button variant="warning" onClick={() => handleCheckout()}>
                  Go somewhere
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/vzmMQDe.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "15rem" }}>
              <Card.Img variant="top" src="https://i.imgur.com/vzmMQDe.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartModal;
