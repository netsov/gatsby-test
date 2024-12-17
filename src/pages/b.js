import * as React from "react"

import "./b.css"
import {depB} from "../utils/depb";
import ComponentB from "../components/component-b";


const IndexPage = () => {
  return (
    <main  >
      <h1 onClick={() => {
          depB()
      }}>
          BPage
      </h1>
        <ComponentB/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>BPage</title>
