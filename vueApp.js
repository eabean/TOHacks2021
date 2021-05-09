/* eslint-disable no-undef */
import axios from 'axios';

const url = "https://covid-api.thinklumo.com/data?airport=BOS";
const apiKey = '6c67fce8744e4d87871da46b4e8ebb9a';

// eslint-disable-next-line no-unused-vars
const vm = new Vue({
    el: '#app',
    data() {
        return {
            results: [],
            error: ""
         } 
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
                console.log(e);
                this.error = e.message;
            });
        } catch (e) {
            this.error = "Could not render";
        }
    }
});