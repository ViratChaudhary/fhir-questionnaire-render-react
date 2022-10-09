import React, { useState } from 'react';
import Form from "@rjsf/core";
// import axios from 'axios';
import { FhirJsonForm, FhirJsonResp } from 'fhirformjs'
import { TestQuestionnaire1 } from './testQuestionnaire1';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import logo from './logo.svg';
import './App.css';

// New
import { nanoid } from "nanoid";
import { useEffect } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from './NabContent';

function App() {
    const [schemaState, setData] = useState(TestQuestionnaire1);

    // New
    const [activeTab, setActiveTab] = useState("initial_visit_tab");
    const [subsequentTabs, setSubsequentTabs] = useState([
        {
            id: nanoid(),
            title: "Subsequent Visit",
        },
    ]);

    let initialTab = {
        id: "initial_visit_tab",
        title: "Initial Visit",
    };

    const handlePlusButton = () => {
        setSubsequentTabs((prevItems) => [
            ...prevItems,
            {
                id: nanoid(),
                title: "Subsequent Visit",
            },
        ]);
    };

    const handleRemoveButton = (id) => {
        setSubsequentTabs((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

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

    function handleSubmit(data) {
        // console.log("Submitting");
        const responseData = FhirJsonResp(FhirJsonForm(schemaState).model, data, FhirJsonForm(schemaState).schema);
        console.log(JSON.stringify(responseData));

        // respData = FhirJsonResp(FhirJsonForm(schemaState).model, data)
        // console.log(respData)
    }

    function handleChange(data) {
        setData(data)  // You may like to save the edited form to your FHIR server
    }

    // useEffect(() => {
    //     <Form schema={FhirJsonForm(schemaState).schema}
    //         uiSchema={FhirJsonForm(schemaState).uiSchema}
    //         formData={formData}
    //         onSubmit={e => handleSubmit(e.formData)}
    //     />

    //     subsequentTabs.forEach((tab, i) => {
    //         <Form schema={FhirJsonForm(schemaState).schema}
    //             uiSchema={FhirJsonForm(schemaState).uiSchema}
    //             formData={formData}
    //             onSubmit={e => handleSubmit(e.formData)}
    //         />
    //     })
    // }, [subsequentTabs, activeTab]);

    const handleSaveButton = (id) => {

        // Here we should get the data for the given visit from which the save button was called

        // const data = LForms.Util.getFormFHIRData('QuestionnaireResponse', 'R4');
        // console.log(data);

        // Once the data is received and checked for succession, it should be uploaded to the fhir server
    }

    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             {/* <img src={logo} className="App-logo" alt="logo" /> */}

    //             {/* <Form schema={FhirJsonForm(schemaState).schema}
    //                 uiSchema={FhirJsonForm(schemaState).uiSchema}
    //                 formData={formData}
    //                 onSubmit={e => handleSubmit(e.formData)}
    //             /> */}
    //             {/* <h2>Edit FHIR Questionnaire below (Change IDs if you duplicate an element)</h2>
    //             <Editor
    //                 value={schemaState}
    //                 onChange={e => handleChange(e)}
    //             /> */}
    //         </header>
    //     </div>
    // );

    return (
        <div className="Tabs">
            <ul className="nav">
                <TabNavItem
                    id={initialTab.id}
                    title={initialTab.title}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    handleSaveButton={handleSaveButton}
                />
                {subsequentTabs.map((tab) => (
                    <TabNavItem
                        key={tab.id}
                        id={tab.id}
                        title={tab.title}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        handleRemoveButton={handleRemoveButton}
                        handleSaveButton={handleSaveButton}
                    />
                ))}
                <li onClick={handlePlusButton}>+</li>
            </ul>

            <div className="outlet">
                <TabContent id={initialTab.id} activeTab={activeTab}>
                    {initialTab.id}
                    <Form schema={FhirJsonForm(schemaState).schema}
                        uiSchema={FhirJsonForm(schemaState).uiSchema}
                        formData={formData}
                        onSubmit={e => handleSubmit(e.formData)}
                    />
                </TabContent>

                {subsequentTabs.map((tab) => (
                    <TabContent key={tab.id} id={tab.id} activeTab={activeTab}>
                        {tab.id}
                        {/* <div id={`questionnaire_${tab.id}`}></div> */}
                        <Form schema={FhirJsonForm(schemaState).schema}
                            uiSchema={FhirJsonForm(schemaState).uiSchema}
                            formData={formData}
                            onSubmit={e => handleSubmit(e.formData)}
                        />
                    </TabContent>

                ))}
            </div>
        </div>
    );
}

export default App;
