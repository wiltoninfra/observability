import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
    stages: [
        { duration: '10s', target: 50 }, 
        { duration: '1m', target: 50 },  
        { duration: '10s', target: 0 }  
    ],
};

export default function () {
    const url = "http://localhost:8080/";
    const headers = {
        "cookie": "voter_id=cd8d3096cd6c23a",
        "Content-Type": "application/x-www-form-urlencoded"
    };

    let payload = {
        vote: "a"
    };
    let response = http.post(url, payload, { headers: headers });

    console.log(`Vote A - Response status: ${response.status}`);
    console.log(`Vote A - Response body: ${response.body}`);

    sleep(1);

    payload = {
        vote: "b"
    };
    response = http.post(url, payload, { headers: headers });

    console.log(`Vote B - Response status: ${response.status}`);
    console.log(`Vote B - Response body: ${response.body}`);

    sleep(1);
}
