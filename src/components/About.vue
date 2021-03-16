<template>
    <v-container class="bg-cl mt-10">
        <h1 class="ma-5"><strong>Why We Are The Best?</strong></h1>
        <v-img right src="chef.png" >
            <v-sheet style="background: none;">
                <v-card flat hover width="300" class="mx-9 my-2 pa-3 sheet-div">
                    <v-card-title>Fresh Food</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laboriosam!</v-card-text>
                </v-card>
                <v-card flat width="300" class="mx-9 my-3 pa-3 sheet-div">
                    <v-card-title>Fast Delivery</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laboriosam!</v-card-text>
                </v-card>
                <v-card flat width="300" class="mx-9 my-2 pa-3 sheet-div">
                    <v-card-title>Quality Maintain</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, laboriosam!</v-card-text>
                </v-card>
            </v-sheet>
        </v-img>
    </v-container>
</template>

<style scopped>
.bg-cl {
    background-color: #D9E5EC;
}
.sheet-div {
    background-color: #cfdde6 !important;
    opacity: 0.8;
}
</style>
