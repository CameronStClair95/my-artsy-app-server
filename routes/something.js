let username = "omar is here"

if(username.includes(" ")){
    let usernameWithUnderscore = username.replaceAll(" ", "_")
    console.log(usernameWithUnderscore)
    return usernameWithUnderscore
  }