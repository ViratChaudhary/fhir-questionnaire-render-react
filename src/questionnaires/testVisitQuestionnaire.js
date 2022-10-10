export const testVisitQuestionnaire = {
    code: [
        {
            "code": "76453-0",
            "display": "Physical therapy initial visit panel"
        }
    ],
    title: "Physical therapy initial visit panel",
    resourceType: "Questionnaire",
    status: "draft",
    meta: {
        profile: [
            "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire|2.7"
        ],
        tag: [
            {
                "code": "lformsVersion: 32.0.2"
            }
        ]
    },
    item: [
        {
            type: "string",
            code: [
                {
                    code: "76435-7",
                    display: "Patient identifier"
                }
            ],
            required: false,
            linkId: "/76435-7",
            text: "Patient identifier",
            item: [
                {
                    text: "The patient identifier is a unique alphanumeric string that identifies a specific patient and is assigned by a specific organization (the assigning authority) that should be reported using [LOINC: 76698-0]. In HL7 v2 messages, the patient identifier is reported in PID-3.1 and the assigning authority in PID-3.4. Examples of patient identifiers are medical record number, driver's license number and Social Security number, and their corresponding assigning authorities are the appropriate healthcare facility, state motor vehicle administration and the Social Security Administration, respectively.",
                    type: "display",
                    linkId: "/76435-7-help",
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                text: "Help-Button",
                                coding: [
                                    {
                                        code: "help",
                                        display: "Help-Button",
                                        system: "http://hl7.org/fhir/questionnaire-item-control"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
    ]
}