var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "",
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "720",
                    "DialogWidth": "960"
                },
                "/Configuration": {
                    "PreloadWeight": "26"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "568",
                    "ToolBoxButtonY": "48"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/tsingkwai/.local/share/wallpapers/Cloudy/contents/images/5424x2860.png",
                    "SlidePaths": "/home/tsingkwai/.local/share/wallpapers,/usr/share/wallpapers"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "660",
                            "DialogWidth": "880"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "86"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F8"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F8"
                        }
                    },
                    "plugin": "org.kde.plasma.kickerdash"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "660",
                            "DialogWidth": "880"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        },
                        "/Configuration/Configuration/General": {
                            "launchers": ""
                        },
                        "/Configuration/General": {
                            "launchers": "",
                            "maxStripes": "1"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "34"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "42"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "93",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "26"
                }
            },
            "height": 2.272727272727273,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 87.27272727272727,
            "minimumLength": 87.27272727272727,
            "offset": 0
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.minimizeall"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "34"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "55",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "36"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "93",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "26"
                }
            },
            "height": 2.1818181818181817,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 87.27272727272727,
            "minimumLength": 86.5,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
