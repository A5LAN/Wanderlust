$("#loginbutton").click(function() {
  $("#banner").addClass("login-active");

  $("#banner .tab-content #signup").hide();
  $("#banner .tab-content #login").show();


  $("#signup-tab-btn").removeClass("active");
  $("#login-tab-btn").addClass("active");
});

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

$("#sign-up-submit-btn").on('click', function (e) {

var checks = true;
var fNameInput = $("#first-name-input").val();
var lNameInput = $("#last-name-input").val();
var emailInput = $("#email-input").val();
var passwordInput = $("#password-input").val();

if ((fNameInput && (fNameInput.length > 0)) &&
    (lNameInput && (lNameInput.length > 0)) &&
    (passwordInput && (passwordInput.length > 0)) &&
    (emailInput && (emailInput.length > 0) && (emailInput.indexOf("@") >= 0)) ) {
  e.preventDefault();
  window.location = "intro.html";
}
});

$("#login-btn").on('click', function (ev) {
  var checks = true;
  var emailInput = $("#email-login").val();
  var passwordInput = $("#password-login").val();

  ev.preventDefault();
if (passwordInput && (passwordInput.length > 0) && emailInput && (emailInput.length > 0) && (emailInput.indexOf("@") >= 0)) {

  window.location = "stories.html";
}
});

$('li').on('click', function() {
    var self = $(this);
    $('.active').removeClass('active');
    self.addClass('active');
    self.closest('ul').attr('data-mouse', self.data('mouse') + ' mouse');
    $('.mouse').removeAttr('class').addClass('mouse ' + self.data('mouse'));
});

