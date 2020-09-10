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


/**/

function toggleClass(id) {
    document.getElementById(id).classList.toggle('show');
    // document.getElementsByTagName("html")[0].classList.toggle('no-scroll');
}


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

(function () {
    var left = 100;
    var top = 100;
    var cursor = document.getElementById('cursor')

    function calculatePositions(e) {
        left = e.pageX - (cursor.offsetWidth) / 2;
        top = e.pageY - (cursor.offsetHeight) / 2;
    }

    document.addEventListener("mousemove", e => calculatePositions(e));

    const render = () => {
        cursor.style.transform = `translate(${left}px, ${top}px)`;
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
})();

function numberValidate(value) {
    return value.replace(/\D|^0+/g, '')
}

(function () {
    $(document).on("input", ".js-ticket-count", function() {
        this.value = numberValidate(this.value)

        $(`.${this.id}-value`)[0].innerText = this.value || 0
        var overviewPrice = $('.js-overview-price')[0]
        var fieldPrice = $(`.${this.id}-hidden`)[0].value

        overviewPrice.innerText = parseInt(overviewPrice.innerText || 0) + (parseInt(this.value || 0) * fieldPrice)
    });
})()
