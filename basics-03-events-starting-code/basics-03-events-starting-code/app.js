const app = Vue.createApp({
  data(){                         //data stored in this function is an object
    return{                       //always returns objects
        counter: 0
    };
  },
  methods:{

  }
}) ;

app.mount('#events');

/*
data stored in this function is an object
return always returns objects
Anything used in the return object in data can now be used in your Vue controlled HTML part
Data is a data object. Can return objects inside the data object

Methods define functions. Methods is just an object

Data itself a function that returns an object

You can interpolate data and methods

Vue app object is a global Vue object. 

v-bind:href="vueJSDate"

 */
