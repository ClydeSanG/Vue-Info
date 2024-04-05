<template>
    <div>
        <p>Updates once the text lenght is more than 10</p>
        <br>
        <input type="text" @input="setName($event)" /> 
        <!-- $event passes the event that being triggered -->
        <h5>Typed Value:</h5> {{ nameValue }}
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

let nameValue = ref('');

watch(nameValue, (newValue) =>
    {
        if(newValue.length <= 10){
            nameValue.value = ''
        }
    }
);

function setName(event) {
    nameValue.value = event.target.value;
}
</script>
