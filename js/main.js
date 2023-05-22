const {createApp} = Vue;

createApp({
    data(){
        return {
            testo:'',
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
            const newTask = {
                text: this.testo,
                done: false
            }
            if(newTask.text !== ''){
                this.items.unshift(newTask);
            }

            this.testo = ''
        },
        // MILESTONE 2
        deleteTask(indice){
            console.log(indice);
            this.items.splice(indice, 1)
        },

        // BONUS 2
        toggleDone(indice){
            if(this.items[indice].done === true){
                this.items[indice].done = false 
            } else {
                this.items[indice].done = true
            }
        }
    }
}).mount('#app');