
function guessGifts(wishlist, presents) {
    return wishlist
      .filter(whish =>
        presents.some(
          present =>
            present.size === whish.size &&
            present.clatters === whish.clatters &&
            present.weight === whish.weight
        )
      )
      .map(whish => whish.name)
  }
  ////////////////////////////


  function guessGifts(wishlist, presents) {
    var r = [];
    presents.forEach(function(p){
      wishlist.forEach(function(w){
        if (p.size == w.size && p.clatters == w.clatters && p.weight == w.weight && r.indexOf(w.name) == -1) r.push(w.name);
      });
    });
    return r;
  }
  ////////////////////////////////////


  function guessGifts(wishlist, presents) {
    return wishlist.filter(function(v) {
      return presents.some(function(p) {return p.size == v.size && p.clatters == v.clatters && p.weight == v.weight;});
    }).map(function(v) {return v.name;});
  }