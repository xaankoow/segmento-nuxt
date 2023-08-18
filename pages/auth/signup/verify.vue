<template>
  <div class="flex flex-col w-full items-center">
    <div
      class="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-base-100/10 pointer-events-none"
      v-show="request.pending()">
      <ToolsLoading class="w-56 h-56" />
    </div>
    <form @submit.prevent="verify_email()" class="flex flex-col w-full gap-6 my-auto font-medium items-center">
      <span class="text-justify w-[39rem]" v-html="config.by_route(`${current_page}/description`)"></span>
      <div class="flex flex-col justify-between items-center">
        <div class="relative flex flex-col gap-3 items-center mx-auto w-full">
          <span>
            {{ config.by_route(`${current_page}/active_code`) }}
          </span>
          <div
            class="flex flex-row gap-5 mx-auto items-center text-base-content w-[16.25rem] [&>input]:w-14 [&>input]:h-14 [&>input]:p-1 [&>input]:text-center [&>input]:rounded-sm"
            style="direction: ltr">
            <input id="number_1" type="text" maxlength="1"/>
            <!-- TODO : change focus when keypress for ones -->
            <input id="number_2" type="text" maxlength="1"/>
            <!-- TODO : change focus when keypress for ones -->
            <input id="number_3" type="text" maxlength="1"/>
            <!-- TODO : change focus when keypress for ones -->
            <input id="number_4" type="text" maxlength="1"/>
            <!-- TODO : change focus when keypress for ones -->
          </div>
          <span class="absolute -bottom-6 text-error text-xs">{{ code_error }}</span>
        </div>
      </div>
      <div class="w-[39rem] flex flex-row justify-between mt-10 items-center text-sm">
        <NuxtLink to="/auth/signup"
          class="[&>svg]:fill-base-100 hover:[&>svg]:fill-base-250 cursor-pointer w-24 h-10 flex items-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.54019 13.5808L18.7441 13.5808L11.228 21.2936C10.6273 21.91 10.6273 22.9215 11.228 23.5379C11.8287 24.1543 12.799 24.1543 13.3996 23.5379L23.5495 13.1224C24.1502 12.506 24.1502 11.5103 23.5495 10.8939L13.415 0.462542C12.8144 -0.153856 11.8441 -0.153856 11.2434 0.462542C10.6427 1.07894 10.6427 2.07466 11.2434 2.69106L18.7441 10.4197L1.54019 10.4197C0.693084 10.4197 -8.20959e-07 11.131 -8.58956e-07 12.0002C-8.96953e-07 12.8695 0.693084 13.5808 1.54019 13.5808Z" />
          </svg>
        </NuxtLink>
        <button type="submit" class="bg-base-100 hover:bg-base-250 text-base-content border-none w-24 h-10 rounded-md">
          {{ config.by_route(`${current_page}/confirm_email`) }}
        </button>
        <button @click="resendEmail()" type="button" id="btn-resend"
          class="text-base-100 hover:bg-base-100/10 underline underline-offset-4 border-none w-fit px-2 transition-all duration-150 h-10 rounded-md">
          {{ config.by_route(`${current_page}/resend_email`) }}
        </button>
      </div>
      <div class="w-[39rem] flex flex-row justify-center gap-4 mt-10 items-center text-sm [&>*]:cursor-pointer">
        <span class="[&>svg]:fill-base-100 hover:[&>svg]:fill-base-250">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_82_2411)">
              <path
                d="M24 2.00034V6.00034C24 6.26556 23.8946 6.51991 23.7071 6.70745C23.5195 6.89498 23.2652 7.00034 23 7.00034C22.7348 7.00034 22.4804 6.89498 22.2929 6.70745C22.1053 6.51991 22 6.26556 22 6.00034V3.43934L16.7 8.71034C16.6101 8.81575 16.4993 8.90133 16.3746 8.96165C16.2498 9.02198 16.114 9.05573 15.9755 9.06078C15.8371 9.06583 15.6991 9.04206 15.5703 8.99097C15.4416 8.93989 15.3248 8.8626 15.2275 8.76402C15.1302 8.66544 15.0544 8.54771 15.0049 8.4183C14.9555 8.28889 14.9335 8.15062 14.9403 8.01225C14.9471 7.87388 14.9826 7.73844 15.0445 7.61452C15.1064 7.49059 15.1934 7.38088 15.3 7.29234L20.61 2.00034H18C17.7348 2.00034 17.4804 1.89498 17.2929 1.70744C17.1053 1.51991 17 1.26555 17 1.00034C17 0.73512 17.1053 0.480766 17.2929 0.29323C17.4804 0.105694 17.7348 0.000336672 18 0.000336672H22C22.5304 0.000336672 23.0391 0.21105 23.4142 0.586123C23.7893 0.961196 24 1.4699 24 2.00034ZM20.655 14.8563C20.0776 14.307 19.3108 14.0011 18.5138 14.0022C17.7168 14.0033 16.9508 14.3113 16.375 14.8623L14.469 16.4683C12.9131 15.8246 11.4997 14.8797 10.3101 13.688C9.12047 12.4964 8.17805 11.0814 7.53697 9.52434L9.13697 7.62434C9.68797 7.04848 9.996 6.28254 9.99712 5.48554C9.99824 4.68854 9.69235 3.92174 9.14297 3.34434C9.14297 3.34434 7.29098 0.939337 7.26097 0.907337C6.68996 0.333197 5.9161 0.00658311 5.1064 -0.00202281C4.29669 -0.0106287 3.51607 0.299464 2.93298 0.861337L1.78398 1.86134C-5.93602 10.0703 13.984 29.9993 22.184 22.1613L23.096 21.1123C23.6755 20.5312 24.0009 19.744 24.0009 18.9233C24.0009 18.1027 23.6755 17.3155 23.096 16.7343C23.063 16.7083 20.655 14.8563 20.655 14.8563Z" />
            </g>
            <defs>
              <clipPath id="clip0_82_2411">
                <rect width="24" height="24" fill="white" transform="translate(0 0.000244141)" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span class="stroke-base-100 hover:[&>svg]:stroke-base-250">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_82_2409)">
              <path
                d="M22.5001 12.0002C22.5019 9.57794 21.6621 7.23029 20.1244 5.35876L19.7744 4.93277L19.3845 5.32263L15.8135 8.89363L15.5238 9.18335L15.7509 9.52437C16.2394 10.2577 16.5 11.1191 16.5 12.0002C16.5 12.8813 16.2394 13.7427 15.7509 14.476L15.5238 14.817L15.8135 15.1067L19.3845 18.6777L19.7744 19.0676L20.1244 18.6416C21.6621 16.7701 22.5019 14.4224 22.5001 12.0002ZM22.5001 12.0002C22.5001 12.0003 22.5001 12.0004 22.5001 12.0006L22.0001 12.0002L22.5001 11.9998C22.5001 11.9999 22.5001 12 22.5001 12.0002ZM12.0001 1.50018C9.57782 1.49834 7.23017 2.33811 5.35864 3.87586L4.93265 4.22588L5.32251 4.61573L8.89351 8.18673L9.18323 8.47646L9.52424 8.24932C10.2576 7.76086 11.119 7.50024 12.0001 7.50024C12.8812 7.50024 13.7426 7.76086 14.4759 8.24932L14.8169 8.47646L15.1066 8.18673L18.6776 4.61573L19.0675 4.22588L18.6415 3.87586C16.77 2.33811 14.4223 1.49834 12.0001 1.50018ZM12.0001 1.50018C12.0002 1.50018 12.0003 1.50018 12.0005 1.50018L12.0001 2.00018L11.9997 1.50018C11.9998 1.50018 11.9999 1.50018 12.0001 1.50018ZM1.50006 12.0002C1.49822 14.4224 2.33798 16.7701 3.87574 18.6416L4.22575 19.0676L4.61561 18.6777L8.18661 15.1067L8.47634 14.817L8.24919 14.476C7.76074 13.7427 7.50011 12.8813 7.50011 12.0002C7.50011 11.1191 7.76074 10.2577 8.24919 9.52437L8.47634 9.18335L8.18661 8.89363L4.61561 5.32263L4.22575 4.93277L3.87574 5.35876C2.33798 7.23029 1.49822 9.57794 1.50006 12.0002ZM1.50006 12.0002C1.50006 12 1.50006 11.9999 1.50006 11.9998L2.00006 12.0002L1.50006 12.0006C1.50006 12.0004 1.50006 12.0003 1.50006 12.0002ZM4.26206 18.3242L3.90851 17.9706L3.95218 17.927C4.0519 18.0617 4.15521 18.1941 4.26206 18.3242ZM4.26206 18.3242L4.64838 18.0068C4.63802 17.9941 4.62769 17.9815 4.61739 17.9688L4.26206 18.3242ZM4.26206 5.67618L4.61739 6.03151C4.62769 6.01885 4.63801 6.00622 4.64838 5.9936L4.26206 5.67618ZM4.26206 5.67618L3.90851 6.02973L3.95218 6.07341C4.0519 5.93868 4.15521 5.80622 4.26206 5.67618ZM12.0001 22.5002C14.4223 22.502 16.77 21.6623 18.6415 20.1245L19.0675 19.7745L18.6776 19.3846L15.1066 15.8136L14.8169 15.5239L14.4759 15.751C13.7426 16.2395 12.8812 16.5001 12.0001 16.5001C11.119 16.5001 10.2576 16.2395 9.52424 15.751L9.18323 15.5239L8.89351 15.8136L5.32251 19.3846L4.93265 19.7745L5.35864 20.1245C7.23017 21.6623 9.57782 22.502 12.0001 22.5002ZM12.0001 22.5002C11.9999 22.5002 11.9998 22.5002 11.9997 22.5002L12.0001 22.0002L12.0005 22.5002C12.0003 22.5002 12.0002 22.5002 12.0001 22.5002ZM20.7741 19.4174L20.4753 19.7689L20.8017 20.0949L21.6581 20.9504C21.7477 21.0443 21.7973 21.1695 21.7963 21.2994C21.7952 21.4305 21.7427 21.5559 21.6501 21.6487C21.5574 21.7415 21.4321 21.7942 21.301 21.7954C21.1711 21.7966 21.046 21.7473 20.9519 21.6579L20.0956 20.8016L19.7696 20.4756L19.4183 20.7742C17.3475 22.5339 14.7186 23.5001 12.0011 23.5001C9.28357 23.5001 6.6546 22.5339 4.58384 20.7742L4.23252 20.4756L3.90651 20.8016L3.04651 21.6616L3.04645 21.6616L3.04017 21.6681C2.99408 21.7159 2.93894 21.754 2.87795 21.7802C2.81697 21.8065 2.75137 21.8203 2.68498 21.8209C2.6186 21.8216 2.55275 21.809 2.49128 21.7839C2.42982 21.7588 2.37397 21.7217 2.32699 21.6748C2.28001 21.6279 2.24284 21.5721 2.21766 21.5106C2.19247 21.4492 2.17978 21.3834 2.18031 21.317C2.18083 21.2506 2.19458 21.185 2.22074 21.124C2.2469 21.0629 2.28495 21.0077 2.33268 20.9616L2.33272 20.9616L2.33861 20.9557L3.19861 20.0957L3.52462 19.7697L3.22606 19.4184C1.46631 17.3476 0.500122 14.7187 0.500122 12.0012C0.500122 9.28369 1.46631 6.65472 3.22606 4.58396L3.52462 4.23264L3.19861 3.90663L2.34206 3.05007C2.25242 2.95611 2.20283 2.83091 2.20386 2.70096C2.20491 2.56986 2.2574 2.44442 2.35004 2.35165C2.44268 2.25888 2.56805 2.2062 2.69915 2.20497C2.829 2.20375 2.95418 2.2531 3.04825 2.34248L3.90451 3.19873L4.23052 3.52475L4.58184 3.22619C6.6526 1.46643 9.28157 0.500244 11.9991 0.500244C14.7165 0.500244 17.3455 1.46643 19.4163 3.22619L19.7676 3.52475L20.0936 3.19873L20.9536 2.33873L20.9537 2.33861C21.0475 2.24477 21.1747 2.19203 21.3074 2.19198C21.44 2.19193 21.5673 2.24459 21.6611 2.33836C21.755 2.43213 21.8077 2.55934 21.8078 2.692C21.8078 2.82466 21.7552 2.95191 21.6614 3.04575L20.8015 3.90563L20.4755 4.23164L20.7741 4.58296C22.5338 6.65372 23.5 9.28269 23.5 12.0002C23.5 14.7177 22.5338 17.3466 20.7741 19.4174ZM19.7381 18.3242L20.0916 17.9706L20.0479 17.927C19.9482 18.0617 19.8449 18.1941 19.7381 18.3242ZM18.3241 4.26218L17.9705 3.90863L17.9268 3.9523C18.0616 4.05202 18.194 4.15533 18.3241 4.26218ZM5.67606 19.7382L6.02961 20.0917L6.07328 20.0481C5.93856 19.9483 5.8061 19.845 5.67606 19.7382ZM9.08992 10.0557C8.70533 10.6313 8.50006 11.3079 8.50006 12.0002C8.50006 12.9284 8.86881 13.8187 9.52518 14.4751C10.1816 15.1314 11.0718 15.5002 12.0001 15.5002C12.6923 15.5002 13.369 15.2949 13.9446 14.9103C14.5201 14.5257 14.9687 13.9791 15.2336 13.3396C15.4985 12.7 15.5679 11.9963 15.4328 11.3174C15.2978 10.6384 14.9644 10.0148 14.4749 9.52531C13.9854 9.03582 13.3618 8.70248 12.6829 8.56743C12.0039 8.43238 11.3002 8.5017 10.6607 8.7666C10.0211 9.03151 9.4745 9.48011 9.08992 10.0557Z" />
            </g>
            <defs>
              <clipPath id="clip0_82_2409">
                <rect width="24" height="24" fill="white" transform="translate(0 0.000244141)" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
    </form>
  </div>
