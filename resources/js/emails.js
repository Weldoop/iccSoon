import axios from 'axios';
import { ref } from 'vue';

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';

export default function useEmails() {
    
    const emails = ref([]);
   
    
    const error = ref(null);
    const loading = ref(false);
    
    const createUser = async (data) => {
        loading.value = true;
        
        try {
            const res = await axios.post('emails', data);
            
        } catch (err) {
            if(err.response.status === 422){
                error.value = err.response.data.errors;
            }
            
        }
        loading.value = false;
    }

   

    

    return { emails, error, loading, createUser,  }

}
