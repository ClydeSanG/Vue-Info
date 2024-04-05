<template>
    <div>
        <input type="text" @input="setName($event)" /> 
        <!-- $event passes the event that being triggered -->
        Typed Value: {{ nameValue }}
    </div>
</template>

<script setup>
import { ref } from 'vue'

let nameValue = ref('');

function setName(event) {
    nameValue.value = event.target.value;
}
</script>
