import * as React from 'react';
import {BootstrapColumn, BootstrapRow} from "../../Utils/BootstrapImportsUtils";


export class ProjectsPage extends React.Component<any, any> {


    public render() {

        const props = this.props;

        return (
            <div>
                <h2>Projects</h2>
                <BootstrapRow>
                    <BootstrapColumn sm={2}   className="centertext">
                        <h4>Coming soon....</h4>
                    </BootstrapColumn>
                </BootstrapRow>
            </div>
        )
    }

}


export default ProjectsPage;