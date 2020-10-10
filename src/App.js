import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "@rjsf/core";
// import axios from 'axios';
import { FhirJsonForm, FhirJsonResp } from 'fhirformjs'
import { Testq1 } from './testq1';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';

function App() {
  const [schema, setData] = useState(Testq1);

  // You may be fetching data from an endpoint as below

  /*
  useEffect(() => { 
    async function fetchData() {
      // You can await here
      const result = await axios.get(
        'https://www.hl7.org/fhir/questionnaire-example-f201-lifelines.json',
      );
      // ...
      setData(JSON.parse(FhirJsonForm(result.data)));
      console.log(schema)
    }
    fetchData();
  
    // const schema = JSON.parse(FhirJsonForm(data))

  }, [schema]);
  */

  let formData = {}
  let respData = {}
  function handleSubmit(data){
    respData = FhirJsonResp(JSON.parse(FhirJsonForm(schema)).model, data)
    console.log(respData)
  }
  function handleChange(data) {
    setData(data)  // You may like to save the edited form to your FHIR server
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form schema={JSON.parse(FhirJsonForm(schema)).schema} 
          uiSchema={JSON.parse(FhirJsonForm(schema)).uischema}
        formData={formData}
        onSubmit={e => handleSubmit(e.formData)}
        />
        <Editor
          value={schema}
          onChange={e => handleChange(e)}
        />
      </header>
    </div>
  );
}

export default App;
