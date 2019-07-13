<template>
  <div class="col-lg-4 blg-post">
    <div class="col-lg-12">
      <div class="blg-post-image">
        <a href="#">
          <img class="img-fluid" src="../../assets/img/one.png" />
        </a>
      </div>
      <div class="blg-post-text">
        <span>{{date}}</span>
        <a href="#">
          <h1>{{ title }}</h1>
        </a>
        <p>{{ content }}</p>
        <a href="#">{{category}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
}
</script>
