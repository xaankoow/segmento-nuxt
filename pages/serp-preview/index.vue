<template>
    <div class="mt-4 leading-loose p-2">
      <h1 class="font-bold text-lg text-center font-bold">فقط عنوان و توضیحات متا خود را وارد کنید تا یک پیش نمایش از وبسایت خودتان را در صفحه سرچ گوگل مشاهده کنید:</h1>
      <span class="text-sm">خیلی از مواقع مطمئن نیستیم که عنوان و توضیحات متایی (Meta Title and Description) که برای گوگل می‌نویسیم، به درستی نمایش داده خواهند شد یا نه. این پیش‌نمایش به شما کمک می‌کند این مشکل را یک بار برای همیشه حل کنید.</span>
    </div>
  <div class="searchBox inline-block w-2/5 p-4 rounded ">
    <div class="searchTitle mb-4">
      <lable class="text-sm flow-root my-2.5 font-bold">آدرس وبسایت (URL)</lable>
      <div class="flex gap-2.5">
        <input @input="txtUrl=$event.target.value" placeholder="example: segmento.ir" type="text" class="w-80 h-11 text-black placeholder:text-base-400 border border-base-400 rounded-[5px] ltr" />
        <button class="btn-primary rounded-md text-sm" :disabled="txtUrl.length==0" @click="checkHttpRgex()">دریافت</button>
      </div>
    </div>
    <div class="title mb-4">
      <lable class="flex justify-between text-sm mb-2.5 font-bold">
        عنوان (Title)
      <span class="ltr">({{titleLength.length}} /100px )</span>
      </lable>
      <input @input="titleLength=$event.target.value" @keydown="progressBar(titleLength.length,`title`)" placeholder="مثال: پلتفرم سگمنتو؛ ابزار سئو و کسب ترافیک از گوگل" type="text" :class="`w-full text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right`" maxlength="100" />
      <span class="titleProgress" id="tProgressBar"></span>
    </div>
    <div class="Desc mb-4">
      <lable class="flex justify-between text-sm mb-2.5 font-bold">توضیحات (Description)
        <span class="ltr">({{descTitle.length}} / 150px )</span>
      </lable>
      <textarea @input="descTitle=$event.target.value" @keydown="progressBar(descTitle.length,`desc`)" placeholder="مثال: دسترسی شما به هوشمندترین و قدرتمندترین ابزار سئو ایرانی، فارسی و چابک از همین الان شروع میشه. اگر برای ساده‌شدن کارهای‌تان و موفقیت در سئو آماده هستید پس وقتش " class="w-full h-24 py-2 px-4 resize-none text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right" maxlength="150"></textarea>
      <span class="titleProgress" id="descProgressBar"></span>
    </div>
    <div class="keyword mb-4">
      <lable class="flow-root text-sm mb-2.5 font-bold">نمایش کلمات کلیدی (Bold Keyword)</lable>
      <input placeholder="درج کلمه کلیدی (جداشونده با ویرگول و یا فاصله)" type="text" class="w-full resize-none text-black placeholder:text-base-400 border border-base-400 rounded-[5px] text-right"/>
    </div>
    <button id="run" class="text-primary float-left">
      اجرا
    </button>
  </div>
  <div class="preview p-4 inline-block float-left rounded text-black overflow-hidden">
    <div class="searchHeader  pb-2.5 flex justify-stretch items-center flex-row-reverse gap-4 cursor-pointer">
      <span>ALL</span>
      <span>Images</span>
      <span>Video</span>
      <span>News</span>
      <span>Map</span>
    </div>
    <box class="box">
      <div class="content p-1 py-3">
        <div class=" flex flex-row-reverse items-center">
          <div :class="[txtUrl.length > 0 ? 'urlImg inline-block' :'hidden']">
            <img src="../../assets/icons/google.png" />
          </div>
          <div class="sample">
            <h2 class="w-full ltr minimize">{{txtUrl}}</h2>
            <nuxt-link class="minimize float-left text-neutral-500 text-xs ltr" href="/">{{txtUrl}}</nuxt-link>
          </div>
        </div>
        <h1 class="flow-root minimize text-black w-full text-xl text-left text-blue-700 py-1">{{titleLength}}</h1>
        <div class="description flow-root text-xs w-full text-left">
          <p class="text-neutral-500 minimize">
            {{descTitle}}
          </p>
        </div>
      </div>
    </box>
  </div>
  <div class="additional text-center border-dashed border-2 px-4 pt-3 border-sky-500 rounded-xl">
    <span>تبلیغات برای گوگل ادز داری و نمیدونی چطوری برای کاربر میخوایی نمایشش بدی، میتونی از ابزار پیش نمایش متن تبلیغات گوگل ادز سگمنتو استفاده کنی؛</span>
    <button class="btn-primary">برو به ابزار
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="208" height="208">
        <path d="M23.28125 11L10 10L10 6.851563C10 6.523438 9.839844 6.277344 9.519531 6.03125C9.199219 5.949219 8.878906 5.949219 8.640625 6.113281C5.359375 8.410156 2.238281 12.257813 2.160156 12.421875C2.082031 12.578125 2.007813 12.8125 2.003906 12.976563C2.003906 12.980469 2 12.988281 2 12.992188C2 13.15625 2.078125 13.402344 2.160156 13.484375C2.238281 13.648438 5.28125 17.507813 8.640625 19.804688C8.960938 19.96875 9.28125 20.050781 9.519531 19.886719C9.839844 19.722656 10 19.476563 10 19.148438L10 16L23.28125 15C23.679688 14.679688 24 13.875 24 12.992188C24 12.195313 23.761719 11.320313 23.28125 11Z" fill="#FFFFFF" />
      </svg>
    </button>
  </div>
</template>
<style scoped>
.searchBox{
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
}

.additional{
  width: max-content;
  margin: 16px auto 30px;
  background: #F2F5F7;
}

.additional .btn-primary{
  margin: 10px auto;
}

.btn-primary svg{
  width: 20px;
  height: 20px;
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
  height: 482px;
}

.preview{
  width: calc(60% - 30px);
  margin-left: 13px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.14);
}

.searchHeader{
  border-bottom: 1px solid #dadce0;
}

.searchHeader span {
  border: 1px solid #dadce0;
  border-radius: 30px;
  padding: 6px 18px 3px ;
;
  display: flex;
  align-items: center;
  width: max-content;
}

.urlImg{
  width: 70px;
  /*height: 70px;*/
}

.urlImg img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.minimize{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>
<script setup>
  const titleLength=ref('');
  const descTitle=ref('')
  const txtUrl=ref('');

  watch(()=>{
    debugger
    console.log(txtUrl.value)
  })

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

const checkHttpRgex=()=>{
  const regex = /^https:\/\/[a-zA-Z0-9.-]+[a-zA-Z0-9\/]*$/;
  if (!regex.test(txtUrl.value)){
    alert("آدرس وبسایت مورد نظر صحیح نمی باشد.");
    return false;
  }
}
</script>
