<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Explore / Brodo Semarang
    <span class="ml-1 text-neutral300">/ Reviews</span>
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

  <div class="row">
    <div class="col-md-4">
      <div class="p-4 bg-white rounded-llg">
        <h4 class="font-weight-bold font-size-36 mb-2_4">
          <vsx-icon
            iconName="Star1"
            :size="40"
            type="bold"
            class="text-warning mr-2"
          />
          <span class="align-middle">0</span>
        </h4>
        <p class="font-size-14 text-neutral400">
          4.8
          <span class="text-neutral500 font-weight-semi-bold">387</span> user
          review
        </p>
        <div class="line bg-neutral100 my-4"></div>
        <div class="mb-4">
          <p class="font-weight-medium font-size-14 mb-2">
            Service <span class="float-right font-weight-semi-bold">4,7</span>
          </p>
          <div class="progress rounded-l" style="height: 0.5rem">
            <div
              class="progress-bar bg-primary500 rounded-l"
              role="progressbar"
              style="width: 94%"
              aria-valuenow="4.6"
              aria-valuemin="0"
              aria-valuemax="5"
            ></div>
          </div>
        </div>
        <div class="mb-4">
          <p class="font-weight-medium font-size-14 mb-2">
            Facility <span class="float-right font-weight-semi-bold">4,6</span>
          </p>
          <div class="progress rounded-l" style="height: 0.5rem">
            <div
              class="progress-bar bg-primary500 rounded-l"
              role="progressbar"
              style="width: 92%"
              aria-valuenow="4.6"
              aria-valuemin="0"
              aria-valuemax="5"
            ></div>
          </div>
        </div>
        <div class="mb-4">
          <p class="font-weight-medium font-size-14 mb-2">
            Cleanliness
            <span class="float-right font-weight-semi-bold">4,6</span>
          </p>
          <div class="progress rounded-l" style="height: 0.5rem">
            <div
              class="progress-bar bg-primary500 rounded-l"
              role="progressbar"
              style="width: 92%"
              aria-valuenow="4.6"
              aria-valuemin="0"
              aria-valuemax="5"
            ></div>
          </div>
        </div>
        <div class="">
          <p class="font-weight-medium font-size-14 mb-2">
            Comfort <span class="float-right font-weight-semi-bold">4,6</span>
          </p>
          <div class="progress rounded-l" style="height: 0.5rem">
            <div
              class="progress-bar bg-primary500 rounded-l"
              role="progressbar"
              style="width: 92%"
              aria-valuenow="4.6"
              aria-valuemin="0"
              aria-valuemax="5"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div class="d-flex justify-content-between mb-4">
        <div class="d-flex">
          <div class="align-self-center mr-4">
            <h5 class="font-size-24 font-weight-bold">Reviews</h5>
          </div>

          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-neutral500 font-size-14 dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <vsx-icon
                iconName="Star1"
                :size="20"
                type="bold"
                class="align-middle text-primary500 mr-1"
              />
              <span>All Rating</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item font-size-14 font-weight-medium" href="#">
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="align-middle text-primary500 mr-2"
                />
                <span class="align-middle">All Rating</span>
                <img
                  src="/assets/img/tick.svg"
                  class="float-right"
                  width="16"
                  alt=""
                />
              </a>
              <a class="dropdown-item font-size-14 font-weight-medium" href="#">
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="align-middle text-primary500 mr-2"
                />
                <span class="align-middle">4.1 - 5</span>
              </a>
              <a class="dropdown-item font-size-14 font-weight-medium" href="#">
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="align-middle text-primary500 mr-2"
                />
                <span class="align-middle">3.1 - 4</span>
              </a>
              <a class="dropdown-item font-size-14 font-weight-medium" href="#">
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="align-middle text-primary500 mr-2"
                />
                <span class="align-middle">2.1 - 3</span>
              </a>
              <a class="dropdown-item font-size-14 font-weight-medium" href="#">
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="align-middle text-primary500 mr-2"
                />
                <span class="align-middle">1.1 - 2</span>
              </a>
              <a class="dropdown-item font-size-14 font-weight-medium" href="#">
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="align-middle text-primary500 mr-2"
                />
                <span class="align-middle">0.1 - 1</span>
              </a>
            </div>
          </div>
        </div>
        <div class="align-self-center">
          <div class="d-flex">
            <div class="btn-group mr-2">
              <button
                type="button"
                class="btn btn-outline-neutral500 font-size-14 dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by : Newest
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Newest</a>
                <a class="dropdown-item" href="#">Oldest</a>
              </div>
            </div>
            <button
              data-toggle="modal"
              data-target="#review"
              type="button"
              class="btn btn-primary500 text-white font-size-14"
            >
              <vsx-icon
                iconName="Add"
                :size="20"
                type="linear"
                class="align-middle mr-1"
              />
              <span>Add Review</span>
            </button>
          </div>
        </div>
      </div>
      <!-- No Promo -->
      <!-- <div
        class="min-vh-70 bg-white rounded-llg flex-column d-flex justify-content-center align-items-center"
      >
        <div class="rounded-l bg-primary100 p-4 mb-4">
          <vsx-icon
            iconName="Message"
            :size="32"
            type="bold"
            class="text-neutral500"
          />
        </div>
        <h5 class="font-weight-bold font-size-24">Not Reviews Added</h5>
      </div> -->
      <div class="review-wrap mb-1">
        <div class="bg-white rounded-llg p-4 mb-3">
          <div class="d-flex justify-content-between mb-3">
            <div class="d-flex">
              <div class="rounded-l">
                <img
                  src="/assets/img/reviewer.png"
                  width="48"
                  height="48"
                  alt=""
                  class="mr-3 rounded-l"
                />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <h6 class="font-weight-semi-bold">Johanna Stevens</h6>
                <p class="font-size-14 text-neutral300">10 minutes a go</p>
              </div>
            </div>
            <div class="font-size-14 font-weight-semi-bold">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="align-middle">4.6</span>
              </p>
            </div>
          </div>
          <p class="fon-size-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ac
            ultricies id fames duis vulputate in vitae nec. Dictum adipiscing in
            tortor pellentesque. Aliquam a non tempus pellentesque varius
            commodo a cras viverra.
          </p>
        </div>
        <div class="bg-white rounded-llg p-4 mb-3">
          <div class="d-flex justify-content-between mb-3">
            <div class="d-flex">
              <div class="rounded-l">
                <img
                  src="/assets/img/reviewer.png"
                  width="48"
                  height="48"
                  alt=""
                  class="mr-3 rounded-l"
                />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <h6 class="font-weight-semi-bold">Johanna Stevens</h6>
                <p class="font-size-14 text-neutral300">10 minutes a go</p>
              </div>
            </div>
            <div class="font-size-14 font-weight-semi-bold">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="align-middle">4.6</span>
              </p>
            </div>
          </div>
          <p class="fon-size-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ac
            ultricies id fames duis vulputate in vitae nec. Dictum adipiscing in
            tortor pellentesque. Aliquam a non tempus pellentesque varius
            commodo a cras viverra.
          </p>
        </div>
        <div class="bg-white rounded-llg p-4 mb-3">
          <div class="d-flex justify-content-between mb-3">
            <div class="d-flex">
              <div class="rounded-l">
                <img
                  src="/assets/img/reviewer.png"
                  width="48"
                  height="48"
                  alt=""
                  class="mr-3 rounded-l"
                />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <h6 class="font-weight-semi-bold">Johanna Stevens</h6>
                <p class="font-size-14 text-neutral300">10 minutes a go</p>
              </div>
            </div>
            <div class="font-size-14 font-weight-semi-bold">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="align-middle">4.6</span>
              </p>
            </div>
          </div>
          <p class="fon-size-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus ac
            ultricies id fames duis vulputate in vitae nec. Dictum adipiscing in
            tortor pellentesque. Aliquam a non tempus pellentesque varius
            commodo a cras viverra.
          </p>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          size="sm"
          class="my-0"
        ></b-pagination>
      </div>
    </div>
  </div>
  <!-- Modal Review-->
  <div
    class="modal fade"
    id="review"
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
            Add Review
          </h5>
        </div>
        <div class="modal-body px-4 pt-4 pb-0">
          <div class="d-flex rounded-l overflow-hidden bg-fafafa mb-4">
            <div class="mr-3">
              <img
                src="/assets/img/merchant-profil.png"
                class="img-fliud"
                alt=""
                height="64"
                width="64"
              />
            </div>
            <div class="align-self-center">
              <div class="">
                <h6 class="text-neutral500 font-weight-bold">
                  Parileis Merchant
                </h6>
                <p class="text-neutral300 font-weight-medium font-size-14">
                  Jl. Gatot Soebroto 16, No. 25
                </p>
              </div>
            </div>
          </div>
          <div class="form-ratting">
            <div class="d-flex justify-content-between mb-4">
              <div class="align-self-center">
                <label
                  for="rating-inline"
                  class="mb-0 font-size-14 font-weight-bold"
                  >Service</label
                >
              </div>
              <div class="w-75">
                <b-form-rating
                  id="rating-inline"
                  inline
                  value="0"
                  no-border
                  variant="primary500"
                  size="lg"
                  class="text-right font-size-40"
                ></b-form-rating>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <div class="align-self-center">
                <label
                  for="rating-inline"
                  class="mb-0 font-size-14 font-weight-bold"
                  >Facility</label
                >
              </div>
              <div class="w-75">
                <b-form-rating
                  id="rating-inline"
                  inline
                  value="0"
                  no-border
                  variant="primary500"
                  size="lg"
                  class="text-right font-size-40"
                ></b-form-rating>
              </div>
            </div>
            <div class="d-flex justify-content-between mb-4">
              <div class="align-self-center">
                <label
                  for="rating-inline"
                  class="mb-0 font-size-14 font-weight-bold"
                  >Cleanliness</label
                >
              </div>
              <div class="w-75">
                <b-form-rating
                  id="rating-inline"
                  inline
                  value="0"
                  no-border
                  variant="primary500"
                  size="lg"
                  class="text-right font-size-40"
                ></b-form-rating>
              </div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="align-self-center">
                <label
                  for="rating-inline"
                  class="mb-0 font-size-14 font-weight-bold"
                  >Comfort</label
                >
              </div>
              <div class="w-75">
                <b-form-rating
                  id="rating-inline"
                  inline
                  value="0"
                  no-border
                  variant="primary500"
                  size="lg"
                  class="text-right font-size-40"
                ></b-form-rating>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal-footer justify-content-start border-top border-neutral200 px-4"
        >
          <div class="form-group w-100 mb-4">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              placeholder="Share your experience..."
            ></textarea>
          </div>
          <button
            type="button"
            class="btn btn-block btn-primary500 text-white p-2_5"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { vsxIcon } from "vue-iconsax";
  export default {
    data() {
      return {
        rows: 5,
        perPage: 1,
        currentPage: 1,
      };
    },
    components: {
      vsxIcon,
    },
    props: ["iconName"],
  };
</script>
