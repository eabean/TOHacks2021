import axios from 'axios';

const url = "https://covid-api.thinklumo.com/data?airport=BOS";
const apiKey = APIKEY;

const vm = new Vue({
    el: '#app',
    data() {
        results: [],
        error: ""
    },
    mounted() {
        try {
            axios.get(url, {
                headers: {
                    "X-Api-Key": `${apiKey}`,
                    // "Api-Version": 1,
                    // "Accept-Language": "en",
                    "Access-Control-Allow-Origin": "*",
                    // 'Access-Control-Allow-Credentials': "true",
                    // "Access-Control-Allow-Origin": "*",
                    // 'Access-Control-Allow-Credentials': "true",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
                    // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                    "Access-Control-Allow-Headers": "Content-Type"
                }
            }).then((res) => {
                this.results = res.data
            }).catch(e => {
                this.error = e;
            });
        } catch (e) {
            this.error = "Could not render";
        }
    }
});