require.config({
    //baseUrl: "js/scripts",
    baseUrl: "",

    // alias libraries paths
    paths: {
        "angular": "js/libs/angular",
        "ui-router": "js/libs/angular-ui-router",
        "angularAMD": "js/libs/angularAMD",
        "ui-grid": "//ui-grid.info/release/ui-grid",
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
        // ************
        // End Controllers
        // ************
    },

    shim: {
        "ui-grid": {
            deps: ['angular'],
            exports: 'ui-grid',
        },
        "angularAMD": ["angular"],
        "ui-router": ["angular"],
    },

    deps: ['app']
});