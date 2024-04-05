<template>
    <div>
        <h3>Storing Inputted Values</h3>
        <lable>Name:</lable>
        <input type="text" v-model="enteredName" style="margin: 5px;" />
        <br>
        <lable>Class:</lable>
        <input type="text" v-model="enteredClass" style="margin: 5px;" />
        <br>
        <lable>RollNo:</lable>
        <input type="text" v-model="enteredRollNo" style="margin: 5px;" />
        <br>
        <lable>Profile Link:</lable>
        <input type="text" v-model="enteredPLink" style="margin: 5px;" />
        <br>
        <button @click="addData()">Click to add</button>

        <h3>Lists</h3>
        <!-- <ul>
            <li v-for="list in lists">
                {{ list }}
            </li>
        </ul> -->
        <hr>
        <div v-for="list, index in lists">
            {{ index+1 }} 
            <br> Name: {{ list.name }} <br> RollNo: {{ list.roll_no }} <br> Class: {{ list.class }} <br>
            <a :href="list.link">Click to open Student Profile</a>
            <hr>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const enteredName= ref(''), enteredClass = ref(), enteredRollNo = ref(''), enteredPLink = ref('');
const lists = ref([]);

function addData() {
    if(this.enteredName=='' || this.enteredClass=='' || this.enteredRollNo==''){
        console.log("Value empty");
    }else{
        this.lists.push({name: this.enteredName, class: this.enteredClass, roll_no: this.enteredRollNo, link: this.enteredPLink});
        this.enteredName = '';
        this.enteredClass = '';
        this.enteredRollNo = '';
        this.enteredPLink = '';
    }
}

</script>