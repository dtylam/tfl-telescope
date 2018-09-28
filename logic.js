Vue.use(VueMaterial.default)
// Vue.use(VueRouter)
var vm = new Vue({
    el: '#app',
    data: {
        // Focus: which view is chosen at bottom bar:
        // 0: by station; 1: by vehicleID; 2: by line
        focus: 0,
        linesList: [],
        // stationsList: [],
        // Views: the objects containing data for a view
        // stationView: {
        // },
        vehicleIdView: {
            enteredId: "",
            loading: false,
            results: [],
            error: false
        },
        lineView: {
            selectedLine: "",
            loading: false,
            results: [],
            error: false
        }
    },
    created: function () {
        this.getBasics();
        // check URL params
        const params = new URL(location.href).searchParams;
        const line = params.get('line');
        const id = params.get('id');
        if (line !== null && id !== null) {
            // set to vehicleIdView
            this.focus = 0;
            // fire request
            this.vehicleIdView.enteredId = id;
            this.vehicleIdQueryWLine(line);
        }
        else if (line !== null) {
            // set to lineView
            this.focus = 2;
            // fire request
            this.lineView.selectedLine = line;
            this.lineArrivalsQuery();
        }
        else if (id !== null) {
            // set to vehicleIdView
            this.focus = 0;
            // fire request
            this.vehicleIdView.enteredId = id;
            this.vehicleIdQuery();
        }
    },
    methods: {
        getBasics: function () {
            const API = "https://api.tfl.gov.uk/"
            // Fetch tube lines info: https://api.tfl.gov.uk/Line/Mode/tube
            fetch(API + "Line/Mode/tube", {
                method: "get"
            }).then(response => response.json())
                .then(json => { this.linesList = json })
        },
        vehicleIdQuery: function () {
            const API = "https://api.tfl.gov.uk/"
            // show loading spinner
            this.vehicleIdView.loading = true;
            // fix vehicle ID if lower than 100
            const len = this.vehicleIdView.enteredId.length;
            if (len == 0) return
            else if (len == 1) this.vehicleIdView.enteredId = "00" + this.vehicleIdView.enteredId
            else if (len == 2) this.vehicleIdView.enteredId = "0" + this.vehicleIdView.enteredId
            // Fetch vehicle status: /Vehicle/{ids}/Arrivals
            fetch(API + "Vehicle/" + this.vehicleIdView.enteredId + "/Arrivals", {
                method: "get"
            }).then(response => response.json())
                .then(json => {
                    const sorted = json.sort(function (r1, r2) {
                        // Ascending: first timeToStation less than second timeToStation
                        // if (r1.lineId === r2.lineId) 
                        return r1.timeToStation - r2.timeToStation;
                        // Ascending: first lineid less than second lineid
                        // return r1.lineId < r2.lineId ? -1 : r1.lineId > r2.lineId ? 1 : 0;
                    })
                    this.vehicleIdView.results = Object.values(this.groupBy(sorted, 'lineId'));
                    this.vehicleIdView.loading = false;
                    this.vehicleIdView.error = false;
                }).catch(error => {
                    this.vehicleIdView.error = true;
                });
        },
        vehicleIdQueryWLine: function (lineId) {
            const API = "https://api.tfl.gov.uk/"
            // show loading spinner
            this.vehicleIdView.loading = true;
            // fix vehicle ID if lower than 100
            const len = this.vehicleIdView.enteredId.length;
            if (len == 0) return
            else if (len == 1) this.vehicleIdView.enteredId = "00" + this.vehicleIdView.enteredId
            else if (len == 2) this.vehicleIdView.enteredId = "0" + this.vehicleIdView.enteredId
            // Fetch vehicle status: /Vehicle/{ids}/Arrivals
            fetch(API + "Vehicle/" + this.vehicleIdView.enteredId + "/Arrivals", {
                method: "get"
            }).then(response => response.json())
                .then(json => {
                    const filtered = json.filter(r => r.lineId == lineId)
                        .sort(function (r1, r2) {
                            // Ascending: first timeToStation less than second timeToStation
                            return r1.timeToStation - r2.timeToStation;
                        })
                    this.vehicleIdView.results = [filtered];
                    this.vehicleIdView.loading = false;
                    this.vehicleIdView.error = false;
                }).catch(error => {
                    this.vehicleIdView.error = true;
                });
        },
        lineArrivalsQuery: function () {
            const API = "https://api.tfl.gov.uk/"
            // show loading spinner
            this.lineView.loading = true;
            // if nothing is entered
            if (this.lineView.selectedLine == "") return
            // Fetch line arrivals: /line/{line Id}/arrivals
            fetch(API + "line/" + this.lineView.selectedLine + "/Arrivals", {
                method: "get"
            }).then(response => response.json())
                .then(json => {
                    const sorted = json.sort(function (r1, r2) {
                        // Ascending: first timeToStation less than second timeToStation
                        if (r1.vehicleId === r2.vehicleId) return r1.timeToStation - r2.timeToStation;
                        // Ascending: first vehicleId less than second vehicleId
                        return r1.vehicleId - r2.vehicleId;
                    })
                    this.lineView.results = Object.values(this.groupBy(sorted, 'vehicleId'));
                    this.lineView.loading = false;
                    this.vehicleIdView.error = false;
                }).catch(error => {
                    this.lineView.error = true;
                });
        },
        timeConversion: function (timeInSec) {
            var min = Math.floor(timeInSec / 60);
            var sec = timeInSec - min * 60;
            if (min == 0) { return sec + "s" }
            else {
                // if (sec < 10) sec = "0" + sec
                return min + "m " + sec + "s"
            }
        },
        groupBy: function (xs, key) {
            return xs.reduce(function (rv, x) {
                (rv[x[key]] = rv[x[key]] || []).push(x);
                return rv;
            }, {});
        }
    }
})