// ----------------------------------------
//   Declaring Unit Converting Constants 
// ----------------------------------------
const convertionTerms = {
    length: {
        meter: {
            meter: 1,
            kilometer: 0.001,
            centimeter: 100,
            millimeter: 1000,
            micrometer: 1e6,
            nanometer: 1e9,
            mile: 0.000621371,
            yard: 1.09361,
            foot: 3.28084,
            inch: 39.3701,
            'light-year': 1.057e-16
        },
        kilometer: {
            meter: 1000,
            kilometer: 1,
            centimeter: 100000,
            millimeter: 1e6,
            micrometer: 1e9,
            nanometer: 1e12,
            mile: 0.621371,
            yard: 1093.61,
            foot: 3280.84,
            inch: 39370.1,
            'light-year': 1.057e-13
        },
        centimeter: {
            meter: 0.01,
            kilometer: 0.00001,
            centimeter: 1,
            millimeter: 10,
            micrometer: 1e4,
            nanometer: 1e7,
            mile: 6.2137e-6,
            yard: 0.0109361,
            foot: 0.0328084,
            inch: 0.393701,
            'light-year': 1.057e-18
        },
        millimeter: {
            meter: 0.001,
            kilometer: 0.000001,
            centimeter: 0.1,
            millimeter: 1,
            micrometer: 1000,
            nanometer: 1e6,
            mile: 6.2137e-7,
            yard: 0.00109361,
            foot: 0.00328084,
            inch: 0.0393701,
            'light-year': 1.057e-19
        },
        micrometer: {
            meter: 0.000001,
            kilometer: 9.9999e-10,
            centimeter: 0.0001,
            millimeter: 0.001,
            micrometer: 1,
            nanometer: 1000,
            mile: 6.2136e-10,
            yard: 0.00000109,
            foot: 0.00000328,
            inch: 0.00003937,
            'light-year': 1.057e-22
        },
        nanometer: {
            meter: 1.e-9,
            kilometer: 1.e-12,
            centimeter: 1.e-7,
            millimeter: 0.000001,
            micrometer: 0.001,
            nanometer: 1,
            mile: 6.2136e-13,
            yard: 1.0936e-9,
            foot: 3.2808e-9,
            inch: 3.9370e-8,
            'light-year': 1.0570e-25
        },
        mile: {
            meter: 1609.35,
            kilometer: 1.60935,
            centimeter: 160935,
            millimeter: 1609350,
            micrometer: 1609350000,
            nanometer: 160935e+7,
            mile: 1,
            yard: 1760.0065617,
            foot: 5280.019685,
            inch: 63360.23622,
            'light-year': 1.7010e-13
        },
        yard: {
            meter: 0.9144,
            kilometer: 0.0009144,
            centimeter: 91.44,
            millimeter: 914.4,
            micrometer: 914400,
            nanometer: 9144e+5,
            mile: 0.0005681797,
            yard: 1,
            foot: 3,
            inch: 36,
            'light-year': 9.6652e-17
        },
        foot: {
            meter: 0.3048,
            kilometer: 0.0003048,
            centimeter: 30.48,
            millimeter: 304.8,
            micrometer: 304800,
            nanometer: 3048e5,
            mile: 0.0001893932,
            yard: 0.33333,
            foot: 1,
            inch: 12,
            'light-year': 3.2217e-17
        },
        inch: {
            meter: 0.0254,
            kilometer: 0.0000254,
            centimeter: 2.54,
            millimeter: 25.4,
            micrometer: 25400,
            nanometer: 2540e+4,
            mile: 0.0000157828,
            yard: 0.0277777778,
            foot: 0.0833333333,
            inch: 1,
            'light-year': 2.6848e-18
        },
        'light-year': {
            meter: 9460660e9,
            kilometer: 9460660e6,
            centimeter: 9460660e+11,
            millimeter: 9460660e+12,
            micrometer: 9.46066e+21,
            nanometer: 9.4606e+24,
            mile: 5878559666946,
            yard: 10346303587051618,
            foot: 31038910761154856,
            inch: 372466929133858300,
            'light-year': 1
        }
    },
    area : {
        'square-meter': {
            'square-meter': 1,
            'square-kilometer': 1e-6,
            'square-centimeter': 1e4,
            'square-millimeter': 1e6,
            'square-micrometer': 1e12,
            hectare: 0.0001,
            'square-mile': 3.861e-7,
            'square-yard': 1.196,
            'square-foot': 10.764,
            'square-inch': 1550,
            acre: 0.0002471054
        },
        'square-kilometer': {
            'square-meter': 1e6,
            'square-kilometer': 1,
            'square-centimeter': 1e10,
            'square-millimeter': 1e12,
            'square-micrometer': 1e18,
            hectare: 100,
            'square-mile': 0.386102,
            'square-yard': 1.196e6,
            'square-foot': 1.076e7,
            'square-inch': 1.55e9,
            acre: 247.105
        },
        'square-centimeter': {
            'square-meter': 1e-4,
            'square-kilometer': 1e-10,
            'square-centimeter': 1,
            'square-millimeter': 100,
            'square-micrometer': 1e8,
            hectare: 1e-8,
            'square-mile': 3.861e-11,
            'square-yard': 0.000119599,
            'square-foot': 0.00107639,
            'square-inch': 0.155,
            acre: 2.4711e-8
        },
        'square-millimeter': {
            'square-meter': 1e-6,
            'square-kilometer': 1e-12,
            'square-centimeter': 0.01,
            'square-millimeter': 1,
            'square-micrometer': 1e6,
            hectare: 1e-10,
            'square-mile': 3.861e-13,
            'square-yard': 1.196e-6,
            'square-foot': 1.076e-5,
            'square-inch': 0.00155,
            acre: 2.4711e-10
        },
        'square-micrometer': {
            'square-meter': 1e-12,
            'square-kilometer': 1e-18,
            'square-centimeter': 1e-8,
            'square-millimeter': 1e-6,
            'square-micrometer': 1,
            hectare: 1e-16,
            'square-mile': 3.861e-19,
            'square-yard': 1.196e-12,
            'square-foot': 1.076e-11,
            'square-inch': 1.55e-9,
            acre: 2.4711e-16
        },
        hectare: {
            'square-meter': 10000,
            'square-kilometer': 0.01,
            'square-centimeter': 1e8,
            'square-millimeter': 1e10,
            'square-micrometer': 1e16,
            hectare: 1,
            'square-mile': 0.00386102,
            'square-yard': 11959.9,
            'square-foot': 107639,
            'square-inch': 1.55e7,
            acre: 2.47105
        },
        'square-mile': {
            'square-meter': 2.59e6,
            'square-kilometer': 2.58999,
            'square-centimeter': 2.59e10,
            'square-millimeter': 2.59e12,
            'square-micrometer': 2.59e18,
            hectare: 258.999,
            'square-mile': 1,
            'square-yard': 3.098e6,
            'square-foot': 2.788e7,
            'square-inch': 4.014e9,
            acre: 640
        },
        'square-yard': {
            'square-meter': 0.836127,
            'square-kilometer': 8.3613e-7,
            'square-centimeter': 8361.27,
            'square-millimeter': 836127,
            'square-micrometer': 8.3613e11,
            hectare: 8.3613e-5,
            'square-mile': 3.2283e-7,
            'square-yard': 1,
            'square-foot': 9,
            'square-inch': 1296,
            acre: 0.000206612
        },
        'square-foot': {
            'square-meter': 0.092903,
            'square-kilometer': 9.2903e-8,
            'square-centimeter': 929.03,
            'square-millimeter': 92903,
            'square-micrometer': 9.2903e10,
            hectare: 9.2903e-6,
            'square-mile': 3.587e-8,
            'square-yard': 0.111111,
            'square-foot': 1,
            'square-inch': 144,
            acre: 2.2957e-5
        },
        'square-inch': {
            'square-meter': 0.00064516,
            'square-kilometer': 6.4516e-10,
            'square-centimeter': 6.4516,
            'square-millimeter': 645.16,
            'square-micrometer': 6.4516e8,
            hectare: 6.4516e-8,
            'square-mile': 2.491e-10,
            'square-yard': 0.000771605,
            'square-foot': 0.00694444,
            'square-inch': 1,
            acre: 1.5942e-7
        },
        acre: {
            'square-meter': 4046.86,
            'square-kilometer': 0.00404686,
            'square-centimeter': 4.0469e7,
            'square-millimeter': 4.0469e9,
            'square-micrometer': 4.0469e15,
            hectare: 0.404686,
            'square-mile': 0.0015625,
            'square-yard': 4840,
            'square-foot': 43560,
            'square-inch': 6.273e6,
            acre: 1
        }
    },

    volume: {
        'cubic-meter': {
            'cubic-meter': 1,
            'cubic-kilometer': 1e-9,
            'cubic-millimeter': 1e9,
            liter: 1e3,
            milliliter: 1e6,
            'us-gallon': 264.172,
            'us-quart': 1056.69,
            'us-pint': 2113.38,
            'us-cup': 4166.67,
            'us-fluid-ounce': 33814,
            'us-table-spoon': 67628,
            'us-tea-spoon': 202884,
            'imperial-gallon': 219.9692483,
            'imperial-quart': 879.8769932,
            'imperial-pint': 1759.753986,
            'imperial-fluid-ounce': 35195.07972,
            'imperial-table-spoon': 56312.12755,
            'imperial-tea-spoon': 168936.3826,
            'cubic-mile': 2.3991e-10,
            'cubic-yard': 1.30795,
            'cubic-foot': 35.3147,
            'cubic-inch': 61023.7
        },
        'cubic-kilometer': {
            'cubic-meter': 1e9,
            'cubic-kilometer': 1,
            'cubic-millimeter': 1e18,
            liter: 1e12,
            milliliter: 1e15,
            'us-gallon': 2.64172e11,
            'us-quart': 1.05669e12,
            'us-pint': 2.11338e12,
            'us-cup': 4.16667e12,
            'us-fluid-ounce': 3.3814e13,
            'us-table-spoon': 6.7628e13,
            'us-tea-spoon': 2.02884e14,
            'imperial-gallon': 2.19969e11,
            'imperial-quart': 8.79877e11,
            'imperial-pint': 1.75975e12,
            'imperial-fluid-ounce': 3.51951e13,
            'imperial-table-spoon': 5.63121e13,
            'imperial-tea-spoon': 1.68936e14,
            'cubic-mile': 0.23991,
            'cubic-yard': 1307950000,
            'cubic-foot': 3.5315e10,
            'cubic-inch': 6.1024e13
        },
        'cubic-millimeter': {
            'cubic-meter': 1e-9,
            'cubic-kilometer': 1e-18,
            'cubic-millimeter': 1,
            liter: 0.000001,
            milliliter: 0.001,
            'us-gallon': 2.64172e-10,
            'us-quart': 1.05669e-9,
            'us-pint': 2.11338e-9,
            'us-cup': 4.16667e-9,
            'us-fluid-ounce': 3.3814e-8,
            'us-table-spoon': 6.7628e-8,
            'us-tea-spoon': 2.02884e-7,
            'imperial-gallon': 2.19969e-10,
            'imperial-quart': 8.79877e-10,
            'imperial-pint': 1.75975e-9,
            'imperial-fluid-ounce': 3.51951e-8,
            'imperial-table-spoon': 5.63121e-8,
            'imperial-tea-spoon': 1.68936e-7,
            'cubic-mile': 2.3991e-19,
            'cubic-yard': 1.30795e-9,
            'cubic-foot': 3.5315e-8,
            'cubic-inch': 6.1024e-5
        },
        liter: {
            'cubic-meter': 0.001,
            'cubic-kilometer': 1e-12,
            'cubic-millimeter': 1000000,
            liter: 1,
            milliliter: 1000,
            'us-gallon': 0.264172,
            'us-quart': 1.05669,
            'us-pint': 2.11338,
            'us-cup': 4.16667,
            'us-fluid-ounce': 33.814,
            'us-table-spoon': 67.628,
            'us-tea-spoon': 202.884,
            'imperial-gallon': 0.219969,
            'imperial-quart': 0.879877,
            'imperial-pint': 1.75975,
            'imperial-fluid-ounce': 35.1951,
            'imperial-table-spoon': 56.3121,
            'imperial-tea-spoon': 168.936,
            'cubic-mile': 2.3991e-13,
            'cubic-yard': 0.00130795,
            'cubic-foot': 0.0353147,
            'cubic-inch': 61.0237
        },
        milliliter: {
            'cubic-meter': 0.000001,
            'cubic-kilometer': 1e-15,
            'cubic-millimeter': 1000,
            liter: 0.001,
            milliliter: 1,
            'us-gallon': 0.000264172,
            'us-quart': 0.00105669,
            'us-pint': 0.00211338,
            'us-cup': 0.00416667,
            'us-fluid-ounce': 0.033814,
            'us-table-spoon': 0.067628,
            'us-tea-spoon': 0.202884,
            'imperial-gallon': 0.000219969,
            'imperial-quart': 0.000879877,
            'imperial-pint': 0.00175975,
            'imperial-fluid-ounce': 0.0351951,
            'imperial-table-spoon': 0.0563121,
            'imperial-tea-spoon': 0.168936,
            'cubic-mile': 2.3991e-16,
            'cubic-yard': 0.00000130795,
            'cubic-foot': 0.0000353147,
            'cubic-inch': 0.0610237
        },
        'us-gallon': {
            'cubic-meter': 0.00378541,
            'cubic-kilometer': 3.78541e-12,
            'cubic-millimeter': 3785410,
            liter: 3.78541,
            milliliter: 3785.41,
            'us-gallon': 1,
            'us-quart': 4,
            'us-pint': 8,
            'us-cup': 16,
            'us-fluid-ounce': 128,
            'us-table-spoon': 256,
            'us-tea-spoon': 768,
            'imperial-gallon': 0.832674,
            'imperial-quart': 3.3307,
            'imperial-pint': 6.66139,
            'imperial-fluid-ounce': 133.228,
            'imperial-table-spoon': 213.165,
            'imperial-tea-spoon': 639.494,
            'cubic-mile': 3.60465e-13,
            'cubic-yard': 0.00495113,
            'cubic-foot': 0.133681,
            'cubic-inch': 231
        },
        'us-quart': {
            'cubic-meter': 0.000946353,
            'cubic-kilometer': 9.46353e-13,
            'cubic-millimeter': 946353,
            liter: 0.946353,
            milliliter: 946.353,
            'us-gallon': 0.25,
            'us-quart': 1,
            'us-pint': 2,
            'us-cup': 4,
            'us-fluid-ounce': 32,
            'us-table-spoon': 64,
            'us-tea-spoon': 192,
            'imperial-gallon': 0.208168,
            'imperial-quart': 0.832674,
            'imperial-pint': 1.66535,
            'imperial-fluid-ounce': 33.3069,
            'imperial-table-spoon': 53.2911,
            'imperial-tea-spoon': 159.873,
            'cubic-mile': 9.01163e-14,
            'cubic-yard': 0.00123778,
            'cubic-foot': 0.0334205,
            'cubic-inch': 57.75
        },
        'us-pint': {
            'cubic-meter': 0.000473176,
            'cubic-kilometer': 4.73176e-13,
            'cubic-millimeter': 473176,
            liter: 0.473176,
            milliliter: 473.176,
            'us-gallon': 0.125,
            'us-quart': 0.5,
            'us-pint': 1,
            'us-cup': 2,
            'us-fluid-ounce': 16,
            'us-table-spoon': 32,
            'us-tea-spoon': 96,
            'imperial-gallon': 0.104084,
            'imperial-quart': 0.416337,
            'imperial-pint': 0.832674,
            'imperial-fluid-ounce': 16.6535,
            'imperial-table-spoon': 26.6456,
            'imperial-tea-spoon': 79.9367,
            'cubic-mile': 4.50581e-14,
            'cubic-yard': 0.000618891,
            'cubic-foot': 0.0167102,
            'cubic-inch': 28.875
        },
        'us-cup': {
            'cubic-meter': 0.000236588,
            'cubic-kilometer': 2.36588e-13,
            'cubic-millimeter': 236588,
            liter: 0.236588,
            milliliter: 236.588,
            'us-gallon': 0.0625,
            'us-quart': 0.25,
            'us-pint': 0.5,
            'us-cup': 1,
            'us-fluid-ounce': 8,
            'us-table-spoon': 16,
            'us-tea-spoon': 48,
            'imperial-gallon': 0.0520421,
            'imperial-quart': 0.208168,
            'imperial-pint': 0.416337,
            'imperial-fluid-ounce': 8.32674,
            'imperial-table-spoon': 13.3227,
            'imperial-tea-spoon': 39.968,
            'cubic-mile': 2.2529e-14,
            'cubic-yard': 0.000309446,
            'cubic-foot': 0.00835507,
            'cubic-inch': 14.4375
        },
        'us-fluid-ounce': {
            'cubic-meter': 2.9574e-05,
            'cubic-kilometer': 2.9574e-14,
            'cubic-millimeter': 29574.5,
            liter: 0.0295735,
            milliliter: 29.5735,
            'us-gallon': 0.0078125,
            'us-quart': 0.03125,
            'us-pint': 0.0625,
            'us-cup': 0.125,
            'us-fluid-ounce': 1,
            'us-table-spoon': 2,
            'us-tea-spoon': 6,
            'imperial-gallon': 0.00650527,
            'imperial-quart': 0.0260211,
            'imperial-pint': 0.0520421,
            'imperial-fluid-ounce': 1.04084,
            'imperial-table-spoon': 1.66535,
            'imperial-tea-spoon': 3.33066,
            'cubic-mile': 1.87681e-15,
            'cubic-yard': 2.56816e-05,
            'cubic-foot': 0.00069699,
            'cubic-inch': 1.201
        },
        'us-table-spoon': {
            'cubic-meter': 1.4787e-05,
            'cubic-kilometer': 1.4787e-14,
            'cubic-millimeter': 14786.8,
            liter: 0.0147868,
            milliliter: 14.7868,
            'us-gallon': 0.00390625,
            'us-quart': 0.015625,
            'us-pint': 0.03125,
            'us-cup': 0.0625,
            'us-fluid-ounce': 0.5,
            'us-table-spoon': 1,
            'us-tea-spoon': 3,
            'imperial-gallon': 0.00325263,
            'imperial-quart': 0.0130105,
            'imperial-pint': 0.0260211,
            'imperial-fluid-ounce': 0.520421,
            'imperial-table-spoon': 0.832674,
            'imperial-tea-spoon': 2.49802,
            'cubic-mile': 1.25188e-15,
            'cubic-yard': 1.71208e-05,
            'cubic-foot': 0.000464495,
            'cubic-inch': 0.800781
        },
        'us-tea-spoon': {
            'cubic-meter': 4.9289e-06,
            'cubic-kilometer': 4.9289e-15,
            'cubic-millimeter': 4928.92,
            liter: 0.00492892,
            milliliter: 4.92892,
            'us-gallon': 0.00130208,
            'us-quart': 0.00520833,
            'us-pint': 0.0104167,
            'us-cup': 0.0208333,
            'us-fluid-ounce': 0.166667,
            'us-table-spoon': 0.333333,
            'us-tea-spoon': 1,
            'imperial-gallon': 0.00108421,
            'imperial-quart': 0.00433684,
            'imperial-pint': 0.00867369,
            'imperial-fluid-ounce': 0.173474,
            'imperial-table-spoon': 0.277558,
            'imperial-tea-spoon': 0.832674,
            'cubic-mile': 4.17294e-16,
            'cubic-yard': 5.70693e-06,
            'cubic-foot': 0.000154832,
            'cubic-inch': 0.266927
        },
        'imperial-gallon': {
            'cubic-meter': 0.00454609,
            'cubic-kilometer': 4.54609e-12,
            'cubic-millimeter': 4.54609e+06,
            liter: 4.54609,
            milliliter: 4546.09,
            'us-gallon': 1.20095,
            'us-quart': 4.8038,
            'us-pint': 9.6076,
            'us-cup': 19.2152,
            'us-fluid-ounce': 153.722,
            'us-table-spoon': 307.443,
            'us-tea-spoon': 922.33,
            'imperial-gallon': 1,
            'imperial-quart': 4,
            'imperial-pint': 8,
            'imperial-fluid-ounce': 160,
            'imperial-table-spoon': 256,
            'imperial-tea-spoon': 768,
            'cubic-mile': 3.84013e-12,
            'cubic-yard': 0.00524288,
            'cubic-foot': 0.142257,
            'cubic-inch': 245.942
        },
        'imperial-quart': {
            'cubic-meter': 0.00113652,
            'cubic-kilometer': 1.13652e-12,
            'cubic-millimeter': 1.13652e+06,
            liter: 1.13652,
            milliliter: 1136.52,
            'us-gallon': 0.300238,
            'us-quart': 1.20095,
            'us-pint': 2.4019,
            'us-cup': 4.8038,
            'us-fluid-ounce': 38.8611,
            'us-table-spoon': 76.4305,
            'us-tea-spoon': 229.291,
            'imperial-gallon': 0.25,
            'imperial-quart': 1,
            'imperial-pint': 2,
            'imperial-fluid-ounce': 40,
            'imperial-table-spoon': 64,
            'imperial-tea-spoon': 192,
            'cubic-mile': 9.60033e-13,
            'cubic-yard': 0.00131072,
            'cubic-foot': 0.0355642,
            'cubic-inch': 61.4855
        },
        'imperial-pint': {
            'cubic-meter': 0.000568261,
            'cubic-kilometer': 5.68261e-13,
            'cubic-millimeter': 568261,
            liter: 0.568261,
            milliliter: 568.261,
            'us-gallon': 0.150119,
            'us-quart': 0.600476,
            'us-pint': 1.20095,
            'us-cup': 2.4019,
            'us-fluid-ounce': 19.4306,
            'us-table-spoon': 38.2153,
            'us-tea-spoon': 114.646,
            'imperial-gallon': 0.125,
            'imperial-quart': 0.5,
            'imperial-pint': 1,
            'imperial-fluid-ounce': 20,
            'imperial-table-spoon': 32,
            'imperial-tea-spoon': 96,
            'cubic-mile': 4.80017e-13,
            'cubic-yard': 0.00065536,
            'cubic-foot': 0.0177821,
            'cubic-inch': 30.7427
        },
        'imperial-fluid-ounce': {
            'cubic-meter': 2.8413e-05,
            'cubic-kilometer': 2.8413e-14,
            'cubic-millimeter': 28413.1,
            liter: 0.0284131,
            milliliter: 28.4131,
            'us-gallon': 0.00750594,
            'us-quart': 0.0300238,
            'us-pint': 0.0600475,
            'us-cup': 0.120095,
            'us-fluid-ounce': 0.96076,
            'us-table-spoon': 1.92152,
            'us-tea-spoon': 5.76456,
            'imperial-gallon': 0.00625,
            'imperial-quart': 0.025,
            'imperial-pint': 0.05,
            'imperial-fluid-ounce': 1,
            'imperial-table-spoon': 1.6,
            'imperial-tea-spoon': 4.8,
            'cubic-mile': 2.40008e-14,
            'cubic-yard': 3.2768e-05,
            'cubic-foot': 0.000888034,
            'cubic-inch': 1.54338
        },
        'imperial-table-spoon': {
            'cubic-meter': 1.7758e-05,
            'cubic-kilometer': 1.7758e-14,
            'cubic-millimeter': 17758.2,
            liter: 0.0177582,
            milliliter: 17.7582,
            'us-gallon': 0.00469121,
            'us-quart': 0.0187648,
            'us-pint': 0.0375295,
            'us-cup': 0.075059,
            'us-fluid-ounce': 0.600476,
            'us-table-spoon': 1.20095,
            'us-tea-spoon': 3.60285,
            'imperial-gallon': 0.003125,
            'imperial-quart': 0.0125,
            'imperial-pint': 0.025,
            'imperial-fluid-ounce': 0.5,
            'imperial-table-spoon': 1,
            'imperial-tea-spoon': 3,
            'cubic-mile': 1.20004e-14,
            'cubic-yard': 1.6384e-05,
            'cubic-foot': 0.000444017,
            'cubic-inch': 0.77169
        },
        'imperial-tea-spoon': {
            'cubic-meter': 5.9193e-06,
            'cubic-kilometer': 5.9193e-15,  
            'cubic-millimeter': 5919.39,
            liter: 0.00591939,
            milliliter: 5.91939,
            'us-gallon': 0.00156374,
            'us-quart': 0.00625497,
            'us-pint': 0.0125099,
            'us-cup': 0.0250198,
            'us-fluid-ounce': 0.200159,
            'us-table-spoon': 0.400318,
            'us-tea-spoon': 1.20095,
            'imperial-gallon': 0.00104167,
            'imperial-quart': 0.00416667,
            'imperial-pint': 0.00833333,
            'imperial-fluid-ounce': 0.166667,
            'imperial-table-spoon': 0.266667,
            'imperial-tea-spoon': 0.8,
            'cubic-mile': 4.00017e-15,
            'cubic-yard': 5.4613e-06,
            'cubic-foot': 0.000148006,
            'cubic-inch': 0.25723
        },
        'cubic-mile': {
            'cubic-meter': 4168180000,
            'cubic-kilometer': 4.16818,
            'cubic-millimeter': 4.16818e+18,
            liter: 4.16818e+12,
            milliliter: 4.16818e+15,
            'us-gallon': 1.101e+12,
            'us-quart': 4.404e+12,
            'us-pint': 8.808e+12,
            'us-cup': 1.7616e+13,
            'us-fluid-ounce': 1.40928e+14,
            'us-table-spoon': 2.81856e+14,
            'us-tea-spoon': 8.45568e+14,
            'imperial-gallon': 9.25926e+11,
            'imperial-quart': 3.7037e+12,
            'imperial-pint': 7.40741e+12,
            'imperial-fluid-ounce': 1.48148e+14,
            'imperial-table-spoon': 2.37037e+14,
            'imperial-tea-spoon': 7.11111e+14,
            'cubic-mile': 1,
            'cubic-yard': 1.36129e+9,
            'cubic-foot': 3.67365e+10,
            'cubic-inch': 6.38939e+12
        },
        'cubic-yard': {
            'cubic-meter': 0.764555,
            'cubic-kilometer': 7.64555e-10,
            'cubic-millimeter': 764555,
            liter: 764.555,
            milliliter: 764555,
            'us-gallon': 201.974,
            'us-quart': 807.896,
            'us-pint': 1615.79,
            'us-cup': 3231.58,
            'us-fluid-ounce': 25853.1,
            'us-table-spoon': 51706.2,
            'us-tea-spoon': 155118,
            'imperial-gallon': 168.178,
            'imperial-quart': 672.713,
            'imperial-pint': 1345.43,
            'imperial-fluid-ounce': 26908.6,
            'imperial-table-spoon': 43054.9,
            'imperial-tea-spoon': 129164,
            'cubic-mile': 2.39913e-10,
            'cubic-yard': 1,
            'cubic-foot': 27,
            'cubic-inch': 46656
        },
        'cubic-foot': {
            'cubic-meter': 0.0283168,
            'cubic-kilometer': 2.83168e-11,
            'cubic-millimeter': 28316.8,
            liter: 28.3168,
            milliliter: 28316.8,
            'us-gallon': 7.48052,
            'us-quart': 29.9221,
            'us-pint': 59.8442,
            'us-cup': 119.688,
            'us-fluid-ounce': 957.504,
            'us-table-spoon': 1915.01,
            'us-tea-spoon': 5745.04,
            'imperial-gallon': 6.22884,
            'imperial-quart': 24.9154,
            'imperial-pint': 49.8309,
            'imperial-fluid-ounce': 996.618,
            'imperial-table-spoon': 1594.59,
            'imperial-tea-spoon': 4783.77,
            'cubic-mile': 1.06807e-11,
            'cubic-yard': 0.037037,
            'cubic-foot': 1,
            'cubic-inch': 1728
        },
        'cubic-inch': {
            'cubic-meter': 1.63871e-05,
            'cubic-kilometer': 1.63871e-14,
            'cubic-millimeter': 16387.1,
            liter: 0.0163871,
            milliliter: 16.3871,
            'us-gallon': 0.004329,
            'us-quart': 0.017316,
            'us-pint': 0.034632,
            'us-cup': 0.069264,
            'us-fluid-ounce': 0.554112,
            'us-table-spoon': 1.10823,
            'us-tea-spoon': 3.32468,
            'imperial-gallon': 0.00360465,
            'imperial-quart': 0.0144186,
            'imperial-pint': 0.0288372,
            'imperial-fluid-ounce': 0.576744,
            'imperial-table-spoon': 0.92279,
            'imperial-tea-spoon': 2.76837,
            'cubic-mile': 3.93147e-15,
            'cubic-yard': 1.27324e-05,
            'cubic-foot': 0.000578704,
            'cubic-inch': 1
        }
    },

    weight : {
        kilogram: {
            kilogram: 1,
            gram: 1000,
            milligram: 1e+6,
            'metric-ton': 0.001,
            'long-ton': 0.0009842073,
            'short-ton': 0.0011023122,
            pound: 2.20462e-6,
            ounce: 3.5274e-5,
            carrat: 5000,
            'atomic-mass-unit': 6.0221366516752e+26
        },
        gram: {
            kilogram: 0.001,
            gram: 1,
            milligram: 1000,
            'metric-ton': 1e-6,
            'long-ton': 9.842073e-7,
            'short-ton': 1.102312e-6,
            pound: 2.20462e-9,
            ounce: 3.5274e-8,
            carrat: 0.2,
            'atomic-mass-unit': 6.0221366516752e+23
        },
        milligram: {
            kilogram: 1e-6,
            gram: 0.001,
            milligram: 1,
            'metric-ton': 1e-9,
            'long-ton': 9.842073e-10,
            'short-ton': 1.102312e-9,
            pound: 2.20462e-12,
            ounce: 3.5274e-11,
            carrat: 0.0002,
            'atomic-mass-unit': 6.0221366516752e+20
        },
        'metric-ton': {
            kilogram: 1000,
            gram: 1e+6,
            milligram: 1e+9,
            'metric-ton': 1,
            'long-ton': 0.984207,
            'short-ton': 1.102312,
            pound: 2204.62,
            ounce: 35273.96,
            carrat: 5e+6,
            'atomic-mass-unit': 6.0221366516752e+29
        },
        'long-ton': {
            kilogram: 1016.0469088,
            gram: 1.0160469088e+6,
            milligram: 1.0160469088e+9,
            'metric-ton': 1.0160469088,
            'long-ton': 1,
            'short-ton': 1.12,
            pound: 2240,
            ounce: 35840,
            carrat: 5080234.544,
            'atomic-mass-unit': 6.1165511556752e+29
        },
        'short-ton': {
            kilogram: 907.18474,
            gram: 907184.74,
            milligram: 9.0718474e+8,
            'metric-ton': 0.90718474,
            'long-ton': 0.8928571429,
            'short-ton': 1,
            pound: 2000,
            ounce: 32000,
            carrat: 4535923.68,
            'atomic-mass-unit': 5.7737565756752e+29
        },
        pound: {
            kilogram: 453592.37,
            gram: 453592.37,
            milligram: 4.5359237e+8,
            'metric-ton': 0.45359237,
            'long-ton': 0.0004464286,
            'short-ton': 0.0005,
            pound: 1,
            ounce: 16,
            carrat: 2267962.96,
            'atomic-mass-unit': 2.8938782878376e+29
        },
        ounce: {
            kilogram: 28349.523125,
            gram: 28349.523125,
            milligram: 28349.523125,
            'metric-ton': 0.0283495231,
            'long-ton': 0.0000279018,
            'short-ton': 0.00003125,
            pound: 0.0625,
            ounce: 1,
            carrat: 141.747615,
            'atomic-mass-unit': 1.8174245548988e+28
        },
        carrat: {
            kilogram: 0.0002,
            gram: 0.2,
            milligram: 200,
            'metric-ton': 2e-7,
            'long-ton': 1.968414e-7,
            'short-ton': 2.204624e-7,
            pound: 4.409248e-7,
            ounce: 0.0070547924,
            carrat: 1,
            'atomic-mass-unit': 1.204427330335e+23
        },
        'atomic-mass-unit': {
            kilogram: 1.6605401999999998e-27,
            gram: 1.6605401999999998e-24,
            milligram: 1.6605401999999998e-21,
            'metric-ton': 1.6605401999999998e-30,
            'long-ton': 1.6330034499999998e-30,
            'short-ton': 1.8307141999999998e-30,
            pound: 3.6607143999999996e-30,
            ounce: 5.857143039999999e-29,
            carrat: 8.301080399999999e-24,
            'atomic-mass-unit': 1
        }
    },

    time : {
        seconds: {
            seconds: 1,
            milliseconds: 1000,
            microseconds: 1000000,
            nanoseconds: 10e+8,
            picoseconds: 10e+11,
            minute: 0.0166666667,
            hour: 0.0002777778,
            day: 1.1574074074e-5,
            week: 1.6534391534e-6,
            month: 3.805175038e-7,
            year: 3.1709791984e-8
        },
        milliseconds: {
            seconds: 0.001,
            milliseconds: 1,
            microseconds: 1000,
            nanoseconds: 1000000,
            picoseconds: 10e+8,
            minute: 0.0000166667,
            hour: 2.7777777778e-7,
            day: 1.1574074074e-8,
            week: 1.6534391534e-9,
            month: 3.805175038e-10,
            year: 3.1709791984e-11
        },
        microseconds: {
            seconds: 0.000001,
            milliseconds: 0.001,
            microseconds: 1,
            nanoseconds: 1000,
            picoseconds: 1000000,
            minute: 1.6666666667e-8,
            hour: 2.7777777778e-10,
            day: 1.1574074074e-11,
            week: 1.6534391534e-12,
            month: 3.805175038e-13,
            year: 3.1709791984e-14
        },
        nanoseconds: {
            seconds: 1e-9,
            milliseconds: 1e-6,
            microseconds: 0.001,
            nanoseconds: 1,
            picoseconds: 1000,
            minute: 1.6666666667e-11,
            hour: 2.7777777778e-13,
            day: 1.1574074074e-14,
            week: 1.6534391534e-15,
            month: 3.805175038e-16,
            year: 3.1709791984e-17
        },
        picoseconds: {
            seconds: 1e-12,
            milliseconds: 1e-9,
            microseconds: 0.000001,
            nanoseconds: 0.001,
            picoseconds: 1,
            minute: 1.6666666667e-14,
            hour: 2.7777777778e-16,
            day: 1.1574074074e-17,
            week: 1.6534391534e-18,
            month: 3.805175038e-19,
            year: 3.1709791984e-20
        },
        minute: {
            seconds: 60,
            milliseconds: 60000,
            microseconds: 60000000,
            nanoseconds: 60e+9,
            picoseconds: 60e+12,
            minute: 1,
            hour: 0.0166666667,
            day: 0.0006944444,
            week: 0.0000992063,
            month: 0.0000228311,
            year: 0.0000019026
        },
        hour: {
            seconds: 3600,
            milliseconds: 3600000,
            microseconds: 3600000000,
            nanoseconds: 360e+10,
            picoseconds: 360e+13,
            minute: 60,
            hour: 1,
            day: 0.0416666667,
            week: 0.005952381,
            month: 0.0013689254,
            year: 0.0001140779
        },
        day: {
            seconds: 86400,
            milliseconds: 86400000,
            microseconds: 8640e+7,
            nanoseconds: 8640e+10,
            picoseconds: 8640e+13,
            minute: 1440,
            hour: 24,
            day: 1,
            week: 0.1428571429,
            month: 0.0328542094,
            year: 0.0027378508
        },
        week: {
            seconds: 604800,
            milliseconds: 604800000,
            microseconds: 604800000000,
            nanoseconds: 60480e+10,
            picoseconds: 60480e+13,
            minute: 10080,
            hour: 168,
            day: 7,
            week: 1,
            month: 0.2301369863,
            year: 0.0191780822
        },
        month: {
            seconds: 2628000,
            milliseconds: 2628000000,
            microseconds: 26280e+8,
            nanoseconds: 26280e+11,
            picoseconds: 26280e+14,
            minute: 43800,
            hour: 730.001,
            day: 30.4166666667,
            week: 4.3452380952,
            month: 1,
            year: 0.0833333333
        },
        year: {
            seconds: 31536000,
            milliseconds: 31536000000,
            microseconds: 315360e+8,
            nanoseconds: 315360e+11,
            picoseconds: 315360e+14,
            minute: 525600,
            hour: 8760,
            day: 365,
            week: 52.1428571429,
            month: 12,
            year: 1
        }
    }
};

// ----------------------------------------
//         Unit Converting Logic 
// ----------------------------------------
function converter(unitType, value, inputOption, outputOption) {
    if(unitType == 'temp'){
        const lowestValues={
            celsius: 0,
            fahrenheit: 32,
            kelvin :273.15
        }
        const highestValues={
            celsius:100,
            fahrenheit: 212,
            kelvin : 373.15
        }
        return ((((value-lowestValues[inputOption])/(highestValues[inputOption]-lowestValues[inputOption]))*(highestValues[outputOption]-lowestValues[outputOption])))+lowestValues[outputOption];
    }
    else{
        const fromBaseValue = convertionTerms[unitType][inputOption][outputOption];
        return value * fromBaseValue  ;
    }
}
