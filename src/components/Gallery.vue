<template>
<div>
<div class="text-center my-5"> <h2><strong>Gallery</strong></h2> </div>
  <v-row >
    <v-col
      v-for="item in items" :key="item.src"
      class="d-flex child-flex"
      cols="12"
      sm="12"
      md="4"
      lg="4"
    >
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="1"
        :src="item.src"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out deep-orange  v-card--reveal display-3 dark--text"
            style="height: 100%;"
          >
            <strong>{{ item.price }}</strong>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="#FE5634"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
        <h3 class="display-1 font-weight-light deep-orange--text mb-2">{{ item.title }}</h3>
        <div class="font-weight-light text-justify mb-2 grey--text">
         <strong>{{ item.info }} </strong>
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
    </v-col>
  </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: 'chowmin.jpg',
          price: '$15',
          title: 'Thai Vagetable',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'platter-2.jpg',
          price: '$12',
          title: 'Bangla Platter',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'fish-fry.jpg',
          title: 'Thai Stack',
          price: '$14',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'fried-chicken.jpg',
          price: '$10.2',
          title: 'Fried Chicken',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'pizza-1.jpg',
          price: '$15.3',
          title: 'BBQ Pizza',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'platter.jpg',
          price: '$15',
          title: 'Fruits Salad',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'cake.jpg',
          price: '$8',
          title: 'Cherry Cake',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'burger-1.jpg',
          price: '$13.2',
          title: 'Hot Burger',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        },
        {
          src: 'burger-2.jpg',
          price: '$13',
          title: 'Gerlic Burger',
          info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat non aliquid perspiciatis, libero reiciendis sapiente!'
        }
      ]
    }
  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
