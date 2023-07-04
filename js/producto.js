const { createApp } = Vue;
createApp({
  data() {
    console.log(this.productos);
    return {
      productos: [],
      //url: "http://127.0.0.1:5000/productos",
      // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
      url: "https://gonzalor.pythonanywhere.com/productos", // si ya lo subieron a pythonanywhere
      error: false,
      cargando: true,
      /*atributos para el guardar los valores del formulario */
      id: 0,
      nombre: "",
      imagen: "",
      stock: 0,
      precio: 0,
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.productos = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(id) {
      const url = this.url + "/" + id;

      swal({
        title: "¿Estás seguro?",
        text: "Esta acción no se puede deshacer",
        icon: "warning",
        buttons: ["Cancelar", "Eliminar"],
        dangerMode: true,
      }).then((confirm) => {
        if (confirm) {
          var options = {
            method: "DELETE",
          };
          fetch(url, options)
            .then((res) => res.text())
            .then((res) => {
              swal("Producto eliminado", "", "success");
              setTimeout(() => location.reload(), 3000);
            });
        }
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
          swal("Producto creado exitosamente", "", "success");
          setTimeout(() => (window.location.href = "./productos.html"), 3000);
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
