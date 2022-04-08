function getSiteName(url) {
    let x = url.replace("https://", "").replace(".com", "");
    x[0].toUpperCase() + x.substring(1);
    return x;
  };
  
  module.exports = getSiteName