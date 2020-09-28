const { rejects } = require('assert');
var colors = require('colors');

const fs = require('fs');
let listarTabla = (base, limite=10) =>{
    console.log('====================================================='.green);
    console.log(`================ tabla de ${base} =======================`.blue);
    console.log('====================================================='.green);

    for(i=1;i<=limite;i++){
        console.log(`${base}*${i} = ${i*base}`);
    }
}

let crearArchivo=(base,limite=10)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for(let i = 1;i<=limite;i++){
            data+=`${base}*${i} = ${i*base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports={
    crearArchivo,
    listarTabla
}
