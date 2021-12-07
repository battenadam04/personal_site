import * as React from 'react';
import {BootstrapColumn, BootstrapRow} from "../Utils/BootstrapImportsUtils";

export class AboutPage extends React.Component<any, any> {


    public render() {

        const props = this.props;

        return (
            <div>
                <BootstrapRow>
                    <BootstrapColumn sm={2}>
                        <h2>About</h2>
                    </BootstrapColumn>
                </BootstrapRow>
            </div>
        )
    }

}


export default AboutPage;