if(!document.getElementById('backphoto')) {
    const { style } = htmlmodule;
    const urlmap = [
        'https://pp.vk.me/c630431/v630431762/4d6ba/H8uH_TMSVrA.jpg',
        'https://pp.vk.me/c630119/v630119762/4f88b/HuiiHuD7hdY.jpg',
        'https://pp.vk.me/c630119/v630119762/4f895/KnbZMuCAvPA.jpg',
        'https://pp.vk.me/c630431/v630431762/4d6b1/CiRGYeiCs7E.jpg',
        'https://pp.vk.me/c631528/v631528762/35696/DWnfZGh4kgw.jpg',
        'https://pp.vk.me/c631528/v631528762/35689/2OGae1WAvsU.jpg',
        'https://pp.vk.me/c631528/v631528762/3565d/gUEfXtr0XAs.jpg',
        'https://pp.vk.me/c631528/v631528762/35654/VAuxe11lD24.jpg',
        'https://pp.vk.me/c631528/v631528762/3564b/1CX4aova9R4.jpg',
        'https://pp.vk.me/c604529/v604529762/ac95/UoVGNFhm7Do.jpg',
        'https://pp.vk.me/c604529/v604529762/ac83/rKFx4LAiT3s.jpg',
        'https://pp.vk.me/c626330/v626330762/bac9/5DjpZYB2Uw4.jpg',
        'https://pp.vk.me/c630626/v630626566/1aed8/lKmjB_4QWmo.jpg',
        'https://pp.vk.me/c626128/v626128762/3b35d/-pha-dvzI30.jpg',
        'https://pp.vk.me/c631528/v631528762/356a4/w7Ue-lZ8QBA.jpg',
    ]
    const random = Math.floor(Math.random() * 100 % urlmap.length)
    const url = urlmap[random]
    document.head.append(style({
        id : 'backphoto',
        children : `body::before { background-image: url(${ url }) }`
    }))
}
