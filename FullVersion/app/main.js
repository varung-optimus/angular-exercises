require.config({
    //baseUrl: "js/scripts",
    baseUrl: "",

    // alias libraries paths
    paths: {
        "jquery": "//code.jquery.com/jquery-2.2.4.min",
        "angular": "js/libs/angular",
        "ui-router": "js/libs/angular-ui-router",
        "angularAMD": "js/libs/angularAMD",
        "ui-grid": "js/libs/ui-grid",
        "angular-input-masks": "js/libs/angular-input-masks/angular-input-masks-standalone",
        'moment': 'js/libs/moment',
        'string-mask': 'js/libs/string-mask',
        'br-validations': 'js/libs/br-validations',
        // Core
        "coreState": "js/core/state",
        // ************
        // Controllers
        // ************
        "AppCtrl": "js/core/controllers/AppCtrl",
        "NavbarCtrl": "js/core/controllers/NavbarCtrl",
        // Exercise 1
        "DefaultCtrl": "js/main/controllers/DefaultCtrl",
        "OtherCtrl": "js/main/controllers/OtherCtrl",
        // Exercise 2 and 3
        "Ex2Ctrl": "js/main/controllers/Ex2Ctrl",
        "Ex2SearchCtrl": "js/main/controllers/Ex2SearchCtrl",
        // Exercise 4
        "Ex4GridCtrl": "js/main/controllers/Ex4GridCtrl",
        // Exercise 5
        // "PhoneMaskCtrl": "js/main/controllers/PhoneMaskCtrl",
        // Exercise 6
        // Exercise 7
        "Ex7FieldsCtrl": "js/main/controllers/Ex7FieldsCtrl",
        // Exercise 8
        "Ex8DynamicFieldCtrl": "js/main/controllers/Ex8DynamicFieldCtrl",
        // ************
        // End Controllers

        // ************
        // ************
        // Directives
        // ************
        "phoneDirective": "js/main/directives/phone",
        "moveNextOnMaxlength": "js/main/directives/moveNextOnMaxlength"
        // ************
        // End Directives
        // ************
    },

    shim: {
        "ui-grid": {
            deps: ['angular'],
            exports: 'ui-grid',
        },
        // 'angular-input-masks': ['angular', 'string-mask', 'moment', 'br-validations'],
        "angularAMD": ["angular"],
        "ui-router": ["angular"]
    },

    deps: ['app']
});