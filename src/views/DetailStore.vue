<template>
  <p class="mb-4 font-weight-bold font-size-14">
    Explore <span class="ml-1 text-neutral300">/ Brodo Semarang</span>
  </p>
  <div class="d-flex rounded-llg overflow-hidden position-relative mb-4">
    <div class="w-50 mr-2_4">
      <img src="/assets/img/store1.png" alt="" class="img-fluid h-100 w-100" />
    </div>
    <div class="w-25 mr-2_4">
      <img
        src="/assets/img/store1.png"
        alt=""
        class="img-fluid h-50 pb-1_5 w-100"
      />
      <img
        src="/assets/img/store1.png"
        alt=""
        class="img-fluid h-50 pt-1_5 w-100"
      />
    </div>
    <div class="w-25">
      <img
        src="/assets/img/store1.png"
        alt=""
        class="img-fluid h-50 pb-1_5 w-100"
      />
      <img
        src="/assets/img/store1.png"
        alt=""
        class="img-fluid h-50 pt-1_5 w-100"
      />
    </div>
    <div class="position-absolute button-image">
      <button
        class="btn btn-white text-neutral500"
        data-toggle="modal"
        data-target="#imageslide"
        type="button"
      >
        <vsx-icon iconName="Category" :size="20" type="bold" class="mr-2" />
        <span> See all photos</span>
      </button>
    </div>
  </div>
  <div class="d-flex justify-content-between">
    <div class="">
      <h5 class="font-weight-bold font-size-24 mb-2">Brodo Semarang</h5>
      <div class="d-flex">
        <div class="">
          <p>
            <vsx-icon
              iconName="Location"
              :size="20"
              type="bold"
              class="mr-2 text-EBA51C"
            />
            <span class="font-weight-medium font-size-14 align-middle">
              <u> Jl Ahmad Yani No 137, 50241 Semarang, Indonesia</u>
            </span>
          </p>
        </div>
        <div class="align-self-center mx-2_4">
          <div class="dot bg-neutral100"></div>
        </div>
        <div class="">
          <p>
            <vsx-icon
              iconName="Star1"
              :size="20"
              type="bold"
              class="mr-2 text-EBA51C"
            />
            <span class="font-weight-semi-bold font-size-14 align-middle">
              4.6
            </span>
            <span class="text-neutral400 font-size-14 align-middle"
              >(126 Reviews)</span
            >
          </p>
        </div>
        <div class="align-self-center mx-2_4">
          <div class="dot bg-neutral100"></div>
        </div>
        <div class="">
          <p>
            <vsx-icon
              iconName="Profile2User"
              :size="20"
              type="bold"
              class="mr-2 text-EBA51C"
            />
            <span class="font-weight-semi-bold font-size-14 align-middle">
              2.126
            </span>
            <span class="text-neutral400 font-size-14 align-middle"
              >Followers</span
            >
          </p>
        </div>
      </div>
    </div>
    <div class="">
      <div class="btn-group">
        <a
          href=""
          class="btn border-neutral100 text-neutral500 font-size-14 mr-2"
        >
          <vsx-icon
            iconName="Global"
            :size="20"
            type="linear"
            class="align-middle mr-1"
          />
          <span class="align-middle">Visit Website</span>
        </a>
        <button
          data-toggle="modal"
          data-target="#share"
          class="btn border-neutral100 text-neutral500 font-size-14 mr-2"
        >
          <img src="/assets/img/share.svg" width="20" class="mr-1" alt="" />
          <span class="align-middle">Share</span>
        </button>
        <button class="btn border-neutral100 text-neutral500 font-size-14 mr-2">
          <vsx-icon
            iconName="Add"
            :size="20"
            type="linear"
            class="align-middle mr-1"
          />
          <span class="align-middle">Follow Merchant</span>
        </button>
        <!-- Followed -->
        <!-- <button href="" class="btn btn-primary500 text-white font-size-14">
          <vsx-icon
            iconName="TickSquare"
            :size="20"
            type="bold"
            class="align-middle mr-1"
          />
          <span class="align-middle">Followed</span>
        </button> -->
      </div>
    </div>
  </div>
  <div class="line bg-neutral100 my-4"></div>
  <div class="row mb-5">
    <div class="col-md-8">
      <div class="">
        <div class="">
          <h6 class="font-weight-bold font-size-18 mb-2_4">About Merchant</h6>
          <p class="font-size-14">
            We are the first direct-to-consumer footwear company in Indonesia
            that offers a wide range of high-quality product lines, ranging from
            formal and casual shoes, as well as sneakers and boots.
            <br />
            <br />
            Through time we have become a lifestyle brand that supports everyone
            to live their beliefs and principles. Everything that BRODO does is
            always based on the belief that everyone has the right to pursue
            their own goals in life, and create an epic life story.
          </p>
        </div>
        <div class="line bg-neutral100 my-4"></div>
        <div class="">
          <div class="d-flex justify-content-between mb-3">
            <div class="">
              <h6 class="font-weight-bold font-size-18 mb-2_4">
                3 Promo Available
              </h6>
            </div>
            <div class="">
              <a href="/all-promo" class="font-size-14 text-primary500">
                <span class="ml-1">See More</span>
                <vsx-icon
                  iconName="ArrowRight2"
                  :size="16"
                  type="linear"
                  class=""
                />
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="p-3 bg-white rounded-llg">
                <h6 class="font-weight-semi-bold mb-2">Get 50% Off!</h6>
                <div class="text-truncate-container">
                  <p class="text-neutral300 font-size-14">
                    Get promo up to 50% by purchasing 2 items with minimal
                    purchase up to Rp 50.000
                  </p>
                </div>
                <div class="line bg-neutral100 my-2_4"></div>
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
            <div class="col-md-4">
              <div class="p-3 bg-white rounded-llg">
                <h6 class="font-weight-semi-bold mb-2">Get 50% Off!</h6>
                <div class="text-truncate-container">
                  <p class="text-neutral300 font-size-14">
                    Get promo up to 50% by purchasing 2 items with minimal
                    purchase up to Rp 50.000
                  </p>
                </div>
                <div class="line bg-neutral100 my-2_4"></div>
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
            <div class="col-md-4">
              <div class="p-3 bg-white rounded-llg">
                <h6 class="font-weight-semi-bold mb-2">Get 50% Off!</h6>
                <div class="text-truncate-container">
                  <p class="text-neutral300 font-size-14">
                    Get promo up to 50% by purchasing 2 items with minimal
                    purchase up to Rp 50.000
                  </p>
                </div>
                <div class="line bg-neutral100 my-2_4"></div>
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
          </div>
        </div>
        <div class="line bg-neutral100 my-4"></div>
        <div class="">
          <h6 class="font-weight-bold font-size-18 mb-3">
            34 Product Available
          </h6>
          <div class="row">
            <div class="col-md-6 mb-4">
              <div class="bg-white rounded-xl overflow-hidden d-flex">
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
                    <h6 class="font-weight-semi-bold">
                      Tondano Beak White Navy GS
                    </h6>
                    <div class="text-truncate-container">
                      <p class="text-neutral400 font-size-14">
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed enim
                        sit dolor neque dia ....
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
                      <span class="font-weight-semi-bold mr-1 align-middle"
                        >4.6</span
                      >
                      <span
                        class="font-weight-normal text-neutral400 align-middle"
                        >(126)</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="bg-white rounded-xl overflow-hidden d-flex">
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
                    <h6 class="font-weight-semi-bold">
                      Tondano Beak White Navy GS
                    </h6>
                    <div class="text-truncate-container">
                      <p class="text-neutral400 font-size-14">
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed enim
                        sit dolor neque dia ....
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
                      <span class="font-weight-semi-bold mr-1 align-middle"
                        >4.6</span
                      >
                      <span
                        class="font-weight-normal text-neutral400 align-middle"
                        >(126)</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="bg-white rounded-xl overflow-hidden d-flex">
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
                    <h6 class="font-weight-semi-bold">
                      Tondano Beak White Navy GS
                    </h6>
                    <div class="text-truncate-container">
                      <p class="text-neutral400 font-size-14">
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed enim
                        sit dolor neque dia ....
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
                      <span class="font-weight-semi-bold mr-1 align-middle"
                        >4.6</span
                      >
                      <span
                        class="font-weight-normal text-neutral400 align-middle"
                        >(126)</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="bg-white rounded-xl overflow-hidden d-flex">
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
                    <h6 class="font-weight-semi-bold">
                      Tondano Beak White Navy GS
                    </h6>
                    <div class="text-truncate-container">
                      <p class="text-neutral400 font-size-14">
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed enim
                        sit dolor neque dia ....
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
                      <span class="font-weight-semi-bold mr-1 align-middle"
                        >4.6</span
                      >
                      <span
                        class="font-weight-normal text-neutral400 align-middle"
                        >(126)</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div class="bg-white rounded-xl overflow-hidden d-flex">
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
                    <h6 class="font-weight-semi-bold">
                      Tondano Beak White Navy GS
                    </h6>
                    <div class="text-truncate-container">
                      <p class="text-neutral400 font-size-14">
                        Lorem ipsum dolor sit amet consectetur. Aliquam sed enim
                        sit dolor neque dia ....
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
                      <span class="font-weight-semi-bold mr-1 align-middle"
                        >4.6</span
                      >
                      <span
                        class="font-weight-normal text-neutral400 align-middle"
                        >(126)</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="" class="btn btn-white border-neutral500"
            >Show More Product</a
          >
        </div>
        <div class="line bg-neutral100 my-4"></div>

        <!-- review-section -->
        <div class="">
          <div class="mb-3">
            <h6 class="font-weight-bold font-size-18 mb-3">Review</h6>
            <div class="d-flex justify-content-between">
              <div class="font-size-16 align-self-center">
                <p>
                  <vsx-icon
                    iconName="Star1"
                    :size="24"
                    type="bold"
                    class="text-primary500 mr-1"
                  />
                  <span class="font-weight-semi-bold mr-1 align-middle"
                    >4.6</span
                  >
                  <span class="font-weight-normal text-neutral400 align-middle"
                    >(126)</span
                  >
                </p>
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
                      <vsx-icon
                        iconName="Star1"
                        :size="20"
                        type="bold"
                        class="align-middle text-primary500 mr-1"
                      />
                      <span>All Rating</span>
                    </button>
                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item font-size-14 font-weight-medium"
                        href="#"
                      >
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
                      <a
                        class="dropdown-item font-size-14 font-weight-medium"
                        href="#"
                      >
                        <vsx-icon
                          iconName="Star1"
                          :size="20"
                          type="bold"
                          class="align-middle text-primary500 mr-2"
                        />
                        <span class="align-middle">4.1 - 5</span>
                      </a>
                      <a
                        class="dropdown-item font-size-14 font-weight-medium"
                        href="#"
                      >
                        <vsx-icon
                          iconName="Star1"
                          :size="20"
                          type="bold"
                          class="align-middle text-primary500 mr-2"
                        />
                        <span class="align-middle">3.1 - 4</span>
                      </a>
                      <a
                        class="dropdown-item font-size-14 font-weight-medium"
                        href="#"
                      >
                        <vsx-icon
                          iconName="Star1"
                          :size="20"
                          type="bold"
                          class="align-middle text-primary500 mr-2"
                        />
                        <span class="align-middle">2.1 - 3</span>
                      </a>
                      <a
                        class="dropdown-item font-size-14 font-weight-medium"
                        href="#"
                      >
                        <vsx-icon
                          iconName="Star1"
                          :size="20"
                          type="bold"
                          class="align-middle text-primary500 mr-2"
                        />
                        <span class="align-middle">1.1 - 2</span>
                      </a>
                      <a
                        class="dropdown-item font-size-14 font-weight-medium"
                        href="#"
                      >
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
          </div>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ac ultricies id fames duis vulputate in vitae nec. Dictum
                adipiscing in tortor pellentesque. Aliquam a non tempus
                pellentesque varius commodo a cras viverra.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ac ultricies id fames duis vulputate in vitae nec. Dictum
                adipiscing in tortor pellentesque. Aliquam a non tempus
                pellentesque varius commodo a cras viverra.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
                ac ultricies id fames duis vulputate in vitae nec. Dictum
                adipiscing in tortor pellentesque. Aliquam a non tempus
                pellentesque varius commodo a cras viverra.
              </p>
            </div>
          </div>
          <a href="" class="btn btn-white border-neutral500"
            >Show More Product</a
          >
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="bg-white rounded-llg overflow-hidden">
        <div class="pt-4 px-4">
          <h6 class="font-weight-semi-bold mb-2_4">Discount Membership</h6>
          <div
            class="rounded-l bg-EBA51C08 mb-2_4 border border-primary500 d-flex justify-content-between overflow-hidden"
          >
            <div class="px-3 py-2_5">
              <vsx-icon
                iconName="Crown1"
                :size="24"
                type="bold"
                class="mr-1 text-primary500"
              />
              <span class="font-weight-semi-bold font-size-14 align-middle">
                Gold Member
              </span>
            </div>
            <div class="bg-EBA51C text-white font-weight-bold py-2_4 px-3">
              <div class="h-100 d-flex align-items-center">
                <div>10%</div>
              </div>
            </div>
          </div>
          <div
            class="rounded-l bg-BDBDB908 mb-2_4 border border-BDBDB9 d-flex justify-content-between overflow-hidden"
          >
            <div class="px-3 py-2_5">
              <vsx-icon
                iconName="Crown1"
                :size="24"
                type="bold"
                class="mr-1 text-neutral300"
              />
              <span class="font-weight-semi-bold font-size-14 align-middle">
                Platinum Member
              </span>
            </div>
            <div class="bg-BDBDB9 text-white font-weight-bold py-2_4 px-3">
              <div class="h-100 d-flex align-items-center">
                <div>15%</div>
              </div>
            </div>
          </div>
          <div
            class="rounded-l bg-110A3108 mb-2_4 border border-110A31 d-flex justify-content-between overflow-hidden"
          >
            <div class="px-3 py-2_5">
              <vsx-icon
                iconName="Crown1"
                :size="24"
                type="bold"
                class="mr-1 text-110A31"
              />
              <span class="font-weight-semi-bold font-size-14 align-middle">
                Titanium Member
              </span>
            </div>
            <div class="bg-110A31 text-white font-weight-bold py-2_4 px-3">
              <div class="h-100 d-flex align-items-center">
                <div>20%</div>
              </div>
            </div>
          </div>
        </div>
        <a href="">
          <div class="bg-primary500 text-center text-white p-2_5">
            <p>
              <vsx-icon iconName="Crown1" :size="20" type="bold" class="mr-1" />
              <span class="font-weight-semi-bold font-size-14 align-middle">
                Join Member Now
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- Similar Merchant -->
  <div class="pt-5">
    <h5 class="font-size-24 font-weight-bold text-center mb-4_5">
      Similar Merchant
    </h5>
    <div class="row">
      <div class="col-md-3">
        <a href="" class="text-neutral500">
          <div class="card rounded-llg overflow-hidden border-0">
            <img
              src="https://images.unsplash.com/photo-1599795119678-63f52d65a5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="p-3">
              <h6 class="font-weight-semi-bold mb-1">
                Le ‘Garde Bar & Restaurant
              </h6>
              <p class="font-weight-semi-bold font-size-14">
                <span>
                  <vsx-icon
                    iconName="Star1"
                    :size="16"
                    type="bold"
                    class="align-middle mr-1 text-primary500"
                  />
                </span>
                4.8
                <span class="ml-2 font-weight-normal"> (143 Reviews) </span>
              </p>
              <div class="d-flex justify-content-between mt-3">
                <div class="align-self-center">
                  <p class="font-size-14 text-neutral300">
                    <vsx-icon
                      iconName="Location"
                      :size="16"
                      type="bold"
                      class="mr-1 t"
                    />
                    <span class="align-middle"> 1.2 km away </span>
                  </p>
                </div>
                <div class="align-self-center">
                  <p class="font-size-14 font-weight-medium">
                    3 promos available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="" class="text-neutral500">
          <div class="card rounded-llg overflow-hidden border-0">
            <img
              src="https://images.unsplash.com/photo-1599795119678-63f52d65a5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="p-3">
              <h6 class="font-weight-semi-bold mb-1">
                Le ‘Garde Bar & Restaurant
              </h6>
              <p class="font-weight-semi-bold font-size-14">
                <span>
                  <vsx-icon
                    iconName="Star1"
                    :size="16"
                    type="bold"
                    class="align-middle mr-1 text-primary500"
                  />
                </span>
                4.8
                <span class="ml-2 font-weight-normal"> (143 Reviews) </span>
              </p>
              <div class="d-flex justify-content-between mt-3">
                <div class="align-self-center">
                  <p class="font-size-14 text-neutral300">
                    <vsx-icon
                      iconName="Location"
                      :size="16"
                      type="bold"
                      class="mr-1 t"
                    />
                    <span class="align-middle"> 1.2 km away </span>
                  </p>
                </div>
                <div class="align-self-center">
                  <p class="font-size-14 font-weight-medium">
                    3 promos available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="" class="text-neutral500">
          <div class="card rounded-llg overflow-hidden border-0">
            <img
              src="https://images.unsplash.com/photo-1599795119678-63f52d65a5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="p-3">
              <h6 class="font-weight-semi-bold mb-1">
                Le ‘Garde Bar & Restaurant
              </h6>
              <p class="font-weight-semi-bold font-size-14">
                <span>
                  <vsx-icon
                    iconName="Star1"
                    :size="16"
                    type="bold"
                    class="align-middle mr-1 text-primary500"
                  />
                </span>
                4.8
                <span class="ml-2 font-weight-normal"> (143 Reviews) </span>
              </p>
              <div class="d-flex justify-content-between mt-3">
                <div class="align-self-center">
                  <p class="font-size-14 text-neutral300">
                    <vsx-icon
                      iconName="Location"
                      :size="16"
                      type="bold"
                      class="mr-1 t"
                    />
                    <span class="align-middle"> 1.2 km away </span>
                  </p>
                </div>
                <div class="align-self-center">
                  <p class="font-size-14 font-weight-medium">
                    3 promos available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-md-3">
        <a href="" class="text-neutral500">
          <div class="card rounded-llg overflow-hidden border-0">
            <img
              src="https://images.unsplash.com/photo-1599795119678-63f52d65a5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              class="card-img-top"
              alt="..."
            />
            <div class="p-3">
              <h6 class="font-weight-semi-bold mb-1">
                Le ‘Garde Bar & Restaurant
              </h6>
              <p class="font-weight-semi-bold font-size-14">
                <span>
                  <vsx-icon
                    iconName="Star1"
                    :size="16"
                    type="bold"
                    class="align-middle mr-1 text-primary500"
                  />
                </span>
                4.8
                <span class="ml-2 font-weight-normal"> (143 Reviews) </span>
              </p>
              <div class="d-flex justify-content-between mt-3">
                <div class="align-self-center">
                  <p class="font-size-14 text-neutral300">
                    <vsx-icon
                      iconName="Location"
                      :size="16"
                      type="bold"
                      class="mr-1 t"
                    />
                    <span class="align-middle"> 1.2 km away </span>
                  </p>
                </div>
                <div class="align-self-center">
                  <p class="font-size-14 font-weight-medium">
                    3 promos available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- Modal Share-->
  <div
    class="modal fade"
    id="share"
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
            Share
          </h5>
        </div>
        <div class="modal-body px-4 pt-4 pb-0">
          <div class="row">
            <div class="col-md-6">
              <button
                href=""
                class="btn border-neutral100 text-neutral500 font-size-14 mb-4 btn-block text-left"
              >
                <vsx-icon
                  iconName="Copy"
                  :size="20"
                  type="linear"
                  class="align-middle mr-2_4"
                />
                <span class="align-middle">Copy Link</span>
              </button>
            </div>
            <div class="col-md-6">
              <button
                href=""
                class="btn border-neutral100 text-neutral500 font-size-14 mb-4 btn-block text-left"
              >
                <vsx-icon
                  iconName="Sms"
                  :size="20"
                  type="linear"
                  class="align-middle mr-2_4"
                />
                <span class="align-middle">Email</span>
              </button>
            </div>
            <div class="col-md-6">
              <button
                href=""
                class="btn border-neutral100 text-neutral500 font-size-14 mb-4 btn-block text-left"
              >
                <img
                  src="/assets/img/wa.svg"
                  width="20"
                  alt=""
                  class="mr-2_4"
                />
                <span class="align-middle">Whatsapp</span>
              </button>
            </div>
            <div class="col-md-6">
              <button
                href=""
                class="btn border-neutral100 text-neutral500 font-size-14 mb-4 btn-block text-left"
              >
                <img
                  src="/assets/img/fb.svg"
                  width="20"
                  alt=""
                  class="mr-2_4"
                />
                <span class="align-middle">Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal imageslide-->
  <div
    class="modal fade"
    id="imageslide"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog border-0 modal-dialog-centered modal-lg">
      <div class="modal-content bg-transparent border-0">
        <div class="modal-header border-0">
          <button
            type="button"
            class="close p-2 bg-white"
            data-dismiss="modal"
            aria-label="Close"
            style="border-radius: 100%"
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
        </div>
        <div class="modal-body border-0">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/assets/img/store1.png"
                  class="d-block w-100"
                  alt="/assets/img/store1.png"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/assets/img/store1.png"
                  class="d-block w-100"
                  alt="/assets/img/store1.png"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="/assets/img/store1.png"
                  class="d-block w-100"
                  alt="/assets/img/store1.png"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </button>
          </div>
        </div>
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
    components: {
      vsxIcon,
    },
    props: ["iconName"],
  };
</script>
