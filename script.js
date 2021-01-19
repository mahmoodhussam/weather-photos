
let btn = document.getElementById("btn");

btn.addEventListener('click',function(){
			let city = document.getElementById("city").value;
			console.log("DONE");
			$.ajax({
			url : `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8f6d2ffae5a4b97059863dad6272fd55`,
			dataType:"json",
			cache:false,
			success:function(data,status){
				document.getElementById("city-name").textContent = `${data.name} ,${data.sys.country}`;				
				document.getElementById('icon').src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
				document.getElementById("city-temp").innerHTML=`${Math.round(data.main.temp)}<sup id="circle">o</sup>c`;
				document.getElementById("city-status").textContent=`${data.weather[0].main}`;
				document.getElementById("city-m").innerHTML=`${Math.round(data.main.temp_max)}<sup>o</sup>c / ${Math.round(data.main.temp_min)}<sup>o</sup>c`;	
				console.log(data);
				console.log(status);
			},
			error:function(xhr,textStatus,err){
				document.getElementById("city-name").textContent = `The country name is not corect`;
				document.getElementById('icon').src='';
				document.getElementById("city-temp").innerHTML='';
				document.getElementById("city-status").textContent=``;
				document.getElementById("city-m").innerHTML='';	
				console.log(xhr);
				console.log(textStatus);
				console.log(err);
			}
		});
		$.ajax({
			url : `https://pixabay.com/api/?key=19944081-ffe1e69615260f50e475cf03f&q=${city}&image_type=photo`,
			dataType:"json",
			cache:false,
			success:function(data,status){
				document.querySelector('.container').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${data.hits[0].largeImageURL})`;
				console.log(data);
				console.log(status);
			},
			error:function(xhr,textStatus,err){
				document.querySelector('.container').style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(./b2.jpg)`;
				console.log(xhr);
				console.log(textStatus);
				console.log(err);
			}
		});	
	});
