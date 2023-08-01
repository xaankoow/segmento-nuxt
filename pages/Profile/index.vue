<template>
  <div class="w-full h-full bg-white">
    <div
      class="w-full h-[51px] bg-base-200 flex items-center justify-start text-lg textco"
    >
      <div class="w-[2px] h-5 rounded-sm bg-icon ml-4"></div>
      <p>حساب کاربری</p>
    </div>
    <div class="w-full h-fit flex items-center justify-center flex-col">
      <!-- header -->
      <div class="w-3/4 h-96 border-b border-base-400 mt-10 text-sm">
        <div class="w-full h-2/6 flex">
          <div class="w-3/4 h-full flex">
            <div class="relative h-24">
              <div
                class="rounded-full w-[84px] h-[84px] overflow-hidden flex items-center justify-center"
              >
                <img
                  :src="image"
                  alt="profile image"
                  class="w-full h-full"
                />
              </div>
              <button
                class="w-6 h-6 rounded-full bg-primary flex items-center justify-center border-2 border-white absolute bottom-2 right-2"
              >
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.59375 4.5L7.15625 5.9375L7.6875 6.46875L8.1875 5.95312C8.13542 6.60937 7.89333 7.15104 7.46125 7.57812C7.02875 8.00521 6.52083 8.21875 5.9375 8.21875C5.80208 8.21875 5.67188 8.20562 5.54688 8.17937C5.42188 8.15354 5.30208 8.11979 5.1875 8.07812L4.625 8.625C4.82292 8.72917 5.03125 8.8125 5.25 8.875C5.46875 8.9375 5.69792 8.96875 5.9375 8.96875C6.75 8.96875 7.44271 8.67458 8.01562 8.08625C8.58854 7.4975 8.89583 6.78125 8.9375 5.9375L9.5 6.46875L10.0312 5.9375L8.59375 4.5ZM3.28125 7.375L4.71875 5.9375L4.1875 5.40625L3.6875 5.92188C3.73958 5.26563 3.98167 4.72396 4.41375 4.29688C4.84625 3.86979 5.35417 3.65625 5.9375 3.65625C6.07292 3.65625 6.20312 3.66917 6.32812 3.695C6.45312 3.72125 6.57292 3.75521 6.6875 3.79688L7.25 3.25C7.05208 3.14583 6.84375 3.0625 6.625 3C6.40625 2.9375 6.17708 2.90625 5.9375 2.90625C5.125 2.90625 4.43229 3.20042 3.85938 3.78875C3.28646 4.3775 2.97917 5.09375 2.9375 5.9375L2.375 5.40625L1.84375 5.9375L3.28125 7.375ZM1.125 10.625C0.8125 10.625 0.546875 10.5156 0.328125 10.2969C0.109375 10.0781 0 9.8125 0 9.5V2.375C0 2.0625 0.109375 1.79688 0.328125 1.57812C0.546875 1.35938 0.8125 1.25 1.125 1.25H3.03125L4.1875 0H7.6875L8.84375 1.25H10.75C11.0625 1.25 11.3281 1.35938 11.5469 1.57812C11.7656 1.79688 11.875 2.0625 11.875 2.375V9.5C11.875 9.8125 11.7656 10.0781 11.5469 10.2969C11.3281 10.5156 11.0625 10.625 10.75 10.625H1.125ZM10.75 9.6875C10.8021 9.6875 10.8465 9.66938 10.8831 9.63313C10.9194 9.59646 10.9375 9.55208 10.9375 9.5V2.375C10.9375 2.32292 10.9194 2.27875 10.8831 2.2425C10.8465 2.20583 10.8021 2.1875 10.75 2.1875H8.42188L7.26562 0.9375H4.60938L3.45312 2.1875H1.125C1.07292 2.1875 1.02875 2.20583 0.9925 2.2425C0.955833 2.27875 0.9375 2.32292 0.9375 2.375V9.5C0.9375 9.55208 0.955833 9.59646 0.9925 9.63313C1.02875 9.66938 1.07292 9.6875 1.125 9.6875H10.75Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div class="h-24 flex items-center justify-around mr-4 flex-col" style="font-size: 1.25rem;">
              <p>سجاد قدرتی</p>
              <p
                class="w-28 h-5 rounded-[30px] bg-base-200 text-xs text-base-500 flex items-center justify-center"
              >
                sajjad@gmail.com
              </p>
            </div>
            <div
              class="w-[66px] h-[21px] bg-warning rounded-[30px] mt-5 text-[10px] flex items-center justify-center"
            >
              کاربر طلایی
            </div>
          </div>
          <div class="w-1/4 h-full flex justify-end">
            <button
              class="w-[105px] h-10 rounded-lg bg-dimound flex items-center justify-evenly text-white text-sm"
            >
              خروج
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_5898_4554"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_5898_4554)">
                  <path
                    d="M14.8734 13L6.47344 13L8.89844 15.425L7.87344 16.525L3.59844 12.25L7.87344 7.975L8.89844 9.075L6.47344 11.5L14.8734 11.5V13ZM11.8734 21V19.5H18.5984C18.6651 19.5 18.7318 19.4667 18.7984 19.4C18.8651 19.3333 18.8984 19.2667 18.8984 19.2L18.8984 5.3C18.8984 5.23333 18.8651 5.16667 18.7984 5.1C18.7318 5.03333 18.6651 5 18.5984 5H11.8734V3.5H18.5984C19.0984 3.5 19.5234 3.675 19.8734 4.025C20.2234 4.375 20.3984 4.8 20.3984 5.3L20.3984 19.2C20.3984 19.7 20.2234 20.125 19.8734 20.475C19.5234 20.825 19.0984 21 18.5984 21H11.8734Z"
                    fill="white"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div class="w-full h-4/6 flex flex-col items-center justify-evenly">
          <div class="w-full flex items-center justify-between">
            <p>اطلاعات شخصی</p>
            <p class="text-dimound cursor-pointer">تغییر شماره همراه</p>
          </div>
          <div class="w-full">
            <div class="w-full flex justify-between">
              <input
                class="w-[48%] h-11 border rounded border-base-300 p-2 focus:border-b-dimound focus:border-b-2"
                placeholder="نام"
                type="text"
              />
              <input
                class="w-[48%] h-11 border rounded border-base-300 p-2 focus:border-b-dimound focus:border-b-2"
                placeholder="نام خانوادگی"
                type="text"
              />
            </div>
            <input
              class="w-full h-11 border rounded border-base-300 p-2 mt-5 focus:border-b-dimound focus:border-b-2"
              placeholder="آدرس ایمیل"
              type="email"
            />
          </div>
          <div class="w-full flex justify-end text-dimound">
            <p class="cursor-pointer">تغییر گذرواژه</p>
          </div>
        </div>
      </div>
      <!-- main -->
      <div class="w-3/4 h-auto mt-10 text-sm border-b border-base-400 pb-6">
        <p class="mb-5">اطلاعات کسب و کار شما</p>
        <DropdownIndexTwo>
          <template v-slot:title> زمینه فعالیت شما (نوع سایت) </template>
          <template v-slot:option>
            <option value="">لطفا یک گزینه را انتخاب کنید</option>
            <option value="">سایت فروش محصولات فیزیکی</option>
            <option value="">سایت فروش محصولات مجازی</option>
            <option value="">سایت آموزشی</option>
            <option value="">سایت شرکتی</option>
            <option value="">سایت صنعتی</option>
            <option value="">سایت ارز دیجیتال</option>
            <option value="">سایت خبری</option>
            <option value="">سایت استارتاپ</option>
            <option value="">سایت وبلاگی</option>
            <option value="">سایت شخصی</option>
            <option value="">سایت لوازم بهداشتی</option>
            <option value="">سایت لوازم آرایشی</option>
            <option value="">سایت پوشاک</option>
            <option value="">سایت لوازم ورزشی</option>
            <option value="">سایت فروش کتاب</option>
            <option value="">سایت موسیقی</option>
            <option value="">سایت دیجیتال مارکتینگ</option>
            <option value="">سفارشی</option>
          </template>
        </DropdownIndexTwo>
        <DropdownIndexTwo>
          <template v-slot:title> تعداد اعضای شرکت </template>
          <template v-slot:option>
            <option value="">لطفا یک گزینه را انتخاب کنید</option>
            <option value="">کمتر از 5 نفر</option>
            <option value="">کمتر از 10 نفر</option>
            <option value="">کمتر از 20 نفر</option>
            <option value="">کمتر از 50 نفر</option>
            <option value="">کمتر از 100 نفر</option>
          </template>
        </DropdownIndexTwo>
        <DropdownIndexTwo>
          <template v-slot:title> تعداد متخصص سئو </template>
          <template v-slot:option>
            <option value="">لطفا یک گزینه را انتخاب کنید</option>
            <option value="">کمتر از 3 نفر</option>
            <option value="">کمتر از 5 نفر</option>
            <option value="">کمتر از 10 نفر</option>
            <option value="">کمتر از 20 نفر</option>
          </template>
        </DropdownIndexTwo>
        <DropdownIndexTwo>
          <template v-slot:title> ترافیک ماهانه وب سایت شما </template>
          <template v-slot:option>
            <option value="">لطفا یک گزینه را انتخاب کنید</option>
            <option value="">کمتر از 1k</option>
            <option value="">کمتر از 5k</option>
            <option value="">کمتر از 10k</option>
            <option value="">کمتر از 20k</option>
            <option value="">کمتر از 50k</option>
            <option value="">کمتر از 100k</option>
            <option value="">کمتر از 200k</option>
            <option value="">کمتر از 300k</option>
            <option value="">کمتر از 500k</option>
            <option value="">کمتر از 1M</option>
            <option value="">کمتر از 2M</option>
            <option value="">کمتر از 5M</option>
          </template>
        </DropdownIndexTwo>
        <DropdownIndexTwo>
          <template v-slot:title> سمت شما در تیم </template>
          <template v-slot:option>
            <option value="">لطفا یک گزینه را انتخاب کنید</option>
            <option value="">متخصص سئو</option>
            <option value="">مدیر ارشد سئو</option>
            <option value="">مشاور سئو</option>
            <option value="">پیمانکار سئو</option>
            <option value="">فریلنسر</option>
            <option value="">وبمستر</option>
            <option value="">مدیر دیجیتال مارکتینگ</option>
          </template>
        </DropdownIndexTwo>
        <DropdownIndexTwo>
          <template v-slot:title> روش آشنایی با سگمنتو </template>
          <template v-slot:option>
            <option value="">لطفا یک گزینه را انتخاب کنید</option>
            <option value="">آشنایی قبلی</option>
            <option value="">گوگل</option>
            <option value="">تبلیغات</option>
            <option value="">سایت همکار</option>
            <option value="">متخصص های همکار</option>
            <option value="">لینکدین</option>
            <option value="">اینستاگرام</option>
          </template>
        </DropdownIndexTwo>
        <div class="w-full h-auto flex justify-end mt-5">
          <button class="w-[89px] h-10 rounded-lg bg-scondary text-[#488CDA]">
            انصراف
          </button>
          <button class="w-32 h-10 rounded-lg bg-dimound text-white mr-7">
            ذخیره تغییرات
          </button>
        </div>
      </div>
      <!-- footer -->
      <div class="w-3/4 h-auto mt-10 text-sm text-base-content">
        <p class="mb-4">پیغام برای تیم سگمنتو</p>
        <div id="app">
          <editor
            api-key="no-api-key"
            :init="{
              height: 500,
              menubar: false,
              toolbar: 'undo redo',
              toolbar_location: 'right',
              plugins: [
                'advlist',
                'advcode',
                'advtable',
                'autolink',
                'checklist',
                'export',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'powerpaste',
                'fullscreen',
                'formatpainter',
                'insertdatetime',
                'media',
                'table',
                'help',
                'wordcount',
              ],
              toolbar:
                ' casechange blocks | bold italic underline| \
          alignleft aligncenter alignright alignjustify | \
          bullist numlst checklist | link ',
            }"
          />
        </div>
        <div class="w-full flex justify-end">
          <button class="w-24 h-10 rounded-lg bg-dimound text-white ml-0 my-4">
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Editor from "@tinymce/tinymce-vue";
const props = defineProps({
  image: {
    type: String,
    default: "/images/profileDefaultImg.png"
  },
});
</script>