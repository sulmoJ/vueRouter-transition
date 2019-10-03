<template>
    <div class="editProfile">
        <h1>프로필 수정 페이지</h1>
        <br>
        <router-link to="/profile/editProfile/withdrawal">회원탈퇴</router-link> | 
        <router-link to="/profile">뒤로</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .editProfile {
        z-index: 9998;
        width:319px;
        height: 1000px;
        background-color :white;
        border:solid 1px black;
        position: fixed;
    }
</style>