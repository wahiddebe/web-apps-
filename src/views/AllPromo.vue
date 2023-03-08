<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Explore / Brodo Semarang
    <span class="ml-1 text-neutral300">/ Promo</span>
  </p>

  <!-- No Promo -->
  <!-- <div
    class="min-vh-70 bg-white rounded-llg flex-column d-flex justify-content-center align-items-center"
  >
    <div class="rounded-l bg-primary100 p-4 mb-4">
      <vsx-icon
        iconName="TicketDiscount"
        :size="32"
        type="bold"
        class="text-neutral500"
      />
    </div>
    <h5 class="font-weight-bold font-size-24">Not Promo Available</h5>
  </div> -->

  <!-- Promo -->
  <h6 class="font-weight-bold font-size-18 mb-3">3 Promo Available</h6>
  <div class="row">
    <div class="col-md-4">
      <div class="p-3 bg-white promo-card active rounded-llg mb-3">
        <h6 class="font-weight-semi-bold mb-2">Get 50% Off!</h6>
        <div class="text-truncate-container">
          <p class="text-neutral300 font-size-14">
            Get promo up to 50% by purchasing 2 items with minimal purchase up
            to Rp 50.000
          </p>
        </div>
        <div class="line bg-neutral100 my-2_4 w-75"></div>
        <div class="d-flex justify-content-between font-size-14">
          <div class="">
            <p class="font-weight-medium">
              <span class="text-neutral300 font-weight-normal"
                >Valid until</span
              >
              31 April 2023
            </p>
          </div>
          <div class="">
            <vsx-icon
              iconName="ArrowRight2"
              :size="16"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </div>
      <div class="p-3 bg-white promo-card rounded-llg mb-3">
        <h6 class="font-weight-semi-bold mb-2">Get 50% Off!</h6>
        <div class="text-truncate-container">
          <p class="text-neutral300 font-size-14">
            Get promo up to 50% by purchasing 2 items with minimal purchase up
            to Rp 50.000
          </p>
        </div>
        <div class="line bg-neutral100 my-2_4 w-75"></div>
        <div class="d-flex justify-content-between font-size-14">
          <div class="">
            <p class="font-weight-medium">
              <span class="text-neutral300 font-weight-normal"
                >Valid until</span
              >
              31 April 2023
            </p>
          </div>
          <div class="">
            <vsx-icon
              iconName="ArrowRight2"
              :size="16"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </div>
      <div class="p-3 bg-white promo-card rounded-llg mb-3">
        <h6 class="font-weight-semi-bold mb-2">Get 50% Off!</h6>
        <div class="text-truncate-container">
          <p class="text-neutral300 font-size-14">
            Get promo up to 50% by purchasing 2 items with minimal purchase up
            to Rp 50.000
          </p>
        </div>
        <div class="line bg-neutral100 my-2_4 w-75"></div>
        <div class="d-flex justify-content-between font-size-14">
          <div class="">
            <p class="font-weight-medium">
              <span class="text-neutral300 font-weight-normal"
                >Valid until</span
              >
              31 April 2023
            </p>
          </div>
          <div class="">
            <vsx-icon
              iconName="ArrowRight2"
              :size="16"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="bg-white rounded-llg min-vh-70">
        <div class="p-4">
          <h6 class="font-weight-semi-bold font-size-24 mb-2_4">
            Get 50% Off!
          </h6>
          <p class="text-neutral300 mb-4">
            Discount 50% off (Max Rp. 20.000) with minimum order off Rp. 40.000!
          </p>
          <div class="d-flex justify-content-between font-size-14">
            <p class="text-neutral300 font-weight-normal">Valid until</p>
            <p class="font-weight-medium">31 April 2023</p>
          </div>
        </div>
        <div class="bg-neutral100 px-4 py-2">
          <h6 class="font-size-18 text-neutral400 font-weight-semi-bold mb-0">
            DESCRIPTION
          </h6>
        </div>
        <div class="p-4">
          <p class="text-neutral400">
            Lorem ipsum dolor sit amet consectetur. Sem quis sem fermentum lacus
            aliquam feugiat dignissim amet praesent. Sed enim dui blandit enim
            penatibus. Interdum lorem augue egestas malesuada in. Vel quam diam
            sit hac cum lectus odio eget. Egestas faucibus aliquam nulla
            vestibulum lobortis nam malesuada donec netus. Placerat in rutrum
            pulvinar amet tristique dignissim. Quam ut aliquam imperdiet
            malesuada. Faucibus tempus ac sed bibendum et varius sit sed. In
            lacus convallis molestie sed vel vitae feugiat nibh sagittis.
          </p>
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
