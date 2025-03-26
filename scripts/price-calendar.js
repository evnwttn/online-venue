const userDataPrices = [
  { date: "2025-02-03", price: "100" },
  { date: "2025-02-14", price: "75" },
];

function priceCalendar(option = {}) {
  const defaultOption = {
    date: new Date(),
    selectedPrices: userDataPrices.length ? userDataPrices : [],
  };
  option = Object.assign({}, defaultOption, option);

  let currentDate = option.date;
  let originalPrices = [...option.selectedPrices];

  const container = document.getElementById("price-calendar");
  container.innerHTML = outerHTML();
  let daysData = getDaysData(currentDate, originalPrices);
  showCalendar(daysData);

  container.querySelector(".cal-prev").addEventListener("click", () => {
    const [monthName, year] = container
      .querySelector(".cal-date-label")
      .textContent.split(" ");
    const date = new Date(`${monthName} 1, ${year}`);
    date.setMonth(date.getMonth() - 1);
    currentDate = date;
    showCalendar(getDaysData(currentDate, originalPrices));
  });

  container.querySelector(".cal-next").addEventListener("click", () => {
    const [monthName, year] = container
      .querySelector(".cal-date-label")
      .textContent.split(" ");
    const date = new Date(`${monthName} 1, ${year}`);
    date.setMonth(date.getMonth() + 1);
    currentDate = date;
    showCalendar(getDaysData(currentDate, originalPrices));
  });

  container.addEventListener("change", (e) => {
    if (e.target.id === "cal-month-price") {
      let price = e.target.value;
      let reg = /^[1-9]\d*$/;
      if (!reg.test(price)) {
        e.target.value = "";
        e.target.focus();
        return;
      }
      container.querySelectorAll("#cal-set dd").forEach((ele) => {
        let defaultFlag = ele.getAttribute("data-default");
        if (defaultFlag === "true") {
          let priceSpan = ele.querySelector(".cal-price");
          if (priceSpan) priceSpan.textContent = "$" + price;
        }
      });
    }
  });

  container.addEventListener("click", (e) => {
    const dd = e.target.closest("dd");
    if (!dd) return;

    // Prevent editing if already in edit mode
    if (dd.querySelector(".cal-price-input")) return;

    const priceSpan = dd.querySelector(".cal-price");
    const currentValue = priceSpan
      ? priceSpan.textContent.replace("$", "").trim()
      : "";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "cal-price-input";
    input.value = currentValue;

    if (priceSpan) {
      priceSpan.replaceWith(input);
    } else {
      dd.appendChild(input);
    }

    input.focus();
    input.setSelectionRange(0, input.value.length);
  });

  container.addEventListener(
    "blur",
    (e) => {
      if (e.target.classList.contains("cal-price-input")) {
        let val = e.target.value;
        let reg = /^[1-9]\d*$/;
        if (!reg.test(val)) {
          e.target.value = "";
          e.target.focus();
          return;
        }

        const span = document.createElement("span");
        span.className = "cal-price";
        span.textContent = "$" + val;

        const dd = e.target.closest("dd");
        if (dd) {
          e.target.replaceWith(span);
          dd.setAttribute("data-default", false);
        }
      }
    },
    true
  );

  container.querySelector(".cal-save").addEventListener("click", (e) => {
    e.preventDefault();
    const [monthName, year] = container
      .querySelector(".cal-date-label")
      .textContent.split(" ");
    const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();

    const days = container.querySelectorAll("#cal-set dd");
    const result = [];

    days.forEach((dd) => {
      const day = dd.querySelector(".cal-day").textContent;
      const priceText = dd.querySelector(".cal-price")?.textContent || "";
      if (priceText.trim() !== "") {
        result.push({
          date: new Date(year, monthIndex, parseInt(day))
            .toISOString()
            .split("T")[0],
          price: priceText.replace("$", ""),
        });
      }
    });

    console.log("Selected Prices:", result);
  });

  container.querySelector(".cal-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    showCalendar(getDaysData(currentDate, originalPrices));
    container.querySelector("#cal-month-price").value = "";
    console.log("Changes discarded. Reset to original.");
  });

  function getFirstDay(date) {
    date.setDate(1);
    return date.getDay();
  }

  function getCountDays(date) {
    const temp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return temp.getDate();
  }

  function getDaysData(date, selectedPrices) {
    let firstDay = getFirstDay(date);
    let countDays = getCountDays(date);
    let year = date.getFullYear();
    let month = date.getMonth();

    let daysData = [];
    for (let i = 0; i < countDays; i++) {
      let day = i + 1;
      let isoDate = new Date(year, month, day).toISOString().split("T")[0];
      let match = selectedPrices.find((d) => d.date === isoDate);

      daysData.push({
        day,
        special: "",
        week: (i + firstDay) % 7,
        price: match ? match.price : "",
        default: match ? false : true,
      });
    }

    daysData.year = year;
    daysData.month = month + 1;
    return daysData;
  }

  function showCalendar(data) {
    const calSet = document.getElementById("cal-set");
    calSet.innerHTML = "";

    let calHTML = `<dd style="margin-left: ${
      70 * parseInt(data[0].week)
    }px" data-default="${data[0].default}">
            <span class="cal-day">${data[0].day}</span>
            <span class="cal-special">${data[0].special}</span>
            <span class="cal-price">${
              data[0].price ? "$" + data[0].price : ""
            }</span>
          </dd>`;

    for (let i = 1; i < data.length; i++) {
      calHTML += `<dd data-default="${data[i].default}">
              <span class="cal-day">${data[i].day}</span>
              <span class="cal-special">${data[i].special}</span>
              <span class="cal-price">${
                data[i].price ? "$" + data[i].price : ""
              }</span>
            </dd>`;
    }

    calSet.innerHTML = calHTML;

    const monthName = new Date(data.year, data.month - 1).toLocaleString(
      "default",
      { month: "long" }
    );
    document.querySelector(
      ".cal-date-label"
    ).textContent = `${monthName} ${data.year}`;
  }

  function outerHTML() {
    return `
        <div id="cal-set-ctn">
          <h2>
            <span class="cal-prev">&lt;</span>
            <span class="cal-date">
              <span class="cal-date-label"></span>
            </span>
            <span class="cal-next">&gt;</span>
          </h2>
          <div class="cal-setting">Set default price for this month <input type="text" id="cal-month-price"> dollars</div>
          <dl id="cal-set">
            <dt><strong>Sun</strong></dt>
            <dt>Mon</dt>
            <dt>Tue</dt>
            <dt>Wed</dt>
            <dt>Thu</dt>
            <dt>Fri</dt>
            <dt><strong>Sat</strong></dt>
          </dl>
          <div class="cal-buttons">
            <button class="cal-cancel">Cancel</button>
            <button class="cal-save">Confirm</button>
          </div>
        </div>`;
  }
}

// Initialize from HTML
priceCalendar({ date: new Date(2025, 1, 1) });
