window.onload = traerCategories();

function traerCategories(){
    fetch('../json/categories.json') /*toma la direccion del arhivo json a tratar*/
    .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
    .then(datosCategories =>{   /*traemos los datos para procesar*/
        let cardGrid = document.getElementById("cardGrid");

        for (let i in datosCategories) {         /*pongo el valor de cada campo*/
            
            cardGrid.innerHTML +=`
                    <article class="gridItem">
                        <div class="card">
                            <div class="cardDetail">
                                <h3>${datosCategories[i].category}</h3>
                            </div>    
                            
                            <div class="iconCard">
                                <a href="resources/categories.html"><img src="${datosCategories[i].image}" ></a>
                            </div>
                        </div>
                    </article>
                    `
        }  
    })
}





