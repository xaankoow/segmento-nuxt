<template>
  <div class="navPage flex flex-row items-center gap-3 px-2 py-1 bg-base-200"><a aria-current="page" href="/idea-generator" class="router-link-active router-link-exact-active"><div class="flex flex-col gap-1 px-2 py-1 rounded-sm text-base-300 text-primary"><span>ساخت فایل جدید</span><hr class="w-2/5 mx-auto border-primary"></div></a><span class=""><span class="border-r h-full"></span></span><!-- <NuxtLink to="/"> --><div class="flex flex-col gap-1 px-2 py-1 rounded-sm text-base-300 text-base-300"><span>فایل های من</span><hr class="w-2/5 mx-auto border-transparent"></div><!-- </NuxtLink> --></div>
  <div class="notification flex flex-col gap-4 pr-4 mt-4">
    <h1>برای ساخت فایل انکار لینک لطفا به نکات زیر توجه کنید: </h1>
    <p class="text-slate-500">نمونه متن برای نوشتن نکات مهم برای ساخت فایل جدید</p>
    <p class="text-slate-500">نمونه متن برای نوشتن نکات مهم برای ساخت فایل جدید</p>
    <p class="text-slate-500">نمونه متن برای نوشتن نکات مهم برای ساخت فایل جدید</p>
    <p class="text-slate-500">نمونه متن برای نوشتن نکات مهم برای ساخت فایل جدید</p>
  </div>

  <div class="urlBox">
    <div :class="['url',focusedUrl ? 'focuse': '']">
      <h1 class="mb-4"> وارد کردن آدرس صفحه: ( URLs )</h1>
      <div>
        <textarea @focus="focusedUrl=true" @blur="focusedUrl=false"  id="textAreaUrl" class="links box" @input="urls=$event.target.value + ' '" @keydown="spliteText()"></textarea>
      </div>
      <span class="warning text-slate-500 text-sm">در هر خط فقط یک آدرس صفحه بنویسید.</span>
    </div>
    <div :class="['domains',focusDomain ? 'focuse': '']">
      <h1 class="mb-4">وارد کردن آدرس سایت: ( Domains )</h1>
      <div>
      <textarea @focus="focusDomain=true" @blur="focusDomain=false" id="textAreaDomain" class="links box" @input="domains=$event.target.value + ' '" @keydown="spliteText()"></textarea>
      </div>
      <span class="warning text-slate-500 text-sm">در هر خط فقط یک آدرس صفحه بنویسید.</span>
    </div>
    <button @click="submitForm()" :class="['createFile w-[130px] h-8 rounded-lg btn-primary p-1',domains.length> 0 || urls.length ?'' : 'disabled']">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <mask id="mask0_19_42" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_19_42)">
          <path d="M6.3 21.5C5.8 21.5 5.375 21.325 5.025 20.975C4.675 20.625 4.5 20.2 4.5 19.7V4.3C4.5 3.8 4.675 3.375 5.025 3.025C5.375 2.675 5.8 2.5 6.3 2.5H13.5C13.75 2.5 13.9833 2.54567 14.2 2.637C14.4167 2.729 14.6083 2.85833 14.775 3.025L18.975 7.225C19.1417 7.39167 19.271 7.58333 19.363 7.8C19.4543 8.01667 19.5 8.25 19.5 8.5V11.55H18V8.5H14.4C14.15 8.5 13.9373 8.41233 13.762 8.237C13.5873 8.06233 13.5 7.85 13.5 7.6V4H6.3C6.23333 4 6.16667 4.03333 6.1 4.1C6.03333 4.16667 6 4.23333 6 4.3V19.7C6 19.7667 6.03333 19.8333 6.1 19.9C6.16667 19.9667 6.23333 20 6.3 20H11.625V21.5H6.3ZM17.85 14.55L18.7 15.4L14.825 19.25V20.3H15.875L19.75 16.45L20.575 17.275L16.65 21.2C16.5667 21.3 16.471 21.371 16.363 21.413C16.2543 21.4543 16.1333 21.475 16 21.475H14.075C13.9583 21.475 13.854 21.4333 13.762 21.35C13.6707 21.2667 13.625 21.1583 13.625 21.025V19.125C13.625 19.0083 13.65 18.896 13.7 18.788C13.75 18.6793 13.8167 18.575 13.9 18.475L17.85 14.55ZM20.575 17.275L17.85 14.55L19.15 13.25C19.3167 13.0833 19.5293 13 19.788 13C20.046 13 20.25 13.0833 20.4 13.25L21.875 14.725C22.0417 14.875 22.125 15.079 22.125 15.337C22.125 15.5957 22.0417 15.8083 21.875 15.975L20.575 17.275Z" fill="white"/>
        </g>
      </svg>
      ساخت فایل</button>
  </div>
  <div class="tollsBox">
    <div class="tBox">
      <div class="counter">
        <div>
          <h1>تعداد آدرس های وبسایت:</h1>
          <span>   {{urlTextLength}} صفحه </span>
        </div>
        <div>
          <h1>تعداد آدرس های وبسایت:</h1>
          <span> {{newTextLength}} وبسایت</span>

        </div>
      </div>
    </div>
    <div class="tBox downloadBox">
        <span>رای ذخیره کردن و دانلود فایل، همچنین ذخیره در
