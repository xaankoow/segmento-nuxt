<template>
  <div>
    <!-- loading -->
    <div
      v-if="request.pending.value"
      class="top-0 left-0 w-full h-screen fixed z-50 bg-base-350/40 flex justify-center items-center"
    >
      <ToolsLoading class="w-32 h-32" />
    </div>
    <!-- loading end -->

    <div class="w-full h-auto rounded overflow-hidden text-sm">
      <div
        class="w-full h-full text-base-400 text-sm flex flex-col items-start justify-between p-2"
      >
        <!-- ____________________________________
      part 1 (key word) start
      _________________________________________ -->
        <p class="text-base-content text-[10px]">
          1. درج کلمات کلیدی ( در هر خط فقط یک کلمه وارد کنید )
        </p>
        <div class="w-full mb-4 flex items-center justify-center flex-col gap-4">
          <InputTextAreaLiner
            dir="rtl"
            class="w-full rounded-e"
            v-model="textareaValue"
          />
          <!-- ____________________________________
      part 2 (subject select)
      _________________________________________ -->
          <div
            class="w-full flex flex-col items-start justify-center text-[10px] text-base-content pt-2"
          >
            <p>2. انتخاب موضوع</p>
            <div
              class="w-full h-[67px] text-base-content border border-base-400 rounded mt-2 flex items-center justify-around gap-4 p-4"
            >
              <InputRadio
                v-model="form.type"
                :name="topic"
                id="1"
                @change="checkUpdate($event)"
              >
                موضوعات سوالی
              </InputRadio>

              <InputRadio
                v-model="form.type"
                :name="topic"
                id="2"
                @change="checkUpdate($event)"
              >
                موضوعات مقایسه‌ای
              </InputRadio>

              <InputRadio
                v-model="form.type"
                :name="topic"
                id="3"
                @change="checkUpdate($event)"
              >
                موضوعات متفرقه
              </InputRadio>
            </div>
          </div>

          <button
            :disabled="!subjectValue || !textareaValue"
            @click="submitData"
            class="btn-primary"
          >
            تولید عنوان
          </button>
        </div>
        <!-- ____________________________________
      part 3 (show details)
      چارت نمایش اطلاعات (بصورت استاتیک)
      _________________________________________ -->
        <div class="h-fit w-full" v-if="showDetailAgreement">
          <p class="text-[10px] text-base-content">3. نمایش عناوین پیشنهادی</p>
          <div
            class="w-full h-auto mb-4 bg-white py-5 rounded-[3px] border border-base-400 flex items-center justify-center"
            v-for="phrase in results"
            :key="phrase"
          >
            <div
              class="min-w-fit h-full text-base-content flex items-center flex-col relative"
            >
              <div class="w-full pr-5 border-r-2 border-primary px-2 text-base">
                {{ subjectValue }} برای <b>{{ phrase.keyword }}</b>
              </div>
              <div class="absolute top-8 right-5 w-fit">
                <CopyArray :content="phrase.content" class="btn-secondary">
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.27812 15.8008C5.76146 15.8008 5.32812 15.6258 4.97812 15.2758C4.62812 14.9258 4.45312 14.5008 4.45312 14.0008V2.62578C4.45312 2.10911 4.62812 1.67578 4.97812 1.32578C5.32812 0.975781 5.76146 0.800781 6.27812 0.800781H14.6281C15.1281 0.800781 15.5575 0.979781 15.9161 1.33778C16.2741 1.69645 16.4531 2.12578 16.4531 2.62578V14.0008C16.4531 14.5008 16.2741 14.9258 15.9161 15.2758C15.5575 15.6258 15.1281 15.8008 14.6281 15.8008H6.27812ZM6.27812 14.3008H14.6281C14.7281 14.3008 14.8075 14.2714 14.8661 14.2128C14.9241 14.1548 14.9531 14.0841 14.9531 14.0008V2.62578C14.9531 2.52578 14.9241 2.44645 14.8661 2.38778C14.8075 2.32978 14.7281 2.30078 14.6281 2.30078H6.27812C6.17812 2.30078 6.09913 2.32978 6.04113 2.38778C5.98246 2.44645 5.95312 2.52578 5.95312 2.62578V14.0008C5.95312 14.0841 5.98246 14.1548 6.04113 14.2128C6.09913 14.2714 6.17812 14.3008 6.27812 14.3008ZM2.75312 19.3008C2.25312 19.3008 1.82812 19.1258 1.47812 18.7758C1.12812 18.4258 0.953125 18.0008 0.953125 17.5008V5.55078C0.953125 5.35078 1.02379 5.17578 1.16513 5.02578C1.30713 4.87578 1.48646 4.80078 1.70312 4.80078C1.90312 4.80078 2.07812 4.87578 2.22812 5.02578C2.37812 5.17578 2.45312 5.35078 2.45312 5.55078V17.5008C2.45312 17.5841 2.48213 17.6548 2.54013 17.7128C2.59879 17.7714 2.66979 17.8008 2.75312 17.8008H11.7031C11.9031 17.8008 12.0781 17.8758 12.2281 18.0258C12.3781 18.1758 12.4531 18.3508 12.4531 18.5508C12.4531 18.7674 12.3781 18.9464 12.2281 19.0878C12.0781 19.2298 11.9031 19.3008 11.7031 19.3008H2.75312Z"
                    />
                  </svg>
                  کپی موضوعات
                </CopyArray>
              </div>
            </div>
            <DiagramTree class="w-full h-full" :phrase="phrase" />
          </div>
          <CopyArray class="btn-primary" :content="copy_all_content(results)">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.27812 15.8008C5.76146 15.8008 5.32812 15.6258 4.97812 15.2758C4.62812 14.9258 4.45312 14.5008 4.45312 14.0008V2.62578C4.45312 2.10911 4.62812 1.67578 4.97812 1.32578C5.32812 0.975781 5.76146 0.800781 6.27812 0.800781H14.6281C15.1281 0.800781 15.5575 0.979781 15.9161 1.33778C16.2741 1.69645 16.4531 2.12578 16.4531 2.62578V14.0008C16.4531 14.5008 16.2741 14.9258 15.9161 15.2758C15.5575 15.6258 15.1281 15.8008 14.6281 15.8008H6.27812ZM6.27812 14.3008H14.6281C14.7281 14.3008 14.8075 14.2714 14.8661 14.2128C14.9241 14.1548 14.9531 14.0841 14.9531 14.0008V2.62578C14.9531 2.52578 14.9241 2.44645 14.8661 2.38778C14.8075 2.32978 14.7281 2.30078 14.6281 2.30078H6.27812C6.17812 2.30078 6.09913 2.32978 6.04113 2.38778C5.98246 2.44645 5.95312 2.52578 5.95312 2.62578V14.0008C5.95312 14.0841 5.98246 14.1548 6.04113 14.2128C6.09913 14.2714 6.17812 14.3008 6.27812 14.3008ZM2.75312 19.3008C2.25312 19.3008 1.82812 19.1258 1.47812 18.7758C1.12812 18.4258 0.953125 18.0008 0.953125 17.5008V5.55078C0.953125 5.35078 1.02379 5.17578 1.16513 5.02578C1.30713 4.87578 1.48646 4.80078 1.70312 4.80078C1.90312 4.80078 2.07812 4.87578 2.22812 5.02578C2.37812 5.17578 2.45312 5.35078 2.45312 5.55078V17.5008C2.45312 17.5841 2.48213 17.6548 2.54013 17.7128C2.59879 17.7714 2.66979 17.8008 2.75312 17.8008H11.7031C11.9031 17.8008 12.0781 17.8758 12.2281 18.0258C12.3781 18.1758 12.4531 18.3508 12.4531 18.5508C12.4531 18.7674 12.3781 18.9464 12.2281 19.0878C12.0781 19.2298 11.9031 19.3008 11.7031 19.3008H2.75312Z"
              />
            </svg>
            کپی همه
          </CopyArray>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Request from "~~/Api/Request";
