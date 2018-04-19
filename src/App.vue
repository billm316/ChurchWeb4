<template>
  <div id="app">
    <!--img src="./assets/logo.png"-->
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
      <li><router-link to="/users">Users</router-link></li>
      <li><router-link to="/Arrays">Arrays</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import Test from './components/Test'
import Users from './components/Users'
import Arrays from './components/Arrays'

export default {
  name: 'App',
  components: {
    Test, Users, Arrays
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
