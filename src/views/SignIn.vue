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
        class="rounded-xl h-100 bg-white px-4_5 pt-4_5 pb-4 d-flex flex-column"
      >
        <div class="pt-3 mb-4_5">
          <h6 class="font-size-24 font-weight-bold text-center">
            Let’s get you Sign In!
          </h6>
          <p
            class="font-wieght-medium font-size-14 text-neutral300 text-center"
          >
            Input your email and password or enter with Google
          </p>
        </div>
        <div class="pt-4_5">
          <form action="#" class="w-100">
            <div class="form-group mb-2_4">
              <div
                :class="emailErr ? 'border-danger' : ''"
                class="form-group-default"
              >
                <label class="control-label" for="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  class="input form-control"
                />
              </div>
              <p
                v-if="emailErr"
                class="text-danger font-size-14 font-weight-medium mt-1"
              >
                Email you’ve entered doesn’t registered in DVG
              </p>
            </div>
            <div class="form-group mb-2_4">
              <div
                :class="passErr ? 'border-danger' : ''"
                class="form-group-default"
              >
                <label class="control-label" for="password">Password</label>
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
              <p
                v-if="passErr"
                class="text-danger font-size-14 font-weight-medium mt-1"
              >
                Wrong Password!
              </p>
            </div>
            <a
              href="/forgot"
              class="font-size-14 font-weight-bold d-block text-right text-primary500"
            >
              Forgot Password ?</a
            >
            <div
              type="button"
              @click="cekerror"
              class="btn btn-block btn-primary500 text-white p-2_5 mt-4"
            >
              Sign in
            </div>
          </form>
        </div>
        <p
          class="text-center text-neutral300 font-weight-medium font-size-14 mt-auto"
        >
          Don’t have an account?<span class="ml-2">
            <a class="text-primary500 font-weight-bold" href="/register"
              >Register</a
            >
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
        emailErr: false,
        passErr: false,
        showPassword: false,
        password: null,
      };
    },
    methods: {
      showpass() {
        this.showPassword = !this.showPassword;
      },
      cekerror() {
        this.emailErr = !this.emailErr;
        this.passErr = !this.passErr;
      },
    },
  };
</script>
