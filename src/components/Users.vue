<template>
    <div class="Users">
        <form v-on:submit="adduser">
            <label>Name</label><input type="text" v-model="newUser.name" placeholder="Enter">        
            <br/>
            <label>Email</label><input type="text" v-model="newUser.email" placeholder="Enter">        
            <br/>
            <input type="submit"  value = "Submit">
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model=user.contacted>
                <span v-bind:class="{contacted: user.contacted}">
                    {{user.name}} : {{user.email}} 
                    <button v-on:click="deleteUser(user)">Delete</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Users',
        props: {
        },
        data() {
            return{
                newUser: {},
                users: [
                ]
            }
        },
        methods: {
            adduser: function(e){
                e.preventDefault();
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                })
            },
            deleteUser: function(user){
                this.users.splice(this.users.indexOf(user),1);
            }
        },
        computed: {
        },
        created: function() {
            axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.users = response.data;
            })
            .catch(e => {
                //this.errors.push(e)
            })
        }
    }
</script>

<style>
    .contacted{
        text-decoration: line-through;
    }
</style>