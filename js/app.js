var demoApp = angular.module('demoApp', ['ui.router','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

demoApp.controller('HomeController',function($scope){
	var vm = this;
	vm.name = "abc";
});

demoApp.controller('categoryController',function($scope, $interval, $timeout, $document, $window, $q){
	var vm = this;
	vm.categoriesJSON =    {
		"APIResponse": {
			"cats": [{
				"id": 501,
				"name": "Product& Services",
				"children": [{
					"id": 509,
					"name": "For Medical Groups and Practices",
					"children": [{
						"id": 591,
						"name": "Electronic Health Records",
						"children": [],
						"parentId": 509
					}, {
						"id": 547,
						"name": "Medical Billing",
						"children": [],
						"parentId": 509
					}, {
						"id": 597,
						"name": "Patient Engagement",
						"children": [],
						"parentId": 509
					}, {
						"id": 543,
						"name": "Order Transmission",
						"children": [],
						"parentId": 509
					},{
						"id": 543,
						"name": "Secure Text Messaging",
						"children": [],
						"parentId": 509
					}]
				}, {
					"id": 506,
					"code": "CV",
					"name": "For Hospitals and Health Systems",
					"children": [{
						"id": 526,
						"name": "Electronic Health Records",
						"children": [],
						"parentId": 506
					}, {
						"id": 526,
						"name": "Revenue Cycle Management",
						"children": [],
						"parentId": 506
					}, {
						"id": 526,
						"name": "Care Coordination",
						"children": [],
						"parentId": 506
					}, {
						"id": 526,
						"name": "Population Health",
						"children": [],
						"parentId": 506
					},
					{
						"id": 526,
						"name": "Epocrates",
						"children": [],
						"parentId": 506
					}]
				}]
			}, {
				"id": 502,
				"code": "LVB",
				"name": "Industry Solutions",
				"children": [{
					"id": 517,
					"code": "LA",
					"name": "Books",
					"children": [{
						"id": 520,
						"name": "Mathematics",
						"children": []
					}, {
						"id": 520,
						"name": "Science",
						"children": []
					}, {
						"id": 520,
						"name": "Social",
						"children": []
					}, {
						"id": 520,
						"name": "English",
						"children": []
					}]
				}, {
					"id": 514,
					"code": "LV",
					"name": "Others",
					"children": [{
						"id": 594,
						"name": "Results",
						"children": []
					}, {
						"id": 594,
						"name": "Higher studies",
						"children": []
					}, {
						"id": 594,
						"name": "Sports",
						"children": []
					}, {
						"id": 594,
						"name": "Achivements",
						"children": []
					}]
				}]
			}, {
				"id": 514,
				"code": null,
				"name": "Results& Insights",
				"children": null,
				"parentId": 0
			},
			{
				"id": 514,
				"code": null,
				"name": "About athenahealth",
				"children": null,
				"parentId": 0
			}]
		}
	};	

	 let intervalObj = $interval(() => {
                $interval.cancel(intervalObj);
                vm.categories = vm.categoriesJSON.APIResponse.cats;
                angular.forEach(vm.categories, (cat) => {
                    angular.forEach(cat.children, (child, index) => {
                        child.displayChildren = [];
                        child.displayChildren[0] = [];
                        let colCnt = 0;
                        angular.forEach(child.children, (gChild, index) => {
                            child.displayChildren[colCnt].push(gChild);
                            if ((index+1) % 9 === 0 && index+1 / 9 >= 1) {
                                //child.gChildCount = 0;
                                colCnt++;
                                child.displayChildren[colCnt] = [];
                            }
                        });
                    });
                });
        }, 200);

	 vm.catHover = function(cat) {
        let vm = this;
        cat.open = true;
        angular.forEach(vm.categories, function (item, index, arr) {
            if (cat.name !== item.name) {
                item.open = false;
            }
            if (index === arr.length - 1) {
                resolve();
            }
        });
    }
});

demoApp.controller('mainController',function($scope, $interval){
	var vm = this;
	$scope.myInterval = 5000;
	$scope.noWrapSlides = false;
	var images = [];
	var obj = {
		"img":'ligmie_preval_wat.png', 
		"text": "Data used in this tool is solely based upon historical data from athenahealth clients as well as third-party research. The results displayed by this tool do not guarantee any results for you or other individual practices. ",
		"radio": 'one'
	};
	var obj1 = {
		"img":'kevin_weaver_watertown.png', 
		"text": "Software can't fix the problems it created. It takes a network of providers, patients, and payers to provide the insights you need to unbreak healthcare, and payers to provide the insights",
		"radio": 'two'
	};
	var obj2 = {
		"img":'james_dantzler_atlanta_rec.png', 
		"text": "See how insights from our network contribute to stronger EHR, revenue cycle, population health, and more services—and keep your health system future-proof. ",
		"radio": 'three'
	};

	images.push(obj);
	images.push(obj1);
	images.push(obj2);

	var slides = $scope.slides = [];
	$scope.addSlide = function(i) {
		$scope.slides.push({
		  image: 'assets/images/'+ images[i].img,
		  text: images[i].text,
		  radio: images[i].radio
		});
	};
	for (var i=0; i<3; i++) {
		$scope.addSlide(i);
	}

	$scope.init = function(text, index){
		$scope.currTxt = text;
	}

	$scope.image = slides[0].image;
	$scope.currTxt = slides[0].text;
	$scope.radio = slides[0].radio;

	var count = 0;
	$interval(function() {
		$scope.image = slides[count%3].image;
		$scope.currTxt = slides[count%3].text;
		$scope.radio = slides[count%3].radio;
		count == 2 ? count = 0 : count++;
	}, 5000);

	$scope.changed = function(index){
		$scope.image = slides[index].image;
		$scope.currTxt = slides[index].text;
	};
});

	