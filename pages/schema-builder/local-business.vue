<template>
    <div class="w-full h-auto">
            <!-- Tabs -->
            <div class="flex flex-row items-center gap-3 text-xs px-2 py-4 h-[10%] bg-base-200">
                <TabItem to="/schema-builder/faq" :active="false">
                     FAQ page
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/how-to" :active="false">
                    How to
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/local-business" :active="true">
                    Local Business
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/product" :active="false">
                    Product
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/recipe" :active="false">
                    Recipe
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/video" :active="false">
                    video
                </TabItem>
                <TabSeparator></TabSeparator>
                <TabItem to="/schema-builder/website" :active="false">
                    Website
                </TabItem>
            </div>
            <div class="flex justify-start items-start gap-2 w-full h-full p-2" >
            <!-- _______________________________________ -->
            <!-- right part -->
            <!-- _______________________________________ -->
            <div id="inputsCard" class="w-1/2 h-full flex flex-col gap-2 align-start justify-start">
                <!-- jobs -->
                <div class="flex gap-2">
                    <div class="w-1/2 h-[45px] text-start align-center border border-base-400 rounded rounded-b-none z-index-[1100]">
                        <DropdownFinalDropDown class="z-index-[1100] h-[200px]">
                            <template v-slot:title>
                                <span>نوع کسب و کار شما</span>
                            </template>
                            <template v-slot:option  >
                                <InputRadio v-for="(element , index) in Object.keys(jobs)" :key="index" v-model="jobs[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs[element].title }}</InputRadio>
                            </template>
                        </DropdownFinalDropDown>
                    </div>
                    <div class="w-1/2 h-[45px] text-start align-center border border-base-400 rounded rounded-b-none z-index-[1100]">
                        <DropdownFinalDropDown class="z-index-[1100]" :disabled="!specificJobsOk">
                            <template v-slot:title>
                                <span>عنوان کسب و کار شما</span>
                            </template>
                            <template v-slot:option>
                                <InputRadio v-if="jobs.AutomotiveBusiness.is_checked" v-for="(element , index) in Object.keys(jobs.AutomotiveBusiness.specificTypes)" :key="index" v-model="jobs.AutomotiveBusiness.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.AutomotiveBusiness.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.EmergencyService.is_checked" v-for="(element , index) in Object.keys(jobs.EmergencyService.specificTypes)" :key="index" v-model="jobs.EmergencyService.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.EmergencyService.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.EntertainmentBusiness.is_checked" v-for="(element , index) in Object.keys(jobs.EntertainmentBusiness.specificTypes)" :key="index" v-model="jobs.EntertainmentBusiness.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.EntertainmentBusiness.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.GovernmentOffice.is_checked" v-for="(element , index) in Object.keys(jobs.GovernmentOffice.specificTypes)" :key="index" v-model="jobs.GovernmentOffice.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.GovernmentOffice.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.FinancialService.is_checked" v-for="(element , index) in Object.keys(jobs.FinancialService.specificTypes)" :key="index" v-model="jobs.FinancialService.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.FinancialService.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.FoodEstablishment.is_checked" v-for="(element , index) in Object.keys(jobs.FoodEstablishment.specificTypes)" :key="index" v-model="jobs.FoodEstablishment.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.FoodEstablishment.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.HomeAndConstructionBusiness.is_checked" v-for="(element , index) in Object.keys(jobs.HomeAndConstructionBusiness.specificTypes)" :key="index" v-model="jobs.HomeAndConstructionBusiness.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.HomeAndConstructionBusiness.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.LegalService.is_checked" v-for="(element , index) in Object.keys(jobs.LegalService.specificTypes)" :key="index" v-model="jobs.LegalService.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.LegalService.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.LodgingBusiness.is_checked" v-for="(element , index) in Object.keys(jobs.LodgingBusiness.specificTypes)" :key="index" v-model="jobs.LodgingBusiness.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.LodgingBusiness.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.MedicalBusiness.is_checked" v-for="(element , index) in Object.keys(jobs.MedicalBusiness.specificTypes)" :key="index" v-model="jobs.MedicalBusiness.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.MedicalBusiness.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.SportsActivityLocation.is_checked" v-for="(element , index) in Object.keys(jobs.SportsActivityLocation.specificTypes)" :key="index" v-model="jobs.SportsActivityLocation.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.SportsActivityLocation.specificTypes[element].title }}</InputRadio>
                                <InputRadio v-if="jobs.Store.is_checked" v-for="(element , index) in Object.keys(jobs.Store.specificTypes)" :key="index" v-model="jobs.Store.specificTypes[element].is_checked" @click="changeJobs(element)" :id="element" :name="jobs" >{{ jobs.Store.specificTypes[element].title }}</InputRadio>
                            </template>
                        </DropdownFinalDropDown>
                    </div>
                </div>
                <!-- details -->
                <div class="flex gap-2">
                    <div class="w-1/2" >
                        <InputText class="w-full align-start" placeholder="نام" @keyup="changeName" v-model="values.name" />
                    </div>
                    <div class="w-1/2" >
                        <InputURL class="w-full align-start" placeholder="لینک تصویر" @keyup="changeImage" v-model="values.image" />
                    </div>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <div class="w-full" >
                        <InputURL class="w-full align-start" placeholder="id" @keyup="changeId" v-model="values.id" />
                    </div>
                    <div class="w-full" >
                        <InputURL class="w-full align-start" placeholder="آدرس وب سایت" @keyup="changeUrl" v-model="values.url" />
                    </div>
                </div>
                <div class="w-full flex gap-3">
                    <div class="w-[50%] h-[45px] flex items-center gap-2">
                        <InputText id="numberNumber" placeholder="شماره تلفن" @input="changeTelephone()" v-model="values.telephone"/>
                    </div>
                    <div class="w-[50%] h-[45px] flex items-center gap-2">
                        <span class="text-sm" >محدوده قیمت به تومان</span>
                        <InputNumber id="priceRange"  @input="changePriceRange()" v-model="values.priceRange"/>
                    </div>
                </div>
                <!-- location -->
                <div class="w-full flex flex-col gap-2">
                    <div class="w-full flex gap-3">
                        <div class="w-[50%] h-[45px] flex items-center gap-2">
                            <InputText id="numberNumber" placeholder="کشور" @input="changeCountry()" v-model="values.address.addressCountry"/>
                        </div>
                        <div class="w-[50%] h-[45px] flex items-center gap-2">
                            <InputText id="numberNumber" placeholder="استان" @input="changeState()" v-model="values.address.addressRegion"/>
                        </div>
                    </div>
                    <div class="w-full flex gap-3">
                        <div class="w-[50%] h-[45px] flex items-center gap-2">
                            <InputText id="numberNumber" placeholder="شهر" @input="changeCity()" v-model="values.address.addressLocality"/>
                        </div>
                        <div class="w-[50%] h-[45px] flex items-center gap-2">
                            <InputText id="numberNumber" placeholder="خیابان" @input="changeStreet()" v-model="values.address.streetAddress"/>
                        </div>
                    </div>
                    <div class="w-full">
                        <InputText class="w-full align-start" placeholder="کد پستی" @keyup="changePostalCode" v-model="values.address.postalCode" />
                    </div>
                </div>
                <!-- geo -->
                <div class="w-full flex gap-2">
                    <div class="w-1/3 h-[45px] flex items-center">
                        <InputNumberNumber2 id="Latitude" placeholder="طول جغرافیایی" @input="changeLatitude()" v-model="valuesGeo.latitude"/>
                    </div>
                    <div class="w-1/3 h-[45px] flex items-center">
                        <InputNumberNumber2 id="Longitude" placeholder="عرض جغرافیایی" @input="changeLongitude()" v-model="valuesGeo.longitude"/>
                    </div>
                </div>
                <!-- oppening time -->
                <div class="w-full flex flex-col gap-2">
                    <div class="w-full">
                        <InputCheckbox :id="hoursOppening" :name="hoursOppening" v-model="allHoursOppeningOk" @click="change24Hours()">باز بودن به صورت 24 ساعته در 7 روز هفته</InputCheckbox>
                    </div>
                    <div class="w-full flex flex-col gap-2">
                        <div class="w-full flex gap-2 items-center" v-for="(value , index) in valuesOppening" :key="index">
                            <div class="w-[30%] h-[45px] text-start align-center border border-base-400 rounded rounded-b-none z-index-[1100]">
                                <DropdownFinalDropDown class="z-index-[1100]">
                                    <template v-slot:title>
                                        <span>روزهای کاری</span>
                                    </template>
                                    <template v-slot:option>
                                        <InputCheckbox v-model="days[index][0].is_checked" @change="changeDays('sunday' , index)" :id="'sunday'+index" :name="'sunday'+index" > شنبه </InputCheckbox>
                                        <InputCheckbox v-model="days[index][1].is_checked" @click="changeDays('saturday' , index)" :id="'saturday'+index" :name="'saturday'+index" > یک شنبه </InputCheckbox>
                                        <InputCheckbox v-model="days[index][2].is_checked" @click="changeDays('monday' , index)" :id="'monday'+index" :name="'monday'+index" > دو شنبه </InputCheckbox>
                                        <InputCheckbox v-model="days[index][3].is_checked" @click="changeDays('thursday' , index)" :id="'thursday'+index" :name="'thursday'+index" > سه شنبه </InputCheckbox>
                                        <InputCheckbox v-model="days[index][4].is_checked" @click="changeDays('wendsday' , index)" :id="'wendsday'+index" :name="'wendsday'+index" > چهار شنبه </InputCheckbox>
                                        <InputCheckbox v-model="days[index][5].is_checked" @click="changeDays('tusday' , index)" :id="'tusday'+index" :name="'tusday'+index" > پنجشنبه </InputCheckbox>
                                        <InputCheckbox v-model="days[index][6].is_checked" @click="changeDays('friday' , index)" :id="'friday'+index" :name="'friday'+index"> جمعه </InputCheckbox>
                                        <!-- <InputCheckbox v-for="(element , indexDays) in days[index]" :key="indexDays" v-model="days[index][indexDays].is_checked" @click="changeDays(indexDays , index)" :id="element.name+index" >{{ days[index][indexDays].title }}</InputCheckbox> -->
                                    </template>
                                </DropdownFinalDropDown>
                            </div>
                            <div class="w-[30%] h-[45px] flex items-center">
                                <InputNumberNumber2 id="openHour" placeholder="شروع ساعات اداری (مثال:10:30)" @input="changeOpenHour(index)" v-model="valuesOppening[index].opens"/>
                            </div>
                            <div class="w-[30%] h-[45px] flex items-center">
                                <InputNumberNumber2 id="closeHour" placeholder="پایان (مثال:10:30)" @input="changecloseHour(index)" v-model="valuesOppening[index].closes"/>
                            </div>
                            <button @click="deleteOneOpenHour(index)" class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                                ✕
                            </button>
                        </div>
                    </div>
                   
                    <button class="btn-secondary" @click="addOpenHours" v-if="!allHoursOppeningOk">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        افزودن ساعت کاری 
                    </button>
                </div>
                <!-- soial -->
                <div class="w-full flex flex-col gap-2 " >
                    <div class="w-[45%] h-[45px] text-start align-center border border-base-400 rounded rounded-b-none z-index-[1100]">
                        <DropdownFinalDropDown class="z-index-[1100]">
                            <template v-slot:title>
                                <span>اکانت در شبکه های اجتماعی</span>
                            </template>
                            <template v-slot:option >
                                <InputCheckbox v-for="(element , index) in Object.keys(socialAccount)" :key="index" v-model="socialAccount[element].is_checked" @click="changeSocialAccount(element , index)" :id="element" >{{ socialAccount[element].title }}</InputCheckbox>
                            </template>
                        </DropdownFinalDropDown>
                    </div>
                    <div  class="w-full flex gap-[10%]  flex-wrap">
                        <div class="w-[45%] mb-2"  v-for="(element , index) in socialAccount.filter((el)=>el.is_checked == true)" :key="index" >
                            <InputText :placeholder=element.name  @keyup="changeSocialAccountValue(element.name , index)" v-model="socialAccountValue[element.name]" />
                        </div>
                    </div>
                </div>
                <!-- department -->
                <div class="w-full flex flex-col gap-2 border-r-2 border-[#D9D9D9] pr-2" v-if="departmentNumber" v-for="(value , index) in departmentNumber" :key="index">
                    <!-- department jobs -->
                    <div class="flex gap-2 items-center">
                        <div class="w-[45%] h-[45px] text-start align-center border border-base-400 rounded rounded-b-none z-index-[1100]">
                            <DropdownFinalDropDown class="z-index-[1100] h-[200px]">
                                <template v-slot:title>
                                    <span>نوع کسب و کار شما</span>
                                </template>
                                <template v-slot:option  >
                                    <InputRadio v-for="(element , indexjob) in Object.keys(departmentJobs)" :key="indexjob" v-model="departmentJobs[element].is_checked" @click="changeDepartmentJobs(element , index)" :id="element+index+'department'" :name="departmentJobs" >{{ departmentJobs[element].title }}</InputRadio>
                                </template>
                            </DropdownFinalDropDown>
                        </div>
                        <div class="w-[45%] h-[45px] text-start align-center border border-base-400 rounded rounded-b-none z-index-[1100]">
                            <DropdownFinalDropDown class="z-index-[1100]" :disabled="!specificDepartmentJobsOk[index]">
                                <template v-slot:title>
                                    <span>عنوان کسب و کار شما</span>
                                </template>
                                <template v-slot:option>
                                    <InputRadio v-if="departmentJobs.AutomotiveBusiness.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.AutomotiveBusiness.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.AutomotiveBusiness.specificTypes[element].is_checked" @click="changeDepartmentJobs(element , index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.AutomotiveBusiness.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.EmergencyService.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.EmergencyService.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.EmergencyService.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.EmergencyService.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.EntertainmentBusiness.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.EntertainmentBusiness.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.EntertainmentBusiness.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.EntertainmentBusiness.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.GovernmentOffice.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.GovernmentOffice.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.GovernmentOffice.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.GovernmentOffice.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.FinancialService.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.FinancialService.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.FinancialService.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.FinancialService.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.FoodEstablishment.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.FoodEstablishment.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.FoodEstablishment.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.FoodEstablishment.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.HomeAndConstructionBusiness.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.HomeAndConstructionBusiness.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.HomeAndConstructionBusiness.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="jobs" >{{ departmentJobs.HomeAndConstructionBusiness.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.LegalService.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.LegalService.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.LegalService.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.LegalService.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.LodgingBusiness.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.LodgingBusiness.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.LodgingBusiness.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.LodgingBusiness.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.MedicalBusiness.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.MedicalBusiness.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.MedicalBusiness.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.MedicalBusiness.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.SportsActivityLocation.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.SportsActivityLocation.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.SportsActivityLocation.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="jobs" >{{ departmentJobs.SportsActivityLocation.specificTypes[element].title }}</InputRadio>
                                    <InputRadio v-if="departmentJobs.Store.is_checked" v-for="(element , indexSpeceficJob) in Object.keys(departmentJobs.Store.specificTypes)" :key="indexSpeceficJob" v-model="departmentJobs.Store.specificTypes[element].is_checked" @click="changeDepartmentJobs(element, index)" :id="element+index" :name="departmentJobs" >{{ departmentJobs.Store.specificTypes[element].title }}</InputRadio>
                                </template>
                            </DropdownFinalDropDown>
                        </div>
                        <button @click="deleteOneDepartment(index)" class="w-[20px] h-[20px] flex items-center justify-center rounded-sm bg-[#F35242]/10 text-[#D02121] font-bold text-sm text-center leading-[normal]">
                            ✕
                        </button>
                    </div>
                    <!-- department details -->
                    <div class="flex gap-2">
                        <div class="w-1/3" >
                            <InputText class="w-full align-start" placeholder="نام" @keyup="changeDepartmentName(index)" v-model="valuesDepartment[index].name" />
                        </div>
                        <div class="w-1/3" >
                            <InputURL class="w-full align-start" placeholder="لینک تصویر" @keyup="changeDepartmentImage(index)" v-model="valuesDepartment[index].image" />
                        </div>
                        <div class="w-1/3 h-[45px] flex items-center gap-2">
                            <InputText id="numberNumber" placeholder="شماره تلفن" @input="changeDepartmentTelephone(index)" v-model="valuesDepartment[index].telephone"/>
                        </div>
                    </div>
                </div>
                <button class="btn-secondary" @click="addDepartment">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    افزودن دپارتمان 
                </button>
            </div>
            <!-- _______________________________________ -->
            <!-- left part -->
            <!-- _______________________________________ -->
            <div class="w-1/2 flex flex-col gap-2">
                <div class="flex gap-2 w-full" >
                    <button @click="deleteAll" class="btn-primary px-4" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_162_227" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_162_227)">
                            <path d="M7.3 20.5C6.8 20.5 6.375 20.325 6.025 19.975C5.675 19.625 5.5 19.2 5.5 18.7V6H4.5V4.5H9V3.625H15V4.5H19.5V6H18.5V18.7C18.5 19.2 18.325 19.625 17.975 19.975C17.625 20.325 17.2 20.5 16.7 20.5H7.3ZM17 6H7V18.7C7 18.7667 7.03333 18.8333 7.1 18.9C7.16667 18.9667 7.23333 19 7.3 19H16.7C16.7667 19 16.8333 18.9667 16.9 18.9C16.9667 18.8333 17 18.7667 17 18.7V6ZM9.4 17H10.9V8H9.4V17ZM13.1 17H14.6V8H13.1V17Z" fill="white"/>
                            </g>
                        </svg>
                        حذف 
                    </button>
                    <a class="btn-primary px-4" href="https://www.google.com" target="_blank">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.99998 17.5C1.36665 17.5 0.912651 17.2167 0.637985 16.65C0.362651 16.0833 0.424985 15.55 0.824985 15.05L6.49998 8.175V2H5.29998C5.09999 2 4.92498 1.929 4.77498 1.787C4.62498 1.64567 4.54998 1.46667 4.54998 1.25C4.54998 1.03333 4.62498 0.854 4.77498 0.712C4.92498 0.570667 5.09999 0.5 5.29998 0.5H12.7C12.9 0.5 13.075 0.570667 13.225 0.712C13.375 0.854 13.45 1.03333 13.45 1.25C13.45 1.46667 13.375 1.64567 13.225 1.787C13.075 1.929 12.9 2 12.7 2H11.5V8.175L17.175 15.05C17.575 15.5333 17.6377 16.0623 17.363 16.637C17.0877 17.2123 16.6333 17.5 16 17.5H1.99998ZM1.99998 16H16L9.99998 8.7V2H7.99998V8.7L1.99998 16Z" fill="white"/>
                        </svg>
    
                        آزمایش 
                    </a>
                    <Copy class="btn-primary px-4" :content="dataForCopy" >   
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_164_21" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_164_21)">
                            <path d="M9.24995 17.7998C8.74995 17.7998 8.32495 17.6248 7.97495 17.2748C7.62495 16.9248 7.44995 16.4998 7.44995 15.9998V4.6248C7.44995 4.10814 7.62495 3.6748 7.97495 3.3248C8.32495 2.9748 8.74995 2.7998 9.24995 2.7998H17.625C18.1416 2.7998 18.575 2.9748 18.925 3.3248C19.275 3.6748 19.45 4.10814 19.45 4.6248V15.9998C19.45 16.4998 19.275 16.9248 18.925 17.2748C18.575 17.6248 18.1416 17.7998 17.625 17.7998H9.24995ZM9.24995 16.2998H17.625C17.7083 16.2998 17.7833 16.2705 17.85 16.2118C17.9166 16.1538 17.95 16.0831 17.95 15.9998V4.6248C17.95 4.54147 17.9166 4.46647 17.85 4.3998C17.7833 4.33314 17.7083 4.2998 17.625 4.2998H9.24995C9.16662 4.2998 9.09595 4.33314 9.03795 4.3998C8.97928 4.46647 8.94995 4.54147 8.94995 4.6248V15.9998C8.94995 16.0831 8.97928 16.1538 9.03795 16.2118C9.09595 16.2705 9.16662 16.2998 9.24995 16.2998ZM5.74995 21.2998C5.24995 21.2998 4.82495 21.1248 4.47495 20.7748C4.12495 20.4248 3.94995 19.9998 3.94995 19.4998V6.7998H5.44995V19.4998C5.44995 19.5831 5.47895 19.6538 5.53695 19.7118C5.59562 19.7705 5.66662 19.7998 5.74995 19.7998H15.45V21.2998H5.74995Z" fill="white"/>
                            </g>
                        </svg>
    
                        کپی
                    </Copy>
                </div>
                <div class="w-full h-full" >
                    <div id="code" ref="code" class="w-full min-h-[500px]">
                        <JsonPrettify  :jsonData="jsonData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref , onMounted } from "vue"
