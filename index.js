 

fetch(" https://api.ibb.gov.tr/havakalitesi/OpenDataPortalHandler/GetAQIStations")
then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
 
 
 