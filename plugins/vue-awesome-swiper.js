import Vue from 'vue'
import VueAwesomeSwiper, { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)

export default {
  directives: {
    swiper: directive,
  },
}
