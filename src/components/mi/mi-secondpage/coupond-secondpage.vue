<template>
    <div>
        <van-coupon-cell
        />
        <div class="heeh" @click="handleclick">12</div>
    </div>
</template>
<script>
export default {
    methods: {
        handleclick(){
            this.$router.go(-1);
        }
    },
}
</script>