/**
==============================================
; Title: Assignment 8.2 What-a-Book App
; Author: Professor Richard Krasso
; Modified by: Chad ONeal
; Date: 09/27/2022
; Description: http-client for what-a-book app
==============================================
*/

// http client class
export class HttpClient {
    
    async get(url, params = '') {

        // url object.
        let urlObject = new URL(url);

        // assign url.search to URLSearchParams
        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject

        const res = await fetch(urlObject.toString(), {
            method: "GET",
        })

        // return res object as json
        return res.json();
    }
}