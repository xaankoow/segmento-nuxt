<template>
<div>
  <!-- ____________________________________
  loading start
  _________________________________________ -->
  <div v-if="request.pending.value"
    class="top-0 left-0 w-full h-screen fixed z-50 bg-base-350/40 flex justify-center items-center">
    <ToolsLoading class="w-32 h-32" />
  </div>
    <!-- ____________________________________
  loading end
  _________________________________________ -->
  <div class="w-full h-auto rounded overflow-hidden text-sm">
    <div class="w-full h-full text-base-400 text-sm flex flex-col items-start justify-between p-7">
      <!-- ____________________________________
      part 1 (key word) start
      _________________________________________ -->
      <p class="text-base-content text-[10px]">
        1. درج کلمات کلیدی ( در هر خط فقط یک کلمه وارد کنید )
      </p>
      <div class="w-full mb-4 flex items-center justify-center flex-col gap-4">
        <InputTextAreaLiner class="w-full rounded-e" v-model="textareaValue" />
      <!-- ____________________________________
      part 2 (subject select)
      _________________________________________ -->
        <div class="w-full flex flex-col items-start justify-center text-[10px] text-base-content pt-2">
          <p>2. انتخاب موضوع</p>
        <div
          class="w-full h-[67px] text-base-content border border-base-400 rounded mt-2 flex items-center justify-around">
          <inputRadio class="w-full" v-model="form.type" :name="topic" :id=1 @change="checkUpdate($event)">
            موضوعات سوالی
          </inputRadio>

          <inputRadio class="w-full" v-model="form.type" :name="topic" :id=2 @change="checkUpdate($event)">
            موضوعات مقایسه‌ای
          </inputRadio>

          <inputRadio class="w-full" v-model="form.type" :name="topic" :id=3 @change="checkUpdate($event)">
            موضوعات متفرقه
          </inputRadio>
        </div>
        </div>
        
        <button :disabled="!subjectValue || !textareaValue" @click="submitData"
          class="btn-primary">
          تولید عنوان
        </button>
      </div>
      <!-- ____________________________________
      part 3 (show details)
      چارت نمایش اطلاعات (بصورت استاتیک)
      _________________________________________ -->
      <p class="text-[10px] text-base-content">3. نمایش عناوین پیشنهادی</p>
      <DiagramTree class="w-full h-full" :name="subjectValue" v-if="showDetailAgreement" v-for="phrase in results" :key="phrase" :phrase="phrase" />
      <button v-if="showDetailAgreement" class="w-32 h-10 bg-primary rounded-lg flex items-center justify-evenly text-white mb-10">
        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.27812 15.8008C5.76146 15.8008 5.32812 15.6258 4.97812 15.2758C4.62812 14.9258 4.45312 14.5008 4.45312 14.0008V2.62578C4.45312 2.10911 4.62812 1.67578 4.97812 1.32578C5.32812 0.975781 5.76146 0.800781 6.27812 0.800781H14.6281C15.1281 0.800781 15.5575 0.979781 15.9161 1.33778C16.2741 1.69645 16.4531 2.12578 16.4531 2.62578V14.0008C16.4531 14.5008 16.2741 14.9258 15.9161 15.2758C15.5575 15.6258 15.1281 15.8008 14.6281 15.8008H6.27812ZM6.27812 14.3008H14.6281C14.7281 14.3008 14.8075 14.2714 14.8661 14.2128C14.9241 14.1548 14.9531 14.0841 14.9531 14.0008V2.62578C14.9531 2.52578 14.9241 2.44645 14.8661 2.38778C14.8075 2.32978 14.7281 2.30078 14.6281 2.30078H6.27812C6.17812 2.30078 6.09913 2.32978 6.04113 2.38778C5.98246 2.44645 5.95312 2.52578 5.95312 2.62578V14.0008C5.95312 14.0841 5.98246 14.1548 6.04113 14.2128C6.09913 14.2714 6.17812 14.3008 6.27812 14.3008ZM2.75312 19.3008C2.25312 19.3008 1.82812 19.1258 1.47812 18.7758C1.12812 18.4258 0.953125 18.0008 0.953125 17.5008V5.55078C0.953125 5.35078 1.02379 5.17578 1.16513 5.02578C1.30713 4.87578 1.48646 4.80078 1.70312 4.80078C1.90312 4.80078 2.07812 4.87578 2.22812 5.02578C2.37812 5.17578 2.45312 5.35078 2.45312 5.55078V17.5008C2.45312 17.5841 2.48213 17.6548 2.54013 17.7128C2.59879 17.7714 2.66979 17.8008 2.75312 17.8008H11.7031C11.9031 17.8008 12.0781 17.8758 12.2281 18.0258C12.3781 18.1758 12.4531 18.3508 12.4531 18.5508C12.4531 18.7674 12.3781 18.9464 12.2281 19.0878C12.0781 19.2298 11.9031 19.3008 11.7031 19.3008H2.75312Z"
            fill="white" />
        </svg>
        کپی همه
      </button>
      <!--  -->
      <!--  -->
      <!--  -->
      <!--  -->
      <!-- <PolyganSubjected /> -->
      <!-- بخش اطلاعاتی وجود ندارد! زمانی که دیتایی وارد نشده -->
      <!-- <div
        class="w-full h-[411px] mb-4 bg-base-200 rounded border border-base-400 flex flex-col items-center justify-center"
      >
        <svg
          width="78"
          height="78"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_3536_8950"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="78"
            height="78"
          >
            <rect
              x="0.984375"
              width="77.0137"
              height="77.0137"
              fill="#F2F5F7"
            />
          </mask>
          <g mask="url(#mask0_3536_8950)">
            <path
              d="M26.2552 53.7494C26.897 53.7494 27.4586 53.5226 27.9399 53.0691C28.4212 52.6134 28.6619 52.038 28.6619 51.3427V35.2982C28.6619 34.6029 28.4212 34.0275 27.9399 33.5718C27.4586 33.1183 26.897 32.8915 26.2552 32.8915C25.56 32.8915 24.9856 33.1183 24.5321 33.5718C24.0764 34.0275 23.8486 34.6029 23.8486 35.2982V51.3427C23.8486 52.038 24.0764 52.6134 24.5321 53.0691C24.9856 53.5226 25.56 53.7494 26.2552 53.7494ZM38.6897 53.7494C39.385 53.7494 39.9605 53.5226 40.4161 53.0691C40.8697 52.6134 41.0964 52.038 41.0964 51.3427V25.6715C41.0964 24.9762 40.8697 24.4018 40.4161 23.9483C39.9605 23.4926 39.385 23.2648 38.6897 23.2648C37.9945 23.2648 37.4201 23.4926 36.9666 23.9483C36.5109 24.4018 36.2831 24.9762 36.2831 25.6715V51.3427C36.2831 52.038 36.5109 52.6134 36.9666 53.0691C37.4201 53.5226 37.9945 53.7494 38.6897 53.7494ZM51.1242 53.7494C51.8195 53.7494 52.395 53.5226 52.8506 53.0691C53.3041 52.6134 53.5309 52.038 53.5309 51.3427V44.9249C53.5309 44.2296 53.3041 43.6542 52.8506 43.1985C52.395 42.745 51.8195 42.5182 51.1242 42.5182C50.4825 42.5182 49.9209 42.745 49.4396 43.1985C48.9582 43.6542 48.7176 44.2296 48.7176 44.9249V51.3427C48.7176 52.038 48.9582 52.6134 49.4396 53.0691C49.9209 53.5226 50.4825 53.7494 51.1242 53.7494ZM17.1901 65.7828C15.5856 65.7828 14.2219 65.2212 13.0987 64.0981C11.9756 62.975 11.4141 61.6112 11.4141 60.0067V17.0074C11.4141 15.403 11.9756 14.0392 13.0987 12.9161C14.2219 11.793 15.5856 11.2314 17.1901 11.2314H44.1449C44.8401 11.2314 45.4156 11.4582 45.8713 11.9117C46.3248 12.3674 46.5515 12.9428 46.5515 13.6381C46.5515 14.3333 46.3248 14.9077 45.8713 15.3613C45.4156 15.8169 44.8401 16.0448 44.1449 16.0448H17.1901C16.9227 16.0448 16.6959 16.1389 16.5098 16.3271C16.3215 16.5133 16.2274 16.74 16.2274 17.0074V60.0067C16.2274 60.2741 16.3215 60.502 16.5098 60.6902C16.6959 60.8763 16.9227 60.9694 17.1901 60.9694H60.1894C60.4568 60.9694 60.6846 60.8763 60.8729 60.6902C61.059 60.502 61.1521 60.2741 61.1521 60.0067V33.0519C61.1521 32.3567 61.3788 31.7812 61.8323 31.3256C62.288 30.872 62.8635 30.6453 63.5587 30.6453C64.254 30.6453 64.8295 30.872 65.2851 31.3256C65.7386 31.7812 65.9654 32.3567 65.9654 33.0519V60.0067C65.9654 61.6112 65.4039 62.975 64.2807 64.0981C63.1576 65.2212 61.7938 65.7828 60.1894 65.7828H17.1901ZM58.7454 27.2759C58.0501 27.2759 57.4747 27.0481 57.019 26.5924C56.5655 26.1389 56.3387 25.5645 56.3387 24.8692V20.8581H52.3276C51.6323 20.8581 51.0579 20.6303 50.6044 20.1746C50.1487 19.7211 49.9209 19.1467 49.9209 18.4514C49.9209 17.7562 50.1487 17.1818 50.6044 16.7283C51.0579 16.2726 51.6323 16.0448 52.3276 16.0448H56.3387V12.0336C56.3387 11.3384 56.5655 10.7629 57.019 10.3072C57.4747 9.85372 58.0501 9.62695 58.7454 9.62695C59.4406 9.62695 60.0161 9.85372 60.4718 10.3072C60.9253 10.7629 61.1521 11.3384 61.1521 12.0336V16.0448H65.1632C65.8584 16.0448 66.4339 16.2726 66.8896 16.7283C67.3431 17.1818 67.5699 17.7562 67.5699 18.4514C67.5699 19.1467 67.3431 19.7211 66.8896 20.1746C66.4339 20.6303 65.8584 20.8581 65.1632 20.8581H61.1521V24.8692C61.1521 25.5645 60.9253 26.1389 60.4718 26.5924C60.0161 27.0481 59.4406 27.2759 58.7454 27.2759Z"
              fill="#D9D9D9"
            />
          </g>
        </svg>
        <p>اطلاعاتی برای نمایش موضوعات سوالی ندارد!</p>
      </div> -->
    </div>
  </div>
