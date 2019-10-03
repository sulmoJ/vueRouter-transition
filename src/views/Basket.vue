<template>
  <div class="mainContainer">
    <router-link to="/">리마인드레터링</router-link>
    <hr />
    <div id="nav">
      <router-link to="/purchase">구매하기</router-link>|
      <router-link to="/review">고객후기</router-link>|
      <router-link to="/profile">프로필</router-link>|
      <router-link to="/basket">장바구니</router-link>
    </div>
    <hr />
    <h1>장바구니</h1>
    <HelloWorld msg="Main Page" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "basket",
  components: {}
};
</script>
<style>
.home {
  width: 40%;
  height: 1000px;
  border: solid 1px black;
}
</style>