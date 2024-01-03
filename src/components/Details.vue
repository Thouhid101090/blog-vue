<template>
  <!-- Hero Area Start-->
   <div class="slider-area ">
      <div class="single-slider section-overly slider-height2 d-flex align-items-center" style="background:url(/assets/img/hero/about.jpg)">
          <div class="container">
              <div class="row">
                  <div class="col-xl-12">
                      <div class="hero-cap text-center">
                          <h2>Blog Details</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   </div>
   <!-- Hero Area End -->
   <!--================Blog Area =================-->
   <section class="blog_area single-post-area pt-3 ">
      <div class="container">
         <div class="row">
            <div class="col-lg-12 posts-list">
               <div class="single-post">
                  <div class="feature-img">
                     <img class="img-fluid" :src="blog.image" alt="">
                  </div>
                  <div class="blog_details">
                     <h2>{{blog.title}}</h2>
                     <i class="fa fa-user"></i>{{blog.author}}
                     <p class="excert">
                       {{blog.details}}
                     </p>
                  </div>
               </div>
               
               <div class="blog-author">
                  <div class="media align-items-center">
                     <img src="/assets/img/blog/author.png" alt="">
                     <div class="media-body">
                        <a href="#">
                           <h4>{{blog.author}}</h4>
                        </a>
                        <p>Second divided from form fish beast made. Every of seas all gathered use saying you're, he
                           our dominion twon Second divided from</p>
                     </div>
                  </div>
               </div>
              
            </div>
            
         </div>
      </div>
   </section>
   <!--================ Blog Area end =================-->
</template>

<script>
import DataService from "../services/DataService";
//import router from '@/router';
export default {
  name: 'Blogs',
  data() {
    return {
      blog:[]
    };
  },
  methods: {
    singleblog(id) {
       DataService.singleBlog(id)
        .then(response => {
          if(response.data)
            this.blog= response.data;
          else
            alert(response.data.error)
        })
        .catch(e => {
          console.log(e);
      });
    }
  }, mounted() {
    this.singleblog(this.$route.params.id);
  }
}
</script>
