export const formatTimeAgo = (isoDate) => {
  const date = new Date(isoDate)
  const now = new Date()

  const diffMs = now - date
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHr  = Math.floor(diffMin / 60)
  const diffDay = Math.floor(diffHr  / 24)

  // segundos
  if (diffSec < 60) return `hace ${diffSec} segundos`

  // minutos
  if (diffMin < 60) return `hace ${diffMin} minutos`

  // horas
  if (diffHr < 24) return `hace ${diffHr} horas`

  // días
  if (diffDay < 7) return `hace ${diffDay} días`

  // más de una semana → formato largo
  return date.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC" 
  })
}