</template>

<style scope>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>

<script setup>
import Request from "../../../Api/Request";
import Config from "../../../composables/Config";
import ConfigStore from "../../../store/ConfigStore";

definePageMeta({
  layout: "login",
});

const current_page = "pages/auth/verify";
const config = new Config();
const request = new Request();
const form = ref({
  email: null,
  code: null,
});
const code_error = ref('');

async function verify_email() {
  let number_1 = document.getElementById("number_1").value;
  let number_2 = document.getElementById("number_2").value;
  let number_3 = document.getElementById("number_3").value;
  let number_4 = document.getElementById("number_4").value;

  form.value.code = Number(`${number_1}${number_2}${number_3}${number_4}`);
  let response = await request.post("auth/verifyEmail", form.value);

  if (response.status()) {
    // TODO : Fix this section later
    let user = response.data().user;
    if (!user.img) {
      user.img = "/images/profileDefaultImg.png";
    }

    ConfigStore.set_token(response.data().token);
    ConfigStore.set_user(JSON.stringify(user));
    ConfigStore.set_plan(JSON.stringify(response.data().plan));
    ConfigStore.set_wallets(JSON.stringify(response.data().wallets));
    ConfigStore.set_workspaces(JSON.stringify(response.data().workspaces));
    ConfigStore.set_roles(JSON.stringify(response.data().workspaces));

    return navigateTo("/keyword-research");
  }
  code_error.value = config.by_route(`${current_page}/code_error`)
}
async function resendEmail() {
  let response = await request.post("auth/email/verify/resend", { email: form.value.email });

  if (response.status()) {
    let button = document.getElementById("btn-resend");
    button.classList.add("pointer-event-none", "border-2", "border-success");
  }
  else {
    // TODO : SHOW SOME ERROR HAPPENED !
    console.log(response);
  }
}

onMounted(() => {
  form.value.email = useRoute().query.email ?? null;

  if (form.value.email === null) {
    // TODO : TOAST for error
    navigateTo("/auth/signup");
  }
});
</script>
    