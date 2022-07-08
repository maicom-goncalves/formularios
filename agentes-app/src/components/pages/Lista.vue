<template>
    <div>
        <ul class="list-group">
          <li class="list-group-item" v-show="date"><strong>Data:</strong> {{ date }}</li>
          <li class="list-group-item" v-show="time"><strong>hora:</strong> {{ time }}</li>
          <li class="list-group-item" v-show="year"><strong>ano:</strong> {{ year }}</li>
        </ul>
    </div>  
</template>

<script>
    export default {
        name: "DateComponent",
        data: () => ({
          date: '',
          time: '',
          year: ''
        }),
        methods: {
          printDate: function () {
            return new Date().toLocaleDateString();
          },
          printTime: function () {
            return new Date().toLocaleTimeString();
          },
          printYear: function () {
            return new Date().getFullYear();
          }
        },
        mounted: function () {
          this.date = this.printDate();
          this.time = this.printTime();
          this.year = this.printYear();
        },
    };
</script>