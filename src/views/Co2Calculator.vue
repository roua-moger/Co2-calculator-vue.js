<template>
<div>
  <h4>Choice your Car type:</h4>
    <div class="calculator">
        <button @click="append('142')">small-diesel-car</button>
        <button @click="append('154')">small-petrol-car</button>
        <button @click="append('73')">small-plugin-hybrid-car</button>
        <button @click="append('50')">small-electric-car</button>
        <button @click="append('171')">medium-diesel-car</button>
        <button @click="append('192')">medium-diesel-car</button>
        <button @click="append('110')">medium-diesel-car</button>
        <button @click="append('58')">medium-diesel-car</button>
        <button @click="append('209')">large-diesel-car</button>
        <button @click="append('282')">large-diesel-car</button>
        <button @click="append('126')">large-diesel-car</button>
        <button @click="append('73')">large-diesel-car</button>
        <div></div>
        <button @click="append('27')">bus</button>
        <button @click="append('6')">train</button>
        <div></div>
        </div>
        <h4>Your Distance:</h4>
        <div>
    <b-form-input v-model="distance" placeholder="Enter your distance" class="input"></b-form-input>
    <button @click="toMeter">m</button> 
    <button @click="toKiloMeter">km</button>
    <div class="times">{{value || '0'}} g (CO2) *  {{ distance}} <span v-if="meter">m</span> (distance)</div>
    <h3 class="text-primary">Your trip caused "{{times}}"  of CO2-equivalent</h3>

  </div>
    </div>
</template>

<script>
export default {
     data() {
      return {
        distance: '',
        value: '',
        previous: null,
        operatorClicked: false,
        meter: false,
        
      }
  
    },
    computed:{
      times: function (){
          return this.value * this.distance
      },
    },
      methods: {
        append(number){
          if (this.operatorClicked) {
        this.value = '';
        this.operatorClicked = false;
      }
      this.value = `${this.value}${number}`;
      this.setPrevious();
        },
      setPrevious() {
      this.previous = this.value;
      this.operatorClicked = true;
        },
        toMeter(){
          this.distance = `${parseFloat(this.distance) * 1000}`;
         if (this.meter) {
           this.meter= false;
         }
        },
        toKiloMeter(){
          this.distance = `${parseFloat(this.distance) / 1000}`;
        }
      },
}
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  width: 800px;
  font-size: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(20px, auto);
}
button{
  margin:5px;
  background-color:lightseagreen;
  color:white;
  border:none;
}
.input{
  margin: 0 auto;
  width: 400px;
}
.times{
  margin: 20px;
}
.equal{
  color:indigo;
}
</style>

