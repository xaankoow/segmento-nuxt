<template>
  <div class="p-2">
  <div class="mt-4 leading-loose">
      <h1 class="font-bold text-lg text-center">فقط عنوان و توضیحات متا خود را وارد کنید تا یک پیش نمایش از وبسایت خودتان را در صفحه سرچ گوگل مشاهده کنید:</h1>
      <span class="text-sm">خیلی از مواقع مطمئن نیستیم که عنوان و توضیحات متایی (Meta Title and Description) که برای گوگل می‌نویسیم، به درستی نمایش داده خواهند شد یا نه. این پیش‌نمایش به شما کمک می‌کند این مشکل را یک بار برای همیشه حل کنید.</span>
    </div>
  <div class="searchBox h-[460px] border p-4 inline-block w-2/5  rounded-[10px] ">
    <div class="searchTitle mb-4">
      <label class="text-sm flow-root my-2.5 font-bold">آدرس وبسایت (URL)</label>
      <div class="flex justify-between gap-4">
        <input @input="txtUrl=$event.target.value" placeholder="example: segmento.ir" @keydown="minimizeParams($event.target.value)" type="text" class="w-4/5 h-11 text-black placeholder:text-base-400 border border-base-400 rounded-[5px] ltr" />
        <button class="btn-primary rounded-lg text-sm w-1/5" :disabled="txtUrl.length===0" @click="checkHttpRegex()">دریافت</button>
      </div>
    </div>
    <div class="title mb-4">
      <label class="flex justify-between text-sm mb-2.5 font-bold">
        عنوان (Title)
      <span class="ltr">({{titleLength.length}} /100px )</span>
      </label>
      <input @input="titleLength=$event.target.value" @keydown="progressBar(titleLength.length,`title`)" placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل" type="text" :class="`w-full text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right`" maxlength="100" />
      <span class="titleProgress" id="tProgressBar"></span>
    </div>
    <div class="Desc mb-4">
      <label class="flex justify-between text-sm mb-2.5 font-bold">توضیحات (Description)
        <span class="ltr">({{descTitle.length}} / 150px )</span>
      </label>
      <textarea @input="descTitle=$event.target.value" @keydown="progressBar(descTitle.length,`desc`)" placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش " class="w-full h-24 py-2 px-4 resize-none text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right" maxlength="150"></textarea>
      <span class="titleProgress" id="descProgressBar"></span>
    </div>
    <div class="keyword mb-4">
      <label class="flow-root text-sm mb-2.5 font-bold">نمایش کلمات کلیدی (Bold Keyword)</label>
      <input placeholder="درج کلمه کلیدی (جداشونده با ویرگول و یا فاصله)" type="text" class="w-full resize-none text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right"/>
    </div>
  </div>
  <div class="preview h-[460px] border p-4 inline-block float-left rounded-[10px] text-black overflow-hidden">
    <box class="box">
      <div class="content p-1 py-3">
        <div class=" flex flex-row-reverse items-center">
          <div :class="[txtUrl.length > 0 ? 'urlImg inline-block h-10' :'hidden']">
            <img class="w-full h-full object-contain" src="../../assets/icons/google.png" />
          </div>
          <div class="sample minimize">
            <h2 class="w-full ltr minimize">{{txtUrl}}</h2>
            <nuxt-link class="minimize float-left text-neutral-500 text-xs ltr" href="/">{{minimizeUrl}}</nuxt-link>
          </div>
        </div>
        <h1 class="flow-root minimize  w-full text-xl text-left text-blue-700 py-1">{{titleLength}}</h1>
        <div class="description flow-root text-xs w-full text-left">
          <p class="text-neutral-500 minimize">
            {{descTitle}}
          </p>
        </div>
      </div>
    </box>
  </div>
  <div class="additional mt-8 text-center border-dashed border-2 px-4 pt-3 border-sky-500 rounded-xl">
    <span class="w-full flow-root">تبلیغات برای گوگل ادز داری و نمیدونی چطوری برای کاربر میخوایی نمایشش بدی، میتونی از ابزار پیش نمایش متن تبلیغات گوگل ادز سگمنتو استفاده کنی؛</span>
    <button class="btn-primary">برو به ابزار
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_68_46" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_68_46)">
          <path d="M11.1 19.1L4.65 12.625C4.55 12.5417 4.47933 12.4457 4.438 12.337C4.396 12.229 4.375 12.1167 4.375 12C4.375 11.8833 4.396 11.7707 4.438 11.662C4.47933 11.554 4.55 11.4583 4.65 11.375L11.1 4.90001C11.25 4.76668 11.425 4.69568 11.625 4.68701C11.825 4.67901 12 4.75001 12.15 4.90001C12.3 5.05001 12.379 5.22501 12.387 5.42501C12.3957 5.62501 12.325 5.80834 12.175 5.97501L6.875 11.25H18.5C18.7 11.25 18.875 11.3207 19.025 11.462C19.175 11.604 19.25 11.7833 19.25 12C19.25 12.2167 19.175 12.3957 19.025 12.537C18.875 12.679 18.7 12.75 18.5 12.75H6.875L12.175 18.05C12.3083 18.1833 12.379 18.354 12.387 18.562C12.3957 18.7707 12.325 18.95 12.175 19.1C12.025 19.25 11.846 19.325 11.638 19.325C11.4293 19.325 11.25 19.25 11.1 19.1Z" fill="white"/>
        </g>
      </svg>
    </button>
  </div>
  </div>