</div>
</template>

<script setup>
import Request from "~~/Api/Request";
import { ref, onMounted } from "vue";
import Konva from "konva";

const topic = ref('topic');
const request = new Request("v1");
const textareaValue = ref("");
const subjectValue = ref("");
const showDetailAgreement = ref(false);
const form = ref({
  keywords: "",
  type: "",
});
const results = ref("")

function checkUpdate(el){
  if(!form.value.type){
    update(el)
  }else{
    showDetailAgreement.value = false
    subjectValue.value = ""
    results.value = ""
    form.value.keywords = ""
    form.value.type = ""
    update(el)
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
    results.value = res.data
    console.log(results.value[0]);
  } else {
    console.log(error);
  }
}
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

// delete??????
// let confirmSplit;
// const addValue = (data) => {
//   confirmSplit = data.replaceAll("\n", ",").split(",");
//   if (confirmSplit.length > 2) {
//     confirmSplit.forEach((i) => {
//       if (i != "" && sperateText.indexOf(`keyWord[]=${i}&`) == -1)
//         sperateText.push(`keyWord[]=${i}&`);
//     });
//   } else sperateText.push(`keyWord[]=${data.replaceAll("\n", "")}&`);
//   console.log(sperateText);
// };
// delete??????
// ///////////////////////////

