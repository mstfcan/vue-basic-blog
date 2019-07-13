<template>
  <section class="col-lg-12 blg-sp-comments">
    <div class="container">
      <CommentList/>
      <Pagination/>
      <CommentForm/>
    </div>
  </section>
</template>
<script>
import CommentList from './CommentList'
import Pagination from '../global/Pagination'
import CommentForm from './CommentForm'
export default {
  components: {
    CommentList,
    Pagination,
    CommentForm
  }
}
</script>
