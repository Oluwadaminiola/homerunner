<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-0 pt-3">
      <div class="container">
        <a class="navbar-brand d-flex" href="/">
          <span>
            <img src="@/assets/img/logolow@3x.png" />
          </span>
          <span
            class="fs-15 ff-m fc-db border-left ml-lg-3 pl-lg-3 ml-2 pl-2 py-2 d-sm-flex d-none"
          >
            The future for living
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto py-0">
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/aboutus' }">
              <router-link class="nav-link" to="/aboutus">About Us</router-link>
            </li>
            <!-- <li class="nav-item" :class="{ active: $route.path == '/login' }">
              <router-link class="nav-link" to="login"
                >Login/Sign Up</router-link
              >
            </li> -->
            <li class="nav-item" :class="{ active: $route.path == '/partner' }">
              <router-link class="nav-link" to="/partner"
                >Become a Partner</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  mounted() {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 100) {
        $("nav.navbar").addClass("navchange");
      } else {
        $("nav.navbar").removeClass("navchange");
      }
    });
  },
};
</script>
<style scoped>
.nav-item.active{
  border-bottom: 4px solid #8CC04D;
}
.navbar-light {
  /* box-shadow: 0px 5px 5px #00000029; */
  background: transparent;
}
.navchange {
  box-shadow: 0px 5px 5px #00000029;
  background: #fff;
}
</style>