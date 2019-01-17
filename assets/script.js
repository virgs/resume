let titles = ["Lopídio", "Guilherme Moraes", "Virgs"];

function changeTitle() {
    titles = titles.concat(titles.splice(0, 1));
    $(".g-main-title").text(titles[0]);
}
changeTitle();

const headerHeight = $('.g-header').css('height').replace(/[^-\d\.]/g, '') / 2;
window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 1) {
        $('.g-shrinkable').addClass('shrink');
    } else if (scrollTop === 0){
        $('.g-shrinkable').removeClass('shrink');
    }
};
