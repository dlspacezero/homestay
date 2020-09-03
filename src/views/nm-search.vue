<template>
<div class="nm-search">
    <!-- 头部导航 -->
<Header />
<Select />
<Content />
  </div>
</template>

<script>
import { Toast } from 'vant';
import Header from '../components/nm/nm-search-header'
import Select from '../components/nm/nm-search-select'
import Content from '../components/nm/nm-search-content'
export default {
  data() {
    return {
      
    };
  },

  components: {
      Header,
      Select,
      Content
  },

  computed: {},

  mounted() {},

  methods: {
  
    
  }
};
</script>
<style lang='scss' scoped>

.nm-search{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // 头部搜索
    
}
</style>
