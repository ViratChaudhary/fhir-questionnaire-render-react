export const testVisitQuestionnaire = {
    code: [
        {
            code: "76453-0",
            display: "Physical therapy initial visit panel"
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
                code: "lformsVersion: 32.0.2"
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
        {
            type: "choice",
            code: [
                {
                    code: "76698-0",
                    display: "Patient identifier assigning authority"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/76698-0",
            text: "Patient identifier assigning authority",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA6218-7",
                        display: "Hospital"
                    }
                },
                {
                    valueCoding: {
                        code: "LA4198-3",
                        display: "Dept of Motor Vehicles"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30117-8",
                        display: "Social Security Administration"
                    }
                }
            ],
            item: [
                {
                    text: "The patient identifier assigning authority is the organization that assigned the patient identifier reported using [LOINC: 76435-7]. In HL7 v2 messages, the patient identifier is reported in PID-3.1 and the assigning authority in PID-3.4. Examples of patient identifiers are medical record number, driver's license number and Social Security number, and their corresponding assigning authorities are the appropriate healthcare facility, state motor vehicle administration and the Social Security Administration, respectively.",
                    type: "display",
                    linkId: "/76698-0-help",
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
        {
            type: "string",
            code: [
                {
                    code: "76471-2",
                    display: "Organization EOC unique ID"
                }
            ],
            required: false,
            linkId: "/76471-2",
            text: "Organization EOC unique ID",
            item: [
                {
                    text: "The organization episode of care identifier is the unique alphanumeric identifier assigned by a healthcare provider to a given patient for a specific episode of care. An episode of care begins with the initial visit for care for a particular problem and ends when the patient is no longer continuing treatment for that problem. One episode of care can include just one visit or many visits, depending on how long it takes for the problem to resolve. If the patient seeks care for a different problem in the future, a new episode of care identifier will be assigned.",
                    type: "display",
                    linkId: "/76471-2-help",
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
        {
            type: "string",
            code: [
                {
                    code: "76470-4",
                    display: "Physical therapy organization federal tax ID"
                }
            ],
            required: false,
            linkId: "/76470-4",
            text: "Physical therapy organization federal tax ID"
        },
        {
            type: "string",
            code: [
                {
                    code: "76696-4",
                    display: "Physical therapy facility name"
                }
            ],
            required: false,
            linkId: "/76696-4",
            text: "Physical therapy facility name"
        },
        {
            type: "decimal",
            code: [
                {
                    code: "76423-3",
                    display: "Date of first visit"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                    valueCoding: {
                        code: "{mm/dd/yyyy}",
                        display: "{mm/dd/yyyy}",
                        system: "http://unitsofmeasure.org"
                    }
                }
            ],
            required: false,
            linkId: "/76423-3",
            text: "Date of first visit",
            item: [
                {
                    text: "This term was created for, but is not limited in use to, the American Physical Therapy Association's Physical Therapy Outcomes Registry. In the context of this registry, the date of the first visit is considered the start date for a specific episode of care.",
                    type: "display",
                    linkId: "/76423-3-help",
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
        {
            type: "string",
            code: [
                {
                    code: "76417-5",
                    display: "Provider First name"
                }
            ],
            required: false,
            linkId: "/76417-5",
            text: "Provider First name"
        },
        {
            type: "string",
            code: [
                {
                    code: "76419-1",
                    display: "Provider Last name"
                }
            ],
            required: false,
            linkId: "/76419-1",
            text: "Provider Last name"
        },
        {
            type: "string",
            code: [
                {
                    code: "45952-9",
                    display: "Provider NPI"
                }
            ],
            required: false,
            linkId: "/45952-9",
            text: "Provider NPI"
        },
        {
            type: "choice",
            code: [
                {
                    code: "86637-6",
                    display: "Provider role"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/86637-6",
            text: "Provider role",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA18968-0",
                        display: "Doctor"
                    }
                },
                {
                    valueCoding: {
                        code: "LA9291-1",
                        display: "Registered nurse"
                    }
                },
                {
                    valueCoding: {
                        code: "LA18967-2",
                        display: "Midwife"
                    }
                },
                {
                    valueCoding: {
                        code: "LA9292-9",
                        display: "Nurse practitioner"
                    }
                },
                {
                    valueCoding: {
                        code: "LA9296-0",
                        display: "Physician assistant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22037-8",
                        display: "Physical therapist"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22038-6",
                        display: "Physical therapist assistant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA46-8",
                        display: "Other"
                    }
                },
                {
                    valueCoding: {
                        code: "LA29256-7",
                        display: "Student Physical therapist"
                    }
                },
                {
                    valueCoding: {
                        code: "LA29257-5",
                        display: "Student Physical therapy assistant"
                    }
                }
            ],
            item: [
                {
                    text: "The role of the clinical provider (e.g. doctor, registered nurse) that provided services at the encounter.",
                    type: "display",
                    linkId: "/86637-6-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "18630-4",
                    display: "Diagnosis.primary"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/18630-4",
            text: "Diagnosis.primary",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA46-8",
                        display: "Other"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20350-7",
                        display: "Alcoholism"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20352-3",
                        display: "Bleeding disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20353-1",
                        display: "Currently receiving chemotherapy for cancer"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20354-9",
                        display: "Congenital anomalies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA12740-9",
                        display: "Congestive heart failure (CHF)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20356-4",
                        display: "Current smoker"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20357-2",
                        display: "Chronic renal failure"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22244-0",
                        display: "Cerebrovascular accident"
                    }
                },
                {
                    valueCoding: {
                        code: "LA14291-1",
                        display: "Diabetes mellitus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20360-6",
                        display: "Disseminated cancer"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20361-4",
                        display: "Advanced directive limiting care"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20363-0",
                        display: "Functionally dependent health status"
                    }
                },
                {
                    valueCoding: {
                        code: "LA7444-8",
                        display: "Hypertension"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20368-9",
                        display: "Prematurity"
                    }
                },
                {
                    valueCoding: {
                        code: "LA28200-6",
                        display: "Chronic obstructive pulmonary disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20370-5",
                        display: "Steroid use"
                    }
                },
                {
                    valueCoding: {
                        code: "LA9639-1",
                        display: "Cirrhosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA20372-1",
                        display: "Dementia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA28412-7",
                        display: "Attention deficit disorder/Attention deficit hyperactivity disorder (ADD/ADHD)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA28199-0",
                        display: "Anticoagulant therapy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA14275-4",
                        display: "Angina pectoris"
                    }
                },
                {
                    valueCoding: {
                        code: "LA28198-2",
                        display: "Mental/personality disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA14274-7",
                        display: "Myocardial infarction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA28197-4",
                        display: "Peripheral arterial disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA28195-8",
                        display: "Substance abuse disorder"
                    }
                }
            ]
        },
        {
            type: "string",
            code: [
                {
                    code: "81885-6",
                    display: "Dx.secondary"
                }
            ],
            required: false,
            linkId: "/81885-6",
            text: "Dx.secondary"
        },
        {
            type: "string",
            code: [
                {
                    code: "89177-0",
                    display: "Movement system dx"
                }
            ],
            required: false,
            linkId: "/89177-0",
            text: "Movement system dx",
            item: [
                {
                    text: "The movement system represents the collection of systems (cardiovascular, pulmonary, endocrine, integumentary, nervous, and musculoskeletal) that interact to move the body or its component parts.\r\n\r\nThe following criteria can be used with diagnostic classification systems/labels: 1) Use recognized movement-related terms to describe the condition or syndrome of the movement system. Include, if deemed necessary, the name of the pathology, disease, disorder, anatomical or physiological terms, and stage of recovery associated with the diagnosis; 2) Be as succinct and direct as possible to improve clinical usefulness; 3) Strive for movement system diagnoses that span all populations, health conditions, and the lifespan. Whenever possible, use similar movement-related terms to describe similar movements, regardless of pathology or other characteristics of the patient or client.",
                    type: "display",
                    linkId: "/89177-0-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "76442-3",
                    display: "Primary health cond"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/76442-3",
            text: "Primary health cond",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA22196-2",
                        display: "Cardio/pulm: Adult respiratory distress syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25628-1",
                        display: "Cardio/pulm: Aneurysm"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25629-9",
                        display: "Cardio/pulm: Angina"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25630-7",
                        display: "Cardio/pulm: Arterial system abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25631-5",
                        display: "Cardio/pulm: Asthma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25632-3",
                        display: "Cardio/pulm: Atelectasis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25633-1",
                        display: "Cardio/pulm: Bronchiectasis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22197-0",
                        display: "Cardio/pulm: Cardiac arrhythmia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22199-6",
                        display: "Cardio/pulm: Chronic obstructive lung disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22088-1",
                        display: "Cardio/pulm: Claudication"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22201-0",
                        display: "Cardio/pulm: Congenital anomaly of heart (eg, atrial septal defect, tetralogy of fallot)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25635-6",
                        display: "Cardio/pulm: Congestive heart failure"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25636-4",
                        display: "Cardio/pulm: Coronary artery disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25637-2",
                        display: "Cardio/pulm: Cystic fibrosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22203-6",
                        display: "Cardio/pulm: Emphysema"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25638-0",
                        display: "Cardio/pulm: Fibrosis of lung"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25639-8",
                        display: "Cardio/pulm: Heart failure"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25532-5",
                        display: "Cardio/pulm: Heart transplant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25641-4",
                        display: "Cardio/pulm: Heart valve disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25642-2",
                        display: "Cardio/pulm: Hypertensive disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25534-1",
                        display: "Cardio/pulm: Lung transplant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25644-8",
                        display: "Cardio/pulm: Lymphatic system abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25645-5",
                        display: "Cardio/pulm: Malignant tumor of lung"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25646-3",
                        display: "Cardio/pulm: Myocardial infarction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25647-1",
                        display: "Cardio/pulm: Peripheral nervous system abnormality (e.g. neuropathic wounds; offloading Charcot fracture)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25648-9",
                        display: "Cardio/pulm: Peripheral vascular disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25649-7",
                        display: "Cardio/pulm: Pleural effusion"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25650-5",
                        display: "Cardio/pulm: Pleurisy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25651-3",
                        display: "Cardio/pulm: Pneumonia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25652-1",
                        display: "Cardio/pulm: Pneumothorax"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25653-9",
                        display: "Cardio/pulm: Pulmonary edema"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25654-7",
                        display: "Cardio/pulm: Pulmonary embolism"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25655-4",
                        display: "Cardio/pulm: Pulmonary hypertension"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22207-7",
                        display: "Cardio/pulm: Respiratory failure"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25656-2",
                        display: "Cardio/pulm: Venous system abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22253-1",
                        display: "ElectroPhys: Mononeuropathy (e.g., Median, ulnar, radial, axillary, musculocutaneous, suprascapular, tibial, fibular, and sural)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22251-5",
                        display: "ElectroPhys: Motor neuron disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22257-2",
                        display: "ElectroPhys: Myopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25627-3",
                        display: "ElectroPhys: Nerve plexus disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22258-0",
                        display: "ElectroPhys: Neuromuscular Junction Disorders (e.g., Myasthenia Gravis & Lambert Eaton Syndrome)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22254-9",
                        display: "ElectroPhys: Polyneuropathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22255-6",
                        display: "ElectroPhys: Radiculopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25661-2",
                        display: "Integumentary: Burn"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25662-0",
                        display: "Integumentary: Neuropathic wounds due to diabetes"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22311-7",
                        display: "Integumentary: Pressure ulcer"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25663-8",
                        display: "Integumentary: Scar tissue (e.g. skin, pelvic, abdominal, perineal)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22098-0",
                        display: "Integumentary: Skin disorder (e.g. fungal rashes, contact dermatitis, moisture associated dermatitis, psoriasis )"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22309-1",
                        display: "Integumentary: Surgical wound complication"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25664-6",
                        display: "Integumentary: Traumatic wound abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25665-3",
                        display: "Integumentary: Wound disorder, other"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22194-7",
                        display: "Med: Acute infectious disease (e.g. cellulitis, UTI, C-diff)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22208-5",
                        display: "Med: amputation"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25666-1",
                        display: "Med: Anemia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25667-9",
                        display: "Med: Autoimmune disorders (e.g. RA, lupus)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25668-7",
                        display: "Med: Bone density below reference range (e.g. osteopenia/osteoporosis)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25669-5",
                        display: "Med: Colorectal disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25670-3",
                        display: "Med: Constipation"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25671-1",
                        display: "Med: Dehydration"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25672-9",
                        display: "Med: Dementia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25673-7",
                        display: "Med: Diabetes mellitus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22314-1",
                        display: "Med: Diabetic neuropathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22285-3",
                        display: "Med: Dyspareunia (Psychologic)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25675-2",
                        display: "Med: Electrolyte imbalance"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25676-0",
                        display: "Med: Falls"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25677-8",
                        display: "Med: Fecal incontinence"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25678-6",
                        display: "Med: Frailty"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25679-4",
                        display: "Med: Hyperlipidemia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22291-1",
                        display: "Med: Interstitial Cystitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22292-9",
                        display: "Med: Irritable bowel syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25680-2",
                        display: "Med: Lymphedema"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25681-0",
                        display: "Med: Malignant neoplastic disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25682-8",
                        display: "Med: Nocturnal enuresis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25683-6",
                        display: "Med: Obesity"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25684-4",
                        display: "Med: Renal failure syndrome (acute/chronic)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25685-1",
                        display: "Med: Retention of urine"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25686-9",
                        display: "Med: Sepsis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25687-7",
                        display: "Med: Sports injury, non-musculoskeletal (e.g. Heat-related illness, skin lesions, exercise –induced asthma)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25688-5",
                        display: "Med: Transplant, other (e.g. kidney and liver)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25689-3",
                        display: "Med: Urinary frequency"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22303-4",
                        display: "Med: Urinary Incontinence (stress, urge, mixed)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25690-1",
                        display: "Med: Urinary urgency"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22218-4",
                        display: "MSK: Chronic pain syndromes (e.g. fibromyalgia)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25691-9",
                        display: "MSK: Connective tissue disorder (e.g. Marfan, Ehlers-Danlos, lupus)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22284-6",
                        display: "MSK: Diastasis recti"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25692-7",
                        display: "MSK: Musculoskeletal pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25693-5",
                        display: "MSK: Osteogenesis imperfecta"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25747-9",
                        display: "MSK-Ankle/foot: Fracture"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25748-7",
                        display: "MSK-Ankle/foot: Hallux valgus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25749-5",
                        display: "MSK-Ankle/foot: Ligamentous injuries"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25752-9",
                        display: "MSK-Ankle/foot: Other disorders of ankle or foot"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25750-3",
                        display: "MSK-Ankle/foot: Plantar fasciitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25751-1",
                        display: "MSK-Ankle/foot: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25725-5",
                        display: "MSK-Elbow: Cubital tunnel syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25726-3",
                        display: "MSK-Elbow: Fracture (includes forearm)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25727-1",
                        display: "MSK-Elbow: Instability (e.g. subluxation/dislocation, ligamentous)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25729-7",
                        display: "MSK-Elbow: Other disorders of the elbow or forearm"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25728-9",
                        display: "MSK-Elbow: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22213-5",
                        display: "MSK-Hand/wrist: Carpal tunnel syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25730-5",
                        display: "MSK-Hand/wrist: Fracture (including fingers)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25731-3",
                        display: "MSK-Hand/wrist: Instability including fingers (e.g. subluxation/dislocation, ligamentous)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25733-9",
                        display: "MSK-Hand/wrist: Other disorders of the wrist, hand or fingers"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25732-1",
                        display: "MSK-Hand/wrist: Tendinopathies including fingers"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25694-3",
                        display: "MSK-Head/neck: Cervicogenic headache"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25695-0",
                        display: "MSK-Head/neck: Other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22214-3",
                        display: "MSK-Head/neck: Temporomandibular dysfunction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22225-9",
                        display: "MSK-Hip: Femoroacetabular impingement"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22086-5",
                        display: "MSK-Hip: Fracture"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25735-4",
                        display: "MSK-Hip: Osteoarthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25736-2",
                        display: "MSK-Hip: Osteochondral defect (femoral head)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25739-6",
                        display: "MSK-Hip: Other disorders of the hip and thigh"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25737-0",
                        display: "MSK-Hip: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30065-9",
                        display: "MSK-Hip: Total replacement"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25738-8",
                        display: "MSK-Hip: Trochanteric bursitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25740-4",
                        display: "MSK-Knee: Fracture (patella, distal femur, proximal tibia)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25741-2",
                        display: "MSK-Knee: Ligamentous injuries"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25742-0",
                        display: "MSK-Knee: Meniscal disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25743-8",
                        display: "MSK-Knee: Osteoarthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25744-6",
                        display: "MSK-Knee: Osteochondral defect (distal femur, tibial or patella)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25746-1",
                        display: "MSK-Knee: Other disorders of the knee"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22222-6",
                        display: "MSK-Knee: Patellofemoral dysfunction (Disorder of patellofemoral joint)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25745-3",
                        display: "MSK-Knee: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30066-7",
                        display: "MSK-Knee: Total replacement"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22212-7",
                        display: "MSK-Shld: Adhesive capsulitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25719-8",
                        display: "MSK-Shld: Complex/upper arm fracture"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25720-6",
                        display: "MSK-Shld: Injury of glenoid labrum"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25721-4",
                        display: "MSK-Shld: Instability (eg, subluxation/dislocation, ligamentous)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22085-7",
                        display: "MSK-Shld: Osteoarthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25722-2",
                        display: "MSK-Shld: Osteochondral defect (humeral head)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25724-8",
                        display: "MSK-Shld: Other disorders of the shoulder complex"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22224-2",
                        display: "MSK-Shld: Rotator cuff syndromes"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25696-8",
                        display: "MSK-Spine: Cervical disc disorder (e.g. DDD, protrusion, herniation)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25697-6",
                        display: "MSK-Spine: Cervical instability"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25702-4",
                        display: "MSK-Spine: Cervical other disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25698-4",
                        display: "MSK-Spine: Cervical radiculopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25699-2",
                        display: "MSK-Spine: Cervical sprain/strain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25700-8",
                        display: "MSK-Spine: Cervical stenosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25701-6",
                        display: "MSK-Spine: Curvature of spine (eg, scoliosis, kyphosis, lordosis)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25708-1",
                        display: "MSK-Spine: Lumbar disc disorder (eg, DDD, protrusion, hermiation)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25709-9",
                        display: "MSK-Spine: Lumbar instability"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25714-9",
                        display: "MSK-Spine: Lumbar other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25710-7",
                        display: "MSK-Spine: Lumbar radiculopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25711-5",
                        display: "MSK-Spine: Lumbar spondylosis/spondylolisthesis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25712-3",
                        display: "MSK-Spine: Lumbar stenosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25713-1",
                        display: "MSK-Spine: Lumbar strain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30064-2",
                        display: "MSK-Spine: Neck pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25718-0",
                        display: "MSK-Spine: Pelvic other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25715-6",
                        display: "MSK-Spine: Pelvic pain in the coccyx"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25716-4",
                        display: "MSK-Spine: Pelvic piriformis syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25717-2",
                        display: "MSK-Spine: Pelvic sacroiliac dysfunction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25707-3",
                        display: "MSK-Spine: Thoracic other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25703-2",
                        display: "MSK-Spine: Thoracic outlet syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25704-0",
                        display: "MSK-Spine: Thoracic rib dysfunction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25705-7",
                        display: "MSK-Spine: Thoracic sprain/strain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25706-5",
                        display: "MSK-Spine: Thoracic stenosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22236-6",
                        display: "Neuro: Acquired brain injury"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22237-4",
                        display: "Neuro: Anoxia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25754-5",
                        display: "Neuro: Brachial plexus injury"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22242-4",
                        display: "Neuro: Central nervous system infections (eg, Viral or bacterial infections of the central nervous system)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22243-2",
                        display: "Neuro: Central nervous system neoplasms"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22239-0",
                        display: "Neuro: Cerebellar disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22240-8",
                        display: "Neuro: Cerebral palsy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25758-6",
                        display: "Neuro: Cerebrovascular accident"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25759-4",
                        display: "Neuro: Concussion"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25760-2",
                        display: "Neuro: Encephalopathy (toxic, metabolic, anoxic)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25761-0",
                        display: "Neuro: Hypotonia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25762-8",
                        display: "Neuro: Multiple Sclerosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25763-6",
                        display: "Neuro: Neurogenic bladder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25764-4",
                        display: "Neuro: Neurologic disorder, progressive (e.g. ALS, Huntington's disease)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22248-1",
                        display: "Neuro: Normal pressure hydrocephalus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22249-9",
                        display: "Neuro: Parkinson's disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22095-6",
                        display: "Neuro: Peripheral neuropathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25765-1",
                        display: "Neuro: Spinal cord injury"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22250-7",
                        display: "Neuro: Vestibular disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30069-1",
                        display: "Onc: Leukemia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30070-9",
                        display: "Onc: Malignant lymphoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30071-7",
                        display: "Onc: Malignant melanoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30072-5",
                        display: "Onc: Malignant neoplasm of brain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30073-3",
                        display: "Onc: Malignant neoplasm of breast"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30074-1",
                        display: "Onc: Malignant neoplasm of central nervous system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30075-8",
                        display: "Onc: Malignant neoplasm of testis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30076-6",
                        display: "Onc: Malignant neoplasm of uterus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30077-4",
                        display: "Onc: Malignant tumor of cervix"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30078-2",
                        display: "Onc: Malignant tumor of head and/or neck"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30079-0",
                        display: "Onc: Malignant tumor of kidney"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30080-8",
                        display: "Onc: Malignant tumor of large intestine"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30081-6",
                        display: "Onc: Malignant tumor of lung"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30082-4",
                        display: "Onc: Malignant tumor of ovary"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30083-2",
                        display: "Onc: Malignant tumor of pancreas"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30084-0",
                        display: "Onc: Malignant tumor of prostate"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30085-7",
                        display: "Onc: Malignant tumor of stomach"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30086-5",
                        display: "Onc: Malignant tumor of thyroid gland"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30087-3",
                        display: "Onc: Malignant tumor of urinary bladder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30088-1",
                        display: "Onc: Multiple myeloma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30089-9",
                        display: "Onc: Osteosarcoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30090-7",
                        display: "Onc: Sarcoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22259-8",
                        display: "Pediatric: Arthrogryposis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22261-4",
                        display: "Pediatric: Autism spectrum disorders (autistic disorder)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22262-2",
                        display: "Pediatric: Bronchopulmonary dysplasia of newborn"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25766-9",
                        display: "Pediatric: Complications of prematurity (e.g. osteopenia, RSD, IVH, BD)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25767-7",
                        display: "Pediatric: Congenital leg length discrepancy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22264-8",
                        display: "Pediatric: Developmental coordination disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22265-5",
                        display: "Pediatric: Developmental delay"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22266-3",
                        display: "Pediatric: Down syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22267-1",
                        display: "Pediatric: Genetic syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22270-5",
                        display: "Pediatric: High risk infant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22271-3",
                        display: "Pediatric: Juvenile idiopathic arthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25768-5",
                        display: "Pediatric: Juvenile osteochondrosis of tibial tubercle"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22273-9",
                        display: "Pediatric: Muscular dystrophy (eg, Duchenne, Becker, SMA)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22274-7",
                        display: "Pediatric: Myelodysplasia/Spina Bifida (e.g. spina bifida, Arnold-Chiari, hydrocephalus)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22277-0",
                        display: "Pediatric: Rett syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25769-3",
                        display: "Pediatric: Sensory processing disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25770-1",
                        display: "Pediatric: Torticollis/plagiocephaly"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22280-4",
                        display: "Women's health: Amenorrhea/dysmenorrhea"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22286-1",
                        display: "Women's health: Endometriosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22287-9",
                        display: "Women's health: Female athlete/female athlete triad"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22288-7",
                        display: "Women's health: Gynecologic conditions/surgery"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22289-5",
                        display: "Women's health: High-risk pregnancy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22290-3",
                        display: "Women's health: Hysterectomy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22295-2",
                        display: "Women's health: Menopause"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25626-5",
                        display: "Women's health: Neoplasm of breast"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25625-7",
                        display: "Women's health: Neoplasm of ovary"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22304-2",
                        display: "Women's health: Neoplasm of uterus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22297-8",
                        display: "Women's health: Pelvic adhesions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22130-1",
                        display: "Women's health: Pelvic girdle pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22300-0",
                        display: "Women's health: Pelvic organ prolapse"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22301-8",
                        display: "Women's health: Pelvic pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22305-9",
                        display: "Women's health: Vaginismus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22306-7",
                        display: "Women's health: Vulvar vestibulitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22307-5",
                        display: "Women's health: Vulvodynia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA46-8",
                        display: "Other"
                    }
                },
                {
                    valueCoding: {
                        code: "LA137-2",
                        display: "None"
                    }
                }
            ],
            item: [
                {
                    text: "The primary health condition is the patient's most significant diagnosis and is commonly reported using the preferred answer list; however, it may be reported using ICD-9-CM, ICD-10-CM or SNOMED CT codes.",
                    type: "display",
                    linkId: "/76442-3-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "76472-0",
                    display: "Other health condition"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/76472-0",
            text: "Other health condition",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA22196-2",
                        display: "Cardio/pulm: Adult respiratory distress syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25628-1",
                        display: "Cardio/pulm: Aneurysm"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25629-9",
                        display: "Cardio/pulm: Angina"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25630-7",
                        display: "Cardio/pulm: Arterial system abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25631-5",
                        display: "Cardio/pulm: Asthma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25632-3",
                        display: "Cardio/pulm: Atelectasis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25633-1",
                        display: "Cardio/pulm: Bronchiectasis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22197-0",
                        display: "Cardio/pulm: Cardiac arrhythmia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22199-6",
                        display: "Cardio/pulm: Chronic obstructive lung disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22088-1",
                        display: "Cardio/pulm: Claudication"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22201-0",
                        display: "Cardio/pulm: Congenital anomaly of heart (eg, atrial septal defect, tetralogy of fallot)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25635-6",
                        display: "Cardio/pulm: Congestive heart failure"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25636-4",
                        display: "Cardio/pulm: Coronary artery disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25637-2",
                        display: "Cardio/pulm: Cystic fibrosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22203-6",
                        display: "Cardio/pulm: Emphysema"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25638-0",
                        display: "Cardio/pulm: Fibrosis of lung"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25639-8",
                        display: "Cardio/pulm: Heart failure"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25532-5",
                        display: "Cardio/pulm: Heart transplant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25641-4",
                        display: "Cardio/pulm: Heart valve disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25642-2",
                        display: "Cardio/pulm: Hypertensive disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25534-1",
                        display: "Cardio/pulm: Lung transplant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25644-8",
                        display: "Cardio/pulm: Lymphatic system abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25645-5",
                        display: "Cardio/pulm: Malignant tumor of lung"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25646-3",
                        display: "Cardio/pulm: Myocardial infarction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25647-1",
                        display: "Cardio/pulm: Peripheral nervous system abnormality (e.g. neuropathic wounds; offloading Charcot fracture)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25648-9",
                        display: "Cardio/pulm: Peripheral vascular disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25649-7",
                        display: "Cardio/pulm: Pleural effusion"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25650-5",
                        display: "Cardio/pulm: Pleurisy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25651-3",
                        display: "Cardio/pulm: Pneumonia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25652-1",
                        display: "Cardio/pulm: Pneumothorax"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25653-9",
                        display: "Cardio/pulm: Pulmonary edema"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25654-7",
                        display: "Cardio/pulm: Pulmonary embolism"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25655-4",
                        display: "Cardio/pulm: Pulmonary hypertension"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22207-7",
                        display: "Cardio/pulm: Respiratory failure"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25656-2",
                        display: "Cardio/pulm: Venous system abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22253-1",
                        display: "ElectroPhys: Mononeuropathy (e.g., Median, ulnar, radial, axillary, musculocutaneous, suprascapular, tibial, fibular, and sural)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22251-5",
                        display: "ElectroPhys: Motor neuron disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22257-2",
                        display: "ElectroPhys: Myopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25627-3",
                        display: "ElectroPhys: Nerve plexus disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22258-0",
                        display: "ElectroPhys: Neuromuscular Junction Disorders (e.g., Myasthenia Gravis & Lambert Eaton Syndrome)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22254-9",
                        display: "ElectroPhys: Polyneuropathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22255-6",
                        display: "ElectroPhys: Radiculopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25661-2",
                        display: "Integumentary: Burn"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25662-0",
                        display: "Integumentary: Neuropathic wounds due to diabetes"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22311-7",
                        display: "Integumentary: Pressure ulcer"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25663-8",
                        display: "Integumentary: Scar tissue (e.g. skin, pelvic, abdominal, perineal)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22098-0",
                        display: "Integumentary: Skin disorder (e.g. fungal rashes, contact dermatitis, moisture associated dermatitis, psoriasis )"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22309-1",
                        display: "Integumentary: Surgical wound complication"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25664-6",
                        display: "Integumentary: Traumatic wound abnormality"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25665-3",
                        display: "Integumentary: Wound disorder, other"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22194-7",
                        display: "Med: Acute infectious disease (e.g. cellulitis, UTI, C-diff)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22208-5",
                        display: "Med: amputation"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25666-1",
                        display: "Med: Anemia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25667-9",
                        display: "Med: Autoimmune disorders (e.g. RA, lupus)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25668-7",
                        display: "Med: Bone density below reference range (e.g. osteopenia/osteoporosis)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25669-5",
                        display: "Med: Colorectal disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25670-3",
                        display: "Med: Constipation"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25671-1",
                        display: "Med: Dehydration"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25672-9",
                        display: "Med: Dementia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25673-7",
                        display: "Med: Diabetes mellitus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22314-1",
                        display: "Med: Diabetic neuropathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22285-3",
                        display: "Med: Dyspareunia (Psychologic)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25675-2",
                        display: "Med: Electrolyte imbalance"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25676-0",
                        display: "Med: Falls"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25677-8",
                        display: "Med: Fecal incontinence"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25678-6",
                        display: "Med: Frailty"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25679-4",
                        display: "Med: Hyperlipidemia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22291-1",
                        display: "Med: Interstitial Cystitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22292-9",
                        display: "Med: Irritable bowel syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25680-2",
                        display: "Med: Lymphedema"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25681-0",
                        display: "Med: Malignant neoplastic disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25682-8",
                        display: "Med: Nocturnal enuresis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25683-6",
                        display: "Med: Obesity"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25684-4",
                        display: "Med: Renal failure syndrome (acute/chronic)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25685-1",
                        display: "Med: Retention of urine"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25686-9",
                        display: "Med: Sepsis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25687-7",
                        display: "Med: Sports injury, non-musculoskeletal (e.g. Heat-related illness, skin lesions, exercise –induced asthma)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25688-5",
                        display: "Med: Transplant, other (e.g. kidney and liver)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25689-3",
                        display: "Med: Urinary frequency"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22303-4",
                        display: "Med: Urinary Incontinence (stress, urge, mixed)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25690-1",
                        display: "Med: Urinary urgency"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22218-4",
                        display: "MSK: Chronic pain syndromes (e.g. fibromyalgia)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25691-9",
                        display: "MSK: Connective tissue disorder (e.g. Marfan, Ehlers-Danlos, lupus)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22284-6",
                        display: "MSK: Diastasis recti"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25692-7",
                        display: "MSK: Musculoskeletal pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25693-5",
                        display: "MSK: Osteogenesis imperfecta"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25747-9",
                        display: "MSK-Ankle/foot: Fracture"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25748-7",
                        display: "MSK-Ankle/foot: Hallux valgus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25749-5",
                        display: "MSK-Ankle/foot: Ligamentous injuries"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25752-9",
                        display: "MSK-Ankle/foot: Other disorders of ankle or foot"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25750-3",
                        display: "MSK-Ankle/foot: Plantar fasciitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25751-1",
                        display: "MSK-Ankle/foot: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25725-5",
                        display: "MSK-Elbow: Cubital tunnel syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25726-3",
                        display: "MSK-Elbow: Fracture (includes forearm)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25727-1",
                        display: "MSK-Elbow: Instability (e.g. subluxation/dislocation, ligamentous)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25729-7",
                        display: "MSK-Elbow: Other disorders of the elbow or forearm"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25728-9",
                        display: "MSK-Elbow: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22213-5",
                        display: "MSK-Hand/wrist: Carpal tunnel syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25730-5",
                        display: "MSK-Hand/wrist: Fracture (including fingers)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25731-3",
                        display: "MSK-Hand/wrist: Instability including fingers (e.g. subluxation/dislocation, ligamentous)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25733-9",
                        display: "MSK-Hand/wrist: Other disorders of the wrist, hand or fingers"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25732-1",
                        display: "MSK-Hand/wrist: Tendinopathies including fingers"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25694-3",
                        display: "MSK-Head/neck: Cervicogenic headache"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25695-0",
                        display: "MSK-Head/neck: Other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22214-3",
                        display: "MSK-Head/neck: Temporomandibular dysfunction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22225-9",
                        display: "MSK-Hip: Femoroacetabular impingement"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22086-5",
                        display: "MSK-Hip: Fracture"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25735-4",
                        display: "MSK-Hip: Osteoarthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25736-2",
                        display: "MSK-Hip: Osteochondral defect (femoral head)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25739-6",
                        display: "MSK-Hip: Other disorders of the hip and thigh"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25737-0",
                        display: "MSK-Hip: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30065-9",
                        display: "MSK-Hip: Total replacement"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25738-8",
                        display: "MSK-Hip: Trochanteric bursitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25740-4",
                        display: "MSK-Knee: Fracture (patella, distal femur, proximal tibia)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25741-2",
                        display: "MSK-Knee: Ligamentous injuries"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25742-0",
                        display: "MSK-Knee: Meniscal disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25743-8",
                        display: "MSK-Knee: Osteoarthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25744-6",
                        display: "MSK-Knee: Osteochondral defect (distal femur, tibial or patella)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25746-1",
                        display: "MSK-Knee: Other disorders of the knee"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22222-6",
                        display: "MSK-Knee: Patellofemoral dysfunction (Disorder of patellofemoral joint)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25745-3",
                        display: "MSK-Knee: Tendinopathies"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30066-7",
                        display: "MSK-Knee: Total replacement"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22212-7",
                        display: "MSK-Shld: Adhesive capsulitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25719-8",
                        display: "MSK-Shld: Complex/upper arm fracture"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25720-6",
                        display: "MSK-Shld: Injury of glenoid labrum"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25721-4",
                        display: "MSK-Shld: Instability (eg, subluxation/dislocation, ligamentous)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22085-7",
                        display: "MSK-Shld: Osteoarthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25722-2",
                        display: "MSK-Shld: Osteochondral defect (humeral head)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25724-8",
                        display: "MSK-Shld: Other disorders of the shoulder complex"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22224-2",
                        display: "MSK-Shld: Rotator cuff syndromes"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25696-8",
                        display: "MSK-Spine: Cervical disc disorder (e.g. DDD, protrusion, herniation)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25697-6",
                        display: "MSK-Spine: Cervical instability"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25702-4",
                        display: "MSK-Spine: Cervical other disorder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25698-4",
                        display: "MSK-Spine: Cervical radiculopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25699-2",
                        display: "MSK-Spine: Cervical sprain/strain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25700-8",
                        display: "MSK-Spine: Cervical stenosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25701-6",
                        display: "MSK-Spine: Curvature of spine (eg, scoliosis, kyphosis, lordosis)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25708-1",
                        display: "MSK-Spine: Lumbar disc disorder (eg, DDD, protrusion, hermiation)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25709-9",
                        display: "MSK-Spine: Lumbar instability"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25714-9",
                        display: "MSK-Spine: Lumbar other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25710-7",
                        display: "MSK-Spine: Lumbar radiculopathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25711-5",
                        display: "MSK-Spine: Lumbar spondylosis/spondylolisthesis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25712-3",
                        display: "MSK-Spine: Lumbar stenosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25713-1",
                        display: "MSK-Spine: Lumbar strain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30064-2",
                        display: "MSK-Spine: Neck pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25718-0",
                        display: "MSK-Spine: Pelvic other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25715-6",
                        display: "MSK-Spine: Pelvic pain in the coccyx"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25716-4",
                        display: "MSK-Spine: Pelvic piriformis syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25717-2",
                        display: "MSK-Spine: Pelvic sacroiliac dysfunction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25707-3",
                        display: "MSK-Spine: Thoracic other disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25703-2",
                        display: "MSK-Spine: Thoracic outlet syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25704-0",
                        display: "MSK-Spine: Thoracic rib dysfunction"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25705-7",
                        display: "MSK-Spine: Thoracic sprain/strain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25706-5",
                        display: "MSK-Spine: Thoracic stenosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22236-6",
                        display: "Neuro: Acquired brain injury"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22237-4",
                        display: "Neuro: Anoxia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25754-5",
                        display: "Neuro: Brachial plexus injury"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22242-4",
                        display: "Neuro: Central nervous system infections (eg, Viral or bacterial infections of the central nervous system)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22243-2",
                        display: "Neuro: Central nervous system neoplasms"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22239-0",
                        display: "Neuro: Cerebellar disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22240-8",
                        display: "Neuro: Cerebral palsy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25758-6",
                        display: "Neuro: Cerebrovascular accident"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25759-4",
                        display: "Neuro: Concussion"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25760-2",
                        display: "Neuro: Encephalopathy (toxic, metabolic, anoxic)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25761-0",
                        display: "Neuro: Hypotonia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25762-8",
                        display: "Neuro: Multiple Sclerosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25763-6",
                        display: "Neuro: Neurogenic bladder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25764-4",
                        display: "Neuro: Neurologic disorder, progressive (e.g. ALS, Huntington's disease)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22248-1",
                        display: "Neuro: Normal pressure hydrocephalus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22249-9",
                        display: "Neuro: Parkinson's disease"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22095-6",
                        display: "Neuro: Peripheral neuropathy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25765-1",
                        display: "Neuro: Spinal cord injury"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22250-7",
                        display: "Neuro: Vestibular disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30069-1",
                        display: "Onc: Leukemia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30070-9",
                        display: "Onc: Malignant lymphoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30071-7",
                        display: "Onc: Malignant melanoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30072-5",
                        display: "Onc: Malignant neoplasm of brain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30073-3",
                        display: "Onc: Malignant neoplasm of breast"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30074-1",
                        display: "Onc: Malignant neoplasm of central nervous system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30075-8",
                        display: "Onc: Malignant neoplasm of testis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30076-6",
                        display: "Onc: Malignant neoplasm of uterus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30077-4",
                        display: "Onc: Malignant tumor of cervix"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30078-2",
                        display: "Onc: Malignant tumor of head and/or neck"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30079-0",
                        display: "Onc: Malignant tumor of kidney"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30080-8",
                        display: "Onc: Malignant tumor of large intestine"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30081-6",
                        display: "Onc: Malignant tumor of lung"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30082-4",
                        display: "Onc: Malignant tumor of ovary"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30083-2",
                        display: "Onc: Malignant tumor of pancreas"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30084-0",
                        display: "Onc: Malignant tumor of prostate"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30085-7",
                        display: "Onc: Malignant tumor of stomach"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30086-5",
                        display: "Onc: Malignant tumor of thyroid gland"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30087-3",
                        display: "Onc: Malignant tumor of urinary bladder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30088-1",
                        display: "Onc: Multiple myeloma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30089-9",
                        display: "Onc: Osteosarcoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA30090-7",
                        display: "Onc: Sarcoma"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22259-8",
                        display: "Pediatric: Arthrogryposis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22261-4",
                        display: "Pediatric: Autism spectrum disorders (autistic disorder)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22262-2",
                        display: "Pediatric: Bronchopulmonary dysplasia of newborn"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25766-9",
                        display: "Pediatric: Complications of prematurity (e.g. osteopenia, RSD, IVH, BD)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25767-7",
                        display: "Pediatric: Congenital leg length discrepancy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22264-8",
                        display: "Pediatric: Developmental coordination disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22265-5",
                        display: "Pediatric: Developmental delay"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22266-3",
                        display: "Pediatric: Down syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22267-1",
                        display: "Pediatric: Genetic syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22270-5",
                        display: "Pediatric: High risk infant"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22271-3",
                        display: "Pediatric: Juvenile idiopathic arthritis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25768-5",
                        display: "Pediatric: Juvenile osteochondrosis of tibial tubercle"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22273-9",
                        display: "Pediatric: Muscular dystrophy (eg, Duchenne, Becker, SMA)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22274-7",
                        display: "Pediatric: Myelodysplasia/Spina Bifida (e.g. spina bifida, Arnold-Chiari, hydrocephalus)"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22277-0",
                        display: "Pediatric: Rett syndrome"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25769-3",
                        display: "Pediatric: Sensory processing disorders"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25770-1",
                        display: "Pediatric: Torticollis/plagiocephaly"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22280-4",
                        display: "Women's health: Amenorrhea/dysmenorrhea"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22286-1",
                        display: "Women's health: Endometriosis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22287-9",
                        display: "Women's health: Female athlete/female athlete triad"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22288-7",
                        display: "Women's health: Gynecologic conditions/surgery"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22289-5",
                        display: "Women's health: High-risk pregnancy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22290-3",
                        display: "Women's health: Hysterectomy"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22295-2",
                        display: "Women's health: Menopause"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25626-5",
                        display: "Women's health: Neoplasm of breast"
                    }
                },
                {
                    valueCoding: {
                        code: "LA25625-7",
                        display: "Women's health: Neoplasm of ovary"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22304-2",
                        display: "Women's health: Neoplasm of uterus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22297-8",
                        display: "Women's health: Pelvic adhesions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22130-1",
                        display: "Women's health: Pelvic girdle pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22300-0",
                        display: "Women's health: Pelvic organ prolapse"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22301-8",
                        display: "Women's health: Pelvic pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22305-9",
                        display: "Women's health: Vaginismus"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22306-7",
                        display: "Women's health: Vulvar vestibulitis"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22307-5",
                        display: "Women's health: Vulvodynia"
                    }
                },
                {
                    valueCoding: {
                        code: "LA46-8",
                        display: "Other"
                    }
                },
                {
                    valueCoding: {
                        code: "LA137-2",
                        display: "None"
                    }
                }
            ],
            item: [
                {
                    text: "The other health conditions are commonly reported using the preferred answer list; however, they may be reported using ICD-9-CM, ICD-10-CM or SNOMED CT codes.",
                    type: "display",
                    linkId: "/76472-0-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "76444-9",
                    display: "Problem Body function ICF code"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/76444-9",
            text: "Problem Body function ICF code",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA22106-1",
                        display: "Global mental functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22107-9",
                        display: "Specific mental functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22108-7",
                        display: "Seeing and related functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22109-5",
                        display: "Hearing"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22110-3",
                        display: "Vestibular functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22111-1",
                        display: "Proprioceptive and touch functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22112-9",
                        display: "Other sensory functions, pain, voice and speech functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22113-7",
                        display: "Functions of the cardiovascular system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22114-5",
                        display: "Functions of the immunological and hematological systems"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22115-2",
                        display: "Functions of the respiratory system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22116-0",
                        display: "Functions of the digestive system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22117-8",
                        display: "Functions related to metabolism and endocrine system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22118-6",
                        display: "Urinary functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22119-4",
                        display: "Genital and reproductive functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22120-2",
                        display: "Functions of the joints and bones"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22121-0",
                        display: "Muscle functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22122-8",
                        display: "Movement functions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22123-6",
                        display: "Functions of the skin"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22124-4",
                        display: "Functions of the hair and nails"
                    }
                },
                {
                    valueCoding: {
                        code: "LA137-2",
                        display: "None"
                    }
                }
            ],
            item: [
                {
                    text: "This term includes an answer list with example answers for body function. However, use of International Classification of Functioning, Disability and Health (ICF) codes (http://www.who.int/classifications/icf/en/) at the appropriate level of granularity is recommended where possible.",
                    type: "display",
                    linkId: "/76444-9-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "76445-6",
                    display: "Problem Body structure ICF code"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/76445-6",
            text: "Problem Body structure ICF code",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA22125-1",
                        display: "Structures Related to Movement"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22126-9",
                        display: "General/no specific body location"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22127-7",
                        display: "Head cervical spine"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22128-5",
                        display: "Thoracic spine"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22129-3",
                        display: "Lumbar spine"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22130-1",
                        display: "Women's health: Pelvic girdle pain"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22131-9",
                        display: "R hip"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22132-7",
                        display: "R thigh"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22133-5",
                        display: "R knee"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22134-3",
                        display: "R calf"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22135-0",
                        display: "R foot/ankle"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22136-8",
                        display: "R toes"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22137-6",
                        display: "R shoulder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22138-4",
                        display: "R arm"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22139-2",
                        display: "R elbow"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22140-0",
                        display: "R wrist"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22141-8",
                        display: "R hand"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22142-6",
                        display: "R fingers"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22143-4",
                        display: "L hip"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22144-2",
                        display: "L thigh"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22145-9",
                        display: "L knee"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22146-7",
                        display: "L calf"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22147-5",
                        display: "L foot/ankle"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22148-3",
                        display: "L toes"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22149-1",
                        display: "L shoulder"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22150-9",
                        display: "L arm"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22151-7",
                        display: "L elbow"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22152-5",
                        display: "L wrist"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22153-3",
                        display: "L hand"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22154-1",
                        display: "L fingers"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22155-8",
                        display: "Structures Involved in Voice, Speech, Swallowing"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22156-6",
                        display: "Nose"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22157-4",
                        display: "Mouth"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22158-2",
                        display: "Tongue"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22159-0",
                        display: "Pharynx"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22160-8",
                        display: "Larynx"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22161-6",
                        display: "Other Structures"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22162-4",
                        display: "Eye and related structures"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22163-2",
                        display: "Ear and related structures"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22164-0",
                        display: "Structures of the central nervous system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22165-7",
                        display: "Structures of the peripheral nervous system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22166-5",
                        display: "Structures of the cardiovascular, immunological and respiratory systems"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22167-3",
                        display: "Structures related to the digestive, metabolic, and endocrine systems"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22168-1",
                        display: "Structures related to the genitourinary and reproductive system"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22169-9",
                        display: "Skin and related structures"
                    }
                },
                {
                    valueCoding: {
                        code: "LA137-2",
                        display: "None"
                    }
                }
            ],
            item: [
                {
                    text: "This term includes an answer list with example answers for body structures. However, use of International Classification of Functioning, Disability and Health (ICF) codes (http://www.who.int/classifications/icf/en/) at the appropriate level of granularity is recommended where possible.",
                    type: "display",
                    linkId: "/76445-6-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "76446-4",
                    display: "Problem Activities and participation ICF code"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/76446-4",
            text: "Problem Activities and participation ICF code",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA22170-7",
                        display: "Purposeful sensory experiences"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22171-5",
                        display: "Basic learning"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22172-3",
                        display: "Applying knowledge"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22173-1",
                        display: "General tasks and demands"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22174-9",
                        display: "Communication reception"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22175-6",
                        display: "Communication expression"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22176-4",
                        display: "Conversation and use of communication devices"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22177-2",
                        display: "Changing and maintaining body position"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22178-0",
                        display: "Carrying, moving and handling objects"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22179-8",
                        display: "Walking and moving around"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22180-6",
                        display: "Moving around using transportation"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22181-4",
                        display: "Self-care"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22182-2",
                        display: "Acquisition of necessities"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22183-0",
                        display: "Household tasks, caring for household objects and assisting others"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22184-8",
                        display: "General interpersonal interactions"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22185-5",
                        display: "Education"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22186-3",
                        display: "Work and employment"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22187-1",
                        display: "Economic life"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22188-9",
                        display: "Community"
                    }
                },
                {
                    valueCoding: {
                        code: "LA22189-7",
                        display: "Social and civic life (e.g., sports)"
                    }
                }
            ],
            item: [
                {
                    text: "This term includes an answer list with example answers for activities and participation. However, use of International Classification of Functioning, Disability and Health (ICF) codes (http://www.who.int/classifications/icf/en/) at the appropriate level of granularity is recommended where possible.",
                    type: "display",
                    linkId: "/76446-4-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "89189-5",
                    display: "Clinical presentation status"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/89189-5",
            text: "Clinical presentation status",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA14122-8",
                        display: "Stable"
                    }
                },
                {
                    valueCoding: {
                        code: "LA14123-6",
                        display: "Unstable"
                    }
                },
                {
                    valueCoding: {
                        code: "LA29170-0",
                        display: "Evolving"
                    }
                }
            ]
        },
        {
            type: "choice",
            code: [
                {
                    code: "89188-7",
                    display: "Medication documentation status"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/89188-7",
            text: "Medication documentation status",
            answerOption: [
                {
                    valueCoding: {
                        code: "LA29167-6",
                        display: "Patient reports that they are not currently taking any medications"
                    }
                },
                {
                    valueCoding: {
                        code: "LA29168-4",
                        display: "All known prescriptions, over the counters, herbals, and vitamin/mineral/dietary (nutritional) supplements are documented and include the medications' name, dosages, frequency and route of administration"
                    }
                },
                {
                    valueCoding: {
                        code: "LA29169-2",
                        display: "Incomplete list of medication is documented"
                    }
                }
            ]
        },
        {
            type: "string",
            code: [
                {
                    code: "57828-6",
                    display: "Prescriptions"
                }
            ],
            required: false,
            linkId: "/57828-6",
            text: "Prescriptions",
            item: [
                {
                    text: "A document (or section) including a list of all prescriptions made for a patient (medications, services, admissions, equipment, etc.).",
                    type: "display",
                    linkId: "/57828-6-help",
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
        {
            type: "choice",
            code: [
                {
                    code: "92725-1",
                    display: "Prognosis for rehabilitation"
                }
            ],
            extension: [
                {
                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                    valueCodeableConcept: {
                        coding: [
                            {
                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                code: "drop-down",
                                display: "Drop down"
                            }
                        ],
                        text: "Drop down"
                    }
                }
            ],
            required: false,
            linkId: "/92725-1",
            text: "Prognosis for rehabilitation",
            answerOption: [
                {
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                            valueString: "1"
                        }
                    ],
                    valueCoding: {
                        code: "LA8969-3",
                        display: "Poor"
                    }
                },
                {
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                            valueString: "2"
                        }
                    ],
                    valueCoding: {
                        code: "LA9510-4",
                        display: "Guarded"
                    }
                },
                {
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                            valueString: "3"
                        }
                    ],
                    valueCoding: {
                        code: "LA8968-5",
                        display: "Fair"
                    }
                },
                {
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                            valueString: "4"
                        }
                    ],
                    valueCoding: {
                        code: "LA8967-7",
                        display: "Good"
                    }
                },
                {
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                            valueString: "5"
                        }
                    ],
                    valueCoding: {
                        code: "LA9206-9",
                        display: "Excellent"
                    }
                }
            ]
        },
        {
            type: "group",
            code: [
                {
                    code: "77574-2",
                    display: "Global measure of physical function panel"
                }
            ],
            required: false,
            linkId: "/77574-2",
            text: "Global measure of physical function panel",
            item: [
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79529-4",
                            display: "Basic mobility score [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79529-4",
                    text: "Basic mobility score [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Basic mobility includes basic movement and physical functioning activities, such as bending, walking, carrying, and climbing stairs. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79529-4-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79530-2",
                            display: "Basic mobility score SE [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79530-2",
                    text: "Basic mobility score SE [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Basic mobility includes basic movement and physical functioning activities, such as bending, walking, carrying, and climbing stairs. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79530-2-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79531-0",
                            display: "Basic mobility items # [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79531-0",
                    text: "Basic mobility items # [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Basic mobility includes basic movement and physical functioning activities, such as bending, walking, carrying, and climbing stairs. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79531-0-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79532-8",
                            display: "Daily activity score [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79532-8",
                    text: "Daily activity score [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Daily activity includes basic self-care and activities of daily living. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79532-8-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79533-6",
                            display: "Daily activity score SE [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79533-6",
                    text: "Daily activity score SE [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Daily activity includes basic self-care and activities of daily living. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79533-6-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79534-4",
                            display: "Daily activity items # [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79534-4",
                    text: "Daily activity items # [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Daily activity includes basic self-care and activities of daily living. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79534-4-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79535-1",
                            display: "Applied cognitive score [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79535-1",
                    text: "Applied cognitive score [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Applied cognition includes higher level cognitive functions that are necessary to live independently. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79535-1-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79536-9",
                            display: "Applied cognitive score SE [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79536-9",
                    text: "Applied cognitive score SE [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Applied cognition includes higher level cognitive functions that are necessary to live independently. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79536-9-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79537-7",
                            display: "Applied cognitive items # [AM-PAC]"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79537-7",
                    text: "Applied cognitive items # [AM-PAC]",
                    item: [
                        {
                            text: "The Boston University Activity Measure for Post-Acute Care (AM-PAC) instrument was developed as a functional outcomes measurement system that can be used across post-acute care settings. It assesses a set of functional activities in three separate areas - basic mobility, daily activity, and applied cognition - that most adults are likely to encounter during daily activities. Applied cognition includes higher level cognitive functions that are necessary to live independently. The electronic AM-PAC instrument results in a score and a standard error that represents the score's precision and is based on the number of questions answered. For example, answering more questions will result in higher precision as reflected by a lower standard error value.  [http://www.bu.edu/bostonroc/instruments/am-pac/]",
                            type: "display",
                            linkId: "/77574-2/79537-7-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79421-4",
                            display: "NM func index Score CareConn"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79421-4",
                    text: "NM func index Score CareConn"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "79422-2",
                            display: "Ortho func index Score CareConn"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/79422-2",
                    text: "Ortho func index Score CareConn"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "77866-2",
                            display: "PROMIS physical function - version 1.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/77866-2",
                    text: "PROMIS physical function - version 1.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "77874-6",
                            display: "PROMIS physical function - version 1.2 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/77874-6",
                    text: "PROMIS physical function - version 1.2 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "91721-1",
                            display: "PROMIS physical function - version 2.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/91721-1",
                    text: "PROMIS physical function - version 2.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "77580-9",
                            display: "PROMIS physical function w mobility aids - version 1.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/77580-9",
                    text: "PROMIS physical function w mobility aids - version 1.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "92391-2",
                            display: "PROMIS self-efficacy for managing daily activities - version 1.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/92391-2",
                    text: "PROMIS self-efficacy for managing daily activities - version 1.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "92448-0",
                            display: "PROMIS self-efficacy for managing symptoms - version 1.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/92448-0",
                    text: "PROMIS self-efficacy for managing symptoms - version 1.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "91612-2",
                            display: "PROMIS upper extremity version 2.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/91612-2",
                    text: "PROMIS upper extremity version 2.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "77578-3",
                            display: "PROMIS parent proxy mobility - version 1.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/77578-3",
                    text: "PROMIS parent proxy mobility - version 1.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "90705-5",
                            display: "PROMIS parent proxy mobility - version 2.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/90705-5",
                    text: "PROMIS parent proxy mobility - version 2.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "90884-8",
                            display: "PROMIS pediatric mobility - version 2.0 T-Score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/90884-8",
                    text: "PROMIS pediatric mobility - version 2.0 T-Score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "77579-1",
                            display: "PROMIS pediatric physical function - mobility - version 1.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77574-2/77579-1",
                    text: "PROMIS pediatric physical function - mobility - version 1.0 T-score"
                },
                {
                    text: "This panel contains terms for various instruments that are used to assess global patient function, including those from PROMIS, OPTIMAL, and Care Connections. This panel was created for, but is not limited in use to, the American Physical Therapy Association's Physical Therapy Outcomes Registry.",
                    type: "display",
                    linkId: "/77574-2-help",
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
        {
            type: "group",
            code: [
                {
                    code: "77575-9",
                    display: "Condition- or population-specific panel"
                }
            ],
            required: false,
            linkId: "/77575-9",
            text: "Condition- or population-specific panel",
            item: [
                {
                    type: "choice",
                    code: [
                        {
                            code: "52742-4",
                            display: "Pain intensity rating"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/52742-4",
                    text: "Pain intensity rating",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "0"
                                }
                            ],
                            valueCoding: {
                                code: "LA6111-4",
                                display: "0"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA6112-2",
                                display: "1"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA6113-0",
                                display: "2"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA6114-8",
                                display: "3"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA6115-5",
                                display: "4"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10137-0",
                                display: "5"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA10138-8",
                                display: "6"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "7"
                                }
                            ],
                            valueCoding: {
                                code: "LA10139-6",
                                display: "7"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "8"
                                }
                            ],
                            valueCoding: {
                                code: "LA10140-4",
                                display: "8"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "9"
                                }
                            ],
                            valueCoding: {
                                code: "LA10141-2",
                                display: "9"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "10"
                                }
                            ],
                            valueCoding: {
                                code: "LA13942-0",
                                display: "10"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "88"
                                }
                            ],
                            valueCoding: {
                                code: "LA10056-2",
                                display: "Patient does not answer or is unable to respond"
                            }
                        }
                    ]
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "71971-6",
                            display: "PROMIS-10 Global Health, GPH, T score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/71971-6",
                    text: "PROMIS-10 Global Health, GPH, T score",
                    item: [
                        {
                            text: "GPH = Global Physical Health. This score is calculated from question responses via coefficients. Valid range: 16.2 to 67.7.",
                            type: "display",
                            linkId: "/77575-9/71971-6-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "71969-0",
                            display: "PROMIS-10 Global Health, GMH, T score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{score}",
                                display: "{score}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/71969-0",
                    text: "PROMIS-10 Global Health, GMH, T score",
                    item: [
                        {
                            text: "GMH = Global Mental Health. This score is calculated from question responses via coefficients. Valid range: 21.2 to 67.6.",
                            type: "display",
                            linkId: "/77575-9/71969-0-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "77865-4",
                            display: "PROMIS pain interference - version 1.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/77865-4",
                    text: "PROMIS pain interference - version 1.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "89950-0",
                            display: "PROMIS parent proxy pain interference - version 2.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/89950-0",
                    text: "PROMIS parent proxy pain interference - version 2.0 T-score"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "89936-9",
                            display: "PROMIS pediatric pain interference - version 2.0 T-score"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{Tscore}",
                                display: "{Tscore}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/89936-9",
                    text: "PROMIS pediatric pain interference - version 2.0 T-score"
                },
                {
                    type: "group",
                    code: [
                        {
                            code: "82324-5",
                            display: "Knee injury and osteoarthritis outcome score for joint replacement"
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/82324-5",
                    text: "Knee injury and osteoarthritis outcome score for joint replacement",
                    item: [
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82325-2",
                                    display: "How severe is your knee stiffness after first wakening in the morning?"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82324-5/82325-2",
                            text: "How severe is your knee stiffness after first wakening in the morning?",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA137-2",
                                        display: "None"
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA6752-5",
                                        display: "Mild"
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA6751-7",
                                        display: "Moderate"
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA6750-9",
                                        display: "Severe"
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA11912-5",
                                        display: "Extreme"
                                    }
                                }
                            ]
                        },
                        {
                            type: "group",
                            code: [
                                {
                                    code: "86631-9",
                                    display: "Pain"
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82324-5/86631-9",
                            text: "Pain",
                            item: [
                                {
                                    type: "choice",
                                    code: [
                                        {
                                            code: "82326-0",
                                            display: "Twisting/pivoting on your knee"
                                        }
                                    ],
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                            valueCodeableConcept: {
                                                coding: [
                                                    {
                                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                                        code: "drop-down",
                                                        display: "Drop down"
                                                    }
                                                ],
                                                text: "Drop down"
                                            }
                                        }
                                    ],
                                    required: false,
                                    linkId: "/77575-9/82324-5/86631-9/82326-0",
                                    text: "Twisting/pivoting on your knee",
                                    answerOption: [
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "0"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 0
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA137-2",
                                                display: "None"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "1"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 1
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6752-5",
                                                display: "Mild"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "2"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 2
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6751-7",
                                                display: "Moderate"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "3"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 3
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6750-9",
                                                display: "Severe"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "4"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 4
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA11912-5",
                                                display: "Extreme"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "choice",
                                    code: [
                                        {
                                            code: "82327-8",
                                            display: "Straightening knee fully"
                                        }
                                    ],
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                            valueCodeableConcept: {
                                                coding: [
                                                    {
                                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                                        code: "drop-down",
                                                        display: "Drop down"
                                                    }
                                                ],
                                                text: "Drop down"
                                            }
                                        }
                                    ],
                                    required: false,
                                    linkId: "/77575-9/82324-5/86631-9/82327-8",
                                    text: "Straightening knee fully",
                                    answerOption: [
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "0"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 0
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA137-2",
                                                display: "None"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "1"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 1
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6752-5",
                                                display: "Mild"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "2"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 2
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6751-7",
                                                display: "Moderate"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "3"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 3
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6750-9",
                                                display: "Severe"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "4"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 4
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA11912-5",
                                                display: "Extreme"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "choice",
                                    code: [
                                        {
                                            code: "82328-6",
                                            display: "Going up or down stairs"
                                        }
                                    ],
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                            valueCodeableConcept: {
                                                coding: [
                                                    {
                                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                                        code: "drop-down",
                                                        display: "Drop down"
                                                    }
                                                ],
                                                text: "Drop down"
                                            }
                                        }
                                    ],
                                    required: false,
                                    linkId: "/77575-9/82324-5/86631-9/82328-6",
                                    text: "Going up or down stairs",
                                    answerOption: [
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "0"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 0
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA137-2",
                                                display: "None"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "1"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 1
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6752-5",
                                                display: "Mild"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "2"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 2
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6751-7",
                                                display: "Moderate"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "3"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 3
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6750-9",
                                                display: "Severe"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "4"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 4
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA11912-5",
                                                display: "Extreme"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "choice",
                                    code: [
                                        {
                                            code: "82329-4",
                                            display: "Standing upright"
                                        }
                                    ],
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                            valueCodeableConcept: {
                                                coding: [
                                                    {
                                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                                        code: "drop-down",
                                                        display: "Drop down"
                                                    }
                                                ],
                                                text: "Drop down"
                                            }
                                        }
                                    ],
                                    required: false,
                                    linkId: "/77575-9/82324-5/86631-9/82329-4",
                                    text: "Standing upright",
                                    answerOption: [
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "0"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 0
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA137-2",
                                                display: "None"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "1"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 1
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6752-5",
                                                display: "Mild"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "2"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 2
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6751-7",
                                                display: "Moderate"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "3"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 3
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6750-9",
                                                display: "Severe"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "4"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 4
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA11912-5",
                                                display: "Extreme"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "group",
                            code: [
                                {
                                    code: "86632-7",
                                    display: "Function, daily living"
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82324-5/86632-7",
                            text: "Function, daily living",
                            item: [
                                {
                                    type: "choice",
                                    code: [
                                        {
                                            code: "82330-2",
                                            display: "Rising from sitting"
                                        }
                                    ],
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                            valueCodeableConcept: {
                                                coding: [
                                                    {
                                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                                        code: "drop-down",
                                                        display: "Drop down"
                                                    }
                                                ],
                                                text: "Drop down"
                                            }
                                        }
                                    ],
                                    required: false,
                                    linkId: "/77575-9/82324-5/86632-7/82330-2",
                                    text: "Rising from sitting",
                                    answerOption: [
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "0"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 0
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA137-2",
                                                display: "None"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "1"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 1
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6752-5",
                                                display: "Mild"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "2"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 2
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6751-7",
                                                display: "Moderate"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "3"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 3
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6750-9",
                                                display: "Severe"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "4"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 4
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA11912-5",
                                                display: "Extreme"
                                            }
                                        }
                                    ]
                                },
                                {
                                    type: "choice",
                                    code: [
                                        {
                                            code: "82331-0",
                                            display: "Bending to floor/pick up an object"
                                        }
                                    ],
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                            valueCodeableConcept: {
                                                coding: [
                                                    {
                                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                                        code: "drop-down",
                                                        display: "Drop down"
                                                    }
                                                ],
                                                text: "Drop down"
                                            }
                                        }
                                    ],
                                    required: false,
                                    linkId: "/77575-9/82324-5/86632-7/82331-0",
                                    text: "Bending to floor/pick up an object",
                                    answerOption: [
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "0"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 0
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA137-2",
                                                display: "None"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "1"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 1
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6752-5",
                                                display: "Mild"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "2"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 2
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6751-7",
                                                display: "Moderate"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "3"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 3
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA6750-9",
                                                display: "Severe"
                                            }
                                        },
                                        {
                                            extension: [
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                                    valueString: "4"
                                                },
                                                {
                                                    url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                                    valueDecimal: 4
                                                }
                                            ],
                                            valueCoding: {
                                                code: "LA11912-5",
                                                display: "Extreme"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            type: "decimal",
                            code: [
                                {
                                    code: "82332-8",
                                    display: "Total interval score"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                    valueCoding: {
                                        code: "{score}",
                                        display: "{score}",
                                        system: "http://unitsofmeasure.org"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82324-5/82332-8",
                            text: "Total interval score",
                            item: [
                                {
                                    text: "The patient's score for the Knee Injury and Osteoarthritis Outcome Score for Joint Replacement (KOOS, JR) survey. The survey is scored by summing the raw scores and then converting the total raw score to an interval score, which ranges from 0 to 100 where 0 represents total knee disability and 100 represents perfect knee joint health.[PMID: 26926772]",
                                    type: "display",
                                    linkId: "/77575-9/82324-5/82332-8-help",
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
                        {
                            text: "The Knee Injury and Osteoarthritis Outcome Score for Joint Replacement (KOOS, JR) survey was developed from the original long version of the Knee injury and Osteoarthritis Outcome Score (KOOS) survey using Rasch analysis. It contains 7 questions from the original KOOS survey. Each question is coded from 0 to 4 where 0 equals no pain and 4 equals extreme pain. The survey is scored by summing the raw scores and then converting the total raw score to an interval score, which ranges from 0 to 100 where 0 represents total knee disability and 100 represents perfect knee health.[PMID: 26926773]",
                            type: "display",
                            linkId: "/77575-9/82324-5-help",
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
                {
                    type: "group",
                    code: [
                        {
                            code: "82226-2",
                            display: "Neck Disability Index"
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/82226-2",
                    text: "Neck Disability Index",
                    item: [
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82227-0",
                                    display: "Pain intensity"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82227-0",
                            text: "Pain intensity",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25853-5",
                                        display: "I have no pain at the moment."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25854-3",
                                        display: "The pain is very mild at the moment."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25855-0",
                                        display: "The pain is moderate at the moment."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25856-8",
                                        display: "The pain is fairly severe at the moment."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25857-6",
                                        display: "The pain is very severe at the moment."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25858-4",
                                        display: "The pain is the worst imaginable at the moment."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82228-8",
                                    display: "Personal care (washing, dressing, etc.)"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82228-8",
                            text: "Personal care (washing, dressing, etc.)",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25859-2",
                                        display: "I can look after myself normally without causing extra pain."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25860-0",
                                        display: "I can look after myself normally but it causes extra pain."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25861-8",
                                        display: "It is painful to look after myself and I am slow and careful."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25862-6",
                                        display: "I need some help but can manage most of my personal care."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25863-4",
                                        display: "I need help every day in most aspects of self-care."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25864-2",
                                        display: "I do not get dressed, I wash with difficulty and stay in bed."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82229-6",
                                    display: "Lifting"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82229-6",
                            text: "Lifting",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25865-9",
                                        display: "I can lift heavy weights without extra pain."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25866-7",
                                        display: "I can lift heavy weights but it gives extra pain."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25867-5",
                                        display: "Pain prevents me lifting heavy weights off the floor, but I can manage if they are conveniently placed, for example on a table."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25868-3",
                                        display: "Pain prevents me from lifting heavy weights but I can manage light to medium weights if they are conveniently positioned."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25869-1",
                                        display: "I can only lift very light weights."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25870-9",
                                        display: "I cannot lift or carry anything."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82230-4",
                                    display: "Reading"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82230-4",
                            text: "Reading",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25871-7",
                                        display: "I can read as much as I want to with no pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25872-5",
                                        display: "I can read as much as I want to with slight pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25873-3",
                                        display: "I can read as much as I want with moderate pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25874-1",
                                        display: "I can't read as much as I want because of moderate pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25875-8",
                                        display: "I can hardly read at all because of severe pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25876-6",
                                        display: "I can't read at all."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82231-2",
                                    display: "Headaches"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82231-2",
                            text: "Headaches",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25877-4",
                                        display: "I have no headaches at all."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA26365-9",
                                        display: "I have slight headaches, which come infrequently."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA26366-7",
                                        display: "I have moderate headaches, which come infrequently."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA26367-5",
                                        display: "I have moderate headaches, which come frequently."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA26368-3",
                                        display: "I have severe headaches, which come frequently."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA26369-1",
                                        display: "I have headaches almost all the time."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82232-0",
                                    display: "Concentration"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82232-0",
                            text: "Concentration",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25878-2",
                                        display: "I can concentrate fully when I want to with no difficulty."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25879-0",
                                        display: "I can concentrate fully when I want to with slight difficulty."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25880-8",
                                        display: "I have a fair degree of difficulty in concentrating when I want to."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25881-6",
                                        display: "I have a lot of difficulty in concentrating when I want to."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25882-4",
                                        display: "I have a great deal of difficulty in concentrating when I want to."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25883-2",
                                        display: "I can't concentrate at all."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82233-8",
                                    display: "Work"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82233-8",
                            text: "Work",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25884-0",
                                        display: "I can do as much work as I want to."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25885-7",
                                        display: "I can only do my usual work, but no more."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25886-5",
                                        display: "I can do most of my usual work, but no more."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25887-3",
                                        display: "I cannot do my usual work."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25888-1",
                                        display: "I can hardly do any work at all."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25889-9",
                                        display: "I can't do any work at all."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82234-6",
                                    display: "Driving"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82234-6",
                            text: "Driving",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25890-7",
                                        display: "I can drive my car without any neck pain."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25891-5",
                                        display: "I can drive my car as long as I want with slight pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25892-3",
                                        display: "I can drive my car as long as I want with moderate pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25893-1",
                                        display: "I can't drive my car as long as I want because of moderate pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25894-9",
                                        display: "I can hardly drive at all because of severe pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25895-6",
                                        display: "I can't drive my car at all."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82235-3",
                                    display: "Sleeping"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82235-3",
                            text: "Sleeping",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25896-4",
                                        display: "I have no trouble sleeping."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25897-2",
                                        display: "My sleep is slightly disturbed (less than 1 hr sleepless)."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25898-0",
                                        display: "My sleep is mildly disturbed (1-2 hrs sleepless)."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25899-8",
                                        display: "My sleep is moderately disturbed (2-3 hrs sleepless)."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25900-4",
                                        display: "My sleep is greatly disturbed (3-5 hrs sleepless)."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25901-2",
                                        display: "My sleep is completely disturbed (5-7 hrs sleepless)."
                                    }
                                }
                            ]
                        },
                        {
                            type: "choice",
                            code: [
                                {
                                    code: "82236-1",
                                    display: "Recreation"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                                    valueCodeableConcept: {
                                        coding: [
                                            {
                                                system: "http://hl7.org/fhir/questionnaire-item-control",
                                                code: "drop-down",
                                                display: "Drop down"
                                            }
                                        ],
                                        text: "Drop down"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82236-1",
                            text: "Recreation",
                            answerOption: [
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "0"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 0
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25902-0",
                                        display: "I am able to engage in all my recreation activities with no neck pain at all."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "1"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 1
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25903-8",
                                        display: "I am able to engage in all my recreation activities, with some pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "2"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 2
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25904-6",
                                        display: "I am able to engage in most, but not all of my usual recreation activities because of pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "3"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 3
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25905-3",
                                        display: "I am able to engage in a few of my usual recreation activities because of pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "4"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 4
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25906-1",
                                        display: "I can hardly do any recreation activities because of pain in my neck."
                                    }
                                },
                                {
                                    extension: [
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                            valueString: "5"
                                        },
                                        {
                                            url: "http://hl7.org/fhir/StructureDefinition/ordinalValue",
                                            valueDecimal: 5
                                        }
                                    ],
                                    valueCoding: {
                                        code: "LA25907-9",
                                        display: "I can't do any recreation activities due at all."
                                    }
                                }
                            ]
                        },
                        {
                            type: "decimal",
                            code: [
                                {
                                    code: "82237-9",
                                    display: "Total score"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                    valueCoding: {
                                        code: "{score}",
                                        display: "{score}",
                                        system: "http://unitsofmeasure.org"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/82226-2/82237-9",
                            text: "Total score",
                            item: [
                                {
                                    text: "Each of the ten items on the Neck Disability Index is scored one to five for a possible total of 50. A higher score indicates a greater level of disability (0-4=none, 5-14=mild, 15-24=moderate, 25-34=severe, >35=complete). If three or more items are missing, the total score could be invalid. The total score can be multiplied by two to calculate the percentage out of 100.",
                                    type: "display",
                                    linkId: "/77575-9/82226-2/82237-9-help",
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
                        {
                            text: "The Neck Disability Index was developed in 1991 to assess the degree to which daily activities are hindered by neck pain. The NDI can be used to measure progress over time, and a 5-point change in score is deemed to be clinically significant.",
                            type: "display",
                            linkId: "/77575-9/82226-2-help",
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
                {
                    type: "group",
                    code: [
                        {
                            code: "89196-0",
                            display: "Patient reported outcome measure panel"
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/89196-0",
                    text: "Patient reported outcome measure panel",
                    item: [
                        {
                            type: "string",
                            code: [
                                {
                                    code: "89195-2",
                                    display: "Patient reported outcome measure name"
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/89196-0/89195-2",
                            text: "Patient reported outcome measure name"
                        },
                        {
                            type: "decimal",
                            code: [
                                {
                                    code: "89194-5",
                                    display: "Patient reported outcome measure score"
                                }
                            ],
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                                    valueCoding: {
                                        code: "{score}",
                                        display: "{score}",
                                        system: "http://unitsofmeasure.org"
                                    }
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/89196-0/89194-5",
                            text: "Patient reported outcome measure score"
                        },
                        {
                            type: "string",
                            code: [
                                {
                                    code: "89193-7",
                                    display: "Patient reported outcome measure score interpretation"
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/89196-0/89193-7",
                            text: "Patient reported outcome measure score interpretation"
                        },
                        {
                            text: "This panel should be used to report information about a patient reported outcome measure that does not already have existing specific LOINC codes assigned. The panel contains terms to report the measure name, score, and interpretation of the score. Over time, as the usage of certain measures becomes more common, they may be assigned new, specific LOINC codes, so be sure to check to make sure that specific codes do not exist before using this panel.",
                            type: "display",
                            linkId: "/77575-9/89196-0-help",
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
                {
                    type: "group",
                    code: [
                        {
                            code: "89197-8",
                            display: "Performance-based measure panel"
                        }
                    ],
                    required: false,
                    linkId: "/77575-9/89197-8",
                    text: "Performance-based measure panel",
                    item: [
                        {
                            type: "string",
                            code: [
                                {
                                    code: "89190-3",
                                    display: "Performance-based measure name"
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/89197-8/89190-3",
                            text: "Performance-based measure name"
                        },
                        {
                            type: "string",
                            code: [
                                {
                                    code: "89191-1",
                                    display: "Performance-based measure score"
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/89197-8/89191-1",
                            text: "Performance-based measure score"
                        },
                        {
                            type: "string",
                            code: [
                                {
                                    code: "89192-9",
                                    display: "Performance-based measure score interpretation"
                                }
                            ],
                            required: false,
                            linkId: "/77575-9/89197-8/89192-9",
                            text: "Performance-based measure score interpretation"
                        },
                        {
                            text: "This panel should be used to report information about a performance-based measure that does not already have existing specific LOINC codes assigned. The panel contains terms to report the measure name, score, and interpretation of the score. Over time, as the usage of certain measures becomes more common, they may be assigned new, specific LOINC codes, so be sure to check to make sure that specific codes do not exist before using this panel.",
                            type: "display",
                            linkId: "/77575-9/89197-8-help",
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
                {
                    text: "This panel contains terms for various instruments that are used to assess health-condition specific patient function, including those from the Neck Disability Index, Low Back Pain Disability Questionnaire, DASH, and KOOS. This panel was created for, but is not limited in use to, the American Physical Therapy Association's Physical Therapy Outcomes Registry.",
                    type: "display",
                    linkId: "/77575-9-help",
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
        {
            type: "group",
            code: [
                {
                    code: "77576-7",
                    display: "Self-care and mobility panel"
                }
            ],
            required: false,
            linkId: "/77576-7",
            text: "Self-care and mobility panel",
            item: [
                {
                    type: "choice",
                    code: [
                        {
                            code: "52642-6",
                            display: "Eating during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52642-6",
                    text: "Eating during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to use suitable utensils to bring food to the mouth and swallow food once the meal is presented on a table/tray. Includes modified food consistency.",
                            type: "display",
                            linkId: "/77576-7/52642-6-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52644-2",
                            display: "Oral hygiene during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52644-2",
                    text: "Oral hygiene during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to use suitable items to clean teeth. Dentures: The ability to remove and replace dentures from and to mouth, and manage equipment for soaking and rinsing.",
                            type: "display",
                            linkId: "/77576-7/52644-2-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52645-9",
                            display: "Toilet hygiene during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52645-9",
                    text: "Toilet hygiene during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to maintain perineal hygiene, adjust clothes before and after using toilet, commode, bedpan, urinal. If managing ostomy, include wiping opening but not managing equipment.",
                            type: "display",
                            linkId: "/77576-7/52645-9-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52662-4",
                            display: "Shower &or bathe self during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52662-4",
                    text: "Shower &or bathe self during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to bathe self in shower or tub, including washing and drying self. Does not include transferring in/out of tub/shower.",
                            type: "display",
                            linkId: "/77576-7/52662-4-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52646-7",
                            display: "Upper body dressing during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52646-7",
                    text: "Upper body dressing during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to put on and remove shirt or pajama top. Includes buttoning if applicable.",
                            type: "display",
                            linkId: "/77576-7/52646-7-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52647-5",
                            display: "Lower body dressing during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52647-5",
                    text: "Lower body dressing during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to dress and undress below the waist, including fasteners. Does not include footwear.",
                            type: "display",
                            linkId: "/77576-7/52647-5-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52666-5",
                            display: "Putting on &or taking off footwear during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52666-5",
                    text: "Putting on &or taking off footwear during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to put on and take off socks and shoes or other footwear that are appropriate for safe mobility.",
                            type: "display",
                            linkId: "/77576-7/52666-5-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52663-2",
                            display: "Roll left and right during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52663-2",
                    text: "Roll left and right during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to roll from lying on back to left and right side, and roll back to back.",
                            type: "display",
                            linkId: "/77576-7/52663-2-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52664-0",
                            display: "Sit to lying during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52664-0",
                    text: "Sit to lying during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to move from sitting on side of bed to lying flat on the bed.",
                            type: "display",
                            linkId: "/77576-7/52664-0-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52648-3",
                            display: "Lying to sitting on side of bed during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52648-3",
                    text: "Lying to sitting on side of bed during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to safely move from lying on the back to sitting on side of bed with feet flat on the floor, no back support.",
                            type: "display",
                            linkId: "/77576-7/52648-3-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52649-1",
                            display: "Sit to stand during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52649-1",
                    text: "Sit to stand during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to safely come to a standing position from sitting in a chair or on the side of a bed.",
                            type: "display",
                            linkId: "/77576-7/52649-1-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52650-9",
                            display: "Chair-bed to chair transfer during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52650-9",
                    text: "Chair-bed to chair transfer during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to safely transfer to and from a chair (or wheelchair). The chairs are placed at right angles to each other.",
                            type: "display",
                            linkId: "/77576-7/52650-9-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52651-7",
                            display: "Toilet transfer during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52651-7",
                    text: "Toilet transfer during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to safely get on and off a toilet or commode.",
                            type: "display",
                            linkId: "/77576-7/52651-7-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52672-3",
                            display: "Car transfer during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52672-3",
                    text: "Car transfer during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to transfer in and out of a car or van on the passenger side. Does not include the ability to open/close door or fasten seat belt.",
                            type: "display",
                            linkId: "/77576-7/52672-3-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52656-6",
                            display: "Walk 10 ft (3 m) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52656-6",
                    text: "Walk 10 ft (3 m) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "Once standing, can walk at least 10 feet (3 meters) in room, corridor or similar space.",
                            type: "display",
                            linkId: "/77576-7/52656-6-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52668-1",
                            display: "Walk 50 feet with two turns during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52668-1",
                    text: "Walk 50 feet with two turns during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to walk 50 feet and make two turns.",
                            type: "display",
                            linkId: "/77576-7/52668-1-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52654-1",
                            display: "Walk 100 ft (30 m) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52654-1",
                    text: "Walk 100 ft (30 m) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "Once standing, can walk at least 100 feet (30 meters) in corridor or similar space.",
                            type: "display",
                            linkId: "/77576-7/52654-1-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52653-3",
                            display: "Walk 150 ft (45 m) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52653-3",
                    text: "Walk 150 ft (45 m) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "Once standing, can walk at least 150 feet (45 meters) in corridor or similar space.",
                            type: "display",
                            linkId: "/77576-7/52653-3-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52660-8",
                            display: "Wheel 10 ft (3 m) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52660-8",
                    text: "Wheel 10 ft (3 m) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "Once seated, can wheel at least 10 feet (3 meters) in room, corridor, or similar space.",
                            type: "display",
                            linkId: "/77576-7/52660-8-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52659-0",
                            display: "Wheel 50 ft (15 m) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52659-0",
                    text: "Wheel 50 ft (15 m) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "Once sitting, can wheel at least 50 feet (15 meters) in corridor or similar space.",
                            type: "display",
                            linkId: "/77576-7/52659-0-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52658-2",
                            display: "Wheel 100 ft (30 m) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52658-2",
                    text: "Wheel 100 ft (30 m) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "Once sitting, can wheel at least 100 feet (30 meters) in corridor or similar space.",
                            type: "display",
                            linkId: "/77576-7/52658-2-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52657-4",
                            display: "Wheel 150 ft (45 m) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52657-4",
                    text: "Wheel 150 ft (45 m) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "Once sitting, can wheel at least 150 feet (45 meters) in corridor or similar space.",
                            type: "display",
                            linkId: "/77576-7/52657-4-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52671-5",
                            display: "Walking 10 feet on uneven surfaces during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52671-5",
                    text: "Walking 10 feet on uneven surfaces during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to walk 10 feet on uneven or sloping surfaces, such as grass, gravel, ice or snow.",
                            type: "display",
                            linkId: "/77576-7/52671-5-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52667-3",
                            display: "One step (curb) during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52667-3",
                    text: "One step (curb) during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to step over a curb or up and down one step.",
                            type: "display",
                            linkId: "/77576-7/52667-3-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52670-7",
                            display: "Four steps-exterior during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52670-7",
                    text: "Four steps-exterior during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to go up and down 4 exterior steps with a rail.",
                            type: "display",
                            linkId: "/77576-7/52670-7-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52669-9",
                            display: "12 steps-interior during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52669-9",
                    text: "12 steps-interior during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to go up and down 12 interior steps with a rail.",
                            type: "display",
                            linkId: "/77576-7/52669-9-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "52665-7",
                            display: "Picking up objects during 2D assessment period"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/77576-7/52665-7",
                    text: "Picking up objects during 2D assessment period",
                    answerOption: [
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "6"
                                }
                            ],
                            valueCoding: {
                                code: "LA9983-3",
                                display: "Independent - Patient completes the activity by themself with no assistance from a helper."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "5"
                                }
                            ],
                            valueCoding: {
                                code: "LA10073-7",
                                display: "Setup or clean-up assistance - Helper sets up or cleans up; patient completes activity. Helper assists only prior to or following the activity."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "4"
                                }
                            ],
                            valueCoding: {
                                code: "LA11757-4",
                                display: "Supervision or touching assistance - Helper provides verbal cues or touching/steadying assistance as patient completes activity. Assistance may be provided throughout the activity or intermittently."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "3"
                                }
                            ],
                            valueCoding: {
                                code: "LA10055-4",
                                display: "Partial/moderate assistance - Helper does less than half the effort. Helper lifts, holds or supports trunk or limbs, but provides less than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "2"
                                }
                            ],
                            valueCoding: {
                                code: "LA10090-1",
                                display: "Substantial/maximal assistance – Helper does MORE THAN HALF the effort. Helper lifts or holds trunk or limbs and provides more than half the effort."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "1"
                                }
                            ],
                            valueCoding: {
                                code: "LA9964-3",
                                display: "Dependent - Helper does all of the effort. Patient does none of the effort to complete the task."
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "M"
                                }
                            ],
                            valueCoding: {
                                code: "LA10039-8",
                                display: "Not attempted due to medical condition"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "S"
                                }
                            ],
                            valueCoding: {
                                code: "LA10040-6",
                                display: "Not attempted due to safety concerns"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "E"
                                }
                            ],
                            valueCoding: {
                                code: "LA10038-0",
                                display: "Not attempted due to environmental constraints"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "A"
                                }
                            ],
                            valueCoding: {
                                code: "LA10092-7",
                                display: "Task attempted but not completed"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "N"
                                }
                            ],
                            valueCoding: {
                                code: "LA4720-4",
                                display: "Not applicable"
                            }
                        },
                        {
                            extension: [
                                {
                                    url: "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix",
                                    valueString: "P"
                                }
                            ],
                            valueCoding: {
                                code: "LA10058-8",
                                display: "Patient refused"
                            }
                        }
                    ],
                    item: [
                        {
                            text: "The ability to bend/stoop from a standing position to pick up small object such as a spoon from the floor.",
                            type: "display",
                            linkId: "/77576-7/52665-7-help",
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
                {
                    text: "This panel was created for the the American Physical Therapy Association's Physical Therapy Outcomes Registry and includes a subset of self-care and mobility items from the Continuity Assessment Record and Evaluation (CARE) Item Set that are collected as part of the registry.",
                    type: "display",
                    linkId: "/77576-7-help",
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
        {
            type: "group",
            code: [
                {
                    code: "92562-8",
                    display: "PT goals Pnl"
                }
            ],
            required: false,
            linkId: "/92562-8",
            text: "PT goals Pnl",
            item: [
                {
                    type: "string",
                    code: [
                        {
                            code: "92710-3",
                            display: "PT goal"
                        }
                    ],
                    required: false,
                    linkId: "/92562-8/92710-3",
                    text: "PT goal"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "92709-5",
                            display: "PT goal attain dur - time frame"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "wk",
                                display: "wk",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92562-8/92709-5",
                    text: "PT goal attain dur - time frame"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "92708-7",
                            display: "PT goal attain dur - visits"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92562-8/92708-7",
                    text: "PT goal attain dur - visits",
                    item: [
                        {
                            text: "Expected frequency for the physical therapy treatment plan identified within this panel.",
                            type: "display",
                            linkId: "/92562-8/92708-7-help",
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
                }
            ]
        },
        {
            type: "group",
            code: [
                {
                    code: "92566-9",
                    display: "Planned intervention or services Pnl"
                }
            ],
            required: false,
            linkId: "/92566-9",
            text: "Planned intervention or services Pnl",
            item: [
                {
                    type: "decimal",
                    code: [
                        {
                            code: "92705-3",
                            display: "Planned interv +or serv dur time frame"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "wk",
                                display: "wk",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92705-3",
                    text: "Planned interv +or serv dur time frame"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "92823-4",
                            display: "Planned interv +or serv dur visits"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92823-4",
                    text: "Planned interv +or serv dur visits"
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92704-6",
                            display: "Planned interv +or serv visit freq"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92704-6",
                    text: "Planned interv +or serv visit freq",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA30109-5",
                                display: "3 times a week"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA30110-3",
                                display: "1 time a week"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA30111-1",
                                display: "3 times a week for 4 weeks followed by 1 time a week for 4 weeks"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA30112-9",
                                display: "4 times a week tapered to 1 time a week as appropriate over 6 weeks"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92557-8",
                            display: "Instructions plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92557-8",
                    text: "Instructions plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA137-2",
                                display: "None"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29050-4",
                                display: "Health, wellness, and fitness programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29062-9",
                                display: "Impairments in body functions and structures, activity limitations, and participation restrictions"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29094-2",
                                display: "Pathology or health condition"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29095-9",
                                display: "Performance enhancement"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29096-7",
                                display: "Plan of care"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29105-6",
                                display: "Psychosocial influences on treatment (eg, fear-avoidance beliefs, behavior change techniques)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29111-4",
                                display: "Risk factors for pathology or health condition, impairments in body functions and structures, activity limitations, and participation restrictions"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29133-8",
                                display: "Transitions across new settings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29134-6",
                                display: "Transitions to new roles"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92553-7",
                            display: "Airway clearance technique plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92553-7",
                    text: "Airway clearance technique plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28941-5",
                                display: "Breathing strategy: Active cycle of breathing or forced expiratory techniques"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28943-1",
                                display: "Breathing strategy: Assisted cough/huff techniques"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28944-9",
                                display: "Breathing strategy: Autogenic drainage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28945-6",
                                display: "Breathing strategy: Paced breathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28946-4",
                                display: "Breathing strategy: Pursed lip breathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28947-2",
                                display: "Manual/mechanical technique: Assistive devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28949-8",
                                display: "Manual/mechanical technique: Chest percussion, vibration, and shaking"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28950-6",
                                display: "Manual/mechanical technique: Chest wall manipulation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28951-4",
                                display: "Manual/mechanical technique: Suctioning"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28952-2",
                                display: "Manual/mechanical technique: Ventilator aids"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28953-0",
                                display: "Positioning: Positioning to alter work of breathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28954-8",
                                display: "Positioning: Positioning to maximize ventilation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28955-5",
                                display: "Positioning: Pulmonary postural drainage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28956-3",
                                display: "Supplemental oxygen therapy: Techniques to maximize ventilation (e.g., inspiratory hold maneuver, staircase breathing, manual hyperinflation, incentive spirometry)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92554-5",
                            display: "Assistive technology plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92554-5",
                    text: "Assistive technology plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA137-2",
                                display: "None"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28976-1",
                                display: "Aids for locomotion (eg, crutches, canes, walkers, rollators, manual wheelchairs, power wheelchairs, power-operated vehicles)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29091-8",
                                display: "Orthoses (eg, ankle-foot orthoses [AFOs], knee-ankle-foot orthoses [KAFOs], body jackets, wrist cock-up splints, shoe inserts)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29104-9",
                                display: "Prostheses (eg, transtibial and transfemoral prostheses, upper extremity prostheses)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29112-2",
                                display: "Seating and positioning technologies (eg, custom-molded seating, removable lateral trunk supports and upper extremity support trays for wheelchairs, sidelyers, prone standers, manual or power recline systems for wheelchairs)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29092-6",
                                display: "Other assistive technologies to improve safety, function, and independence, such as transfer technologies (eg, transfer boards, mechanical lifts/hoists) and bathroom technologies (eg, raised toilet commodes, adaptive commodes, transfer benches, sliders)"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92555-2",
                            display: "Biophysical agent plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92555-2",
                    text: "Biophysical agent plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA137-2",
                                display: "None"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28977-9",
                                display: "Athermal agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28978-7",
                                display: "Athermal agents: Pulsed electromagnetic fields"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28988-6",
                                display: "Biofeedback"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28996-9",
                                display: "Compression therapies"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28997-7",
                                display: "Compression therapies: Compression bandaging"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28998-5",
                                display: "Compression therapies: Compression garments"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28999-3",
                                display: "Compression therapies: Taping"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29000-9",
                                display: "Compression therapies: Total contact casting"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29001-7",
                                display: "Compression therapies: Vasopneumatic compression devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA24680-3",
                                display: "Cryotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29003-3",
                                display: "Cryotherapy: Cold packs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29004-1",
                                display: "Cryotherapy: Ice massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29005-8",
                                display: "Cryotherapy: Vapocoolant spray"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29023-1",
                                display: "Electrical stimulation (muscle and nerve)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29024-9",
                                display: "Electrical stimulation (muscle and nerve): Electrical muscle stimulation (EMS)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29025-6",
                                display: "Electrical stimulation (muscle and nerve): Electrical stimulation for tissue repair (ESTR)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29026-4",
                                display: "Electrical stimulation (muscle and nerve): Functional electrical stimulation (FES)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29027-2",
                                display: "Electrical stimulation (muscle and nerve): High-voltage pulsed current (HVPC)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29028-0",
                                display: "Electrical stimulation (muscle and nerve): Neuromuscular electrical stimulation (NMES)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29029-8",
                                display: "Electrical stimulation (muscle and nerve): Transcutaneous electrical nerve stimulation (TENS)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29051-2",
                                display: "Hydrotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29052-0",
                                display: "Hydrotherapy: Contrast bath"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29053-8",
                                display: "Hydrotherapy: Fluidotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29054-6",
                                display: "Hydrotherapy: Pools"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29055-3",
                                display: "Hydrotherapy: Pulsatile lavage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29056-1",
                                display: "Hydrotherapy: Whirlpool tanks"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA24174-7",
                                display: "Hyperbaric Oxygen Center"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29067-8",
                                display: "Light agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29068-6",
                                display: "Light agents: Infrared"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29069-4",
                                display: "Light agents: Laser"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29070-2",
                                display: "Light agents: Ultraviolet"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29076-9",
                                display: "Mechanical devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29077-7",
                                display: "Mechanical devices: Continuous passive motion (CPM)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29078-5",
                                display: "Mechanical devices: Standing frame"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29079-3",
                                display: "Mechanical devices: Tilt table"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29080-1",
                                display: "Mechanical devices: Traction devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29113-0",
                                display: "Sound agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29114-8",
                                display: "Sound agents: Phonophoresis"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29115-5",
                                display: "Sound agents: Ultrasound"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29121-3",
                                display: "Thermotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29122-1",
                                display: "Thermotherapy: Dry heat"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29123-9",
                                display: "Thermotherapy: Hot packs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29124-7",
                                display: "Thermotherapy: Paraffin baths"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92556-0",
                            display: "Functional training plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92556-0",
                    text: "Functional training plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28957-1",
                                display: "ADL training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28964-7",
                                display: "ADL training: Bathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28965-4",
                                display: "ADL training: Bed mobility and transfer training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28966-2",
                                display: "ADL training: Dressing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28967-0",
                                display: "ADL training: Eating"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28968-8",
                                display: "ADL training: Grooming"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28969-6",
                                display: "ADL training: Toileting"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28987-8",
                                display: "Barrier accommodations or modifications"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29013-2",
                                display: "Developmental activities"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29014-0",
                                display: "Device and equipment use and training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29015-7",
                                display: "Device and equipment use and training: Assistive and adaptive device or equipment training during IADL"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29016-5",
                                display: "Device and equipment use and training: Orthotic, protective, or supportive device or equipment training during IADL"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29017-3",
                                display: "Device and equipment use and training: Prosthetic device or equipment training during IADL"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29034-8",
                                display: "Functional training programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29035-5",
                                display: "Functional training programs: Back schools"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29036-3",
                                display: "Functional training programs: Job coaching"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29037-1",
                                display: "Functional training programs: Simulated environments and tasks"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29038-9",
                                display: "Functional training programs: Task adaptation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29039-7",
                                display: "Functional training programs: Task training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29040-5",
                                display: "Functional training programs: Travel training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29041-3",
                                display: "Functional training programs: Work conditioning"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29042-1",
                                display: "Functional training programs: Work hardening"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29058-7",
                                display: "IADL training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29059-5",
                                display: "IADL training: Community service training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29060-3",
                                display: "IADL training: School and play activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29061-1",
                                display: "IADL training: Work training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29063-7",
                                display: "Injury prevention or reduction"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29064-5",
                                display: "Injury prevention or reduction: Injury prevention education during domestic, education, work, community, social, and civic integration or reintegration"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29065-2",
                                display: "Injury prevention or reduction: Injury prevention education with the use of devices and equipment"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29066-0",
                                display: "Injury prevention or reduction: Safety awareness training during work, community, social, and civic life integration or reintegration"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92558-6",
                            display: "Integ repair protect technique plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92558-6",
                    text: "Integ repair protect technique plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28989-4",
                                display: "Biophysical agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28990-2",
                                display: "Biophysical agents: Electrical stimulation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28991-0",
                                display: "Biophysical agents: Hyperbaric oxygen therapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28992-8",
                                display: "Biophysical agents: Light therapies (eg, ultraviolet-C, low-level laser)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28993-6",
                                display: "Biophysical agents: Negative pressure wound therapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28994-4",
                                display: "Biophysical agents: Pneumatic compression therapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28995-1",
                                display: "Biophysical agents: Ultrasound (high and low frequency)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29006-6",
                                display: "Debridement"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29007-4",
                                display: "Debridement: Autolytic (support through proper dressing utilization)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29008-2",
                                display: "Debridement: Biologic (maggots or leeches)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29009-0",
                                display: "Debridement: Low-frequency, contact ultrasound"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29010-8",
                                display: "Debridement: Mechanical"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29011-6",
                                display: "Debridement: Pulsed lavage with suction"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29012-4",
                                display: "Debridement: Sharp or selective (with instruments such as forceps, scalpels, or scissors)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29018-1",
                                display: "Dressings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29019-9",
                                display: "Dressings: Antimicrobial dressings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29020-7",
                                display: "Dressings: Cellular-based and tissue-based products"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29021-5",
                                display: "Dressings: Compression bandages/systems"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29022-3",
                                display: "Dressings: Primary and secondary dressings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29125-4",
                                display: "Topical agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29126-2",
                                display: "Topical agents: Anti-inflammatories"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29127-0",
                                display: "Topical agents: Cleansers"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29128-8",
                                display: "Topical agents: Creams"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29129-6",
                                display: "Topical agents: Enzymes"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29130-4",
                                display: "Topical agents: Moisturizers"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29131-2",
                                display: "Topical agents: Ointments"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29132-0",
                                display: "Topical agents: Sealants"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92559-4",
                            display: "Manual therapy technique plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92559-4",
                    text: "Manual therapy technique plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29071-0",
                                display: "Manual lymphatic drainage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29072-8",
                                display: "Manual traction"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA25338-7",
                                display: "Massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29074-4",
                                display: "Massage: Connective tissue massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29075-1",
                                display: "Massage: Therapeutic massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29081-9",
                                display: "Mobilization/manipulation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29082-7",
                                display: "Mobilization/manipulation: Dry needling"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29083-5",
                                display: "Mobilization/manipulation: Soft tissue"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29084-3",
                                display: "Mobilization/manipulation: Spinal and peripheral joints"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29085-0",
                                display: "Neural tissue mobilization"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29093-4",
                                display: "Passive range of motion"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92560-2",
                            display: "Motor function training plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92560-2",
                    text: "Motor function training plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28979-5",
                                display: "Balance training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28980-3",
                                display: "Balance training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28981-1",
                                display: "Balance training: Motor control training or retraining"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28982-9",
                                display: "Balance training: Neuromuscular education or reeducation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28983-7",
                                display: "Balance training: Perceptual training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28984-5",
                                display: "Balance training: Standardized, programmatic, and complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28985-2",
                                display: "Balance training: Task-specific performance training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28986-0",
                                display: "Balance training: Vestibular training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29043-9",
                                display: "Gait and locomotion training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29044-7",
                                display: "Gait and locomotion training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29045-4",
                                display: "Gait and locomotion training: Implement and device training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29046-2",
                                display: "Gait and locomotion training: Perceptual training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29047-0",
                                display: "Gait and locomotion training: Standardized, programmatic, and complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29048-8",
                                display: "Gait and locomotion training: Training of specific components of gait"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29049-6",
                                display: "Gait and locomotion training: Wheelchair feature and propulsion training (manual and motorized wheelchairs)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29097-5",
                                display: "Posture training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29098-3",
                                display: "Posture training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29099-1",
                                display: "Posture training: Neuromuscular education or reeducation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29100-7",
                                display: "Posture training: Postural awareness training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29101-5",
                                display: "Posture training: Postural control training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29102-3",
                                display: "Posture training: Postural stabilization activities"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29103-1",
                                display: "Posture training: Vestibular training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "92565-1",
                            display: "Ther exercise plan"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92565-1",
                    text: "Ther exercise plan",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28970-4",
                                display: "Aerobic capacity/endurance conditioning or reconditioning"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28971-2",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Aquatic programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28972-0",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Gait and locomotor training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28973-8",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Increased workload over time"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28974-6",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Movement efficiency and energy conservation training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28975-3",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Walking and wheelchair propulsion programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29030-6",
                                display: "Flexibility exercises"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29031-4",
                                display: "Flexibility exercises: Muscle lengthening"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29032-2",
                                display: "Flexibility exercises: Range of motion"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29033-0",
                                display: "Flexibility exercises: Stretching"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29086-8",
                                display: "Neuromotor development training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29087-6",
                                display: "Neuromotor development training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29088-4",
                                display: "Neuromotor development training: Motor training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29089-2",
                                display: "Neuromotor development training: Movement pattern training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29090-0",
                                display: "Neuromotor development training: Neuromuscular education or reeducation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA25355-1",
                                display: "Relaxation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29107-2",
                                display: "Relaxation: Breathing strategies"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29108-0",
                                display: "Relaxation: Movement strategies"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29109-8",
                                display: "Relaxation: Relaxation techniques"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29110-6",
                                display: "Relaxation: Standardized, programmatic, complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29116-3",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29117-1",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Active assistive, active, and resistive exercises (including concentric, dynamic/isotonic, eccentric, isokinetic, isometric, and plyometric)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29118-9",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Aquatic programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29119-7",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Standardized, programmatic, or complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29120-5",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Task-specific performance training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "string",
                    code: [
                        {
                            code: "92706-1",
                            display: "Other intervention or service plan"
                        }
                    ],
                    required: false,
                    linkId: "/92566-9/92706-1",
                    text: "Other intervention or service plan"
                }
            ]
        },
        {
            type: "group",
            code: [
                {
                    code: "89176-2",
                    display: "Intervention or services provided pnl"
                }
            ],
            required: false,
            linkId: "/89176-2",
            text: "Intervention or services provided pnl",
            item: [
                {
                    type: "choice",
                    code: [
                        {
                            code: "89187-9",
                            display: "Instructions provided"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89187-9",
                    text: "Instructions provided",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA137-2",
                                display: "None"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29050-4",
                                display: "Health, wellness, and fitness programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29062-9",
                                display: "Impairments in body functions and structures, activity limitations, and participation restrictions"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29094-2",
                                display: "Pathology or health condition"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29095-9",
                                display: "Performance enhancement"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29096-7",
                                display: "Plan of care"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29105-6",
                                display: "Psychosocial influences on treatment (eg, fear-avoidance beliefs, behavior change techniques)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29111-4",
                                display: "Risk factors for pathology or health condition, impairments in body functions and structures, activity limitations, and participation restrictions"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29133-8",
                                display: "Transitions across new settings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29134-6",
                                display: "Transitions to new roles"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89186-1",
                            display: "Airway clearance technique perf"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89186-1",
                    text: "Airway clearance technique perf",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28941-5",
                                display: "Breathing strategy: Active cycle of breathing or forced expiratory techniques"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28943-1",
                                display: "Breathing strategy: Assisted cough/huff techniques"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28944-9",
                                display: "Breathing strategy: Autogenic drainage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28945-6",
                                display: "Breathing strategy: Paced breathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28946-4",
                                display: "Breathing strategy: Pursed lip breathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28947-2",
                                display: "Manual/mechanical technique: Assistive devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28949-8",
                                display: "Manual/mechanical technique: Chest percussion, vibration, and shaking"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28950-6",
                                display: "Manual/mechanical technique: Chest wall manipulation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28951-4",
                                display: "Manual/mechanical technique: Suctioning"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28952-2",
                                display: "Manual/mechanical technique: Ventilator aids"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28953-0",
                                display: "Positioning: Positioning to alter work of breathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28954-8",
                                display: "Positioning: Positioning to maximize ventilation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28955-5",
                                display: "Positioning: Pulmonary postural drainage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28956-3",
                                display: "Supplemental oxygen therapy: Techniques to maximize ventilation (e.g., inspiratory hold maneuver, staircase breathing, manual hyperinflation, incentive spirometry)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89185-3",
                            display: "Assistive technology prov"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89185-3",
                    text: "Assistive technology prov",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA137-2",
                                display: "None"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28976-1",
                                display: "Aids for locomotion (eg, crutches, canes, walkers, rollators, manual wheelchairs, power wheelchairs, power-operated vehicles)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29091-8",
                                display: "Orthoses (eg, ankle-foot orthoses [AFOs], knee-ankle-foot orthoses [KAFOs], body jackets, wrist cock-up splints, shoe inserts)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29104-9",
                                display: "Prostheses (eg, transtibial and transfemoral prostheses, upper extremity prostheses)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29112-2",
                                display: "Seating and positioning technologies (eg, custom-molded seating, removable lateral trunk supports and upper extremity support trays for wheelchairs, sidelyers, prone standers, manual or power recline systems for wheelchairs)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29092-6",
                                display: "Other assistive technologies to improve safety, function, and independence, such as transfer technologies (eg, transfer boards, mechanical lifts/hoists) and bathroom technologies (eg, raised toilet commodes, adaptive commodes, transfer benches, sliders)"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89184-6",
                            display: "Biophysical agent used"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89184-6",
                    text: "Biophysical agent used",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA137-2",
                                display: "None"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28977-9",
                                display: "Athermal agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28978-7",
                                display: "Athermal agents: Pulsed electromagnetic fields"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28988-6",
                                display: "Biofeedback"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28996-9",
                                display: "Compression therapies"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28997-7",
                                display: "Compression therapies: Compression bandaging"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28998-5",
                                display: "Compression therapies: Compression garments"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28999-3",
                                display: "Compression therapies: Taping"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29000-9",
                                display: "Compression therapies: Total contact casting"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29001-7",
                                display: "Compression therapies: Vasopneumatic compression devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA24680-3",
                                display: "Cryotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29003-3",
                                display: "Cryotherapy: Cold packs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29004-1",
                                display: "Cryotherapy: Ice massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29005-8",
                                display: "Cryotherapy: Vapocoolant spray"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29023-1",
                                display: "Electrical stimulation (muscle and nerve)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29024-9",
                                display: "Electrical stimulation (muscle and nerve): Electrical muscle stimulation (EMS)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29025-6",
                                display: "Electrical stimulation (muscle and nerve): Electrical stimulation for tissue repair (ESTR)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29026-4",
                                display: "Electrical stimulation (muscle and nerve): Functional electrical stimulation (FES)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29027-2",
                                display: "Electrical stimulation (muscle and nerve): High-voltage pulsed current (HVPC)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29028-0",
                                display: "Electrical stimulation (muscle and nerve): Neuromuscular electrical stimulation (NMES)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29029-8",
                                display: "Electrical stimulation (muscle and nerve): Transcutaneous electrical nerve stimulation (TENS)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29051-2",
                                display: "Hydrotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29052-0",
                                display: "Hydrotherapy: Contrast bath"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29053-8",
                                display: "Hydrotherapy: Fluidotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29054-6",
                                display: "Hydrotherapy: Pools"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29055-3",
                                display: "Hydrotherapy: Pulsatile lavage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29056-1",
                                display: "Hydrotherapy: Whirlpool tanks"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA24174-7",
                                display: "Hyperbaric Oxygen Center"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29067-8",
                                display: "Light agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29068-6",
                                display: "Light agents: Infrared"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29069-4",
                                display: "Light agents: Laser"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29070-2",
                                display: "Light agents: Ultraviolet"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29076-9",
                                display: "Mechanical devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29077-7",
                                display: "Mechanical devices: Continuous passive motion (CPM)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29078-5",
                                display: "Mechanical devices: Standing frame"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29079-3",
                                display: "Mechanical devices: Tilt table"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29080-1",
                                display: "Mechanical devices: Traction devices"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29113-0",
                                display: "Sound agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29114-8",
                                display: "Sound agents: Phonophoresis"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29115-5",
                                display: "Sound agents: Ultrasound"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29121-3",
                                display: "Thermotherapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29122-1",
                                display: "Thermotherapy: Dry heat"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29123-9",
                                display: "Thermotherapy: Hot packs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29124-7",
                                display: "Thermotherapy: Paraffin baths"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89183-8",
                            display: "Functional training perf"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89183-8",
                    text: "Functional training perf",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28957-1",
                                display: "ADL training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28964-7",
                                display: "ADL training: Bathing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28965-4",
                                display: "ADL training: Bed mobility and transfer training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28966-2",
                                display: "ADL training: Dressing"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28967-0",
                                display: "ADL training: Eating"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28968-8",
                                display: "ADL training: Grooming"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28969-6",
                                display: "ADL training: Toileting"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28987-8",
                                display: "Barrier accommodations or modifications"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29013-2",
                                display: "Developmental activities"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29014-0",
                                display: "Device and equipment use and training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29015-7",
                                display: "Device and equipment use and training: Assistive and adaptive device or equipment training during IADL"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29016-5",
                                display: "Device and equipment use and training: Orthotic, protective, or supportive device or equipment training during IADL"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29017-3",
                                display: "Device and equipment use and training: Prosthetic device or equipment training during IADL"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29034-8",
                                display: "Functional training programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29035-5",
                                display: "Functional training programs: Back schools"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29036-3",
                                display: "Functional training programs: Job coaching"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29037-1",
                                display: "Functional training programs: Simulated environments and tasks"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29038-9",
                                display: "Functional training programs: Task adaptation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29039-7",
                                display: "Functional training programs: Task training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29040-5",
                                display: "Functional training programs: Travel training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29041-3",
                                display: "Functional training programs: Work conditioning"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29042-1",
                                display: "Functional training programs: Work hardening"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29058-7",
                                display: "IADL training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29059-5",
                                display: "IADL training: Community service training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29060-3",
                                display: "IADL training: School and play activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29061-1",
                                display: "IADL training: Work training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29063-7",
                                display: "Injury prevention or reduction"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29064-5",
                                display: "Injury prevention or reduction: Injury prevention education during domestic, education, work, community, social, and civic integration or reintegration"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29065-2",
                                display: "Injury prevention or reduction: Injury prevention education with the use of devices and equipment"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29066-0",
                                display: "Injury prevention or reduction: Safety awareness training during work, community, social, and civic life integration or reintegration"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89182-0",
                            display: "Integ repair protect technique"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89182-0",
                    text: "Integ repair protect technique",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28989-4",
                                display: "Biophysical agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28990-2",
                                display: "Biophysical agents: Electrical stimulation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28991-0",
                                display: "Biophysical agents: Hyperbaric oxygen therapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28992-8",
                                display: "Biophysical agents: Light therapies (eg, ultraviolet-C, low-level laser)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28993-6",
                                display: "Biophysical agents: Negative pressure wound therapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28994-4",
                                display: "Biophysical agents: Pneumatic compression therapy"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28995-1",
                                display: "Biophysical agents: Ultrasound (high and low frequency)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29006-6",
                                display: "Debridement"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29007-4",
                                display: "Debridement: Autolytic (support through proper dressing utilization)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29008-2",
                                display: "Debridement: Biologic (maggots or leeches)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29009-0",
                                display: "Debridement: Low-frequency, contact ultrasound"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29010-8",
                                display: "Debridement: Mechanical"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29011-6",
                                display: "Debridement: Pulsed lavage with suction"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29012-4",
                                display: "Debridement: Sharp or selective (with instruments such as forceps, scalpels, or scissors)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29018-1",
                                display: "Dressings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29019-9",
                                display: "Dressings: Antimicrobial dressings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29020-7",
                                display: "Dressings: Cellular-based and tissue-based products"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29021-5",
                                display: "Dressings: Compression bandages/systems"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29022-3",
                                display: "Dressings: Primary and secondary dressings"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29125-4",
                                display: "Topical agents"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29126-2",
                                display: "Topical agents: Anti-inflammatories"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29127-0",
                                display: "Topical agents: Cleansers"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29128-8",
                                display: "Topical agents: Creams"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29129-6",
                                display: "Topical agents: Enzymes"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29130-4",
                                display: "Topical agents: Moisturizers"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29131-2",
                                display: "Topical agents: Ointments"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29132-0",
                                display: "Topical agents: Sealants"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89181-2",
                            display: "Manual therapy technique used"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89181-2",
                    text: "Manual therapy technique used",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29071-0",
                                display: "Manual lymphatic drainage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29072-8",
                                display: "Manual traction"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA25338-7",
                                display: "Massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29074-4",
                                display: "Massage: Connective tissue massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29075-1",
                                display: "Massage: Therapeutic massage"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29081-9",
                                display: "Mobilization/manipulation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29082-7",
                                display: "Mobilization/manipulation: Dry needling"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29083-5",
                                display: "Mobilization/manipulation: Soft tissue"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29084-3",
                                display: "Mobilization/manipulation: Spinal and peripheral joints"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29085-0",
                                display: "Neural tissue mobilization"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29093-4",
                                display: "Passive range of motion"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89180-4",
                            display: "Motor function training perf"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89180-4",
                    text: "Motor function training perf",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28979-5",
                                display: "Balance training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28980-3",
                                display: "Balance training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28981-1",
                                display: "Balance training: Motor control training or retraining"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28982-9",
                                display: "Balance training: Neuromuscular education or reeducation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28983-7",
                                display: "Balance training: Perceptual training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28984-5",
                                display: "Balance training: Standardized, programmatic, and complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28985-2",
                                display: "Balance training: Task-specific performance training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28986-0",
                                display: "Balance training: Vestibular training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29043-9",
                                display: "Gait and locomotion training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29044-7",
                                display: "Gait and locomotion training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29045-4",
                                display: "Gait and locomotion training: Implement and device training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29046-2",
                                display: "Gait and locomotion training: Perceptual training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29047-0",
                                display: "Gait and locomotion training: Standardized, programmatic, and complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29048-8",
                                display: "Gait and locomotion training: Training of specific components of gait"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29049-6",
                                display: "Gait and locomotion training: Wheelchair feature and propulsion training (manual and motorized wheelchairs)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29097-5",
                                display: "Posture training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29098-3",
                                display: "Posture training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29099-1",
                                display: "Posture training: Neuromuscular education or reeducation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29100-7",
                                display: "Posture training: Postural awareness training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29101-5",
                                display: "Posture training: Postural control training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29102-3",
                                display: "Posture training: Postural stabilization activities"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29103-1",
                                display: "Posture training: Vestibular training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "89179-6",
                            display: "Ther exercise perf"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/89179-6",
                    text: "Ther exercise perf",
                    answerOption: [
                        {
                            valueCoding: {
                                code: "LA7304-4",
                                display: "Not performed"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28970-4",
                                display: "Aerobic capacity/endurance conditioning or reconditioning"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28971-2",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Aquatic programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28972-0",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Gait and locomotor training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28973-8",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Increased workload over time"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28974-6",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Movement efficiency and energy conservation training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA28975-3",
                                display: "Aerobic capacity/endurance conditioning or reconditioning: Walking and wheelchair propulsion programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29030-6",
                                display: "Flexibility exercises"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29031-4",
                                display: "Flexibility exercises: Muscle lengthening"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29032-2",
                                display: "Flexibility exercises: Range of motion"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29033-0",
                                display: "Flexibility exercises: Stretching"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29086-8",
                                display: "Neuromotor development training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29087-6",
                                display: "Neuromotor development training: Developmental activities training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29088-4",
                                display: "Neuromotor development training: Motor training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29089-2",
                                display: "Neuromotor development training: Movement pattern training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29090-0",
                                display: "Neuromotor development training: Neuromuscular education or reeducation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA25355-1",
                                display: "Relaxation"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29107-2",
                                display: "Relaxation: Breathing strategies"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29108-0",
                                display: "Relaxation: Movement strategies"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29109-8",
                                display: "Relaxation: Relaxation techniques"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29110-6",
                                display: "Relaxation: Standardized, programmatic, complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29116-3",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29117-1",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Active assistive, active, and resistive exercises (including concentric, dynamic/isotonic, eccentric, isokinetic, isometric, and plyometric)"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29118-9",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Aquatic programs"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29119-7",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Standardized, programmatic, or complementary exercise approaches"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA29120-5",
                                display: "Strength, power, and endurance training for head, neck, limb, pelvic-floor, trunk, and ventilatory muscles: Task-specific performance training"
                            }
                        },
                        {
                            valueCoding: {
                                code: "LA46-8",
                                display: "Other"
                            }
                        }
                    ]
                },
                {
                    type: "string",
                    code: [
                        {
                            code: "92561-0",
                            display: "Other intervention or service provided"
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/92561-0",
                    text: "Other intervention or service provided"
                },
                {
                    type: "string",
                    code: [
                        {
                            code: "42349-1",
                            display: "Reason for referral"
                        }
                    ],
                    required: false,
                    linkId: "/89176-2/42349-1",
                    text: "Reason for referral"
                }
            ]
        },
        {
            type: "group",
            code: [
                {
                    code: "89175-4",
                    display: "Billing info pnl"
                }
            ],
            required: false,
            linkId: "/89175-4",
            text: "Billing info pnl",
            item: [
                {
                    type: "string",
                    code: [
                        {
                            code: "45952-9",
                            display: "National provider ID"
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/45952-9",
                    text: "National provider ID"
                },
                {
                    type: "choice",
                    code: [
                        {
                            code: "52829-9",
                            display: "Place of service"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/52829-9",
                    text: "Place of service",
                    answerOption: [
                        {
                            valueCoding: {}
                        }
                    ],
                    item: [
                        {
                            text: "01.02\tPlace of Service - Place of service is the location, as indicated on health care professional claims forms, where the service was provided or originated. It is represented by two-digit codes as defined by Centers for Medicare & Medicaid Services (CMS). (http://www.cms.hhs.gov/PlaceofServiceCodes/Downloads/placeofservice.pdf) The NMMDS uses the CMS list plus additional codes that end with an \"x\". \r\n1X \tStores - these may include grocery, pharmacy, department or other stores where retail goods and merchandise are sold\r\n2X\tVoluntary Health or Charitable Agencies (e.g., National Cancer Society, National Heart association, Catholic Charities)",
                            type: "display",
                            linkId: "/89175-4/52829-9-help",
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
                {
                    type: "choice",
                    code: [
                        {
                            code: "86255-7",
                            display: "Primary Dx ICD code"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
                            valueCodeableConcept: {
                                coding: [
                                    {
                                        system: "http://hl7.org/fhir/questionnaire-item-control",
                                        code: "drop-down",
                                        display: "Drop down"
                                    }
                                ],
                                text: "Drop down"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/86255-7",
                    text: "Primary Dx ICD code",
                    answerOption: [
                        {
                            valueCoding: {}
                        }
                    ],
                    item: [
                        {
                            text: "The condition that is the chief reason for providing care.",
                            type: "display",
                            linkId: "/89175-4/86255-7-help",
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
                {
                    type: "string",
                    code: [
                        {
                            code: "81885-6",
                            display: "Other diagnosis ICD code"
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/81885-6",
                    text: "Other diagnosis ICD code"
                },
                {
                    type: "string",
                    code: [
                        {
                            code: "89266-1",
                            display: "Proc+Serv+Supp code"
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/89266-1",
                    text: "Proc+Serv+Supp code",
                    item: [
                        {
                            text: "The procedure, services, or supply code can be any CPT billing code or Health Care Professionals Advisory Committee (\"HCPAC\") code.",
                            type: "display",
                            linkId: "/89175-4/89266-1-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "76430-8",
                            display: "CPT units"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/76430-8",
                    text: "CPT units",
                    item: [
                        {
                            text: "CPT units are the number of billing units associated with a single CPT billing code [LOINC: 76448-0]. This term was created for, but is not limited in use to, the American Physical Therapy Association's Physical Therapy Outcomes Registry.",
                            type: "display",
                            linkId: "/89175-4/76430-8-help",
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
                {
                    type: "string",
                    code: [
                        {
                            code: "89265-3",
                            display: "Proc+Serv+Supp mod"
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/89265-3",
                    text: "Proc+Serv+Supp mod",
                    item: [
                        {
                            text: "The procedure, services, or supplies modifier.",
                            type: "display",
                            linkId: "/89175-4/89265-3-help",
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
                {
                    type: "decimal",
                    code: [
                        {
                            code: "89178-8",
                            display: "Financial responsibility"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/89178-8",
                    text: "Financial responsibility"
                },
                {
                    type: "decimal",
                    code: [
                        {
                            code: "76428-2",
                            display: "Visit charge in dollars"
                        }
                    ],
                    extension: [
                        {
                            url: "http://hl7.org/fhir/StructureDefinition/questionnaire-unit",
                            valueCoding: {
                                code: "{#}",
                                display: "{#}",
                                system: "http://unitsofmeasure.org"
                            }
                        }
                    ],
                    required: false,
                    linkId: "/89175-4/76428-2",
                    text: "Visit charge in dollars",
                    item: [
                        {
                            text: "This term was created for, but is not limited in use to, the American Physical Therapy Association's Physical Therapy Outcomes Registry, which defines the CPT charge as the total charge for the visit and includes all of the individual charges for each reported CPT billing code.",
                            type: "display",
                            linkId: "/89175-4/76428-2-help",
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
                }
            ]
        }
    ]
}