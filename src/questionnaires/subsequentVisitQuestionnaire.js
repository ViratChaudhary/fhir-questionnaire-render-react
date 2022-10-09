export const subsequentVisitQuestionnaire = {
    resourceType: 'Questionnaire',
    id: 'f201',
    text: {
        status: 'generated',
        div:
            '<div xmlns="http://www.w3.org/1999/xhtml">\n      <pre>Lifelines Questionnaire 1 part 1\n  1. Do you have allergies?\n  2. General Questions:\n    2.a) What is your gender?\n    2.b) What is your date of birth?\n'
    },
    url: 'http://hl7.org/fhir/Questionnaire/f201',
    status: 'active',
    subjectType: ['Patient'],
    date: '2010',
    code: [
        {
            system: 'http://example.org/system/code/lifelines/nl',
            code: 'VL 1-1, 18-65_1.2.2',
            display: 'Lifelines Questionnaire 1 part 1',
        },
    ],
    item: [
        {
            linkId: '1',
            text: 'Do you have allergies?',
            type: 'boolean',
        },
        {
            linkId: '2',
            text: 'General questions',
            type: 'group',
            item: [
                {
                    linkId: '2.1',
                    text: 'What is your gender?',
                    type: 'string',
                },
                {
                    linkId: '2.2',
                    text: 'What is your date of birth?',
                    type: 'date',
                },
            ],
        },
    ],
};
