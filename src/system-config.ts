/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'moment': 'vendor/moment/moment.js',
  'angular2-moment': 'vendor/angular2-moment',
  '@vaadin': 'vendor/@vaadin',
  '@ngrx': 'vendor/@ngrx'
};

/** User packages configuration. */
const packages: any = {
  'angular2-moment': { defaultExtension: 'js' },
  '@vaadin/angular2-polymer': { main: 'index.js', defaultExtension: 'js' },
  '@ngrx/store': {  format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  },
  '@ngrx/core': {  format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  },
  '@ngrx/store-devtools': {  format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  },
  '@ngrx/store-log-monitor': {  format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  },
  '@ngrx/effects': {  format: 'cjs',
    defaultExtension: 'js',
    main: 'index.js'
  },
  'bower_components': { defaultExtension: 'js' }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/forms',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
