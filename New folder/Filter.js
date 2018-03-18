

myapp.filter("genderFilter",function(){

		return function(gender){
			switch(gender)
			{
				case '1':return 'Male';
						break;
				case '2':return 'Female';
						break;
				case '3':return 'Not Valid';
						break;
			}
		};
	});