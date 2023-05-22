const {createApp} = Vue;

createApp({
    data(){
        return {
            newItem:{
                text:'',
                done: false
            },
            items: [
                {
                    text: 'Fare i compiti',
                    done: true
                },
                {
                    text: 'Andare in palestra',
                    done: true
                }  
            ]
        }
    },
    methods: {
        addTask(){
            if(this.newItem.text !== ''){
                this.items.push(this.newItem);
            }
            this.newItem.text = '';
        }
    }
}).mount('#app');