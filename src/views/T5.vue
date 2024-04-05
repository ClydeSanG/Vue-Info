<template>
    <div>
        <input type="number" @keyup.enter="saveNum" v-model="enteredN" /> Calculated value: {{ calculatedNum }}
        <h5>Entered Numbers <button @click="resetV">Reset</button> </h5>

        
        <div v-for="(number, index) in enteredV" :key="index">
            {{ number.num }}
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const enteredV = ref([]);
const enteredN = ref('');
const calculatedNum = ref(0);

function saveNum() {
    let strEnteredN = enteredN.value.toString();

    if (strEnteredN.length > 3) {
        console.log("The Value is greater than 3!");
        console.error("Abort!");
        enteredN.value = '';
        return;
    }
    if (strEnteredN.length <= 0) {
        console.log("No Number Provided!");
        console.error("Abort!");
        enteredN.value = '';
        return;
    }

    enteredV.value.push({ num: parseInt(enteredN.value) });
    enteredN.value = '';

    // console.log(enteredV.value);
}


//This will Execute Every Reload or other function being called
// const sumV = computed(() => {
//     let sumValue = 0;

//     enteredV.value.forEach(element => {
//         sumValue += element.num;
//     });

//     return sumValue;
// });

watch(enteredV, (newValue) => {
    let sumValue = 0;

    newValue.forEach(element => {
        sumValue += element.num;
    });

    calculatedNum.value = sumValue;
}, { deep: true });

function resetV() {
    enteredV.value = [];
    calculatedNum.value = 0;
}
</script>
