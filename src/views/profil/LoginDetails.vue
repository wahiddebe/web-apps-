<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Profile Setting<span class="ml-1 text-neutral300">/ Login Details</span>
  </p>
  <div class="row">
    <div class="col-md-4">
      <div class="bg-white p-4_5 rounded-llg">
        <div class="rounded-llg bg-primary100 d-inline-block p-2_4 mb-4">
          <vsx-icon
            iconName="ShieldSecurity"
            :size="32"
            type="bold"
            class="text-primary500"
          />
        </div>
        <h6 class="font-weight-semi-bold mb-1">Login Details</h6>
        <p class="font-size-14 text-neutral300">
          Information about your password. You can also changes your current
          password into new password.
        </p>
      </div>
    </div>
    <div class="col-md-8">
      <div class="">
        <h6 class="font-size-24 font-weight-bold mb-4">Changes Password</h6>
        <div class="bg-white rounded-llg p-4">
          <div class="row">
            <div class="col-md-5">
              <div class="d-flex flex-column justify-content-center h-100">
                <h6 class="font-weight-semi-bold mb-1">Current Password</h6>
                <p class="text-neutral300 font-size-12">
                  This is your current password
                </p>
              </div>
            </div>
            <div class="col-md-7">
              <div class="form-group mb-0">
                <div class="form-group-default">
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
              </div>
            </div>
          </div>
          <div class="line bg-neutral100 my-3"></div>
          <div class="row">
            <div class="col-md-5">
              <div class="d-flex flex-column justify-content-center h-100">
                <h6 class="font-weight-semi-bold mb-1">New Password</h6>
                <p class="text-neutral300 font-size-12">
                  Enter your new password
                </p>
              </div>
            </div>
            <div class="col-md-7">
              <div class="form-group mb-0">
                <div class="form-group-default">
                  <label class="control-label" for="password2"
                    >New Password</label
                  >
                  <div class="input-group" id="password2-group">
                    <input
                      v-if="showPassword2"
                      type="text"
                      name="Password2"
                      class="input form-control mb-0 position-relative w-auto"
                      v-model="password2"
                      id="password2"
                    />
                    <input
                      v-else
                      type="password"
                      name="Password2"
                      class="input form-control mb-0 position-relative w-auto"
                      v-model="password2"
                      id="password2"
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
            </div>
          </div>
          <div class="line bg-neutral100 my-3"></div>
          <div class="row">
            <div class="col-md-5">
              <div class="d-flex flex-column justify-content-center h-100">
                <h6 class="font-weight-semi-bold mb-1">Confirm New Password</h6>
                <p class="text-neutral300 font-size-12">
                  Enter your new password again
                </p>
              </div>
            </div>
            <div class="col-md-7">
              <div class="form-group mb-0">
                <div class="form-group-default">
                  <label class="control-label" for="password3"
                    >Confirm New Password</label
                  >
                  <div class="input-group" id="password3-group">
                    <input
                      v-if="showPassword3"
                      type="text"
                      name="Password3"
                      class="input form-control mb-0 position-relative w-auto"
                      v-model="password3"
                      id="password3"
                    />
                    <input
                      v-else
                      type="password"
                      name="Password3"
                      class="input form-control mb-0 position-relative w-auto"
                      v-model="password3"
                      id="password3"
                    />
                    <div class="input-group-addon">
                      <div href="" @click="showpass3">
                        <vsx-icon
                          :iconName="showPassword3 ? 'EyeSlash' : 'Eye'"
                          :size="20"
                          type="linear"
                          class="ml-1 text-neutral500 Eye"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="line bg-neutral100 my-3"></div>
          <div class="row">
            <div class="col-md-5"></div>
            <div class="col-md-7">
              <div class="d-flex justify-content-between">
                <button
                  class="btn btn-white border-neutral100 w-50 rounded-l p-2_5 mr-2"
                >
                  Cancel
                </button>
                <button
                  class="btn btn-primary500 text-white w-50 rounded-l p-2_5 ml-2"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal QR-->
  <div
    class="modal fade"
    id="exampleModalqr"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-llg border-0">
        <div
          class="modal-header position-relative border-bottom border-neutral200 px-4"
        >
          <button
            type="button"
            class="close position-absolute px-0"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#2c3131"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.16748 4.1665L15.8334 15.8324"
                  stroke="#2c3131"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.16664 15.8324L15.8325 4.1665"
                  stroke="#2c3131"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>

          <h5
            class="modal-title font-size-14 font-weight-bold text-center w-100"
            id="exampleModalLabel"
          >
            Show QR
          </h5>
        </div>
        <div class="modal-body p-4">
          <div class="text-center p-4 bg-fafafa mb-4">
            <img
              src="/assets/img/user.png"
              class="mb-3 rounded-circle"
              alt=""
            />
            <h6 class="font-size-24 mb-0">John Doe</h6>
            <a href="" class="text-neutral300">Johndoe.gans@gmail.com</a>
          </div>
          <div class="text-center">
            <img src="/assets/img/QR.svg" alt="" class="img-fluid" />
          </div>
        </div>
        <div
          class="modal-footer justify-content-start border-top border-neutral200 px-4"
        >
          <button
            type="button"
            class="btn btn-block btn-primary500 text-white p-2_5"
          >
            Done
          </button>
        </div>
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
        showPassword3: false,
        password: "",
        password2: "",
        password3: "",
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
      showpass3() {
        this.showPassword3 = !this.showPassword3;
      },
    },
  };
</script>
