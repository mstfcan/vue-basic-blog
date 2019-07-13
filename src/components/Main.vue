<template>
  <div>
      <Header/>
      <PostContent/>
      <TopPosts/>
      <Footer/>
  </div>
</template>

<script>
import Header from './global/Header'
import PostContent from './main/PostContent'
import TopPosts from './global/TopPosts'
import Footer from './global/Footer'
import Slider from './main/Slider'

export default {
  name: 'Main',
  components: {
    Header,
    Slider,
    PostContent,
    TopPosts,
    Footer
  }
}
</script>
