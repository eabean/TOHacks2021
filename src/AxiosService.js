import axios from axios;

const url ='https://api.travelperk.com/travelsafe/restrictions';

class AxiosService {

    // get Posts
    static getPosts() {
        return new Promise(async (resolve, reject) => {

            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data);

                } catch (e) {
                reject(e);
            }   
        });
    }    

}

export default AxiosService;