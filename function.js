async function search() {
  const response = await fetch("https://api.github.com/users/DessaOliveira");
  const profile = await response.json();
  console.log(profile);

  document.getElementById("name").innerHTML = profile?.name;

  document.getElementById("twitter").innerHTML = profile?.twitter_username;

  document.getElementById("foto").innerHTML = profile?.avatar_url;

  document.getElementById("bio"). innerHTML = profile?.bio;

  document.getElementById("localizacao").innerHTML = profile?.location;
  


}

search();
