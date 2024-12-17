import * as React from "react"

import "./component-a.css"
import {depA} from "../utils/depa";

// import {Provider, defaultTheme} from '@adobe/react-spectrum';
import {useEffect, useState} from "react";


export default function ComponentA() {
    const [reactSpectrum, setReactSpectrum] = useState(null)
    useEffect(() => {
        import('@adobe/react-spectrum').then((res) => {
            setReactSpectrum(res)
        })
    }, []);

    return reactSpectrum ? <reactSpectrum.Provider
        theme={reactSpectrum.defaultTheme}
    >
        <div id="test" onClick={() => {
            depA()
        }}>
            ComponentA
        </div>
    </reactSpectrum.Provider>: 'loading'
}