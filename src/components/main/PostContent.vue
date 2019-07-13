<template>
  <div>
    <SearchBox />
    <section class="col-lg-12 blg-posts">
      <div class="container">
        <div class="row">
          <PostItem />
        </div>
      </div>

      <Pagination/>
    </section>
  </div>
</template>
<script>
import SearchBox from './SearchBox'
import PostItem from './PostItem'
import Pagination from '../global/Pagination'
export default {
  name: 'PostContent',
  components: {
    SearchBox,
    PostItem,
    Pagination
  }
}
</script>
