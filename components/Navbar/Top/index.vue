<template>
  <div class="navbar border-b h-[56px] flex bg-base-100 items-center">
    <div class="navbar-start my-auto">
      <div class="flex flex-row gap-5 align-middle">
        <!-- Dashboard icon -->
        <label tabindex="0" class="flex h-fit my-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9_187)">
              <path
                d="M1 18H23C23.2652 18 23.5196 18.1054 23.7071 18.2929C23.8946 18.4804 24 18.7348 24 19C24 19.2652 23.8946 19.5196 23.7071 19.7071C23.5196 19.8946 23.2652 20 23 20H1C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19C0 18.7348 0.105357 18.4804 0.292893 18.2929C0.48043 18.1054 0.734784 18 1 18Z"
                fill="#063468"
              />
              <path
                d="M23 15H9C8.73478 15 8.48043 14.8946 8.29289 14.7071C8.10536 14.5196 8 14.2652 8 14C8 13.7348 8.10536 13.4804 8.29289 13.2929C8.48043 13.1054 8.73478 13 9 13H23C23.2652 13 23.5196 13.1054 23.7071 13.2929C23.8946 13.4804 24 13.7348 24 14C24 14.2652 23.8946 14.5196 23.7071 14.7071C23.5196 14.8946 23.2652 15 23 15Z"
                fill="#063468"
              />
              <path
                d="M23 5H9C8.73478 5 8.48043 4.89464 8.29289 4.70711C8.10536 4.51957 8 4.26522 8 4C8 3.73478 8.10536 3.48043 8.29289 3.29289C8.48043 3.10536 8.73478 3 9 3H23C23.2652 3 23.5196 3.10536 23.7071 3.29289C23.8946 3.48043 24 3.73478 24 4C24 4.26522 23.8946 4.51957 23.7071 4.70711C23.5196 4.89464 23.2652 5 23 5Z"
                fill="#063468"
              />
              <path
                d="M23 10H1C0.734784 10 0.48043 9.89464 0.292893 9.70711C0.105357 9.51957 0 9.26522 0 9C0 8.73478 0.105357 8.48043 0.292893 8.29289C0.48043 8.10536 0.734784 8 1 8H23C23.2652 8 23.5196 8.10536 23.7071 8.29289C23.8946 8.48043 24 8.73478 24 9C24 9.26522 23.8946 9.51957 23.7071 9.70711C23.5196 9.89464 23.2652 10 23 10Z"
                fill="#063468"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_187">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="matrix(1 0 0 -1 0 24)"
                />
              </clipPath>
            </defs>
          </svg>
        </label>
        <!-- Segmento platfrom -->
        <label tabindex="0" class="flex h-fit my-auto gap-2 items-center">
          <span><img src="~/assets/Svg/Segmento.svg" /></span>
          <span> {{ platform }} </span>
        </label>
      </div>
    </div>
    <div class="navbar-end gap-16">
      <!-- Profile section -->
      <div class="flex flex-row gap-3">
        <div class="dropdown dropdown-bottom">
          <label tabindex="0" class="btn btn-ghost btn-square avatar">
            <div class="w-14">
              <img
                src="https://sb.kaleidousercontent.com/67418/1672x1018/6463a5af0d/screenshot-2022-05-24-at-15-22-28.png"
                class="mask mask-squircle"
              />
            </div>
          </label>
          <ul
            tabindex="0"
            class="mt-3 p-2 font-semibold shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-[17rem]"
          >
            <li
              class="btn border border-primary-content rounded-md justify-center px-1 py-2"
            >
              <a>
                <!-- Wallet -->
                <label class="flex gap-1 h-fit">
                  <span class="border-l"
                    ><svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 10.5C13.4333 10.5 13.7917 10.3583 14.075 10.075C14.3583 9.79167 14.5 9.43333 14.5 9C14.5 8.56667 14.3583 8.20833 14.075 7.925C13.7917 7.64167 13.4333 7.5 13 7.5C12.5667 7.5 12.2083 7.64167 11.925 7.925C11.6417 8.20833 11.5 8.56667 11.5 9C11.5 9.43333 11.6417 9.79167 11.925 10.075C12.2083 10.3583 12.5667 10.5 13 10.5ZM2.3 17.5C1.8 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.2 0.5 15.7V2.3C0.5 1.8 0.675 1.375 1.025 1.025C1.375 0.675 1.8 0.5 2.3 0.5H15.7C16.2 0.5 16.625 0.675 16.975 1.025C17.325 1.375 17.5 1.8 17.5 2.3V5.025H16V2.3C16 2.21667 15.971 2.146 15.913 2.088C15.8543 2.02933 15.7833 2 15.7 2H2.3C2.21667 2 2.146 2.02933 2.088 2.088C2.02933 2.146 2 2.21667 2 2.3V15.7C2 15.7833 2.02933 15.8543 2.088 15.913C2.146 15.971 2.21667 16 2.3 16H15.7C15.7833 16 15.8543 15.971 15.913 15.913C15.971 15.8543 16 15.7833 16 15.7V12.975H17.5V15.7C17.5 16.2 17.325 16.625 16.975 16.975C16.625 17.325 16.2 17.5 15.7 17.5H2.3ZM10.3 13.5C9.8 13.5 9.375 13.325 9.025 12.975C8.675 12.625 8.5 12.2 8.5 11.7V6.3C8.5 5.8 8.675 5.375 9.025 5.025C9.375 4.675 9.8 4.5 10.3 4.5H16.7C17.2 4.5 17.625 4.675 17.975 5.025C18.325 5.375 18.5 5.8 18.5 6.3V11.7C18.5 12.2 18.325 12.625 17.975 12.975C17.625 13.325 17.2 13.5 16.7 13.5H10.3Z"
                        fill="#002145"
                      />
                    </svg>
                  </span>
                  <span>
                    {{ wallet.text }}
                  </span>
                  <span> {{ wallet.price }} تومان </span>
                </label>
              </a>
            </li>
            <li class="flex rounded-md justify-center px-1 py-2">
              <a>
                <!-- Wallet -->
                <label class="flex gap-1 h-fit">
                  <span class="border-l-2"
                    ><svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 10.5C13.4333 10.5 13.7917 10.3583 14.075 10.075C14.3583 9.79167 14.5 9.43333 14.5 9C14.5 8.56667 14.3583 8.20833 14.075 7.925C13.7917 7.64167 13.4333 7.5 13 7.5C12.5667 7.5 12.2083 7.64167 11.925 7.925C11.6417 8.20833 11.5 8.56667 11.5 9C11.5 9.43333 11.6417 9.79167 11.925 10.075C12.2083 10.3583 12.5667 10.5 13 10.5ZM2.3 17.5C1.8 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.2 0.5 15.7V2.3C0.5 1.8 0.675 1.375 1.025 1.025C1.375 0.675 1.8 0.5 2.3 0.5H15.7C16.2 0.5 16.625 0.675 16.975 1.025C17.325 1.375 17.5 1.8 17.5 2.3V5.025H16V2.3C16 2.21667 15.971 2.146 15.913 2.088C15.8543 2.02933 15.7833 2 15.7 2H2.3C2.21667 2 2.146 2.02933 2.088 2.088C2.02933 2.146 2 2.21667 2 2.3V15.7C2 15.7833 2.02933 15.8543 2.088 15.913C2.146 15.971 2.21667 16 2.3 16H15.7C15.7833 16 15.8543 15.971 15.913 15.913C15.971 15.8543 16 15.7833 16 15.7V12.975H17.5V15.7C17.5 16.2 17.325 16.625 16.975 16.975C16.625 17.325 16.2 17.5 15.7 17.5H2.3ZM10.3 13.5C9.8 13.5 9.375 13.325 9.025 12.975C8.675 12.625 8.5 12.2 8.5 11.7V6.3C8.5 5.8 8.675 5.375 9.025 5.025C9.375 4.675 9.8 4.5 10.3 4.5H16.7C17.2 4.5 17.625 4.675 17.975 5.025C18.325 5.375 18.5 5.8 18.5 6.3V11.7C18.5 12.2 18.325 12.625 17.975 12.975C17.625 13.325 17.2 13.5 16.7 13.5H10.3Z"
                        fill="#002145"
                      />
                    </svg>
                  </span>
                  <span>
                    {{ wallet.text }}
                  </span>
                  <span> {{ wallet.price }} تومان </span>
                </label>
              </a>
            </li>
            <li><a>Logout</a></li>
          </ul>
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-lg">{{ profile.name }}</div>
          <div class="flex flex-row gap-2 align-baseline">
            <span>
              <radial-progress
                class="w-5 h-5"
                style="--thickness: 4px"
                :value="80"
              />
            </span>
            <span class="text-sm">
              {{ profile.subscription }}
            </span>
          </div>
        </div>
      </div>
      <div>
        <button class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
        <button class="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  platform: {
    type: String,
    required: true,
  },
  wallet: {
    type: Object,
    default: {
      text: "موجودی کیف پول:",
      price: 250000,
    },
  },
  profile: {
    type: Object,
    default: {
      name: "محمد مهدی نورانی",
      subscription: "اشتراک الماسی",
    },
  },
});
</script>