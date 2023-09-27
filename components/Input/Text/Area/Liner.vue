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
                v-model='textValue'
                @update="$emit('update' , textValue)"
                @input="line_counter($event)"
                >
                </textarea>
            </div>
    </div>
</template>

<script setup>

import { ref } from "vue";
import { defineEmits } from "vue";

const textValue = ref("");
const lines = ref("");

function line_counter(event) {
    lines.value = event.target.value.split("\n").length;
};
</script>
    
<style lang="scss" scoped>
.container{
    padding: 30px;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    align-items: center;
    overflow: auto;

    &__box{
        display: inline-flex;
        gap: 10px;
        line-height: 21px;
        background: white;
        border-radius: 2px;
        padding: 20px 10px;
        height: 100px;
        overflow-y: auto;
        border-radius: 5px;
        
        div{
            width: 20px;
            text-align: right;
            height: 9999px;
            span{
                counter-increment: linenumber;
                :before{
                    content: counter(linenumber);
                    display: block;
                }
            }
        }
        textarea{
            height: 9999px;
            line-height: 21px;
            overflow-y: hidden;
            padding: 0;
            border: 0;
            min-width: 500px;
            outline: none;
            resize: none;
        }
    }
}
</style>
