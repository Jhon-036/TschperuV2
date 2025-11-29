import { useRef } from "react"
import emailjs from "@emailjs/browser"
import { API_URL } from "../utils/ApiConfig"

const FormOrder = ({ closeModal, product }) => {
  const form = useRef(null)

  const onSubmitForm = async (e) => {
  e.preventDefault()

  if (!form.current) {
    alert("Error al cargar el formulario.")
    return
  }

  // Obtener datos del formulario
  const name = form.current.user_name.value
  const lastname = form.current.user_lastname.value
  const email = form.current.user_email.value
  const tel = form.current.user_tel.value
  const ruc = form.current.user_ruc.value
  const message = form.current.user_message.value

  // Validación
  if (!name || !lastname || !email || !tel || !ruc || !message) {
    alert("Por favor, completa todos los campos.")
    return
  }

  // Enviar correo con EmailJS
  emailjs
    .sendForm(
      "service_2q3oqzd",
      "template_6jijnyq",
      form.current,
      "5TK6BL82z4t3V0ALk"
    )
    .then(async () => {

      // Guardar la cotización en tu API
      await fetch(`${API_URL}orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          lastname,
          email,
          telefono: tel,
          rucodni: ruc,
          item: product.name,     // Cambia esto si quieres enviar el producto
        })
      })

      alert("Mensaje enviado y cotización registrada.")

      form.current.reset()

      closeModal()
    })
    .catch(() => {
      alert("Error al enviar el mensaje. Intenta más tarde.")
    })
}

  return (
    <form
      ref={form}
      onSubmit={onSubmitForm}
      className="flex flex-col gap-6"
    >
      <div className="flex gap-6 max-md:flex-wrap">
        <div className="flex flex-col w-full">
          <label className="pb-2">Nombre :</label>
          <input
            required
            name="user_name"
            type="text"
            placeholder="Tu nombre"
            className="border-1 border-[#25416840] focus:border-[#254168] outline-0 rounded px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="pb-2">Apellido :</label>
          <input
            required
            name="user_lastname"
            type="text"
            placeholder="Tu apellido"
            className="border-1 border-[#25416840] focus:border-[#254168] outline-0 rounded px-2 py-1"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="pb-2">Correo electrónico :</label>
        <input
          required
          name="user_email"
          type="email"
          placeholder="Tu@correo.com"
          className="border-1 border-[#25416840] focus:border-[#254168] outline-0 rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-6 max-md:flex-wrap">
        <div className="flex flex-col w-full">
          <label className="pb-2">Teléfono :</label>
          <input
            required
            name="user_tel"
            maxLength={9}
            pattern="\d{9}"
            type="text"
            placeholder="Tu número"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
            className="border-1 border-[#25416840] focus:border-[#254168] outline-0 rounded px-2 py-1"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="pb-2">RUC o DNI :</label>
          <input
            required
            name="user_ruc"
            maxLength={11}
            pattern="\d{11}"
            type="text"
            placeholder="Número RUC o DNI"
            onInput={(e) =>
              (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
            }
            className="border-1 border-[#25416840] focus:border-[#254168] outline-0 rounded px-2 py-1"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="pb-2">Mensaje :</label>
        <textarea
          required
          name="user_message"
          rows={3}
          placeholder="¿En qué podemos ayudarte?"
          className="border-1 border-[#25416840] focus:border-[#254168] resize-none outline-0 rounded px-2 py-1"
        ></textarea>
      </div>

      <input
        type="submit"
        value="Enviar mensaje"
        className="bg-[#254168] text-white p-2 rounded cursor-pointer mt-2"
      />
    </form>
  )
}

export default FormOrder
