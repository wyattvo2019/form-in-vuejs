<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div>
      <label for="">Name:</label>
      <input v-model="student.name"/>
    </div>
    <div>
      <label for="">Age:</label>
      <input v-model="student.age"/>
    </div>
    <div>
      <label for="">Phone:</label>
      <input v-model="student.phone"/>
    </div>
    <div>
      <label for="">Address:</label>
      <input v-model="student.address"/>
    </div>
    <button 
      type="button" 
      class="btn btn-primary"
      @click="clickSave()"
    >Save</button>
  </div>
</template>
<script>
export default {
  // component: {
  //   Student,
  // },
  props:{
    itemEdit:{
      type: Object,
      default: null,
    }
  },
  watch:{
    itemEdit(){
      if(this.itemEdit){
        this.student=Object.assign({}, this.itemEdit);
      }else{
        this.student={};
      }
    }
  },
  methods: {
    clickSave(){
      this.$emit("save", this.student);
      console.log(this.student);
      this.student = {};
    }
  },
  data(){
    return {
      student: {
        id: Math.floor(Math.random()*100),
        name: "",
        age: "",
        phone: "",
        address:"",
      }
    }
  }
}
</script>