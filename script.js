
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
				document.getElementById("city-temp").innerHTML=`${Math.round(data.main.temp)}<sup id="circle">&#9898;</sup>c`;
				document.getElementById("city-status").textContent=`${data.weather[0].main}`;
				document.getElementById("city-m").innerHTML=`${Math.round(data.main.temp_max)}<sup>&#9898;</sup>c / ${Math.round(data.main.temp_min)}<sup>&#9898;</sup>c`;	
				console.log(data);
				console.log(status);
			},
			error:function(xhr,textStatus,err){
				document.getElementById("city-name").textContent = `The country name is not corect`;				
				console.log(xhr);
				console.log(textStatus);
				console.log(err);
			}
		});
	});