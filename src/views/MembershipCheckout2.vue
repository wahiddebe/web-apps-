<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Membership<span class="ml-1 text-neutral300">/ Join and Checkout</span>
  </p>
  <div
    class="bg-white rounded-llg d-flex flex-column justify-content-center align-items-center"
    style="min-height: 75vh"
  >
    <img src="/assets/img/logo-large.svg" alt="" class="img-fluid mb-4" />
    <h5 class="font-size-24 font-weight-bold mb-2">
      Thank you for joining VIP!
    </h5>
    <p class="font-size-14 font-weight-medium text-neutral300 mb-4">
      We have sent you an email to johndoe@example.com. Check you confirmation
      receipt in your email!
    </p>

    <a
      href="/membership/checkoutstep3"
      class="btn btn-primary500 w-25 py-2_5 px-4 text-white"
      >See my membership</a
    >
  </div>
</template>

<script>
  import { vsxIcon } from "vue-iconsax";

  export default {
    // components: {
    //   vsxIcon,
    // },
    // data() {
    //   return {
    //     checkedperiod: false,
    //   };
    // },
    // props: ["iconName"],
  };
</script>
