import Color from "./color.js";

/**
 * Named CSS colors implementation
 * @namespace g2d/colors
 * @property {Color} TRANSPARENT            - @+getter <tt>#0000</tt>
 * @property {Color} ALICEBLUE              - @+getter <tt><span style="background: #f0f8ff;"><span style="color: white; mix-blend-mode: difference;">#f0f8ff</span></span></tt>
 * @property {Color} ANTIQUEWHITE           - @+getter <tt><span style="background: #faebd7;"><span style="color: white; mix-blend-mode: difference;">#faebd7</span></span></tt>
 * @property {Color} AQUA                   - @+getter <tt><span style="background: #00ffff;"><span style="color: white; mix-blend-mode: difference;">#00ffff</span></span></tt>
 * @property {Color} AQUAMARINE             - @+getter <tt><span style="background: #7fffd4;"><span style="color: white; mix-blend-mode: difference;">#7fffd4</span></span></tt>
 * @property {Color} AZURE                  - @+getter <tt><span style="background: #f0ffff;"><span style="color: white; mix-blend-mode: difference;">#f0ffff</span></span></tt>
 * @property {Color} BEIGE                  - @+getter <tt><span style="background: #f5f5dc;"><span style="color: white; mix-blend-mode: difference;">#f5f5dc</span></span></tt>
 * @property {Color} BISQUE                 - @+getter <tt><span style="background: #ffe4c4;"><span style="color: white; mix-blend-mode: difference;">#ffe4c4</span></span></tt>
 * @property {Color} BLACK                  - @+getter <tt><span style="background: #000000;"><span style="color: white; mix-blend-mode: difference;">#000000</span></span></tt>
 * @property {Color} BLANCHEDALMOND         - @+getter <tt><span style="background: #ffebcd;"><span style="color: white; mix-blend-mode: difference;">#ffebcd</span></span></tt>
 * @property {Color} BLUE                   - @+getter <tt><span style="background: #0000ff;"><span style="color: white; mix-blend-mode: difference;">#0000ff</span></span></tt>
 * @property {Color} BLUEVIOLET             - @+getter <tt><span style="background: #8a2be2;"><span style="color: white; mix-blend-mode: difference;">#8a2be2</span></span></tt>
 * @property {Color} BROWN                  - @+getter <tt><span style="background: #a52a2a;"><span style="color: white; mix-blend-mode: difference;">#a52a2a</span></span></tt>
 * @property {Color} BURLYWOOD              - @+getter <tt><span style="background: #deb887;"><span style="color: white; mix-blend-mode: difference;">#deb887</span></span></tt>
 * @property {Color} CADETBLUE              - @+getter <tt><span style="background: #5f9ea0;"><span style="color: white; mix-blend-mode: difference;">#5f9ea0</span></span></tt>
 * @property {Color} CHARTREUSE             - @+getter <tt><span style="background: #7fff00;"><span style="color: white; mix-blend-mode: difference;">#7fff00</span></span></tt>
 * @property {Color} CHOCOLATE              - @+getter <tt><span style="background: #d2691e;"><span style="color: white; mix-blend-mode: difference;">#d2691e</span></span></tt>
 * @property {Color} CORAL                  - @+getter <tt><span style="background: #ff7f50;"><span style="color: white; mix-blend-mode: difference;">#ff7f50</span></span></tt>
 * @property {Color} CORNFLOWERBLUE         - @+getter <tt><span style="background: #6495ed;"><span style="color: white; mix-blend-mode: difference;">#6495ed</span></span></tt>
 * @property {Color} CORNSILK               - @+getter <tt><span style="background: #fff8dc;"><span style="color: white; mix-blend-mode: difference;">#fff8dc</span></span></tt>
 * @property {Color} CRIMSON                - @+getter <tt><span style="background: #dc143c;"><span style="color: white; mix-blend-mode: difference;">#dc143c</span></span></tt>
 * @property {Color} CYAN                   - @+getter <tt><span style="background: #00ffff;"><span style="color: white; mix-blend-mode: difference;">#00ffff</span></span></tt>
 * @property {Color} DARKBLUE               - @+getter <tt><span style="background: #00008b;"><span style="color: white; mix-blend-mode: difference;">#00008b</span></span></tt>
 * @property {Color} DARKCYAN               - @+getter <tt><span style="background: #008b8b;"><span style="color: white; mix-blend-mode: difference;">#008b8b</span></span></tt>
 * @property {Color} DARKGOLDENROD          - @+getter <tt><span style="background: #b8860b;"><span style="color: white; mix-blend-mode: difference;">#b8860b</span></span></tt>
 * @property {Color} DARKGRAY               - @+getter <tt><span style="background: #a9a9a9;"><span style="color: white; mix-blend-mode: difference;">#a9a9a9</span></span></tt>
 * @property {Color} DARKGREEN              - @+getter <tt><span style="background: #006400;"><span style="color: white; mix-blend-mode: difference;">#006400</span></span></tt>
 * @property {Color} DARKGREY               - @+getter <tt><span style="background: #a9a9a9;"><span style="color: white; mix-blend-mode: difference;">#a9a9a9</span></span></tt>
 * @property {Color} DARKKHAKI              - @+getter <tt><span style="background: #bdb76b;"><span style="color: white; mix-blend-mode: difference;">#bdb76b</span></span></tt>
 * @property {Color} DARKMAGENTA            - @+getter <tt><span style="background: #8b008b;"><span style="color: white; mix-blend-mode: difference;">#8b008b</span></span></tt>
 * @property {Color} DARKOLIVEGREEN         - @+getter <tt><span style="background: #556b2f;"><span style="color: white; mix-blend-mode: difference;">#556b2f</span></span></tt>
 * @property {Color} DARKORANGE             - @+getter <tt><span style="background: #ff8c00;"><span style="color: white; mix-blend-mode: difference;">#ff8c00</span></span></tt>
 * @property {Color} DARKORCHID             - @+getter <tt><span style="background: #9932cc;"><span style="color: white; mix-blend-mode: difference;">#9932cc</span></span></tt>
 * @property {Color} DARKRED                - @+getter <tt><span style="background: #8b0000;"><span style="color: white; mix-blend-mode: difference;">#8b0000</span></span></tt>
 * @property {Color} DARKSALMON             - @+getter <tt><span style="background: #e9967a;"><span style="color: white; mix-blend-mode: difference;">#e9967a</span></span></tt>
 * @property {Color} DARKSEAGREEN           - @+getter <tt><span style="background: #8fbc8f;"><span style="color: white; mix-blend-mode: difference;">#8fbc8f</span></span></tt>
 * @property {Color} DARKSLATEBLUE          - @+getter <tt><span style="background: #483d8b;"><span style="color: white; mix-blend-mode: difference;">#483d8b</span></span></tt>
 * @property {Color} DARKSLATEGRAY          - @+getter <tt><span style="background: #2f4f4f;"><span style="color: white; mix-blend-mode: difference;">#2f4f4f</span></span></tt>
 * @property {Color} DARKSLATEGREY          - @+getter <tt><span style="background: #2f4f4f;"><span style="color: white; mix-blend-mode: difference;">#2f4f4f</span></span></tt>
 * @property {Color} DARKTURQUOISE          - @+getter <tt><span style="background: #00ced1;"><span style="color: white; mix-blend-mode: difference;">#00ced1</span></span></tt>
 * @property {Color} DARKVIOLET             - @+getter <tt><span style="background: #9400d3;"><span style="color: white; mix-blend-mode: difference;">#9400d3</span></span></tt>
 * @property {Color} DEEPPINK               - @+getter <tt><span style="background: #ff1493;"><span style="color: white; mix-blend-mode: difference;">#ff1493</span></span></tt>
 * @property {Color} DEEPSKYBLUE            - @+getter <tt><span style="background: #00bfff;"><span style="color: white; mix-blend-mode: difference;">#00bfff</span></span></tt>
 * @property {Color} DIMGRAY                - @+getter <tt><span style="background: #696969;"><span style="color: white; mix-blend-mode: difference;">#696969</span></span></tt>
 * @property {Color} DIMGREY                - @+getter <tt><span style="background: #696969;"><span style="color: white; mix-blend-mode: difference;">#696969</span></span></tt>
 * @property {Color} DODGERBLUE             - @+getter <tt><span style="background: #1e90ff;"><span style="color: white; mix-blend-mode: difference;">#1e90ff</span></span></tt>
 * @property {Color} FIREBRICK              - @+getter <tt><span style="background: #b22222;"><span style="color: white; mix-blend-mode: difference;">#b22222</span></span></tt>
 * @property {Color} FLORALWHITE            - @+getter <tt><span style="background: #fffaf0;"><span style="color: white; mix-blend-mode: difference;">#fffaf0</span></span></tt>
 * @property {Color} FORESTGREEN            - @+getter <tt><span style="background: #228b22;"><span style="color: white; mix-blend-mode: difference;">#228b22</span></span></tt>
 * @property {Color} FUCHSIA                - @+getter <tt><span style="background: #ff00ff;"><span style="color: white; mix-blend-mode: difference;">#ff00ff</span></span></tt>
 * @property {Color} GAINSBORO              - @+getter <tt><span style="background: #dcdcdc;"><span style="color: white; mix-blend-mode: difference;">#dcdcdc</span></span></tt>
 * @property {Color} GHOSTWHITE             - @+getter <tt><span style="background: #f8f8ff;"><span style="color: white; mix-blend-mode: difference;">#f8f8ff</span></span></tt>
 * @property {Color} GOLD                   - @+getter <tt><span style="background: #ffd700;"><span style="color: white; mix-blend-mode: difference;">#ffd700</span></span></tt>
 * @property {Color} GOLDENROD              - @+getter <tt><span style="background: #daa520;"><span style="color: white; mix-blend-mode: difference;">#daa520</span></span></tt>
 * @property {Color} GRAY                   - @+getter <tt><span style="background: #808080;"><span style="color: white; mix-blend-mode: difference;">#808080</span></span></tt>
 * @property {Color} GREEN                  - @+getter <tt><span style="background: #008000;"><span style="color: white; mix-blend-mode: difference;">#008000</span></span></tt>
 * @property {Color} GREENYELLOW            - @+getter <tt><span style="background: #adff2f;"><span style="color: white; mix-blend-mode: difference;">#adff2f</span></span></tt>
 * @property {Color} GREY                   - @+getter <tt><span style="background: #808080;"><span style="color: white; mix-blend-mode: difference;">#808080</span></span></tt>
 * @property {Color} HONEYDEW               - @+getter <tt><span style="background: #f0fff0;"><span style="color: white; mix-blend-mode: difference;">#f0fff0</span></span></tt>
 * @property {Color} HOTPINK                - @+getter <tt><span style="background: #ff69b4;"><span style="color: white; mix-blend-mode: difference;">#ff69b4</span></span></tt>
 * @property {Color} INDIANRED              - @+getter <tt><span style="background: #cd5c5c;"><span style="color: white; mix-blend-mode: difference;">#cd5c5c</span></span></tt>
 * @property {Color} INDIGO                 - @+getter <tt><span style="background: #4b0082;"><span style="color: white; mix-blend-mode: difference;">#4b0082</span></span></tt>
 * @property {Color} IVORY                  - @+getter <tt><span style="background: #fffff0;"><span style="color: white; mix-blend-mode: difference;">#fffff0</span></span></tt>
 * @property {Color} KHAKI                  - @+getter <tt><span style="background: #f0e68c;"><span style="color: white; mix-blend-mode: difference;">#f0e68c</span></span></tt>
 * @property {Color} LAVENDER               - @+getter <tt><span style="background: #e6e6fa;"><span style="color: white; mix-blend-mode: difference;">#e6e6fa</span></span></tt>
 * @property {Color} LAVENDERBLUSH          - @+getter <tt><span style="background: #fff0f5;"><span style="color: white; mix-blend-mode: difference;">#fff0f5</span></span></tt>
 * @property {Color} LAWNGREEN              - @+getter <tt><span style="background: #7cfc00;"><span style="color: white; mix-blend-mode: difference;">#7cfc00</span></span></tt>
 * @property {Color} LEMONCHIFFON           - @+getter <tt><span style="background: #fffacd;"><span style="color: white; mix-blend-mode: difference;">#fffacd</span></span></tt>
 * @property {Color} LIGHTBLUE              - @+getter <tt><span style="background: #add8e6;"><span style="color: white; mix-blend-mode: difference;">#add8e6</span></span></tt>
 * @property {Color} LIGHTCORAL             - @+getter <tt><span style="background: #f08080;"><span style="color: white; mix-blend-mode: difference;">#f08080</span></span></tt>
 * @property {Color} LIGHTCYAN              - @+getter <tt><span style="background: #e0ffff;"><span style="color: white; mix-blend-mode: difference;">#e0ffff</span></span></tt>
 * @property {Color} LIGHTGOLDENRODYELLOW   - @+getter <tt><span style="background: #fafad2;"><span style="color: white; mix-blend-mode: difference;">#fafad2</span></span></tt>
 * @property {Color} LIGHTGRAY              - @+getter <tt><span style="background: #d3d3d3;"><span style="color: white; mix-blend-mode: difference;">#d3d3d3</span></span></tt>
 * @property {Color} LIGHTGREEN             - @+getter <tt><span style="background: #90ee90;"><span style="color: white; mix-blend-mode: difference;">#90ee90</span></span></tt>
 * @property {Color} LIGHTGREY              - @+getter <tt><span style="background: #d3d3d3;"><span style="color: white; mix-blend-mode: difference;">#d3d3d3</span></span></tt>
 * @property {Color} LIGHTPINK              - @+getter <tt><span style="background: #ffb6c1;"><span style="color: white; mix-blend-mode: difference;">#ffb6c1</span></span></tt>
 * @property {Color} LIGHTSALMON            - @+getter <tt><span style="background: #ffa07a;"><span style="color: white; mix-blend-mode: difference;">#ffa07a</span></span></tt>
 * @property {Color} LIGHTSEAGREEN          - @+getter <tt><span style="background: #20b2aa;"><span style="color: white; mix-blend-mode: difference;">#20b2aa</span></span></tt>
 * @property {Color} LIGHTSKYBLUE           - @+getter <tt><span style="background: #87cefa;"><span style="color: white; mix-blend-mode: difference;">#87cefa</span></span></tt>
 * @property {Color} LIGHTSLATEGRAY         - @+getter <tt><span style="background: #778899;"><span style="color: white; mix-blend-mode: difference;">#778899</span></span></tt>
 * @property {Color} LIGHTSLATEGREY         - @+getter <tt><span style="background: #778899;"><span style="color: white; mix-blend-mode: difference;">#778899</span></span></tt>
 * @property {Color} LIGHTSTEELBLUE         - @+getter <tt><span style="background: #b0c4de;"><span style="color: white; mix-blend-mode: difference;">#b0c4de</span></span></tt>
 * @property {Color} LIGHTYELLOW            - @+getter <tt><span style="background: #ffffe0;"><span style="color: white; mix-blend-mode: difference;">#ffffe0</span></span></tt>
 * @property {Color} LIME                   - @+getter <tt><span style="background: #00ff00;"><span style="color: white; mix-blend-mode: difference;">#00ff00</span></span></tt>
 * @property {Color} LIMEGREEN              - @+getter <tt><span style="background: #32cd32;"><span style="color: white; mix-blend-mode: difference;">#32cd32</span></span></tt>
 * @property {Color} LINEN                  - @+getter <tt><span style="background: #faf0e6;"><span style="color: white; mix-blend-mode: difference;">#faf0e6</span></span></tt>
 * @property {Color} MAGENTA                - @+getter <tt><span style="background: #ff00ff;"><span style="color: white; mix-blend-mode: difference;">#ff00ff</span></span></tt>
 * @property {Color} MAROON                 - @+getter <tt><span style="background: #800000;"><span style="color: white; mix-blend-mode: difference;">#800000</span></span></tt>
 * @property {Color} MEDIUMAQUAMARINE       - @+getter <tt><span style="background: #66cdaa;"><span style="color: white; mix-blend-mode: difference;">#66cdaa</span></span></tt>
 * @property {Color} MEDIUMBLUE             - @+getter <tt><span style="background: #0000cd;"><span style="color: white; mix-blend-mode: difference;">#0000cd</span></span></tt>
 * @property {Color} MEDIUMORCHID           - @+getter <tt><span style="background: #ba55d3;"><span style="color: white; mix-blend-mode: difference;">#ba55d3</span></span></tt>
 * @property {Color} MEDIUMPURPLE           - @+getter <tt><span style="background: #9370db;"><span style="color: white; mix-blend-mode: difference;">#9370db</span></span></tt>
 * @property {Color} MEDIUMSEAGREEN         - @+getter <tt><span style="background: #3cb371;"><span style="color: white; mix-blend-mode: difference;">#3cb371</span></span></tt>
 * @property {Color} MEDIUMSLATEBLUE        - @+getter <tt><span style="background: #7b68ee;"><span style="color: white; mix-blend-mode: difference;">#7b68ee</span></span></tt>
 * @property {Color} MEDIUMSPRINGGREEN      - @+getter <tt><span style="background: #00fa9a;"><span style="color: white; mix-blend-mode: difference;">#00fa9a</span></span></tt>
 * @property {Color} MEDIUMTURQUOISE        - @+getter <tt><span style="background: #48d1cc;"><span style="color: white; mix-blend-mode: difference;">#48d1cc</span></span></tt>
 * @property {Color} MEDIUMVIOLETRED        - @+getter <tt><span style="background: #c71585;"><span style="color: white; mix-blend-mode: difference;">#c71585</span></span></tt>
 * @property {Color} MIDNIGHTBLUE           - @+getter <tt><span style="background: #191970;"><span style="color: white; mix-blend-mode: difference;">#191970</span></span></tt>
 * @property {Color} MINTCREAM              - @+getter <tt><span style="background: #f5fffa;"><span style="color: white; mix-blend-mode: difference;">#f5fffa</span></span></tt>
 * @property {Color} MISTYROSE              - @+getter <tt><span style="background: #ffe4e1;"><span style="color: white; mix-blend-mode: difference;">#ffe4e1</span></span></tt>
 * @property {Color} MOCCASIN               - @+getter <tt><span style="background: #ffe4b5;"><span style="color: white; mix-blend-mode: difference;">#ffe4b5</span></span></tt>
 * @property {Color} NAVAJOWHITE            - @+getter <tt><span style="background: #ffdead;"><span style="color: white; mix-blend-mode: difference;">#ffdead</span></span></tt>
 * @property {Color} NAVY                   - @+getter <tt><span style="background: #000080;"><span style="color: white; mix-blend-mode: difference;">#000080</span></span></tt>
 * @property {Color} OLDLACE                - @+getter <tt><span style="background: #fdf5e6;"><span style="color: white; mix-blend-mode: difference;">#fdf5e6</span></span></tt>
 * @property {Color} OLIVE                  - @+getter <tt><span style="background: #808000;"><span style="color: white; mix-blend-mode: difference;">#808000</span></span></tt>
 * @property {Color} OLIVEDRAB              - @+getter <tt><span style="background: #6b8e23;"><span style="color: white; mix-blend-mode: difference;">#6b8e23</span></span></tt>
 * @property {Color} ORANGE                 - @+getter <tt><span style="background: #ffa500;"><span style="color: white; mix-blend-mode: difference;">#ffa500</span></span></tt>
 * @property {Color} ORANGERED              - @+getter <tt><span style="background: #ff4500;"><span style="color: white; mix-blend-mode: difference;">#ff4500</span></span></tt>
 * @property {Color} ORCHID                 - @+getter <tt><span style="background: #da70d6;"><span style="color: white; mix-blend-mode: difference;">#da70d6</span></span></tt>
 * @property {Color} PALEGOLDENROD          - @+getter <tt><span style="background: #eee8aa;"><span style="color: white; mix-blend-mode: difference;">#eee8aa</span></span></tt>
 * @property {Color} PALEGREEN              - @+getter <tt><span style="background: #98fb98;"><span style="color: white; mix-blend-mode: difference;">#98fb98</span></span></tt>
 * @property {Color} PALETURQUOISE          - @+getter <tt><span style="background: #afeeee;"><span style="color: white; mix-blend-mode: difference;">#afeeee</span></span></tt>
 * @property {Color} PALEVIOLETRED          - @+getter <tt><span style="background: #db7093;"><span style="color: white; mix-blend-mode: difference;">#db7093</span></span></tt>
 * @property {Color} PAPAYAWHIP             - @+getter <tt><span style="background: #ffefd5;"><span style="color: white; mix-blend-mode: difference;">#ffefd5</span></span></tt>
 * @property {Color} PEACHPUFF              - @+getter <tt><span style="background: #ffdab9;"><span style="color: white; mix-blend-mode: difference;">#ffdab9</span></span></tt>
 * @property {Color} PERU                   - @+getter <tt><span style="background: #cd853f;"><span style="color: white; mix-blend-mode: difference;">#cd853f</span></span></tt>
 * @property {Color} PINK                   - @+getter <tt><span style="background: #ffc0cb;"><span style="color: white; mix-blend-mode: difference;">#ffc0cb</span></span></tt>
 * @property {Color} PLUM                   - @+getter <tt><span style="background: #dda0dd;"><span style="color: white; mix-blend-mode: difference;">#dda0dd</span></span></tt>
 * @property {Color} POWDERBLUE             - @+getter <tt><span style="background: #b0e0e6;"><span style="color: white; mix-blend-mode: difference;">#b0e0e6</span></span></tt>
 * @property {Color} PURPLE                 - @+getter <tt><span style="background: #800080;"><span style="color: white; mix-blend-mode: difference;">#800080</span></span></tt>
 * @property {Color} REBECCAPURPLE          - @+getter <tt><span style="background: #663399;"><span style="color: white; mix-blend-mode: difference;">#663399</span></span></tt>
 * @property {Color} RED                    - @+getter <tt><span style="background: #ff0000;"><span style="color: white; mix-blend-mode: difference;">#ff0000</span></span></tt>
 * @property {Color} ROSYBROWN              - @+getter <tt><span style="background: #bc8f8f;"><span style="color: white; mix-blend-mode: difference;">#bc8f8f</span></span></tt>
 * @property {Color} ROYALBLUE              - @+getter <tt><span style="background: #4169e1;"><span style="color: white; mix-blend-mode: difference;">#4169e1</span></span></tt>
 * @property {Color} SADDLEBROWN            - @+getter <tt><span style="background: #8b4513;"><span style="color: white; mix-blend-mode: difference;">#8b4513</span></span></tt>
 * @property {Color} SALMON                 - @+getter <tt><span style="background: #fa8072;"><span style="color: white; mix-blend-mode: difference;">#fa8072</span></span></tt>
 * @property {Color} SANDYBROWN             - @+getter <tt><span style="background: #f4a460;"><span style="color: white; mix-blend-mode: difference;">#f4a460</span></span></tt>
 * @property {Color} SEAGREEN               - @+getter <tt><span style="background: #2e8b57;"><span style="color: white; mix-blend-mode: difference;">#2e8b57</span></span></tt>
 * @property {Color} SEASHELL               - @+getter <tt><span style="background: #fff5ee;"><span style="color: white; mix-blend-mode: difference;">#fff5ee</span></span></tt>
 * @property {Color} SIENNA                 - @+getter <tt><span style="background: #a0522d;"><span style="color: white; mix-blend-mode: difference;">#a0522d</span></span></tt>
 * @property {Color} SILVER                 - @+getter <tt><span style="background: #c0c0c0;"><span style="color: white; mix-blend-mode: difference;">#c0c0c0</span></span></tt>
 * @property {Color} SKYBLUE                - @+getter <tt><span style="background: #87ceeb;"><span style="color: white; mix-blend-mode: difference;">#87ceeb</span></span></tt>
 * @property {Color} SLATEBLUE              - @+getter <tt><span style="background: #6a5acd;"><span style="color: white; mix-blend-mode: difference;">#6a5acd</span></span></tt>
 * @property {Color} SLATEGRAY              - @+getter <tt><span style="background: #708090;"><span style="color: white; mix-blend-mode: difference;">#708090</span></span></tt>
 * @property {Color} SLATEGREY              - @+getter <tt><span style="background: #708090;"><span style="color: white; mix-blend-mode: difference;">#708090</span></span></tt>
 * @property {Color} SNOW                   - @+getter <tt><span style="background: #fffafa;"><span style="color: white; mix-blend-mode: difference;">#fffafa</span></span></tt>
 * @property {Color} SPRINGGREEN            - @+getter <tt><span style="background: #00ff7f;"><span style="color: white; mix-blend-mode: difference;">#00ff7f</span></span></tt>
 * @property {Color} STEELBLUE              - @+getter <tt><span style="background: #4682b4;"><span style="color: white; mix-blend-mode: difference;">#4682b4</span></span></tt>
 * @property {Color} TAN                    - @+getter <tt><span style="background: #d2b48c;"><span style="color: white; mix-blend-mode: difference;">#d2b48c</span></span></tt>
 * @property {Color} TEAL                   - @+getter <tt><span style="background: #008080;"><span style="color: white; mix-blend-mode: difference;">#008080</span></span></tt>
 * @property {Color} THISTLE                - @+getter <tt><span style="background: #d8bfd8;"><span style="color: white; mix-blend-mode: difference;">#d8bfd8</span></span></tt>
 * @property {Color} TOMATO                 - @+getter <tt><span style="background: #ff6347;"><span style="color: white; mix-blend-mode: difference;">#ff6347</span></span></tt>
 * @property {Color} TURQUOISE              - @+getter <tt><span style="background: #40e0d0;"><span style="color: white; mix-blend-mode: difference;">#40e0d0</span></span></tt>
 * @property {Color} VIOLET                 - @+getter <tt><span style="background: #ee82ee;"><span style="color: white; mix-blend-mode: difference;">#ee82ee</span></span></tt>
 * @property {Color} WHEAT                  - @+getter <tt><span style="background: #f5deb3;"><span style="color: white; mix-blend-mode: difference;">#f5deb3</span></span></tt>
 * @property {Color} WHITE                  - @+getter <tt><span style="background: #ffffff;"><span style="color: white; mix-blend-mode: difference;">#ffffff</span></span></tt>
 * @property {Color} WHITESMOKE             - @+getter <tt><span style="background: #f5f5f5;"><span style="color: white; mix-blend-mode: difference;">#f5f5f5</span></span></tt>
 * @property {Color} YELLOW                 - @+getter <tt><span style="background: #ffff00;"><span style="color: white; mix-blend-mode: difference;">#ffff00</span></span></tt>
 * @property {Color} YELLOWGREEN            - @+getter <tt><span style="background: #9acd32;"><span style="color: white; mix-blend-mode: difference;">#9acd32</span></span></tt>
 */

