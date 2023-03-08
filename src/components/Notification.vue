<template>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item dropdown notification-ui">
      <a
        class="nav-link dropdown-toggle notification-ui_icon"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <vsx-icon
          iconName="Notification"
          :size="24"
          type="bold"
          class="text-neutral500"
        />
        <span class="unread-notification bg-danger"></span>
      </a>
      <div
        class="dropdown-menu notification-ui_dd dropdown-menu-right"
        aria-labelledby="navbarDropdown"
      >
        <div class="d-flex flex-coloumn justify-content-between py-3 px-4">
          <p class="text-neutral500 font-size-18 font-weight-bold">
            Notification
          </p>
          <a class="text-primary500 font-size-14 align-self-center" href="#"
            >Mark all as read</a
          >
        </div>
        <div class="notification-ui_dd-content">
          <a href="#" class="">
            <div
              class="d-flex flex-coloumn w-100 px-4 py-3 notification-list notification-list--unread"
            >
              <div class="mr-2">
                <img
                  src="/assets/img/merchant-profil.png"
                  class="rounded-l img-fliud"
                  alt=""
                  height="40"
                  width="40"
                />
              </div>
              <div class="w-100 ml-1">
                <p
                  class="text-neutral300 font-size-14 font-weight-medium mb-12"
                >
                  <span class="font-weight-semi-bold text-neutral500">
                    Payment </span
                  >for Gold Membership has completed!
                </p>
                <p class="text-neutral300 font-size-12">5 min ago</p>
              </div>
            </div>
          </a>
          <a href="#" class="">
            <div class="d-flex flex-coloumn w-100 px-4 py-3 notification-list">
              <div class="mr-2">
                <img
                  src="/assets/img/merchant-profil.png"
                  class="rounded-l img-fliud"
                  alt=""
                  height="40"
                  width="40"
                />
              </div>
              <div class="w-100 ml-1">
                <p
                  class="text-neutral300 font-size-14 font-weight-medium mb-12"
                >
                  <span class="font-weight-semi-bold text-neutral500">
                    Payment </span
                  >for Gold Membership has completed!
                </p>
                <p class="text-neutral300 font-size-12">2 hours ago</p>
                <div
                  class="sub-notification-list p-1 bg-fafafa d-flex flex-coloumn w-100 mt-1 rounded-l"
                >
                  <div class="mr-2">
                    <img
                      src="/assets/img/merchant-profil.png"
                      class="rounded-sm img-fliud"
                      alt=""
                      height="52"
                      width="52"
                    />
                  </div>
                  <div class="w-100 ml-1 align-self-center">
                    <p
                      class="text-neutral500 font-size-14 font-weight-semi-bold mb-12"
                    >
                      Get 50% Off!
                    </p>
                    <p class="text-neutral300 font-size-12">
                      Get promo up to 50% by purchasing 2 it..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="#" class="">
            <div class="d-flex flex-coloumn w-100 px-4 py-3 notification-list">
              <div class="mr-2">
                <img
                  src="/assets/img/merchant-profil.png"
                  class="rounded-l img-fliud"
                  alt=""
                  height="40"
                  width="40"
                />
              </div>
              <div class="w-100 ml-1">
                <p
                  class="text-neutral300 font-size-14 font-weight-medium mb-12"
                >
                  <span class="font-weight-semi-bold text-neutral500">
                    Payment </span
                  >for Gold Membership has completed!
                </p>
                <p class="text-neutral300 font-size-12">5 min ago</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </li>
  </ul>
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
