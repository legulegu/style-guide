module.exports = function() {
  var countries = [
    { value: "Andorra", data: "AD" },
    { value: "Zimbabwe", data: "ZZ" }
  ];

  $("#auto-complete-search").autocomplete({
    lookup: countries,
    onSelect: function(suggestion) {

    }
  });
};
