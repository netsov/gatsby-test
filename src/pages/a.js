import * as React from "react"

// import {Provider, defaultTheme} from '@adobe/react-spectrum';

import "./a.css"
// import {depA} from "../utils/depa";
// import ComponentA from "../components/component-a";

const ComponentA = React.lazy(() => import("../components/component-a"));


const IndexPage = () => {
    return (
        // <Provider
        //     theme={defaultTheme}
        //     // scale='medium'
        //     // typekitId={typekitId}
        //     // className={rootClassName}
        // >
            <main>
                <h1>
                    APage
                </h1>
                {typeof window !== 'undefined' && <React.Suspense fallback={<div>Loading...</div>}>
                    <ComponentA/>
                </React.Suspense>}
            </main>
        // </Provider>
    )
}

export default IndexPage

export const Head = () => <title>APage</title>