فایل های من بر روی کلید ذخیره کلیک کنید: </span>
      <button class="w-[103px] h-8 rounded-lg btn-primary p-1" disabled>
        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.27812 15.8008C5.76146 15.8008 5.32812 15.6258 4.97812 15.2758C4.62812 14.9258 4.45312 14.5008 4.45312 14.0008V2.62578C4.45312 2.10911 4.62812 1.67578 4.97812 1.32578C5.32812 0.975781 5.76146 0.800781 6.27812 0.800781H14.6281C15.1281 0.800781 15.5575 0.979781 15.9161 1.33778C16.2741 1.69645 16.4531 2.12578 16.4531 2.62578V14.0008C16.4531 14.5008 16.2741 14.9258 15.9161 15.2758C15.5575 15.6258 15.1281 15.8008 14.6281 15.8008H6.27812ZM6.27812 14.3008H14.6281C14.7281 14.3008 14.8075 14.2714 14.8661 14.2128C14.9241 14.1548 14.9531 14.0841 14.9531 14.0008V2.62578C14.9531 2.52578 14.9241 2.44645 14.8661 2.38778C14.8075 2.32978 14.7281 2.30078 14.6281 2.30078H6.27812C6.17812 2.30078 6.09913 2.32978 6.04113 2.38778C5.98246 2.44645 5.95312 2.52578 5.95312 2.62578V14.0008C5.95312 14.0841 5.98246 14.1548 6.04113 14.2128C6.09913 14.2714 6.17812 14.3008 6.27812 14.3008ZM2.75312 19.3008C2.25312 19.3008 1.82812 19.1258 1.47812 18.7758C1.12812 18.4258 0.953125 18.0008 0.953125 17.5008V5.55078C0.953125 5.35078 1.02379 5.17578 1.16513 5.02578C1.30713 4.87578 1.48646 4.80078 1.70312 4.80078C1.90312 4.80078 2.07812 4.87578 2.22812 5.02578C2.37812 5.17578 2.45312 5.35078 2.45312 5.55078V17.5008C2.45312 17.5841 2.48213 17.6548 2.54013 17.7128C2.59879 17.7714 2.66979 17.8008 2.75312 17.8008H11.7031C11.9031 17.8008 12.0781 17.8758 12.2281 18.0258C12.3781 18.1758 12.4531 18.3508 12.4531 18.5508C12.4531 18.7674 12.3781 18.9464 12.2281 19.0878C12.0781 19.2298 11.9031 19.3008 11.7031 19.3008H2.75312Z"
            fill="white" />
        </svg>
        ذخیره
      </button>
    </div>
    <div class="tBox downloadBox">
        <span>برای فرستادن لینک و ارسال آن به گوگل بر روی
کلید ارسال فایل کلیک کنید:</span>
      <button class="w-[130px] h-8 rounded-lg btn-primary p-1" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <mask id="mask0_19_117" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_19_117)">
            <path d="M3.5 17.8999V6.09994C3.5 5.76661 3.63767 5.51661 3.913 5.34994C4.18767 5.18327 4.475 5.15827 4.775 5.27494L18.725 11.1499C19.0917 11.3166 19.275 11.5999 19.275 11.9999C19.275 12.3999 19.0917 12.6833 18.725 12.8499L4.775 18.7249C4.475 18.8416 4.18767 18.8166 3.913 18.6499C3.63767 18.4833 3.5 18.2333 3.5 17.8999ZM5 16.9999L16.85 11.9999L5 6.99994V10.6999L10.425 11.9999L5 13.2999V16.9999Z" fill="white"/>
          </g>
        </svg>
        ارسال فایل</button>
    </div>
  </div>
</template>

<style scoped>

.notification p:before{
  content: "";
  display: inline-block;
  background-color: #0A65CD;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  margin-left: 10px;
  border-radius: 50%;
}

/* urlBox */

.urlBox{
  width: calc(100% - 50px);
  border: 2px solid #e7e7e7;
  padding: 20px 20px 20px 15px;
  border-radius: 10px;
  margin: 20px auto 0;
  direction: lrt;
}

.urlBox > div{
  position: relative;
  width: calc(50% - 16px);
  display: inline-block;
  margin-left: 30px;
}

.urlBox  div.domains{
  margin: 0;
}

.urlBox .url::before{
  content: "";
  display: inline-block;
  width: 1px;
  height: 100%;
  background-color: #e7e7e7;
  position: absolute;
  left: -15px;
  border-radius: 5px;

}

