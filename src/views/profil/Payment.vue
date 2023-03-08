<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Profile Setting<span class="ml-1 text-neutral300">/ Payment Method</span>
  </p>
  <div class="row">
    <div class="col-md-4">
      <div class="bg-white p-4_5 rounded-llg">
        <div class="rounded-llg bg-primary100 d-inline-block p-2_4 mb-4">
          <vsx-icon
            iconName="Crown1"
            :size="32"
            type="bold"
            class="text-primary500"
          />
        </div>
        <h6 class="font-weight-semi-bold mb-1">Payment Method</h6>
        <p class="font-size-14 text-neutral300">
          Information about your billing and payment method to do transaction.
        </p>
      </div>
    </div>
    <div class="col-md-8">
      <div class="">
        <h6 class="font-size-24 font-weight-bold mb-4">Payment Method</h6>
        <div class="bg-white rounded-llg p-4">
          <div class="w-100 d-flex justify-content-between">
            <div class="d-flex">
              <div
                class="py-2_4 px-2_4 border border-ede8e9 rounded-l d-inline mr-3"
              >
                <img
                  src="/assets/img/mastercard.svg"
                  height="14"
                  width="22.65"
                  alt=""
                />
              </div>
              <div class="d-flex flex-column align-self-center">
                <h6 class="font-weight-semi-bold mb-1">MasterCard **** 8328</h6>
                <p class="text-neutral300 font-size-12">Exp 06/25</p>
              </div>
            </div>
            <div class="align-self-center">
              <p class="text-neutral300 font-size-14 font-weight-bold">
                <vsx-icon
                  iconName="Forbidden"
                  :size="20"
                  type="bold"
                  class="mr-2"
                />

                <span class="align-middle">Remove</span>
              </p>
            </div>
          </div>
          <div class="line bg-neutral100 my-3"></div>
          <div class="w-100 d-flex justify-content-between">
            <div class="d-flex">
              <div
                class="py-2_4 px-2_4 border border-ede8e9 rounded-l d-inline mr-3"
              >
                <img
                  src="/assets/img/visa.svg"
                  height="14"
                  width="22.65"
                  alt=""
                />
              </div>
              <div class="d-flex flex-column align-self-center">
                <h6 class="font-weight-semi-bold mb-1">Visa **** 6634</h6>
                <p class="text-neutral300 font-size-12">Exp 03/24</p>
              </div>
            </div>
            <div class="align-self-center">
              <p class="text-neutral300 font-size-14 font-weight-bold">
                <vsx-icon
                  iconName="Forbidden"
                  :size="20"
                  type="bold"
                  class="mr-2"
                />

                <span class="align-middle">Remove</span>
              </p>
            </div>
          </div>
          <div class="line bg-neutral100 my-3"></div>

          <div class="row">
            <div class="col-md-5"></div>
            <div class="col-md-7">
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  class="btn btn-primary500 text-white w-50 rounded-l p-2_5 ml-2"
                >
                  <vsx-icon
                    iconName="Add"
                    :size="20"
                    type="bold"
                    class="mr-2"
                  />
                  <span class="align-middle">Add New Card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Add New Card -->
  <div
    class="modal fade"
    id="exampleModal"
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
          <form action="#" class="">
            <div class="form-group mb-2_4">
              <div class="form-group-default">
                <label class="control-label" for="namecard">Name on card</label>

                <input
                  type="text"
                  name="namecard"
                  class="input form-control"
                  id="namecard"
                />
              </div>
            </div>
            <div class="form-group mb-2_4">
              <div class="form-group-default">
                <label class="control-label" for="cardnumber"
                  >Card number</label
                >
                <div class="input-group" id="cardnumber-group">
                  <div class="input-group-prepend">
                    <div href="">
                      <img
                        src="/assets/img/mastercard.svg"
                        height="14"
                        width="22.65"
                        alt=""
                        class="mr-2_4 img-fluid"
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    id="cardnumber"
                    name="cardnumber"
                    class="input form-control"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="form-group mb-2_4">
                  <div class="form-group-default">
                    <label class="control-label" for="expired"
                      >Expired Date</label
                    >

                    <input
                      type="text"
                      name="expired"
                      class="input form-control"
                      id="expired"
                    />
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group mb-2_4">
                  <div class="form-group-default">
                    <label class="control-label" for="CVV">CVV</label>

                    <input
                      type="text"
                      name="CVV"
                      class="input form-control"
                      id="CVV"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div
          class="modal-footer justify-content-start border-top border-neutral200 px-4"
        >
          <button
            type="button"
            class="btn btn-block btn-primary500 text-white p-2_5"
            data-toggle="modal"
            data-target="#exampleModalqr"
          >
            Add Payment Method
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
