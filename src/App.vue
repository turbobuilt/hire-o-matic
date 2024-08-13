<template>
    <v-app>
        <v-app-bar>
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
//
</script>
<style lang="scss">
.search-bar-container {
    display: flex;
    justify-content: center;
    padding: 45px 10px 45px;
    width: 100%;
    .search-bar {
        background: white;
        color: black;
        border-radius: 10px;
        padding: 10px;
        line-height: 1;
        max-width: 600px;
        width: 100%;
    }
}
</style>