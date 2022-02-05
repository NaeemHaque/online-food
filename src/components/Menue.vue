<template>
<v-container class="mt-15">

        <div class="text-center mx-7">
            <v-row>
                <h2><strong>Our Menue</strong></h2>
                <v-spacer></v-spacer>
                 <v-icon class=" rounded-lg">mdi-chevron-left</v-icon>
                <v-icon class="bg-primary white--text rounded-lg">mdi-chevron-right</v-icon>
            </v-row>
            <v-row class="my-8">
                <v-col cols="12" lg="2" md="2" sm="4" justify="space-around" v-for="(item) in menue " :key="item.title">
                    <template>
                        <v-card flat color="#D9E5EC" height="200" class="card-body rounded-lg">
                          <v-img fab class="rounded-circle ">
                            <img class="mt-7 card-img" :src="item.icon"/>
                          </v-img>
                          <v-card-text class="subtitle-1 black--text">{{ item.title }}</v-card-text>
                        </v-card>
                    </template>
                </v-col>
            </v-row>

        </div>

        <div class="text-center mx-7 my-5">
            <v-row class="mt-16">
              <div> <h2><strong>Our New Hottest Dish</strong></h2> </div>
              <div class="mx-auto dish-btn">
                <v-btn depressed width="120" color="#D9E5EC" class="text-capitalize card-body mx-2 rounded-t-xl pa-3 ma-2" active-class="bg-primary">Breakfast</v-btn>
                <v-btn depressed width="120" color="#D9E5EC" class="text-capitalize card-body mx-2 rounded-t-xl pa-3 ma-2" active-class="bg-primary">Launch</v-btn>
                <v-btn depressed width="120" color="#D9E5EC" class="text-capitalize card-body mx-2 rounded-t-xl pa-3 ma-2" active-class="bg-primary">Dinner</v-btn>
              </div>
              <div><v-icon class="rounded-lg">mdi-chevron-left</v-icon>
                <v-icon class="bg-primary white--text rounded-lg">mdi-chevron-right</v-icon></div>
            </v-row>

            <v-row class="my-8">
                <v-col lg="3" md="6" sm="12" justify="space-around" v-for="item in dish" :key="item.title">
                    <template>
                        <v-card flat outlined  color="#D9E5EC" class="card-body rounded-xl">
                          <v-img fab height="auto" width="auto" class=" mt-3 rounded-circle">
                            <img class="dish-img" :src="item.img"/>
                          </v-img>
                          <v-card-text class="subtitle-1 black--text">{{ item.title }}</v-card-text>
                          <v-rating v-model="item.rating" background-color="black" color="blue accent-4" dense size="15"></v-rating>
                          <v-card-text>{{ item.des }}</v-card-text>
                        </v-card>
                    </template>
                </v-col>
            </v-row>

        </div>

</v-container>
</template>

<script>
export default {
  data () {
    return {
      menue: [
        { icon: 'https://img.icons8.com/dotty/64/000000/eights.png', title: 'Pizza' },
        { icon: 'https://img.icons8.com/pastel-glyph/50/000000/hamburger.png', title: 'Burger' },
        { icon: 'https://img.icons8.com/ios-glyphs/50/000000/fried-chicken.png', title: 'Chicken' },
        { icon: 'https://img.icons8.com/pastel-glyph/50/000000/orange-soda--v3.png', title: 'Drink' },
        { icon: 'https://img.icons8.com/ios/50/000000/salad--v1.png', title: 'Salad' },
        { icon: 'https://img.icons8.com/wired/50/000000/baguette.png', title: 'Hotdog' }
      ],
      dish: [
        { img: 'pizza-1.jpg', title: 'Pizza', rating: 5, des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, amet!' },
        { img: 'burger-1.jpg', title: 'Burger', rating: 4, des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, amet!' },
        { img: 'fried-chicken.jpg', title: 'Fried-chicken', rating: 5, des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, amet!' },
        { img: 'fish-fry.jpg', title: 'Fish Fry', rating: 3, des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, amet!' }
      ]
    }
  }
}
</script>

<style>
.bg-primary{
    background-color: #FE5634;
}
.card-body {
    cursor: pointer;
}
.card-body:hover {
    background-color: #FE5634 !important;
}
.card-img {
    border: 10px solid #fff;
    background-color: #fff;
    border-radius: 50%;
}
.dish-btn {
  margin-left: 70%!important;
}
.dish-img {
  border-radius: 50%;
}

</style>
