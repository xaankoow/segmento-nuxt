<template>
  <div class="flex flex-col items-center w-full pb-5 gap-10 [&>div]:w-[64.875rem]">
    <!-- title -->
    <div
      class="absolute top-0 left-0 !w-screen !h-screen z-50 bg-base-350/40 pointer-events-none flex justify-center items-center"
      v-if="request.pending()">
      <ToolsLoading class="w-32 h-32" />
    </div>
    <div class="absolute top-0 left-0 !w-screen !h-screen z-50 bg-base-350/40 flex justify-center items-center" id="the_package"
      v-if="the_package !== null">
      <!-- the package and confirm to buy -->
      <div class="flex flex-col justify-between w-96 h-2/3 bg-base-100 rounded-md">
        <!-- header -->
        <div class="flex flex-row bg-base-500 h-12 rounded-t-md text-base-100 items-center justify-between px-4">
          <span class="w-6"></span>
          <div>رسید نهایی خرید اشتراک</div>
          <button class="flex text-2xl font-thin w-6 cursor-pointer" @click="HTMLController.hide_element('the_package')">×</button>
        </div>

        <!-- content -->
        <div class="flex flex-col w-full [&>*]:w-11/12 [&>*]:mx-auto h-full">
          <div class="flex flex-col gap-2 my-2 items-center justify-center">
            <span>نام اشتراک:</span>
            <span class="font-semibold">{{ the_package.package }}</span>
          </div>
          <hr />

          <div class="flex flex-col gap-4 p-4">
            <div class="flex flex-row items-center justify-between">
              <span>مدت اشتراک:</span>
              <span> {{ the_package.name }}</span>
            </div>
            <div class="flex flex-row items-center justify-between">
              <span>قیمت اشتراک:</span>
              <span> {{ the_package.price.value }}</span>
            </div>
            <!-- discount section -->
            <div class="flex flex-col gap-4">
              <div class="flex flex-row items-center justify-between">
                <span>تخفیف سگمنتو:</span>
                <span> {{ the_package.discount !== null ? the_package.discount.value : '0' }}</span>
              </div>
              <div class="flex flex-row items-center justify-between">
                <span>کد تخفیف:</span>
                <span> {{ the_package.discount !== null ? the_package.discount.code : '0' }}</span>
              </div>
              <div class="flex flex-row items-center justify-between">
                <span>مقدار ریالی تخفیف:</span>
                <span> {{ the_package.discount !== null ? the_package.discount.price : '0' }}</span>
              </div>
            </div>
          </div>

          <hr />
          <div class="flex flex-col items-center gap-3 my-4">
            <span class="font-bold">قیمت نهایی و پرداخت</span>
            <span>{{ the_package.price.final }} تومان</span>
          </div>
          <hr />
        </div>

        <!-- register -->
        <div class="flex flex-row items-center justify-center w-full py-4">
          <button class="btn-primary w-11/12">خرید اشتراک</button>
        </div>
      </div>
    </div>
    <div class="flex items-center h-11 !w-full">
      <span>
        <svg width="2" height="20" viewBox="0 0 2 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="2" height="20" rx="1" fill="#002145" />
        </svg>
      </span>
      <span class="mx-5">
        {{ content.title }}
      </span>
    </div>
    <!-- header -->
    <div class="flex flex-col items-center border rounded-md py-2 gap-2">
      <span class="text-4xl">
        {{ content.header }}
      </span>
      <button class="text-primary py-2 px-4 rounded-md bg-base-250 hover:bg-base-300">
        {{ content.detail }}
      </button>
    </div>
    <!-- package -->
    <div class="flex flex-row items-center justify-between gap-1">
      <Plan class="w-1/4 h-[35rem]" v-for="pack in packages" :key="pack.uuid" :_package="pack"
        @change_plan="update_selected_plan" />
    </div>
    <div class="flex flex-col gap-5 items-center">
      <!-- navigation -->
      <div class="w-full">
        <footer class="footer p-4 bg-base-250 rounded-md border text-base-content">
          <div class="flex flex-row gap-3 items-center">
            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛
              2 ماه مهمون سگمنتو باشین
            </p>
          </div>
        </footer>
      </div>
      <!-- buy button -->
      <button class="flex  select-none" @click="check_plan()"
        :class="selected_plan_uuid === null ? 'pointer-events-none btn-secondary' : 'btn-primary'">
        <span>فعال سازی اشتراک</span>
        <span>
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_134_2892" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
              height="24">
              <rect x="24" y="24" width="24" height="24" transform="rotate(180 24 24)" fill="white" />
            </mask>
            <g mask="url(#mask0_134_2892)">
              <path
                d="M12.525 4.8998C12.675 5.0498 12.75 5.22914 12.75 5.4378C12.75 5.6458 12.6833 5.82481 12.55 5.97481L7.25 11.2498L18.875 11.2498C19.075 11.2498 19.25 11.3208 19.4 11.4628C19.55 11.6041 19.625 11.7831 19.625 11.9998C19.625 12.2165 19.55 12.3958 19.4 12.5378C19.25 12.6791 19.075 12.7498 18.875 12.7498L7.25 12.7498L12.55 18.0248C12.6833 18.1748 12.75 18.3538 12.75 18.5618C12.75 18.7705 12.675 18.9498 12.525 19.0998C12.375 19.2331 12.2 19.2998 12 19.2998C11.8 19.2998 11.625 19.2331 11.475 19.0998L5.025 12.6248C4.925 12.5415 4.854 12.4458 4.812 12.3378C4.77067 12.2291 4.75 12.1165 4.75 11.9998C4.75 11.8831 4.77067 11.7708 4.812 11.6628C4.854 11.5541 4.925 11.4581 5.025 11.3748L11.475 4.8998C11.625 4.76647 11.8 4.69981 12 4.69981C12.2 4.69981 12.375 4.76647 12.525 4.8998Z" />
            </g>
          </svg></span>
      </button>
      <!-- footer -->
      <div class="flex flex-row items-center w-full justify-between border rounded-md px-7 py-3">
        <span class="text-lg">اگر بیزینس هستید یا به امکانات و منابع بیشتری نیاز دارید:
        </span>
        <button class="rounded-md text-secondary py-2 px-5 bg-base-250 hover:bg-base-300 transition-all duration-100">
          توضیحات بیشتر
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Request from "../../Api/Request";
import HTMLController from "../../Controllers/HTMLController";
import Package from "../../Models/Package";

const request = new Request();
const packages = ref([]);
const selected_plan_uuid = ref(null);
const the_package = ref(null);

onBeforeMount(() => {
  collect_packages();
});

function update_selected_plan(plan_uuid) {
  selected_plan_uuid.value = plan_uuid;
}

async function check_plan() {
  let response = await request.post("packages/check_plan", {
    plan_uuid: selected_plan_uuid.value,
    discount_code: null,
    use_wallet: 0
  })

  if (response.status_code() < 300) {
    if (response.status()) {
      the_package.value = response.data();
      HTMLController.visible_element("the_package");
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

const content = ref({
  title: "خرید اشتراک سگمنتو",
  header: "رایگان شروع کنید؛ قدرتمند ادامه دهید",
  detail: "توضیحات بیشتر",
});
</script>