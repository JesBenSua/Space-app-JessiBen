import getHash from '../utils/getHash';
import getData from '../utils/getData';

const appSpace =  async () => {

    const id = getHash();
    const appSpace = await getData(id); 
    
        const launches = await getData ();
        const launch_number = await getHash();
        console.log (launch_number) 
        
        const launch = launches.find(launch => launch.id === launch_number);
        console.log(launch)
    
    const view = `

        <div class= "Characters">
        <article class="Character">
             <img src="${launch.links.patch.small}">
             <h3> Nombre: <span>" ${launch.name} "</span></ </h3> 
             </article>

             <div 
            <article class="Characters-card">
                <h3>Razon de falla : <span>" ${launch.failures[0].reason} "</span></ </h3>
                <h3>Detalle : <span>${launch.details} </span></h3>
                <h3>Números de vuelo : <span>${launch.flight_number}</span></</h3>
                <h3>Fecha y hora de despegue: <span>${launch.date_local}</span></h3>
            </article>
        </div> 
    `
    return view
};
export default appSpace;
