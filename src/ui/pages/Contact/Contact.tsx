import * as React from 'react';
import {Button, Col, Form} from 'react-bootstrap';
import {BootstrapColumn, BootstrapRow} from "../../Utils/BootstrapImportsUtils";
import styles from "./Contact.module.scss";


export class ContactPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event: any) {
        event.preventDefault();
    }

    public render() {

        const props = this.props;

        return (
            <div className={styles.contact}>
                <h2>Get In Touch</h2>
                <BootstrapRow  className={"center"}>
                    <BootstrapColumn sm={12}>
                        <section>
                            <Form onSubmit={this.handleSubmit}>
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

}


export default ContactPage;