/**
 * @global
 * @see namespace g2d/colors
 */
const colors = {
    get TRANSPARENT() { return new Color(0, 0, 0, 0) },

    get ALICEBLUE()            { return new Color(240, 248, 255); },
    get ANTIQUEWHITE()         { return new Color(250, 235, 215); },
    get AQUA()                 { return new Color(  0, 255, 255); },
    get AQUAMARINE()           { return new Color(127, 255, 212); },
    get AZURE()                { return new Color(240, 255, 255); },
    get BEIGE()                { return new Color(245, 245, 220); },
    get BISQUE()               { return new Color(255, 228, 196); },
    get BLACK()                { return new Color(  0,   0,   0); },
    get BLANCHEDALMOND()       { return new Color(255, 235, 205); },
    get BLUE()                 { return new Color(  0,   0, 255); },
    get BLUEVIOLET()           { return new Color(138,  43, 226); },
    get BROWN()                { return new Color(165,  42,  42); },
    get BURLYWOOD()            { return new Color(222, 184, 135); },
    get CADETBLUE()            { return new Color( 95, 158, 160); },
    get CHARTREUSE()           { return new Color(127, 255,   0); },
    get CHOCOLATE()            { return new Color(210, 105,  30); },
    get CORAL()                { return new Color(255, 127,  80); },
    get CORNFLOWERBLUE()       { return new Color(100, 149, 237); },
    get CORNSILK()             { return new Color(255, 248, 220); },
    get CRIMSON()              { return new Color(220,  20,  60); },
    get CYAN()                 { return new Color(  0, 255, 255); },
    get DARKBLUE()             { return new Color(  0,   0, 139); },
    get DARKCYAN()             { return new Color(  0, 139, 139); },
    get DARKGOLDENROD()        { return new Color(184, 134,  11); },
    get DARKGRAY()             { return new Color(169, 169, 169); },
    get DARKGREEN()            { return new Color(  0, 100,   0); },
    get DARKGREY()             { return new Color(169, 169, 169); },
    get DARKKHAKI()            { return new Color(189, 183, 107); },
    get DARKMAGENTA()          { return new Color(139,   0, 139); },
    get DARKOLIVEGREEN()       { return new Color( 85, 107,  47); },
    get DARKORANGE()           { return new Color(255, 140,   0); },
    get DARKORCHID()           { return new Color(153,  50, 204); },
    get DARKRED()              { return new Color(139,   0,   0); },
    get DARKSALMON()           { return new Color(233, 150, 122); },
    get DARKSEAGREEN()         { return new Color(143, 188, 143); },
    get DARKSLATEBLUE()        { return new Color( 72,  61, 139); },
    get DARKSLATEGRAY()        { return new Color( 47,  79,  79); },
    get DARKSLATEGREY()        { return new Color( 47,  79,  79); },
    get DARKTURQUOISE()        { return new Color(  0, 206, 209); },
    get DARKVIOLET()           { return new Color(148,   0, 211); },
    get DEEPPINK()             { return new Color(255,  20, 147); },
    get DEEPSKYBLUE()          { return new Color(  0, 191, 255); },
    get DIMGRAY()              { return new Color(105, 105, 105); },
    get DIMGREY()              { return new Color(105, 105, 105); },
    get DODGERBLUE()           { return new Color( 30, 144, 255); },
    get FIREBRICK()            { return new Color(178,  34,  34); },
    get FLORALWHITE()          { return new Color(255, 250, 240); },
    get FORESTGREEN()          { return new Color( 34, 139,  34); },
    get FUCHSIA()              { return new Color(255,   0, 255); },
    get GAINSBORO()            { return new Color(220, 220, 220); },
    get GHOSTWHITE()           { return new Color(248, 248, 255); },
    get GOLD()                 { return new Color(255, 215,   0); },
    get GOLDENROD()            { return new Color(218, 165,  32); },
    get GRAY()                 { return new Color(128, 128, 128); },
    get GREEN()                { return new Color(  0, 128,   0); },
    get GREENYELLOW()          { return new Color(173, 255,  47); },
    get GREY()                 { return new Color(128, 128, 128); },
    get HONEYDEW()             { return new Color(240, 255, 240); },
    get HOTPINK()              { return new Color(255, 105, 180); },
    get INDIANRED()            { return new Color(205,  92,  92); },
    get INDIGO()               { return new Color( 75,   0, 130); },
    get IVORY()                { return new Color(255, 255, 240); },
    get KHAKI()                { return new Color(240, 230, 140); },
    get LAVENDER()             { return new Color(230, 230, 250); },
    get LAVENDERBLUSH()        { return new Color(255, 240, 245); },
    get LAWNGREEN()            { return new Color(124, 252,   0); },
    get LEMONCHIFFON()         { return new Color(255, 250, 205); },
    get LIGHTBLUE()            { return new Color(173, 216, 230); },
    get LIGHTCORAL()           { return new Color(240, 128, 128); },
    get LIGHTCYAN()            { return new Color(224, 255, 255); },
    get LIGHTGOLDENRODYELLOW() { return new Color(250, 250, 210); },
    get LIGHTGRAY()            { return new Color(211, 211, 211); },
    get LIGHTGREEN()           { return new Color(144, 238, 144); },
    get LIGHTGREY()            { return new Color(211, 211, 211); },
    get LIGHTPINK()            { return new Color(255, 182, 193); },
    get LIGHTSALMON()          { return new Color(255, 160, 122); },
    get LIGHTSEAGREEN()        { return new Color( 32, 178, 170); },
    get LIGHTSKYBLUE()         { return new Color(135, 206, 250); },
    get LIGHTSLATEGRAY()       { return new Color(119, 136, 153); },
    get LIGHTSLATEGREY()       { return new Color(119, 136, 153); },
    get LIGHTSTEELBLUE()       { return new Color(176, 196, 222); },
    get LIGHTYELLOW()          { return new Color(255, 255, 224); },
    get LIME()                 { return new Color(  0, 255,   0); },
    get LIMEGREEN()            { return new Color( 50, 205,  50); },
    get LINEN()                { return new Color(250, 240, 230); },
    get MAGENTA()              { return new Color(255,   0, 255); },
    get MAROON()               { return new Color(128,   0,   0); },
    get MEDIUMAQUAMARINE()     { return new Color(102, 205, 170); },
    get MEDIUMBLUE()           { return new Color(  0,   0, 205); },
    get MEDIUMORCHID()         { return new Color(186,  85, 211); },
    get MEDIUMPURPLE()         { return new Color(147, 112, 219); },
    get MEDIUMSEAGREEN()       { return new Color( 60, 179, 113); },
    get MEDIUMSLATEBLUE()      { return new Color(123, 104, 238); },
    get MEDIUMSPRINGGREEN()    { return new Color(  0, 250, 154); },
    get MEDIUMTURQUOISE()      { return new Color( 72, 209, 204); },
    get MEDIUMVIOLETRED()      { return new Color(199,  21, 133); },
    get MIDNIGHTBLUE()         { return new Color( 25,  25, 112); },
    get MINTCREAM()            { return new Color(245, 255, 250); },
    get MISTYROSE()            { return new Color(255, 228, 225); },
    get MOCCASIN()             { return new Color(255, 228, 181); },
    get NAVAJOWHITE()          { return new Color(255, 222, 173); },
    get NAVY()                 { return new Color(  0,   0, 128); },
    get OLDLACE()              { return new Color(253, 245, 230); },
    get OLIVE()                { return new Color(128, 128,   0); },
    get OLIVEDRAB()            { return new Color(107, 142,  35); },
    get ORANGE()               { return new Color(255, 165,   0); },
    get ORANGERED()            { return new Color(255,  69,   0); },
    get ORCHID()               { return new Color(218, 112, 214); },
    get PALEGOLDENROD()        { return new Color(238, 232, 170); },
    get PALEGREEN()            { return new Color(152, 251, 152); },
    get PALETURQUOISE()        { return new Color(175, 238, 238); },
    get PALEVIOLETRED()        { return new Color(219, 112, 147); },
    get PAPAYAWHIP()           { return new Color(255, 239, 213); },
    get PEACHPUFF()            { return new Color(255, 218, 185); },
    get PERU()                 { return new Color(205, 133,  63); },
    get PINK()                 { return new Color(255, 192, 203); },
    get PLUM()                 { return new Color(221, 160, 221); },
    get POWDERBLUE()           { return new Color(176, 224, 230); },
    get PURPLE()               { return new Color(128,   0, 128); },
    get REBECCAPURPLE()        { return new Color(102,  51, 153); },
    get RED()                  { return new Color(255,   0,   0); },
    get ROSYBROWN()            { return new Color(188, 143, 143); },
    get ROYALBLUE()            { return new Color( 65, 105, 225); },
    get SADDLEBROWN()          { return new Color(139,  69,  19); },
    get SALMON()               { return new Color(250, 128, 114); },
    get SANDYBROWN()           { return new Color(244, 164,  96); },
    get SEAGREEN()             { return new Color( 46, 139,  87); },
    get SEASHELL()             { return new Color(255, 245, 238); },
    get SIENNA()               { return new Color(160,  82,  45); },
    get SILVER()               { return new Color(192, 192, 192); },
    get SKYBLUE()              { return new Color(135, 206, 235); },
    get SLATEBLUE()            { return new Color(106,  90, 205); },
    get SLATEGRAY()            { return new Color(112, 128, 144); },
    get SLATEGREY()            { return new Color(112, 128, 144); },
    get SNOW()                 { return new Color(255, 250, 250); },
    get SPRINGGREEN()          { return new Color(  0, 255, 127); },
    get STEELBLUE()            { return new Color( 70, 130, 180); },
    get TAN()                  { return new Color(210, 180, 140); },
    get TEAL()                 { return new Color(  0, 128, 128); },
    get THISTLE()              { return new Color(216, 191, 216); },
    get TOMATO()               { return new Color(255,  99,  71); },
    get TURQUOISE()            { return new Color( 64, 224, 208); },
    get VIOLET()               { return new Color(238, 130, 238); },
    get WHEAT()                { return new Color(245, 222, 179); },
    get WHITE()                { return new Color(255, 255, 255); },
    get WHITESMOKE()           { return new Color(245, 245, 245); },
    get YELLOW()               { return new Color(255, 255,   0); },
    get YELLOWGREEN()          { return new Color(154, 205,  50); },
};

export default colors;
