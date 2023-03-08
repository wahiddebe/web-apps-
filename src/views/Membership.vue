<template>
  <div class="text-center mb-4_5">
    <h6 class="font-size-24 font-weight-bold mb-2">Join VIP Member now!</h6>
    <p class="text-neutral300 font-size-14">
      Get the latest updates and exclusive deals with our Merchant by joining
      VIP membership!
    </p>
  </div>
  <!-- <div class="d-flex flex-row align-items-center justify-content-center mb-4_5">
    <p class="font-size-14 font-weight-medium mr-2_4">Mothly</p>
    <label class="switch-check mb-0 mr-2_4">
      <input type="checkbox" id="membercheck" v-model="checkedperiod" />
      <span class="slider-check round"></span>
    </label>
    <p class="font-size-14 font-weight-medium mr-2_4">Yearly</p>
    <p
      class="bg-e5f3e9 py-1 px-2_5 rounded-lllg font-size-14 font-weight-semi-bold text-success"
    >
      20% Savings
    </p>
  </div> -->
  <!-- <div class="row" id="monthly" v-if="!checkedperiod">
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-neutral100"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Free
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <p class="font-size-36 font-weight-bold">Free</p>
        </div>
        <div class="d-flex justify-content-center px-24 py-2_5">
          <p class="font-weight-medium font-size-14">
            This is your current plan
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-primary500 text-white"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Gold
          </p>
        </div>
        <div class="text-center">
          <p class="font-size-36 font-weight-bold mb-1">
            <span
              class="font-weight-medium font-size-14 text-neutral300 align-top mr-1"
              >Rp</span
            >50.000
          </p>
          <p class="font-weight-medium font-size-14 text-neutral300">
            per month
          </p>
        </div>
        <div class="d-flex justify-content-center px-4">
          <a
            href="/membership/checkout"
            class="font-weight-medium font-size-14 px-4 py-2_5 text-white btn-block btn btn-primary500"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-neutral300 text-white"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Platinum
          </p>
        </div>
        <div class="text-center">
          <p class="font-size-36 font-weight-bold mb-1">
            <span
              class="font-weight-medium font-size-14 text-neutral300 align-top mr-1"
              >Rp</span
            >75.000
          </p>
          <p class="font-weight-medium font-size-14 text-neutral300">
            per month
          </p>
        </div>
        <div class="d-flex justify-content-center px-4">
          <a
            href="/membership/checkout"
            class="font-weight-medium font-size-14 px-4 py-2_5 text-white btn-block btn btn-primary500"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-110a31 text-white"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Titanium
          </p>
        </div>
        <div class="text-center">
          <p class="font-size-36 font-weight-bold mb-1">
            <span
              class="font-weight-medium font-size-14 text-neutral300 align-top mr-1"
              >Rp</span
            >100.000
          </p>
          <p class="font-weight-medium font-size-14 text-neutral300">
            per month
          </p>
        </div>
        <div class="d-flex justify-content-center px-4">
          <a
            href="/membership/checkout"
            class="font-weight-medium font-size-14 px-4 py-2_5 text-white btn-block btn btn-primary500"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div> -->
  <div class="row" id="yearly">
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-neutral100"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Free
          </p>
        </div>
        <div class="d-flex justify-content-center">
          <p class="font-size-36 font-weight-bold">Free</p>
        </div>
        <div class="px-4">
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Promo</p>
            <p class="font-weight-bold">20 pcs</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Discount</p>
            <p class="font-weight-bold">10%</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Merchant</p>
            <p class="font-weight-bold">10 Exclusive</p>
          </div>
        </div>
        <div class="d-flex justify-content-center px-24 py-2_5">
          <p class="font-weight-medium font-size-14">
            This is your current plan
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-primary500 text-white"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Gold
          </p>
        </div>
        <div class="text-center">
          <p class="font-size-36 font-weight-bold mb-1">
            <span
              class="font-weight-medium font-size-14 text-neutral300 align-top mr-1"
              >Rp</span
            >40.000
          </p>
          <p class="font-weight-medium font-size-14 text-neutral300">
            per month, paid annualy
          </p>
        </div>
        <div class="px-4">
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Promo</p>
            <p class="font-weight-bold">20 pcs</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Discount</p>
            <p class="font-weight-bold">10%</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Merchant</p>
            <p class="font-weight-bold">10 Exclusive</p>
          </div>
        </div>
        <div class="d-flex justify-content-center px-4">
          <a
            href="/membership/checkout"
            class="font-weight-medium font-size-14 px-4 py-2_5 text-white btn-block btn btn-primary500"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-neutral300 text-white"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Platinum
          </p>
        </div>
        <div class="text-center">
          <p class="font-size-36 font-weight-bold mb-1">
            <span
              class="font-weight-medium font-size-14 text-neutral300 align-top mr-1"
              >Rp</span
            >60.000
          </p>
          <p class="font-weight-medium font-size-14 text-neutral300">
            per month, paid annualy
          </p>
        </div>
        <div class="px-4">
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Promo</p>
            <p class="font-weight-bold">20 pcs</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Discount</p>
            <p class="font-weight-bold">10%</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Merchant</p>
            <p class="font-weight-bold">10 Exclusive</p>
          </div>
        </div>
        <div class="d-flex justify-content-center px-4">
          <a
            href="/membership/checkout"
            class="font-weight-medium font-size-14 px-4 py-2_5 text-white btn-block btn btn-primary500"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="rounded-llg bg-white overflow-hidden d-flex flex-column justify-content-between pb-4 card-member"
      >
        <div
          class="d-flex flex-row align-items-center justify-content-center py-4 bg-110a31 text-white"
        >
          <vsx-icon iconName="Crown1" :size="32" type="bold" />
          <p class="font-size-24 font-weight-semi-bold">
            <span class="mr-2"> </span>Titanium
          </p>
        </div>
        <div class="text-center">
          <p class="font-size-36 font-weight-bold mb-1">
            <span
              class="font-weight-medium font-size-14 text-neutral300 align-top mr-1"
              >Rp</span
            >80.000
          </p>
          <p class="font-weight-medium font-size-14 text-neutral300">
            per month, paid annualy
          </p>
        </div>
        <div class="px-4">
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Promo</p>
            <p class="font-weight-bold">20 pcs</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Discount</p>
            <p class="font-weight-bold">10%</p>
          </div>
          <div class="d-flex flex-coloumn justify-content-between mb-4">
            <p class="text-neutral300">Merchant</p>
            <p class="font-weight-bold">10 Exclusive</p>
          </div>
        </div>
        <div class="d-flex justify-content-center px-4">
          <a
            href="/membership/checkout"
            class="font-weight-medium font-size-14 px-4 py-2_5 text-white btn-block btn btn-primary500"
          >
            Get Started
          </a>
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
    data() {
      return {
        checkedperiod: false,
      };
    },
    props: ["iconName"],
  };
</script>