// حذف از آرایه
// let keyWords;
// const isExsit = (data) => {
//   keyWords = data.split("\n").filter((i) => i != "");
//   const newArr = [];
//   keyWords.forEach((i) => newArr.push(`keyWord[]=${i}&`));
//   sperateText = newArr;
//   sperateText.push(`&type=${inputVal.value}`);

//   setTimeout(function() {
//     sendValue();
//   }, 100);
// };

// const sendValue = () => {
//   console.log("copy-writer/bulk?" + sperateText);
//   const request = new Request("v1");
//   let res = request
//     .post("copy-writer/bulk?", sperateText)
//     .then((res) => {
//       console.log(res);
//       resetData();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   // resetData();
// };

// const resetData = () => {
//   sperateText = [];
//   document.getElementById("keywords").value = "";
//   inputVal.value = "";
// };

// const data = [
//   "تهران مثل",
//   "تهران در مقابل",
//   "تهران در مقایسه با",
//   "تهران یا .... ؟",
//   "انتخاب شما چیست؟",
//   "کدام بهتر است؟",
//   "تهران یا .... ؟",
//   "انتخاب شما چیست؟",
//   "کدام بهتر است؟",
// ];

// const data = [
//   {
//     keyWord: "بستنی",
//     content: [
//       "چطور سیب زمینی",
//       "آیا سیب زمینی است؟",
//       "آیا سیب زمینی می شود؟",
//       "آیا سیب زمینی خواهد شد؟",
//       "چرا سیب زمینی",
//       "به چه دلیل سیب زمینی",
//       "دلیل اینکه سیب زمینی",
//       "چه زمانی سیب زمینی",
//       "چه وقتی سیب زمینی",
//       "کِی سیب زمینی",
//       "چه کسی سیب زمینی",
//       "کی سیب زمینی",
//       "کجا سیب زمینی",
//       "چه جایی سیب زمینی",
//       "کدام سیب زمینی",
//       "کدام یک سیب زمینی",
//       "از بین سیب زمینی",
//       "[word ] چیست؟",
//       "[word ] یعنی چه؟",
//       "اگر سیب زمینی",
//     ],
//   },
//   {
//     keyWord: "کتابخوانی",
//     content: [
//       "چطور کتابخوانی",
//       "آیا کتابخوانی است؟",
//       "آیا کتابخوانی می شود؟",
//       "آیا کتابخوانی خواهد شد؟",
//       "چرا کتابخوانی",
//       "به چه دلیل کتابخوانی",
//       "دلیل اینکه کتابخوانی",
//       "چه زمانی کتابخوانی",
//       "چه وقتی کتابخوانی",
//       "کِی کتابخوانی",
//       "چه کسی کتابخوانی",
//       "کی کتابخوانی",
//       "کجا کتابخوانی",
//       "چه جایی کتابخوانی",
//       "کدام کتابخوانی",
//       "کدام یک کتابخوانی",
//       "از بین کتابخوانی",
//       "[word ] چیست؟",
//       "[word ] یعنی چه؟",
//       "اگر کتابخوانی",
//     ],
//   },
// ];

