class MachineOptions{
    constructor({opt}){
        this._opt=opt;
    }

    sort(){
        const sortOpt=Math.floor(Math.random()*3-0)
        return this._opt[sortOpt].name
    }

    set opt(options){// set o produto
    this._opt=options;
    }

    get opt(){//o get pega os valores| no get não é preciso passar parametro, só return
        return this._opt;
    }
}
module.exports=MachineOptions;