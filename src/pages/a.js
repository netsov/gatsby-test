import * as React from "react"

import "./a.css"
import {depA} from "../utils/depa";
// import ComponentA from "../components/component-a";

const ComponentA = React.lazy(() => import("../components/component-a"));



const IndexPage = () => {
  return (
    <main  >
      <h1 onClick={() => {
          depA()
      }}>
          APage
      </h1>
        {typeof window !== 'undefined' && <React.Suspense fallback={<div>Loading...</div>}>
            <ComponentA/>
        </React.Suspense>}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>APage</title>
