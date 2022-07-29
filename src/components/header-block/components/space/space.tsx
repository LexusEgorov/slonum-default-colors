import './styles/space.css'

function Space() : JSX.Element {
  return (
    <div className="container">
      <div className="space fade-in">
        <img src="images/space.svg" alt="" width={864} height={693}/>
        <img src="images/space-elements/atom.svg" className='atom space__element' alt="" width={50} height={50}/>
        <img src="images/space-elements/elephant.svg" className='elephant space__element' alt="" width={115} height={90}/>
        <img src="images/space-elements/lamp.svg" className='lamp space__element' alt="" width={110} height={110}/>
        <img src="images/space-elements/clock.svg" className='clock space__element' alt="" width={65} height={90}/>
        <img src="images/space-elements/plane.svg" className='plane space__element' alt="" width={115} height={45}/>
        <img src="images/space-elements/rocket.svg" className='rocket space__element' alt="" width={170} height={140}/>
        <img src="images/space-elements/big-planet.svg" className='big-planet space__element' alt="" width={75} height={75}/>
        <img src="images/space-elements/striped-planet.svg" className='striped-planet space__element' alt="" width={50} height={50}/>
        <img src="images/space-elements/dark-planet.svg" className='dark-planet space__element' alt="" width={50} height={50}/>
        <img src="images/space-elements/division.svg" className='division space__element' alt="" width={35} height={40}/>
        <img src="images/space-elements/plus.svg" className='plus space__element' alt="" width={30} height={30}/>
        <img src="images/space-elements/baloon.svg" className='baloon space__element' alt="" width={70} height={100}/>
        <img src="images/space-elements/pallette.svg" className='pallette space__element' alt="" width={72} height={51}/>
      </div>
      <div className="pencil">
        <img src="images/pencil.svg" alt="" />
      </div>
      <div className="child">
        <img src="images/child.svg" alt="" width={276} height={331}/>
      </div>
    </div>
  )
};

export default Space;