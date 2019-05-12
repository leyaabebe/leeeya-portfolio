$(document).ready(function(){
	var w = window.outerWidth;
	var h = window.outerHeight;

	if (w >= 1440){
		// laptop with hdpi screen



	} else if (w >= 1280) {
		// laptop with mdpi screen



	} else if (w >= 1024) {
		console.log(w);
		//  changes to grid based on screen size

		var col4 = $("article").hasClass("col-4");
		var col6 = $("article").hasClass("col-6");
		var col12 = $("article").hasClass("col-12");
		if (col4) {
			//  nothing happens
		} else {
			$("article").removeClass("col-6");
			$("article").removeClass("col-12");
			$("article").addClass("col-4");
		}
		$("header h1").css("font-size","3em");
		$("header h2").css("font-size","2.75em");
		$("h3").css("font-size","1.75em");
		$(".sm-caps").css("font-size",".8em");
		$("h4, p.lead").css("font-size","1.5em");
		$("h5, p, .bp").css("font-size","1.25em");

		$(".thumbnail").show();

		// HOME

		// ARIA 

		$(".aria-hero-bg").css({
			"background-size":"95%",
			"background-position":"center"
		});

	} else if (w >= 768) {
		console.log(w);
		//  changes to grid based on screen size

		var col4 = $("article").hasClass("col-4");
		var col6 = $("article").hasClass("col-6");
		var col12 = $("article").hasClass("col-12");
		if (col6) {
			//  nothing happens
		} else {
			$("article").removeClass("col-4");
			$("article").removeClass("col-12");
			$("article").addClass("col-6");
		}

		$("section").css({
			"grid-column":"3/span 12",
			"margin-bottom": "12vh"
		})

		$("section h3").css("grid-column", "1/span 10");
		$("section div.content").css("grid-column","1/span 9");
		$("section div.vis").css("grid-column","1/span 12");
		$("section div.vis img").css("width", "80%");
		$("section div.content + div.vis").css({
			"grid-row-start":"10",
			"grid-column":"1/span 10"
		});

		$(".thumbnail").show();

		// ARIA 

		$(".aria-hero-bg").css({
			"background-size":"95%",
			"background-position":"center"
		});


		// $("section.abstract div.content + div.vis").css("grid-row-start","13");

		// var viewportHeight = $(window).height();
		// console.log(viewportHeight);


	} else if (w >= 320) {
		console.log(w);

		//  changes to grid based on screen size

		var col4 = $("article").hasClass("col-4");
		var col6 = $("article").hasClass("col-6");
		var col12 = $("article").hasClass("col-12");
		if (col12) {
			//  nothing happens
		} else {
			$("article").removeClass("col-6");
			$("article").removeClass("col-4");
			$("article").addClass("col-12");
		}

		$("section").css({
			"grid-column":"2/span 11",
			"margin-bottom":"3vh"
		})

		$("section h3").css({
			"grid-column": "1/span 11",
			"font-size":"1.85em"
		});
		$("section div.content").css("grid-column","1/span 12");
		$("section div.vis").css("grid-column","1/span 12");
		$("section div.vis img").css("width", "80%");
		$("section div.content + div.vis").css({
			"grid-row-start":"10",
			"grid-column":"1/span 10"
		});

		$("header").css("padding-left","8%");
		$("header h1").css("font-size","2.25em");
		$("header h2").css("font-size","2.15em");
		$("header.aria h1").css("font-size","3.75em");
		$("header.aria h2").css("font-size","2.5em");

		$(".thumbnail").hide();

		$(".sm-caps").css("font-size",".75em");

		// ARIA 

		$(".aria-hero-bg").css({
			"background-size":"300%",
			"background-position":"center"
		});

		$("div.deep, div.turning-forest, div.true-self").css("grid-column","1/span 12");
		$("div.deep").css("grid-row-start","3");
		$("div.turning-forest").css("grid-row-start","4");
		$("div.true-self").css("grid-row-start","5");

		$("img.natalia, p.natalia, ul.natalia").removeClass("natalia");
		$("img.nadya, p.nadya, ul.nadya").removeClass("nadya");


		$("section.storyboard").css({
			"grid-column":"1/span 12",
			"margin-top":"-4vh"
		});
		$("div.s1, div.s2, div.s3, div.s4, div.s5, div.s6, div.s7, div.s8, div.s9").css("grid-column","2/span 11")
		$("div.s1").css("grid-row-start","1");
		$("div.s2").css("grid-row-start","2");
		$("div.s3").css("grid-row-start","3");
		$("div.s4").css("grid-row-start","4");
		$("div.s5").css("grid-row-start","5");
		$("div.s6").css("grid-row-start","6");
		$("div.s7").css("grid-row-start","7");
		$("div.s8").css("grid-row-start","8");
		$("div.s9").css("grid-row-start","9");

	}

	$(window).resize(function(){
		var w = window.outerWidth;
		var h = window.outerHeight;
		if (w >= 1024) {

			//  changes to grid based on screen size

			var col4 = $("article").hasClass("col-4");
			var col6 = $("article").hasClass("col-6");
			var col12 = $("article").hasClass("col-12");
			if (col4){
				// nothing happens
			} else if (col6) {
				$("article").removeClass("col-6");
				$("article").addClass("col-4");
			} else if (col12) {
				$("article").removeClass("col-12");
				$("article").addClass("col-4");
			}

			// ARIA 

			$(".aria-hero-bg").css({
				"background-size":"95%",
				"background-position":"center"
			});

			$(".thumbnail").show();
		} else if (w >= 768) {

			//  changes to grid based on screen size

			var col4 = $("article").hasClass("col-4");
			var col6 = $("article").hasClass("col-6");
			var col12 = $("article").hasClass("col-12");
			if (col6){
				// nothing happens
			} else if (col4) {
				$("article").removeClass("col-4");
				$("article").addClass("col-6");
			} else if (col12) {
				$("article").removeClass("col-12");
				$("article").addClass("col-6");
			}

			$("section").css({
				"grid-column":"3/span 12",
				"margin-bottom": "12vh"
			})

			$("section h3").css("grid-column", "1/span 10");
			$("section div.content").css("grid-column","1/span 9");
			$("section div.vis").css("grid-column","1/span 12");
			$("section div.vis img").css("width", "80%");
			$("section div.content + div.vis").css({
				"grid-row-start":"10",
				"grid-column":"1/span 10"
			});

			$(".thumbnail").show();

			// ARIA 

			$(".aria-hero-bg").css({
				"background-size":"95%",
				"background-position":"center"
			});
		} else if (w >= 320) {
			
			//  changes to grid based on screen size
			
			var col4 = $("article").hasClass("col-4");
			var col6 = $("article").hasClass("col-6");
			var col12 = $("article").hasClass("col-12");
			if (col12){
				// nothing happens
			} else if (col6) {
				$("article").removeClass("col-6");
				$("article").addClass("col-12");
			} else if (col4) {
				$("article").removeClass("col-4");
				$("article").addClass("col-12");
			}

			$("section").css({
				"grid-column":"2/span 11",
				"margin-bottom":"3vh"
			})

			$("section h3").css({
				"grid-column": "1/span 11",
				"font-size":"1.85em"
			});
			$("section div.content").css("grid-column","1/span 12");
			$("section div.vis").css("grid-column","1/span 12");
			$("section div.vis img").css("width", "80%");
			$("section div.content + div.vis").css({
				"grid-row-start":"10",
				"grid-column":"1/span 10"
			});

			$("header").css("padding-left","8%");
			$("header h1").css("font-size","2.25em");
			$("header h2").css("font-size","2.15em");
			$("header.aria h1").css("font-size","3.75em");
			$("header.aria h2").css("font-size","2.5em");

			$(".thumbnail").hide();

			$(".sm-caps").css("font-size",".75em");

			// ARIA 

			$(".aria-hero-bg").css({
				"background-size":"300%",
				"background-position":"center"
			});

			$("div.deep, div.turning-forest, div.true-self").css("grid-column","1/span 12");
			$("div.deep").css("grid-row-start","3");
			$("div.turning-forest").css("grid-row-start","4");
			$("div.true-self").css("grid-row-start","5");

			$("img.natalia, p.natalia, ul.natalia").removeClass("natalia");
			$("img.nadya, p.nadya, ul.nadya").removeClass("nadya");


			$("section.storyboard").css({
				"grid-column":"1/span 12",
				"margin-top":"-4vh"
			});
			$("div.s1, div.s2, div.s3, div.s4, div.s5, div.s6, div.s7, div.s8, div.s9").css("grid-column","2/span 11")
			$("div.s1").css("grid-row-start","1");
			$("div.s2").css("grid-row-start","2");
			$("div.s3").css("grid-row-start","3");
			$("div.s4").css("grid-row-start","4");
			$("div.s5").css("grid-row-start","5");
			$("div.s6").css("grid-row-start","6");
			$("div.s7").css("grid-row-start","7");
			$("div.s8").css("grid-row-start","8");
			$("div.s9").css("grid-row-start","9");			
		}
	})

	$("nav ul li a").on("click", function(){
		if($(this).hasClass("active")){
			console.log("link is already active");
		}else {
			$("nav ul li a.active").removeClass("active");
			$(this).addClass("active");
		}
	})


	// FILTER PROJECTS
	// will be removing and adding active class to the selected keyword
	// will be hiding and showing content
	// IDs are UX, IXD, BRANDING, ALL


	$("#ALL").on("click", function(){
		// console.log("clicked all");
		if($("#ALL").hasClass("active")){
			console.log("all is active");
		}else {
			// console.log($("section.filter ul li.active").text());
			$("section.filter ul li.active").removeClass("active");
			// console.log("removed class");
			$("#ALL").addClass("active");
			$(".no-branding").show();
			$(".no-ixd").show();
		}
	})

	$("#BRAND").on("click", function(){
		// console.log("clicked branding");
		if($("#BRAND").hasClass("active")){
			console.log("branding is active");
		}else {
			// console.log($("section.filter ul li.active").text());
			$("section.filter ul li.active").removeClass("active");
			// console.log("removed class");
			$("#BRAND").addClass("active");
			$(".no-ixd").show();
			$(".no-branding").hide();
		}
	})

	$("#IXD").on("click", function(){
		// console.log("clicked ixd");
		if($("#IXD").hasClass("active")){
			console.log("ixd is active");
		}else {
			// console.log($("section.filter ul li.active").text());
			$("section.filter ul li.active").removeClass("active");
			// console.log("removed class");
			$("#IXD").addClass("active");
			$(".no-branding").show();
			$(".no-ixd").hide();
		}
	})

	$("#UX").on("click", function(){
		// console.log("clicked ux");
		if($("#UX").hasClass("active")){
			console.log("ux is active");
		}else {
			// console.log($("section.filter ul li.active").text());
			$("section.filter ul li.active").removeClass("active");
			// console.log("removed class");
			$("#UX").addClass("active");
			$(".no-branding").show();
			$(".no-ixd").show();
		}
	})

	// scroll through available images by changing src attribute
	// targeting wireframes

	var wfPos = 0;
	$("section.wireframes p.left").css("opacity","0.5");
	var wfSrc = ["css/images/crunchyroll/cr-wf-homepage.svg", "css/images/crunchyroll/cr-wf-video.svg", "css/images/crunchyroll/cr-wf-forum.svg"];
	var wfTitle = ["Homepage", "Video comments", "Forum"];

	$("section.wireframes p.right").on("click", function(){
		wfPos++;
		if(wfPos < 3){
			$("#wireframes").attr("src", wfSrc[wfPos]);
			$("section.wireframes h3").text(wfTitle[wfPos]);
			$("section.wireframes p.left").css("opacity","1");
		} else {
			wfPos = 0;
			$("#wireframes").attr("src", wfSrc[wfPos]);
			$("section.wireframes h3").text(wfTitle[wfPos]);
			$("section.wireframes p.left").css("opacity","0.5");
		}
	})

	$("section.wireframes p.left").on("click", function(){
		if(wfPos > 0) {
			wfPos--;
			$("#wireframes").attr("src", wfSrc[wfPos]);
			$("section.wireframes h3").text(wfTitle[wfPos]);
		}

		if (wfPos == 0) {
			$("section.wireframes p.left").css("opacity","0.5");
		}
	})

	// target mockups

	var hfPos = 0;
	$("section.high-fidelity p.left").css("opacity", "0.5");
	var hfSrc = ["css/images/crunchyroll/cr-hf-homepage-closed.png", "css/images/crunchyroll/cr-hf-homepage-expanded.png", "css/images/crunchyroll/cr-hf-video.png", "css/images/crunchyroll/cr-hf-forum.png"];
	var hfTitle = ["Homepage—<em>Closed Dropdowns</em>", "Homepage—<em>Expanded</em>", "Video comments", "Forum"];

	$("section.high-fidelity p.right").on("click", function() {
		hfPos++;
		if(hfPos < 4) {
			$("#high-fidelity").attr("src", hfSrc[hfPos]);
			$("section.high-fidelity h3").html(hfTitle[hfPos]);
			$("section.high-fidelity p.left").css("opacity","1");
		} else {
			hfPos = 0;
			$("#high-fidelity").attr("src", hfSrc[hfPos]);
			$("section.high-fidelity h3").html(hfTitle[hfPos]);
			$("section.high-fidelity p.left").css("opacity","0.5");
		}
	})

	$("section.high-fidelity p.left").on("click",function(){
		if(hfPos > 0) {
			hfPos--;
			$("#high-fidelity").attr("src", hfSrc[hfPos]);
			$("section.high-fidelity h3").html(hfTitle[hfPos]);
		}

		if (hfPos == 0) {
			$("section.high-fidelity p.left").css("opacity","0.5");
		}
	})

	// target user tasks
	// inside-scene toddy

	var utPos = 0;

	$("section.ut-steps p.left").css("opacity", "0.5");

	var utSrc = ["css/images/inside-scene/ut-one/alt-step-one.png", "css/images/inside-scene/ut-one/alt-step-one-p3.png", "css/images/inside-scene/ut-one/alt-step-two.png", "css/images/inside-scene/ut-one/alt-step-three.png", "css/images/inside-scene/ut-one/alt-step-three-p2.png", "css/images/inside-scene/ut-one/alt-step-four.png", "css/images/inside-scene/ut-one/alt-step-five.png", "css/images/inside-scene/ut-one/alt-step-five-p2.png", "css/images/inside-scene/ut-one/alt-step-five-p3.png", "css/images/inside-scene/ut-one/alt-step-five-p4.png", "css/images/inside-scene/ut-one/alt-step-six.png", "css/images/inside-scene/ut-one/alt-step-six-p2.png", "css/images/inside-scene/ut-one/alt-step-six-p3.png", "css/images/inside-scene/ut-one/alt-step-six-p4.png"];

	var utStep = ["1. Start watching <em>Suits</em>.", "2. Pause for Inside Scene.", "3. Select Jessica from the cast. (1/3)", "3. Select Jessica from the cast. (2/3)", "3. Select Jessica from the cast. (3/3)", "4. Select the first featured outfit.", "5. Review & compare similar items. (1/4)", "5. Review & compare similar items. (2/4)", "5. Review & compare similar items. (3/4)", "5. Review & compare similar items. (4/4)", "6. Add an outfit to your wishlist. (1/3)", "6. Add an outfit to your wishlist. (2/3)", "6. Add an outfit to your wishlist. (3/3)", "7. Press play to return to episode."];

	$("section.ut-steps p.right").on("click", function() {
		utPos++;
		if(utPos < 15) {
			$("#ut-toddy").attr("src", utSrc[utPos]);
			$("section.ut-steps h3").html(utStep[utPos]);
			$("section.ut-steps p.left").css("opacity","1");
		} else {
			utPos = 0;
			$("#ut-toddy").attr("src", utSrc[utPos]);
			$("section.ut-steps h3").html(utStep[utPos]);
			$("section.ut-steps p.left").css("opacity","0.5");
		}
	})

	$("section.ut-steps p.left").on("click",function(){
		if(utPos > 0) {
			utPos--;
			$("#ut-toddy").attr("src", utSrc[utPos]);
			$("section.ut-steps h3").html(utStep[utPos]);
		}

		if (utPos == 0) {
			$("section.ut-steps p.left").css("opacity","0.5");
		}
	})


	// target user tasks
	// inside-scene kelly

	var ut2Pos = 0;

	$("section.ut-steps-2 p.left").css("opacity", "0.5");

	var ut3Src = ["css/images/inside-scene/ut-two/alt-step-one-p2.png", "css/images/inside-scene/ut-two/alt-step-one-p3.png", "css/images/inside-scene/ut-two/alt-step-two.png", "css/images/inside-scene/ut-two/alt-step-three.png", "css/images/inside-scene/ut-two/alt-step-three-p2.png","css/images/inside-scene/ut-two/alt-step-three-p3.png","css/images/inside-scene/ut-two/alt-step-three-p4.png","css/images/inside-scene/ut-two/alt-step-three-p5.png","css/images/inside-scene/ut-two/alt-step-four.png"];

	var ut3Step = ["1. Start watching <em>Sriracha</em>.", "2. Pause for Inside Scene.", "3. Select a product", "4. Purchase a product. (1/5)", "4. Purchase a product. (2/5)", "4. Purchase a product. (3/5)", "4. Purchase a product. (4/5)", "4. Purchase a product. (5/5)", "5. Press play to return to episode."];

	$("section.ut-steps-2 p.right").on("click", function() {
		ut2Pos++;
		if(ut2Pos < 10) {
			$("#ut-kelly").attr("src", ut2Src[ut2Pos]);
			$("section.ut-steps-2 h3").html(ut2Step[ut2Pos]);
			$("section.ut-steps-2 p.left").css("opacity","1");
		} else {
			ut2Pos = 0;
			$("#ut-kelly").attr("src", ut2Src[ut2Pos]);
			$("section.ut-steps-2 h3").html(ut2Step[ut2Pos]);
			$("section.ut-steps-2 p.left").css("opacity","0.5");
		}
	})

	$("section.ut-steps-2 p.left").on("click",function(){
		if(ut2Pos > 0) {
			ut2Pos--;
			$("#ut-kelly").attr("src", ut2Src[ut2Pos]);
			$("section.ut-steps-2 h3").html(ut2Step[ut2Pos]);
		}

		if (ut2Pos == 0) {
			$("section.ut-steps-2 p.left").css("opacity","0.5");
		}
	})


	// target user tasks
	// inside-scene chase

	var ut3Pos = 0;

	$("section.ut-steps-3 p.left").css("opacity", "0.5");

	var ut3Src = ["css/images/inside-scene/ut-three/alt-step-one-p2.png","css/images/inside-scene/ut-three/alt-step-two.png","css/images/inside-scene/ut-three/alt-step-three.png","css/images/inside-scene/ut-three/alt-step-four.png","css/images/inside-scene/ut-three/alt-step-five.png","css/images/inside-scene/ut-three/alt-step-six.png"];

	var ut3Step = ["1. Re-watch an episode of <em>Black Sails</em>.", "2. Pause for Inside Scene.", "3. Switch from 'Cast' to 'Looks.'", "4. Select 'Costumes.'", "5. Learn about the designers.", "6. Press play to return to episode."];

	$("section.ut-steps-3 p.right").on("click", function() {
		ut3Pos++;
		if(ut3Pos < 10) {
			$("#ut-chase").attr("src", ut3Src[ut3Pos]);
			$("section.ut-steps-3 h3").html(ut3Step[ut3Pos]);
			$("section.ut-steps-3 p.left").css("opacity","1");
		} else {
			ut3Pos = 0;
			$("#ut-chase").attr("src", ut3Src[ut3Pos]);
			$("section.ut-steps-3 h3").html(ut3Step[ut3Pos]);
			$("section.ut-steps-3 p.left").css("opacity","0.5");
		}
	})

	$("section.ut-steps-3 p.left").on("click",function(){
		if(ut3Pos > 0) {
			ut3Pos--;
			$("#ut-chase").attr("src", ut3Src[ut3Pos]);
			$("section.ut-steps-3 h3").html(ut3Step[ut3Pos]);
		}

		if (ut3Pos == 0) {
			$("section.ut-steps-3 p.left").css("opacity","0.5");
		}
	})





















})