var input = document.querySelectorAll('.def-input input');

input.forEach((item) => {
    item.addEventListener('input', evt => {
        const value = item.value;

        if (!value) {
            item.dataset.state = '';
            return;
        }

        const trimmed = value.trim();

        if (trimmed) {
            item.dataset.state = 'valid';
        } else {
            item.dataset.state = 'invalid';
        }
    });
});


// menu open close animation
(function () {
    var nav = document.getElementById('navWrapper')
    var leftAnimatingElements = document.getElementById('navWrapper').querySelectorAll('.js-to-left')
    var downAnimatingElements = document.getElementById('navWrapper').querySelectorAll('.js-to-down')
    document.getElementById('navButton').addEventListener('click', function () {
        nav.classList.add('show');

        addAnimation(leftAnimatingElements, 'fade-left')
        // addAnimation(downAnimatingElements, 'fade-left')
    })

    document.getElementById('closeNavButton').addEventListener('click', function () {
        nav.classList.remove('show');

        for (let i = 0; i < leftAnimatingElements.length; i++) {
            leftAnimatingElements[i].removeAttribute('data-aos')
            leftAnimatingElements[i].classList.remove('aos-animate')
        }
    })

    function addAnimation(elements, type) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].setAttribute('data-aos', type)
            setTimeout(function () {
                leftAnimatingElements[i].classList.add('aos-animate')
            }, 300)
        }
    }
})()

function toggleBoxes(id, boxId) {
    var e = document.getElementById(id);
    var b = document.getElementById(boxId);

    if (e.style.display == 'block') {
        e.style.display = 'none';
        b.classList.remove('opened')
    } else {
        e.style.display = 'block';
        b.classList.add('opened')
    }
}

var favorites = document.querySelectorAll(".product-item .favorite");

favorites.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    });
});


/*faq accordion */

var accButton = document.getElementsByClassName("accordion__row");

var i;

for (i = 0; i < accButton.length; i++) {
    accButton[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.closest('div').children.item(1);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function findAncestor (el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

// cursor
(function () {
    var left = 100;
    var top = 100;
    var cursor = document.getElementById('cursor')
    var isScaled = false
    var isDraggable = false

    function calculatePositions(e) {
        console.log('0000000')
        left = e.pageX - (cursor.offsetWidth) / 2;
        top = e.pageY - (cursor.offsetHeight) / 2;
        if (
            e.target.nodeName === 'A' ||
            e.target.parentElement.nodeName === 'A' ||
            e.target.classList.contains('react-to-cursor') ||
            e.target.parentElement.classList.contains('react-to-cursor')) {

            cursor.style.width = '75px'
            cursor.style.height = '75px'
            isScaled = true
        } else {
            if (isScaled) {
                cursor.style.width = '50px'
                cursor.style.height = '50px'
            }
        }

        if (e.target.classList.contains('slick-list') || findAncestor(e.target,'slick-list')) {
            cursor.classList.add('cursor--drag')
            isDraggable = true
        } else {
            if(isDraggable) {
                cursor.classList.remove('cursor--drag')
            }
        }
    }

    document.addEventListener("mousemove", e => calculatePositions(e));
    window.addEventListener("scroll", e => {
        if((window.scrollY + window.innerHeight) > top) {
            top = window.scrollY
        }
    });



    const render = () => {
        cursor.style.transform = `translate(${left}px, ${top}px)`;
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
})();

function numberValidate(value) {
    return value.replace(/\D|^0+/g, '')
}


// ticket input calculation
(function () {
    $(document).on("input", ".js-validate-number", function () {
        this.value = numberValidate(this.value)
    });
})();

(function () {
    $(document).on("input", ".js-ticket-count", function () {
        this.value = numberValidate(this.value)

        $(`.${this.id}-value`)[0].innerText = this.value || 0
        var overviewPrice = $('.js-overview-price')[0]
        var fieldPrice = $(`.${this.id}-hidden`)[0].value

        overviewPrice.innerText = parseInt(overviewPrice.innerText || 0) + (parseInt(this.value || 0) * fieldPrice)
    });
})();
