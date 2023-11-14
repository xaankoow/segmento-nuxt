<template>
    <!-- <div class="w-full text-center">
      <Toolip side="left" class="h-fit w-fit">
        <span>top titlewdafsdfsdf</span>
        <template v-slot:tooltip > <span>top toolip contenttop toolip contenttop toolip contenttop toolip content</span> </template>
      </Toolip>
    </div> -->
    <div class="tooltip relative inline-block items-center w-max h-max" >
        <slot></slot>

        <span id="titleValue" class="tooltiptext invisible w-max text-white text-center border-[1px] rounded-sm p-0.5 absolute z-10
        after:content-[''] after:absolute after:border-[5px] after:border-solid after:border-[#30363d]"
        :class="
          side == 'top' ? `bottom-[150%] left-[50%]     after:top-[100%] after:left-[50%] after:ml-[-5px]     after:border-x-[transparent] after:border-t-[${borderColor}] after:border-b-[transparent]`
        : side == 'bottom' ? `top-[150%] left-[50%]     after:bottom-[100%] after:left-[50%] after:ml-[-5px]  after:border-[${borderColor}] after:border-x-[transparent] after:border-t-[transparent] after:border-b-[${borderColor}]` 
        : side == 'left' ? `top-[-5px] right-[120%]  after:top-[50%] after:left-[100%] after:mt-[-5px]    after:border-[${borderColor}] after:border-y-[transparent] after:border-r-[transparent] after:border-l-[${borderColor}]` 
        : side == 'right' ? `top-[-5px] left-[120%]  after:top-[50%] after:right-[100%] after:mt-[-5px]   after:border-[${borderColor}] after:border-y-[transparent] after:border-r-[${borderColor}] after:border-l-[transparent]`
        :'w-fit' "
        :style="{backgroundColor:bgColor , borderWidth:borderWidth , borderColor:borderColor}"
        ><slot name="tooltip">  </slot></span>
    </div>
</template>

<script setup> 
import { ref , onMounted } from "vue"
const props = defineProps({
    side: {
      type: String,
      required: true,
    },
    bgColor: {
        type : String,
        default : "#0d1117",
    },
    borderWidth:{
        type : String,
        default : "1px",
    },
    borderColor:{
        type : String,
        default : "#30363d",
    }
});
const widthValue = ref("")
const heightValue = ref("")
onMounted(() => {
  widthValue.value = (-(document.getElementById("titleValue").offsetWidth/2)+'px') ;
  heightValue.value = document.getElementById("titleValue").offsetHeight;
  if (props.side == "top" || props.side == "bottom") {
    document.getElementById("titleValue").style.marginLeft = widthValue.value;
  }
})
</script>

<style>
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>