let vm = new Vue({
    el: "#app",
    data: {
        title: "Data Kota",
        dataKota : null,
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