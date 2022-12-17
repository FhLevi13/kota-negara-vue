let vm = new Vue({
    el: "#app",
    data: {
        dataKota : null,

        nama_Kota: null,
        asal_negara: null
    },
    methods: {
        simpanNegara: function() {
            console.log("Button Disimpan");
            let _data = {
                'nama_Kota' : this.nama_Kota,
                'asal_negara' : this.asal_negara
            }

            axios
            .post('https://kota-negara-api.vercel.app/kota', _data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted() {
        axios
        .get('https://kota-negara-api.vercel.app/kota')
        .then(response => {
            console.log(response);
            this.dataKota = response.data
        })
    }
})