<template>
  <div class="row">
    <div class="col-md-7">
      <div class="">
        <img
          src="/assets/img/Illustration.png"
          alt=""
          class="img-fluid rounded-xl"
        />
      </div>
    </div>
    <div class="col-md-5">
      <div
        class="rounded-xl h-100 bg-white px-4 pt-4_5 pb-4 d-flex flex-column"
      >
        <div class="mb-4">
          <h6 class="font-size-24 font-weight-bold text-center">
            Join Degree VIP Club Now!
          </h6>
          <p
            class="font-wieght-medium font-size-14 text-neutral300 text-center"
          >
            Create your account to join with us!
          </p>
        </div>
        <div class="">
          <form action="#" class="w-100">
            <div class="form-group mb-2_4">
              <div class="form-group-default">
                <label class="control-label" for="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  class="input form-control"
                />
              </div>
            </div>
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
              class="btn btn-block btn-primary500 text-white p-2_5 mt-4 mb-2"
            >
              Continue
            </div>
          </form>
        </div>
        <p
          class="text-center text-neutral300 font-weight-medium font-size-14 mt-auto"
        >
          Already have an account?<span class="ml-2">
            <a class="text-primary500 font-weight-bold" href="">Sign In</a>
          </span>
        </p>
      </div>
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
