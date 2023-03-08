<template>
  <p class="mb-4_5 font-weight-bold font-size-14">
    Profile Setting / Membership Plan<span class="ml-1 text-neutral300"
      >/ Billing Details</span
    >
  </p>
  <div class="row mb-4">
    <div class="col-md-3">
      <div
        class="bg-white rounded-llg p-4 d-flex align-items-center flex-column h-100"
      >
        <h6 class="font-size-18 font-weight-bold mb-2_4">Membership Plan</h6>
        <div
          class="py-2_4 bg-neutral300 rounded-l w-90 text-center font-weight-semi-bold font-size-14 text-white"
        >
          <vsx-icon iconName="Crown1" :size="20" type="bold" class="mr-2" />
          <span class="align-middle">Platinum Member</span>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="bg-white rounded-llg p-4 d-flex align-items-center flex-column h-100"
      >
        <h6 class="font-size-18 font-weight-bold mb-2_4">Next billing date</h6>
        <div class="py-2_4 text-center font-weight-medium font-size-14">
          <p class="">2 January 2022, 19:30 WIB</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="bg-white rounded-llg p-4 d-flex align-items-center flex-column h-100"
      >
        <h6 class="font-size-18 font-weight-bold mb-2_4">Pricing</h6>
        <div class="py-2_4 text-center font-weight-medium font-size-14">
          <p class="">Rp 60.000 / Month</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div
        class="bg-white rounded-llg p-4 d-flex align-items-center flex-column h-100"
      >
        <h6 class="font-size-18 font-weight-bold mb-2_4">Payment Method</h6>
        <div class="py-2 d-flex font-weight-medium font-size-14">
          <div class="mr-2 border border-ede8e9 rounded-l px-2 py-2">
            <img
              src="/assets/img/mastercard.svg"
              height="9.33"
              width="15.1"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="align-self-center">
            <p class="">Platinum Member</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h6 class="font-size-18 font-weight-bold mb-2_4">Membership History</h6>
  <div class="bg-white rounded-llg overflow-hidden">
    <b-table
      :items="items"
      :fields="fields"
      :striped="striped"
      :bordered="bordered"
      :head-variant="headVariant"
      :borderless="borderless"
      :current-page="currentPage"
      table-variant="white"
      :per-page="perPage"
      show-empty
      class="mb-0"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(membership)="row">
        <div class="font-weight-semi-bold">
          <vsx-icon
            iconName="Crown1"
            :size="32"
            type="bold"
            class="mr-3"
            :class="
              row.item.membership === 'Gold Membership'
                ? 'text-primary500'
                : row.item.membership === 'Platinum Membership'
                ? 'text-neutral300'
                : 'text-'
            "
          />
          <span class="align-middle">
            {{ row.item.membership }}
          </span>
        </div>
      </template>
      <template #cell(start)="row">
        <div class="font-weight-semi-bold text-neutral300 font-size-14">
          {{ row.item.start }}
        </div>
      </template>
      <template #cell(end)="row">
        <div class="font-weight-semi-bold text-neutral300 font-size-14">
          {{ row.item.end }}
        </div>
      </template>
      <template #cell(payment)="row">
        <div class="font-weight-medium font-size-14">
          <div class="py-2 px-2 border border-ede8e9 rounded-l d-inline mr-3">
            <img
              src="/assets/img/mastercard.svg"
              height="9.33"
              width="15.1"
              alt=""
              v-if="row.item.paymentType === 'mastercard'"
            />
            <img
              src="/assets/img/visa.svg"
              height="9.33"
              width="15.1"
              alt=""
              v-else
            />
          </div>
          <span class="align-middle">
            {{ row.item.payment }}
          </span>
        </div>
      </template>
      <template #cell(total)="row">
        <div class="font-weight-semi-bold text-neutral300 font-size-14">
          {{ row.item.total }}
        </div>
      </template>
      <template #cell(status)="row">
        <div
          class="font-weight-semi-bold font-size-14 px-2 py-1 d-inline-flex rounded-l"
          :class="
            row.item.status === 'Active'
              ? 'bg-259F4612 text-success'
              : 'bg-E25C5C12 text-danger'
          "
        >
          {{ row.item.status }}
        </div>
      </template>
    </b-table>
    <!-- User Interface controls -->
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
</template>

<script>
  import { vsxIcon } from "vue-iconsax";

  export default {
    data() {
      return {
        items: [
          {
            membership: "Gold Membership",
            start: "2 Jan 2022, 19:30 WIB",
            end: "4 Jan 2023, 19:30 WIB ",
            payment: "**** 8328",
            paymentType: "visa",
            total: "Rp 100.000",
            status: "Active",
          },
          {
            membership: "Platinum Membership",
            start: "2 Jan 2022, 19:30 WIB",
            end: "4 Jan 2023, 19:30 WIB ",
            payment: "**** 8328",
            paymentType: "mastercard",
            total: "Rp 100.000",
            status: "Ended",
          },
          {
            membership: "Titanium Membership",
            start: "2 Jan 2022, 19:30 WIB",
            end: "4 Jan 2023, 19:30 WIB ",
            payment: "**** 8328",
            paymentType: "visa",
            total: "Rp 100.000",
            status: "Ended",
          },
        ],
        fields: [
          {
            key: "membership",
            label: "MEMBERSHIP",
          },
          {
            key: "start",
            label: "START DATE",
          },
          {
            key: "end",
            label: "END DATE",
          },
          {
            key: "payment",
            label: "PAYMENT METHOD",
          },
          {
            key: "total",
            label: "TOTAL",
          },
          {
            key: "status",
            label: "STATUS",
          },
        ],
        totalRows: 1,
        currentPage: 1,
        striped: false,
        bordered: false,
        borderless: true,
        headVariant: "light",
        perPage: 10,
        pageOptions: [10, 15],
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
    components: {
      vsxIcon,
    },
    props: ["iconName"],
    mounted() {
      // Set the initial number of items
      this.totalRows = this.items.length;
    },
  };
</script>
