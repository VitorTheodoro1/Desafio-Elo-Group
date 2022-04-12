class LeadsController {
  get() {
    let list = localStorage.getItem("leads");

    if (list) {
      return JSON.parse(localStorage.getItem("leads"));
    } else {
      return [];
    }
  }

  add(leads) {
    window.localStorage.setItem(leads.name, JSON.stringify(leads));
  }
}

export { LeadsController };
