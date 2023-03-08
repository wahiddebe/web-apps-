<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
    <div class="container">
      <a class="navbar-brand mr-5 pr-4" href="/">
        <img
          src="/assets/img/logo.svg"
          class="img-fluid"
          width="73"
          height="32"
          alt=""
        />
      </a>
      <div
        v-if="
          $route.name === 'Dashboard' ||
          $route.name === 'Membership' ||
          $route.name === 'Explore' ||
          $route.name === 'Profil'
        "
        class="d-lg-none d-block ml-auto"
      >
        <Notif />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-lg-2" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" v-if="$route.meta.logged === true">
          <router-link to="/" v-slot="{ href, navigate, isActive }">
            <li :class="[isActive && 'active', 'nav-item']">
              <a
                class="nav-link"
                :class="isActive ? 'bg-primary100 rounded-xxl' : ''"
                :href="href"
                @click="navigate"
              >
                <vsx-icon
                  iconName="Category"
                  :size="24"
                  :type="isActive ? 'bold' : 'linear'"
                />
                <span :class="[isActive && 'text-neutral500', 'ml-2']"
                  >Dashboard</span
                >
              </a>
            </li>
          </router-link>
          <router-link to="/explore" v-slot="{ href, navigate, isActive }">
            <li :class="[isActive && 'active', 'nav-item']">
              <a
                class="nav-link"
                :class="isActive ? 'bg-primary100 rounded-xxl' : ''"
                :href="href"
                @click="navigate"
              >
                <vsx-icon
                  iconName="Discover"
                  :size="24"
                  :type="isActive ? 'bold' : 'linear'"
                />
                <span :class="[isActive && 'text-neutral500', 'ml-2']"
                  >Explore</span
                >
              </a>
            </li>
          </router-link>
          <router-link to="/membership" v-slot="{ href, navigate, isActive }">
            <li :class="[isActive && 'active', 'nav-item']">
              <a
                :class="isActive ? 'bg-primary100 rounded-xxl' : ''"
                class="nav-link"
                :href="href"
                @click="navigate"
              >
                <vsx-icon
                  :iconName="isActive ? 'Crown1' : 'Crown'"
                  :size="24"
                  :type="isActive ? 'bold' : 'linear'"
                />
                <span :class="[isActive && 'text-neutral500', 'ml-2']"
                  >Membership</span
                >
              </a>
            </li>
          </router-link>
        </ul>
        <div
          class="d-none d-lg-block ml-auto"
          v-if="$route.meta.logged === true"
        >
          <Notif />
        </div>
        <button
          class="btn btn-outline-neutral500 px-4 py-2 font-weight-bold font-size-14"
          :class="$route.meta.logged === true ? '' : 'ml-auto'"
          type="submit"
        >
          Switch to Merchant
        </button>
        <ul class="navbar-nav" v-if="$route.meta.logged === true">
          <li class="nav-item dropdown">
            <a
              class="nav-link py-0"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src="/assets/img/user.png"
                width="40"
                height="40"
                class="rounded-circle mr-1"
              />
              <span>
                <vsx-icon
                  iconName="ArrowDown2"
                  :size="16"
                  :type="isActive ? 'bold' : 'linear'"
                  class="ml-1"
                />
              </span>
            </a>

            <div
              class="dropdown-menu dropdown-menu-right px-4 py-2 mt-2"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a class="dropdown-item p-0 my-3 mr-3" href="/following">
                <span class="mr-2">
                  <vsx-icon
                    iconName="UserTag"
                    :size="20"
                    type="linear"
                    class="text-neutral500"
                  />
                </span>
                Following
              </a>
              <a class="dropdown-item p-0 my-3 mr-3" href="/profil">
                <span class="mr-2">
                  <vsx-icon
                    iconName="Setting2"
                    :size="20"
                    type="linear"
                    class="text-neutral500"
                  />
                </span>
                Profile Setting
              </a>
              <div class="line bg-neutral100"></div>
              <a class="dropdown-item text-danger p-0 my-3 mr-3" href="/signin">
                <span class="mr-2">
                  <vsx-icon
                    iconName="Logout"
                    :size="20"
                    type="linear"
                    class="text-danger"
                  />
                </span>
                Log Out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import { vsxIcon } from "vue-iconsax";
  import Notif from "./Notification.vue";

  export default {
    components: {
      vsxIcon,
      Notif,
    },
    props: ["iconName"],
  };
</script>
