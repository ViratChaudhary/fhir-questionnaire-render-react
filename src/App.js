import React, { useState } from 'react';
import Form from "@rjsf/core";
// import axios from 'axios';
import { FhirJsonForm, FhirJsonResp } from 'fhirformjs'
import { TestQuestionnaire1 } from './testQuestionnaire1';
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import logo from './logo.svg';
import './App.css';
import { oauth2 as SMART } from 'fhirclient';

// New
import { nanoid } from "nanoid";
import TabNavItem from "./TabNavItem";
import TabContent from './TabContent';


function App() {
    const [schemaState, setData] = useState(TestQuestionnaire1);
    const [intialResponseData, setInitialResponseData] = useState({});

    // New
    const [activeTab, setActiveTab] = useState("initial_visit_tab");
    const [subsequentTabs, setSubsequentTabs] = useState([
        {
            id: nanoid(),
            title: "Subsequent Visit",
            responseData: {}
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
                responseData: {}
            },
        ]);
    };

    const handleRemoveButton = (id) => {
        setSubsequentTabs((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    function handleSubmit(data, tabId) {
        const responseData = FhirJsonResp(FhirJsonForm(schemaState).model, data, FhirJsonForm(schemaState).schema);
        console.log(JSON.stringify(responseData));

        // update the response if the submitted tab is the initial tab
        if (tabId === initialTab.id) {
            setInitialResponseData(data);
        }

        // Sets the response data for the subsequent tab from which you submitted
        for (var i = 0; i < subsequentTabs.length; i++) {
            if (subsequentTabs[i].id === tabId) {
                subsequentTabs[i].responseData = data;
            }
        }
    }

    function handleChange(data) {
        setData(data)  // You may like to save the edited form to your FHIR server
    }

    const handleSaveButton = (id) => {

        // Here we should get the data for the given visit from which the save button was called

        // const data = LForms.Util.getFormFHIRData('QuestionnaireResponse', 'R4');
        // console.log(data);

        // Once the data is received and checked for succession, it should be uploaded to the fhir server
    }

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
                        formData={intialResponseData}
                        onSubmit={e => handleSubmit(e.formData, initialTab.id)}
                    />
                </TabContent>

                {subsequentTabs.map((tab) => (
                    <TabContent key={tab.id} id={tab.id} activeTab={activeTab}>
                        {tab.id}
                        <Form schema={FhirJsonForm(schemaState).schema}
                            uiSchema={FhirJsonForm(schemaState).uiSchema}
                            formData={tab.responseData}
                            onSubmit={e => handleSubmit(e.formData, tab.id)}
                        />
                    </TabContent>
                ))}
            </div>
        </div>
    );
}

export default App;
