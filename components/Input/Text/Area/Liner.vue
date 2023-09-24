<template>
    <div class="container">
      <label for="textarea">enter your suggestion:</label>
      <div class="container__box">
          <div>
              <span v-for="line in lines" :key="line">
                  {{ line }}.
              </span>
          </div>
          <textarea id="textarea" name="textarea" cols="20" rows="4"
          @keyup="line_counter($event)">
          </textarea>
      </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name : "liner" ,
    setup(){
      const lines = ref("");
      function line_counter(event) {
          lines.value = event.target.value.split("\n").length;
          console.log(event.target.value);
      }
      return{ lines , line_counter }
    }
}
</script>
    
<style lang="scss" scoped>
.container{
    padding: 30px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;

    &__box{
        padding: 5px 10px;
        display: flex;
        background-color: white;
        border-radius: 5px;
        
        div{
            display: flex;
            flex-direction: column;
            margin-top: 2px;
            padding-top: 5px; 
            span{
                counter-increment: linenumber;
                :before{
                    content: counter(linenumber);
                }
            }
        }
        textarea{
            margin-top: 2px;
            padding: 5px;
            min-width: 200px;
            overflow: hidden;
            outline: none;
            resize: none;
        }
    }
}
</style>