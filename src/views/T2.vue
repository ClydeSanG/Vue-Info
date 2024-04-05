<template>
    <div>
        <h3>Displaying Stored Array</h3>
        <div v-for="test2 in test">
            Name:{{ test2.name }} <br> RollNo: {{ test2.rollNo }} <br> Class: {{ test2.class }}
            <hr>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const test = ([
        {
            name: 'test1',
            rollNo: '10',
            class: '1',
        },
        {
            name: 'test2',
            rollNo: '11',
            class: '12',
        },
    ])
</script>