import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../Asset/Style/Resume.css";
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <section className="overflow-hidden">
      <div className="container py-5 mt-5">
        <h1 className="text-center fw-bold text-black-50 text-uppercase conth1">
          Say Hello!
        </h1>
        <p className="text-center contp1">
          Use the form below to send a message or give me a call at +977
          98000000000<span className="d-block">Email: Kopil@ramailo.tech</span>
          Kopil@gmail.com
        </p>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="mt-4"
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" data-aos="fade-down-left">
              <Form.Label>First name*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Your First Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" data-aos="zoom-in-left">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                required
                type="Email"
                placeholder="Enter Your Email"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" data-aos="fade-up-right">
              <Form.Label>Phone*</Form.Label>
              <Form.Control required type="number" />
            </Form.Group>
          </Row>

          <div
            className="form-group d-flex justify-content-center align-items-center mt-4"
            data-aos="zoom-in-left"
          >
            <div className="d-flex flex-column w-100 text-area">
              <label htmlFor="ttext">Message</label>
              <textarea placeholder="Write Message" className="message" />
            </div>
          </div>
          <Form.Group className="mb-3 py-1 mt-3">
            <Form.Check
              required
              label="Are You Sure! You Want to send a Message"
              feedback="You must agree before send."
              feedbackType="invalid"
            />
          </Form.Group>
          <button type="submit" className="filter1">
            Submit form
          </button>
        </Form>
      </div>
    </section>
  );
}

export default FormExample;
