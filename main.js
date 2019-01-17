var img_v = $('img');
var holder_v = $('#holder');
var info_v = $('#info');
var imgInfo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

img_v.on('click' ,function () {
	info_v.html('');
	holder_v.html('');
	var self = $(this);
	
	var copy = self.clone();
		copy.css({
			position : 'absolute',
			width: self.width(),
			height: self.height(),
			top : self.offset().top,
			left : self.offset().left
		});
		copy.animate({
			top : holder_v.offset().top,
			left : holder_v.offset().left,
			width : holder_v.width(),
			height : holder_v.height()
		}, 900, function(){info_v.append(imgInfo);
		})
	holder_v.append(copy);
});