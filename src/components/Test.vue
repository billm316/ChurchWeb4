<template>
    <div class="Test">
        <p v-text="title"/>
        <p v-if="showName" v-text="user.firstName"/>
        <p v-else>Nobody</p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <button v-on:click="greet('hello world')">Say greeting</button>
        <input type="text" v-on:keyup="keyup" v-on:keyup.enter="submitInput"/>
        <input type="text" v-model="user.firstName"/>
        <input type="text" v-model="user.lastName"/>
        <p>{{fullname}}</p>
        <h2>{{msg}}</h2>
        
    </div>
</template>

<script>
    export default {
        name: 'Test',
        props: {
            msg:{
                default: 'not defined'
            }
        },
        data() {
            return {
                title: 'Hello World',
                user: {
                    firstName: 'John',
                    lastName: 'Doe'
                },
                showName: true,
                items: [
                    {title: 'Item one'},
                    {title: 'Item two'},
                ]
            }
        },
        methods: {
            greet: function(greeting) {
                alert(greeting);
            },
            keyup: function(e) {
                console.log(e.target.value);
            },
            submitInput: function(e) {
                console.log(e.target.value + '[submitted]');
            }
        },
        computed: {
            fullname: function() {
                return this.user.firstName + ' ' + this.user.lastName;
            }
        }
    }
</script>

<style>

</style>