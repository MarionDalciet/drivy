'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);


//exo1
function price_1(time_c, distance_c){
  var p=time_c+distance_c;
  return p ;
}

function exo_1(){
	for(var i = 0; i<rentals.length; i++ )
	{
		var time_c;
		var distance_c;
		var RD = new Date(rentals[i].returnDate);
		var PUD = new Date(rentals[i].pickupDate);
		var Diff = Math.abs(RD.getTime()-PUD.getTime());
		var J = Math.ceil(Diff/(1000*3600*24))+1; // pour que si on la loue le matin et on la rende le soir la date ne soit pas égale à 0
		for( var j = 0; j<cars.length; j++)
		{
			if( rentals[i].carId == cars[j].id) 
			{
				time_c = J*cars[j].pricePerDay;
				distance_c = rentals[i].distance * cars[j].pricePerKm;
			}
		}
		
		rentals[i].price=price_1(time_c, distance_c);
		
	}
	
	
}

exo_1();



function price_2(price_d, time){

   var p=price_d;
  
  if(1<time && time<4){
     p=price_d*0.9;
  }
  if(4<=time && time<10){
     p=price_d*0.7;
  }
  if(time>=10)
  {
     p = price_d*0.5;
  }
  return p;
}

function exo_2(){
	for(var i = 0; i<rentals.length; i++ )
	{
		var time_c;
		var distance_c;
		var RD = new Date(rentals[i].returnDate);
		var PUD = new Date(rentals[i].pickupDate);
		var Diff = Math.abs(RD.getTime()-PUD.getTime());
		var J = Math.ceil(Diff/(1000*3600*24))+1; // pour que si on la loue le matin et on la rende le soir la date ne soit pas égale à 0
		for( var j = 0; j<cars.length; j++)
		{
			if( rentals[i].carId == cars[j].id) 
			{
				var price_D =price_2(cars[j].pricePerDay,J);
				time_c = J*price_D;
				distance_c = rentals[i].distance * cars[j].pricePerKm;
			}
			
		}
		
		rentals[i].price=price_1(time_c, distance_c);
		
	}
}

exo_2();



function commission(prix){
  var p = prix *0.3;
  return p;
}

function insurance(prix){
  var p = commission(prix)/2;
  return p;
}

function roadside_assistance(time){
  return time ; 
}

function drivy(prix, time){
  var p = commission(prix) -insurance(prix) - roadside_assistance(time);
  return p ;
}


function exo_3(){
	for(var i = 0; i<rentals.length; i++ )
	{
		var RD = new Date(rentals[i].returnDate);
		var PUD = new Date(rentals[i].pickupDate);
		var Diff = Math.abs(RD.getTime()-PUD.getTime());
		var J = Math.ceil(Diff/(1000*3600*24))+1;
		rentals[i].commission.insurance = insurance(rentals[i].price);
		rentals[i].commission.assistance = roadside_assistance(J);
		rentals[i].commission.drivy = drivy(rentals[i].price, J);
		
	}
}

exo_3();

function exo_4()
{
	for(var i =0; i<rentals.length; i++)
	{
		var RD = new Date(rentals[i].returnDate);
		var PUD = new Date(rentals[i].pickupDate);
		var Diff = Math.abs(RD.getTime()-PUD.getTime());
		var J = Math.ceil(Diff/(1000*3600*24))+1;
		if(rentals[i].options.deductibleReduction )
		{
			rentals[i].price = rentals[i].price+4*J;
			rentals[i].commission.drivy = rentals[i].commission.drivy +4*J;
		}
	}
			
}

exo_4();

function exo_5(){
	for(var i=0; i<actors.length ; i++)
	{
		for(var j=0; j<rentals.length; j++)
		{
			if( actors[i].rentalId == rentals[j].id)
			{
	
				for( var k=0; k< actors[i].payment.length; k++)
					
				{
					if(actors[i].payment[k].who== "driver")
					{
						actors[i].payment[k].amount=rentals[j].price;
					}
					
					if(actors[i].payment[k].who=="owner")
					{
						actors[i].payment[k].amount=rentals[j].price- commission(rentals[j].price);
					}
					
					if(actors[i].payment[k].who== "insurance")
					{
						actors[i].payment[k].amount=rentals[j].commission.insurance;
					}
					
					if(actors[i].payment[k].who== "assistance")
					{
						actors[i].payment[k].amount=rentals[j].commission.assistance;
					}
					
					if(actors[i].payment[k].who== "drivy")
					{
						actors[i].payment[k].amount=rentals[j].commission.drivy;
					}
				}
				
			}
		}
	}
}

exo_5();



  



    





