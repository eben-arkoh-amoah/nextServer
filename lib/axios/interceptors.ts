import axios from "axios";

export const requests = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        Accept: "application/json",
        Authorization: `Bearer_TOKEN`
    }
});

requests.interceptors.request.use(
    (req) => {
        console.log("request sent");
        console.log(req);
        return req
    },
    (error) => {
        console.log(error.response)
        alert(error.response)
        return Promise.reject(error)
    }
);

requests.interceptors.response.use(
    (res: any)=>{
        if (res.status === 201) {
            alert("user already created")
        } else {
            return res;
        }
    },
    (err) => {
        return Promise.reject(err)
    }
)

export const api = {
   get : async (url: string) => {
        const resp = await requests(url);
        return resp;
     },
   post : async (url: string, payload: any) => {
       const resp = await requests.post(url, payload);
        return resp;
     },
   delete : async (url: string, payload: any) => {
       const resp = await requests.delete(url, payload);
        return resp;
     },
}
