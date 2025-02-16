import "./card.css";

export default function Card({
  studentsAvatar,
  studentName,
  coursStudiing,
  studentStatus,
  bgActive,
  btnDivAtoms,
}) {
  return (
    <div className="cardTodo">
      <img src={studentsAvatar} alt="" />
      <div className="cardInfo">
        <h1>{studentName}</h1>
        <h3>{coursStudiing}</h3>
        <p style={{backgroundColor:bgActive,fontWeight:"700"}}>{studentStatus}</p>
      </div>
      <div className="btnDiv">{btnDivAtoms}</div>
    </div>
  );
}
