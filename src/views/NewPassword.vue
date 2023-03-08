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
        <h6 class="font-size-24 font-weight-bold mb-1">Create New Password</h6>
        <p class="text-neutral300 font-weight-medium font-size-14">
          Enter your new password to recover your account
        </p>
      </div>
      <form action="#" class="w-100">
        <div class="form-group mb-2_4">
          <div class="form-group-default">
            <label class="control-label" for="password">New Password</label>
            <div class="input-group" id="password-group">
              <input
                v-if="showPassword"
                type="text"
                name="Password"
                class="input form-control mb-0 position-relative w-auto"
                v-model="password"
                id="password"
              />
              <input
                v-else
                type="password"
                name="Password"
                class="input form-control mb-0 position-relative w-auto"
                v-model="password"
                id="password"
              />
              <div class="input-group-addon">
                <div href="" @click="showpass">
                  <vsx-icon
                    :iconName="showPassword ? 'EyeSlash' : 'Eye'"
                    :size="20"
                    type="linear"
                    class="ml-1 text-neutral500 Eye"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group mb-2_4">
          <div class="form-group-default">
            <label class="control-label" for="password2"
              >Confirm New Password</label
            >
            <div class="input-group" id="password2-group">
              <input
                v-if="showPassword2"
                type="text"
                id="password2"
                name="Password"
                class="input form-control mb-0 position-relative w-auto"
                v-model="password2"
              />
              <input
                v-else
                type="password"
                id="password2"
                name="Password"
                class="input form-control mb-0 position-relative w-auto"
                v-model="password2"
              />
              <div class="input-group-addon">
                <div href="" @click="showpass2">
                  <vsx-icon
                    :iconName="showPassword2 ? 'EyeSlash' : 'Eye'"
                    :size="20"
                    type="linear"
                    class="ml-1 text-neutral500 Eye"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-1">
          <p class="text-neutral300 font-size-14 mb-2">
            <span class="mr-2">
              <vsx-icon
                iconName="TickCircle"
                :size="20"
                type="bold"
                class="ml-1 text-neutral200"
              /> </span
            >Password must be at least 8 character
          </p>
          <p class="text-neutral300 font-size-14 mb-2">
            <span class="mr-2">
              <vsx-icon
                iconName="TickCircle"
                :size="20"
                type="bold"
                class="ml-1 text-neutral200"
              /> </span
            >Password must contain 1 character, 1 number and 1 simbol.
          </p>
          <p class="text-neutral300 font-size-14 mb-2">
            <span class="mr-2">
              <vsx-icon
                iconName="TickCircle"
                :size="20"
                type="bold"
                class="ml-1 text-neutral200"
              /> </span
            >Password match
          </p>
        </div>
        <div
          type="button"
          class="btn btn-block btn-primary500 text-white p-2_5 mt-5"
        >
          Create New Password
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
    data() {
      return {
        showPassword: false,
        showPassword2: false,
        password: "",
        password2: "",
      };
    },
    // computed: {
    //   buttonLabel() {
    //     return this.showPassword ? "Hide" : "Show";
    //   },
    // },
    methods: {
      showpass() {
        this.showPassword = !this.showPassword;
      },
      showpass2() {
        this.showPassword2 = !this.showPassword2;
      },
    },
  };
</script>
