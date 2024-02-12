const findMyState = () =>{
    const status = document.querySelector('.find-state');
    status.textContent = " Allow to detect your location...";

    const success = (position) => {
        status.textContent = "detecting your location...";
        console.log(position)

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
       // console.log(latitude + ' '  + longitude)
       const geoApiUrl= 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en'
       fetch(geoApiUrl)
       .then(res => res.json())
       .then(data => {
        //console.log(data)
        status.textContent = data.principalSubdivision
       })
    } 
    const error = () => {
        status.textContent='unable to retrive your location';
    }
    navigator.geolocation.getCurrentPosition(success,error);


}
document.querySelector('.find-state').addEventListener('click',findMyState);