import axios from 'axios';

const url = "https://sandbox.travelperk.com/travelsafe/restrictions?destination=ES&destination_type=country_code&origin=DE&origin_type=country_code&date=2020-10-15";
const apiKey = "P24Vcr.zoJEeSBPBJ23Cj4Bq3d4gkUPDUfMEJC8";

class AxiosService {

    // get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {

            try {
                axios.get(url, {
                    headers: {
                        'Authorization': `ApiKey ${apiKey}`,
                        'Api-Version': "1",
                        'Accept-Language': "en"
                    }
                }).then((res) => {
                    const data = res.data;
                    console.log(res);
                    resolve(data);
                });

            } catch (e) {
                reject(e);
            }
        });
    }

}

export default AxiosService;