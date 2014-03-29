// JavaScript Document
$(document).ready(function(){
  var slideWidth = 960;
  var slides = $('.slide');
  var numberOfSlides = slides.length;
  // Remove scrollbar in JS
  $('#slidesContainer').css('overflow', 'hidden');

  // Wrap all .slides with #slideInner div
  slides
    .wrapAll('<div id="slideInner"></div>')
    // Float left to display horizontally, readjust .slides width
	.css({
      'float' : 'left',
      'width' : slideWidth
    });

  // Set #slideInner width equal to total width of all slides
  $('#slideInner').css('width', slideWidth * numberOfSlides);

  // Insert controls in the DOM
  $('#slideshow')
    .prepend('<span class="control" id="leftControl">Clicking moves left</span>')
    .append('<span class="control" id="rightControl">Clicking moves right</span>');

  // Hide left arrow control on first load
  manageControls(activeSlide);
  // manageControls: Hides and Shows controls depending on currentPosition
  function manageControls(position){
    // Hide left arrow if position is first slide
	if( activeSlide>1){ $('#leftControl').show() } else{ $('#leftControl').hide() }
	// Hide right arrow if position is last slide
    if(activeSlide>numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
  }	
var a = new Array();
a[0]='&nbsp;';
a[1]='&nbsp;';
a[2]='&nbsp;';
a[3]='&nbsp;';
a[4]='&nbsp;';
a[5]='&nbsp;';
a[6]='&nbsp;';
a[7]='&nbsp;';

    $("#slideInner").after('<ul id="b-slider-nav"></ul>');
  var navCont = $("#b-slider-nav").html();
  for(var i=0; i<=numberOfSlides-1; i++){
		$("#b-slider-nav").html(navCont+'<li><a href="#">'+a[i]+'</a></li>');
		navCont = $("#b-slider-nav").html();
	};
	$("#b-slider-nav li").eq(0).addClass("active"); // делаем активной ссылку на первый слайд
	var activeSlide = 1;
	
	var pause = false;
	
setInterval(function () {	// будем повторять функцию с некоторым интервалом времени
		if (pause==false) { // если значение переменной pause равно false
			if (activeSlide>numberOfSlides-1){ // если индекс активного слайда больше общего числа слайдов
				$("#slideInner").animate({
					marginLeft: "0px" // листаем всё к первому слайду
				}, 800);
				activeSlide=1; // делаем первый слайд активным
				$("#b-slider-nav li").removeClass("active"); // убираем у всех кнопок пагинации класс active
				$("#b-slider-nav li").eq(activeSlide-1).addClass("active"); // добавляем класс active первому элементу пагинации
			}
			else {  // если индекс активного слайда меньше их общего числа
				activeSlide++; // делаем активным следующий слайд
				$("#slideInner").animate({
					marginLeft: "-=0"+slideWidth+"px" // пролистываем галерею к следующему слайду
				}, 800);			
				$("#b-slider-nav li").removeClass("active");
				$("#b-slider-nav li").eq(activeSlide-1).addClass("active");	// добавляем следующему слайду класс active		
			}
		}manageControls(activeSlide);
	}, 3000 ); // интервал времени равен трем секундам
	
	$("#b-slider-nav li").bind('click',function(){
		pause=true;
setTimeout(function () {
pause=false;
}, 7000); 
	$("#b-slider-nav li").removeClass("active"); // убираем класс active у всех элементов
	$(this).addClass("active"); // добавляем класс active к элементу, на который кликнул пользователь
		var clickedSlide = $(this).index()+1; 
			$("#slideInner").animate({
			marginLeft:-slideWidth*(clickedSlide-1)// производим анимацию: перемещаем набор слайдов так, чтобы в видимой области появился слайд с номером, соответствующим номеру ссылки, на которую кликнул пользователь
		}); // анимация будет длиться 800 милисекунд
		activeSlide = $("#b-slider-nav li.active").index()+1;// в переменную activeSlide записываем порядковый номер выбранного слайда
		manageControls(activeSlide);
	 });
	 
	 // Create event listeners for #rightControl click
	$('#rightControl').bind('click', function(){
		pause=true;
setTimeout(function () {
pause=false;
}, 7000); 
			if(activeSlide<numberOfSlides){ // если номер активного слайда меньше общего количества слайдов
			$("#slideInner").animate({
				marginLeft: "-=0"+slideWidth// показываем следующий слайд
			}, 800);
			activeSlide++; // делаем следующий слайд активным
			$("#b-slider-nav li").removeClass("active");
			$("#b-slider-nav li").eq(activeSlide-1).addClass("active"); 
			}
		manageControls(activeSlide);
		})
	 // Create event listeners for #leftControl click
	$("#leftControl").bind('click', function(){ // при клике на левую стрелку
	pause=true;
setTimeout(function () {
pause=false;
}, 7000); 
		if(activeSlide>1){ // если номер активного слайда больше единицы
			$("#slideInner").animate({
				marginLeft: "+=0"+slideWidth+"px" // пролистываем к предыдущему слайду
			}, 800);
			activeSlide--; // делаем предыдущий слайд активным
			$("#b-slider-nav li").removeClass("active");
			$("#b-slider-nav li").eq(activeSlide-1).addClass("active"); // делаем активной предыдущую ссылку
		}
		manageControls(currentPosition);
	});	
	
	
	});
