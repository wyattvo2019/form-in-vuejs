<template>
  <Student1 :itemEdit="student" @save="clickAdd"/>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Phone</th>
        <th scope="col">Address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.address}}</td>
        <td>
          <button @click="deleteStudent(item)">Delete</button>
          <button @click="editStudent(item)">Edit</button>
          <!-- <button></button> -->
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Student1 from "../components/Student1.vue"

export default {
  name: 'App',
  components: {
    // HelloWorld
    Student1,
  },
  methods:{
    clickAdd(itemStudent){
      let index = this.list.findIndex((c)=> c.id === itemStudent.id);
      if(index>=0){
        this.list.splice(index,1,itemStudent);
      }else{
        let maxId = 0;
        for(let i=0; i<this.list.length;i++){
          if(this.list[i].id > maxId) maxId= this.list[i].id;
        }
        let newId = maxId + 1;
        itemStudent.id = newId;
        this.list.push(itemStudent);
      }
    },
    deleteStudent(itemDelete){
      for(let i=0; i< this.list.length; i++){
        if(itemDelete.id === this.list[i].id){
          this.list.splice(i,1);
        }
      }
    },
    editStudent(itemEdit){
      console.log(itemEdit);
      this.student = itemEdit;
    }
  },
  data(){
      return {
        student:{},
        list: [
          {
            id: 1,
            name: "Jonh",
            age: 20,
            phone: "0288239",
            address: "HN"
          },
          {
            id: 2,
            name: "Smioth",
            age: 21,
            phone: "0288239",
            address: "TB"
          },
          {
            id: 3,
            name: "Bin",
            age: 19,
            phone: "0288239",
            address: "ND"
          }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
