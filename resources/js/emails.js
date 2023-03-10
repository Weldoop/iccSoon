import axios from 'axios';
import { ref } from 'vue';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/';
axios.defaults.baseURL = 'https://icecreamcrypto.com/api/v1/';

export default function useEmails() {

    const emails = ref([]);
    const posted = ref(false);


    const error = ref(null);
    const loading = ref(false);

    const createUser = async (data) => {
        loading.value = true;

        try {
            const res = await axios.post('emails', data);
            console.log(posted.value);
            posted.value = true;
            console.log(posted.value);

        } catch (err) {
            if(err.response.status === 422){
                error.value = err.response.data.errors;
            }

        }


    }





    return { emails, error, loading, createUser,posted  }

}
