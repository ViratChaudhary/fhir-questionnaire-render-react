import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { oauth2 as SMART } from "fhirclient";
// import * as serviceWorker from './serviceWorker';

// Intitialise the fhir server
SMART.init({
    iss: "https://hapi.fhir.org/baseR4",
    redirectUri: "",
    clientId: "whatever",
    scope: "launch/patient offline_access openid fhirUser",

    // WARNING: completeInTarget=true is needed to make this work in the codesandbox
    // frame. It is otherwise not needed if the target is not another frame or window
    // but since the entire example works in a frame here, it gets confused without
    // setting this!
    completeInTarget: true,
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

