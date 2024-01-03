<template>
   <!-- Categories Section Begin -->
    <section class="categories categories-grid spad">
        <div class="categories__post">
            <div class="container">
                <div class="categories__grid__post">
                    <div class="row">
                        <div class="col-lg-8 col-md-8">
                            <div class="breadcrumb__text">
                                <h2>Categories: <span>Recipes</span></h2>
                                <div class="breadcrumb__option">
                                    <a href="#">Home</a>
                                    <span>Recipes</span>
                                </div>
                            </div>
                            <div class="categories__list__post__item" v-for="post in posts" :key="post.id">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="categories__post__item__pic set-bg">
                                            <img :src="post.image">
                                            <div class="post__meta">
                                                <h4>{{post.day}}</h4>
                                                <span>{{post.month}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6">
                                        <div class="categories__post__item__text">
                                            <span class="post__label">Recipe</span>
                                            <h3>
                                            <router-link :to="'/blog/' + post.id" >{{post.title}}</router-link></h3>
                                           
                                            <ul class="post__widget">
                                                <li>by <span>Admin</span></li>
                                                <li>3 min read</li>
                                                <li>20 Comment</li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                gravida...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="categories__pagination">
                                        <a href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <a href="#">Next</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4">
                            <div class="sidebar__item">
                                
                                <div class="sidebar__item__banner">
                                    <img src="img/sidebar/banner.jpg" alt="">
                                </div>
                                <div class="sidebar__item__categories">
                                    <div class="sidebar__item__title">
                                        <h6>Categories</h6>
                                    </div>
                                    <ul>
                                        <li v-for="cat in categories" :key="cat.id">
                                        <a href="#" @click="categorypost(cat.id)">{{cat.name}}</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="sidebar__subscribe__item">
                                    <div class="sidebar__item__title">
                                        <h6>Subscribe</h6>
                                    </div>
                                    <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                                    <form action="#">
                                        <input type="text" class="email-input" placeholder="Your email">
                                        <label for="s-agree-check">
                                            I agree to the terms & conditions
                                            <input type="checkbox" id="s-agree-check">
                                            <span class="checkmark"></span>
                                        </label>
                                        <button type="submit" class="site-btn">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Categories Section End -->

</template>
<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'Category',
  data() {
    return {
      posts:[],
      categories:[]
    };
  },
  methods: {
    categorypost(id) {
       DataService.categorypost(id)
        .then(response => {
            this.posts=new Array();
          if(response.data)
            this.posts= response.data;
        })
        .catch(e => {
          console.log(e);
      });
    },
    allcategory() {
       DataService.category()
        .then(response => {
          if(response.data)
            this.categories= response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    }
  }, mounted() {
    this.categorypost(this.$route.params.id);
    this.allcategory();
  }
}
</script>
