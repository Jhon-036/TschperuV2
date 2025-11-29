import { useRef } from "react"
import emailjs from '@emailjs/browser'

const FormContact = () => {
  const form = useRef()

  const onSubmitForm = (e) => {
    e.preventDefault()

    const name = form.current.user_name.value
    const email = form.current.user_email.value
    const tel = form.current.user_tel.value
    const ruc = form.current.user_ruc.value
    const message = form.current.user_message.value

    if (!name || !email || !tel || !ruc || !message) {
      alert("Por favor, completa todos los campos del formulario.")
      return
    }

    emailjs.sendForm('service_2q3oqzd', 'template_u61ysdo', form.current, '5TK6BL82z4t3V0ALk')
      .then(() => {
        alert("Mensaje enviado correctamente.")
        form.current.reset()
      })
      .catch(() => {
        alert("Error al enviar el mensaje, por favor intenta nuevamente.")
      })
  }

  return (
    <div className="rounded p-12 bg-[#f8f8f8] max-md:p-4">
      <h2 className="text-2xl text-center">Contáctanos</h2>
      <p className="text-lg pb-6 text-center">Completa el formulario y te responderemos a la brevedad.</p>

      <form ref={form} onSubmit={onSubmitForm} className="flex flex-col gap-6">

        <div className="flex flex-col">
          <label className="pb-2">Nombre :</label>
          <input 
            required
            name="user_name"
            type="text"
            placeholder="Tu nombre"
            className="border-1 border-[#25416840] focus:border-[#254168] outline-0 rounded px-2 py-1"
          />
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

        <div className="flex gap-12 max-md:gap-2 max-md:flex-wrap">
          <div className="flex flex-col w-full">
            <label className="pb-2">Teléfono :</label>
            <input 
              required
              name="user_tel"
              maxLength={9}
              pattern="\d{9}"
              type="text"
              placeholder="Tu número"
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "")}
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
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, "")}
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
          value='Enviar mensaje' 
          className="bg-[#f9bf21] text-[#254168] p-2 rounded cursor-pointer mt-2"
        />
      </form>
    </div>
  )
}

export default FormContact
