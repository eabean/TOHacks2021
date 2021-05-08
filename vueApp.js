// const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";
const url = "https://sandbox.travelperk.com/travelsafe/restrictions?destination=ES&destination_type=country_code&origin=DE&origin_type=country_code&date=2020-10-15";
const apiKey = "P24Vcr.zoJEeSBPBJ23Cj4Bq3d4gkUPDUfMEJC8";

const vm = new Vue({
    el: '#app',
    //Mock data for the value of BTC in USD
    data: {
        // results: {
        //     "BTC": { "USD": 3759.91, "EUR": 3166.21 },
        //     "ETH": { "USD": 281.7, "EUR": 236.25 },
        //     "NEW Currency":{"USD":5.60,"EUR":4.70}
        // }
        results: [],
        error: ""
    },
    mounted() {
        // axios.get(url).then(response => {
        //     this.results = response.data
        // });

        try {
            axios.get(url, {
                headers: {
                    "Authorization": `ApiKey ${apiKey}`,
                    "Api-Version": 1,
                    "Accept-Language": "en",
                    // 'Access-Control-Allow-Origin': "*",
                    // 'Access-Control-Allow-Credentials': "true",
                    // 'Access-Control-Allow-Origin': "*",
                    // 'Access-Control-Allow-Credentials': "true",
                    // 'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    // 'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                    "Access-Control-Allow-Headers": "Authorization"
                }
            }).then((res) => {
                // const data = res.data;
                // console.log(res);
                // resolve(data);
                this.results = res.data
            }).catch(e => {
                this.error = e;
            });
        } catch (e) {
            this.error = "Could not render";
        }
    }
});