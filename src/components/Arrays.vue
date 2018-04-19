<template>
    <div class="Arrays">
        {{toString()}} <br>
        <input type="text" v-model="aValue"><br>
        <button v-on:click="push(aValue)">Push</button> <br>
        <button v-on:click="pop()">Pop</button><br>
    </div>
</template>

<script>
    export default {
        name: 'Arrays',
        data() {
            return {
                aValue: '',
                anArray: []
            }
        },
        methods: {
            push(value) {
                this.anArray.push(value);
            },
            pop() {
                this.anArray.pop();
            },
            toString() {
                return this.anArray.toString();
            }
        }
    }
</script>