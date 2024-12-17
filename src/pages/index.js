import * as React from "react"
import {Link} from "gatsby"

import "./index.css"


const IndexPage = () => {
    return (
        <main>
            <h1>
                Index
            </h1>
            <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
                {/*<Link to="/a">PageA</Link>*/}
                {/*<Link to="/b">PageB</Link>*/}
            </div>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
