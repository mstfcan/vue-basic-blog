<template>
  <div>
      <Header/>
      <PostContent/>
      <CommentContent/>
      <Footer/>
  </div>
</template>

<script>
import Header from './single-post/Header'
import PostContent from './single-post/PostContent'
import CommentContent from './comment/CommentContent'
import Footer from './global/Footer'
export default {
  components: {
    Header,
    PostContent,
    CommentContent,
    Footer
  }
}
</script>
