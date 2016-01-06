/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='img/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bg_shape',
                            type: 'image',
                            rect: ['0px', '-5px', '980px', '450px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg_shape.png",'0px','0px']
                        },
                        {
                            id: 'bg_shape_r',
                            type: 'image',
                            rect: ['0px', '194px', '228px', '243px', 'auto', 'auto'],
                            opacity: '0.78861769912689',
                            fill: ["rgba(0,0,0,0)",im+"bg_shape_r.png",'0px','0px']
                        },
                        {
                            id: 'bg_shape_l',
                            type: 'image',
                            rect: ['765px', '-13px', '215px', '221px', 'auto', 'auto'],
                            opacity: '0.87804924424102',
                            fill: ["rgba(0,0,0,0)",im+"bg_shape_l.png",'0px','0px']
                        },
                        {
                            id: 'ttl_2016',
                            type: 'image',
                            rect: ['418px', '303px', '137px', '51px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ttl_2016.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'ttl_conference',
                            type: 'image',
                            rect: ['219px', '210px', '539px', '59px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ttl_conference.png",'0px','0px']
                        },
                        {
                            id: 'ttl_frontend',
                            type: 'image',
                            rect: ['233px', '135px', '535px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"ttl_frontend.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '980px', '450px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 5807,
                    autoPlay: true,
                    data: [
                        [
                            "eid220",
                            "top",
                            2619,
                            1172,
                            "easeOutCubic",
                            "${ttl_2016}",
                            '353px',
                            '303px'
                        ],
                        [
                            "eid206",
                            "left",
                            940,
                            1135,
                            "easeOutQuint",
                            "${ttl_frontend}",
                            '-541px',
                            '233px'
                        ],
                        [
                            "eid209",
                            "left",
                            700,
                            1214,
                            "easeOutQuart",
                            "${ttl_conference}",
                            '998px',
                            '219px'
                        ],
                        [
                            "eid299",
                            "left",
                            1914,
                            161,
                            "easeOutCubic",
                            "${ttl_conference}",
                            '219px',
                            '224px'
                        ],
                        [
                            "eid289",
                            "opacity",
                            5124,
                            505,
                            "easeInExpo",
                            "${bg_shape_l}",
                            '0.4390240013599396',
                            '0.87804924424102'
                        ],
                        [
                            "eid293",
                            "opacity",
                            4875,
                            505,
                            "easeInExpo",
                            "${bg_shape_r}",
                            '0.4390240013599396',
                            '0.78861769912689'
                        ],
                        [
                            "eid273",
                            "opacity",
                            3960,
                            915,
                            "easeOutQuint",
                            "${bg_shape}",
                            '0',
                            '1'
                        ],
                        [
                            "eid252",
                            "skewX",
                            4704,
                            0,
                            "easeInOutBack",
                            "${ttl_2016}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid286",
                            "left",
                            4882,
                            925,
                            "easeOutQuint",
                            "${bg_shape_l}",
                            '982px',
                            '765px'
                        ],
                        [
                            "eid285",
                            "left",
                            4875,
                            932,
                            "easeOutQuint",
                            "${bg_shape_r}",
                            '-230px',
                            '0px'
                        ],
                        [
                            "eid298",
                            "left",
                            3791,
                            0,
                            "easeOutQuint",
                            "${ttl_2016}",
                            '418px',
                            '418px'
                        ],
                        [
                            "eid295",
                            "top",
                            700,
                            240,
                            "easeOutQuint",
                            "${ttl_frontend}",
                            '135px',
                            '105px'
                        ],
                        [
                            "eid296",
                            "top",
                            700,
                            0,
                            "easeOutQuint",
                            "${ttl_conference}",
                            '210px',
                            '210px'
                        ],
                        [
                            "eid217",
                            "opacity",
                            2000,
                            2704,
                            "easeInOutBack",
                            "${ttl_2016}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("main_edgeActions.js");
})("EDGE-10196486");
