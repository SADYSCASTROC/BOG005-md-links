const mocks = {
    path: 'prueba\prueb2\ejemplo2.md',
    validateFalse: [
        {
            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/bold',
            text: 'mozilla',
            file: 'C:\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\prueb2\\ejemplo2.md'
        },
        {
            href: 'https://translate.google.com/?hl=es',
            text: 'translate',
            file: 'C:\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\prueb2\\ejemplo2.md'
        },
        {
            href: 'htttps://www.youtube.com',
            text: 'youtube',
            file: 'C:\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\prueb2\\ejemplo2.md'
        }
    ],

    validateTrue: [
        {
            href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/bold',
            text: 'mozilla',
            file: 'C:\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\prueb2\\ejemplo2.md',
            status: 200,
            result: 'OK'
        },
        {
            href: 'https://translate.google.com/?hl=es',
            text: 'translate',
            file: 'C:\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\prueb2\\ejemplo2.md',
            status: 200,
            result: 'OK'
        },
        {
            href: 'htttps://www.youtube.com',
            text: 'youtube',
            file: 'C:\\Users\\Usuario\\Downloads\\sadys\\sadys\\md-link\\BOG005-md-links\\prueba\\prueb2\\ejemplo2.md',
            status: 404,
            result: 'FAIL'
        }
    ]

}

module.exports = { mocks }