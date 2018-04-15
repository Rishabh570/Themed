document.addEventListener("DOMContentLoaded", fn, false);

function fn() {
    var natureTheme = {
        "first" : {
            "images": {
            "headerURL": "assets/images/earth-a.png"
        },
        "colors": {
            "textcolor": "white",
            "accentcolor": "black",
            "tab_text": "white",
            "toolbar": "rgba(161, 168, 167, 0.253)",
            "toolbar_text": "whitesmoke",
            "toolbar_field_text": "black",
            "toolbar_field_border": "green",
            "toolbar_top_separator": "green",
            "toolbar_bottom_separator": "green",
            "toolbar_vertical_separator": "green"
            }
        },
    "second" : {
        "images": {
            "headerURL": "assets/images/nature33.jpg"
        },
        "colors": {
            "accentcolor": "rgba(37, 27, 26, 0.466)",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "black",
            "toolbar": "rgba(235, 241, 240, 0.096)",
            "toolbar_top_separator": "rgba(255, 0, 0, 0.534)",
            "toolbar_bottom_separator": "rgba(255, 0, 0, 0.534)",
            "toolbar_vertical_separator": "darkgreen",
            "toolbar_field_border": "rgba(255, 0, 0, 0.534)"
            }
        },
    "third": {
        "images": {
            "headerURL": "assets/images/nature44.jpg"
        },
        "colors": {
            "accentcolor": "rgb(9, 51, 95)",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "black",
            "toolbar": "rgba(235, 241, 241, 0.226)",
            "toolbar_top_separator": "rgba(255, 255, 255, 0.596)",
            "toolbar_bottom_separator": "lightcyan",
            "toolbar_vertical_separator": "lightcyan",
            "toolbar_field_border": "lightcyan",
            "toolbar_field": "rgba(224, 255, 255, 0.534)"
            }
        },
    "fourth" : {
        "images": {
            "headerURL": "assets/images/nature55.jpg"
        },
        "colors": {
            "accentcolor": "rgb(73, 110, 173)",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "#111111",
            "toolbar": "rgba(235, 241, 240, 0.096)",
            "toolbar_top_separator": "lightcyan",
            "toolbar_bottom_separator": "lightcyan",
            "toolbar_vertical_separator": "lightcyan",
            "toolbar_field_border": "lightcyan"
            }
        },
    "fifth" : {
        "images": {
            "headerURL": "assets/images/nature22.jpg"
        },
        "colors": {
            "accentcolor": "#111111",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "black",
            "toolbar": "rgba(61, 189, 240, 0.164)",
            "toolbar_top_separator": "darkgreen",
            "toolbar_bottom_separator": "darkgreen",
            "toolbar_vertical_separator": "rgba(47, 5, 70, 0.479)",
            "toolbar_field_border": "darkgreen"
            }
        }
    };
    //######################## ANIMALS THEMES ##################################
    var animalsThemes = {
        "first" : {
            "images": {
                "headerURL": "assets/images/animal3.jpg"
            },
            "colors": {
                "textcolor": "white",
                "accentcolor": "rgb(62, 90, 110, 0.8)",
                "tab_text": "white",
                "toolbar": "rgba(18, 234, 241, 0.233)",
                "toolbar_text": "white",
                "toolbar_field_border": "darkblue",
                "toolbar_bottom_separator": "darkblue",
                "toolbar_field": "rgba(224, 255, 255, 0.534)",
                "toolbar_field_text": "black",
                "toolbar_vertical_separator": "darkblue",
                "toolbar_top_separator": "darkblue"
            }
        },
        "second" : {
            "images": {
                "headerURL": "assets/images/animal1.jpg"
            },
            "colors": {
                "accentcolor": "rgba(173, 163, 128, 0.336)",
                "tab_text": "whitesmoke",
                "textcolor": "whitesmoke",
                "toolbar_text": "whitesmoke",
                "toolbar_field": "rgba(248, 164, 7, 0.267)",
                "toolbar_field_focus": "rgba(248, 164, 7, 0.267)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "silver",
                "toolbar_vertical_separator": "whitesmoke",
                "toolbar": "rgba(248, 164, 7, 0.24)",
                "toolbar_bottom_separator": "whitesmoke",
                "toolbar_top_separator": "rgba(255, 255, 255, 0.596)"
            }
        },
        "third" : {
            "images": {
                "headerURL": "assets/images/animal2.jpg"
            },
            "colors": {
                "accentcolor": "#111111",
                "textcolor": "white",
                "tab_text": "white",
                "toolbar_text": "white",
                "toolbar_field": "rgba(41, 245, 41, 0.151)",
                "toolbar_field_focus": "rgba(41, 245, 41, 0.151)",
                "toolbar_field_text": "black",
                "toolbar": "rgba(41, 245, 41, 0.151)",
                "toolbar_top_separator": "lightgreen",
                "toolbar_bottom_separator": "lightgreen",
                "toolbar_vertical_separator": "lightgreen",
                "toolbar_field_border": "lightgreen"
            }
        },
        "fourth" : {
            "images": {
                "headerURL": "assets/images/animal4.jpg"
            },
            "colors": {
                "accentcolor": "rgb(241, 245, 249)",
                "tab_text": "#111111",
                "textcolor": "#111111",
                "toolbar_text": "#111111",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_top_separator": "#111111"
            }
        },
        "fifth" : {
            "images": {
                "headerURL": "assets/images/animal5.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "rgb(41, 243, 22)",
                "textcolor": "rgb(41, 243, 22)",
                "toolbar_text": "white",
                "toolbar_field": "rgba(240, 238, 240, 0.568)",
                "toolbar_field_focus": "rgba(240, 238, 240, 0.768)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "rgb(41, 243, 22)",
                "toolbar_vertical_separator": "rgb(41, 243, 22)",
                "toolbar_bottom_separator": "rgb(41, 243, 22)",
                "toolbar_top_separator": "rgb(41, 243, 22)"
            }
        }
    };

    //######################## PLAIN THEMES ##################################
    var plainThemes = {
        "first" : {
            "images": {
                "headerURL": "assets/images/clear1.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "yellow",
                "textcolor": "yellow",
                "toolbar_text": "gold",
                "toolbar": "rgba(24, 67, 255, 0.13)",
                "toolbar_field": "rgba(9, 213, 228, 0.549)",
                "toolbar_field_focus": "rgba(9, 213, 228, 0.549)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_bottom_separator": "gold",
                "toolbar_top_separator": "gold"
            }
        },
        "second" : {
            "images": {
                "headerURL": "assets/images/pattern2.jpg"
            },
            "colors": {
                "toolbar_text": "rgb(161, 228, 248)",
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "rgb(161, 228, 248)",
                "textcolor": "rgb(161, 228, 248)",
                "toolbar": "rgba(228, 108, 9, 0.549)",
                "toolbar_field": "rgba(206, 117, 15, 0.151)",
                "toolbar_field_focus": "rgba(206, 117, 15, 0.151)",
                "toolbar_field_text": "rgb(161, 228, 248)",
                "toolbar_field_border": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_top_separator": "#111111"
            }
        },
        "third" : {
            "images": {
                "headerURL": "assets/images/pattern3.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "#111111",
                "textcolor": "#111111",
                "toolbar_text": "#111111",
                "toolbar": "rgba(195, 228, 9, 0.466)",
                "toolbar_field": "rgba(240, 238, 240, 0.568)",
                "toolbar_field_focus": "rgba(240, 238, 240, 0.768)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "#111111",
                // "toolbar_vertical_separator": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_top_separator": "#111111"
            }
        },
        "fourth" : {
            "images": {
                "headerURL": "assets/images/pattern4.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "#111111",
                "textcolor": "#111111",
                "toolbar_text": "#111111",
                "toolbar": "rgba(142, 200, 255, 0.507)",
                "toolbar_field": "rgba(240, 238, 240, 0.568)",
                "toolbar_field_focus": "rgba(240, 238, 240, 0.768)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "#111111",
                // "toolbar_vertical_separator": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_top_separator": "#111111"
            }
        },
        "fifth" : {
            "images": {
                "headerURL": "assets/images/pattern5.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(230, 37, 11, 0.416)",
                "toolbar_field": "rgba(240, 238, 240, 0.568)",
                "toolbar_field_focus": "rgba(240, 238, 240, 0.768)",
                "toolbar_field_text": "white",
                "toolbar_field_border": "white",
                "toolbar_vertical_separator": "white",
                "toolbar_bottom_separator": "white",
                "toolbar_top_separator": "white"
            }
        }
    };
    //######################## PATTERNS THEMES ##################################
    var patternsThemes = {
        "first" : {
            "images": {
                "headerURL": "assets/images/patterns10.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "black",
                "textcolor": "black",
                "toolbar_text": "black",
                "toolbar": "rgba(230, 37, 11, 0.548)",
                "toolbar_field": "rgba(240, 238, 240, 0.568)",
                "toolbar_field_focus": "rgba(240, 238, 240, 0.768)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_top_separator": "#111111"
            }
        },
        "second" : {
            "images": {
                "headerURL": "assets/images/patterns20.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(3, 29, 51, 0.548)",
                "toolbar_field": "rgba(155, 227, 229, 0.329)",
                "toolbar_field_focus": "rgba(155, 227, 229, 0.329)",
                "toolbar_field_text": "white",
                "toolbar_field_border": "white",
                "toolbar_vertical_separator": "white",
                "toolbar_bottom_separator": "white",
                "toolbar_top_separator": "white"
            }
        },
        "third" : {
            "images": {
                "headerURL": "assets/images/patterns30.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(9, 129, 241, 0.595)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "darkblue",
                "toolbar_vertical_separator": "darkblue",
                "toolbar_bottom_separator": "darkblue",
                "toolbar_top_separator": "darkblue"
            }
        },
        "fourth" : {
            "images": {
                "headerURL": "assets/images/patterns40.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "rgb(11, 3, 83)",
                "textcolor": "rgb(11, 3, 83)",
                "toolbar_text": "rgb(11, 3, 83)",
                "toolbar": "rgba(141, 245, 6, 0.329)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "rgb(11, 3, 83)",
                "toolbar_vertical_separator": "rgb(11, 3, 83)",
                "toolbar_bottom_separator": "rgb(11, 3, 83)",
                "toolbar_top_separator": "rgb(11, 3, 83)"
            }
        },
        "fifth" : {
            "images": {
                "headerURL": "assets/images/patterns50.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "rgb(11, 3, 83)",
                "textcolor": "rgb(11, 3, 83)",
                "toolbar_text": "rgb(11, 3, 83)",
                "toolbar": "rgba(6, 133, 218, 0.288)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "rgb(11, 3, 83)",
                "toolbar_vertical_separator": "rgb(11, 3, 83)",
                "toolbar_bottom_separator": "rgb(11, 3, 83)",
                "toolbar_top_separator": "rgb(11, 3, 83)"
            }
        }
    };
    // ########################### GRAFFITI THEMES ####################################
    var graffitiThemes = {
        "first" : {
            "images": {
                "headerURL": "assets/images/graffiti11.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(255, 255, 255, 0)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "black",
                "toolbar_vertical_separator": "black",
                "toolbar_bottom_separator": "black",
                "toolbar_top_separator": "black"
            }
        },
        "second" : {
            "images": {
                "headerURL": "assets/images/graffiti22.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(6, 133, 218, 0.288)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "rgb(11, 3, 83)",
                "toolbar_vertical_separator": "rgb(11, 3, 83)",
                "toolbar_bottom_separator": "rgb(11, 3, 83)",
                "toolbar_top_separator": "rgb(11, 3, 83)"
            }
        },
        "third" : {
            "images": {
                "headerURL": "assets/images/graffiti34.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(6, 133, 218, 0.288)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "blue",
                "toolbar_vertical_separator": "blue",
                "toolbar_bottom_separator": "blue",
                "toolbar_top_separator": "blue"
            }
        },
        "fourth" : {
            "images": {
                "headerURL": "assets/images/graffiti44.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(6, 133, 218, 0.288)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "white",
                "toolbar_vertical_separator": "white",
                "toolbar_bottom_separator": "white",
                "toolbar_top_separator": "white"
            }
        },
        "fifth" : {
            "images": {
                "headerURL": "assets/images/graffiti55.jpg"
            },
            "colors": {
                "accentcolor": "rgb(3, 3, 3)",
                "tab_text": "white",
                "textcolor": "white",
                "toolbar_text": "white",
                "toolbar": "rgba(6, 133, 218, 0.288)",
                "toolbar_field": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_focus": "rgba(255, 255, 255, 0.753)",
                "toolbar_field_text": "#111111",
                "toolbar_field_border": "rgb(11, 3, 83)",
                "toolbar_vertical_separator": "rgb(11, 3, 83)",
                "toolbar_bottom_separator": "rgb(11, 3, 83)",
                "toolbar_top_separator": "rgb(11, 3, 83)"
            }
        }
    }

    //######################## PRIVATE THEMES ##################################
    var nightThemes = {
        "first" : {
            "images": {
                "headerURL": "assets/images/stars3.jpg"
            },
            "colors": {
                "textcolor": "white",
                "accentcolor": "rgb(69, 79, 137)",
                "tab_text": "white",
                "toolbar": "rgba(5, 9, 39, 0.322)",
                "toolbar_top_separator": "rgba(255, 255, 255, 0.596)",
                "toolbar_vertical_separator": "#111111",
                "toolbar_bottom_separator": "lightcyan",
                "toolbar_field": "lightcyan",
                "toolbar_field_text": "black",
                "toolbar_field_border": "lightcyan",
                // "toolbar_vertical_separator": "#111111",
                "toolbar_text": "white"
                // "toolbar_field_border": "black"
                }
            }
        };
    //######################## PRIVATE THEMES ##################################
    var privateThemes = {
        "first" : {
            "images": {
            "headerURL": "assets/images/private1.jpg"
        },
        "colors": {
            "accentcolor": "rgba(0, 0, 0, 0.671)",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "black",
            "toolbar": "rgba(0, 0, 0, 0.671)",
            "toolbar_top_separator": "darkgreen",
            "toolbar_bottom_separator": "darkgreen",
            "toolbar_vertical_separator": "rgba(47, 5, 70, 0.29)",
            "toolbar_field_border": "darkgreen"
            }
        },
        "second" : {
            "images": {
                "headerURL": "assets/images/private2.jpg"
            },
            "colors": {
                "accentcolor": "rgba(12, 21, 26)",
                "textcolor": "rgba(247, 146, 128, 0.795)",
                "tab_text": "rgba(247, 146, 128, 0.795)",
                "toolbar_text": "rgba(247, 146, 128, 0.795)",
                "toolbar_field_text": "black",
                "toolbar": "rgba(12, 21, 26, 0.400)",
                "toolbar_top_separator": "rgba(119, 177, 11, 0.527)",
                "toolbar_bottom_separator": "rgba(119, 177, 11, 0.527)",
                "toolbar_vertical_separator": "rgba(119, 177, 11, 0.527)",
                "toolbar_field_border": "rgba(119, 177, 11, 0.527)"
            }
        },
    "third" : {
        "images": {
            "headerURL": "assets/images/private3.jpg"
            },
        "colors": {
            "accentcolor": "rgb(3,3,3)",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "black",
            "toolbar": "rgba(0, 0, 0, 0.767)",
            "toolbar_top_separator": "rgba(0, 0, 0, 0.767)",
            "toolbar_bottom_separator": "rgba(0, 0, 0, 0.767)",
            "toolbar_vertical_separator": "rgba(0, 0, 0, 0.767)",
            "toolbar_field_border": "rgba(0, 0, 0, 0.767)"
        }
    },
    "fourth" : {
        "images": {
            "headerURL": "assets/images/private4.jpg"
        },
        "colors": {
            "accentcolor": "rgb(0, 0, 0)",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "black",
            "toolbar": "rgba(0, 0, 0, 0.308)",
            "toolbar_top_separator": "rgba(0, 0, 0, 0.308)",
            "toolbar_bottom_separator": "rgba(0, 0, 0, 0.308)",
            "toolbar_vertical_separator": "rgba(0, 0, 0, 0.308)",
            "toolbar_field_border": "rgba(0, 0, 0, 0.308)"
        }
    },
    "fifth" : {
        "images": {
            "headerURL": "assets/images/private5.jpg"
        },
        "colors": {
            "accentcolor": "rgb(0, 0, 0)",
            "textcolor": "white",
            "tab_text": "white",
            "toolbar_text": "white",
            "toolbar_field_text": "black",
            "toolbar": "rgba(0, 0, 0, 0.685)",
            "toolbar_top_separator": "rgba(0, 0, 0, 0.685)",
            "toolbar_bottom_separator": "rgba(0, 0, 0, 0.685)",
            "toolbar_vertical_separator": "rgba(0, 0, 0, 0.685)",
            "toolbar_field_border": "rgba(0, 0, 0, 0.685)"
            }
        }
    };
    //######################## WEATHER THEMES ##################################
    var weatherThemes = {
        "clear" : {
            "images": {
                "headerURL": "assets/images/clear1.jpg"
            },
            "colors": {
                "accentcolor": "lightblue",
                "textcolor": "#111111",
                "tab_text": "#111111",
                "toolbar_text": "#111111",
                "toolbar_field_text": "#111111",
                "toolbar_top_separator": "green",
                "toolbar_bottom_separator": "green",
                "toolbar_vertical_separator": "green",
                "toolbar_field_border": "green"
                }
            },
        "clouds" : {
            "images": {
                "headerURL": "assets/images/clouds1.jpg"
            },
            "colors": {
                "accentcolor": "lightblue",
                "textcolor": "#111111",
                "tab_text": "#111111",
                "toolbar_text": "#111111",
                "toolbar_field_text": "#111111",
                "toolbar_top_separator": "blue",
                "toolbar_bottom_separator": "blue",
                "toolbar_vertical_separator": "blue",
                "toolbar_field_border": "blue"
            }
        },
        "rain" : {
            "images": {
                "headerURL": "assets/images/rain.jpg"
            },
            "colors": {
                "accentcolor": "blue",
                "textcolor": "white",
                "tab_text": "white",
                "toolbar_text": "white",
                "toolbar_field_text": "#111111",
                "toolbar_top_separator": "blue",
                "toolbar_bottom_separator": "blue",
                "toolbar_vertical_separator": "blue",
                "toolbar_field_border": "blue"
                }
            },
        "smoke" : {
            "images": {
                "headerURL": "assets/images/smoke.jpg"
            },
            "colors": {
                "accentcolor": "lightblue",
                "textcolor": "white",
                "tab_text": "white",
                "toolbar_text": "white",
                "toolbar_field_text": "#111111",
                "toolbar": "rgba(109, 141, 243, 0.26)",
                "toolbar_top_separator": "whitesmoke",
                "toolbar_bottom_separator": "whitesmoke",
                "toolbar_vertical_separator": "whitesmoke",
                "toolbar_field_border": "whitesmoke"
                }
            },
        "haze" : {
            "images": {
                "headerURL": "assets/images/haze.jpg"
            },
            "colors": {
                "accentcolor": "lightblue",
                "textcolor": "#111111",
                "tab_text": "#111111",
                "toolbar_text": "#111111",
                "toolbar_field_text": "#111111",
                "toolbar_top_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_field_border": "#111111"
                }
            },
        "mist" : {
            "images": {
                "headerURL": "assets/images/mist.jpg"
            },
            "colors": {
                "accentcolor": "lightblue",
                "textcolor": "#111111",
                "tab_text": "#111111",
                "toolbar_text": "#111111",
                "toolbar_field_text": "#111111",
                "toolbar": "rgba(120, 153, 223, 0.041)",
                "toolbar_top_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_field_border": "#111111"
                }
            },
        "drizzle" : {
            "images": {
                "headerURL": "assets/images/drizzle.jpg"
            },
            "colors": {
                "accentcolor": "lightblue",
                "textcolor": "white",
                "tab_text": "white",
                "toolbar_text": "white",
                "toolbar_field_text": "black",
                "toolbar": "rgba(7, 226, 255, 0.514)",
                "toolbar_top_separator": "whitesmoke",
                "toolbar_bottom_separator": "whitesmoke",
                "toolbar_vertical_separator": "whitesmoke",
                "toolbar_field_border": "whitesmoke"
            }
        },
        "snow" : {
            "images": {
                "headerURL": "assets/images/snow.jpg"
            },
            "colors": {
                "accentcolor": "aqua",
                "textcolor": "black",
                "tab_text": "black",
                "toolbar_text": "black",
                "toolbar_field_text": "#111111",
                "toolbar": "rgba(255, 255, 255, 0.755)",
                "toolbar_top_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_field_border": "#111111"
            }
        },
        "thunderstorm" : {
            "images": {
                "headerURL": "assets/images/thunderstorm.jpg"
            },
            "colors": {
                "accentcolor": "rgb(73, 72, 115)",
                "textcolor": "white",
                "tab_text": "white",
                "toolbar_text": "white",
                "toolbar_field_text": "#111111",
                "toolbar": "rgba(25, 10, 231, 0.042)",
                "toolbar_top_separator": "#111111",
                "toolbar_bottom_separator": "#111111",
                "toolbar_vertical_separator": "#111111",
                "toolbar_field_border": "#111111"
            }
        }
    };
    //########################### THEME TO SHOW IN HEADER OF TAB TO MATCH THE QUOTE THEME IMAGE ##################
    var quoteComplementaryTheme = {
        "images": {
            "headerURL": "assets/images/haze.jpg"
        },
        "colors": {
            "accentcolor": "lightblue",
            "textcolor": "#111111",
            "tab_text": "#111111",
            "toolbar_text": "#111111",
            "toolbar_field_text": "#111111",
            "toolbar": "rgba(247, 156, 247, 0.288)",
            "toolbar_top_separator": "#111111",
            "toolbar_bottom_separator": "#111111",
            "toolbar_vertical_separator": "#111111",
            "toolbar_field_border": "#111111"
        }
    };

    // GLOBAL VARIABLES
    var flag_private = false;
    var flag_dan = false;
    var flag_weather = false;
    var flag_quotes = "blank";
    var flag_custom = false;
    var theme_choice_global;
    var private_theme_is_active = false;
    var incognito_tabs_list = [];

    var customThemeConfirm;
    var global_custom_settings;
    var weather_keys = [];
    var current_quote;

    //################# THEME TRANSITION LOGIC ########################

    function startThemeTransition() {
        console.log("inside startThemeTransition()");

        if(flag_weather || flag_quotes != "blank" || flag_private || flag_dan || flag_custom) {
            return;
        }else {
            currentTheme = theme_choice_global;
        }
        var tickets = ["first", "second", "third", "fourth", "fifth"];
        var ticket = Math.floor(Math.random()*5);
        var key = tickets[ticket];
        var themeIs;
        if (currentTheme === "natural") {
            themeIs = natureTheme;
        }else if(currentTheme === "animals") {
            themeIs = animalsThemes;
        }else if(currentTheme === "plain") {
            themeIs = plainThemes;
        }else if (currentTheme === "patterns") {
            themeIs = patternsThemes;
        }else if(currentTheme === "graffiti") {
            themeIs = graffitiThemes;
        }
        var newTheme = themeIs[key];
        browser.theme.update(newTheme);
    }

    // Transitions to next theme
    function nextTheme() {
        var tickets = ["first", "second", "third", "fourth", "fifth"];
        var ticket = Math.floor(Math.random()*5);
        var key = tickets[ticket];
        var themeIs;
        if (theme_choice_global === "natural") {
            themeIs = natureTheme;
        }else if(theme_choice_global === "animals") {
            themeIs = animalsThemes;
        }else if(theme_choice_global === "plain") {
            themeIs = plainThemes;
        }else if (theme_choice_global === "patterns") {
            themeIs = patternsThemes;
        }else if(theme_choice_global === "graffiti") {
            themeIs = graffitiThemes;
        }
        var newTheme = themeIs[key];
        browser.theme.update(newTheme);
    }


    // CUSTOM THEME SET OPERATION (1ST PRIORITY) ######################################################
    function connected(p) {
        customThemeConfirm = p;
        customThemeConfirm.onMessage.addListener(function(m) {
            if(m.signal == "on") {
                flag_custom = true;
            }else if(m.signal == "off") {
                flag_custom = false;
            }
        });
    }

    // ################# Cleans extracted quote to remove \n, \r, \t to prevent getting unterminated string error #####

    function makeQuoteClean(quote) {
        while (quote.includes("\\n")) {
            quote = quote.replace("\\n", "");
        }
        while (quote.includes("\\r")) {
            quote = quote.replace("\\r", "");
        }
        while (quote.includes("\\t")) {
            quote = quote.replace("\\t", "");	
        }
        return quote;
    }

    //####################################################################################
    function QuotesListener(tabId, info, tab) {
        if (info.status === "complete") {
            var tabUrl = tab.url;

            // We specifically insert quotes to google.co.in page only
            if (tabUrl && tabUrl.indexOf("https://www.google.co.in/") == 0 && tabUrl.length == 25) {

                if(flag_quotes === "inspire") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/inspire.css"
                    });
                }else if(flag_quotes === "management") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/management.css"
                    });
                }else if(flag_quotes === "sports") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/sports.css"
                    });
                }else if(flag_quotes === "life") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/life.css"
                    });
                }else if(flag_quotes === "funny") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/funny.css"
                    });
                }else if(flag_quotes === "love") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/love.css"
                    });
                }else if(flag_quotes === "art") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/art.css"
                    });
                }else if(flag_quotes === "students") {
                    browser.tabs.insertCSS(tabId, {
                        file: "assets/css/students.css"
                    });
                }

                var jsExp = [`var tar = document.getElementById("quote-content"); if(tar!==null) { console.log("DIV EXISTS ALREADY"); tar.innerHTML = "${current_quote}"; }else if(tar===null) { console.log("CREATING DIV"); var d = document.createElement("div"); d.setAttribute("id", "quote-content"); d.innerHTML = "${current_quote}"; document.body.appendChild(d);};`];
                browser.tabs.executeScript(tabId, {
                    code: jsExp[0]
                })

                browser.tabs.insertCSS(tabId, {
                    file: "assets/css/quotesStyle.css"
                });
            }
        }
    }

    //################# RENDERS QUOTES THEME TO GOOGLE HOME PAGE ########################

    function renderQuotesThemes (quote) {

        // Updates theme for tab header part only
        browser.theme.update(quoteComplementaryTheme);

        // add removeListener for this event, later
        browser.tabs.onUpdated.addListener(QuotesListener);
    }

    //################# SELECTS THEME FROM WEATHER CATEGORY ########################

    function chooseFromWeatherThemes(theme) {
        theme = theme.toLowerCase();

        if (theme.includes("clear")) {
            browser.theme.update(weatherThemes.clear);
        }else if(theme.includes("clouds")) {
            browser.theme.update(weatherThemes.clouds);
        }else if(theme.includes("rain")) {
            browser.theme.update(weatherThemes.rain);
        }else if(theme.includes("smoke")) {
            browser.theme.update(weatherThemes.smoke);
        }else if(theme.includes("haze")) {
            browser.theme.update(weatherThemes.haze);
        }else if(theme.includes("mist")) {
            browser.theme.update(weatherThemes.mist);
        }else if(theme.includes("drizzle")) {
            browser.theme.update(weatherThemes.drizzle);
        }else if(theme.includes("snow")) {
            browser.theme.update(weatherThemes.snow);
        }else if(theme.includes("thunderstorm")) {
            browser.theme.update(weatherThemesthunderstorm);
        }
    }


    //################# SELECTS THEME FROM NORMAL CATEGORY ########################

    function chooseFromNormal(theme) {
        if (theme === "natural") {
            renderNaturalTheme();
        }else if(theme === "plain") {
            renderPlainTheme();
        }else if(theme === "patterns") {
            renderPatternsTheme();
        }else if(theme === "graffiti") {
            renderGraffitiTheme();
        }else if(theme === "animals") {
            renderAnimalsTheme();
        }
    }

    //####################### RENDER NIGHT MODE ########################################

    function renderNightMode(tabId, removeInfo) {
        browser.tabs.insertCSS(tabId, {
            file: "assets/css/nightmode.css"
        });
    }

    function revertNightMode() {
        browser.tabs.insertCSS({
            file: "assets/css/revertNightMode.css"
        });
    }

    //#################### DAY & NIGHT LOGIC ###############################
    function executeDanTheme() {
        var date = new Date();
        var hours = date.getHours();

        if(!flag_weather && !private_theme_is_active && flag_quotes == "blank" && !flag_custom) {   // THIS FUNCTION IS ALLOWED TO EXECUTE ONLY IF WEATHER MODE IS OFF
            if (flag_dan) {
                if ((hours >= 8) && (hours < 9)) {
                    chooseFromNormal(theme_choice_global);  // Selects the chosen one from CATEGORIES
                } else {
                    browser.theme.update(nightThemes.first);
                    browser.tabs.onUpdated.addListener(renderNightMode);
                }
            }else {
                chooseFromNormal(theme_choice_global);
            }
        }else if (private_theme_is_active) {
            return;
        }else if (flag_weather) {
            return;
        }else if (flag_quotes != "blank") {
            return;
        }else if (flag_custom) {
            return;
        }
    }

    //###################### THEME RENDERINGs #################################
    function executeCustomTheme(themeArray) {
        if(flag_custom) {

            const theme = {
                "images": {
                    "headerURL": "assets/images/clear1.jpg"
                },
                "colors": {
                    "accentcolor": `${themeArray[0]}`,
                    "textcolor": `${themeArray[2]}`,
                    "tab_text": `${themeArray[1]}`,
                    "toolbar_text": `${themeArray[4]}`,
                    "toolbar_field_text": "#111111",
                    "toolbar": `${themeArray[3]}`,
                    "toolbar_top_separator": "#111111",
                    "toolbar_bottom_separator": "#111111",
                    "toolbar_vertical_separator": "#111111",
                    "toolbar_field_border": "#111111"
                }
            };
            browser.theme.update(theme);
            return;
        }else {
            return;
        }
    }


    function executeWeatherTheme() {
        if (flag_weather) {

            if (!navigator.geolocation) {
                return;
            }

            // success function
            function success(position) {
                var latitude  = position.coords.latitude;
                var longitude = position.coords.longitude;
                var default_key = "bd5e378503939ddaee76f12ad7a97608";
                var url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${default_key}&units=metric`;

                fetch(url, {method: "get"})
                .then( function (response) {
                    if (response.ok) {
                        return response.json();
                    }
                    else {
                        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${weather_keys[0]}&units=metric`, {method: "get"})
                        .then(function (response) {
                            if(response.ok) {
                                return response.json();
                            }else {
                                fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${weather_keys[1]}&units=metric`, {method: "get"})
                                .then(function(response) {
                                    if(response.ok) {
                                        return response.json();
                                    }
                                }).then(function(json) {
                                    var weather_res = json.weather[0].main;
                                    chooseFromWeatherThemes(weather_res);
                                    return;
                                });
                            }
                        }).then(function(json) {
                            var weather_res = json.weather[0].main;
                            chooseFromWeatherThemes(weather_res);
                            return;
                        });
                    }
                }).then(function(json) {
                    var weather_res = json.weather[0].main;
                    chooseFromWeatherThemes(weather_res);
                    return;
                });
            } // success function ends

            // error function
            function error(error) {
                console.log(`some error occured, ${error.code}: ${error.message}`);
            }

            navigator.geolocation.getCurrentPosition(success, error);

        }
    }

    function executeQuotesTheme() {
        if (flag_quotes != "blank") {

            var url = `https://quotes.rest/qod?category=${flag_quotes}`;
            var myHeaders = new Headers({"Accept": "application/json"});
            var myInit = {
                method: "get",
                headers: myHeaders
            };

            fetch(url, myInit)
            .then( function (response) {
                if (response.ok) {
                    return response.json();
                }
                else {
                    var error_message = "Some Error Occured while requesting theysaidso.com :(\n It seems you've hit rate limit of 10 per hour.";
                    return console.log(error_message);
                }
            }).then(function(json, status) {
                var quote_res = json.contents.quotes[0].quote;
                var clean_quote = makeQuoteClean(quote_res);
                current_quote = clean_quote;
                renderQuotesThemes(clean_quote);
            });
        }
    }

    function renderNaturalTheme() {
        var newTheme = natureTheme.first;
        browser.theme.update(newTheme);
    }

    function renderAnimalsTheme() {
        var newTheme = animalsThemes.fifth;
        browser.theme.update(newTheme);
    }

    function renderPlainTheme() {
        var newTheme = plainThemes.first;
        browser.theme.update(newTheme);
    }

    function renderPatternsTheme() {
        var newTheme = patternsThemes.fifth;
        browser.theme.update(newTheme);
    }

    function renderGraffitiTheme() {
        var newTheme = graffitiThemes.first;
        browser.theme.update(newTheme);
    }

    function executePrivateTheme() {
        var incognitoTabs = 0;

        if (!flag_weather && !flag_custom &&  flag_quotes == "blank") {    // THIS FUNCTION IS ALLOWED TO EXECUTE ONLY IF WEATHER MODE IS OFF
            if (flag_private) {
                browser.tabs.query({}).then((allTabs) => {
                    for (var tab of allTabs) {
                        if (tab.incognito) {
                            incognitoTabs += 1;
                            if (!incognito_tabs_list.includes(tab.id)) {
                                incognito_tabs_list.push(tab.id);
                            }
                        }
                    }

                    if (incognitoTabs > 0) {
                        var tickets = ["first", "second", "third", "fourth", "fifth"]
                        var ticket = Math.floor(Math.random()*5)
                        var key = tickets[ticket];
                        var newTheme = privateThemes[key];
                        browser.theme.update(newTheme);
                        private_theme_is_active = true;
                        return;
                    }
                })
            }
            executeDanTheme();  // If incognitos aren't open, DaN theme logic will run.
                                // If flag_dan is FALSE, normal themes will be rendered.

        }else if(private_theme_is_active) {
            return;
        }else if(flag_weather) {
            return;
        }else if(flag_quotes != "blank") {
            return;
        }else if(flag_custom) {
            return;
        }
    }

    function executeOnIncognitoRemove(tabId, removeInfo) {
        var incognitoTabs = 0, incognitoTabsLeft;

        if(!flag_weather && !flag_custom && flag_quotes == "blank") {
            if (flag_private) {
                if (incognito_tabs_list.includes(tabId)) {
                    var index = incognito_tabs_list.indexOf(tabId);
                    incognito_tabs_list.splice(index, 1);
                    if ( (incognito_tabs_list.length) > 0) {
                        return;
                    }else {
                        private_theme_is_active = false;
                        executeDanTheme();
                    }
                }
            }else {
                return;
            }
        }else if(private_theme_is_active) {
            return;
        }else if(flag_weather) {
            return;
        }else if(flag_quotes != "blank") {
            return;
        }else if(flag_custom) {
            return;
        }
    }

    // This function gets triggered whenever storage changes #####################
    function handleStorageChange(changes, area) {
        var theme_choice = changes["category"].newValue;
        var check_private = changes["private"].newValue;
        var check_dan = changes["dan"].newValue;
        var check_weather = changes["weather"].newValue;
        var check_quotes = changes["quote_type"].newValue;
        var check_interval = changes["interval"].newValue;
        var check_setting = changes["setting"].newValue;
        var check_keys = changes["extra_keys"].newValue;

        if(flag_custom === true) {
            // It's a fix that ensures DaN doesn't render ######################
            // is ON night theme when Custom mode ##############################
            revertNightMode();
            browser.tabs.onUpdated.removeListener(renderNightMode);
            // ##################################################################
            executeCustomTheme(check_setting);
            return;
        }

        // Theme_choice is stored in a global variable so that it can be accessed by other functions in this script
        theme_choice_global = theme_choice;

        // Stores extra weather keys provided by user to global variable
        weather_keys = [check_keys[0], check_keys[1]];

        // If weather theme is enabled then it will get rendered (2ND PRIORITY)
        if(check_weather && !flag_custom) {
            flag_weather = true;
            // It's a fix that ensures DaN doesn't render ######################
            // is ON night theme when Weather mode #############################
            revertNightMode();
            browser.tabs.onUpdated.removeListener(renderNightMode);
            // ##################################################################

            browser.alarms.onAlarm.addListener(executeWeatherTheme);
            browser.alarms.create("executeWeatherTheme", {periodInMinutes: 15});
            executeWeatherTheme();
            return;
        }else if(!check_weather) {
            flag_weather = false;
            browser.alarms.clear("executeWeatherTheme").then(() => {
                console.log("Weather alarm is turned OFF\n");
            })
        }

        // QUOTES THEME LOGIC (3RD PRIORITY)
        if(check_quotes != "blank" && !flag_custom) {
            flag_quotes = check_quotes;
            // It's a fix that ensures DaN doesn't render ###########################
            // night theme when Quotes mode is ON ###################################
            revertNightMode();
            browser.tabs.onUpdated.removeListener(renderNightMode);
            //########################################################################
            browser.alarms.onAlarm.addListener(executeQuotesTheme);
            browser.alarms.create("executeQuotesTheme", {periodInMinutes: 59});
            executeQuotesTheme();
            return;
        }else if (check_weather || check_quotes === "blank") {
            flag_quotes = "blank";
            browser.tabs.onUpdated.removeListener(QuotesListener);
            browser.alarms.clear("executeQuotesTheme").then(() => {
                console.log("Quotes alarm turned OFF!\n");
            })
        }

        // Adds alarms for DaN theme if given condition satisfies
        if (check_dan && !flag_custom) {
            flag_dan = true;
            console.log("alarms initiated.");
            browser.alarms.onAlarm.addListener(executeDanTheme);
            browser.alarms.create("executeDanTheme", {periodInMinutes: 5});
        }else if (check_weather || check_quotes || !check_dan || flag_custom) {
            flag_dan = false;
            revertNightMode();
            browser.tabs.onUpdated.removeListener(renderNightMode);
            browser.alarms.clear("executeDanTheme").then(() => {
                console.log("Dan alarm is turned OFF!\n");
            })
        }

        // Adds listeners for private theme if given condition satisfies
        if(check_private && !flag_custom) {
            flag_private = true;
            browser.tabs.onCreated.addListener(executePrivateTheme);
            browser.tabs.onRemoved.addListener(executeOnIncognitoRemove);
        }else if (check_weather || check_quotes || !check_private || flag_custom) {
            flag_private = false;
            browser.tabs.onCreated.removeListener(executePrivateTheme);
            browser.tabs.onUpdated.removeListener(executeOnIncognitoRemove);
        }

        // Changes status of active private theme if user unchecks it while it was running
        if (!check_private) {
            private_theme_is_active = false;
        }

        // TRANSITION LOGIC (weather, quotes and custom modes aren't checked because if any
        // one of them were true, then function would "return;" before coming here)
        if(check_interval != "infinite" && !flag_dan && !flag_private) {
            browser.alarms.onAlarm.addListener(startThemeTransition);
            browser.alarms.create("startThemeTransition", {periodInMinutes: check_interval});
            startThemeTransition();
        }else if(flag_dan && flag_private && check_interval === "infinite") {
            browser.alarms.clear("startThemeTransition").then(() => {
                console.log("theme transition alarm is turned OFF\n");
            })
        }

        if (check_private && !check_dan && !flag_custom) {
            flag_dan = false;
            flag_private = true;
            executePrivateTheme();
        }else if(check_private && check_dan && !flag_custom) {
            flag_dan = true;
            flag_private = true;
            executePrivateTheme();
        }else if(check_dan && !check_private && !flag_custom) {
            flag_dan = true;
            flag_private = false;
            executeDanTheme();
        }else if(!check_dan && !check_private && !flag_custom) {
            flag_dan = false;
            flag_private = false;
            chooseFromNormal(theme_choice_global);  // Selects the chosen one from CATEGORIES
        }
    }

    //#################### OPENS OPTIONS PAGE ###############################

    function handleClick() {
        browser.runtime.openOptionsPage();
    }

    //############# STORES INITIAL VALUES IN STORAGE (JUST TO OUTPUT A DEFAULT THEME FOR First/Initial RUN)###############
    browser.storage.local.set(
        {
            "category": "natural",
            "private": false,
            "dan": false,
            "weather": false,
            "quote_type": "blank",
            "interval": "infinite",
            "setting": [""],
            "extra_keys": ["", ""]
        }
    );

    //###################### EVENT LISTENERS #################################

    // Triggers at the very start to give global variable
    // appropriate values
    browser.storage.local.get().then((storedConfig) => {
        console.log("Inside storage.local.get()... IT ran before storage.onUpdated!!!");
        flag_private = storedConfig.private;
        flag_dan = storedConfig.dan;
        flag_weather = storedConfig.weather;
        flag_quotes = storedConfig.quote_type;

        // Theme_choice is stored in a global variable so that it can be accessed other functions in this script
        theme_choice_global = storedConfig.category;

        executePrivateTheme();  // It is called because it's the main function which then diverges to executeDanTheme()
                                // which then diverges to chooseFromNormal() based on conditions.
    })

    // Listen for commands
    browser.commands.onCommand.addListener(function(command) {
        if (command === "next-theme" && !flag_dan && !flag_private && !flag_weather && flag_quotes==="blank" && flag_custom===false) {
            nextTheme();
        }
      });

    // Triggers when storage is changed
    browser.storage.onChanged.addListener(handleStorageChange);

    // Triggers when someone clicks the browser action
    browser.browserAction.onClicked.addListener(handleClick);

    // Adds listener to connect event
    browser.runtime.onConnect.addListener(connected);
}

