console.log(location.search); // lee los argumentos pasados a este formulario
var id = location.search.substr(4);
console.log(id);
const { createApp } = Vue;
createApp({
  data() {
    return {
      nombre: "",
      imagen: "",
      stock: 0,
      precio: 0,
      url: "https://gonzalor.pythonanywhere.com/productos",
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.nombre = data.nombre;
          this.imagen = data.imagen;
          this.stock = data.stock;
          this.precio = data.precio;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    grabar() {
      let producto = {
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
      };
      var options = {
        body: JSON.stringify(producto),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado");
          window.location.href = "./productos.html"; // recarga productos.html
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar"); // puedo mostrar el error tambien
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");
