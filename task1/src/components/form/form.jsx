import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import "../../assets/styles/form.css"

const SubscribeForm = () => {
  return (
    <Form className="subscribe-form">
      <InputGroup className="mb-10">
        <Form.Control
          type="email"
          placeholder="Enter your email"
          aria-label="Email"
          aria-describedby="subscribe-button"
          className="shadow-none"
        />
        <Button
          variant="primary"
          id="subscribe-button"
          className="shadow-none"
        >
          Subscribe
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SubscribeForm;