import { ref, onMounted } from "vue";

const topic = ref("topic");
const request = new Request("v1");
const textareaValue = ref("");
const subjectValue = ref("");
const showDetailAgreement = ref(false);
const form = ref({
  keywords: "",
  type: "",
});
const results = ref("");

function checkUpdate(el) {
  if (!form.value.type) {
    update(el);
  } else {
    showDetailAgreement.value = false;
    subjectValue.value = "";
    results.value = "";
    form.value.keywords = "";
    form.value.type = "";
    update(el);
  }
}

function update(el) {
  form.value.type = el.target.value;
  if (el.target.value == 1) {
    subjectValue.value = "موضوعات سوالی";
  } else if (el.target.value == 2) {
    subjectValue.value = "موضوعات مقایسه‌ای";
  } else {
    subjectValue.value = "موضوعات متفرقه";
  }
}
async function submitData() {
  const valueArray = textareaValue.value.split("\n");
  form.value.keywords = valueArray.filter((el) => el != "");
  if (form.value.type || form.value.keywords) {
    await sendDataToServer();
    showDetailAgreement.value = true;
  }
}

async function sendDataToServer() {
  let res = await request.get("copy-writer/bulk", form.value);
  if (res.ok) {
    results.value = res.data;
  } else {
    console.log(error);
  }
}

function copy_all_content(results) {
  let content = [];
  results.forEach((item) => {
    content.push(item.keyword, ...item.content, "");
  });
  return content;
}
</script>
