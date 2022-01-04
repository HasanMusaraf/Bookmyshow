function showNav() {
    document.getElementById('sidebar').classList.toggle('active')
}


// let btnContainer = document.getElementById('secondMenu');
// let bttns = document.getElementsByClassName('btns');

// for (let i = 0; i < bttns.length; i++) {
//     bttns[i].addEventListener('click', function() {
// let current = document.getElementsByClassName('actives');
// current[0].className=current[0].className.replace(' actives');
// this.className += ' actives';

//     })

// }

//////////////////////////////////////////////////////////////////////////


let i = 0;

let images = [];

let time = 2000;

// img list

images[0] = '/assets/img/freeaccessbannercopy.webp';
images[1] = '/assets/img/inoxbannerdesktop.webp';


// change images

function changeImg() {


    if (i < images.length - 1) {
        i++
    } else {
        i = 0;
    }
    document.slide.src = images[i];

    setTimeout('changeImg()', time);

}

window.onload = changeImg();




function searchPages() {
    
    let searchBar =document.getElementById("search").value;

    if ('movies' == searchBar) {
        window.open('/pages/index.html')
    } else if ('stream' == searchBar ) {
        window.open('/pages/stream.html')
    } else if ('events' == searchBar) {
        window.open('/pages/events.html')
    }else if ('plays' == searchBar) {
        window.open('/pages/plays.html')
    }else if ('sports' == searchBar ) {
        window.open('/pages/sports.html')
    }else if ('activity' == searchBar) {
        window.open('/pages/activities.html')
    }else if ('buzz' == searchBar) {
        window.open('/pages/buzz.html')
    }else if ('corporates' == searchBar) {
        window.open('/pages/corporates.html')
    }else if ('offers' == searchBar) {
        window.open('/pages/offers.html')
    }else if ('gift' == searchBar ) {
        window.open('/pages/giftCards.html')
    }else if ('spiderman' == searchBar) {
        window.open('/pages/spider.html')
    } else if ('sooriyavanshi' == searchBar) {
        window.open('/pages/sooriyavanshi.html')
    }else if ('residentevil' == searchBar) {
        window.open('/pages/residentEvil.html')
    }else if ('pushpa' == searchBar) {
        window.open('/pages/pushpa.html')
    }else if ('murungakkai' == searchBar) {
        window.open('/pages/murungakkai.html')
    }else if ('muddy' == searchBar) {
        window.open('/pages/muddy.html')
    }else if ('maraikkayar' == searchBar) {
        window.open('/pages/maraikkayar.html')
    }else if ('maanadu' == searchBar) {
        window.open('/pages/maanadu.html')
    }else if ('kurup' == searchBar) {
        window.open('/pages/kurup.html')
    }else if ('jail' == searchBar) {
        window.open('/pages/jail.html')
    }else if ('ikk' == searchBar) {
        window.open('/pages/ikk.html')
    }else if ('eternals' == searchBar) {
        window.open('/pages/eternals.html')
    }else if ('encanto' == searchBar) {
        window.open('/pages/encanto.html')
    }else if ('dune' == searchBar) {
        window.open('/pages/dune.html')
    }else if ('clifford' == searchBar) {
        window.open('/pages/clifford.html')
    }else if ('chandigarh' == searchBar) {
        window.open('/pages/chandigarh.html')
    }else if ('bachelor' == searchBar) {
        window.open('/pages/bachelor.html')
    }else if ('antiindian' == searchBar) {
        window.open('/pages/antiIndian.html')
    } else {
        alert("Please check your key")
    }
}








$(document).ready(function() {
    

    $(".list1").click(function() {
        const value1 = $(this).attr("data-filter");
        if (value1 == "all1") {
            $(".item1").show("1000");
        } else{
            $(".item1").not("."+value1).hide("1000");
            $(".item1").filter("."+value1).show("1000");
        }
    })
    
    $(".list1").click(function() {
        $(this).addClass('active1').siblings().removeClass("active1")
    })
    
    
    })