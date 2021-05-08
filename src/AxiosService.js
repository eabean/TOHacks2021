import axios from 'axios';

const url ='https://api.travelperk.com/travelsafe/restrictions';

class AxiosService {

    // get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {

            try {
                axios.get(url).then((res) => {
                    const data = res.data;
                    resolve(data);
                });

            } catch (e) {
                reject(e);
            }   
        });
    }    

}

export default AxiosService;