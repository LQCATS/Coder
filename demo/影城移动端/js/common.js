const pageData = {
    footer: {
        tabBarArr: [
            { id: 1, name: '首页', href: './homePage.html' },
            { id: 2, name: '影院', href: './theater.html' },
            { id: 3, name: '影片', href: './film.html' },
            { id: 4, name: '我的', href: './myself.html' },
        ]
    }

};

const footerRender = (parentNodeClassName, selectTabId = 1) => {

    $(`.${parentNodeClassName}`).html(pageData.footer.tabBarArr.map((tabBarData) => {
        const isSelect = selectTabId === tabBarData.id;

        const imgSrc = `../images/footer_nav_0${tabBarData.id}_${isSelect ? 'select' : 'normal'}.png`;
        
        return `
            <div class="ft-item">
                <a href="${isSelect ? '#' : `${tabBarData.href}`}">
                    <img src="${imgSrc}" alt="">
                    <span class="${isSelect ? 'ft-click' : ''}">${tabBarData.name}</span>
                </a>
            </div>
        `;
    }).join(''));
};