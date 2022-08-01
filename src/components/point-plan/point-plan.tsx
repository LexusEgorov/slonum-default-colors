import './styles/point-plan.css';

type PointPlanProps = {
  number: number;
  children: JSX.Element;
};

function PointPlan({number, children} : PointPlanProps) : JSX.Element {
  return (
    <div className="point-plan">
      <div className="circle">{number}</div>
      <div className="point-plan__text">{children}</div>
    </div>
  );
}

export default PointPlan;
