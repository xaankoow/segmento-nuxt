<template>
  <div
    class="flex flex-col justify-between items-center border-2 border-gray-200 rounded-md"
  >
    <!-- plan content -->
    <div class="flex flex-col items-center w-full pb-2 gap-4">
      <!-- header and title -->
      <div class="flex flex-col gap-2 items-center justify-center w-full">
        <div
          class="w-11/12 flex flex-row items-center justify-center text-xl h-16 text-base-content font-bold"
        >
          {{ config.by_route(`constants/packages/${content.name}`) }}
        </div>
        <hr class="w-11/12 mx-auto border-base-content" />
      </div>

      <!-- plans list -->
      <div class="flex flex-col w-11/12 mx-auto gap-3">
        <!-- plan item -->
        <label
          :for="plan.uuid"
          class="bg-base-200 border-base-200 flex flex-row items-center justify-between w-full p-2 rounded-sm cursor-pointer text-base-content"
          v-for="plan in content.plans"
          :key="plan.uuid"
        >
          <!-- id and name -->
          <div class="flex flex-row items-center gap-2 text-sm">
            <input
              :id="plan.uuid"
              type="radio"
              class="w-5 h-5"
              :value="plan.uuid"
              name="plan"
              @change="plan_changed(plan.uuid)"
            />
            <span>{{ config.by_route(`constants/plans/${plan.name}`) }}</span>
          </div>
          <!-- discount -->
          <div class="text-xs" style="font-size: 0.67rem">
            {{ ExtensionTools.formatPrice(plan.price.final) }}
          </div>
        </label>
      </div>

      <!-- pricing -->
      <div class="flex flex-col w-full items-center gap-6">
        <!-- price -->
        <div class="flex flex-col items-center gap-3 w-11/12">
          <!-- full price -->
          <del
            :class="
              (form.plan.price?.value ?? content.plans[0].price.final) !==
              form.discount_pricing.final
                ? 'block'
                : 'hidden'
            "
          >
            <div class="flex flex-row gap-1 items-center justify-center text-xs">
              <span>
                {{ ExtensionTools.formatPrice((form.plan.price?.value ?? content.plans[0].price.final)) }}
                
              </span>
            </div>
          </del>

          <!-- price after discount -->
          <div
            class="flex flex-row gap-1 items-center w-full py-2 justify-center text-sm bg-base-300/40 rounded-md"
            :class="discount_error.ok ? 'text-primary' : ''"
          >
            <span v-if="form.discount_pricing.final === 0">
              رایگان شد!
            </span>
            <span v-else>
              {{ ExtensionTools.formatPrice(form.discount_pricing.final) }}
            </span>
          </div>
        </div>

        <!-- discount -->
        <form
          @submit.prevent="check_discount()"
          class="relative flex flex-row items-center w-11/12 mx-auto"
        >
          <input
            type="text"
            class="w-full rounded-[3px] border-[1.5px] text-xs"
            @focus="text_box_focus(true)"
            @blur="text_box_focus(false)"
            :class="discount_error.ok ? 'border-b-primary-hover' : ''"
            v-model="form.discount"
          />
          <span
            class="absolute text-xs pointer-events-none px-2 font-semibold transition-all duration-300"
            :class="text_box_focus() ? '-top-5' : 'top-2'"
            >کد تخفیف</span
          >
          <span
            class="absolute text-xs -top-5 left-0 text-error"
            :class="!discount_error.ok ? 'flex' : 'hidden'"
          >
            {{ discount_error.message }}
          </span>
          <button
            type="submit"
            class="absolute text-lg text-primary font-semibold left-4 h-fit w-fit rotate-180 font-mono"
            :class="text_box_focus() ? 'flex' : 'hidden'"
          >
            &#x279C;
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Config from "~~/composables/Config";
import Request from "~~/Api/Request";
import ExtensionTools from "@/composables/ExtensionTools";

const props = defineProps({
  content: {
    required: true,
    type: Object,
  },
});

const emit = defineEmits(["plan_updated"]);

const request = new Request("v1");
const discount_box_focus = ref(false);
const text_box_focus = (at_focus = null) => {
  if (at_focus !== null) {
    discount_box_focus.value = at_focus;
  }
  return discount_box_focus.value || form.value.discount.length > 0;
};
const form = ref({
  discount: "",
  plan: props.content.plans[0],
  discount_pricing: props.content.plans[0].price,
});
const config = new Config();
const discount_error = ref({
  message: "",
  ok: null,
});

function plan_changed(uuid) {
  form.value.plan = props.content.plans.find((item) => item.uuid === uuid);
  form.value.discount_pricing = form.value.plan.price;
  emit("plan_updated", props.content, form.value.plan);
}

async function check_discount() {
  let response = await request.post("packages/check-discount", {
    code: form.value.discount,
    plan: form.value.plan.uuid,
  });

  if (response.ok) {
    form.value.discount_pricing = {
      price: response.data.price,
      final: response.data.final_price,
      discount: response.data.discount,
      ok: response.ok,
    };

    emit(
      "plan_updated",
      props.content,
      form.value.plan,
      form.value.discount_pricing,
      form.value.discount
    );
  }

  discount_error.value.message = response.message;
  discount_error.value.ok = response.ok;
}
</script>
