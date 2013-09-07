var games = [
{
    "id": 101,
    "name": "Afrika",
    "desc": "The War in Africa: 1940-1942",
    "sort": 2,
    "players": [
        "Axis",
        "Allied"
    ],
    "turns": [
        "Sep 1940",
        "Oct 1940",
        "Nov 1940",
        "Dec 1940",
        "Jan 1941",
        "Feb 1941",
        "Mar 1941",
        "Apr 1941",
        "May 1941",
        "Jun 1941",
        "Jul 1941",
        "Aug 1941",
        "Sep 1941",
        "Oct 1941",
        "Nov 1941",
        "Dec 1941",
        "Jan 1942",
        "Feb 1942",
        "Mar 1942",
        "Apr 1942",
        "May 1942",
        "Jun 1942",
        "Jul 1942",
        "Aug 1942",
        "Sep 1942",
        "Oct 1942",
        "Nov 1942",
        "Dec 1942"
    ],
    "phases": [
        "1: Reset Air and Trucks",
        "1: Determine Coastal Shipping",
        "1: Determine Port Capacities",
        "1: Place Reinforcements",
        "1: Determine Variable Reinforcements",
        "1: Determine Rommel Status",
        "1: Movement",
        "1: Combat",
        "1: Exploitation",
        "1: Supply",
        "2: Reset Air and Trucks",
        "2: Determine Port Capacities",
        "2: Acquire SPs",
        "2: Place Reinforcements",
        "2: Determine Variable Reinforcements",
        "2: Determine O'Conner Status",
        "2: Movement",
        "2: Combat",
        "2: Exploitation",
        "2: Supply"
    ],
    "terrains": [
        {
            "name": "Open",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Rough",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Mountain",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 3
            }
        },
        {
            "name": "Salt Marsh",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Sand Desert",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0,
                "defendmod": 3
            }
        },
        {
            "name": "Fort,Box",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Minor City",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Major City",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 3
            }
        },
        {
            "name": "Delta Marsh",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        }
    ],
    "combatTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "odds": -4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A3r1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A2r1"
                    },
                    {
                        "lo": 5,
                        "hi": 9,
                        "result": "A2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "A1D1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r2"
                    }
                ]
            },
            {
                "odds": -3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2r1"
                    },
                    {
                        "lo": 4,
                        "hi": 8,
                        "result": "A2"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1D1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A1D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": -2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2r1"
                    },
                    {
                        "lo": 3,
                        "hi": 7,
                        "result": "A2"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1D1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "A1D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 1,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2r1"
                    },
                    {
                        "lo": 3,
                        "hi": 5,
                        "result": "A2"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "A1D1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A2"
                    },
                    {
                        "lo": 5,
                        "hi": 7,
                        "result": "A1D1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D2r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r4"
                    }
                ]
            },
            {
                "odds": 3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2"
                    },
                    {
                        "lo": 4,
                        "hi": 6,
                        "result": "A1D1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r4"
                    }
                ]
            },
            {
                "odds": 4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2"
                    },
                    {
                        "lo": 3,
                        "hi": 5,
                        "result": "A1D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D3r3"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r4"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r4"
                    }
                ]
            },
            {
                "odds": 5,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2D1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D2r2"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D3r3"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D3r4"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D4r4"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r5"
                    }
                ]
            },
            {
                "odds": 6,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2D1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D2r2"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D3r3"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D3r4"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D4r4"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r5"
                    }
                ]
            },
            {
                "odds": 7,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "D2r1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "D2r2"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "D3r3"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D3r4"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D4r4"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D4r5"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D5r5"
                    }
                ]
            },
            {
                "odds": 8,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "D2r1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "D2r2"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "D3r3"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D3r4"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D4r4"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D4r5"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D5r5"
                    }
                ]
            },
            {
                "odds": 9,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1D1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "D2r1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "D3r2"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "D3r3"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "D3r4"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D4r4"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D4r5"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D5r5"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D6r5"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "Air",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Artillery",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Div Integrity",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Comb Arms",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Leader",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Rocks/Hills",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "OOS Attack",
                "type": "MULT",
                "value": 0.25
            },
            {
                "name": "OOS Defend",
                "type": "MULT",
                "value": 0.5
            }
        ]
    },
    "barrageTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "strength": "NA",
                "results": [
                    {
                        "lo": 2,
                        "hi": 12,
                        "result": "NE"
                    }
                ]
            }
        ],
        "modifiers": []
    }
},
{
    "id": 102,
    "name": "Bastogne",
    "desc": "Screaming Eagles Under Siege: 18-27 Dec '44",
    "sort": 13,
    "players": [
        "US",
        "German"
    ],
    "turns": [
        "18 Dec 1944",
        "19 Dec 1944",
        "20 Dec 1944",
        "21 Dec 1944",
        "22 Dec 1944",
        "23 Dec 1944",
        "24 Dec 1944",
        "25 Dec 1944",
        "26 Dec 1944",
        "27 Dec 1944"
    ],
    "phases": [
        "US: Reinforcements",
        "US: Road March",
        "US: Air Barrage",
        "US: Movement",
        "US: Combat",
        "US: Exploitation",
        "German: Reinforcements",
        "German: Road March",
        "German: Movement",
        "German: DG Removal (Both)",
        "German: US Barrage",
        "German: Barrage",
        "German: Combat",
        "German: Exploitation"
    ],
    "terrains": [
        {
            "name": "Open",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Village",
            "barrage": {
                "attackmod": 1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Woods",
            "barrage": {
                "attackmod": -1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Stream",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        }
    ],
    "combatTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "odds": -3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A1r2"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "A1r1"
                    },
                    {
                        "lo": 7,
                        "hi": 11,
                        "result": "A1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D1"
                    }
                ]
            },
            {
                "odds": -2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1r2"
                    },
                    {
                        "lo": 4,
                        "hi": 5,
                        "result": "A1r1"
                    },
                    {
                        "lo": 6,
                        "hi": 8,
                        "result": "A1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1D1"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "D1r1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D1r2"
                    }
                ]
            },
            {
                "odds": 1,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1r2"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1r1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "A1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "A1D1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D1r1"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "D1r2"
                    }
                ]
            },
            {
                "odds": 2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1r1"
                    },
                    {
                        "lo": 4,
                        "hi": 5,
                        "result": "A1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A1D1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D1r1"
                    },
                    {
                        "lo": 9,
                        "hi": 11,
                        "result": "D1r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D1r3"
                    }
                ]
            },
            {
                "odds": 3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1r1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A1D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "D1r1"
                    },
                    {
                        "lo": 7,
                        "hi": 9,
                        "result": "D1r2"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "D1r3"
                    }
                ]
            },
            {
                "odds": 4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "D1r1"
                    },
                    {
                        "lo": 6,
                        "hi": 8,
                        "result": "D1r2"
                    },
                    {
                        "lo": 9,
                        "hi": 11,
                        "result": "D1r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r4"
                    }
                ]
            },
            {
                "odds": 5,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "A1D1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "D1r1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "D1r2"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D1r3"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D1r4"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "D2r5"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r6"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "DG",
                "type": "MULT",
                "value": 0.5
            }
        ]
    },
    "barrageTable": {
        "dice": {
            "number": 1,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "strength": "1",
                "results": [
                    {
                        "lo": 1,
                        "hi": 1,
                        "result": "DG"
                    },
                    {
                        "lo": 2,
                        "hi": 6,
                        "result": "NE"
                    }
                ]
            },
            {
                "strength": "2",
                "results": [
                    {
                        "lo": 1,
                        "hi": 2,
                        "result": "DG"
                    },
                    {
                        "lo": 3,
                        "hi": 6,
                        "result": "NE"
                    }
                ]
            },
            {
                "strength": "3",
                "results": [
                    {
                        "lo": 1,
                        "hi": 3,
                        "result": "DG"
                    },
                    {
                        "lo": 4,
                        "hi": 6,
                        "result": "NE"
                    }
                ]
            },
            {
                "strength": "4",
                "results": [
                    {
                        "lo": 1,
                        "hi": 4,
                        "result": "DG"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "NE"
                    }
                ]
            },
            {
                "strength": "5",
                "results": [
                    {
                        "lo": 1,
                        "hi": 5,
                        "result": "DG"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "NE"
                    }
                ]
            },
            {
                "strength": "6",
                "results": [
                    {
                        "lo": 1,
                        "hi": 6,
                        "result": "DG"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "NE"
                    }
                ]
            }
        ],
        "modifiers": []
    }
},
{
    "id": 103,
    "name": "Crusader",
    "desc": "The 8th Army's Winter Victory, Nov-Dec 1941",
    "sort": 5,
    "players": [
        "Allied",
        "Axis"
    ],
    "turns": [
        "Nov 19-20 1941",
        "Nov 21-22 1941",
        "Nov 23-24 1941",
        "Nov 25-26 1941",
        "Nov 27-28 1941",
        "Nov 29-20 1941",
        "Dec 1-2 1941",
        "Dec 3-4 1941",
        "Dec 5-6 1941",
        "Dec 7-8 1941",
        "Dec 9-10 1941"
    ],
    "phases": [
        "Air Point Determination",
        "Allied: Movement",
        "Allied: Barrage",
        "Allied: Combat",
        "Allied: Supply",
        "Allied: Exploitation",
        "Allied: DG Marker Removal",
        "Axis: Movement",
        "Axis: Barrage",
        "Axis: Combat",
        "Axis: Supply",
        "Axis: Exploitation",
        "Axis: DG Marker Removal"
    ],
    "terrains": [
        {
            "name": '',
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Open",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Road",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Track",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Slope",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "Escarpment Road",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 0.25,
                "defendmod": 1
            }
        },
        {
            "name": "City",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Salt Marsh",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Wadi",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "AT Ditch",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "Trench",
            "barrage": {
                "attackmod": 1,
                "defendmod": 1
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        }
    ],
    "combatTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "odds": -3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A3r1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A2r1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "A2"
                    },
                    {
                        "lo": 7,
                        "hi": 9,
                        "result": "A1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "A1D1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r2"
                    }
                ]
            },
            {
                "odds": -2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2r1"
                    },
                    {
                        "lo": 4,
                        "hi": 5,
                        "result": "A2"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "A1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1D1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A1D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 1,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2r1"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "A2"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A2D1"
                    },
                    {
                        "lo": 5,
                        "hi": 7,
                        "result": "A1D1"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2"
                    },
                    {
                        "lo": 4,
                        "hi": 6,
                        "result": "A1D1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A1D2"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "D2r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r4"
                    }
                ]
            },
            {
                "odds": 3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2"
                    },
                    {
                        "lo": 3,
                        "hi": 5,
                        "result": "A1D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "D1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D2r1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r4"
                    }
                ]
            },
            {
                "odds": 4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "D1"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "D2r1"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D3r3"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r4"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r4"
                    }
                ]
            },
            {
                "odds": 5,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1D1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "D1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "D2r1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D2r2"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D3r3"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D3r4"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D4r4"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r5"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "HQ",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Air",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Rommel",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "DG",
                "type": "MULT",
                "value": 0.5
            },
            {
                "name": "Out of Supply",
                "type": "MULT",
                "value": 0.5
            }
        ]
    },
    "barrageTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "strength": "1",
                "results": [
                    {
                        "lo": 2,
                        "hi": 10,
                        "result": "NE"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "DG"
                    }
                ]
            },
            {
                "strength": "2 - 3",
                "results": [
                    {
                        "lo": 2,
                        "hi": 9,
                        "result": "NE"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "DG"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "4 - 5",
                "results": [
                    {
                        "lo": 2,
                        "hi": 8,
                        "result": "NE"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "DG"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "6 - 8",
                "results": [
                    {
                        "lo": 2,
                        "hi": 7,
                        "result": "NE"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "DG"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "9 - 12",
                "results": [
                    {
                        "lo": 2,
                        "hi": 6,
                        "result": "NE"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "DG"
                    },
                    {
                        "lo": 9,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "13 - 17",
                "results": [
                    {
                        "lo": 2,
                        "hi": 5,
                        "result": "NE"
                    },
                    {
                        "lo": 6,
                        "hi": 8,
                        "result": "DG"
                    },
                    {
                        "lo": 9,
                        "hi": 11,
                        "result": "1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            },
            {
                "strength": "18 - 23",
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "NE"
                    },
                    {
                        "lo": 5,
                        "hi": 7,
                        "result": "DG"
                    },
                    {
                        "lo": 8,
                        "hi": 10,
                        "result": "1"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            },
            {
                "strength": "24+",
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "NE"
                    },
                    {
                        "lo": 4,
                        "hi": 7,
                        "result": "DG"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "1"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "No Spotter",
                "type": "SHIFT",
                "value": -2
            },
            {
                "name": "Salt Marsh",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "City",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Tobruk Trench",
                "type": "SHIFT",
                "value": -4
            },
            {
                "name": "Trench",
                "type": "SHIFT",
                "value": -2
            }
        ]
    }
},
{
    "id": 104,
    "name": "Gazala",
    "desc": "The Battle for Tobruk, May-June 1942",
    "sort": 6,
    "players": [
        "Axis",
        "Allied"
    ],
    "turns": [
        "May 26-27 1942",
        "May 28 1942",
        "May 29 1942",
        "May 30 1942",
        "May 31 1942",
        "June 1 1942",
        "June 2 1942",
        "June 3 1942",
        "June 4 1942",
        "June 5 1942",
        "June 6 1942",
        "June 7 1942",
        "June 8 1942",
        "June 9 1942",
        "June 10 1942",
        "June 11 1942",
        "June 12 1942",
        "June 13 1942",
        "June 14 1942",
        "June 15 1942",
        "June 16 1942",
        "June 17 1942",
        "June 18 1942",
        "June 19 1942"
    ],
    "phases": [
        "Air Point Determination",
        "1: Remove Attack Supply",
        "1: Reinforcement Supply",
        "1: Movement and Reinforcement",
        "1: Barrage",
        "1: Allied Defensive Barrage",
        "1: Combat",
        "1: Supply",
        "1: Allied Reaction",
        "1: Exploitation",
        "1: DG Marker Removal",
        "2: Remove Attack Supply",
        "2: Reinforcement Supply",
        "2: Movement and Reinforcement",
        "1: Barrage",
        "2: Axis Defensive Barrage",
        "2: Axis Reaction",
        "2: Combat",
        "2: Supply",
        "2: Exploitation",
        "2: DG Marker Removal"
    ],
    "terrains": [
        {
            "name": '',
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Open",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Broken",
            "barrage": {
                "attackmod": -1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Rough",
            "barrage": {
                "attackmod": -1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Slope",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "Town",
            "barrage": {
                "attackmod": -1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Salt Marsh",
            "barrage": {
                "attackmod": -1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Minefield",
            "barrage": {
                "attackmod": 1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "Wadi",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "AT Ditch",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "Tobruk Trench",
            "barrage": {
                "attackmod": -1,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        }
    ],
    "combatTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "odds": -3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A3r1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A2r1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "A2"
                    },
                    {
                        "lo": 7,
                        "hi": 9,
                        "result": "A1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "A1D1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r2"
                    }
                ]
            },
            {
                "odds": -2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2r1"
                    },
                    {
                        "lo": 4,
                        "hi": 5,
                        "result": "A2"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "A1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1D1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A1D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 1,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2r1"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "A2"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A2D1"
                    },
                    {
                        "lo": 5,
                        "hi": 7,
                        "result": "A1D1"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2"
                    },
                    {
                        "lo": 4,
                        "hi": 6,
                        "result": "A1D1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A1D2"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "D2r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r4"
                    }
                ]
            },
            {
                "odds": 3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2"
                    },
                    {
                        "lo": 3,
                        "hi": 5,
                        "result": "A1D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "D1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D2r1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r4"
                    }
                ]
            },
            {
                "odds": 4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "D1"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "D2r1"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D3r3"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r4"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r4"
                    }
                ]
            },
            {
                "odds": 5,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1D1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "D1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "D2r1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "D2r2"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D3r3"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D3r4"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D4r4"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r5"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "HQ",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Air",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Rommel",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "DG",
                "type": "MULT",
                "value": 0.5
            }
        ]
    },
    "barrageTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "strength": "1",
                "results": [
                    {
                        "lo": 2,
                        "hi": 10,
                        "result": "NE"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "DG"
                    }
                ]
            },
            {
                "strength": "2 - 3",
                "results": [
                    {
                        "lo": 2,
                        "hi": 9,
                        "result": "NE"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "DG"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "4 - 5",
                "results": [
                    {
                        "lo": 2,
                        "hi": 8,
                        "result": "NE"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "DG"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "6 - 8",
                "results": [
                    {
                        "lo": 2,
                        "hi": 7,
                        "result": "NE"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "DG"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "9 - 12",
                "results": [
                    {
                        "lo": 2,
                        "hi": 6,
                        "result": "NE"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "DG"
                    },
                    {
                        "lo": 9,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "13 - 17",
                "results": [
                    {
                        "lo": 2,
                        "hi": 5,
                        "result": "NE"
                    },
                    {
                        "lo": 6,
                        "hi": 8,
                        "result": "DG"
                    },
                    {
                        "lo": 9,
                        "hi": 11,
                        "result": "1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            },
            {
                "strength": "18 - 23",
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "NE"
                    },
                    {
                        "lo": 5,
                        "hi": 7,
                        "result": "DG"
                    },
                    {
                        "lo": 8,
                        "hi": 10,
                        "result": "1"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            },
            {
                "strength": "24+",
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "NE"
                    },
                    {
                        "lo": 4,
                        "hi": 7,
                        "result": "DG"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "1"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "No Spotter",
                "type": "SHIFT",
                "value": -2
            },
            {
                "name": "Salt Marsh",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Broken",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Rough",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Town",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Tobruk Trench",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Minefield",
                "type": "SHIFT",
                "value": 1
            }
        ]
    }
},
{
    "id": 105,
    "name": "Guadalajara",
    "desc": "Last Chance to Take Madrid!",
    "sort": 11,
    "players": [
        "Italian/Nationalist",
        "Republican"
    ],
    "turns": [],
    "phases": [
        "Nationalist: Movement/Reserve",
        "Nationalist: Tank Repair",
        "Nationalist: Barrage",
        "Nationalist: Combat",
        "Nationalist: Supply",
        "Nationalist: Exploitation",
        "Nationalist: Cleanup",
        "Republican: Air Point Determination",
        "Republican: Air Interdiction",
        "Republican: Movement/Reserve",
        "Republican: Tank Repair",
        "Republican: Barrage",
        "Republican: Combat",
        "Republican: Italian Morale",
        "Republican: Supply",
        "Republican: Exploitation",
        "Republican: Cleanup"
    ],
    "terrains": [
        {
            "name": "Open",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Village",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Minor Village",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Palacio",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Woods",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Hills",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Wooded Hills",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Minor River",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "River",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.1667,
                "defendmod": 1
            }
        },
        {
            "name": "Bridge",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        }
    ],
    "combatTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "odds": -2,
                "results": [
                    {
                        "lo": 0,
                        "hi": 0,
                        "result": "A3r3"
                    },
                    {
                        "lo": 1,
                        "hi": 1,
                        "result": "A2r2"
                    },
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1r2"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1r1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "Ar1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "NE"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "Dr1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D1r1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D1r2"
                    }
                ]
            },
            {
                "odds": 1,
                "results": [
                    {
                        "lo": 0,
                        "hi": 0,
                        "result": "A2r2"
                    },
                    {
                        "lo": 1,
                        "hi": 1,
                        "result": "A1r2"
                    },
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1r1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "Ar1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A1"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "A1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "Dr1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D1r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D1r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r2"
                    }
                ]
            },
            {
                "odds": 2,
                "results": [
                    {
                        "lo": 0,
                        "hi": 0,
                        "result": "A1r2"
                    },
                    {
                        "lo": 1,
                        "hi": 2,
                        "result": "A1r1"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "Ar1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A1"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "A1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "Dr1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "D1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D1r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D1r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r3"
                    }
                ]
            },
            {
                "odds": 3,
                "results": [
                    {
                        "lo": 0,
                        "hi": 1,
                        "result": "A1r1"
                    },
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "Ar1"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "A1"
                    },
                    {
                        "lo": 4,
                        "hi": 5,
                        "result": "A1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "Dr1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "D1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "D1r1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D1r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 4,
                "results": [
                    {
                        "lo": 0,
                        "hi": 0,
                        "result": "A1r1"
                    },
                    {
                        "lo": 1,
                        "hi": 1,
                        "result": "Ar2"
                    },
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "NE"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "Dr1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "Dr2"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "D2"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "D1r1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D1r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r4"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "Minor Village",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Flame Attack",
                "type": "DRM",
                "value": 3
            },
            {
                "name": "Flame Defend",
                "type": "DRM",
                "value": -3
            },
            {
                "name": "Defend Panic",
                "type": "DRM",
                "value": 1
            },
            {
                "name": "Defend AT",
                "type": "DRM",
                "value": -3
            },
            {
                "name": "Brihuega attacked from above",
                "type": "DRM",
                "value": 2
            },
            {
                "name": "OOS",
                "type": "MULT",
                "value": 0.5
            }
        ]
    },
    "barrageTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "strength": "1 - 2",
                "results": [
                    {
                        "lo": 2,
                        "hi": 10,
                        "result": "NE"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "DG"
                    }
                ]
            },
            {
                "strength": "3 - 5",
                "results": [
                    {
                        "lo": 2,
                        "hi": 9,
                        "result": "NE"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "DG"
                    }
                ]
            },
            {
                "strength": "6 - 9",
                "results": [
                    {
                        "lo": 2,
                        "hi": 8,
                        "result": "NE"
                    },
                    {
                        "lo": 9,
                        "hi": 12,
                        "result": "DG"
                    }
                ]
            },
            {
                "strength": "10 - 14",
                "results": [
                    {
                        "lo": 2,
                        "hi": 7,
                        "result": "NE"
                    },
                    {
                        "lo": 8,
                        "hi": 11,
                        "result": "DG"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "15 - 18",
                "results": [
                    {
                        "lo": 2,
                        "hi": 6,
                        "result": "NE"
                    },
                    {
                        "lo": 7,
                        "hi": 10,
                        "result": "DG"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "19+",
                "results": [
                    {
                        "lo": 2,
                        "hi": 5,
                        "result": "NE"
                    },
                    {
                        "lo": 6,
                        "hi": 9,
                        "result": "DG"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "No Spotter",
                "type": "SHIFT",
                "value": -2
            },
            {
                "name": "Brihuega Spotter",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Village",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Hills",
                "type": "SHIFT",
                "value": -1
            }
        ]
    }
},
{
    "id": 106,
    "name": "The Mighty Endeavor",
    "desc": "The Campaign in Western Europe: 1944 - 1945",
    "sort": 10,
    "players": [
        "Allied",
        "German"
    ],
    "turns": [
        "6-15 Jun 44",
        "16-30 Jun 44",
        "1-10 Jul 44",
        "11-20 Jul 44",
        "21-31 Jul 44",
        "1-10 Aug 44",
        "11-20 Aug 44",
        "21-30 Aug 44",
        "1-10 Sep 44",
        "11-20 Sep 44",
        "21-30 Sep 44",
        "1-15 Oct 44",
        "16-31 Oct 44",
        "1-15 Nov 44",
        "16-30 Nov 44",
        "1-15 Dec 44",
        "16-31 Dec 44",
        "1-15 Jan 45",
        "16-31 Jan 45",
        "1-15 Feb 45",
        "16-28 Feb 45",
        "1-15 Mar 45",
        "16-31 Mar 45",
        "1-15 Apr 45",
        "16-30 Apr 45"
    ],
    "phases": [
        "Allied: Air Point",
        "Allied: Invasion Placement",
        "Allied: Attack HQ Designation",
        "Allied: Air Drop",
        "Allied: Movement",
        "Allied: Combat",
        "Allied: Exploitation",
        "Allied: Supply",
        "Allied: Shipping",
        "Allied: Reinforcement/Replacement",
        "Allied: Clean up",
        "German: Movement",
        "German: Combat",
        "German: Exploitation",
        "German: Supply",
        "German: Reinforcement/Replacement"
    ],
    "terrains": [
        {
            "name": "Open",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Bocage",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Forest",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "City",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 3
            }
        },
        {
            "name": "River",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "Fort",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Rough",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Mountain",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 4
            }
        },
        {
            "name": "Wetlands",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        },
        {
            "name": "Rhine River",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.333,
                "defendmod": 1
            }
        },
        {
            "name": "Sea Line",
            "barrage": {
                "attackmod": 0,
                "defendmod": 0
            },
            "combat": {
                "attackmod": 0.25,
                "defendmod": 1
            }
        }
    ],
    "combatTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "odds": -3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 5,
                        "result": "A2"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "[A2]"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "[A2]D1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1D1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "A1D2r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "[A1]D2r1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r2"
                    }
                ]
            },
            {
                "odds": -2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A2"
                    },
                    {
                        "lo": 5,
                        "hi": 6,
                        "result": "[A2]"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "[A2]D1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1D1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1D1r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "[A1]D2r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r2"
                    }
                ]
            },
            {
                "odds": 1,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "[A2]"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "[A2]D1"
                    },
                    {
                        "lo": 6,
                        "hi": 7,
                        "result": "A1D1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "[A1]D1r1"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "[A1]D2r1"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r3"
                    }
                ]
            },
            {
                "odds": 2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A2"
                    },
                    {
                        "lo": 4,
                        "hi": 5,
                        "result": "[A1]D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A1D1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "[A1]D1r1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "D2r1"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r3"
                    }
                ]
            },
            {
                "odds": 3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "[A2]"
                    },
                    {
                        "lo": 4,
                        "hi": 5,
                        "result": "[A2]D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "[A1]D1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "[A1]D2r1"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "D2r1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "[A2]"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "[A2]D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A1D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "[A1]D1r1"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "D2r1"
                    },
                    {
                        "lo": 8,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 5,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "[A2]"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "[A2]D1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A1D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "[A1]D1"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "D1r1"
                    },
                    {
                        "lo": 7,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r3"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 6,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "[A2]"
                    },
                    {
                        "lo": 3,
                        "hi": 3,
                        "result": "A1D1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "[A1]D1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "D1r1"
                    },
                    {
                        "lo": 6,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r3"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 7,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1D1"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "D1r1"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "D1r2"
                    },
                    {
                        "lo": 6,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r3"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D3r3"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D4r3"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "Air",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "OOS",
                "type": "MULT",
                "value": 0.5
            }
        ]
    },
    "barrageTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "strength": "NA",
                "results": [
                    {
                        "lo": 2,
                        "hi": 12,
                        "result": "NE"
                    }
                ]
            }
        ],
        "modifiers": []
    }
},
{
    "id": 107,
    "name": "Yom Kippur",
    "desc": "The Battle for the Sinai",
    "sort": 4,
    "players": [
        "Egyptian",
        "Israeli"
    ],
    "turns": [
        "Oct 6 1973",
        "Oct 7-8 1973",
        "Oct 9-10 1973",
        "Oct 11-12 1973",
        "Oct 13-14 1973",
        "Oct 15-16 1973",
        "Oct 17-18 1973",
        "Oct 19-20 1973",
        "Oct 21-22 1973",
        "Oct 23-24 1973",
        "Oct 25-26 1973",
        "Oct 27-28 1973"
    ],
    "phases": [
        "Pre-Turn: Egyptian Barrage",
        "Pre-Turn: Air Unit Reset",
        "Pre-Turn: Air Unit SAM Suppression",
        "Egyptian: Reserve Release",
        "Egyptian: Movement",
        "Egyptian: Barrage",
        "Egyptian: Combat",
        "Egyptian: Supply",
        "Egyptian: Bridging",
        "Egyptian: Exploitation",
        "Egyptian: Tank Replacement",
        "Egyptian: Clean Up",
        "Israeli: Movement",
        "Israeli: Barrage",
        "Israeli: Combat",
        "Israeli: Supply",
        "Israeli: Bridging",
        "Israeli: Exploitation",
        "Israeli: Tank Recovery",
        "Israeli: Clean Up",
        "Post-Turn: Cease Fire Check"
    ],
    "terrains": [
        {
            "name": "Open",
            "barrage": {
                "attackmod": null,
                "defendmod": null
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 1
            }
        },
        {
            "name": "Rough",
            "barrage": {
                "attackmod": null,
                "defendmod": null
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Sand Dune",
            "barrage": {
                "attackmod": null,
                "defendmod": null
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "Swamp",
            "barrage": {
                "attackmod": null,
                "defendmod": null
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 2
            }
        },
        {
            "name": "City",
            "barrage": {
                "attackmod": null,
                "defendmod": null
            },
            "combat": {
                "attackmod": 1,
                "defendmod": 3
            }
        },
        {
            "name": "Suez Canal",
            "barrage": {
                "attackmod": null,
                "defendmod": null
            },
            "combat": {
                "attackmod": 0.25,
                "defendmod": 1
            }
        },
        {
            "name": "Minor Canal",
            "barrage": {
                "attackmod": null,
                "defendmod": null
            },
            "combat": {
                "attackmod": 0.5,
                "defendmod": 1
            }
        }
    ],
    "combatTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "odds": -4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A2r1*"
                    },
                    {
                        "lo": 3,
                        "hi": 4,
                        "result": "A1r1*"
                    },
                    {
                        "lo": 5,
                        "hi": 8,
                        "result": "A1*"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1*Dr1"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "A*D2r2*"
                    }
                ]
            },
            {
                "odds": -3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1r1*"
                    },
                    {
                        "lo": 4,
                        "hi": 7,
                        "result": "A1*"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1*Dr1"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A1*D1r2*"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "A*D2r2*"
                    }
                ]
            },
            {
                "odds": -2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1r1*"
                    },
                    {
                        "lo": 3,
                        "hi": 6,
                        "result": "A1*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A1*Dr1"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "A1*D1r2*"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "A*D2r2*"
                    }
                ]
            },
            {
                "odds": 1,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1r1*"
                    },
                    {
                        "lo": 3,
                        "hi": 5,
                        "result": "A1*"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A1*Dr1"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "A*D2r2*"
                    }
                ]
            },
            {
                "odds": 2,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A1*"
                    },
                    {
                        "lo": 5,
                        "hi": 7,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "A*D2r2*"
                    }
                ]
            },
            {
                "odds": 3,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1*"
                    },
                    {
                        "lo": 4,
                        "hi": 6,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "A*D2r2*"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D2r2"
                    }
                ]
            },
            {
                "odds": 4,
                "results": [
                    {
                        "lo": 2,
                        "hi": 2,
                        "result": "A1*"
                    },
                    {
                        "lo": 3,
                        "hi": 5,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "A*D2r2*"
                    },
                    {
                        "lo": 11,
                        "hi": 11,
                        "result": "D2r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r2"
                    }
                ]
            },
            {
                "odds": 5,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "A*D2r2*"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "D3r2"
                    }
                ]
            },
            {
                "odds": 6,
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "A*D2r2*"
                    },
                    {
                        "lo": 10,
                        "hi": 10,
                        "result": "D2r2"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "D3r2"
                    }
                ]
            },
            {
                "odds": 7,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A*D2r2*"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A*D2r2"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "D3r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 8,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A1*D1r1*"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A*D2r2*"
                    },
                    {
                        "lo": 8,
                        "hi": 8,
                        "result": "A*D2r2"
                    },
                    {
                        "lo": 9,
                        "hi": 9,
                        "result": "D2r2"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "D3r2"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            },
            {
                "odds": 9,
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "A1*Dr1*"
                    },
                    {
                        "lo": 4,
                        "hi": 4,
                        "result": "A*D1r1*"
                    },
                    {
                        "lo": 5,
                        "hi": 5,
                        "result": "A*D1r2*"
                    },
                    {
                        "lo": 6,
                        "hi": 6,
                        "result": "A*D2r2*"
                    },
                    {
                        "lo": 7,
                        "hi": 7,
                        "result": "A*D2r2"
                    },
                    {
                        "lo": 8,
                        "hi": 10,
                        "result": "D3r2"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "D3r3"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "Air",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "HQ",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "Engineer",
                "type": "SHIFT",
                "value": 1
            },
            {
                "name": "DG",
                "type": "MULT",
                "value": 0.5
            },
            {
                "name": "OOS",
                "type": "MULT",
                "value": 0.5
            }
        ]
    },
    "barrageTable": {
        "dice": {
            "number": 2,
            "base": "d",
            "sides": 6
        },
        "table": [
            {
                "strength": "1",
                "results": [
                    {
                        "lo": 2,
                        "hi": 10,
                        "result": "NE"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "DG"
                    }
                ]
            },
            {
                "strength": "2 - 3",
                "results": [
                    {
                        "lo": 2,
                        "hi": 9,
                        "result": "NE"
                    },
                    {
                        "lo": 10,
                        "hi": 11,
                        "result": "DG"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "4 - 5",
                "results": [
                    {
                        "lo": 2,
                        "hi": 8,
                        "result": "NE"
                    },
                    {
                        "lo": 9,
                        "hi": 10,
                        "result": "DG"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "6 - 8",
                "results": [
                    {
                        "lo": 2,
                        "hi": 7,
                        "result": "NE"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "DG"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "9 - 12",
                "results": [
                    {
                        "lo": 2,
                        "hi": 6,
                        "result": "NE"
                    },
                    {
                        "lo": 7,
                        "hi": 8,
                        "result": "DG"
                    },
                    {
                        "lo": 9,
                        "hi": 12,
                        "result": "1"
                    }
                ]
            },
            {
                "strength": "13 - 17",
                "results": [
                    {
                        "lo": 2,
                        "hi": 5,
                        "result": "NE"
                    },
                    {
                        "lo": 6,
                        "hi": 8,
                        "result": "DG"
                    },
                    {
                        "lo": 9,
                        "hi": 11,
                        "result": "1"
                    },
                    {
                        "lo": 12,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            },
            {
                "strength": "18 - 23",
                "results": [
                    {
                        "lo": 2,
                        "hi": 4,
                        "result": "NE"
                    },
                    {
                        "lo": 5,
                        "hi": 7,
                        "result": "DG"
                    },
                    {
                        "lo": 8,
                        "hi": 10,
                        "result": "1"
                    },
                    {
                        "lo": 11,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            },
            {
                "strength": "24+",
                "results": [
                    {
                        "lo": 2,
                        "hi": 3,
                        "result": "NE"
                    },
                    {
                        "lo": 4,
                        "hi": 7,
                        "result": "DG"
                    },
                    {
                        "lo": 8,
                        "hi": 9,
                        "result": "1"
                    },
                    {
                        "lo": 10,
                        "hi": 12,
                        "result": "2"
                    }
                ]
            }
        ],
        "modifiers": [
            {
                "name": "No Spotter",
                "type": "SHIFT",
                "value": -2
            },
            {
                "name": "Sand Dune",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "City",
                "type": "SHIFT",
                "value": -1
            },
            {
                "name": "Swamp",
                "type": "SHIFT",
                "value": -4
            },
            {
                "name": "Rough",
                "type": "SHIFT",
                "value": -1
            }
        ]
    }
},

];
module.exports = games;