import * as React from "react";
import Homepage from "./Homepage";


export interface IHomepageProps {

}

export class HomepageContainer extends React.Component<IHomepageProps, any>
{



    public render() {

        const props = this.props;

        return (
            <Homepage/>
        )
    }

}


export default HomepageContainer;