const values = ref(
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "",
        "image": "",
        "@id": "",
        "url": "",
        "telephone": "",
        "priceRange": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "",
            "addressRegion": "",
            "postalCode": "",
            "addressCountry": ""
        }  
    }
);
const jsonData = ref(
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "",
        "image": "",
        "@id": "",
        "url": "",
        "telephone": "",
        "priceRange": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "",
            "addressRegion": "",
            "postalCode": "",
            "addressCountry": ""
        }  
    }
);
function addElementToObject(object, newProperty, beforNewProperty) {
    let newObject = {};
    for (const property in object) {
        newObject[property] = object[property];
        if (property === beforNewProperty) {
        newObject[newProperty] = newProperty;
        }
    }
    return newObject;
}
// // for copy button //
const dataForCopy = ref("")
onMounted(()=>{
    dataForCopy.value = document.getElementById("code").textContent
})
// for delete button 
function deleteAll() {
    values.value =
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "",
        "image": "",
        "@id": "",
        "url": "",
        "telephone": "",
        "priceRange": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "",
            "addressRegion": "",
            "postalCode": "",
            "addressCountry": ""
        }  
    };
    jsonData.value =
    {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "",
        "image": "",
        "@id": "",
        "url": "",
        "telephone": "",
        "priceRange": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "",
            "addressRegion": "",
            "postalCode": "",
            "addressCountry": ""
        }  
    };
    valuesGeo.value = 
    {
        "@type": "GeoCoordinates",
        "latitude": "",
        "longitude": ""
    }
    allHoursOppeningOk.value = false
    hoursOppeningNumber.value = 0
    valuesOppening.value = [
    ]
    socialAccountValue.value = {
    Facbook: "",
    Twitter: "",
    Instagram: "",
    YouTube: "",
    Linkdln: "",
    Pinterest: "",
    SoundCloud: "",
    Wikipedia: "",
    Github: "",
    Website: "",
    };
    departmentNumber = 0
    valuesDepartment = [

    ];

}

