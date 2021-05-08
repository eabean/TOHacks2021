import axios from 'axios';

const url = 'https://sandbox.travelperk.com/travelsafe/restrictions?destination=ES&destination_type=country_code&origin=DE&origin_type=country_code&date=2020-10-15';

class AxiosService {

    // get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {

            try {
                axios.get(url, {
                    headers: {
                      'Authorization': 'ApiKey GnQYic.zc102IrxZn7XZpD991XJJTIkFFUiutin',
                      'Api-Version': 1
                    }
                }).then(res => {
                        const data = res.data;
                        console.log(data);
                        resolve(data);

                }).catch ((err) => {
                    // console.log(error);
                    reject(err);
                });

            } catch (e) {
                reject(e);
            }   
        });
    }    

}

export default AxiosService;