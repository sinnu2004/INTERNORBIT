let countdownInterval;

    function startCountdown() {
      clearInterval(countdownInterval); // Clear any old countdown

      let date = document.getElementById("dateInput").value;
      let time = document.getElementById("timeInput").value;

      if (!date || !time) {
        document.getElementById("countdown").innerHTML = "⚠️ Please select both date and time.";
        return;
      }

      let targetDateTime = new Date(date + "T" + time).getTime();

      countdownInterval = setInterval(function () {
        let now = new Date().getTime();
        let distance = targetDateTime - now;

        if (distance <= 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown").innerHTML = "✅ Time's up!";
          return;
        }

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML =
          days + "d " + hours + "h " + minutes + "m " + seconds + "s";
      }, 1000);
    }