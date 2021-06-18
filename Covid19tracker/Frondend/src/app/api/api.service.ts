import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    baseUrl = 'https://covid19.mathdro.id/api';

    constructor(private http: HttpClient) {}

    fetchData() {
        return this.http.get(this.baseUrl);

    }
    fetchDataByCountry(country: string) {
        return this.http.get(this.baseUrl + '/countries/' + country);
    }
    fetchDailyData() {
        return this.http.get(this.baseUrl + '/daily');
    }
    fetchCountries() {
        return this.http.get(this.baseUrl + '/countries');
    }
}