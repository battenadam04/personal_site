import * as React from 'react';
import {BootstrapColumn, BootstrapRow} from "../../Utils/BootstrapImportsUtils";
import "./Home.scss";

const Home = () => (
    <div className='homepage'>
        <BootstrapRow>
            <BootstrapColumn sm={6}>
                <section className='info'>
                    <h1>
                      I'm Adam Batten.
                    </h1>
                    <h1>
                      A Front End Developer.
                    </h1>
                    <p>I'm a passionate developer and I love working with new and exciting technologies.
                     I also fancy myself an amateur trader and a crypto enthusiast so please get in touch
                     whether its for work or a chat.
                    </p>
                </section>
            </BootstrapColumn>
        </BootstrapRow>
    </div>
);


export default Home;