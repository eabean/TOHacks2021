import axios from 'axios';

// const url = 'https://sandbox.travelperk.com/invoices/lines?profile_id=&serial_number=&serial_number_contains=&billing_period=&travelperk_bank_account_number&status=&issuing_date_gte&issuing_date_lte&due_date_gte&due_date_lte&expense_date_gte&expense_date_lte&limit=&offset=';
const url = 'https://api.opencovid.ca/timeseries?stat=cases&loc=prov&date=01-09-2020';
class AxiosService {

    // get Posts
    static getPosts() {
        return new Promise((resolve, reject) => {

            try {
                axios.get(url).then(res => {
                        const data = res.data;
                        console.log(data);
                        resolve(data);

                }).catch ((err) => {
                    reject(err);
                });

            } catch (e) {
                reject(e);
            }   
        });
    }    

}

export default AxiosService;

// let headers = {
//                     'Authorization': 'ApiKey GnQYic.zc102IrxZn7XZpD991XJJTIkFFUiutin',
//                     'Api-Version': "1"
//             };
// {
//     headers: {
//       'Authorization': 'ApiKey GnQYic.zc102IrxZn7XZpD991XJJTIkFFUiutin',
//       'Api-Version': "1"
//     }
// }