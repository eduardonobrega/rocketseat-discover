import './style.css'

export function Card(prop) {
  return (
    <div className='card'>
      <strong>{prop.name}</strong>
      <small>{prop.time}</small>
    </div>
  )
}