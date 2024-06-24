$(document).ready(function () {
  $.ajax({
    url: "https://maje.pythonanywhere.com/api/local_governments/",
    type: "GET",
    headers: {
      accept: "application/json",
      "X-CSRFToken":
        "Onzn2vB035p98q8WqULsaWuxxnO0cOweIfmF6fDEN5TVRDIQCklp8vuaa6JUCHM7",
    },
    success: function (data) {
      console.log("Data received:", data); // Log the received data for debugging
      data.forEach(function (localGovernment) {
        var card = `
          <div class="card text-center">
            <div class="card-header"></div>
            <div class="card-body">
              <h5 class="card-title">${localGovernment.lga_name}</h5>
              <p class="card-text">local_government_id ${localGovernment.lga_id}</p>
              <a href="lgaresult.html?lg_id=${localGovernment.lga_id}" class="btn btn-primary">View  Results </a>
            </div>
          </div>
        `;

        if (localGovernment.lga_name.length) {
          $("#polling-units").append(card);
        }
      });
    },
    error: function (error) {
      console.log("Error:", error);
    },
  });
});
