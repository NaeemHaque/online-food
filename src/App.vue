<template>
<v-container>
  <v-app>
    <v-navigation-drawer
    v-model="sideNav"
    absolute>
      <v-list class="mt-15">
        <v-list-item v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
        <v-list-item to="/login">Login</v-list-item>
        <v-list-item to="/create">Create Account</v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
   <v-toolbar dense flat class="pa-3 mb-5">

      <v-app-bar-nav-icon  @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>

      <img src="https://img.icons8.com/bubbles/50/000000/restaurant.png"/>
      <div >
        <span class=" title">Good</span>
        <span class="headline clr-primary "><strong>Food</strong></span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
      depressed color="white"
      class="text-capitalize hidden-xs-only text-center mx-1"
      active-class="green--text"
      v-for="item in menuItems" :key="item.title"
      :to="item.link"
      @click="scrollingToRightPlace(id)"
      >
      {{ item.title }}
      </v-btn>

      <v-btn depressed small class="white--text rounded-lg hidden-xs-only mx-1 " color="#FE5634">
        <v-icon class="py-2">mdi-cart-minus</v-icon>
      </v-btn>
      <v-btn
      depressed color="white"
      class="text-capitalize hidden-xs-only text-center mx-1"
      active-class="green--text"
      to="/login"
      >
      Login
      </v-btn>
      <v-btn depressed small to="/create" class="text-capitalize white--text mr-2 pa-2 btn-style rounded-lg hidden-xs-only" color="#FE5634">Create Account</v-btn>

    </v-toolbar>
    <router-view>
      <router-link/>
    </router-view>
      <Home/>
      <Menue/>
      <Galery/>
      <GetApp/>
      <About/>
      <Footer/>
    </v-main>
  </v-app>
  </v-container>
</template>

<script>
import Home from './components/Home'
import Menue from './components/Menue'
import About from './components/About'
import Footer from './components/Footer'
import GetApp from './components/Get-the-app'
import Galery from './components/Gallery'

export default {
  name: 'App',

  data: () => ({
    sideNav: false
  }),

  computed: {
    menuItems () {
      var menuItems = [
        { title: 'Home', link: '/' },
        { title: 'Menue', link: '/menue' },
        { title: 'Service', link: '/service' },
        { title: 'About Us', link: '/about' },
        { title: 'Gelery', link: '/gelery' }

      ]
      return menuItems
    }
  },
  components: {
    Home,
    Menue,
    GetApp,
    About,
    Galery,
    Footer
  }
}
</script>

<style>
.clr-primary {
    color: #FE5634 !important;
}
</style>
