$(document).ready(function () {
  $.ajax({
    url: "https://maje.pythonanywhere.com/api/polling_units/",
    type: "GET",
    headers: {
      accept: "application/json",
      "X-CSRFToken":
        "frU2o1hH8KtSgSzFqWzLdWSXb1OXtrnm9jHksLjlSKXEZ59zCm9IbvSAOKJRTkDf",
    },
    success: function (data) {
      data.forEach(function (pollingUnit) {
        var card = `
          <div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">${pollingUnit.polling_unit_name}</h5>
              <p class="card-text">polling_id ${pollingUnit.polling_unit_id}</p>
              <a href="pollingresult.html?id=${pollingUnit.uniqueid}" class="btn btn-primary">View Results</a>
            </div>
          </div>
        `;

        if (pollingUnit.polling_unit_name.length) {
          $("#polling-units").append(card);
        }
      });
    },
    error: function (error) {
      console.log("Error:", error);
    },
  });
});
