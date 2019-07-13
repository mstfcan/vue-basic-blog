<template>
  <div>
      <Header/>
      <PostContent/>
      <TopPosts/>
      <CommentContent/>
      <Footer/>
  </div>
</template>

<script>
import Header from './single-post/Header'
import PostContent from './single-post/PostContent'
import TopPosts from './global/TopPosts'
import CommentContent from './comment/CommentContent'
import Footer from './global/Footer'
export default {
  components: {
    Header,
    PostContent,
    TopPosts,
    CommentContent,
    Footer
  }
}
</script>
