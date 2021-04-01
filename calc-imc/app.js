const Calculator = {
    userPeso: document.getElementById("peso"),
    userAltura: document.getElementById("altura"),
    saidaImc: document.getElementById("saida"),
    tipoImc: document.getElementById("tipo"),

    getImc(){
        if(this.userPeso.value != "" && this.userAltura.value != "") {
            const n1 = Number(this.userPeso.value)
            const n2 = Number(this.userAltura.value * this.userAltura.value)
            const imc =  Math.round(n1 / n2)
            this.saidaImc.innerHTML = imc

            if(imc < 18.5) {
                this.tipoImc.innerHTML = "Abaixo do Peso"
            } else if(imc >= 18.5 && imc <= 25) {
                this.tipoImc.innerHTML = "Peso Normal"
            } else if( imc > 25 && imc <= 30) {
                this.tipoImc.innerHTML = "Acima do Peso"
            } else if( imc > 30) {
                this.tipoImc.innerHTML = "Obeso"
            }
        } else {
            alert("Por favor digite os dados corretamente!")
        }
    },

    Clear(){
        this.userPeso.value = ""
        this.userAltura.value = ""
        this.saidaImc.innerHTML = ""
        this.tipoImc.innerHTML = ""

    }

}