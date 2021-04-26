//Esta carpeta incluye dos ficheros de variables de configuración 
//global de la aplicación, con el objetivo de especificar que cargue uno u otro según el entorno

export const environment = {
  production: false,
  firebaseConfig :{
    apiKey: "AIzaSyDkvXq_h8WK2FxGbGHGYFAktLRgnlPQVp0",
    authDomain: "crud-firebase-db093.firebaseapp.com",
    databaseURL: "https://crud-firebase-db093.firebaseio.com",
    projectId: "crud-firebase-db093",
    storageBucket: "crud-firebase-db093.appspot.com",
    messagingSenderId: "428549464266",
    appId: "1:428549464266:web:9cbfd4d97ffc8d87e9d433",
    measurementId: "G-BRJ395H0DC"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
