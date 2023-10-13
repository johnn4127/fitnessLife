import React from 'react'

const Bmi = async () => {
    const  url = 'https://fitness-calculator.p.rapidapi.com/bodyfat?age=25&gender=male&weight=80&height=178&neck=50&waist=96&hip=92';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0de2017cb2msh31d23ba8200d806p1cf1a2jsna4b99eb183c6',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}




  return (
    <div>
    
    </div>
  )
}

export default Bmi