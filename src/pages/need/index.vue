<script lang="ts" setup>
import { computed, reactive } from "vue"
// import needs from "./needs.json";

const d = reactive({
    search: ""
})

const needs = reactive([
    { title: "App Development", showCategories: false },
    { title: "Medical Issue" },
    { title: "Legal Help" },
    { title: "Financial Advice" },
    { title: "Home Repair" },
    { title: "Car Repair" },
    { title: "Clothing" },
    { title: "Furniture" },
    { title: "Appliances" },
    { title: "Electronics" },
    { title: "Education" },
    { title: "Employment" },
    { title: "Childcare" },
    { title: "Pet Care" },
    { title: "Cleaning" },
    { title: "Yard Work" },
    { title: "Moving" },
    { title: "Other" }
]);

const needsFiltered = computed(() => {
    return needs.filter(need => need.title.toLowerCase().includes(d.search.toLowerCase()))
})

function camelCase(str) {
    return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, "").replace(/ /g, "-").replace(/--/g, "-");
}

</script>
<template>
    <div class="need-list-page">
        <div class="search-bar-container">
            <input class="search-bar" v-model="d.search" placeholder="What do you need?" />
        </div>
        <div class="needs-list">
            <v-card v-for="need of needsFiltered" :key="need.title" class="need-item"   @click="need.showCategories = !need.showCategories" light>
                <!-- <v-img height="200px" :src="`/needs/${need.title.replace('/','-')}.jpg`"></v-img> -->
                <div class="category-image" :style="{ backgroundImage: `url('/needs/${need.title.replace('/','-')}.jpg')`, 'flex-grow': 1 }"></div>
                <v-card-title class="need-item-title">{{ need.title }}</v-card-title>
                <div class="categories" @click.stop="need.showCategories = !need.showCategories" v-if="need.showCategories">
                    <v-btn @click.stop>Design</v-btn>
                    <v-btn :to="`/need/${camelCase(need.title)}`">Engineering</v-btn>
                </div>
            </v-card>
        </div>
    </div>
</template>
<style lang="scss">
.need-list-page {
    padding: 15px;
    padding-top: 0;
    .category-image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .v-card {
        position: relative;
        height: 250px;
        background-size: cover;
        display: flex;
        flex-direction: column;
        background: white;
        .v-card-title {
            // background: rgba(0,0,0,.4);
            // color: white;
            color: black;
            font-size: 20px;
            font-weight: bold;
            padding: 10px;
        }
    }
    .need-item-title {
        user-select: none;
    }
    .categories {
        user-select: none;
        background: rgba(0,0,0,.4);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        padding: 10px;
        z-index: 10;
        > .v-btn {
            padding: 5px;
            color: white;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }
    .needs-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        .need-item {
            transition: .1s all;
            cursor: pointer;
            &:hover {
                // box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
            }
        }
    }
}
</style>