// const subject = "تهران";

// const stageRef = ref(null);

// onMounted(() => {
//   const stage = new Konva.Stage({
//     container: "container",
//     width: 500,
//     height: 400
//   });

//   stageRef.value = stage;

//   const circleLayer = new Konva.Layer(); // لایه‌ی دایره‌ها
//   const lineLayer = new Konva.Layer(); // لایه‌ی خط‌ها

//   // ایجاد دایره سمت راست
//   const rightCircle = new Konva.Circle({
//     x: stage.width() - 100,
//     y: stage.height() / 2,
//     radius: 10,
//     fill: "#7D7D7D",
//     zIndex: 1, // دایره سمت راست پشت خط‌ها باشد
//   });

//   // اضافه کردن دایره سمت راست به لایه دایره‌ها
//   circleLayer.add(rightCircle);

//   // ایجاد یک آرایه از دایره‌ها در سمت چپ
//   const leftCircles = [];
//   const sceneWidth = stage.width();
//   const sceneHeight = stage.height();
// debugger
// console.log(children)

// let container = document.getElementById("x")
// data.forEach(i => {

//   for (let j = 0; j <= i.content.length; j++) {
//     // debugger
//     const circle = new Konva.Circle({
//       x: 100,
//       y:
//         40 + j * 40,
//       radius: 6,
//       fill: i.content[j] ? "#7D7D7D" : "#D9D9D9",
//       zIndex: 1, // دایره سمت چپ‌ها پشت خط‌ها باشند
//     });

