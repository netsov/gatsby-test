import * as React from "react"

import "./component-a.css"
import {depA} from "../utils/depa";

export default function ComponentA() {
    return <div id="test" onClick={() => {
        depA()
    }}>ComponentA</div>
}