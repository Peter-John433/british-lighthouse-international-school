import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Admission from '../views/Admission.vue'
import Academics from '../views/Academics.vue'
import Boarding from '../views/Boarding.vue'
import Gallery from '../views/Gallery.vue'
import MoreGallery from '../views/MoreGallery.vue'
import Contact from '../views/Contact.vue'
import Pre from '../views/Pre.vue'


import History from '../views/about/History.vue'
import Executive from '../views/about/Executive.vue'
import Song from '../views/about/Song.vue'
import HeadsOfSchool from '../views/about/HeadsOfSchool.vue'
import Mission from '../views/about/MissionVisionValue.vue'
import Fags from '../views/about/Fags.vue'
import Policies from '../views/about/Policies.vue'
import AccreditationAndAffiliation from '../views/about/AccreditationAndAffiliation.vue'
import Why from '../views/Admissions/Why.vue'
import AdmissionProcess from '../views/Admissions/AdmissionProcess.vue'
import TuitionFee from '../views/Admissions/TuitionFee.vue'
import Download from '../views/Admissions/Download.vue'
import Curriculum from '../views/Academics/Curriculum.vue'
import ExtraCurriculum from '../views/Academics/ExtraCurriculum.vue'
import ELearning from '../views/Academics/ELearning.vue'
import Program from '../views/Academics/Programs.vue'
import Holiday from '../views/Academics/Holiday.vue'
import Sport from '../views/Academics/Sport.vue'
import Calender from '../views/Academics/Calender.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        
        { path: '/about', name: 'About', component: About },

        { path: '/about/history', name: 'History', component: History },

        { path: '/about/executive', name: 'Executive', component: Executive },

        { path: '/about/Song', name: 'Song', component: Song },

        { path: '/about/headsofschool', name: 'HeadsOfSchool', component: HeadsOfSchool },

        { path: '/about/MissionVisionValue', name: 'MissionVisionValue', component: Mission },

        { path: '/about/faqs', name: 'Fags', component: Fags },

        { path: '/about/school policies', name: 'Policies', component: Policies },

        { path: '/about/AccreditationAndAffiliation', name: 'AccreditationAndAffiliation', component: AccreditationAndAffiliation },

        { path: '/admission', name: 'Admission', component: Admission },

        { path: '/admission/why', name: 'Why', component: Why },

        { path: '/admission/admission-process', name: 'AdmissionProcess', component: AdmissionProcess },

        { path: '/admission/download application form', name: 'Download', component: Download },

        { path: '/academics', name: 'Academics', component: Academics },

        { path: '/academics/Curriculum', name: 'Curriculum', component: Curriculum },

        { path: '/academics/extra-curriculum', name: 'ExtraCurriculum', component: ExtraCurriculum },

        { path: '/academics/elearning', name: 'ELearning', component: ELearning },

        { path: '/academics/programs', name: 'Programs', component: Program },

        { path: '/academics/holiday assignments', name: 'Holiday', component: Holiday },

        { path: '/academics/sports', name: 'Sport', component: Sport },

        { path: '/academics/Calender', name: 'Calender', component: Calender },

        { path: '/admission/tuition and payment', name: 'TuitionFee', component: TuitionFee },

        { path: '/boarding', name: 'Boarding', component: Boarding },

        { path: '/gallery', name: 'Gallery', component: Gallery },

        { path: '/more sechool galleries', name: 'MoreGallery', component: MoreGallery },

        { path: '/contact-us', name: 'Contact', component: Contact },

        { path: '/pre school', name: 'Pre', component: Pre },
    ]
})

export default router
