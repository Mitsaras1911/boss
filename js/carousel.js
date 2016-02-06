$(document).ready(function(){
	 $.ajax({
		 url: "get_img.php", 
		 success: function(result){
			 var imgs = $.parseJSON(result);
				$.each(imgs, function(item, i){
					var path = item.imgPath;
					$('#caruser_img').append(<div class="item">
                      <img src="https://unsplash.imgix.net/photo-1423683249427-8ca22bd873e0?w=1024&amp;q=50&amp;fm=jpg&amp;s=5e57c661d0f772ce269188a6f5325708">
                    </div>)
			 });
    }});
});