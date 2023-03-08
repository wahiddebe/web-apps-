<template>
  <div class="d-flex justify-content-between mb-4">
    <div class="w-50">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id=""
          placeholder="Search store here..."
        />
      </div>
    </div>
    <div class="">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-outline-neutral500 font-size-14 dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          20 KM
        </button>
        <div class="dropdown-menu">
          <div class="dropdown-item bg-white text-neutral500">
            <input
              type="range"
              min="1"
              max="5"
              value="2"
              id="my-range"
              list="my-datalist"
            />
            <datalist
              id="my-datalist"
              class="font-size-14"
              style="--list-length: 5"
            >
              <option>0 km</option>
              <option>2 km</option>
              <option>5 km</option>
              <option>10 km</option>
              <option>20 km</option>
            </datalist>
          </div>
        </div>
      </div>
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
    <div class="">
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-outline-neutral500 font-size-14 dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Sort by : Nearest
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Nearest</a>
          <a class="dropdown-item" href="#">Popularity</a>
          <a class="dropdown-item" href="#">Rating (Low to High)</a>
          <a class="dropdown-item" href="#">Rating (High to Low)</a>
        </div>
      </div>
    </div>
    <div class="">
      <a href="/explore-map" class="btn btn-primary100 font-size-14">
        <vsx-icon
          iconName="Map1"
          :size="20"
          type="bold"
          class="align-middle mr-1"
        />
        <span>Maps View</span>
      </a>
    </div>
  </div>

  <div class="row">
    <div class="col-md-3 mb-4">
      <a href="/detail-store" class="text-neutral500">
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
    <div class="col-md-3 mb-4">
      <a href="/detail-store" class="text-neutral500">
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
    <div class="col-md-3 mb-4">
      <a href="/detail-store" class="text-neutral500">
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
    <div class="col-md-3 mb-4">
      <a href="/detail-store" class="text-neutral500">
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
    <div class="col-md-3 mb-4">
      <a href="/detail-store" class="text-neutral500">
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
    <div class="col-md-3 mb-4">
      <a href="/detail-store" class="text-neutral500">
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
