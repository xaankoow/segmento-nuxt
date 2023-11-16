<template>

  <!-- <div class="w-full text-center">
    <Tooltip side="left" bgColor="green" borderColor="gray" borderWidth="2px" class="h-fit w-fit">
      <span>top titlewdafsdfsdf</span>
      <template v-slot:tooltip > <p>top toolip contenttop toolip contenttop toolip contenttop toolip content</p> </template>
    </Tooltip>
  </div> -->
  
    <div class="tooltip relative inline-block items-center w-max h-max" >
        <slot></slot>

        <span id="titleValue" class="tooltiptext invisible w-max text-white text-center border-[1px] rounded-sm p-0.5 absolute z-10
        after:content-[''] after:absolute after:border-[5px] after:border-solid"
        :class="
          side == 'top' ? `bottom-[150%] left-[50%]  after:top-[100%] after:left-[50%]`
        : side == 'bottom' ? `top-[150%] left-[50%]  after:bottom-[100%] after:left-[50%]` 
        : side == 'left' ? `top-[-5px] right-[120%]  after:top-[50%] after:left-[100%]` 
        : side == 'right' ? `top-[-5px] left-[120%]  after:top-[50%] after:right-[100%]`
        :'w-fit' "
        :style="{backgroundColor:bgColor , borderWidth:borderWidth , borderColor:borderColor}"
        ><slot name="tooltip">  </slot></span>
    </div>
</template>

<script setup> 
import { ref , onMounted , onUpdated } from "vue"
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
  let titleValue = document.getElementById("titleValue")
  widthValue.value = (-20-(document.getElementById("titleValue").offsetWidth/2)+'px') ;
  heightValue.value = (-(document.getElementById("titleValue").offsetHeight)+'px');
  if (props.side == "top" || props.side == "bottom") {
    document.getElementById("titleValue").style.marginLeft = widthValue.value;
  }else{
    document.getElementById("titleValue").style.marginLeft = "0px";
  }

  if (props.side == "top") {
    titleValue.style.setProperty('--BorderTopColor',props.borderColor)
    titleValue.style.setProperty('--topMargin',props.borderWidth)
    titleValue.style.setProperty('--leftMargin',"-5px")
  }else if(props.side == "bottom"){
    titleValue.style.setProperty('--BorderBottomColor',props.borderColor)
    titleValue.style.setProperty('--bottomMargin',props.borderWidth)
    titleValue.style.setProperty('--leftMargin',"-5px")
  }else if (props.side == "left") {
    titleValue.style.setProperty('--BorderLeftColor',props.borderColor)
    titleValue.style.setProperty('--leftMargin',props.borderWidth)
    titleValue.style.setProperty('--topMargin',"-5px")
  }else{
    titleValue.style.setProperty('--BorderRightColor',props.borderColor)
    titleValue.style.setProperty('--rightMargin',props.borderWidth)
    titleValue.style.setProperty('--topMargin',"-5px")
  } 
})
onUpdated(() => {
  widthValue.value = (-(document.getElementById("titleValue").offsetWidth/2)+'px') ;
  heightValue.value = document.getElementById("titleValue").offsetHeight;
  if (props.side == "top" || props.side == "bottom") {
    document.getElementById("titleValue").style.marginLeft = widthValue.value;
  }else{
    document.getElementById("titleValue").style.marginLeft = "0px";
  }
  if (props.side == "top") {
    titleValue.style.setProperty('--BorderTopColor',props.borderColor)
    titleValue.style.setProperty('--BorderBottomColor',"transparent")
    titleValue.style.setProperty('--BorderLeftColor',"transparent")
    titleValue.style.setProperty('--BorderRightColor',"transparent")
    titleValue.style.setProperty('--topMargin',props.borderWidth)
    titleValue.style.setProperty('--leftMargin',"-5px")
    titleValue.style.setProperty('--rightMargin',"0px")
    titleValue.style.setProperty('--bottomMargin',"0px")

  }else if(props.side == "bottom"){
    titleValue.style.setProperty('--BorderBottomColor',props.borderColor)
    titleValue.style.setProperty('--BorderTopColor',"transparent")
    titleValue.style.setProperty('--BorderLeftColor',"transparent")
    titleValue.style.setProperty('--BorderRightColor',"transparent")
    titleValue.style.setProperty('--bottomMargin',props.borderWidth)
    titleValue.style.setProperty('--leftMargin',"-5px")
    titleValue.style.setProperty('--rightMargin',"0px")
    titleValue.style.setProperty('--topMargin',"0px")
    
  }else if (props.side == "left") {
    titleValue.style.setProperty('--BorderLeftColor',props.borderColor)
    titleValue.style.setProperty('--BorderTopColor',"transparent")
    titleValue.style.setProperty('--BorderBottomColor',"transparent")
    titleValue.style.setProperty('--BorderRightColor',"transparent")
    titleValue.style.setProperty('--leftMargin',props.borderWidth)
    titleValue.style.setProperty('--topMargin',"-5px")
    titleValue.style.setProperty('--rightMargin',"0px")
    titleValue.style.setProperty('--bottomMargin',"0px")

  }else{
    titleValue.style.setProperty('--BorderRightColor',props.borderColor)
    titleValue.style.setProperty('--BorderTopColor',"transparent")
    titleValue.style.setProperty('--BorderBottomColor',"transparent")
    titleValue.style.setProperty('--BorderLeftColor',"transparent")
    titleValue.style.setProperty('--rightMargin',props.borderWidth)
    titleValue.style.setProperty('--topMargin',"-5px")
    titleValue.style.setProperty('--leftMargin',"0px")
    titleValue.style.setProperty('--bottomMargin',"0px")
  }
})
</script>

<style>
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltiptext::after{
  border-top-color: var(--BorderTopColor,transparent);
  border-bottom-color: var(--BorderBottomColor,transparent);
  border-left-color: var(--BorderLeftColor,transparent);
  border-right-color: var(--BorderRightColor,transparent);
  margin-top: var(--topMargin,0px);
  margin-bottom: var(--bottomMargin,0px);
  margin-left: var(--leftMargin,0px);
  margin-right: var(--rightMargin,0px);
}
</style>