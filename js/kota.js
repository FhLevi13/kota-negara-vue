let vm = new Vue({
    el: "#app",
    data: {
        dataKota : null,

        nama_Kota: null,
        asal_negara: null
    },
    created: function() {
        this.tampilKota()
    },
    methods: {
        tampilKota: function() {
            axios
            .get('https://kota-negara-api.vercel.app/kota')
            .then(response => {
                console.log(response);
                this.dataKota = response.data
            })
        },
        simpankota: function() {
            console.log("Button Disimpan");
            let _data = {
                'nama_Kota' : this.nama_Kota,
                'asal_negara' : this.asal_negara
            }

            axios
            .post('https://kota-negara-api.vercel.app/kota', _data)
            .then(response => {
                this.tampilKota();
                $('#exampleModal').modal('hide');
            })
            .catch(error => {
                console.log(error);
            })
        },
        hapusKota(_id) {
            axios
            .delete('https://kota-negara-api.vercel.app/kota/' + _id)
            .then(response => {
                this.tampilKota();
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
})