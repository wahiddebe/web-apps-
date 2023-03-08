<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Explore / Brodo Semarang
    <span class="ml-1 text-neutral300">/ All products</span>
  </p>
  <!-- No Product -->
  <!-- <div
    class="min-vh-70 bg-white rounded-llg flex-column d-flex justify-content-center align-items-center"
  >
    <div class="rounded-l bg-primary100 p-4 mb-4">
      <vsx-icon iconName="Box" :size="32" type="bold" class="text-neutral500" />
    </div>
    <h5 class="font-weight-bold font-size-24">Not Available Product</h5>
  </div> -->
  <!-- Product -->
  <div class="">
    <div class="d-flex justify-content-between mb-4">
      <div class="d-flex align-items-center">
        <div class="mr-4">
          <h5 class="font-size-24 font-weight-2 mb-0">34 Product</h5>
        </div>
        <div class="">
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
      </div>
      <div class="d-flex align-items-center">
        <div class="form-group mb-0 mr-3">
          <input
            type="text"
            class="form-control"
            id=""
            placeholder="Search store here..."
          />
        </div>
        <div class="">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-neutral500 font-size-14 dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by : Recent
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Recent</a>
              <a class="dropdown-item" href="#">Popularity</a>
              <a class="dropdown-item" href="#">Rating (Low to High)</a>
              <a class="dropdown-item" href="#">Rating (High to Low)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div
          data-toggle="modal"
          data-target="#product"
          type="button"
          class="bg-white rounded-xl overflow-hidden d-flex"
        >
          <div class="">
            <img
              src="/assets/img/shoe.png"
              alt=""
              height="160"
              width="160"
              class=""
            />
          </div>
          <div class="d-flex flex-column justify-content-between p-3">
            <div class="">
              <h6 class="font-weight-semi-bold">Tondano Beak White Navy GS</h6>
              <div class="text-truncate-container">
                <p class="text-neutral400 font-size-14">
                  Lorem ipsum dolor sit amet consectetur. Aliquam sed enim sit
                  dolor neque dia ....
                </p>
              </div>
            </div>
            <div class="font-size-14">
              <p>
                <vsx-icon
                  iconName="Star1"
                  :size="20"
                  type="bold"
                  class="text-primary500 mr-1"
                />
                <span class="font-weight-semi-bold mr-1 align-middle">4.6</span>
                <span class="font-weight-normal text-neutral400 align-middle"
                  >(126)</span
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Product-->
  <div
    class="modal fade"
    id="product"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
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
            Product Detail
          </h5>
        </div>
        <div class="modal-body p-4 pb-0">
          <div class="row">
            <div class="col-md-4">
              <div class="w-100">
                <img
                  src="/assets/img/shoe.png"
                  alt=""
                  class="w-100 img-fluid rounded-llg mb-3"
                />
                <div
                  class="d-flex mb-3 p-3 flex-column justify-content-center align-items-center bg-neutral100 rounded-llg"
                >
                  <h5 class="font-size-24 font-weight-bold mb-1">
                    <vsx-icon
                      iconName="Star1"
                      :size="24"
                      type="bold"
                      class="text-primary500"
                    />
                    <span class="align-middle">4.6</span>
                  </h5>
                  <p class="text-neutral400 font-size-14">(126 Reviews)</p>
                </div>
                <button
                  data-toggle="modal"
                  data-target="#rating"
                  type="button"
                  class="btn btn-primary500 text-white btn-block font-size-14"
                >
                  <vsx-icon
                    iconName="Add"
                    :size="20"
                    type="linear"
                    class="mr-1"
                  />
                  <span class="align-middle">Add Rating</span>
                </button>
              </div>
            </div>
            <div class="col-md-8">
              <h5 class="font-weight-semi-bold mb-2 font-size-24">
                Tondano Beak White Navy GS
              </h5>
              <p class="font-size-14 text-neutral400">
                Menembus Waktu Menuju Lembaran Baru Tondano
                <br /><br /><br />
                Beak merupakan iterasi dari siluet klasik Brodo Tondano. Garis
                Rooster Beak yang menjadi ciri khas Brodo disematkan pada siluet
                klasik dengan outsole rubber gum yang cantik.
                <br /><br /><br />
                Spesifikasi Produk
                <br />
                - Upper : mesh
                <br />
                - Heel Counter : semi suede
                <br />
                - Vamp : semi suede
                <br />
                - Tongue : semi suede + foam
                <br />
                - Back Tab : semi suede
                <br />
                - Lining : multy spandex
                <br />
                - Lace : flat cotton - Outsole : eva + rubber
                <br />
                - Roosterbeak : semi suede
                <br />
                - Binding : PU
                <br />
                - Insole : Poron
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal rating-->
  <div
    class="modal fade"
    id="rating"
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
            Add Product Rating
          </h5>
        </div>
        <div class="modal-body px-4 pt-4 pb-0">
          <div class="d-flex rounded-l overflow-hidden bg-fafafa mb-4">
            <div class="mr-3">
              <img
                src="/assets/img/shoe.png"
                class="img-fliud"
                alt=""
                height="64"
                width="64"
              />
            </div>
            <div class="align-self-center">
              <div class="">
                <h6 class="text-neutral500 font-weight-bold">
                  Corte Sleek White Nude
                </h6>
              </div>
            </div>
          </div>
          <div class="form-ratting">
            <div class="d-flex justify-content-between">
              <div class="align-self-center">
                <label
                  for="rating-inline"
                  class="mb-0 font-size-14 font-weight-bold"
                  >Your Rating</label
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
            Submit
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