// for jobs
const specificJobsOk = ref([])
const specificJobs = ["AutomotiveBusiness", "EmergencyService", "EntertainmentBusiness",
"FinancialService", "GovernmentOffice", "FoodEstablishment", "HomeAndConstructionBusiness",
"LegalService", "LodgingBusiness", "MedicalBusiness", "SportsActivityLocation", "store"]
const jobs = ref({
    AnimalShelter: {
        is_checked: false,
        value: "AnimalShelter",
        title: "پناهگاه حیوانات"
    },
    ArchiveOrganization: {
        is_checked: false,
        value: "ArchiveOrganization",
        title: "سازمان آرشیو"
    },
    AutomotiveBusiness: {
        is_checked: false,
        value: "AutomotiveBusiness",
        title: "تجارت خودرو",
        specificTypes:
        {
            AutoBodyShop: {
                is_checked: false,
                value: "AutoBodyShop",
                title: "فروشگاه بدنه خودرو"
            },
            AutoDealer: {
                is_checked: false,
                value: "AutoDealer",
                title: "فروشنده خودرو"
            },
            AutoPartsStore: {
                is_checked: false,
                value: "AutoPartsStore",
                title: "فروشگاه قطعات خودرو"
            },
            AutoRental: {
                is_checked: false,
                value: "AutoRental",
                title: "اجاره خودرو"
            },
            AutoRepair: {
                is_checked: false,
                value: "AutoRepair",
                title: "تعمیر خودرو"
            },
            AutoWash: {
                is_checked: false,
                value: "AutoWash",
                title: "کارواش"
            },
            GasStation: {
                is_checked: false,
                value: "GasStation",
                title: "پمپ بنزین"
            },
            MotorcycleDealer: {
                is_checked: false,
                value: "MotorcycleDealer",
                title: "فروشنده موتور سیکلت"
            },
            MotorcycleRepair: {
                is_checked: false,
                value: "MotorcycleRepair",
                title: "تعمیر موتور سیکلت"
            },
        }
    },
    ChildCare: {
        is_checked: false,
        value: "ChildCare",
        title: "مراقبت از کودک"
    },
    Dentist: {
        is_checked: false,
        value: "Dentist",
        title: "دندانپزشک"
    },
    DryCleaningOrLaundry: {
        is_checked: false,
        value: "DryCleaningOrLaundry",
        title: "خشکشویی یا لباسشویی"
    },
    EmergencyService: {
        is_checked: false,
        value: "EmergencyService",
        title: "خدمات اضطراری",
        specificTypes:
        {
            FireStation: {
                is_checked: false,
                value: "FireStation",
                title: "ایستگاه آتشنشانی"
            },
            Hospital: {
                is_checked: false,
                value: "Hospital",
                title: "بیمارستان"
            },
            PoliceStation: {
                is_checked: false,
                value: "PoliceStation",
                title: "ایستگاه پلیس"
            },
        }
    },
    EmploymentAgency: {
        is_checked: false,
        value: "EmploymentAgency",
        title: "آژانس استخدام"
    },
    EntertainmentBusiness: {
        is_checked: false,
        value: "EntertainmentBusiness",
        title: "سرگرمی کسب و کار",
        specificTypes:
        {
            AdultEntertainment: {
                is_checked: false,
                value: "AdultEntertainment",
                title: "سرگرمی بزرگسالان"
            },
            AmusementPark: {
                is_checked: false,
                value: "AmusementPark",
                title: "شهر بازی"
            },
            ArtGallery: {
                is_checked: false,
                value: "ArtGallery",
                title: "گالری هنر"
            },
            Casino: {
                is_checked: false,
                value: "Casino",
                title: "کازینو"
            },
            ComedyClub: {
                is_checked: false,
                value: "ComedyClub",
                title: "کلوپ کمدی"
            },
            MovieTheater: {
                is_checked: false,
                value: "MovieTheater",
                title: "سینما"
            },
            NightClub: {
                is_checked: false,
                value: "NightClub",
                title: "کلوپ شبانه"
            },
        }
    },
    FinancialService: {
        is_checked: false,
        value: "FinancialService",
        title: "خدمات مالی",
        specificTypes:
        {
            AccountingService: {
                is_checked: false,
                value: "AccountingService",
                title: "خدمات حسابداری"
            },
            AutomatedTeller: {
                is_checked: false,
                value: "AutomatedTeller",
                title: "گوینده خودکار"
            },
            BankOrCreditUnion: {
                is_checked: false,
                value: "BankOrCreditUnion",
                title: "بانک یا اتحادیه اعتباری"
            },
            InsuranceAgency: {
                is_checked: false,
                value: "InsuranceAgency",
                title: "دفتر بیمه"
            },
        }
    },
    FoodEstablishment: {
        is_checked: false,
        value: "FoodEstablishment",
        title: "تاسیس مواد غذایی",
        specificTypes:
        {
            Bakery: {
                is_checked: false,
                value: "Bakery",
                title: "نانوایی"
            },
            BarOrPub: {
                is_checked: false,
                value: "BarOrPub",
                title: "بار یا میخانه"
            },
            Brewery: {
                is_checked: false,
                value: "Brewery",
                title: "آبجوسازی"
            },
            CafeOrCoffeeShop: {
                is_checked: false,
                value: "CafeOrCoffeeShop",
                title: "کافه یا کافی شاپ"
            },
            Distillery: {
                is_checked: false,
                value: "Distillery",
                title: "تقطیر"
            },
            FastFoodRestaurant: {
                is_checked: false,
                value: "FastFoodRestaurant",
                title: "رستوران فست فود"
            },
            IceCreamShop: {
                is_checked: false,
                value: "IceCreamShop",
                title: "بستنی فروشی"
            },
            Restaurant: {
                is_checked: false,
                value: "Restaurant",
                title: "رستوران"
            },
            Winery: {
                is_checked: false,
                value: "Winery",
                title: "کارخانه شراب سازی"
            },
        }
    },
    GovernmentOffice: {
        is_checked: false,
        value: "GovernmentOffice",
        title: "اداره دولتی",
        specificTypes:
        {
            PostOffice: {
                is_checked: false,
                value: "PostOffice",
                title: "اداره پست"
            },
        }
    },
    HealthAndBeautyBusiness: {
        is_checked: false,
        value: "HealthAndBeautyBusiness",
        title: "کسب و کار سلامت و زیبایی",
        specificTypes:
        {
            BeautySalon: {
                is_checked: false,
                value: "BeautySalon",
                title: "سالن زیبایی"
            },
            DaySpa: {
                is_checked: false,
                value: "DaySpa",
                title: "آبگرم روز"
            },
            HairSalon: {
                is_checked: false,
                value: "HairSalon",
                title: "سالن آرایشی"
            },
            HealthClub: {
                is_checked: false,
                value: "HealthClub",
                title: "باشگاه سلامت"
            },
            NailSalon: {
                is_checked: false,
                value: "NailSalon",
                title: "سالن ناخن"
            },
            TattooParlor: {
                is_checked: false,
                value: "TattooParlor",
                title: "سالن تاتو"
            },
        }
    },
    HomeAndConstructionBusiness: {
        is_checked: false,
        value: "HomeAndConstructionBusiness",
        title: "مشاغل خانگی و ساختمانی",
        specificTypes:
        {
            Electrician: {
                is_checked: false,
                value: "Electrician",
                title: "تکنسین برق"
            },
            GeneralContractor: {
                is_checked: false,
                value: "GeneralContractor",
                title: "پیمانکار عمومی"
            },
            HVACBusiness: {
                is_checked: false,
                value: "HVACBusiness",
                title: "کسب و کار HVAC"
            },
            HousePainter: {
                is_checked: false,
                value: "HousePainter",
                title: "نقاش خانه"
            },
            Locksmith: {
                is_checked: false,
                value: "Locksmith",
                title: "قفل ساز"
            },
            MovingCompany: {
                is_checked: false,
                value: "MovingCompany",
                title: "شرکت حمل و نقل"
            },
            Plumber: {
                is_checked: false,
                value: "Plumber",
                title: "لوله کش"
            },
            RoofingContractor: {
                is_checked: false,
                value: "RoofingContractor",
                title: "پیمانکار سقف"
            },
        }
    },
    InternetCafe: {
        is_checked: false,
        value: "InternetCafe",
        title: "کافی نت"
    },
    LegalService: {
        is_checked: false,
        value: "LegalService",
        title: "سرویس قانونی",
        specificTypes:
        {
            Attorney: {
                is_checked: false,
                value: "Attorney",
                title: "وکیل"
            },
            Notary: {
                is_checked: false,
                value: "Notary",
                title: "دفتر اسناد رسمی"
            },
        }
    },
    Library: {
        is_checked: false,
        value: "Library",
        title: "کتابخانه"
    },
    LodgingBusiness: {
        is_checked: false,
        value: "LodgingBusiness",
        title: "کسب و کار مسکن",
        specificTypes:
        {
            BedAndBreakfast: {
                is_checked: false,
                value: "BedAndBreakfast",
                title: "تخت و صبحانه"
            },
            Campground: {
                is_checked: false,
                value: "Campground",
                title: "محل کمپ"
            },
            Hostel: {
                is_checked: false,
                value: "Hostel",
                title: "خوابگاه"
            },
            Hotel: {
                is_checked: false,
                value: "Hotel",
                title: "هتل"
            },
            Motel: {
                is_checked: false,
                value: "Motel",
                title: "متل"
            },
            Resort: {
                is_checked: false,
                value: "Resort",
                title: "رفت و آمد مکرر"
            },
            VacationRental: {
                is_checked: false,
                value: "VacationRental",
                title: "اجاره تعطیلات"
            },
        }
    },
    MedicalBusiness: {
        is_checked: false,
        value: "MedicalBusiness",
        title: "تجارت پزشکی",
        specificTypes:
        {
            Dentist: {
                is_checked: false,
                value: "Dentist",
                title: "دندانپزشک"
            },
            Dermatology: {
                is_checked: false,
                value: "Dermatology",
                title: "پوست"
            },
            DietNutrition: {
                is_checked: false,
                value: "DietNutrition",
                title: "رژیم غذایی تغذیه"
            },
            Emergency: {
                is_checked: false,
                value: "Emergency",
                title: "اورژانس"
            },
            Geriatric: {
                is_checked: false,
                value: "Geriatric",
                title: "سالمندان"
            },
            Gynecologic: {
                is_checked: false,
                value: "Gynecologic",
                title: "زنان و زایمان"
            },
            MedicalClinic: {
                is_checked: false,
                value: "MedicalClinic",
                title: "کلینیک پزشکی"
            },
            Midwifery: {
                is_checked: false,
                value: "Midwifery",
                title: "مامایی"
            },
            Nursing: {
                is_checked: false,
                value: "Nursing",
                title: "پرستاری"
            },
            Obstetric: {
                is_checked: false,
                value: "Obstetric",
                title: "زنان و زایمان"
            },
            Oncologic: {
                is_checked: false,
                value: "Oncologic",
                title: "انکولوژیک"
            },
            Optician: {
                is_checked: false,
                value: "Optician",
                title: "عینک فروشی"
            },
            Optometric: {
                is_checked: false,
                value: "Optometric",
                title: "بینایی سنجی"
            },
            Otolaryngologic: {
                is_checked: false,
                value: "Otolaryngologic",
                title: "گوش و حلق و بینی"
            },
            Pediatric: {
                is_checked: false,
                value: "Pediatric",
                title: "اطفال"
            },
            Pharmacy: {
                is_checked: false,
                value: "Pharmacy",
                title: "داروخانه"
            },
            Physician: {
                is_checked: false,
                value: "Physician",
                title: "پزشک"
            },
            Physiotherapy: {
                is_checked: false,
                value: "Physiotherapy",
                title: "فیزیوتراپی"
            },
            PlasticSurgery: {
                is_checked: false,
                value: "PlasticSurgery",
                title: "جراحی پلاستیک"
            },
            Podiatric: {
                is_checked: false,
                value: "Podiatric",
                title: "بیماری های پا"
            },
            PrimaryCare: {
                is_checked: false,
                value: "PrimaryCare",
                title: "مراقبت های اولیه"
            },
            Psychiatric: {
                is_checked: false,
                value: "Psychiatric",
                title: "روانپزشکی"
            },
            PublicHealth: {
                is_checked: false,
                value: "PublicHealth",
                title: "سلامت عمومی"
            },
            CommunityHealth: {
                is_checked: false,
                value: "CommunityHealth",
                title: "سلامت جامعه"
            },
        }
    },
    ProfessionalService: {
        is_checked: false,
        value: "ProfessionalService",
        title: "خدمات حرفه ای"
    },
    RadioStation: {
        is_checked: false,
        value: "RadioStation",
        title: "ایستگاه رادیویی"
    },
    RealEstateAgent: {
        is_checked: false,
        value: "RealEstateAgent",
        title: "نماینده املاک"
    },
    RecyclingCenter: {
        is_checked: false,
        value: "RecyclingCenter",
        title: "مرکز بازیافت"
    },
    SelfStorage: {
        is_checked: false,
        value: "SelfStorage",
        title: "خود ذخیره سازی"
    },
    ShoppingCenter: {
        is_checked: false,
        value: "ShoppingCenter",
        title: "مرکز خرید"
    },
    SportsActivityLocation: {
        is_checked: false,
        value: "SportsActivityLocation",
        title: "محل فعالیت ورزشی",
        specificTypes:
        {
            BowlingAlley: {
                is_checked: false,
                value: "BowlingAlley",
                title: "سالن بولینگ"
            },
            ExerciseGym: {
                is_checked: false,
                value: "ExerciseGym",
                title: "ورزشگاه"
            },
            GolfCourse: {
                is_checked: false,
                value: "GolfCourse",
                title: "زمین گلف"
            },
            HealthClub: {
                is_checked: false,
                value: "HealthClub",
                title: "باشگاه سلامت"
            },
            PublicSwimmingPool: {
                is_checked: false,
                value: "PublicSwimmingPool",
                title: "استخر شنا عمومی"
            },
            SkiResort: {
                is_checked: false,
                value: "SkiResort",
                title: "پیست اسکی"
            },
            SportsClub: {
                is_checked: false,
                value: "SportsClub",
                title: "باشگاه ورزشی"
            },
            StadiumOrArena: {
                is_checked: false,
                value: "StadiumOrArena",
                title: "استادیوم یا آرنا"
            },
            TennisComplex: {
                is_checked: false,
                value: "TennisComplex",
                title: "مجتمع تنیس"
            },
        }
    },
    Store: {
        is_checked: false,
        value: "Store",
        title: "فروشگاه",
        specificTypes:
        {
            AutoPartsStore: {
                is_checked: false,
                value: "AutoPartsStore",
                title: "فروشگاه قطعات خودرو"
            },
            BikeStore: {
                is_checked: false,
                value: "BikeStore",
                title: "فروشگاه دوچرخه"
            },
            BookStore: {
                is_checked: false,
                value: "BookStore",
                title: "کتابفروشی"
            },
            ClothingStore: {
                is_checked: false,
                value: "ClothingStore",
                title: "فروشگاه پوشاک"
            },
            ComputerStore: {
                is_checked: false,
                value: "ComputerStore",
                title: "فروشگاه رایانه"
            },
            ConvenienceStore: {
                is_checked: false,
                value: "ConvenienceStore",
                title: "خواروبارفروشی کوچک"
            },
            DepartmentStore: {
                is_checked: false,
                value: "DepartmentStore",
                title: "فروشگاه بزرگ"
            },
            ElectronicsStore: {
                is_checked: false,
                value: "ElectronicsStore",
                title: "فروشگاه لوازم الکترونیکی"
            },
            Florist: {
                is_checked: false,
                value: "Florist",
                title: "گل فروشی"
            },
            FurnitureStore: {
                is_checked: false,
                value: "FurnitureStore",
                title: "فروشگاه مبلمان"
            },
            GardenStore: {
                is_checked: false,
                value: "GardenStore",
                title: "باغ فروشگاه"
            },
            GroceryStore: {
                is_checked: false,
                value: "GroceryStore",
                title: "فروشگاه بقالی"
            },
            HardwareStore: {
                is_checked: false,
                value: "HardwareStore",
                title: "فروشگاه سخت افزار"
            },
            HobbyShop: {
                is_checked: false,
                value: "HobbyShop",
                title: "فروشگاه سرگرمی"
            },
            HomeGoodsStore: {
                is_checked: false,
                value: "HomeGoodsStore",
                title: "فروشگاه کالاهای خانگی"
            },
            JewelryStore: {
                is_checked: false,
                value: "JewelryStore",
                title: "جواهر فروشی"
            },
            LiquorStore: {
                is_checked: false,
                value: "LiquorStore",
                title: ""
            },
            MensClothingStore: {
                is_checked: false,
                value: "MensClothingStore",
                title: "فروشگاه پوشاک مردانه"
            },
            MobilePhoneStore: {
                is_checked: false,
                value: "MobilePhoneStore",
                title: "فروشگاه تلفن همراه"
            },
            MovieRentalStore: {
                is_checked: false,
                value: "MovieRentalStore",
                title: "فروشگاه اجاره فیلم"
            },
            MusicStore: {
                is_checked: false,
                value: "MusicStore",
                title: "فروشگاه موسیقی"
            },
            OfficeEquipmentStore: {
                is_checked: false,
                value: "OfficeEquipmentStore",
                title: "فروشگاه تجهیزات اداری"
            },            
            OutletStore: {
                is_checked: false,
                value: "OutletStore",
                title: "فروشگاه پریز"
            },
            PawnShop: {
                is_checked: false,
                value: "PawnShop",
                title: "فروشگاه رهنی"
            },
            PetStore: {
                is_checked: false,
                value: "PetStore",
                title: "فروشگاه حیوانات خانگی"
            },            
            ShoeStore: {
                is_checked: false,
                value: "ShoeStore",
                title: "کفش فروشی"
            },
            SportingGoodsStore: {
                is_checked: false,
                value: "SportingGoodsStore",
                title: "فروشگاه لوازم ورزشی"
            },
            TireShop: {
                is_checked: false,
                value: "TireShop",
                title: "فروشگاه لاستیک فروشی "
            },            
            ToyStore: {
                is_checked: false,
                value: "ToyStore",
                title: "فروشگاه اسباب بازی"
            },
            WholesaleStore: {
                is_checked: false,
                value: "WholesaleStore",
                title: "فروشگاه عمده فروشی"
            },
        }
    },
    TelevisionStation: {
        is_checked: false,
        value: "TelevisionStation",
        title: "ایستگاه تلویزیونی"
    },
    TouristInformationCenter: {
        is_checked: false,
        value: "TouristInformationCenter",
        title: "مرکز اطلاعات گردشگری"
    },
    TravelAgency: {
        is_checked: false,
        value: "TravelAgency",
        title: "آژانس مسافرتی"
    },
})
function changeJobs(el) {
    jsonData.value["@type"] = el
    for (let job in jobs.value) {
        if(job == el){
            jobs.value[job].is_checked = true
        }else{
            jobs.value[job].is_checked = false
        }
    }
    specificJobsOk.value = false
    for (let specificJob in specificJobs){
        if(specificJobs[specificJob] == el){
            specificJobsOk.value = true
        }
    }
}
// for detail
function changeName() {
    jsonData.value.name = values.value.name
}
function changeImage() {
    jsonData.value.image = values.value.image
}
function changeId() {
    jsonData.value.id = values.value.id
}
function changeUrl() {
    jsonData.value.url = values.value.url
}
function changeTelephone() {
    jsonData.value.telephone = values.value.telephone
}
function changePriceRange() {
    jsonData.value.priceRange = values.value.priceRange
}
// for loc
function changeCountry() {
    jsonData.value.address.addressCountry = values.value.address.addressCountry
}
function changeState() {
    jsonData.value.address.addressRegion = values.value.address.addressRegion
}
function changeCity() {
    jsonData.value.address.addressLocality = values.value.address.addressLocality
}
function changeStreet() {
    jsonData.value.address.streetAddress = values.value.address.streetAddress
}
function changePostalCode() {
    jsonData.value.address.postalCode = values.value.address.postalCode
}
// for geo
const valuesGeo = ref(
    {
        "@type": "GeoCoordinates",
        "latitude": "",
        "longitude": ""
    }
)
function changeLatitude() {
    if(!jsonData.value.geo){
        let newJson = []
        newJson = addElementToObject(jsonData.value, "geo", "address");
        jsonData.value = newJson
        jsonData.value.geo = valuesGeo.value
        jsonData.value.geo.latitude = valuesGeo.value.latitude
    }else{
        jsonData.value.geo.latitude = valuesGeo.value.latitude
    }
}
function changeLongitude() {
    if(!jsonData.value.geo){
        let newJson = []
        newJson = addElementToObject(jsonData.value, "geo", "address");
        jsonData.value = newJson
        jsonData.value.geo = valuesGeo.value
        jsonData.value.geo.longitude = valuesGeo.value.longitude
    }else{
        jsonData.value.geo.longitude = valuesGeo.value.longitude
    }
}
// for oppening hours
const allHoursOppeningOk = ref(false)
const hoursOppeningNumber = ref(0)
const days = ref([

])
function change24Hours() {
    allHoursOppeningOk.value = !allHoursOppeningOk.value
}
const valuesOppening = ref([
]
)
function addOpenHours() {
    hoursOppeningNumber.value ++
    valuesOppening.value[hoursOppeningNumber.value-1] = 
    {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
        ],
        "opens": "",
        "closes": ""
    }
    days.value[hoursOppeningNumber.value-1] = 
    [
    {
        name: "saturday",
        is_checked: false,
        value: "saturday",
        title: "شنبه"
    },
    {
        name: "sunday",
        is_checked: false,
        value: "sunday",
        title: "یک شنبه"
    },
    {
        name: "monday",
        is_checked: false,
        value: "monday",
        title: "دوشنبه"
    },
    {
        name: "tuesday",
        is_checked: false,
        value: "tuesday",
        title: "سه شنبه"
    },
    {
        name: "wendsday",
        is_checked: false,
        value: "wendsday",
        title: "چهارشنبه"
    },
    {
        name: "thursday",
        is_checked: false,
        value: "thursday",
        title: "پنج شنبه"
    },
    {
        name: "friday",
        is_checked: false,
        value: "friday",
        title: "جمعه"
    },
    ]
    let newJson = {}
    if(!jsonData.value.openingHoursSpecification){
        if(jsonData.value.geo){
            newJson = addElementToObject(jsonData.value, "openingHoursSpecification", "geo");
        }else{
            newJson = addElementToObject(jsonData.value, "openingHoursSpecification", "address");
        }
        jsonData.value = newJson
        jsonData.value.openingHoursSpecification = valuesOppening.value
    }else{
        jsonData.value.openingHoursSpecification[hoursOppeningNumber.value-1] =     
        {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
        ],
        "opens": "",
        "closes": ""
    }
    }
}
function deleteOneOpenHour(taskIndex){
    if (hoursOppeningNumber.value > 1) {
        hoursOppeningNumber.value --
        valuesOppening.value.splice(taskIndex, 1)
    }else{
        hoursOppeningNumber.value --
        jsonData.value.openingHoursSpecification.splice(taskIndex, 1)
        delete jsonData.value.openingHoursSpecification
        valuesOppening.value.splice(taskIndex, 1)
    }
}
function changeOpenHour(taskIndex) {
    jsonData.value.openingHoursSpecification[taskIndex].opens = valuesOppening.value[taskIndex].opens
}
function changecloseHour(taskIndex) {
    jsonData.value.openingHoursSpecification[taskIndex].closes = valuesOppening.value[taskIndex].closes
}
function changeDays(day , taskIndex) {
    if(!jsonData.value.openingHoursSpecification[taskIndex].dayOfWeek.day){
        valuesOppening.value[taskIndex].dayOfWeek.push(day)
        jsonData.value.openingHoursSpecification[taskIndex].dayOfWeek.push(day)
    }else{
        delete jsonData.value.openingHoursSpecification[taskIndex].dayOfWeek.day
    }

    // jsonData.value.openingHoursSpecification[taskIndex].dayOfWeek.pop()
}
// soial
const socialAccount = ref([
    {
        name: "Facbook",
        is_checked: false,
        value: "Facbook",
        title: "فیسبوک"
    },
    {
        name: "Twitter",
        is_checked: false,
        value: "Twitter",
        title: "توییتر"
    },
    {
        name: "Instagram",
        is_checked: false,
        value: "Instagram",
        title: "اینستاگرام"
    },
    {
        name: "YouTube",
        is_checked: false,
        value: "YouTube",
        title: "یوتیوب"
    },
    {
        name: "Linkdln",
        is_checked: false,
        value: "Linkdln",
        title: "لینکدن"
    },
    {
        name: "Pinterest",
        is_checked: false,
        value: "Pinterest",
        title: "پینترست"
    },
    {
        name: "SoundCloud",
        is_checked: false,
        value: "SoundCloud",
        title: "سند کلود"
    },
    {
        name: "Wikipedia",
        is_checked: false,
        value: "Wikipedia",
        title: "ویکی پدیا"
    },
    {
        name: "Github",
        is_checked: false,
        value: "Github",
        title: "گیت هاب"
    },
    {
        name: "Website",
        is_checked: false,
        value: "Website",
        title: "وب سایت"
    },
]);
const socialAccountValue = ref({
    Facbook: "",
    Twitter: "",
    Instagram: "",
    YouTube: "",
    Linkdln: "",
    Pinterest: "",
    SoundCloud: "",
    Wikipedia: "",
    Github: "",
    Website: "",
});
function changeSocialAccount(el , index){
    if (!socialAccount.value[index].is_checked){
        if(!jsonData.value.sameAs){
            let newJson = []
            newJson = addElementToObject(jsonData.value, "sameAs" , "address");
            jsonData.value = newJson
            jsonData.value.sameAs = []
        }
        jsonData.value.sameAs[index] = ""
    }else{
        delete jsonData.value.sameAs[index]
    }
}
function changeSocialAccountValue(el , index) {
   jsonData.value.sameAs[index] = socialAccountValue.value[el]
}
// for department
const departmentNumber = ref(0)
const specificDepartmentJobsOk = ref([])
const specificDepartmentJobs = ["AutomotiveBusiness", "EmergencyService", "EntertainmentBusiness",
"FinancialService", "GovernmentOffice", "FoodEstablishment", "HomeAndConstructionBusiness",
"LegalService", "LodgingBusiness", "MedicalBusiness", "SportsActivityLocation", "store"]
const departmentJobs = ref({
    AnimalShelter: {
        is_checked: false,
        value: "AnimalShelter",
        title: "پناهگاه حیوانات"
    },
    ArchiveOrganization: {
        is_checked: false,
        value: "ArchiveOrganization",
        title: "سازمان آرشیو"
    },
    AutomotiveBusiness: {
        is_checked: false,
        value: "AutomotiveBusiness",
        title: "تجارت خودرو",
        specificTypes:
        {
            AutoBodyShop: {
                is_checked: false,
                value: "AutoBodyShop",
                title: "فروشگاه بدنه خودرو"
            },
            AutoDealer: {
                is_checked: false,
                value: "AutoDealer",
                title: "فروشنده خودرو"
            },
            AutoPartsStore: {
                is_checked: false,
                value: "AutoPartsStore",
                title: "فروشگاه قطعات خودرو"
            },
            AutoRental: {
                is_checked: false,
                value: "AutoRental",
                title: "اجاره خودرو"
            },
            AutoRepair: {
                is_checked: false,
                value: "AutoRepair",
                title: "تعمیر خودرو"
            },
            AutoWash: {
                is_checked: false,
                value: "AutoWash",
                title: "کارواش"
            },
            GasStation: {
                is_checked: false,
                value: "GasStation",
                title: "پمپ بنزین"
            },
            MotorcycleDealer: {
                is_checked: false,
                value: "MotorcycleDealer",
                title: "فروشنده موتور سیکلت"
            },
            MotorcycleRepair: {
                is_checked: false,
                value: "MotorcycleRepair",
                title: "تعمیر موتور سیکلت"
            },
        }
    },
    ChildCare: {
        is_checked: false,
        value: "ChildCare",
        title: "مراقبت از کودک"
    },
    Dentist: {
        is_checked: false,
        value: "Dentist",
        title: "دندانپزشک"
    },
    DryCleaningOrLaundry: {
        is_checked: false,
        value: "DryCleaningOrLaundry",
        title: "خشکشویی یا لباسشویی"
    },
    EmergencyService: {
        is_checked: false,
        value: "EmergencyService",
        title: "خدمات اضطراری",
        specificTypes:
        {
            FireStation: {
                is_checked: false,
                value: "FireStation",
                title: "ایستگاه آتشنشانی"
            },
            Hospital: {
                is_checked: false,
                value: "Hospital",
                title: "بیمارستان"
            },
            PoliceStation: {
                is_checked: false,
                value: "PoliceStation",
                title: "ایستگاه پلیس"
            },
        }
    },
    EmploymentAgency: {
        is_checked: false,
        value: "EmploymentAgency",
        title: "آژانس استخدام"
    },
    EntertainmentBusiness: {
        is_checked: false,
        value: "EntertainmentBusiness",
        title: "سرگرمی کسب و کار",
        specificTypes:
        {
            AdultEntertainment: {
                is_checked: false,
                value: "AdultEntertainment",
                title: "سرگرمی بزرگسالان"
            },
            AmusementPark: {
                is_checked: false,
                value: "AmusementPark",
                title: "شهر بازی"
            },
            ArtGallery: {
                is_checked: false,
                value: "ArtGallery",
                title: "گالری هنر"
            },
            Casino: {
                is_checked: false,
                value: "Casino",
                title: "کازینو"
            },
            ComedyClub: {
                is_checked: false,
                value: "ComedyClub",
                title: "کلوپ کمدی"
            },
            MovieTheater: {
                is_checked: false,
                value: "MovieTheater",
                title: "سینما"
            },
            NightClub: {
                is_checked: false,
                value: "NightClub",
                title: "کلوپ شبانه"
            },
        }
    },
    FinancialService: {
        is_checked: false,
        value: "FinancialService",
        title: "خدمات مالی",
        specificTypes:
        {
            AccountingService: {
                is_checked: false,
                value: "AccountingService",
                title: "خدمات حسابداری"
            },
            AutomatedTeller: {
                is_checked: false,
                value: "AutomatedTeller",
                title: "گوینده خودکار"
            },
            BankOrCreditUnion: {
                is_checked: false,
                value: "BankOrCreditUnion",
                title: "بانک یا اتحادیه اعتباری"
            },
            InsuranceAgency: {
                is_checked: false,
                value: "InsuranceAgency",
                title: "دفتر بیمه"
            },
        }
    },
    FoodEstablishment: {
        is_checked: false,
        value: "FoodEstablishment",
        title: "تاسیس مواد غذایی",
        specificTypes:
        {
            Bakery: {
                is_checked: false,
                value: "Bakery",
                title: "نانوایی"
            },
            BarOrPub: {
                is_checked: false,
                value: "BarOrPub",
                title: "بار یا میخانه"
            },
            Brewery: {
                is_checked: false,
                value: "Brewery",
                title: "آبجوسازی"
            },
            CafeOrCoffeeShop: {
                is_checked: false,
                value: "CafeOrCoffeeShop",
                title: "کافه یا کافی شاپ"
            },
            Distillery: {
                is_checked: false,
                value: "Distillery",
                title: "تقطیر"
            },
            FastFoodRestaurant: {
                is_checked: false,
                value: "FastFoodRestaurant",
                title: "رستوران فست فود"
            },
            IceCreamShop: {
                is_checked: false,
                value: "IceCreamShop",
                title: "بستنی فروشی"
            },
            Restaurant: {
                is_checked: false,
                value: "Restaurant",
                title: "رستوران"
            },
            Winery: {
                is_checked: false,
                value: "Winery",
                title: "کارخانه شراب سازی"
            },
        }
    },
    GovernmentOffice: {
        is_checked: false,
        value: "GovernmentOffice",
        title: "اداره دولتی",
        specificTypes:
        {
            PostOffice: {
                is_checked: false,
                value: "PostOffice",
                title: "اداره پست"
            },
        }
    },
    HealthAndBeautyBusiness: {
        is_checked: false,
        value: "HealthAndBeautyBusiness",
        title: "کسب و کار سلامت و زیبایی",
        specificTypes:
        {
            BeautySalon: {
                is_checked: false,
                value: "BeautySalon",
                title: "سالن زیبایی"
            },
            DaySpa: {
                is_checked: false,
                value: "DaySpa",
                title: "آبگرم روز"
            },
            HairSalon: {
                is_checked: false,
                value: "HairSalon",
                title: "سالن آرایشی"
            },
            HealthClub: {
                is_checked: false,
                value: "HealthClub",
                title: "باشگاه سلامت"
            },
            NailSalon: {
                is_checked: false,
                value: "NailSalon",
                title: "سالن ناخن"
            },
            TattooParlor: {
                is_checked: false,
                value: "TattooParlor",
                title: "سالن تاتو"
            },
        }
    },
    HomeAndConstructionBusiness: {
        is_checked: false,
        value: "HomeAndConstructionBusiness",
        title: "مشاغل خانگی و ساختمانی",
        specificTypes:
        {
            Electrician: {
                is_checked: false,
                value: "Electrician",
                title: "تکنسین برق"
            },
            GeneralContractor: {
                is_checked: false,
                value: "GeneralContractor",
                title: "پیمانکار عمومی"
            },
            HVACBusiness: {
                is_checked: false,
                value: "HVACBusiness",
                title: "کسب و کار HVAC"
            },
            HousePainter: {
                is_checked: false,
                value: "HousePainter",
                title: "نقاش خانه"
            },
            Locksmith: {
                is_checked: false,
                value: "Locksmith",
                title: "قفل ساز"
            },
            MovingCompany: {
                is_checked: false,
                value: "MovingCompany",
                title: "شرکت حمل و نقل"
            },
            Plumber: {
                is_checked: false,
                value: "Plumber",
                title: "لوله کش"
            },
            RoofingContractor: {
                is_checked: false,
                value: "RoofingContractor",
                title: "پیمانکار سقف"
            },
        }
    },
    InternetCafe: {
        is_checked: false,
        value: "InternetCafe",
        title: "کافی نت"
    },
    LegalService: {
        is_checked: false,
        value: "LegalService",
        title: "سرویس قانونی",
        specificTypes:
        {
            Attorney: {
                is_checked: false,
                value: "Attorney",
                title: "وکیل"
            },
            Notary: {
                is_checked: false,
                value: "Notary",
                title: "دفتر اسناد رسمی"
            },
        }
    },
    Library: {
        is_checked: false,
        value: "Library",
        title: "کتابخانه"
    },
    LodgingBusiness: {
        is_checked: false,
        value: "LodgingBusiness",
        title: "کسب و کار مسکن",
        specificTypes:
        {
            BedAndBreakfast: {
                is_checked: false,
                value: "BedAndBreakfast",
                title: "تخت و صبحانه"
            },
            Campground: {
                is_checked: false,
                value: "Campground",
                title: "محل کمپ"
            },
            Hostel: {
                is_checked: false,
                value: "Hostel",
                title: "خوابگاه"
            },
            Hotel: {
                is_checked: false,
                value: "Hotel",
                title: "هتل"
            },
            Motel: {
                is_checked: false,
                value: "Motel",
                title: "متل"
            },
            Resort: {
                is_checked: false,
                value: "Resort",
                title: "رفت و آمد مکرر"
            },
            VacationRental: {
                is_checked: false,
                value: "VacationRental",
                title: "اجاره تعطیلات"
            },
        }
    },
    MedicalBusiness: {
        is_checked: false,
        value: "MedicalBusiness",
        title: "تجارت پزشکی",
        specificTypes:
        {
            Dentist: {
                is_checked: false,
                value: "Dentist",
                title: "دندانپزشک"
            },
            Dermatology: {
                is_checked: false,
                value: "Dermatology",
                title: "پوست"
            },
            DietNutrition: {
                is_checked: false,
                value: "DietNutrition",
                title: "رژیم غذایی تغذیه"
            },
            Emergency: {
                is_checked: false,
                value: "Emergency",
                title: "اورژانس"
            },
            Geriatric: {
                is_checked: false,
                value: "Geriatric",
                title: "سالمندان"
            },
            Gynecologic: {
                is_checked: false,
                value: "Gynecologic",
                title: "زنان و زایمان"
            },
            MedicalClinic: {
                is_checked: false,
                value: "MedicalClinic",
                title: "کلینیک پزشکی"
            },
            Midwifery: {
                is_checked: false,
                value: "Midwifery",
                title: "مامایی"
            },
            Nursing: {
                is_checked: false,
                value: "Nursing",
                title: "پرستاری"
            },
            Obstetric: {
                is_checked: false,
                value: "Obstetric",
                title: "زنان و زایمان"
            },
            Oncologic: {
                is_checked: false,
                value: "Oncologic",
                title: "انکولوژیک"
            },
            Optician: {
                is_checked: false,
                value: "Optician",
                title: "عینک فروشی"
            },
            Optometric: {
                is_checked: false,
                value: "Optometric",
                title: "بینایی سنجی"
            },
            Otolaryngologic: {
                is_checked: false,
                value: "Otolaryngologic",
                title: "گوش و حلق و بینی"
            },
            Pediatric: {
                is_checked: false,
                value: "Pediatric",
                title: "اطفال"
            },
            Pharmacy: {
                is_checked: false,
                value: "Pharmacy",
                title: "داروخانه"
            },
            Physician: {
                is_checked: false,
                value: "Physician",
                title: "پزشک"
            },
            Physiotherapy: {
                is_checked: false,
                value: "Physiotherapy",
                title: "فیزیوتراپی"
            },
            PlasticSurgery: {
                is_checked: false,
                value: "PlasticSurgery",
                title: "جراحی پلاستیک"
            },
            Podiatric: {
                is_checked: false,
                value: "Podiatric",
                title: "بیماری های پا"
            },
            PrimaryCare: {
                is_checked: false,
                value: "PrimaryCare",
                title: "مراقبت های اولیه"
            },
            Psychiatric: {
                is_checked: false,
                value: "Psychiatric",
                title: "روانپزشکی"
            },
            PublicHealth: {
                is_checked: false,
                value: "PublicHealth",
                title: "سلامت عمومی"
            },
            CommunityHealth: {
                is_checked: false,
                value: "CommunityHealth",
                title: "سلامت جامعه"
            },
        }
    },
    ProfessionalService: {
        is_checked: false,
        value: "ProfessionalService",
        title: "خدمات حرفه ای"
    },
    RadioStation: {
        is_checked: false,
        value: "RadioStation",
        title: "ایستگاه رادیویی"
    },
    RealEstateAgent: {
        is_checked: false,
        value: "RealEstateAgent",
        title: "نماینده املاک"
    },
    RecyclingCenter: {
        is_checked: false,
        value: "RecyclingCenter",
        title: "مرکز بازیافت"
    },
    SelfStorage: {
        is_checked: false,
        value: "SelfStorage",
        title: "خود ذخیره سازی"
    },
    ShoppingCenter: {
        is_checked: false,
        value: "ShoppingCenter",
        title: "مرکز خرید"
    },
    SportsActivityLocation: {
        is_checked: false,
        value: "SportsActivityLocation",
        title: "محل فعالیت ورزشی",
        specificTypes:
        {
            BowlingAlley: {
                is_checked: false,
                value: "BowlingAlley",
                title: "سالن بولینگ"
            },
            ExerciseGym: {
                is_checked: false,
                value: "ExerciseGym",
                title: "ورزشگاه"
            },
            GolfCourse: {
                is_checked: false,
                value: "GolfCourse",
                title: "زمین گلف"
            },
            HealthClub: {
                is_checked: false,
                value: "HealthClub",
                title: "باشگاه سلامت"
            },
            PublicSwimmingPool: {
                is_checked: false,
                value: "PublicSwimmingPool",
                title: "استخر شنا عمومی"
            },
            SkiResort: {
                is_checked: false,
                value: "SkiResort",
                title: "پیست اسکی"
            },
            SportsClub: {
                is_checked: false,
                value: "SportsClub",
                title: "باشگاه ورزشی"
            },
            StadiumOrArena: {
                is_checked: false,
                value: "StadiumOrArena",
                title: "استادیوم یا آرنا"
            },
            TennisComplex: {
                is_checked: false,
                value: "TennisComplex",
                title: "مجتمع تنیس"
            },
        }
    },
    Store: {
        is_checked: false,
        value: "Store",
        title: "فروشگاه",
        specificTypes:
        {
            AutoPartsStore: {
                is_checked: false,
                value: "AutoPartsStore",
                title: "فروشگاه قطعات خودرو"
            },
            BikeStore: {
                is_checked: false,
                value: "BikeStore",
                title: "فروشگاه دوچرخه"
            },
            BookStore: {
                is_checked: false,
                value: "BookStore",
                title: "کتابفروشی"
            },
            ClothingStore: {
                is_checked: false,
                value: "ClothingStore",
                title: "فروشگاه پوشاک"
            },
            ComputerStore: {
                is_checked: false,
                value: "ComputerStore",
                title: "فروشگاه رایانه"
            },
            ConvenienceStore: {
                is_checked: false,
                value: "ConvenienceStore",
                title: "خواروبارفروشی کوچک"
            },
            DepartmentStore: {
                is_checked: false,
                value: "DepartmentStore",
                title: "فروشگاه بزرگ"
            },
            ElectronicsStore: {
                is_checked: false,
                value: "ElectronicsStore",
                title: "فروشگاه لوازم الکترونیکی"
            },
            Florist: {
                is_checked: false,
                value: "Florist",
                title: "گل فروشی"
            },
            FurnitureStore: {
                is_checked: false,
                value: "FurnitureStore",
                title: "فروشگاه مبلمان"
            },
            GardenStore: {
                is_checked: false,
                value: "GardenStore",
                title: "باغ فروشگاه"
            },
            GroceryStore: {
                is_checked: false,
                value: "GroceryStore",
                title: "فروشگاه بقالی"
            },
            HardwareStore: {
                is_checked: false,
                value: "HardwareStore",
                title: "فروشگاه سخت افزار"
            },
            HobbyShop: {
                is_checked: false,
                value: "HobbyShop",
                title: "فروشگاه سرگرمی"
            },
            HomeGoodsStore: {
                is_checked: false,
                value: "HomeGoodsStore",
                title: "فروشگاه کالاهای خانگی"
            },
            JewelryStore: {
                is_checked: false,
                value: "JewelryStore",
                title: "جواهر فروشی"
            },
            LiquorStore: {
                is_checked: false,
                value: "LiquorStore",
                title: ""
            },
            MensClothingStore: {
                is_checked: false,
                value: "MensClothingStore",
                title: "فروشگاه پوشاک مردانه"
            },
            MobilePhoneStore: {
                is_checked: false,
                value: "MobilePhoneStore",
                title: "فروشگاه تلفن همراه"
            },
            MovieRentalStore: {
                is_checked: false,
                value: "MovieRentalStore",
                title: "فروشگاه اجاره فیلم"
            },
            MusicStore: {
                is_checked: false,
                value: "MusicStore",
                title: "فروشگاه موسیقی"
            },
            OfficeEquipmentStore: {
                is_checked: false,
                value: "OfficeEquipmentStore",
                title: "فروشگاه تجهیزات اداری"
            },            
            OutletStore: {
                is_checked: false,
                value: "OutletStore",
                title: "فروشگاه پریز"
            },
            PawnShop: {
                is_checked: false,
                value: "PawnShop",
                title: "فروشگاه رهنی"
            },
            PetStore: {
                is_checked: false,
                value: "PetStore",
                title: "فروشگاه حیوانات خانگی"
            },            
            ShoeStore: {
                is_checked: false,
                value: "ShoeStore",
                title: "کفش فروشی"
            },
            SportingGoodsStore: {
                is_checked: false,
                value: "SportingGoodsStore",
                title: "فروشگاه لوازم ورزشی"
            },
            TireShop: {
                is_checked: false,
                value: "TireShop",
                title: "فروشگاه لاستیک فروشی "
            },            
            ToyStore: {
                is_checked: false,
                value: "ToyStore",
                title: "فروشگاه اسباب بازی"
            },
            WholesaleStore: {
                is_checked: false,
                value: "WholesaleStore",
                title: "فروشگاه عمده فروشی"
            },
        }
    },
    TelevisionStation: {
        is_checked: false,
        value: "TelevisionStation",
        title: "ایستگاه تلویزیونی"
    },
    TouristInformationCenter: {
        is_checked: false,
        value: "TouristInformationCenter",
        title: "مرکز اطلاعات گردشگری"
    },
    TravelAgency: {
        is_checked: false,
        value: "TravelAgency",
        title: "آژانس مسافرتی"
    },
})
const valuesDepartment = ref([

]);
function addDepartment() {
    departmentNumber.value ++
    specificDepartmentJobsOk.value[departmentNumber.value-1] = false
    valuesDepartment.value[departmentNumber.value-1] =     
    {
        "@type": "",
        "name": "",
        "image": "",
        "telephone": "" 
    }
    if(!jsonData.value.department){
        let newJson = {}
        if(jsonData.value.sameAs){
            newJson = addElementToObject(jsonData.value, "department", "sameAs");
        }
        else if(jsonData.value.openingHoursSpecification){
            newJson = addElementToObject(jsonData.value, "department", "openingHoursSpecification");
        }else{
            newJson = addElementToObject(jsonData.value, "department", "address");
        }
        jsonData.value = newJson
        jsonData.value.department =[     
        {
            "@type": "",
            "name": "",
            "image": "",
            "telephone": "" 
        }
        ]
    }else{
        jsonData.value.department[departmentNumber.value-1] =         
        {
            "@type": "",
            "name": "",
            "image": "",
            "telephone": "" 
        }
    }
}
function changeDepartmentJobs(el , taskIndex) {
    jsonData.value.department[taskIndex]["@type"] = el
    for (let job in departmentJobs.value) {
        if(job == el){
            departmentJobs.value[job].is_checked = true
        }else{
            departmentJobs.value[job].is_checked = false
        }
    }
    
    specificDepartmentJobsOk.value[taskIndex] = false
    for (let specificDepartmentJob in specificDepartmentJobs){
        if(specificDepartmentJobs[specificDepartmentJob] == el){
            specificDepartmentJobsOk.value[taskIndex] = true
        }
    }
}
function changeDepartmentName(taskIndex) {
    jsonData.value.department[taskIndex].name = valuesDepartment.value[taskIndex].name
}
function changeDepartmentImage(taskIndex) {
    jsonData.value.department[taskIndex].image = valuesDepartment.value[taskIndex].image
}
function changeDepartmentTelephone(taskIndex) {
    jsonData.value.department[taskIndex].telephone = valuesDepartment.value[taskIndex].telephone
}
function deleteOneDepartment(taskIndex){
    if (departmentNumber.value > 1) {
        departmentNumber.value --
        valuesDepartment.value.splice(taskIndex, 1)
        jsonData.value.department.splice(taskIndex, 1)
    }else{
        departmentNumber.value --
        jsonData.value.department.splice(taskIndex, 1)
        delete jsonData.value.department
        valuesDepartment.value.splice(taskIndex, 1)
    }
}
</script>