import * as React from 'react';
import {BootstrapColumn, BootstrapRow} from "../../Utils/BootstrapImportsUtils";
import './About.scss';

const AboutPage = () => {

        return (
            <div className='about'>
                <h2>Who am I?</h2>
                <BootstrapRow>
                    <BootstrapColumn sm={6}>
                        <section>
                        <h4>In the beginning</h4>
                        <p>
                            Since the very beginning I have always had an interest in technology. My first experience with a computer would have been playing Pokemon
                            and Command & Conquer off a floppy disc, yeah it was a while ago.
                        </p>
                        <p>
                            Since then I seen computers as a gateway to much more and I was intrigued by how everything connected. Of course in the beginning I
                            had to use dial up internet and websites were the bare minimum with a lack of design if any but none the less I was impressed by them and what
                            they could offer, whether it was gaming, sports, general information etc.
                        </p>
                        </section>
                    </BootstrapColumn>
                    <BootstrapColumn sm={6}>
                        <img src="images/code.jpg" alt="" />
                    </BootstrapColumn>
                </BootstrapRow>

                <BootstrapRow>
                    <BootstrapColumn sm={6}>
                        <img src="images/crypto.jpg" alt="" />
                    </BootstrapColumn>
                    <BootstrapColumn sm={6}>
                        <section>
                        <h4>Inbetween</h4>
                        <p>
                            Skip ahead many years and I find myself doing a university degree in Interactive Multi-media Design. A course that allowed you
                            to experience different areas from video editing, to game development and of course web development.
                        </p>
                        <p>
                            It was during my time at university that I came across Bitcoin, the beginning of crypto. At this point crypto was barely common knowledge
                            and there was minimal uses for it. The idea though of a virtual currency though caught my attention, just not enough to invest early which is not
                            a head kicking moment when it use to be £100 per coin at this point.
                        </p>
                        <p>
                            Now I am highly interested in Bitcoin but also in multiple Alt coins that have a range of purposes in the crypto space from
                            NFTs, tokens, to digital land. It's a world that would be hard to avoid.
                        </p>
                        </section>
                    </BootstrapColumn>
                </BootstrapRow>

                <BootstrapRow>
                    <BootstrapColumn sm={6}>
                        <section>
                        <h4>The present</h4>
                        <p>
                            Of course once I started digging into crypto I discovered trading, leveraged trading to be exact. Another world that peaks my interest
                            but like crypto it comes with soul crushing risks if not giving the respect they deserve.
                        </p>
                        </section>
                    </BootstrapColumn>
                    <BootstrapColumn sm={6}>
                        <img src="images/trading.jpg" alt="" />
                    </BootstrapColumn>
                </BootstrapRow>
            </div>
        )
    }


export default AboutPage;