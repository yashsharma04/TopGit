$(function(){
		// Pagination code
		document.getElementById("no_of_stars").innerHTML=1000 ;
		var items = [] ; 
		$('#pagination-demo').twbsPagination({
			totalPages:584,
			visiblePages: 7,
			onPageClick: function (event, page) {
				var name= $("#search_name");	
				document.getElementById("list").innerHTML= "" ;
					$.ajax({
					url:"https://api.github.com/search/repositories?q="+name.val()+"&page="+page+"&per_page=10",
					success:function(response){					
						items = response.items;
						$("#pagination-demo").twbsPagination().totalPages= 5;
					 	$.each(items,function(index,value){
					 		var html1 = `<li class='media'>
						  	<div class='media-left'>
					  		<img class='media-object' src='http://www.clker.com/cliparts/6/z/9/4/G/v/right-double-arrow-md.png' width='50' height='50' alt='...'>
					  		</div>
					  		<div class='media-body'>
					  		<h4 class='media-heading'>`+items[index].name+`</h4>
					  		Language : `+items[index].language+` | `+items[index].description+`
					  		</div>
					  		</li> `;
					  	var ul = $("#list") ; 
					  	ul.append(html1);	
					});
					 
		},
		error : function(request,status,error){
			console.log(error);
			document.getElementById("msg").innerText= "Nothing to show" ;
			setTimeout(function()
			{
				document.getElementById("msg").innerText= "" ;
			}, 3000);

		}
	  });
		
	}
	});
		$("#search").keypress(function(e){
		var key = e.which ; 
		console.log("bhjv");
		if(key==13){

			var search = $("#search");
			var language = search.val() ;
			console.log(language);
			var ul = $("#list");
			document.getElementById("list").innerHTML= "";
			if(""==language.trim()){
			 	if(0!=items.length){
			 		$.each(items,function(index,value){
			 		var html = `<li class='media'>
				  	<div class='media-left'>
			  		<img class='media-object' src='http://www.clker.com/cliparts/6/z/9/4/G/v/right-double-arrow-md.png' width='50' height='50' alt='...'>
			  		</div>
			  		<div class='media-body'>
			  		<h4 class='media-heading'>`+items[index].name+`</h4>
			  		Language : `+items[index].language+` | `+items[index].description+`
			  		</div>
			  		</li> `;
			  	var ul = $("#list");
			  	ul.append(html);	

			 	});
			 }
			 	
			}
			else{
				
				if(0!=items.length){
					$.each(items,function(index,value){

					if(items[index].language.toUpperCase()==language.toUpperCase()){
							console.log("inside match language ");
							var html = `<li class='media'>
						  	<div class='media-left'>
					  		<img class='media-object' src='http://www.clker.com/cliparts/6/z/9/4/G/v/right-double-arrow-md.png' width='50' height='50' alt='...'>
					  		</div>
					  		<div class='media-body'>
					  		<h4 class='media-heading'>`+items[index].name+`</h4>
					  		Language : `+items[index].language+` | `+items[index].description+`
					  		</div>
					  		</li> `;
				  		var ul = $("#list");
				  		ul.append(html);		
					}
					else{

					}
			 		
			  		});
				}
				
			}
		}
		});

		// slider starts 
		$("#slider").slider({
			min:0 ,
			max :1000,
			value:1000 ,
			change:function(event,ui){

				var val = ui.value ;
				document.getElementById("no_of_stars").innerHTML= val ;
				document.getElementById("list").innerHTML = "" ;
				if(0!=items.length){
					$.each(items,function(index,value){
						if(items[index].stargazers_count<=val){
								console.log("inside match language ");
								var html = `<li class='media'>
							  	<div class='media-left'>
						  		<img class='media-object' src='http://www.clker.com/cliparts/6/z/9/4/G/v/right-double-arrow-md.png' width='50' height='50' alt='...'>
						  		</div>
						  		<div class='media-body'>
						  		<h4 class='media-heading'>`+items[index].name+`</h4>
						  		Language : `+items[index].language+` | `+items[index].description+`
						  		</div>
						  		</li> `;
					  		var ul = $("#list");
					  		ul.append(html);									
						}
					});
				}
			}
		});
       // slider ends
       //search by name starts 
       $("#search_name").keypress(function(e){
		 		console.log(e);
		 		if(e.which==13){
		 			console.log(e.which);
		 			// $('#pagination-demo').twbsPagination.onPageClick();	
		 			var name= $("#search_name");
					document.getElementById("list").innerHTML= "" ;

					var page = 1;
						$.ajax({
						url:"https://api.github.com/search/repositories?q="+name.val()+"&page="+page+"&per_page=10",
						success:function(response){					
							items = response.items; 
						 	$.each(items,function(index,value){
						 		var html1 = `<li class='media'>
							  	<div class='media-left'>
						  		<img class='media-object' src='http://www.clker.com/cliparts/6/z/9/4/G/v/right-double-arrow-md.png' width='50' height='50' alt='...'>
						  		</div>
						  		<div class='media-body'>
						  		<h4 class='media-heading'>`+items[index].name+`</h4>
						  		Language : `+items[index].language+` | `+items[index].description+`
						  		</div>
						  		</li> `;
						  	var ul = $("#list") ; 
						  	ul.append(html1);	
						});
						 
					},
					error : function(request,status,error){
						console.log(error);
						document.getElementById("msg").innerText= "Nothing to show" ;
						setTimeout(function()
						{
							document.getElementById("msg").innerText= "" ;
						}, 3000);
					}
			  	});
					
					}
	    });
      //search by name ends 

});