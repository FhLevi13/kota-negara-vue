let vm = new Vue({
    el: "#app",
    data: {
        title: "Data Negara",
        dataNegara : null,
    },
    mounted() {
        axios
        .get('https://kota-negara-api.vercel.app/negara')
        .then(response => {
            console.log(response);
            this.dataNegara = response.data
        })
    }
})