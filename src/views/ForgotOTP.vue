<template>
  <div class="d-flex justify-content-center h-100">
    <div
      class="bg-white p-4_5 rounded-xl d-flex flex-column align-items-center w-50"
    >
      <div class="d-inline-flex mb-5 p-4 bg-primary100 rounded-l">
        <vsx-icon
          iconName="Key"
          :size="32"
          type="bold"
          class="ml-1 text-neutral500 Eye"
        />
      </div>
      <div class="text-center mb-5">
        <h6 class="font-size-24 font-weight-bold mb-1">OTP Verification</h6>
        <p class="text-neutral300 font-weight-medium font-size-14">
          Please enter OTP code that we have sent to your email
        </p>
      </div>
      <form action="#" class="w-100">
        <div class="form-group mb-2_4">
          <div class="d-flex flex-row justify-content-between">
            <input
              type="text"
              name="otp"
              class="input form-control text-center otp"
              maxlength="1"
            />
            <input
              type="text"
              name="otp"
              class="input form-control text-center otp"
              maxlength="1"
            />
            <input
              type="text"
              name="otp"
              class="input form-control text-center otp"
              maxlength="1"
            />
            <input
              type="text"
              name="otp"
              class="input form-control text-center otp"
              maxlength="1"
            />
            <input
              type="text"
              name="otp"
              class="input form-control text-center otp"
              maxlength="1"
            />
            <input
              type="text"
              name="otp"
              class="input form-control text-center otp"
              maxlength="1"
            />
          </div>
        </div>
        <div class="text-right">
          <a href="#" class="font-size-14 text-neutral300">Resend</a>
        </div>
        <div
          type="button"
          class="btn btn-block btn-primary500 text-white p-2_5 mt-4"
        >
          Confirm
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  import { vsxIcon } from "vue-iconsax";

  export default {
    components: {
      vsxIcon,
    },
    props: ["iconName"],
  };
</script>
