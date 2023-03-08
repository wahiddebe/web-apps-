<template>
  <h6 class="font-size-24 font-weight-bold mb-4">Account Information</h6>
  <div class="d-flex justify-content-center mb-4">
    <div class="p-4 bg-white rounded-llg text-center w-30">
      <img
        src="/assets/img/user.png"
        width="80"
        height="80"
        class="mb-3 rounded-circle"
        alt=""
      />
      <h6 class="font-size-24 mb-1 font-weight-bold">John Doe</h6>
      <a href="" class="text-neutral300 font-weight-medium font-size-18"
        >Johndoe.gans@gmail.com</a
      >
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-md-4">
      <a href="/profil/information" class="text-neutral300 card-profile">
        <div class="bg-white rounded-llg p-4 d-flex justify-content-between">
          <div class="d-flex">
            <div
              class="bg-neutral100 p-2_4 rounded-llg d-inline-block mr-3 icon-wrap"
            >
              <vsx-icon
                iconName="ProfileCircle"
                :size="32"
                type="bold"
                class=""
              />
            </div>
            <div class="align-self-center">
              <h6 class="font-weight-semi-bold mb-1 text-neutral500">
                Account Information
              </h6>
              <p class="text-neutral300 font-size-12">Photo, name & email</p>
            </div>
          </div>
          <div class="align-self-center arrow-wrap">
            <vsx-icon
              iconName="ArrowRight2"
              :size="24"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="col-md-4">
      <a href="/profil/login-details" class="text-neutral300 card-profile">
        <div class="bg-white rounded-llg p-4 d-flex justify-content-between">
          <div class="d-flex">
            <div
              class="bg-neutral100 p-2_4 rounded-llg d-inline-block mr-3 icon-wrap"
            >
              <vsx-icon
                iconName="ShieldSecurity"
                :size="32"
                type="bold"
                class=""
              />
            </div>
            <div class="align-self-center">
              <h6 class="font-weight-semi-bold mb-1 text-neutral500">
                Login Details
              </h6>
              <p class="text-neutral300 font-size-12">
                Change Password & Security
              </p>
            </div>
          </div>
          <div class="align-self-center arrow-wrap">
            <vsx-icon
              iconName="ArrowRight2"
              :size="24"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="col-md-4">
      <a href="/profil/payment" class="text-neutral300 card-profile">
        <div class="bg-white rounded-llg p-4 d-flex justify-content-between">
          <div class="d-flex">
            <div
              class="bg-neutral100 p-2_4 rounded-llg d-inline-block mr-3 icon-wrap"
            >
              <vsx-icon
                iconName="DollarCircle"
                :size="32"
                type="bold"
                class=""
              />
            </div>
            <div class="align-self-center">
              <h6 class="font-weight-semi-bold mb-1 text-neutral500">
                Payment Method
              </h6>
              <p class="text-neutral300 font-size-12">Setup payment methods</p>
            </div>
          </div>
          <div class="align-self-center arrow-wrap">
            <vsx-icon
              iconName="ArrowRight2"
              :size="24"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="row mb-4">
    <div class="col-md-4">
      <a href="/profil/membership" class="text-neutral300 card-profile">
        <div class="bg-white rounded-llg p-4 d-flex justify-content-between">
          <div class="d-flex">
            <div
              class="bg-neutral100 p-2_4 rounded-llg d-inline-block mr-3 icon-wrap"
            >
              <vsx-icon iconName="Crown1" :size="32" type="bold" class="" />
            </div>
            <div class="align-self-center">
              <h6 class="font-weight-semi-bold mb-1 text-neutral500">
                Membership
              </h6>
              <p class="text-neutral300 font-size-12">
                View or edit your membership plan
              </p>
            </div>
          </div>
          <div class="align-self-center arrow-wrap">
            <vsx-icon
              iconName="ArrowRight2"
              :size="24"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="col-md-4">
      <a href="/profil/notification" class="text-neutral300 card-profile">
        <div class="bg-white rounded-llg p-4 d-flex justify-content-between">
          <div class="d-flex">
            <div
              class="bg-neutral100 p-2_4 rounded-llg d-inline-block mr-3 icon-wrap"
            >
              <vsx-icon
                iconName="Notification"
                :size="32"
                type="bold"
                class=""
              />
            </div>
            <div class="align-self-center">
              <h6 class="font-weight-semi-bold mb-1 text-neutral500">
                Notification
              </h6>
              <p class="text-neutral300 font-size-12">
                Set your notification settings
              </p>
            </div>
          </div>
          <div class="align-self-center arrow-wrap">
            <vsx-icon
              iconName="ArrowRight2"
              :size="24"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="col-md-4">
      <a href="/profil/scurity" class="text-neutral300 card-profile">
        <div class="bg-white rounded-llg p-4 d-flex justify-content-between">
          <div class="d-flex">
            <div
              class="bg-neutral100 p-2_4 rounded-llg d-inline-block mr-3 icon-wrap"
            >
              <vsx-icon
                iconName="ShieldSecurity"
                :size="32"
                type="bold"
                class=""
              />
            </div>
            <div class="align-self-center">
              <h6 class="font-weight-semi-bold mb-1 text-neutral500">
                Security
              </h6>
              <p class="text-neutral300 font-size-12">
                Set your security preferences
              </p>
            </div>
          </div>
          <div class="align-self-center arrow-wrap">
            <vsx-icon
              iconName="ArrowRight2"
              :size="24"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </a>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4 align-self-center">
      <a href="/profil/preference" class="text-neutral300 card-profile">
        <div class="bg-white rounded-llg p-4 d-flex justify-content-between">
          <div class="d-flex">
            <div
              class="bg-neutral100 p-2_4 rounded-llg d-inline-block mr-3 icon-wrap"
            >
              <vsx-icon iconName="Setting2" :size="32" type="bold" class="" />
            </div>
            <div class="align-self-center">
              <h6 class="font-weight-semi-bold mb-1 text-neutral500">
                Preferences
              </h6>
              <p class="text-neutral300 font-size-12">
                Setup country and language
              </p>
            </div>
          </div>
          <div class="align-self-center arrow-wrap">
            <vsx-icon
              iconName="ArrowRight2"
              :size="24"
              type="linear"
              class="text-neutral500"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="col-md-4"></div>
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
