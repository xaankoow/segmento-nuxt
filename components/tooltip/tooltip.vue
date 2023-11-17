<template>

<!-- <div class="w-full text-center flex items-center justify-center gap-2 flex-col">
  <Tooltip id="firstTop" side="top" borderColor="darkred" bgColor="red" class="h-fit w-fit bg-[red]">
    <span class="">wwwwww i wwwwww</span>
    <template v-slot:tooltip> <span>top t contenttop toolip contenttop toolip contenttop toolip content</span>
    </template>
  </Tooltip>

  <Tooltip id="firstBottom"  side="bottom" borderColor="blue" bgColor="lightblue" class="h-fit w-fit bg-[blue]">
    <span class="">wwwwww i wwwwww</span>
    <template v-slot:tooltip> <span>top t contenttop toolip contenttop toolip contenttop toolip content</span>
    </template>
  </Tooltip>

  <Tooltip id="firstLeft" side="left" borderColor="yellow" bgColor="orange" class="h-fit w-fit bg-[orange]">
    <span class="">wwwwww i wwwwww</span>
    <template v-slot:tooltip> <span>top t contenttop toolip contenttop toolip contenttop toolip content</span>
    </template>
  </Tooltip>

  <Tooltip id="firstRight" side="right" borderColor="green" bgColor="green" class="h-fit w-fit bg-[green]">
    <span class="">wwwwww i wwwwww</span>
    <template v-slot:tooltip> <span>top t contenttop toolip contenttop toolip contenttop toolip content</span>
    </template>
  </Tooltip>
</div> -->
  
    <div class="tooltip relative inline-block w-max h-max flex items-center justify-center" >
        <slot></slot>

        <span :id="id" class="tooltiptext invisible w-max text-white text-center border-[1px] rounded-sm p-0.5 absolute z-10
        after:content-[''] after:absolute after:border-[5px] after:border-solid "
        :class="
          side == 'top' ? `bottom-[150%]    after:left-[50%] after:top-[100%]`
        : side == 'bottom' ? `top-[150%]    after:left-[50%] after:bottom-[100%]`
        : side == 'left' ? `right-[110%]    after:top-[50%]  after:left-[100%]` 
        : side == 'right' ? `left-[110%]    after:top-[50%]  after:right-[100%]`
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
    },
    id: {
      type : String,
      required: true,
    }
});

const titleValue = ref("")


onMounted(() => {
  titleValue.value = document.getElementById(props.id)

  if (props.side == "top") {
    titleValue.value.style.setProperty('--BorderTopColor',props.borderColor)
    titleValue.value.style.setProperty('--topMargin',props.borderWidth-1)
    titleValue.value.style.setProperty('--leftMargin',"-5px")
  }else if(props.side == "bottom"){
    titleValue.value.style.setProperty('--BorderBottomColor',props.borderColor)
    titleValue.value.style.setProperty('--bottomMargin',props.borderWidth-1)
    titleValue.value.style.setProperty('--leftMargin',"-5px")
  }else if (props.side == "left") {
    titleValue.value.style.setProperty('--BorderLeftColor',props.borderColor)
    titleValue.value.style.setProperty('--leftMargin',props.borderWidth)
    titleValue.value.style.setProperty('--topMargin',"-5px")
  }else{
    titleValue.value.style.setProperty('--BorderRightColor',props.borderColor)
    titleValue.value.style.setProperty('--rightMargin',props.borderWidth)
    titleValue.value.style.setProperty('--topMargin',"-5px")
  } 
})
onUpdated(() => {
  titleValue.value = document.getElementById(props.id)

  if (props.side == "top") {
    titleValue.value.style.setProperty('--BorderTopColor',props.borderColor)
    titleValue.value.style.setProperty('--topMargin',props.borderWidth-1)
    titleValue.value.style.setProperty('--leftMargin',"-5px")
  }else if(props.side == "bottom"){
    titleValue.value.style.setProperty('--BorderBottomColor',props.borderColor)
    titleValue.value.style.setProperty('--bottomMargin',props.borderWidth-1)
    titleValue.value.style.setProperty('--leftMargin',"-5px")
  }else if (props.side == "left") {
    titleValue.value.style.setProperty('--BorderLeftColor',props.borderColor)
    titleValue.value.style.setProperty('--leftMargin',props.borderWidth)
    titleValue.value.style.setProperty('--topMargin',"-5px")
  }else{
    titleValue.value.style.setProperty('--BorderRightColor',props.borderColor)
    titleValue.value.style.setProperty('--rightMargin',props.borderWidth)
    titleValue.value.style.setProperty('--topMargin',"-5px")
  } 
})
</script>

<style scoped>
.tooltip:hover .tooltiptext {
  visibility: visible;
}
.tooltiptext::after{
  /* border */
  border-top-color: var(--BorderTopColor,transparent);
  border-bottom-color: var(--BorderBottomColor,transparent);
  border-left-color: var(--BorderLeftColor,transparent);
  border-right-color: var(--BorderRightColor,transparent);
  /* margin left */
  margin-top: var(--topMargin,0px);
  margin-bottom: var(--bottomMargin,0px);
  margin-left: var(--leftMargin,0px);
  margin-right: var(--rightMargin,0px);
}
</style>