new Vue({

    el:"#app",
    data:{
        wordInput: "",
        show:"",
        ChangeText:"Uppercase"  
    },

    methods: {

        DoIt(){
            console.log("Changeing to another case" )
         
               if(this.ChangeText =="UpperCase")
                {
                    this.show = this.wordInput.toUpperCase();

                }else if(this.ChangeText == "LowerCase")
                {
                    this.show = this.wordInput.toLowerCase();
                }                
        }

    }

})