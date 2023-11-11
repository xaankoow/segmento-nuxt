<template>
  <span class="cursor-pointer" @click="copy(content)">
    <slot>
      <svg
        :width="width"
        :height="height"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_3536_9117"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_3536_9117)">
          <path
            d="M9.27812 17.8008C8.76146 17.8008 8.32812 17.6258 7.97812 17.2758C7.62812 16.9258 7.45312 16.5008 7.45312 16.0008V4.62578C7.45312 4.10911 7.62812 3.67578 7.97812 3.32578C8.32812 2.97578 8.76146 2.80078 9.27812 2.80078H17.6281C18.1281 2.80078 18.5575 2.97978 18.9161 3.33778C19.2741 3.69645 19.4531 4.12578 19.4531 4.62578V16.0008C19.4531 16.5008 19.2741 16.9258 18.9161 17.2758C18.5575 17.6258 18.1281 17.8008 17.6281 17.8008H9.27812ZM9.27812 16.3008H17.6281C17.7281 16.3008 17.8075 16.2714 17.8661 16.2128C17.9241 16.1548 17.9531 16.0841 17.9531 16.0008V4.62578C17.9531 4.52578 17.9241 4.44645 17.8661 4.38778C17.8075 4.32978 17.7281 4.30078 17.6281 4.30078H9.27812C9.17812 4.30078 9.09913 4.32978 9.04113 4.38778C8.98246 4.44645 8.95312 4.52578 8.95312 4.62578V16.0008C8.95312 16.0841 8.98246 16.1548 9.04113 16.2128C9.09913 16.2714 9.17812 16.3008 9.27812 16.3008ZM5.75312 21.3008C5.25312 21.3008 4.82812 21.1258 4.47812 20.7758C4.12812 20.4258 3.95312 20.0008 3.95312 19.5008V7.55078C3.95312 7.35078 4.02379 7.17578 4.16513 7.02578C4.30713 6.87578 4.48646 6.80078 4.70312 6.80078C4.90312 6.80078 5.07812 6.87578 5.22812 7.02578C5.37812 7.17578 5.45312 7.35078 5.45312 7.55078V19.5008C5.45312 19.5841 5.48213 19.6548 5.54013 19.7128C5.59879 19.7714 5.66979 19.8008 5.75312 19.8008H14.7031C14.9031 19.8008 15.0781 19.8758 15.2281 20.0258C15.3781 20.1758 15.4531 20.3508 15.4531 20.5508C15.4531 20.7674 15.3781 20.9464 15.2281 21.0878C15.0781 21.2298 14.9031 21.3008 14.7031 21.3008H5.75312Z"
            fill="#0A65CD"
          />
        </g>
      </svg>
    </slot>
  </span>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
});

function copy(content) {
  // Get the text content to copy
  const textToCopy = content;

  // Create a temporary textarea element
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  // Select the text in the textarea
  tempTextArea.select();

  try {
    // Copy the selected text to the clipboard
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy text:", err);
  }

  // Remove the temporary textarea
  document.body.removeChild(tempTextArea);
}
</script>