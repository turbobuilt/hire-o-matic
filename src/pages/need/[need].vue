<script lang="ts" setup>
import { reactive } from "vue"
import { mdiCheck } from "@mdi/js";


const d = reactive({
    search: ""
})
</script>
<template>
    <div class="need-page">
        <div class="search-bar-container">
            <input class="search-bar" v-model="d.search" placeholder="Who do you want?" />
        </div>
        <div class="needs">
            <v-card>
                <div class="card-body">
                    <img height="400px" src="/programmer.jpeg" />
                    <div class="body">
                        <h2 class="need">John Doe</h2>
                        <div class="text">
                            <div class="badge">
                                <svg width="24" height="24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16l-5-5 1.41-1.41L10 15.17l7.59-7.59L19 9l-9 9z"></path>
                                </svg>
                                <!-- <v-icon :icon="mdiCheck" color="green"></v-icon> -->
                                <span>Verified</span>
                            </div>
                            <div class="projects-completed">5 projects completed with positive feedback</div>
                            <div class="description">
                                <div>Hi, I'm John Doe</div>
                                <div>I'm an expert at front end, back end, and the whole nine yards.</div>
                                <div>I've been coding for 10 years, and I love to help people build amazing projects.</div>
                                <div>I'm kind of a geek, but don't let that fool you. I know how to communciate in both verbal and written form, so you can rest assured, I won't take advantage of you, and you can know what you are getting.</div>
                                <!-- <div>Get started today!</div> -->
                            </div>
                        </div>
                        <v-btn color="primary">Contact</v-btn>
                    </div>
                </div>
            </v-card>
        </div>
    </div>
</template>
<style lang="scss">
.need-page {
    padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
        flex-grow: 1;
    }
    .description {
        margin-top: 10px;
        > div {
            margin-top: 8px;
            line-height: 1.4;
        }
    }
    .projects-completed {
        margin-top: 15px;
        font-weight: bold;
    }
    .badge {
        user-select: none;
        margin-top: 10px;
        border-radius: 4px;
        border: 2px solid rgb(115, 115, 115);
        background: rgb(57, 57, 57);
        line-height: 1;
        display: inline-flex;
        align-items: center;
        padding: 4px 6px;
        font-size: 16px;
        svg {
            margin-right: 5px;
        }
    }
    .body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .card-body {
        padding: 25px;
        display: flex;
        // .body {
        //     >div {
        //         margin-top: 10px;
        //     }
        // }
        img {
            margin-right: 25px;
        }
        .need {
            flex-grow: 0;
        }
    }
    .needs {
        // margin: 10px;
        width: 100%;
        max-width: 1024px;
    }
}
</style>