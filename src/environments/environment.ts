// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyDyVPsSOkbUEaDgvbsWQwSZ7Sk4afl13gQ",
    authDomain: "hinamomo-megumi.firebaseapp.com",
    databaseURL: "https://hinamomo-megumi.firebaseio.com",
    projectId: "hinamomo-megumi",
    storageBucket: "hinamomo-megumi.appspot.com",
    messagingSenderId: "17080798040",
    appId: "1:17080798040:web:03d79700af2807a0"
  },

  apiURL: 'developmentApi'
};
