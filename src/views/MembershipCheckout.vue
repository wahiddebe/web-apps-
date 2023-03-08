<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Membership<span class="ml-1 text-neutral300">/ Join and Checkout</span>
  </p>
  <div class="mb-4">
    <h6 class="font-size-24 font-weight-bold">Join to VIP Platinum</h6>
  </div>
  <div class="row">
    <div class="col-md-8">
      <div class="rounded-llg bg-white border border-neutral100 pt-4 pb-3">
        <div
          class="pb-3 px-4 border-bottom border-neutral100 d-flex justify-content-between"
        >
          <div class="font-weight-bold font-size-18 align-self-end">
            <p>Bill Yearly</p>
          </div>
          <div class="font-weight-medium font-size-24">
            <p>
              Rp 60.000<span class="font-size-18 text-neutral300 align-middle">
                /month</span
              >
            </p>
          </div>
        </div>
        <div class="py-3 px-4 border-bottom border-neutral100">
          <div class="font-weight-bold font-size-18 align-self-end">
            <p>Payment Method</p>
          </div>
        </div>
        <div class="py-3 px-4 border-bottom border-neutral100">
          <div class="w-100 rounded-llg d-flex">
            <div class="align-self-center mr-4">
              <!-- <input type="radio" class="custom-radio" name="payment" id="" /> -->
              <div class="radio-container">
                <input type="radio" id="payment-1" name="radio-payment" />
                <label for="payment-1"></label>
              </div>
            </div>
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
        </div>
        <div class="py-3 px-4 border-bottom border-neutral100">
          <div class="w-100 rounded-llg d-flex">
            <div class="align-self-center mr-4">
              <!-- <input type="radio" class="custom-radio" name="payment" id="" /> -->
              <div class="radio-container">
                <input
                  type="radio"
                  id="payment-2"
                  name="radio-payment"
                  checked
                />
                <label for="payment-2"></label>
              </div>
            </div>
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
              <h6 class="font-weight-semi-bold mb-1">Visa **** 8328</h6>
              <p class="text-neutral300 font-size-12">Exp 06/25</p>
            </div>
          </div>
        </div>
        <div class="pt-3 px-4">
          <a
            href="/profil/payment"
            class="btn btn-outline-neutral500 w-25 rounded-l p-2_5"
          >
            <vsx-icon iconName="Add" :size="20" type="bold" class="mr-2" />
            <span class="align-middle">Add New Card</span>
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="">
        <div class="rounded-llg bg-white border border-neutral100 mb-4">
          <div class="border-bottom border-neutral100 px-4 py-3">
            <p class="font-weight-semi-bold font-size-18">Summary</p>
          </div>
          <div class="border-bottom border-neutral100 p-4">
            <div class="d-flex">
              <div class="mr-3">
                <img
                  src="/assets/img/user.png"
                  class="img-fluid rounded-circle"
                  alt=""
                  width="40"
                  height="40"
                />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <h6 class="mb-1 font-weight-bold">John Doe</h6>
                <a
                  href=""
                  class="text-neutral300 font-size-14 font-weight-medium"
                  >Johndoe.gans@gmail.com</a
                >
              </div>
            </div>
          </div>
          <div class="p-4">
            <h6 class="font-size-18 font-weight-semi-bold">Price Detail</h6>
            <div class="d-flex justify-content-between mt-3">
              <p class="text-neutral400">Price</p>
              <p class="font-weight-semi-bold">Rp 60.000 x 12</p>
            </div>
            <div class="d-flex justify-content-between mt-3">
              <p class="text-neutral400">Subtotal</p>
              <p class="font-weight-semi-bold">Rp 720.000</p>
            </div>
            <div class="line bg-neutral100 my-3"></div>
            <div class="d-flex justify-content-between mb-1">
              <h6 class="font-weight-bold">Billed Now</h6>
              <h6 class="font-weight-bold">Rp 720.000</h6>
            </div>
            <p class="text-right text-neutral300 font-size-14">
              Includes taxes
            </p>
          </div>
        </div>
        <a
          href="/membership/checkoutstep2"
          class="btn btn-neutral200 rounded-l text-white btn-block py-2_5"
        >
          Join and Checkout
        </a>
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
    data() {
      return {
        checkedperiod: false,
      };
    },
    props: ["iconName"],
  };
</script>
