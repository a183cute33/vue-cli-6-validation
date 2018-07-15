import Vue from 'vue'
import Router from 'vue-router'
import CreateAccount from '@/components/CreateAccount'
import GeneralInfomation from '@/components/GeneralInfomation'
import UpdateProfilePicture from '@/components/UpdateProfilePicture'
import PaymentMethod from '@/components/PaymentMethod'
import Congratulations from '@/components/Congratulations'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'CreateAccount',
    component: CreateAccount
  }, {
    path: '/GeneralInfomation',
    name: 'GeneralInfomation',
    component: GeneralInfomation
  }, {
    path: '/UpdateProfilePicture',
    name: 'UpdateProfilePicture',
    component: UpdateProfilePicture
  }, {
    path: '/PaymentMethod',
    name: 'PaymentMethod',
    component: PaymentMethod
  }, {
    path: '/Congratulations',
    name: 'Congratulations',
    component: Congratulations
  }]
})
