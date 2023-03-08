<template>
  <div class="row mb-4">
    <div class="col-md-10">
      <p class="mb-2 font-weight-bold font-size-14">
        Dashboard <span class="ml-1 text-neutral300">/ Following</span>
      </p>
      <h5 class="font-weight-bold font-size-24">24 Following</h5>
      <!-- 0 Following -->
      <!-- <h5 class="font-weight-bold font-size-24 mb-4">0 Following</h5>  -->
    </div>
    <div class="col-md-2">
      <div class="form-group">
        <select class="form-control" id="">
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  </div>

  <!-- 0 Following -->
  <!--
  <div
    class="bg-white rounded-xl d-flex flex-column text-center align-items-center justify-content-center"
    style="min-height: 65vh"
  >
    <div class="bg-primary100 rounded-l p-4 text-neutral500">
      <vsx-icon iconName="Shop" :size="32" type="bold" class="" />
    </div>
    <div class="my-4 w-50">
      <h5 class="font-weight-bold font-size-24 mb-2">
        You don't follow any merchant yet
      </h5>
      <p class="text-neutral400">
        Start exploring to see your favorite merchant. You will get notified
        about promos and product too!
      </p>
    </div>
    <button class="btn btn-primary500 text-white p-2_5 w-25">
      Explore merchant
    </button>
  </div> -->

  <div class="row">
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-primary500 text-white py-2 btn-block font-size-14"
        >
          <vsx-icon
            iconName="Add"
            :size="16"
            type="linear"
            class="align-middle mr-2"
          />
          <span class="align-middle"> Follow </span>
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
      </div>
    </div>
    <div class="col-md-3">
      <div class="bg-white rounded-llg mb-4 p-3">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-2">
            <img
              src="/assets/img/merchant-profil.png"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                Parileis Store
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                Jl. Gatot Soebroto 16, No. 25
              </p>
            </div>
          </div>
        </div>
        <div class="line bg-neutral200 my-3"></div>
        <button
          class="btn btn-outline-neutral100 text-neutral500 py-2 btn-block font-size-14"
        >
          Unfollow
        </button>
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
