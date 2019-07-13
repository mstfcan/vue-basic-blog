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
          <span>Ara</span>
          <span class="oi oi-magnifying-glass"></span>
        </div>
      </div>
    </nav>

    <Navbar />
  </div>
</template>

<script>
import Navbar from '../global/Navbar'

export default {
  name: 'Header',
  components: {
    Navbar
  }
}
</script>