//     leftCircles.push(circle);
//     // اضافه کردن دایره به لایه دایره‌ها
//     circleLayer.add(circle);

//     // ایجاد مستطیل‌ها بعد از هر دایره سمت چپ
//     const rect = new Konva.Rect({
//       x: circle.x(),
//       y: circle.y(),
//       width: 100,
//       height: 100,
//       fill: "",
//       opacity: 0.5,
//       visible: true,
//       listening: false,
//       zIndex: 200,
//     });

//     const stageContainer = stage.getContainer();

//     // تغییر عرض و ارتفاع استیج
//     stageContainer.style.width = "900px";
//     stageContainer.style.width = "900px";
//     stageContainer.style.display = "flex";
//     stageContainer.style.justifyContent = "start";

//     // ایجاد یک گروه
//     const group = new Konva.Group();

//     // اضافه کردن دایره به گروه
//     group.add(circle);

//     // اضافه کردن مستطیل به گروه
//     group.add(rect);

//     // ایجاد تکست برای متن داخل مستطیل
//     const text = new Konva.Text({
//       x: rect.x(),
//       y: rect.y(),
//       text: i.content[j],
//       fontSize: 14,
//       fill: "black",
//       width: rect.width(),
//       height: rect.height(),
//       padding: 4,
//       align: "right",
//       fontFamily: "IRANYekan",
//       fontSize: 12,
//       zIndex: 100,
//     });

//     // اضافه کردن تکست به گروه
//     group.add(text);

//     // اضافه کردن گروه به لایه
//     circleLayer.add(group);

//     // ایجاد خط از مرکز دایره در سمت چپ به مرکز دایره سمت راست
//     const line = new Konva.Line({
//       points: [circle.x(), circle.y(), sceneWidth - 100, sceneHeight / 2],
//       stroke: "#D9D9D9",
//       strokeWidth: 1,
//       zIndex: 0, // خط‌ها در جلوی دایره‌ها باشند
//     });

//     line.on("mouseover", () => {
//       // وقتی خط hover می‌شود، رنگ آن تغییر می‌کند
//       line.stroke("#0A65CD");
//       // رسم نقاشی مجدد برای به‌روزرسانی تغییرات
//       lineLayer.batchDraw();
//     });

//     line.on("mouseout", () => {
//       // وقتی خط از حالت hover خارج می‌شود، رنگ به حالت اصلی بازمی‌گردد
//       line.stroke("#D9D9D9");
//       // رسم نقاشی مجدد برای به‌روزرسانی تغییرات
//       lineLayer.batchDraw();
//     });

//     // اضافه کردن خط به لایه‌ی خط‌ها
//     lineLayer.add(line);
//     // j += 1;
//     // debugger
//     console.log(leftCircles)
//   }
//   return true
// })

// ردن لایه‌ها به صحنه
// stage.add(lineLayer);
// stage.add(circleLayer);

// // رسم نقاشی
// stage.draw();

// })
</script>
