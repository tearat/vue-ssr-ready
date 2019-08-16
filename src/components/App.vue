<template>
    <div id="app">
        <h1>Vue app</h1>
        <hr>
        <!-- <p>context: {{ context }}</p> -->
        <p>Url: {{ url }}</p>
        <p>vue test: {{ test }}</p>
        <p>counter: {{ counter }}</p>
        <button @click="counter++">+++</button>
        <button @click="sayHello">Hello</button>
        <hr>
        Router links:
        <router-link class="router-link" to="/">Index</router-link>
        <router-link class="router-link" to="/gallery">Gallery</router-link>
        <router-link class="router-link" to="/about">About</router-link>
        <hr>
        Router view: <router-view></router-view>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                test: "vue text",
                counter: 1
            }
        },
        methods: {
            sayHello() {
                window.alert('Hello');
            }
        }
    }

</script>

<style>

    .router-link {
        display: inline-block;
        padding: 5px 10px
    }

    .vue-page {
        border: 2px solid royalblue;
    }

</style>
