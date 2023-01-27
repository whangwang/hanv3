export const renderImageMixin = {
    methods: {
        renderCoverImage(projectName){
            if(window.devicePixelRatio == 3)return `background-image: url(${require(`@/assets/images/projects/${projectName}/cover@3x.jpg`)});`
            else if(window.devicePixelRatio == 2)return `background-image: url(${require(`@/assets/images/projects/${projectName}/cover@2x.jpg`)});`
            return `background-image: url(${require(`@/assets/images/projects/${projectName}/cover@1x.jpg`)});`
            /*return `
                background-image: url(${require(`@/assets/images/projects/${projectName}/cover@1x.jpg`)});
                @media screen and (-webkit-min-device-pixel-ratio: 2),
                screen and (min--moz-device-pixel-ratio: 2) {
                    .photo {
                        background-image: url(${require(`@/assets/images/projects/${projectName}/cover@2x.jpg`)});;
                    }
                }
                @media screen and (-webkit-min-device-pixel-ratio: 3),
                screen and (min--moz-device-pixel-ratio: 3) {
                    .photo {
                        background-image: url(${require(`@/assets/images/projects/${projectName}/cover@3x.jpg`)});
                    }
                }
            `*/
        },
        renderImage(url){
            let url2x = url.slice(0, url.lastIndexOf('.')) + '@2x' + url.substr(url.lastIndexOf('.'))
            let url3x = url.slice(0, url.lastIndexOf('.')) + '@3x' + url.substr(url.lastIndexOf('.'))
            return `${require(`@/assets/images/${url2x}`)} 2x, ${require(`@/assets/images/${url3x}`)} 3x`
        },
        renderBackgroundImage(url){
            let url1x = url.slice(0, url.lastIndexOf('.')) + '@1x' + url.substr(url.lastIndexOf('.'))
            let url2x = url.slice(0, url.lastIndexOf('.')) + '@2x' + url.substr(url.lastIndexOf('.'))
            let url3x = url.slice(0, url.lastIndexOf('.')) + '@3x' + url.substr(url.lastIndexOf('.'))
            if(window.devicePixelRatio == 3)return `background-image: url(${require(`@/assets/images/${url3x}`)});`
            else if(window.devicePixelRatio == 2)return `background-image: url(${require(`@/assets/images/${url2x}`)});`
            return `background-image: url(${require(`@/assets/images/${url1x}`)});`
            /*
            return `
                background-image: url(${require(`@/assets/images/${url1x}`)});
                @media screen and (-webkit-min-device-pixel-ratio: 2),
                screen and (min--moz-device-pixel-ratio: 2) {
                    .photo {
                        background-image: url(${require(`@/assets/images/${url2x}`)});;
                    }
                }
                @media screen and (-webkit-min-device-pixel-ratio: 3),
                screen and (min--moz-device-pixel-ratio: 3) {
                    .photo {
                        background-image: url(${require(`@/assets/images/${url3x}`)});
                    }
                }
            `*/
        }
    }
}