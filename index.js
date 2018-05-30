import Vue from 'vue';
import TreeView from './src/TreeView.vue';

new Vue({
    el: '#container',
    components: {
      TreeView
    },
    data() {
        return {
          sampleJSON: {"testArray": ["http://www.google.com", "in a Test Array", 0, 1, true, false], "component":"vue-json-tree-view","descripton":"A JSON Tree View built in Vue.js","tags":[{"name":"vue.js"},{"name":"JSON"}],"steps":["HTML Template","Root Component","View Component",{"Transformation Logic":["Transform Objects","Transform Arrays","Transform Values"]},"Animate","Allow Options","Blog about it..."]},
          sampleJSONString: "http://www.google.com",
          sampleJSONArray: ["http://www.google.com", "in a Test Array", 0, 1, true, false],
        };
    },
    methods: {
      onChangeData: function(data) {
        this.sampleJSON = data
      }
    },
    watch: {
      sampleJSON: function() {
        console.log('updated sampleJSON')
      }
    }
});
