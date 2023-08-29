<template>
  <div class="relative flex flex-col gap-8 items-center w-full [&>div]:w-[64.875rem]" :class="form.plan === null ? 'h-full justify-center' : 'h-auto py-4'">
    <!-- title -->
    <div
      class="absolute top-0 left-0 !w-full !h-full z-50 bg-base-350/40 pointer-events-none flex justify-center items-center"
      v-if="request.pending()">
      <ToolsLoading class="w-32 h-32" />
    </div>
    <div class="absolute -top-11 left-0 !w-full !h-full z-50 bg-base-350/40 justify-center items-center hidden" id="package_factor">
      <div class="flex flex-col justify-between items-center w-[26rem] bg-base-100 rounded-md -mt-32">
        <!-- header -->
        <div
          class="flex flex-row items-center justify-between w-full px-3 py-2 rounded-t-md bg-base-500 text-white text-sm">
          <!-- space -->
          <span class="flex flex-row items-center w-1/4"></span>
          <span class="flex flex-row items-center w-2/4 justify-center">
            رسید نهایی خرید اشتراک
          </span>
          <span class="flex flex-row items-center w-1/4 justify-end px-3">
            <button class="flex flex-row items-center" @click="HTMLController.hide_element('package_factor')">
              &#x2715;
            </button>
          </span>
        </div>

        <!-- content -->
        <div class="flex flex-col w-full p-4 pb-0">
          <!-- package data -->
          <div class="flex flex-col gap-3 items-center w-full text-sm">
            <span>نام اشتراک</span>
            <span class="font-semibold">{{ config.by_route(`constants/packages/${form.package?.name ?? 3}`) ?? 'تستی' }}</span>
            <hr class="w-11/12" />
          </div>

          <!-- plan data -->
          <div class="flex flex-col p-4 items-center justify-center w-full text-sm gap-5">
            <div class="flex flex-row items-center justify-between w-full px-3">
              <span>مدت اشتراک: </span>
              <span>{{ config.by_route(`constants/plans/${form.plan?.name ?? 3}`) }}</span>
            </div>
            <div class="flex flex-row items-center justify-between w-full px-3">
              <span>قیمت اشتراک:</span>
              <span>{{ form.plan?.price.value ?? 25000000 }} تومان</span>
            </div>
            <div class="flex flex-row items-center justify-between w-full px-3">
              <span>تخفیف سگمنتو:</span>
              <span>{{ form.plan?.price.discount ?? 25000000 }} تومان</span>
            </div>
            <div class="flex flex-row items-center justify-between w-full px-3">
              <span>کد تخفیف:</span>
              <span :class="form.discount_code === null ? 'text-error' : ''">{{ form.discount_code ?? 'انتخاب نشده' }}</span>
            </div>
            <div class="flex flex-row items-center justify-between w-full px-3">
              <span>مقدار ریالی تخفیف:</span>
              <span :class="form.discount === null ? 'text-error' : ''">{{ form.discount?.discount ?? 0 }} تومان</span>
            </div>
            <hr class="w-11/12 mx-auto" />
          </div>
          <!-- final price section -->
          <div class="flex flex-col gap-2 items-center text-sm">
            <span class="font-bold">قیمت نهایی و پرداخت</span>
            <span>{{ form.discount?.final ?? form.plan?.price.final ?? 2000000 }} تومان</span>
            <hr class="w-11/12 mx-auto" />
          </div>

          <form @submit.prevent="buy_the_package()" class="text-sm flex flex-col items-center w-full justify-center py-2">
            <button type="submit" class="btn-primary w-11/12">خرید اشتراک</button>
          </form>
        </div>
      </div>
    </div>
    <!-- package -->
    <div class="flex flex-row items-center justify-between">
      <Plan class="w-[22%] h-fit" v-for="pack in packages" :key="pack.uuid" :content="pack"
        @plan_updated="plan_changed" />
    </div>
    <div class="flex flex-col gap-5 items-center">
      <!-- navigation -->
      <div class="w-full">
        <footer class="footer p-4 bg-base-250 rounded-md border text-base-content" v-if="form.plan !== null">
          <div class="flex flex-row items-center">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_134_2785" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                  height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_134_2785)">
                  <path
                    d="M12 13.075C12.2167 13.075 12.396 13.004 12.538 12.862C12.6793 12.7207 12.75 12.5417 12.75 12.325V7.8C12.75 7.6 12.6793 7.429 12.538 7.287C12.396 7.14567 12.2167 7.075 12 7.075C11.7833 7.075 11.6043 7.14567 11.463 7.287C11.321 7.429 11.25 7.60833 11.25 7.825V12.35C11.25 12.55 11.321 12.7207 11.463 12.862C11.6043 13.004 11.7833 13.075 12 13.075ZM12 16.725C12.2333 16.725 12.425 16.65 12.575 16.5C12.725 16.35 12.8 16.1583 12.8 15.925C12.8 15.6917 12.725 15.5 12.575 15.35C12.425 15.2 12.2333 15.125 12 15.125C11.7667 15.125 11.575 15.2 11.425 15.35C11.275 15.5 11.2 15.6917 11.2 15.925C11.2 16.1583 11.275 16.35 11.425 16.5C11.575 16.65 11.7667 16.725 12 16.725ZM12 21.5C10.6833 21.5 9.446 21.25 8.288 20.75C7.12933 20.25 6.125 19.575 5.275 18.725C4.425 17.875 3.75 16.8707 3.25 15.712C2.75 14.554 2.5 13.3167 2.5 12C2.5 10.6833 2.75 9.44567 3.25 8.287C3.75 7.129 4.425 6.125 5.275 5.275C6.125 4.425 7.12933 3.75 8.288 3.25C9.446 2.75 10.6833 2.5 12 2.5C13.3167 2.5 14.5543 2.75 15.713 3.25C16.871 3.75 17.875 4.425 18.725 5.275C19.575 6.125 20.25 7.129 20.75 8.287C21.25 9.44567 21.5 10.6833 21.5 12C21.5 13.3167 21.25 14.554 20.75 15.712C20.25 16.8707 19.575 17.875 18.725 18.725C17.875 19.575 16.871 20.25 15.713 20.75C14.5543 21.25 13.3167 21.5 12 21.5ZM12 20C14.2167 20 16.1043 19.221 17.663 17.663C19.221 16.1043 20 14.2167 20 12C20 9.78333 19.221 7.89567 17.663 6.337C16.1043 4.779 14.2167 4 12 4C9.78333 4 7.896 4.779 6.338 6.337C4.77933 7.89567 4 9.78333 4 12C4 14.2167 4.77933 16.1043 6.338 17.663C7.896 19.221 9.78333 20 12 20Z"
                    fill="#0A65CD" />
                </g>
              </svg>
            </span>
            <p>
              {{ form.plan.text }}
            </p>
          </div>
        </footer>
      </div>
      <!-- buy button -->
      <button class="flex select-none btn-primary" @click="show_factor()" v-if="form.plan !== null"
        :disabled="form.plan === null ? true : false">
        <span>فعال سازی اشتراک</span>
        <span class="pr-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 15.625L0.375 8L8 0.375L9.075 1.45L3.25 7.25H15.625V8.75H3.25L9.075 14.55L8 15.625Z" 
            fill="white"/>
          </svg>
        </span>
      </button>
      <!-- footer -->
      <div class="flex flex-row items-center w-full justify-between border rounded-md px-7 py-7">
        <span class="text-lg">
          امکانات و منابع بیشتر یا خدمات اختصاصی دریافت کنید
        </span>
        <a href="https://segmento.ir/about/contact/" target="_blank"
          class="rounded-md btn-secondary py-2 px-5 transition-all duration-100">
          توضیحات بیشتر
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import Request from "../../Api/Request";
import HTMLController from "../../Controllers/HTMLController";
import Package from "../../Models/Package";
import Config from "../../composables/Config";
import ConfigStore from "../../store/ConfigStore";

const request = new Request();
const packages = ref([]);
const form = ref({
  package: null,
  plan: null,
  discount: null,
  discount_code: '',
});

const config = new Config();

onBeforeMount(() => {
  collect_packages();
});

function plan_changed(pack, plan, discount = null, discount_code = null) {
  form.value.package = pack;
  form.value.plan = plan;
  form.value.discount = discount;
  form.value.discount_code = discount_code;
}

function show_factor() {
  HTMLController.visible_element('package_factor');
}

async function buy_the_package() {
  HTMLController.hide_element("package_factor");

  let response = await request.post("packages/buy", {
    plan_uuid: form.value.plan.uuid,
    discount_code: form.value.discount_code,
    use_wallet: 0
  })

  if (response.status_code() < 300) {
    if (response.status()) {
      ConfigStore.logout();
      return navigateTo(response.data().payment_url, { external: true });
    }
  }
  else {
    console.log(response.errors()); // TODO : show errors!
  }
}

async function collect_packages() {
  let response = await request.get('package');
  if (response.status_code() < 300) {
    packages.value = response.data().map(pack => new Package(pack))
  }
  else {
    // TODO: send error message
    console.log(response);
  }
}
</script>