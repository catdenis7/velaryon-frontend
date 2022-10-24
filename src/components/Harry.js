import harryPic from '../assets/images/harry.jpg';
// EJEMPLO DE COMPONENTE
export default function Patito () {
  return (
    <>
      <div className="my-3 text-center">
        <img src={harryPic} alt="Patito Pic" className="img-fluid" width="100"/>
      </div>
    </>
  )
}