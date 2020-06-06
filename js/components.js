Vue.component("sidebar", {
  data: function () {
    return {
      count: 0,
    }
  },
  template: `  
  <div class="fix container">
    <div id="nav-icon3" class="hamburger">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav>
      <a href="/index.html">HOME</a>
      <svg width="12" height="13" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.843 4.912L10.255.6l1.397 1.43L7.24 6.344l4.312 4.412-1.43 1.397L5.81 7.74l-4.412 4.312L0 10.622 4.412 6.31.1 1.898 1.53.5l4.313 4.412z"
          fill="#BB86FC" fill-rule="nonzero" />
      </svg>
      <a href="/projects.html">PROJECTS</a>
      <svg width="12" height="13" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.843 4.912L10.255.6l1.397 1.43L7.24 6.344l4.312 4.412-1.43 1.397L5.81 7.74l-4.412 4.312L0 10.622 4.412 6.31.1 1.898 1.53.5l4.313 4.412z"
          fill="#BB86FC" fill-rule="nonzero" />
      </svg>
      <a href="/contact.html">CONTACT</a>
    </nav>

    <div class="indicator"></div>
  </div>`,
})

new Vue({ el: "#sidebar" })


Vue.component("contact-from", {
  data() {
    return {
      a: 1,
    }
  },
  methods: {
    onSubmit: function () {
      alert("Not yet finished please go to the bottom of the home page to find wya to contact me")
    },
  },
  template: `  
  
  <div class="custom-container">
    <div class="inner-container">
      <div class="header">
        <div class="container">
          <h3>Contact me ☝️</h3>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col">
            <form action="submit" @submit.prevent="onSubmit" >
              <div class="wrapper">
                <label for="name">Your Name:</label>
                <input type="text" name="name" id="">
              </div>
              <div class="wrapper">
                <label for="email">Email:</label>
                <input type="email" name="email" id="">
              </div>
              <div class="wrapper">
                <label for="msg">Your Message:</label>
                <input type="textarea" name="msg" id="">
              </div>
              <input type="submit" value="submit">
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>`,
})

new Vue({ el: "#contactForm" })

// menu functionality
let hamburgerMenu = document.getElementById("nav-icon3")
let dropDownMenu = document.getElementById("mobile")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open")
  dropDownMenu.classList.toggle("is-opened")
})