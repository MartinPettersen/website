import Head from "next/head";
import Layout from "../../../components/layout";

// import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Container,
  Row,
  Col,
} from "react-bootstrap";

export default function TestPost() {
  return (
    <Layout>
      <Head>
        <title>Test Post</title>
      </Head>
      <h1>Test post</h1>
      <Container>
        <Card className="mb-3" style={{ color: "black" }}>
          <Card.Img src="https://picsum.photos/200/50" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of react bootstrap cards</Card.Text>
            <Button variant="primary">read more</Button>
          </Card.Body>
        </Card>

        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
                <Form.Text className="text-muted">
                  Your email is safe with us
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Form>

        <Breadcrumb>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
          <Breadcrumb.Item active>Test</Breadcrumb.Item>
        </Breadcrumb>

        <Alert variant="success">This is a button</Alert>

        <Button>Test Button</Button>
      </Container>
    </Layout>
  );
}
