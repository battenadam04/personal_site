import * as React from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import {BootstrapColumn, BootstrapRow} from "../../../Utils/BootstrapImportsUtils";
import "./Contact.scss";


const ContactPage = () => {

    const handleChange = (event: any) => {
        // setState({value: event.target.value});
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }


        return (
            <div className='contact'>
                <h2>Get In Touch</h2>
                <BootstrapRow  className="center">
                    <BootstrapColumn sm={12}>
                        <section>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="Name" placeholder="Adam" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="comment">
                                    <Form.Label>Whats on your mind?</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button variant="dark" type="submit" className="float-end">
                                    Send
                                </Button>
                            </Form>
                        </section>
                    </BootstrapColumn>
                </BootstrapRow>
            </div>
        )
}


export default ContactPage;