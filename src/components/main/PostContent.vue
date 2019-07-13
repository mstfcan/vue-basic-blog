<template>
  <div>
    <SearchBox />
    <section class="col-lg-12 blg-posts">
      <div class="container">
        <div class="row">
            <PostItem v-for="item in list" :title="item.title.length>10?item.title.substr(0,10)+'...':item.title" category="Category" :content="item.body" date="May 20, 2018" :key="item.id"/>
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
import axios from 'axios'

export default {
  name: 'PostContent',
  components: {
    SearchBox,
    PostItem,
    Pagination
  },
  data () {
    return {
      list: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        this.list = response.data
      }).catch(e => {
        console.log(e)
      })
    }
  }
}

</script>
