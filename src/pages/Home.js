import getData from '../utils/getData';

const Home =  async () => {

    const Space = await getData();

    const view =  `
        <div class="Characters">
        ${Space.map(appSpace => `
        <article class="Character-item">
            <a href="#/${appSpace.id}/">
            <img src="${appSpace.links.patch.small}" alt="${appSpace.id}">
            <h2>${appSpace.name}</h2>
            </a>
        </article>
                `).join('') }
        </div  
            `
    return view;
}

export default Home;