</template>
<style scoped>

.additional{
  background: #F2F5F7;
}

.additional .btn-primary{
  margin: 10px auto;
}

.titleProgress{
  display: flow-root;
  background-color: red;
  float: left;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border-radius: 0 0 5px 5px;
  margin-left: 5px;
  width: 0;
  height: 3px;
}

#descProgressBar{
  margin-top: -8px;
}

.preview{
  width: calc(60% - 30px);
  margin-left: 13px;
}
.urlImg{
  width: 70px;
  /*height: 70px;*/
}

.minimize{
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
<script setup>
  import Request from "../../Api/Request";
  import axios from "axios";

  const titleLength=ref('');
  const descTitle=ref('')
  const txtUrl=ref('');
  const minimizeUrl=ref('')
  const request = new Request();

  const progressBar=(length,type)=>{
    let progress=document.getElementById("tProgressBar");
    let descProgress=document.getElementById("descProgressBar");
    switch (type){
      case "title":
        if (length < 10)  progress.style.width="20px";
        else if (length < 15){
          progress.style.width="100px";
          progress.style.background="red"
        }
        else if  (length < 30) {
          progress.style.width="200px";
          progress.style.background="orange"
        }
        else if (length => 30) {
          progress.style.width="442px";
          progress.style.background="#1bc31b"
        }
        if (length===0 || length === 1) {
          progress.style.width="0px";
          progress.style.background="red"
        }
        break;
      case "desc":
        if (length < 10)  descProgress.style.width="20px";
        else if (length < 15){
          descProgress.style.width="100px";
          descProgress.style.background="red"
        }
        else if  (length < 30) {
          descProgress.style.width="200px";
          descProgress.style.background="orange"
        }
        else if (length => 30) {
          descProgress.style.width="442px";
          descProgress.style.background="#1bc31b"
        }
        if (length===0 || length === 1) {
          descProgress.style.width="0px";
          descProgress.style.background="red"
        }
        break
    }
  }
const checkHttpRegex=()=>{
  // const regex = /^https:\/\/[a-zA-Z0-9.-]+[a-zA-Z0-9\/]*$/;
  if (!txtUrl.value){
    alert("آدرس وبسایت مورد نظر صحیح نمی باشد.");
    return false;
  }
  else{
      sendRequest();
  }
}
const minimizeParams=(el)=> {
  let text = el.split('/');
  let first, last, middle;
  if (text[0].includes('https')  || text[0].includes('http')) {
    first = `${text[0]}//${text[2]}`;
    last = text[text.length - 1] !== '' ? text[text.length - 1] : text[text.length - 2];
    if(text.length > 4)  middle = " >...> "
    else middle = ">"
  }
  else {
    first = `https://${text[0]}`;
    last = text[text.length - 1] !== '' ? text[text.length - 1] : text[text.length - 2];
    if(text.length > 2) middle = " >...> "
    else middle = ">"
  }
  minimizeUrl.value=`${first}${middle}${last.length > 0 ? last=last.substring(0,16)+'....' :""}`;
  if(minimizeUrl.value.length===15) minimizeUrl.value=""
  // console.log(minimizeUrl?.value?.length);
}

const sendRequest=()=>{
  // let res= Request.get('https://www.google.com/api/endpoint',txtUrl.value,"V2").then(async result=>{
  // console.log(await result)
  // });

   let res= axios.get('https://www.google.com/api/endpoint',txtUrl.value)
    console.log(res)
}

</script>
