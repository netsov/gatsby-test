import * as React from "react"

import "./component-a.css"
import {depA} from "../utils/depa";

import {Provider, defaultTheme} from '@adobe/react-spectrum';

export default function ComponentA() {
    return <Provider
        theme={defaultTheme}
    >
        <div id="test" onClick={() => {
            depA()
        }}>ComponentA
        </div>
    </Provider>
}