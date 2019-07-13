<template>
  <div class="blg-bg-dark">
    <nav class="pad-lr-y5 navbar navbar-light">
      <div class="blg-header col-lg-12">
        <div class="blg-logo">
          <a href="#">
            <img class="img-fluid" src="../../assets/img/logo.svg" />
          </a>
        </div>
        <div class="blg-top-search">
          <div class="top-search-box">
            <input type="text" placeholder="Search..." />
            <span class="oi oi-magnifying-glass"></span>
          </div>
        </div>
      </div>
    </nav>

    <Navbar />

    <Slider />
  </div>
</template>

<script>
import Navbar from './Navbar'
import Slider from '../main/Slider'

export default {
  name: 'Header',
  components: {
    Navbar,
    Slider
  }
}
</script>

<style>
.top-search-box {
  border-bottom: 1px solid #aaa;
}
.top-search-box input{
  border:none;
  background-color: transparent;
  color:#aaa;
}
.top-search-box input:focus{
  box-shadow: none;
  border: none;
  outline: none;
}
.top-search-box input::placeholder {
  color: #aaa;
}
</style>
