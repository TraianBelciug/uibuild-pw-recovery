function getRealName(username) {
    let x = username;
    let y = x.replace(".", " ");
    let z = y.split();
    for (let i = 0; i < z.length; i++) {
      z[i] = z[i][0].toUpperCase() + z[i].substr(1);
    }
    return z.join(" ");
  };
  
  module.exports = getRealName