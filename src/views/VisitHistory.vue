<template>
  <p class="mb-4_5 font-weight-bold font-size-14">
    Dashboard <span class="ml-1 text-neutral300">/ Visit History</span>
  </p>
  <!-- User Interface controls -->
  <b-row class="mb-4">
    <b-col lg="7">
      <h6 class="font-size-18 font-weight-bold mb-2_4">Visit History</h6>
    </b-col>
    <b-col lg="3" class="">
      <b-form-group
        label=""
        label-for="filter-input"
        label-cols-sm="3"
        label-align-sm="right"
        label-size="sm"
        class="mb-0"
      >
        <b-input-group size="sm">
          <!-- <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Clear</b-button
              >
            </b-input-group-append> -->
          <b-form-input
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Search store here ..."
          ></b-form-input>
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col lg="2" class="">
      <b-form-group
        label=""
        label-for="sort-by-select"
        label-cols-sm="0"
        label-align-sm="right"
        label-size="sm"
        class="mb-0"
        v-slot="{ ariaDescribedby }"
      >
        <b-input-group size="sm">
          <!-- <b-form-select
              id="sort-by-select"
              v-model="sortBy"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </b-form-select> -->

          <b-form-select
            v-model="sortDesc"
            :aria-describedby="ariaDescribedby"
            size="sm"
            class="w-25"
          >
            <option :value="false">Recent</option>
            <option :value="true">Oldest</option>
          </b-form-select>
        </b-input-group>
      </b-form-group>
    </b-col>
  </b-row>

  <!-- Main table element -->
  <div class="bg-white rounded-llg overflow-hidden">
    <b-table
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filter-included-fields="filterOn"
      :sort-by="sortBy"
      :sort-desc="sortDesc"
      :sort-direction="sortDirection"
      table-variant="white"
      :striped="striped"
      :bordered="bordered"
      :head-variant="headVariant"
      :borderless="borderless"
      stacked="md"
      show-empty
      small
      @filtered="onFiltered"
      class="mb-0"
    >
      <template #cell(place)="row">
        <div class="d-flex flex-coloumn w-100">
          <div class="mr-3">
            <img
              :src="row.value.img"
              class="rounded-l img-fliud"
              alt=""
              height="40"
              width="40"
            />
          </div>
          <div class="w-100">
            <div class="mb-0_5">
              <p class="text-neutral500 font-size-14 font-weight-medium">
                {{ row.value.first }}
              </p>
            </div>
            <div class="d-flex flex-row justify-content-between">
              <p class="text-neutral300 font-size-14">
                {{ row.value.last }}
              </p>
            </div>
          </div>
        </div>
      </template>
      <template #cell(promo_used)="row">
        <div class="font-weight-semi-bold">
          {{ row.item.promo_used }}
        </div>
      </template>
      <template #cell(rating)="row">
        <div class="font-weight-semi-bold" v-if="row.item.rating != null">
          {{ row.item.rating }}
        </div>
        <div class="font-weight-semi-bold" v-else>
          <button
            class="px-4 py-1 btn btn-outline-neutral500 font-size-12"
            :id="row.index"
          >
            Give Rating
          </button>
        </div>
      </template>
      <template #cell(date)="row">
        <div class="font-weight-semi-bold text-neutral300 font-size-14">
          {{ row.item.date }}
        </div>
      </template>
    </b-table>
    <b-row class="px-4 py-4 font-size-14 font-weight-medium">
      <b-col sm="6" md="7" class="my-1">
        <b-form-group
          label="Showing"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="2"
          label-align-sm="left"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
            class="w-auto bg-neutral100"
            cols="*"
          >
          </b-form-select>
          <span class="ml-2">of {{ totalRows }}</span>
        </b-form-group>
      </b-col>

      <b-col sm="6" md="5" class="my-1 text-right">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0 d-inline-flex"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
  <!-- Info modal -->
  <b-modal
    :id="infoModal.id"
    :title="infoModal.title"
    ok-only
    @hide="resetInfoModal"
  >
    <pre>{{ infoModal.content }}</pre>
  </b-modal>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            date: "4 Jan 2023, 19:30 WIB",
            promo_used: "“Buy 1 get 1” voucher",
            place: {
              first: "Parileis Store",
              last: "Jl. Gatot Soebroto 16, No. 25",
              img: "/assets/img/merchant-profil.png",
            },
            rating: null,
          },
          {
            date: "4 Jan 2023, 19:30 WIB",
            promo_used: "“Buy 1 get 1” voucher",
            place: {
              first: "Parileis Store",
              last: "Jl. Gatot Soebroto 16, No. 25",
              img: "/assets/img/merchant-profil.png",
            },
            rating: 4.8,
          },
        ],
        fields: [
          {
            key: "place",
            label: "PLACE",
            sortable: true,
          },
          {
            key: "promo_used",
            label: "PROMO USED",
            sortable: true,
          },
          {
            key: "date",
            label: "DATE",
            sortDirection: "asc",
            sortable: true,
          },
          {
            key: "rating",
            label: "RATING",
            sortable: true,
          },
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
        striped: false,
        bordered: false,
        borderless: true,
        headVariant: "light",
        sortBy: "",
        sortDesc: false,
        sortDirection: "asc",
        filter: null,
        filterOn: [],
        infoModal: {
          id: "info-modal",
          title: "",
          content: "",
        },
      };
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter((f) => f.sortable)
          .map((f) => {
            return { text: f.label, value: f.key };
          });
      },
    },
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length;
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`;
        this.infoModal.content = JSON.stringify(item, null, 2);
        this.$root.$emit("bv::show::modal", this.infoModal.id, button);
      },
      resetInfoModal() {
        this.infoModal.title = "";
        this.infoModal.content = "";
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length;
        this.currentPage = 1;
      },
    },
  };
</script>
