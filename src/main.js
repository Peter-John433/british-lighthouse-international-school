import './assets/main.css'


import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarCheck, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEarthOceania } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import VueSplide from '@splidejs/vue-splide'



library.add(faUserSecret, faCertificate, faBuildingColumns, faSchoolFlag, faCalendar, faPhone, faEarthOceania, faEnvelope, faChevronRight, faChevronDown)

const app = createApp(App)


app.use(router)
// app.component('font-awesome-icon', FontAwesomeIcon)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use( VueSplide )
app.mount('#app')
