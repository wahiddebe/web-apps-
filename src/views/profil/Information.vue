<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Profile Setting<span class="ml-1 text-neutral300"
      >/ Account Information</span
    >
  </p>
  <div class="row">
    <div class="col-md-4">
      <div class="bg-white p-4_5 rounded-llg">
        <div class="rounded-llg bg-primary100 d-inline-block p-2_4 mb-4">
          <vsx-icon
            iconName="ProfileCircle"
            :size="32"
            type="bold"
            class="text-primary500"
          />
        </div>
        <h6 class="font-weight-semi-bold mb-1">General information</h6>
        <p class="font-size-14 text-neutral300">
          Provide information to display your photo profile, name & email. You
          can change photo and edit your profile credentials.
        </p>
      </div>
    </div>
    <div class="col-md-8">
      <div class="">
        <h6 class="font-size-24 font-weight-bold mb-4">Account Information</h6>
        <div class="bg-white rounded-llg p-4 mb-4">
          <div class="d-flex align-item-center">
            <div class="mr-4">
              <img
                src="/assets/img/user.png"
                width="100"
                height="100"
                class="img-fluid rounded-circle"
                alt=""
              />
            </div>
            <div class="align-self-center">
              <a href="#" class="btn btn-outline-neutral500 mb-2_4">
                <vsx-icon
                  iconName="Camera"
                  :size="20"
                  type="bold"
                  class="mr-2"
                />
                <span class="">Change Photo</span>
              </a>
              <p class="text-neutral300 font-size-12">
                Photo size can’t more than 10 MB in JPEG, JPG, PNG format
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-llg p-4">
          <div class="row">
            <div class="col-md-5">
              <div class="d-flex flex-column justify-content-center h-100">
                <h6 class="font-weight-semi-bold mb-1">Full Name</h6>
                <p class="text-neutral300 font-size-12">
                  This will be displayed as your name
                </p>
              </div>
            </div>
            <div class="col-md-7">
              <div class="form-group mb-0">
                <div class="form-group-default">
                  <label class="control-label" for="fullname">Fullname</label>
                  <input
                    type="text"
                    name="fullname"
                    class="input form-control"
                    id="fullname"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="line bg-neutral100 my-3"></div>
          <div class="row">
            <div class="col-md-5">
              <div class="d-flex flex-column justify-content-center h-100">
                <h6 class="font-weight-semi-bold mb-1">E-mail</h6>
                <p class="text-neutral300 font-size-12">
                  This is your login credential
                </p>
              </div>
            </div>
            <div class="col-md-7">
              <div class="form-group mb-0">
                <div class="form-group-default bg-neutral100">
                  <label class="control-label" for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="input form-control"
                    id="email"
                    value="johndoe@example.com"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="line bg-neutral100 my-3"></div>

          <div class="row">
            <div class="col-md-5">
              <div class="d-flex flex-column justify-content-center h-100">
                <h6 class="font-weight-semi-bold mb-1">QR Code</h6>
                <p class="text-neutral300 font-size-12">
                  This will be your scan credentials
                </p>
              </div>
            </div>
            <div class="col-md-7">
              <div
                type="button"
                data-toggle="modal"
                data-target="#exampleModalqr"
                class="font-size-14 d-inline-flex w-50 align-items-center font-weight-bold justify-content-center p-2_5 rounded-lg bg-white border border-neutral100"
              >
                <vsx-icon
                  iconName="ScanBarcode"
                  :size="20"
                  type="bold"
                  class="text-neutral500 mr-2"
                />
                Show QR
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
                  Save Changes
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
  };
</script>
