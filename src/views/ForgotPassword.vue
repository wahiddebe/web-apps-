<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Login<span class="ml-1 text-neutral300">/ Forgot Password</span>
  </p>

  <div class="d-flex justify-content-center h-100 pb-4">
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
        <h6 class="font-size-24 font-weight-bold mb-1">Lost your Password?</h6>
        <p class="text-neutral300 font-weight-medium font-size-14">
          Enter your email to recover your password
        </p>
      </div>
      <form action="#" class="w-100">
        <div class="form-group mb-2_4">
          <div class="form-group-default">
            <label class="control-label" for="email">Email</label>
            <input
              type="text"
              name="Email"
              class="input form-control"
              id="email"
            />
          </div>
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
