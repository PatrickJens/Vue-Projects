const app = Vue.createApp({
  data(){                         //data stored in this function is an object
    return{                       //always returns objects
        courseGoalA:    'Finish the course and learn Vue!',
        courseGoalB:    'Master vue and build awesome app',
        vueLink:        'https://vue.js.org/'
    };
  },
  methods:{
    outputGoal(){
      const randomNumber = Math.random();
      if( randomNumber < 0.5){
        return this.courseGoalA
      } else{
        return this.courseGoalB
      }
    }

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

 */
