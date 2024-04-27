<template>
  <div class="w-full h-full rounded-[9px]">
    <!-- loading -->
    <div v-if="request.pending.value"
      class="top-0 left-0 w-full h-screen fixed z-50 bg-base-350/40 flex justify-center items-center">
      <ToolsLoading class="w-32 h-32" />
    </div>
    <div class="w-full h-auto p-5 bg-white">
      <div class="flex items-center justify-between w-full h-[40%]">
        <div
          class="w-[28%] h-[275px] flex flex-col items-center justify-between bg-base-200 border border-base-400 rounded py-6 px-4">
          <div class="w-full flex items-center">
            <div class="w-[5px] h-5 rounded bg-warning"></div>
            <p class="mr-3">
              {{ config.by_route(`${current_page}/subscription`) }}
              {{ auth.subscription }}
            </p>
          </div>

          <div class="w-full h-36 p-4 flex flex-col items-center justify-between">
            <div class="w-full flex items-center text-sm justify-between">
              <p class="text-[10px]">
                {{ config.by_route(`${current_page}/boxes/bought-date`) }}
              </p>
              <p>{{ auth.started_at }}</p>
            </div>
            <hr class="w-full h-[1px] bg-base-400" />
            <div class="w-full flex items-center text-sm justify-between">
              <p class="text-[10px]">
                {{ config.by_route(`${current_page}/boxes/expire-date`) }}
              </p>
              <p>{{ auth.expire_at }}</p>
            </div>
            <hr class="w-full h-[1px] bg-base-400" />
            <div class="w-full flex items-center text-sm justify-between">
              <p class="text-[10px]">
                {{ config.by_route(`${current_page}/boxes/remained-days`) }}
              </p>
              <p>{{ auth.remained_days }} {{ config.by_route(`${current_page}/day`) }}</p>
            </div>
          </div>
          <NuxtLink to="/buy-subscription" class="w-[117px] h-8 rounded-lg btn-primary p-1 text-sm">
            {{ config.by_route(`${current_page}/buttons/subscription-renewal`) }}
          </NuxtLink>
        </div>
        <div
          class="w-[28%] h-[275px] flex flex-col items-center justify-between bg-base-200 border border-base-400 rounded py-6 px-4">
          <div class="w-full flex items-center text-xs">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 11.95C4.75 11.95 4.54167 11.8627 4.375 11.688C4.20833 11.5127 4.125 11.3 4.125 11.05C4.125 10.8167 4.20833 10.6127 4.375 10.438C4.54167 10.2627 4.75 10.175 5 10.175C5.25 10.175 5.45833 10.2627 5.625 10.438C5.79167 10.6127 5.875 10.8167 5.875 11.05C5.875 11.3 5.79167 11.5127 5.625 11.688C5.45833 11.8627 5.25 11.95 5 11.95ZM9 11.95C8.75 11.95 8.54167 11.8627 8.375 11.688C8.20833 11.5127 8.125 11.3 8.125 11.05C8.125 10.8167 8.20833 10.6127 8.375 10.438C8.54167 10.2627 8.75 10.175 9 10.175C9.25 10.175 9.45833 10.2627 9.625 10.438C9.79167 10.6127 9.875 10.8167 9.875 11.05C9.875 11.3 9.79167 11.5127 9.625 11.688C9.45833 11.8627 9.25 11.95 9 11.95ZM13 11.95C12.75 11.95 12.5417 11.8627 12.375 11.688C12.2083 11.5127 12.125 11.3 12.125 11.05C12.125 10.8167 12.2083 10.6127 12.375 10.438C12.5417 10.2627 12.75 10.175 13 10.175C13.25 10.175 13.4583 10.2627 13.625 10.438C13.7917 10.6127 13.875 10.8167 13.875 11.05C13.875 11.3 13.7917 11.5127 13.625 11.688C13.4583 11.8627 13.25 11.95 13 11.95ZM2.3 19.5C1.8 19.5 1.375 19.325 1.025 18.975C0.675 18.625 0.5 18.2 0.5 17.7V4.3C0.5 3.8 0.675 3.375 1.025 3.025C1.375 2.675 1.8 2.5 2.3 2.5H3.7V1.125C3.7 0.908333 3.77067 0.729 3.912 0.587C4.054 0.445667 4.23333 0.375 4.45 0.375C4.68333 0.375 4.87067 0.45 5.012 0.6C5.154 0.75 5.225 0.933333 5.225 1.15V2.5H12.8V1.1C12.8 0.9 12.875 0.729 13.025 0.587C13.175 0.445667 13.35 0.375 13.55 0.375C13.7667 0.375 13.9457 0.45 14.087 0.6C14.229 0.75 14.3 0.925 14.3 1.125V2.5H15.7C16.2 2.5 16.625 2.675 16.975 3.025C17.325 3.375 17.5 3.8 17.5 4.3V17.7C17.5 18.2 17.325 18.625 16.975 18.975C16.625 19.325 16.2 19.5 15.7 19.5H2.3ZM2.3 18H15.7C15.7833 18 15.8543 17.971 15.913 17.913C15.971 17.8543 16 17.7833 16 17.7V8.3H2V17.7C2 17.7833 2.02933 17.8543 2.088 17.913C2.146 17.971 2.21667 18 2.3 18ZM2 6.8H16V4.3C16 4.21667 15.971 4.146 15.913 4.088C15.8543 4.02933 15.7833 4 15.7 4H2.3C2.21667 4 2.146 4.02933 2.088 4.088C2.02933 4.146 2 4.21667 2 4.3V6.8Z"
                fill="#002145" />
            </svg>
            <p class="mr-3">
              {{ config.by_route(`${current_page}/boxes/remained-days`) }}
            </p>
          </div>
          <div class="w-full h-36 px-4 flex flex-col items-center justify-center">
            <ProgressRadial :value="auth.remained_days / auth.full_time * 100" size="130px"
              strokeWidth="10px">
              <span class="text-extrabold text-2xl">
                {{ auth.remained_days }}
              </span>
            </ProgressRadial>
          </div>
          <div class="w-full flex items-center justify-evenly text-[10px]">
            <div class="w-20 flex items-center justify-around">
              <div class="w-2 h-2 rounded-[2px] bg-primary"></div>
              <p>
                {{ config.by_route(`${current_page}/boxes/used`) }}
              </p>
            </div>
            <div class="w-20 flex items-center justify-around">
              <div class="w-2 h-2 rounded-[2px] bg-base-400"></div>
              <p>
                {{ config.by_route(`${current_page}/boxes/remained`) }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-[38%] h-[275px] flex flex-col items-center justify-between bg-base-200 border border-base-400 rounded py-3 px-4">
          <img src="../../public/images/Rectangle.png" alt="Rectangle" class="w-[220px] h-[205px]" />
          <NuxtLink to="/buy-subscription" class="w-[168px] h-8 rounded-lg btn-primary text-sm">
            {{ config.by_route(`${current_page}/buttons/buy-subscription`) }}
          </NuxtLink>
        </div>
      </div>
      <hr class="w-full h-[1px] bg-base-400 my-7" />
      <div class="flex flex-col w-full h-[92%]">
        <p class="text-lg">
          {{ config.by_route(`${current_page}/tools/status`) }}
        </p>
        <div class="w-full h-auto flex flex-wrap justify-between items-center">
          <div class="w-[48%] h-[111px] py-3 flex border border-base-400 rounded mt-[38px]" v-for="limit in limits.list"
            :class="config.by_route(`${current_page}/limits-list/${limit.feature}`) ===
              'undefined'
              ? 'hidden'
              : ''
              ">
            <div class="w-[70%]">
              <div class="flex text-sm items-center">
                <div class="w-[2px] h-5 rounded-[1px] bg-primary ml-3"></div>
                <p>
                  {{ config.by_route(`${current_page}/limits-list/${limit.feature}`) }}
                </p>
              </div>
              <div class="w-full text-[10px] h-full flex items-center justify-around">
                <div class="flex flex-col items-center justify-center gap-1">
                  <p>
                    {{ config.by_route(`${current_page}/tools/count-of-words`) }}
                  </p>
                  <div class="bg-base-250 flex items-center justify-center text-xs w-fit px-2 py-[2px] rounded">
                    <p>{{ limit.budget }}</p>
                  </div>
                </div>
                <div class="flex flex-col items-center justify-center gap-1">
                  <p>
                    {{ config.by_route(`${current_page}/tools/count-of-used-words`) }}
                  </p>
                  <div class="bg-base-250 flex items-center justify-center text-xs w-fit px-2 py-[2px] rounded">
                    <p>{{ limit.budget - limit.remained }}</p>
                  </div>
                </div>
                <div class="flex flex-col items-center justify-center gap-1">
                  <p>
                    {{ config.by_route(`${current_page}/tools/count-of-remained-words`) }}
                  </p>
                  <div class="bg-base-250 flex items-center justify-center text-xs w-fit px-2 py-[2px] rounded">
                    <p>{{ limit.remained }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[30%] h-full flex items-center justify-center">
              <ProgressRadial :value="limit.remained / limit.budget * 100" size="80px" strokeWidth="6px">
                <span class="text-extrabold  text-2xl">
                  {{ limit.remained }}
                </span>
              </ProgressRadial>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Config from "~~/composables/Config";
import Request from "~~/Api/Request";
import jalaliMoment from "jalali-moment";
import { usePlanStore } from "~/store/plan";
import { useLimitsStore } from "~/store/limits";

const plan = usePlanStore();
const limits = useLimitsStore();
const current_page = "pages/subscription-status";
const config = new Config();
const request = new Request("v1");
const auth = ref({
  subscription: "",
  expire_at: "",
  started_at: "",
  full_time: "",
  remained_days: "",
});

onMounted(() => {
  collect_limits().then(() => {
    auth.value = {
      subscription: `${config.by_route(
        `constants/plans/${plan.plan.name}`
      )} ${config.by_route(`constants/packages/${plan.plan.package}`)}`,
      expire_at: `${jalaliMoment(plan.expire_at, "YYYY-MM-DD HH:mm:ss").format(
        "jYYYY/jMM/jDD"
      )}`,
      started_at: `${jalaliMoment(plan.created_at).format("jYYYY/jMM/jDD")}`,
      full_time: Math.floor(
        (new Date(plan.expire_at) - new Date(plan.created_at)) / (1000 * 60 * 60 * 24)
      ),
      remained_days: Math.floor(
        (new Date(plan.expire_at) - new Date()) / (1000 * 60 * 60 * 24)
      ),
    };
  });
});

async function collect_limits() {
  let response = await request
    .get("profile/limits")
    .then((response) => {
      limits.updateLimitsData(response.data);
    })
    .catch((err) => {
      // TODO send error message
      console.log(err);
    });
}
</script>
