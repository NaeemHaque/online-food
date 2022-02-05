<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class=" white--text "
      color="#FE6344"
      width="100%"
    >
      <v-card-text class="text-center">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 white--text "
          fab
          outlined
          icon
          small
        >
          <v-icon>
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
          <v-row>
            <v-col cols="12" lg="3" md="6" sm="12">
                <h2>FOOD ORDERING</h2>
                <v-divider></v-divider>
                <v-list dense  color="#FE6344">
                    <v-list-item-group>
                        <v-list-item
                        v-for="(item, i) in items1"
                        :key="i"
                        >
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="12">
                <h2>RESTAURANT SERVICES</h2>
                <v-divider></v-divider>
                <v-list dense  color="#FE6344">
                    <v-list-item-group>
                        <v-list-item
                        v-for="(item, i) in items2"
                        :key="i"
                        >
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="12">
                <h2>MARKETING & SALES</h2>
                <v-divider></v-divider>
                <v-list dense  color="#FE6344">
                    <v-list-item-group>
                        <v-list-item
                        v-for="(item, i) in items3"
                        :key="i"
                        >
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="12" lg="3" md="6" sm="12">
                <h2>PARTNER & SUPPORT</h2>
                <v-divider></v-divider>
                <v-list dense  color="#FE6344">
                    <v-list-item-group>
                        <v-list-item
                        v-for="(item, i) in items4"
                        :key="i"
                        >
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
          </v-row>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Naeem Haque</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ],
    items1: [
      { text: 'Overview' },
      { text: 'Website Ordering' },
      { text: 'Facebook Ordering' },
      { text: 'Mobile Apps' }
    ],
    items2: [
      { text: 'Table Reservations' },
      { text: 'Pre-order food' },
      { text: 'Food for Takeaway' },
      { text: 'Food Delivery' }
    ],
    items3: [
      { text: 'Restaurant Receipt Template' },
      { text: 'Promotions Engine' },
      { text: 'Website Generator' },
      { text: 'How To Sell' }
    ],
    items4: [
      { text: 'Partner Program' },
      { text: 'Ordering API' },
      { text: 'FAQ' },
      { text: 'Reviews' }
    ]
  })
}
</script>
