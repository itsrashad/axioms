var swiper = new Swiper('.swiper-container1',
{
    spaceBetween: 30,
    slidesPerView: 7,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1080: {
            slidesPerView: 5,
        },
         880: {
            slidesPerView: 3,
        },
         880: {
            slidesPerView: 1,
        },
    }
});

$(".content").mCustomScrollbar(
{
    // horizontal scrollbar
    axis:"x" 
});
new WOW().init();

$("header").stick_in_parent();

//$('.nav > li a').addClass('scroll');
$('#primary-menu > li a').addClass('scroll');

$(window).resize(function()
{
    if (document.documentElement.clientWidth > 768)
    {
        $(document).ready(function()
        {
            $(".wraper").on("click","a.scroll", function (event)
            {
                //отменяем стандартную обработку нажатия по ссылке
                event.preventDefault();
                //забираем идентификатор бока с атрибута href
                var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top - 110 + 'px';
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1000);
            });
        });
    }
});

$(document).ready(function()
{
    $(".wraper").on("click", "a.scroll", function (event)
    {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function newDate(days)
{
    return moment().add(days, 'd').toDate();
}

function newDateString(days)
{
    return moment().add(days, 'd').format();
}

var color = Chart.helpers.color;
var config = {
    type: 'line',
    data: {
        datasets: [{
            label: 'Dataset with string point data',
            backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
            borderColor: window.chartColors.red,
            fill: false,
            data: [{
                x: newDateString(0),
                y: randomScalingFactor()
            }, {
                x: newDateString(2),
                y: randomScalingFactor()
            }, {
                x: newDateString(4),
                y: randomScalingFactor()
            }, {
                x: newDateString(5),
                y: randomScalingFactor()
            }],
        }, {
            label: 'Dataset with date object point data',
            backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
            borderColor: window.chartColors.blue,
            fill: false,
            data: [{
                x: newDate(0),
                y: randomScalingFactor()
            }, {
                x: newDate(2),
                y: randomScalingFactor()
            }, {
                x: newDate(4),
                y: randomScalingFactor()
            }, {
                x: newDate(5),
                y: randomScalingFactor()
            }]
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Time Point Data'
        },
        scales: {
            xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                },
                ticks: {
                    major: {
                        fontStyle: 'bold',
                        fontColor: '#FF0000'
                    }
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'value'
                }
            }]
        }
    }
};

window.onload = function()
{
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);
};

var el = document.getElementById('randomizeData');
if(el){
  el.addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset)
    {
        dataset.data.forEach(function(dataObj)
        {
            dataObj.y = randomScalingFactor();
        });
    });
    window.myLine.update();
  });
}

/*document.getElementById('randomizeData').addEventListener('click', function()
{
    config.data.datasets.forEach(function(dataset)
    {
        dataset.data.forEach(function(dataObj)
        {
            dataObj.y = randomScalingFactor();
        });
    });
    window.myLine.update();
});*/

document.getElementById('addData').addEventListener('click', function()
{
    if (config.data.datasets.length > 0)
    {
        var numTicks = window.myLine.scales['x-axis-0'].ticksAsTimestamps.length;
        var lastTime = numTicks ? moment(window.myLine.scales['x-axis-0'].ticksAsTimestamps[numTicks - 1]) : moment();

        var newTime = lastTime
            .clone()
            .add(1, 'day')
            .format('MM/DD/YYYY HH:mm');

        for (var index = 0; index < config.data.datasets.length; ++index)
        {
            config.data.datasets[index].data.push({
                x: newTime,
                y: randomScalingFactor()
            });
        }
        window.myLine.update();
    }
});

document.getElementById('removeData').addEventListener('click', function()
{
    config.data.datasets.forEach(function(dataset)
    {
        dataset.data.pop();
    });
    window.myLine.update();
});