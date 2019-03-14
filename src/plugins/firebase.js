// import something here
import firebase from 'firebase/app'
import 'firebase/database'
import vuefire from 'vuefire'
var config = {
  apiKey: 'AIzaSyDu6ksGd84mH1NGcUkjdBE49hvFiNsANVA',
  // authDomain: 'quasar-project-6a78d.firebaseapp.com',
  databaseURL: 'https://quasar-project-6a78d.firebaseio.com',
  projectId: 'quasar-project-6a78d'
  // storageBucket: "quasar-project-6a78d.appspot.com",
  // messagingSenderId: "262470295011"
}
firebase.initializeApp(config)
var db = firebase.database()
// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.prototype.$db = db
  Vue.use(vuefire)
}
