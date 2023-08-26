interface clickableElement extends HTMLElement {
    __clickOutsideHandler__: (e: Event) => void;
  }
  
export default defineNuxtPlugin(({ vueApp }) => {
  const clickOutsideDirective = {
    created(el: any, binding) {
      (el as clickableElement).__clickOutsideHandler__ = (event: Event) => {
        if (!(el == event.target || el.contains(event.target as Node | null))) {
          binding.value(event);
        }
      };
      document.body.addEventListener(
        "click",
        (el as clickableElement).__clickOutsideHandler__
      )
    },
    unmounted(el: HTMLElement) {
      document.body.removeEventListener(
        "click",
        (el as clickableElement).__clickOutsideHandler__
      );
    }
  }


  vueApp.directive("click-outside", clickOutsideDirective)
})
