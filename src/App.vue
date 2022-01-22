<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link> |
      <router-link to="/dataBiding">
        DataBinding
      </router-link> |
      <router-link to="/methods">
        Methods
      </router-link> |
      <router-link to="/watch">
        Watch
      </router-link>
    </div>
    <div id="nav1">
      <router-link to="/watchVsComputed">
        WatchVsComputed
      </router-link> |
      <router-link to="/computedUsage">
        ComputedUsage
      </router-link> |
      <router-link to="/exampleApp">
        ExampleApp
      </router-link> |
      <router-link to="/appBody">
        AppBody
      </router-link> |
      <router-link to="/formView">
        FormView
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav1 {
  padding: 30px;
}

#nav1 a {
  font-weight: bold;
  color: #2c3e50;
}

#nav1 a.router-link-exact-active {
  color: #42b983;
}
</style>
