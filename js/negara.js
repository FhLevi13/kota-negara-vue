let vm = new Vue({
    el: "#app",
    data: {
        dataNegara : null,

        nama_negara: null,
        ibukota: null
    },
    created: function() {
        this.tampilNegara()
    },
    methods: {
        tampilNegara: function() {
            axios
            .get('https://kota-negara-api.vercel.app/negara')
            .then(response => {
                console.log(response);
                this.dataNegara = response.data
            })
        },
        simpanNegara: function() {
            console.log("Button Disimpan");
            let _data = {
                'nama_negara' : this.nama_negara,
                'ibukota' : this.ibukota
            }

            axios
            .post('https://kota-negara-api.vercel.app/negara', _data)
            .then(response => {
                this.tampilNegara();
            })
            .catch(error => {
                console.log(error);
            })
        }
    },     
})