.urlBox > div::after{
  content: "";
  display: inline-block;
  width: calc(100% - 20px);
  height: 5px;
  background-color: #0A65CD;
  z-index: 20;
  position: absolute;
  bottom: 33px;
  right: 11px;
  border-radius: 10px 10px 0 0;
  opacity: 0;
  transition: 0.2s all ease-in-out;
}


.focuse::after{
  opacity: 1!important;
  transition: 0.2s all ease-in-out;
}

.urlBox h1{
  position: relative;
}

.urlBox .url h1::before{
  right: -21px;
}

.urlBox h1::before{
  content: "";
  display: inline-block;
  width: 2px;
  height: calc(100% - 3px);
  position: absolute;
  background-color: #0A65CD;
  right: -16px;
  border-radius: 5px;
  top: 5px;
}

/*end urlBox*/

.urlBox .box{
  display: inline-block;
  width: 100%;
  height: 320px;
  border-radius: 10px;
  padding: 10px 10px 0px;
  max-height: 180px;
  border: 2px solid #e7e7e7;
  text-align: left;
  direction: ltr;
  resize: unset;
}

textarea:focus .urlBox > div::after{
  background: red;
}

/*warning icon*/
.warning::before{
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  -webkit-mask-image: url(/_nuxt/assets/icons/warning.svg);
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  background-color: #FFCE47;
  vertical-align: middle;
}

/*.urlBox .box .links p{
  padding: 10px 0;
}*/

/*.urlBox .box textarea{
  width: 100%;
  height: 100%;
  resize: none;
  overflow: hidden;
}*/

/*btn Style*/
.createFile{
  margin: 20px auto 0;
}

/*tollsBox*/
.tollsBox{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  border: 2px solid #e7e7e7;
  border-radius: 10px;
  width: calc(100% - 50px);
  margin: 20px auto 50px;
  padding: 10px;
}

.tollsBox .tBox{
  border-left: 2px solid #e7e7e7;
}

.tollsBox .tBox:last-child{
  border-left: unset;
}

.tollsBox .downloadBox{
  padding: 0 20px;
}

.tollsBox .counter{
  display: flow-root;
  width: calc(100% - 10px);
  min-height: 100px;
  background-color: #ddddd36b;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
  padding: 8px;
}

.tollsBox .counter div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 0;
}

.tollsBox .counter span{
  color: #888686;
}

.tollsBox button{
  margin: 15px auto 0;
}

.disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: rgb(217 217 217 / 1);
}

</style>
<script setup>
const domains=ref("");
const urls=ref("");
let newText=[];
let urlText=[];
let newTextLength=ref(0);
const urlTextLength=ref(0)
let focusDomain=ref(false)
let focusedUrl=ref(false)

const convertToText=(text, filename)=>{
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;

    link.click();

    // عملیات آزاد کردن منابع
    URL.revokeObjectURL(url);
}


const spliteText= () => {
  newText=[];
  urlText=[];
  let domainsVal=domains.value.split("\n");
  domainsVal.forEach(i => {
      // arg.forEach(j=>{
        if (!i.includes("http") && !i.includes("https://") && !i.includes("/") && !i.includes("www.") && i!=" " && i!=""){
          let txt =i.replaceAll(' ','');
          newText.push("domain:"+txt);
        }
        else {
         let text= i.replace(/^https?:\/\//, '')?.split("/")[0];
         if (text.includes("www.") && !newText.includes("domain:" + text.split("www.")[1]) && text!="" && text!=" "){
           // if (!newText.includes("domain:" + text.split("www.")[1]) && text!="" && text!=" "){
             let txt= text.split("www.")[1].replaceAll(' ','')
            newText.push("domain:"+txt);
           // }
         }
         if (!text.includes("www.") && !newText.includes("domain:" + text) && text!="" && text!=" "){
           // if (!newText.includes("domain:" + text) && text!="" && text!=" "){
             let txt= text.replaceAll(' ','')
             newText.push("domain:"+txt);
           // }
         }
        }

  })

  let urlsValue=urls.value;
  let splitVal=urlsValue.split("\n")
  splitVal.forEach(i => {
        if (!urlText.includes(i.replaceAll(" ","")) && i!=""){
          urlText.push(i);
        }
  })
    // resetForm();
    newTextLength.value=newText.length;
    urlTextLength.value=urlText.length
  console.log(urlTextLength.value);

}

const submitForm=()=>{
  spliteText ();
  convertToText(`#https://app.segmento.ir/disavow-file-generator\n\n#Domains to disavow\n${newText.join("\n")}\n\n#Pages to disavow\n${urlText.join("\n")}`,"zankonoyan");

}

const resetForm=()=>{
    newText=[];
    urlText=[];
  const Areaurl= document.getElementById("textAreaUrl")
  const AreaDomain= document.getElementById("textAreaDomain")
     domains.value=""
     urls.value=""
}

</script>
