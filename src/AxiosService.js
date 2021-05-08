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

    // Create Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }

}

export default AxiosService;