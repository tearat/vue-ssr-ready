<template>
    <div id="app">
        <h1>Vue app</h1>
        <p>vue test: {{ test }}</p>
        <p>counter: {{ counter }}</p>
        <button @click="counter++">+++</button>
        <button @click="sayHello">Hello</button>
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
</style>
