$(document).ready(function(){
	
	// initialize select for materialize framework
    $('select').material_select();
    
    // grabbing geolocation; can remove console.log or make something pop up
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
	
	// making these global variables so they aren't just what they are within the function
	var currentLatitude;
	var currentLongitude;
	
	// grabbing geolocation and turning them into our variables
	function showPosition(position) {
		console.log(position);
		currentLatitude = position.coords.latitude;
		currentLongitude = position.coords.longitude;
	}
    
    // smooth scroll to anchor function
    function scrollTo(id) {
	    $('html,body').animate({scrollTop: $('#' + id).offset().top},'fast');
	}
    
    // info for restrictions
    var restrictions = {
/*
		'Dairy-Free': {
			name: 'Dairy-Free',
			icon: '<i class="fas fa-cheese-swiss"></i>',
			recipe: '&health=dairy-free',
			menu: '&intolerances=dairy'
		},
		'Egg-Free': {
			name: 'Egg-Free',
			icon: '<i class="fas fa-egg"></i>',
			recipe: '&health=egg-free',
			menu: '&intolerances=egg'
		},
		'Gluten-Free': {
			name: 'Gluten-Free',
			icon: '<i class="fas fa-bread-loaf"></i>',
			recipe: '&health=gluten-free',
			menu: '&intolerances=gluten'
		},
		'Keto': {
			name: 'Keto',
			icon: '<i class="fas fa-meat"></i>',
			recipe: '&health=keto-friendly',
			menu: '&diet=ketogenic'
		},
		'Paleo': {
			name: 'Paleo',
			icon: '<i class="fas fa-apple-alt"></i>',
			recipe: '&health=paleo',
			menu: '&diet=paleo'
		},
		'Pescatarian': {
			name: 'Pescatarian',
			icon: '<i class="fas fa-fish-cooked"></i>',
			recipe: '&health=pescatarian',
			menu: '&diet=pescetarian'
		},
		'Pork-Free': {
			name: 'Pork-Free',
			icon: '<i class="fas fa-pig"></i>',
			recipe: '&health=pork-free',
			menu: '&diet=vegetarian'
		},
		'Red Meat-Free': {
			name: 'Red Meat-Free',
			icon: '<i class="fas fa-steak"></i>',
			recipe: '&health=red-meat-free',
			menu: '&diet=vegetarian'
		},
		'Shellfish-Free': {
			name: 'Shellfish-Free',
			icon: '<i class="fas fa-fish"></i>',
			recipe: '&health=shellfish-free',
			menu: '&intolerances=shellfish'
		},
		'Soy-Free': {
			name: 'Soy-Free',
			icon: '<i class="fas fa-seedling"></i>',
			recipe: '&health=soy-free',
			menu: '&intolerances=soy'
		},
		'Wheat-Free': {
			name: 'Wheat-Free',
			icon: '<i class="fas fa-wheat"></i>',
			recipe: '&health=wheat-free',
			menu: '&intolerances=wheat'
		},
*/
		'Peanut-Free': {
			name: 'Peanut-Free',
			icon: '<svg viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Peanut-Free</title><path d="M69.7029,166.41775 C65.5629,166.41775 62.2029,169.77775 62.2029,173.91775 C62.2029,178.05775 65.5629,181.41775 69.7029,181.41775 C73.8429,181.41775 77.2029,178.05775 77.2029,173.91775 C77.2029,169.77775 73.8429,166.41775 69.7029,166.41775" fill="#000"></path><path d="M160.0878,76.03285 C155.9478,76.03285 152.5878,79.39285 152.5878,83.53285 C152.5878,87.67285 155.9478,91.03285 160.0878,91.03285 C164.2278,91.03285 167.5878,87.67285 167.5878,83.53285 C167.5878,79.39285 164.2278,76.03285 160.0878,76.03285" fill="#000"></path><path d="M99.8314,162.58755 C103.9714,162.58755 107.3314,159.22755 107.3314,155.08755 C107.3314,150.94755 103.9714,147.58755 99.8314,147.58755 C95.6914,147.58755 92.3314,150.94755 92.3314,155.08755 C92.3314,159.22755 95.6914,162.58755 99.8314,162.58755" fill="#000"></path><path d="M99.8314,182.74795 C94.3114,182.74795 89.8314,187.22795 89.8314,192.74795 C89.8314,198.26795 94.3114,202.74795 99.8314,202.74795 C105.3514,202.74795 109.8314,198.26795 109.8314,192.74795 C109.8314,187.22795 105.3514,182.74795 99.8314,182.74795" fill="#000"></path><path d="M190.2162,54.70265 C184.6962,54.70265 180.2162,59.18265 180.2162,64.70265 C180.2162,70.22265 184.6962,74.70265 190.2162,74.70265 C195.7362,74.70265 200.2162,70.22265 200.2162,64.70265 C200.2162,59.18265 195.7362,54.70265 190.2162,54.70265" fill="#000"></path><path d="M190.2162,94.86295 C186.0762,94.86295 182.7162,98.22295 182.7162,102.36295 C182.7162,106.50295 186.0762,109.86295 190.2162,109.86295 C194.3562,109.86295 197.7162,106.50295 197.7162,102.36295 C197.7162,98.22295 194.3562,94.86295 190.2162,94.86295" fill="#000"></path><path d="M245.8375,151.66775 C235.8795,161.62275 223.3225,168.21275 209.5045,170.72975 C189.9295,174.34275 174.3485,189.91775 170.7295,209.50975 C168.2145,223.31575 161.6225,235.87875 151.6685,245.83675 C124.7835,272.72175 81.0395,272.72175 54.1545,245.83675 C41.1545,232.83775 33.9955,215.52175 33.9955,197.08075 C33.9955,178.63875 41.1545,161.32375 54.1535,148.32475 C64.1135,138.36875 76.6755,131.77675 90.5055,129.25875 C110.0745,125.64275 125.6495,110.06175 129.2655,90.46675 C131.7785,76.66975 138.3695,64.11275 148.3235,54.15375 C175.2105,27.27475 218.9545,27.27175 245.8375,54.15475 C272.7205,81.03875 272.7205,124.78275 245.8375,151.66775 M258.5645,41.42675 C224.6625,7.52275002 169.4975,7.52575002 135.5945,41.42775 C135.5945,41.42875 135.5935,41.42875 135.5935,41.42975 C123.0405,53.98675 114.7295,69.82775 111.5605,87.21975 C109.2935,99.50775 99.5175,109.28875 87.2575,111.55375 C69.8345,114.72775 53.9865,123.04075 41.4265,135.59575 C7.5245,169.49875 7.5245,224.66175 41.4265,258.56475 C58.3785,275.51675 80.6445,283.99175 102.9115,283.99175 C125.1775,283.99175 147.4455,275.51575 164.3975,258.56375 C176.9515,246.00475 185.2645,230.15675 188.4335,212.75675 C190.7025,200.47475 200.4835,190.69875 212.7515,188.43575 C230.1645,185.26375 246.0055,176.95075 258.5645,164.39675 C292.4665,130.49275 292.4665,75.32875 258.5645,41.42675" fill="#000"></path></svg>',
			recipe: '&health=peanut-free',
			menu: '&intolerances=peanut'
		},
		'Tree-Nut-Free': {
			name: 'Tree-Nut-Free',
			icon: '<svg viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Tree-Nut-Free</title><path d="M163.817357,250.321072 C161.525357,251.388072 159.382357,252.386072 157.433357,253.322072 C152.775357,255.559072 147.212357,255.563072 142.551357,253.334072 C140.612357,252.406072 138.483357,251.418072 136.205357,250.361072 C112.004357,239.130072 71.5003572,220.333072 71.5003572,186.110072 C71.5003572,175.994072 71.7743572,158.502072 72.3543572,146.652072 C96.6193572,153.754072 121.544357,157.319072 147.020357,157.318072 C173.274357,157.317072 200.113357,153.537072 227.382357,145.993072 C228.154357,157.810072 228.507357,175.433072 228.507357,186.110072 C228.507357,220.195072 188.012357,239.053072 163.817357,250.321072 M59.0883572,116.834072 C63.7913572,87.3220719 85.9603572,68.5320719 124.979357,60.9850719 L124.979357,60.9850719 C134.768357,59.0920719 143.474357,58.1700719 152.001357,58.1700719 C156.048357,58.1700719 160.055357,58.3780719 164.118357,58.7880719 C209.814357,65.1590719 235.652357,84.5420719 240.919357,116.397072 C241.516357,120.012072 238.754357,123.758072 234.494357,125.111072 C174.216357,144.252072 118.617357,144.292072 64.5133572,125.235072 C60.8603572,123.952072 58.5273572,120.342072 59.0883572,116.834072 M258.678357,113.464072 C252.066357,73.4650719 220.167357,48.3850719 166.429357,40.9350719 C166.322357,40.9210719 166.215357,40.9080719 166.108357,40.8970719 C162.051357,40.4830719 158.002357,40.2680719 153.922357,40.2150719 C145.507357,14.0770719 127.655357,8.48707187 126.840357,8.24707187 C123.663357,7.31207187 120.288357,9.11107187 119.348357,12.2880719 C118.409357,15.4660719 120.186357,18.7920719 123.363357,19.7320719 C123.893357,19.9040719 134.782357,23.6510719 141.351357,40.6210719 C134.995357,41.1010719 128.461357,41.9780719 121.561357,43.3130719 C74.9963572,52.3190719 47.2463572,76.7620719 41.3133572,113.998072 C39.5903572,124.779072 45.1013572,135.319072 54.6803572,140.493072 C53.8683572,152.398072 53.5003572,173.882072 53.5003572,186.110072 C53.5003572,231.824072 102.372357,254.504072 128.628357,266.688072 C130.838357,267.714072 132.904357,268.673072 134.786357,269.572072 C139.544357,271.847072 144.761357,272.985072 149.979357,272.985072 C155.214357,272.985072 160.451357,271.840072 165.221357,269.550072 C167.113357,268.642072 169.192357,267.674072 171.416357,266.638072 C197.659357,254.417072 246.507357,231.669072 246.507357,186.110072 C246.507357,174.557072 246.091357,152.729072 244.990357,140.125072 C254.857357,134.804072 260.469357,124.311072 258.678357,113.464072" fill="#000"></path><path d="M82.7211572,115.172672 C83.5191572,115.532672 84.3551572,115.703672 85.1791572,115.703672 C87.4611572,115.703672 89.6451572,114.393672 90.6541572,112.186672 C91.0251572,111.373672 100.001157,92.2676719 122.689157,89.2726719 C125.974157,88.8386719 128.286157,85.8236719 127.852157,82.5386719 C127.419157,79.2546719 124.403157,76.9366719 121.119157,77.3756719 C91.6361572,81.2676719 80.1801572,106.210672 79.7071572,107.270672 C78.3601572,110.286672 79.7101572,113.812672 82.7211572,115.172672" fill="#000"></path></svg>',
			recipe: '&health=tree-nut-free',
			menu: '&intolerances=tree-nut'
		},
		'Vegan': {
			name: 'Vegan',
			icon: '<svg viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Vegan</title><path d="M253.2059,166.576218 C240.1289,200.364218 210.7829,226.795218 165.8729,245.327218 C167.9729,239.361218 169.8259,233.483218 171.4199,227.698218 L221.0559,117.208218 C222.4139,114.184218 221.0639,110.634218 218.0409,109.276218 C215.0179,107.915218 211.4679,109.267218 210.1089,112.290218 L178.8529,181.867218 C179.7999,156.605218 174.9409,133.528218 164.2679,112.811218 C163.1619,110.663218 162.0029,108.572218 160.8039,106.529218 C186.4399,71.1432178 228.1969,55.5652178 244.3849,50.6382178 C252.3579,67.9682178 271.7939,118.546218 253.2059,166.576218 M46.9089,166.576218 C28.3209,118.546218 47.7579,67.9652178 55.7279,50.6402178 C73.9959,56.2082178 124.7789,75.3272178 148.3289,121.175218 C165.2249,154.070218 165.1249,194.526218 148.0959,241.599218 L90.0049,112.290218 C88.6469,109.267218 85.0949,107.916218 82.0739,109.276218 C79.0509,110.634218 77.7009,114.184218 79.0589,117.208218 L137.1439,246.504218 C90.5939,227.922218 60.2649,201.087218 46.9089,166.576218 M257.0109,35.5982178 C255.0719,32.1422178 251.1029,30.3582178 247.2339,31.2112178 C244.6219,31.7832178 186.6459,44.9602178 150.0689,90.8922178 C113.5989,45.0202178 55.6709,31.8222178 52.8809,31.2112178 C49.0149,30.3602178 45.0429,32.1432178 43.1039,35.5982178 C41.5069,38.4442178 4.2889,106.079218 30.0659,172.927218 C46.8639,216.488218 86.2539,248.925218 147.1429,269.335218 C148.0919,269.653218 149.0569,269.805218 150.0049,269.805218 C150.0229,269.805218 150.0409,269.801218 150.0589,269.801218 C150.0769,269.801218 150.0929,269.805218 150.1099,269.805218 C151.0589,269.805218 152.0229,269.653218 152.9719,269.335218 C213.8609,248.925218 253.2509,216.488218 270.0489,172.927218 C295.8259,106.079218 258.6079,38.4442178 257.0109,35.5982178" fill="#000"></path></svg>',
			recipe: '&health=vegan',
			menu: '&diet=vegan'
		},
		'Vegetarian': {
			name: 'Vegetarian',
			icon: '<svg viewBox="0 0 300 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Vegetarian</title><path d="M236.667,187.819 C195.677,187.819 186.75,148.94 186.397,147.319 C185.838,144.646 184.095,142.371 181.66,141.135 C180.382,140.487 178.986,140.162 177.588,140.162 C176.322,140.162 175.054,140.428 173.872,140.965 C147.882,152.746 127.696,141.803 126.902,141.362 C124.446,139.948 121.463,139.791 118.861,140.909 C116.257,142.026 114.328,144.32 113.659,147.074 C113.256,148.737 103.315,187.819 63.334,187.819 C44.402,187.819 29,172.97 29,154.719 C29,143.376 34.937,132.944 44.88,126.816 C48.584,124.533 50.125,119.926 48.539,115.874 C47.076,112.136 46.334,108.209 46.334,104.2 C46.334,85.949 61.736,71.1 80.667,71.1 C81.949,71.1 83.244,71.174 84.628,71.327 C88.611,71.76 92.409,69.512 93.936,65.804 C103.133,43.447 125.14,29 150,29 C174.861,29 196.868,43.447 206.065,65.804 C207.591,69.514 211.391,71.761 215.373,71.327 C216.757,71.174 218.052,71.1 219.334,71.1 C238.266,71.1 253.667,85.949 253.667,104.2 C253.667,108.208 252.926,112.135 251.462,115.875 C249.877,119.926 251.417,124.533 255.122,126.816 C265.065,132.944 271,143.375 271,154.719 C271,172.97 255.599,187.819 236.667,187.819 L236.667,187.819 Z M169.001,161.783 C169.977,161.519 170.957,161.245 171.949,160.935 C173.91,165.863 176.934,172.074 181.423,178.27 C181.577,178.482 181.738,178.697 181.897,178.91 C177.065,182.881 172.741,187.334 169.001,192.205 L169.001,161.783 Z M117.472,179.105 C117.671,178.843 117.88,178.597 118.076,178.332 C122.63,172.154 125.757,165.965 127.811,161.06 C128.804,161.373 129.879,161.679 131,161.975 L131,193.333 C127.133,188.109 122.595,183.343 117.472,179.105 L117.472,179.105 Z M181.017,244.086 L181.017,271 L118.091,271 L118.091,244.086 C118.091,226.229 110.444,209.233 97.476,197.041 C101.761,194.561 105.763,191.554 109.47,188.059 C119.763,196.466 127.279,207.371 131.29,219.812 C132.099,222.322 134.43,223.972 136.996,223.972 C137.306,223.972 137.619,223.948 137.932,223.898 C140.851,223.44 143,220.925 143,217.971 L143,164.081 C147.268,164.468 151.966,164.507 157.001,163.997 L157.001,215.458 C157.001,218.37 159.092,220.861 161.96,221.367 C162.31,221.428 162.659,221.459 163.004,221.459 C165.488,221.459 167.766,219.911 168.64,217.508 C172.842,205.952 180.14,195.795 189.838,187.918 C193.218,191.133 197.175,194.221 201.776,196.902 C188.717,209.099 181.017,226.144 181.017,244.086 L181.017,244.086 Z M270.351,115.611 C271.226,111.882 271.667,108.065 271.667,104.2 C271.667,76.246 248.558,53.462 220.013,53.104 C206.791,27.328 179.976,11 150,11 C120.025,11 93.21,27.328 79.988,53.104 C51.443,53.462 28.334,76.246 28.334,104.2 C28.334,108.066 28.775,111.882 29.65,115.611 C17.862,125.258 11,139.434 11,154.719 C11,182.896 34.477,205.819 63.334,205.819 C68.303,205.819 73.085,205.33 77.681,204.419 C91.541,213.118 100.091,228.138 100.091,244.086 L100.091,280 C100.091,284.97 104.12,289 109.091,289 L190.017,289 C194.987,289 199.017,284.97 199.017,280 L199.017,244.086 C199.017,228.083 207.603,213.045 221.528,204.355 C226.165,205.293 231.202,205.819 236.667,205.819 C265.524,205.819 289,182.896 289,154.719 C289,139.434 282.14,125.258 270.351,115.611 L270.351,115.611 Z" fill="#000"></path></svg>',
			recipe: '&health=vegetarian',
			menu: '&diet=vegetarian'
		}
    };
    
    // create content section   
	var content = $('<section>').attr('id', 'content');
	var contentContainer = $('<div>').addClass('container');
	
	// create map container
	var map = $('<section>').attr('id', 'map');	
    
    // create footer   
	var footer = $('<footer>').attr('id', 'container');
	footer.html('<div class="row"><div class="col s12"><h2>Didn’t find what you’re looking for?</h2><a href="#hero" class="btn-large deep-orange lighten-2">Search Again</a></div></div>');
	
/*	
	// pull food joke API
	var jokeURL = "https://api.spoonacular.com/food/trivia/random?apiKey=e0a3536a362b46d38d50a5b045964f5a";

	$.ajax({
	  url: jokeURL,
	  method: "GET"
	}).then(function(response) {
		console.log('Food Joke API Response: ', response.text);
	});
*/

	
	// on form submit...
	$('#hero form').on('submit', function(event) {
		event.preventDefault();	 
		
		// clear html each time to prevent multiple populating
		$('#content .container').html('');
		
		// only run if search has a value, otherwise show alert
		if ($('#food-type').val() === '') {
			$('div#hero-content .alert').html('Search field cannot be blank.');
			return;
		}
		
		// hide alert once it runs
		$('div#hero-content .alert').html('&nbsp;');
		
		// pull food type value
		var foodType = $('#food-type').val();
		
		// create empty strings to fill in for loop
		var iconString = ''
		var recipeQueryString = '';
		var menuQueryString = '';		
			
		// pull choices and create an array from it
		var restrictionChoices = $('#restrictions input').val();
		var restrictionArray = restrictionChoices.split(', ');
		
		// if restrictions aren't blank, update strings
		if (restrictionChoices !== 'Dietary Restrictions') {
			// for each form option selected, add elements to strings
			restrictionArray.forEach(function(i) {			
				iconString = iconString.concat(restrictions[i].icon);
				recipeQueryString = recipeQueryString.concat(restrictions[i].recipe);
				menuQueryString = menuQueryString.concat(restrictions[i].menu);			
			});
		}

		// pull recipe API
	    var recipeURL = 'https://api.edamam.com/search?app_id=d544ae9f&app_key=c5ad09c117643ee56f64724e79d6a318&to=12' + '&q=' + foodType;	    
	    if (recipeQueryString !== '') {
		    recipeURL = 'https://api.edamam.com/search?app_id=d544ae9f&app_key=c5ad09c117643ee56f64724e79d6a318&to=12' + '&q=' + foodType + recipeQueryString;
	    }	    
	    var recipeRequest = $.ajax({
		  url: recipeURL,
		  method: "GET"
		});
		
		// pull menu API
		var menuURL = 'https://api.spoonacular.com/food/menuItems/search?apiKey=e0a3536a362b46d38d50a5b045964f5a&number=12' + '&query=' + foodType;		
		if (menuQueryString !== '') {
		    menuURL = 'https://api.spoonacular.com/food/menuItems/search?apiKey=e0a3536a362b46d38d50a5b045964f5a&number=12' + '&query=' + foodType + menuQueryString;
	    }	
		var menuRequest = $.ajax({
		  url: menuURL,
		  method: "GET"
		});
		
		$.when(recipeRequest, menuRequest).done(function(responseRecipe, responseMenu) {
			
			// create recipe section
		    var recipes = $('<section>').attr('id', 'recipes').addClass('row');
		    var recipeHeading = $('<div>').addClass('col s12').html('<h2>In the Kitchen</h2>');
		    var recipeCarousel = $('<div>').addClass('owl-carousel owl-theme col s12');
			
			responseRecipe[0].hits.forEach(function(i) {
				
				// create card
				var recipeCard = $('<div>').addClass('card');
				
				// create card image items
				var recipeImageContainer = $('<div>').addClass('card-image');
				var recipeImage = $('<div>').addClass('image');
				recipeImage.attr('style', 'background-image: url(' + i.recipe.image + ')');		
				var recipeButton = $('<a>').addClass('btn-floating btn-large halfway-fab deep-orange lighten-2');
				recipeButton.attr('target', '_blank').attr('href', i.recipe.shareAs);
				recipeButton.html('<i class="fal fa-clipboard-list"></i>');
				
				// create card content items
				var recipeContent = $('<div>').addClass('card-content');		
				var recipeSource = $('<p>').attr('id', 'recipe-source');
				recipeSource.text(i.recipe.source);		
				var recipeName = $('<h3>').attr('id', 'recipe-name');
				recipeName.text(i.recipe.label);		
				var recipeIcons = $('<div>').attr('id', 'icons');
				recipeIcons.html(iconString);		
		
				// append all card items
				recipeImageContainer.append(recipeImage, recipeButton);
				recipeContent.append(recipeSource, recipeName, recipeIcons);
				recipeCard.append(recipeImageContainer, recipeContent);		
				recipeCarousel.append(recipeCard);
				
			});
	
			// append recipe section
			recipes.append(recipeHeading, recipeCarousel);
			contentContainer.append(recipes);
		
			// recipe API carousel
			$('#recipes .owl-carousel').owlCarousel({
				margin: 20,
				responsiveClass:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        575:{
			            items:2
			        },
			        767:{
			            items:3
			        },
			        1199:{
			            items:4,
			            loop:true
			        }
			    },
				loop: true,
				nav:true,
				navText: ['',''],
				dots: false,
				lazyLoad: false,
				autoplay: false,
				navSpeed: 500
			});
			
			// create menus section
		    var menus = $('<section>').attr('id', 'menus').addClass('row');
		    var menusHeading = $('<div>').addClass('col s12').html('<h2>Venture Out</h2>');
		    var menusCarousel = $('<div>').addClass('owl-carousel owl-theme col s12');
		    
		    responseMenu[0].menuItems.forEach(function(i) {
				
				// create card
				var menusCard = $('<div>').addClass('card');
				
				// create card image items
				var menusImageContainer = $('<div>').addClass('card-image');
				var menusImage = $('<div>').addClass('image');
				menusImage.attr('style', 'background-image: url(' + i.image + ')');		
				var menusButton = $('<a>').addClass('btn-floating btn-large halfway-fab cyan');
				// update this when you update restaurant name from restaurant api
				menusButton.attr("data-restaurant-name", i.restaurantChain);
				menusButton.html('<i class="fal fa-map-marker-alt"></i>');
				
				// create card content items
				var menusContent = $('<div>').addClass('card-content');		
				var menusRestaurant = $('<p>').attr('id', 'restaurant');
				menusRestaurant.text(i.restaurantChain);		
				var menusName = $('<h3>').attr('id', 'menu-name');
				menusName.text(i.title);		
				var menusIcons = $('<div>').attr('id', 'icons');
				menusIcons.html(iconString);		
		
				// append all card items
				menusImageContainer.append(menusImage, menusButton);
				menusContent.append(menusRestaurant, menusName, menusIcons);
				menusCard.append(menusImageContainer, menusContent);		
				menusCarousel.append(menusCard);
				
				// on menu item button click...
				menusButton.on("click", function (event) {
					window.location.href="https://www.google.com/maps/search/?api=1&query=" + i.restaurantChain;

					event.preventDefault();
					$("#map").attr("style", "display: block");
					
					var restaurantMap = $(this).attr("data-restaurant-name");
					console.log({ restaurantMap });
	
					var mapURL =
					  "https://api.tomtom.com/search/2/search/" +
					  restaurantMap +
					  ".json?key=gAoUziAVGJqNlbKWdEdy63iT9N34AHHX&lat=" +
					  currentLatitude +
					  "&lon=" +
					  currentLongitude +
					  "&radius=40233";
	
					$.ajax({
					  url: mapURL,
					  method: "GET",
					}).then(function (response) {
					  console.log("Map API Response", response);
					});
	
				});
				
			});
			
			// append menus section
			menus.append(menusHeading, menusCarousel);
			contentContainer.append(menus);
			
			// menu API carousel
			$('#menus .owl-carousel').owlCarousel({
				margin: 20,
				responsiveClass:true,
			    responsive:{
			        0:{
			            items:1
			        },
			        575:{
			            items:2
			        },
			        767:{
			            items:3
			        },
			        1199:{
			            items:4,
			            loop:true
			        }
			    },
				loop: true,
				nav:true,
				navText: ['',''],
				dots: false,
				lazyLoad: false,
				autoplay: false,
				navSpeed: 500
			});
			
		});

		// append content section
		content.append(contentContainer);
		$('body').append(content);
		
		$('body').append(map, footer);	
		$('#map').attr('style', 'display: none');    
	       
		scrollTo('content'); 
		
		// on footer button click...
	    $('footer a.btn-large').on('click', function(event) {
		   event.preventDefault();
		   scrollTo('hero');
	    });
	    
    });

});
